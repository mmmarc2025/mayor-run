import * as THREE from '../vendor/three.module.min.js';

// ---------- constants ----------
const LANES = [-2.2, 0, 2.2];
const SPAWN_Z = -125;
const DESPAWN_Z = 14;
const START_SPEED = 13, MAX_SPEED = 34, ACCEL = 0.22;
const GRAVITY = -34, JUMP_V = 11.5, SLIDE_TIME = 0.75;
const FONT = '"Noto Sans TC","Noto Sans CJK TC","PingFang TC","Microsoft JhengHei",sans-serif';
const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && innerWidth < 900);
const rand = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[(Math.random() * arr.length) | 0];

// ---------- renderer / scene ----------
const canvas = document.getElementById('game');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: !isMobile, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
const scene = new THREE.Scene();
const FOG_COLOR = 0xd6ecf7;
scene.fog = new THREE.Fog(FOG_COLOR, 55, 135);
scene.background = (() => {
  const c = document.createElement('canvas'); c.width = 4; c.height = 256;
  const g = c.getContext('2d'); const gr = g.createLinearGradient(0, 0, 0, 256);
  gr.addColorStop(0, '#5fb2ec'); gr.addColorStop(0.55, '#a9d8f5'); gr.addColorStop(1, '#d6ecf7');
  g.fillStyle = gr; g.fillRect(0, 0, 4, 256);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
})();
const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200);
scene.add(new THREE.HemisphereLight(0xffffff, 0x7d8f6a, 1.6));
const sun = new THREE.DirectionalLight(0xfff4e0, 1.6); sun.position.set(6, 12, 5); scene.add(sun);

const matCache = {};
function lam(color, extra) {
  const k = color + JSON.stringify(extra || {});
  if (!matCache[k]) matCache[k] = new THREE.MeshLambertMaterial(Object.assign({ color }, extra || {}));
  return matCache[k];
}
function mesh(geo, mat, x = 0, y = 0, z = 0, parent) {
  const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); if (parent) parent.add(m); return m;
}
function textTexture(lines, w, h, bg, fg, opts = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  t.userData.draw = (ls, b = bg, f = fg) => {
    const g = c.getContext('2d');
    g.fillStyle = b; g.fillRect(0, 0, w, h);
    if (opts.border) { g.strokeStyle = opts.border; g.lineWidth = h * 0.08; g.strokeRect(h * .04, h * .04, w - h * .08, h - h * .08); }
    g.fillStyle = f; g.textAlign = 'center'; g.textBaseline = 'middle';
    const n = ls.length;
    ls.forEach((s, i) => {
      const size = (opts.size || 0.62) * h / n;
      g.font = `900 ${size}px ${FONT}`;
      g.fillText(s, w / 2, h * (i + 0.5) / n, w * 0.92);
    });
    t.needsUpdate = true;
  };
  t.userData.draw(lines);
  return t;
}

const dummy = new THREE.Object3D();
// ---------- ground / road / track ----------
function canvasTex(w, h, draw, rx = 1, ry = 1) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, ry); t.anisotropy = 8; return t;
}
const ROAD_LEN = 300, ROAD_Z = -ROAD_LEN / 2 + 20;
const roadTex = canvasTex(256, 256, (g, w, h) => {
  g.fillStyle = '#5b5f66'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 400; i++) { g.fillStyle = `rgba(${Math.random() < .5 ? '255,255,255' : '0,0,0'},0.06)`; g.fillRect(Math.random() * w, Math.random() * h, 3, 3); }
  // lane dividers at 1/3 and 2/3 (dashed)
  g.fillStyle = '#f2f2f2';
  [w / 3, 2 * w / 3].forEach(x => { g.fillRect(x - 3, 0, 6, h * 0.5); });
  // edge lines
  g.fillStyle = '#f5c242'; g.fillRect(4, 0, 6, h); g.fillRect(w - 10, 0, 6, h);
}, 1, ROAD_LEN / 8);
const road = mesh(new THREE.PlaneGeometry(6.8, ROAD_LEN), new THREE.MeshLambertMaterial({ map: roadTex }), 0, 0.01, ROAD_Z, scene);
road.rotation.x = -Math.PI / 2;

const sideTex = canvasTex(64, 64, (g, w, h) => {
  g.fillStyle = '#d8c7a8'; g.fillRect(0, 0, w, h);
  g.strokeStyle = '#b9a688'; g.lineWidth = 2;
  for (let i = 0; i <= 2; i++) { g.beginPath(); g.moveTo(0, i * 32); g.lineTo(w, i * 32); g.stroke(); g.beginPath(); g.moveTo(i * 32, 0); g.lineTo(i * 32, h); g.stroke(); }
}, 4, ROAD_LEN / 2);
// sidewalks both sides
const sideR = mesh(new THREE.PlaneGeometry(4.5, ROAD_LEN), new THREE.MeshLambertMaterial({ map: sideTex }), 5.65, 0.06, ROAD_Z, scene); sideR.rotation.x = -Math.PI / 2;
const sideL = mesh(new THREE.PlaneGeometry(4.5, ROAD_LEN), new THREE.MeshLambertMaterial({ map: sideTex }), -5.65, 0.06, ROAD_Z, scene); sideL.rotation.x = -Math.PI / 2;
const base = mesh(new THREE.PlaneGeometry(120, ROAD_LEN), lam(0x7fb35a), 0, -0.01, ROAD_Z, scene); base.rotation.x = -Math.PI / 2;
const curbGeo = new THREE.BoxGeometry(0.25, 0.18, ROAD_LEN);
mesh(curbGeo, lam(0xe9e4da), 3.45, 0.09, ROAD_Z, scene);
mesh(curbGeo, lam(0xe9e4da), -3.45, 0.09, ROAD_Z, scene);
const scrollTex = [[roadTex, 8], [sideTex, 2]];

// ---------- the 聯外軌道 track: snakes between the three lanes (instanced, follows trackX(d)) ----------
let W = 0; // total world distance scrolled (d = W - z)
const trackSegs = [];
function extendTrack(toD) {
  while (!trackSegs.length || trackSegs[trackSegs.length - 1].d1 < toD) {
    const last = trackSegs[trackSegs.length - 1];
    if (!last) { trackSegs.push({ d0: -60, d1: 45, x0: LANES[1], x1: LANES[1], lane: 1 }); continue; }
    if (last.x0 !== last.x1 || Math.random() < 0.12) {
      const len = rand(20, 42);
      trackSegs.push({ d0: last.d1, d1: last.d1 + len, x0: last.x1, x1: last.x1, lane: last.lane });
    } else {
      let nl = last.lane + (Math.random() < 0.5 ? -1 : 1);
      if (nl < 0 || nl > 2) nl = 1;
      if ((last.lane === 0 || last.lane === 2) && Math.random() < 0.3) nl = 2 - last.lane;
      const len = Math.abs(nl - last.lane) * 12 + 6;
      trackSegs.push({ d0: last.d1, d1: last.d1 + len, x0: last.x1, x1: LANES[nl], lane: nl });
    }
  }
  while (trackSegs.length > 2 && trackSegs[1].d1 < W - 40) trackSegs.shift();
}
function trackX(d) {
  for (const sg of trackSegs) if (d <= sg.d1) {
    if (d < sg.d0) return sg.x0;
    const k = (d - sg.d0) / (sg.d1 - sg.d0); return sg.x0 + (sg.x1 - sg.x0) * k * k * (3 - 2 * k);
  }
  return trackSegs[trackSegs.length - 1].x1;
}
const TIE_STEP = 1.2, N_TIE = 125;
const bedIM = new THREE.InstancedMesh(new THREE.BoxGeometry(2.3, 0.06, TIE_STEP + 0.05), lam(0x9c8f7c), N_TIE);
const tieIM = new THREE.InstancedMesh(new THREE.BoxGeometry(2.0, 0.08, 0.3), lam(0x5a4030), N_TIE);
const railIM = new THREE.InstancedMesh(new THREE.BoxGeometry(0.12, 0.14, TIE_STEP + 0.06), new THREE.MeshLambertMaterial({ color: 0xdfe4ea, emissive: 0x555555 }), N_TIE * 2);
[bedIM, tieIM, railIM].forEach(m => { m.frustumCulled = false; scene.add(m); });
function updateTrack() {
  extendTrack(W + 170);
  const k0 = Math.floor((W - 14) / TIE_STEP);
  for (let i = 0; i < N_TIE; i++) {
    const d = (k0 + i) * TIE_STEP, z = W - d, x = trackX(d);
    const th = -Math.atan2(trackX(d + 0.6) - trackX(d - 0.6), 1.2);
    const cx = Math.cos(th), sx = -Math.sin(th);
    dummy.rotation.set(0, th, 0); dummy.scale.set(1, 1, 1);
    dummy.position.set(x, 0.04, z); dummy.updateMatrix(); bedIM.setMatrixAt(i, dummy.matrix);
    dummy.position.set(x, 0.09, z); dummy.updateMatrix(); tieIM.setMatrixAt(i, dummy.matrix);
    dummy.position.set(x - 0.62 * cx, 0.16, z - 0.62 * sx); dummy.updateMatrix(); railIM.setMatrixAt(i * 2, dummy.matrix);
    dummy.position.set(x + 0.62 * cx, 0.16, z + 0.62 * sx); dummy.updateMatrix(); railIM.setMatrixAt(i * 2 + 1, dummy.matrix);
  }
  dummy.rotation.set(0, 0, 0);
  bedIM.instanceMatrix.needsUpdate = tieIM.instanceMatrix.needsUpdate = railIM.instanceMatrix.needsUpdate = true;
}

// ---------- instanced scenery ----------
const SCEN_SPAN = 240;
// buildings
const winTex = canvasTex(128, 256, (g, w, h) => {
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, w, h);
  for (let y = 0; y < 4; y++) for (let x = 0; x < 2; x++) {
    g.fillStyle = '#3d5a73'; g.fillRect(14 + x * 60, 16 + y * 60, 40, 38);
    g.fillStyle = 'rgba(255,255,255,.35)'; g.fillRect(14 + x * 60, 16 + y * 60, 40, 8);
  }
  g.fillStyle = '#d9d0c0'; g.fillRect(0, h - 6, w, 6);
});
const BCOLORS = [0xf2e3c6, 0xe8b9a0, 0xc9dbe8, 0xf5d77a, 0xe0e0d8, 0xb8d8b0, 0xf0c9c9, 0xd9c2a3, 0xa7c4d9, 0xfff1d6];
const N_BLD = 44;
const bldIM = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0), new THREE.MeshLambertMaterial({ map: winTex }), N_BLD);
const bldData = [];
const roofIM = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 0.35, 1), lam(0x8a5a44), N_BLD);
for (let i = 0; i < N_BLD; i++) {
  const side = i % 2 ? 1 : -1;
  const d = { side, z: -(i >> 1) * (SCEN_SPAN / (N_BLD / 2)) + 10 };
  randomizeBld(d); bldData.push(d); bldIM.setColorAt(i, new THREE.Color(d.color)); roofIM.setColorAt(i, new THREE.Color(d.roof));
}
function randomizeBld(d) {
  d.w = rand(5, 9); d.h = rand(5, 14); d.dp = rand(5, 8);
  d.x = d.side < 0 ? -8.5 - d.dp / 2 + rand(-0.5, 0.5) : 8.5 + d.dp / 2 + rand(-0.5, 0.5);
  d.color = pick(BCOLORS); d.roof = pick([0x8a5a44, 0x5d6d7e, 0xa0522d, 0x6b8e5a]);
}
scene.add(bldIM, roofIM);
// trees
const N_TREE = 36;
const trunkIM = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.15, 0.2, 1.6, 6).translate(0, 0.8, 0), lam(0x7a5236), N_TREE);
const crownIM = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1.1, 0), new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true }), N_TREE);
const treeData = [];
for (let i = 0; i < N_TREE; i++) {
  const side = i % 2 ? 1 : -1;
  treeData.push({ x: side > 0 ? 6.6 : -6.6, z: -(i >> 1) * (SCEN_SPAN / (N_TREE / 2)) + 4, s: rand(0.85, 1.25) });
  crownIM.setColorAt(i, new THREE.Color(pick([0x3f8f3a, 0x4fa34a, 0x2f7a3a, 0x5aaa3a])));
}
scene.add(trunkIM, crownIM);
// street lamps on right
const N_LAMP = 10;
const lampIM = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.07, 0.09, 4.2, 6).translate(0, 2.1, 0), lam(0x4a5560), N_LAMP);
const lampHeadIM = new THREE.InstancedMesh(new THREE.BoxGeometry(0.9, 0.15, 0.3), lam(0xfff3c4, { emissive: 0x665f40 }), N_LAMP);
const lampData = [];
for (let i = 0; i < N_LAMP; i++) lampData.push({ z: -i * (SCEN_SPAN / N_LAMP) - 9, s: i % 2 ? 1 : -1 });
scene.add(lampIM, lampHeadIM);

// shop signs (vertical Taiwanese style)
const SIGN_TEXTS = ['雞肉飯', '火雞肉飯', '嘉義', '方塊酥', '涼麵', '砂鍋魚頭', '豆花', '木瓜牛奶', '文化路', '鵝肉', '粿仔湯', '噴水'];
const SIGN_COLORS = [['#c0392b', '#fff'], ['#f39c12', '#fff'], ['#2e86c1', '#fff'], ['#ffffff', '#c0392b'], ['#27ae60', '#fff'], ['#8e44ad', '#fff']];
const signs = [];
for (let i = 0; i < 10; i++) {
  const c = pick(SIGN_COLORS);
  const txt = SIGN_TEXTS[i % SIGN_TEXTS.length];
  const tex = textTexture(txt.split(''), 64, 64 * txt.length, c[0], c[1], { size: 0.8 * txt.length > 3 ? 0.75 : 0.8 });
  const m = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.75 * txt.length, 0.9), [lam(0x333333), lam(0x333333), lam(0x333333), lam(0x333333),
    new THREE.MeshLambertMaterial({ map: tex }), new THREE.MeshLambertMaterial({ map: tex })]);
  const side = i % 2 ? 1 : -1;
  m.rotation.y = side < 0 ? 0 : 0;
  // face the road: box thin in x, text on +z/-z faces -> rotate so faces point toward road (x axis)
  m.rotation.y = Math.PI / 2;
  m.userData = { side, z: -i * 24 - 6 };
  m.position.set(side < 0 ? -8.2 : 8.2, 3.2 + rand(0, 1.5), m.userData.z);
  scene.add(m); signs.push(m);
}

function updateScenery(dz) {
  for (let i = 0; i < N_BLD; i++) {
    const d = bldData[i]; d.z += dz;
    if (d.z > DESPAWN_Z + 10) { d.z -= SCEN_SPAN; randomizeBld(d); bldIM.setColorAt(i, new THREE.Color(d.color)); roofIM.setColorAt(i, new THREE.Color(d.roof)); bldIM.instanceColor.needsUpdate = true; roofIM.instanceColor.needsUpdate = true; }
    dummy.position.set(d.x, 0, d.z); dummy.scale.set(d.dp, d.h, d.w); dummy.rotation.set(0, 0, 0); dummy.updateMatrix(); bldIM.setMatrixAt(i, dummy.matrix);
    dummy.position.set(d.x, d.h + 0.17, d.z); dummy.scale.set(d.dp + 0.3, 1, d.w + 0.3); dummy.updateMatrix(); roofIM.setMatrixAt(i, dummy.matrix);
  }
  bldIM.instanceMatrix.needsUpdate = roofIM.instanceMatrix.needsUpdate = true;
  for (let i = 0; i < N_TREE; i++) {
    const d = treeData[i]; d.z += dz; if (d.z > DESPAWN_Z) d.z -= SCEN_SPAN;
    dummy.scale.set(d.s, d.s, d.s); dummy.position.set(d.x, 0, d.z); dummy.updateMatrix(); trunkIM.setMatrixAt(i, dummy.matrix);
    dummy.position.set(d.x, 2.1 * d.s, d.z); dummy.updateMatrix(); crownIM.setMatrixAt(i, dummy.matrix);
  }
  trunkIM.instanceMatrix.needsUpdate = crownIM.instanceMatrix.needsUpdate = true;
  dummy.scale.set(1, 1, 1);
  for (let i = 0; i < N_LAMP; i++) {
    const d = lampData[i]; d.z += dz; if (d.z > DESPAWN_Z) d.z -= SCEN_SPAN;
    dummy.position.set(3.9 * d.s, 0, d.z); dummy.updateMatrix(); lampIM.setMatrixAt(i, dummy.matrix);
    dummy.position.set(3.55 * d.s, 4.2, d.z); dummy.updateMatrix(); lampHeadIM.setMatrixAt(i, dummy.matrix);
  }
  lampIM.instanceMatrix.needsUpdate = lampHeadIM.instanceMatrix.needsUpdate = true;
  for (const s of signs) { s.position.z += dz; if (s.position.z > DESPAWN_Z) s.position.z -= SCEN_SPAN; }
}

// ---------- the mayor (chibi) ----------
function makeMayor() {
  const root = new THREE.Group();
  const pose = new THREE.Group(); root.add(pose);
  const skin = lam(0xf7d2b6), hairM = new THREE.MeshLambertMaterial({ color: 0x4a2a1a, side: THREE.DoubleSide });
  const jacket = lam(0x2563c9), jacketD = lam(0x1b4a99), trim = lam(0xf6efd9), pantsM = lam(0x23283a), shoeM = lam(0x1a1a1a);
  const S = 1.0;
  // legs
  const legs = [];
  [-0.13, 0.13].forEach(x => {
    const hip = new THREE.Group(); hip.position.set(x, 0.55, 0); pose.add(hip);
    mesh(new THREE.CylinderGeometry(0.085, 0.075, 0.46, 8), pantsM, 0, -0.25, 0, hip);
    mesh(new THREE.BoxGeometry(0.15, 0.09, 0.24), shoeM, 0, -0.5, 0.04, hip);
    legs.push(hip);
  });
  // torso (blue jacket, qipao-style)
  const torso = new THREE.Group(); torso.position.y = 0.55; pose.add(torso);
  mesh(new THREE.CylinderGeometry(0.23, 0.31, 0.58, 14), jacket, 0, 0.29, 0, torso);
  mesh(new THREE.CylinderGeometry(0.315, 0.33, 0.08, 14), jacketD, 0, 0.02, 0, torso);
  // mandarin collar
  mesh(new THREE.CylinderGeometry(0.12, 0.135, 0.1, 14), trim, 0, 0.62, 0, torso);
  // diagonal placket trim (qipao-style) and frog buttons
  const plk = mesh(new THREE.BoxGeometry(0.035, 0.32, 0.02), trim, 0.08, 0.45, 0.255, torso); plk.rotation.z = -0.9; plk.rotation.x = -0.12;
  const plk2 = mesh(new THREE.BoxGeometry(0.03, 0.4, 0.02), trim, 0.17, 0.22, 0.29, torso); plk2.rotation.x = -0.14;
  [0.42, 0.3, 0.18].forEach((y, i) => mesh(new THREE.BoxGeometry(0.1, 0.03, 0.03), trim, 0.17, y, 0.29 - i * 0.008, torso));
  // arms
  const arms = [];
  [-1, 1].forEach(s => {
    const sh = new THREE.Group(); sh.position.set(s * 0.29, 0.52, 0); torso.add(sh);
    const sl = mesh(new THREE.CylinderGeometry(0.075, 0.095, 0.38, 8), jacket, 0, -0.18, 0, sh);
    mesh(new THREE.CylinderGeometry(0.098, 0.098, 0.05, 8), trim, 0, -0.37, 0, sh);
    mesh(new THREE.SphereGeometry(0.07, 8, 6), skin, 0, -0.43, 0, sh);
    sh.rotation.z = s * 0.18;
    arms.push(sh);
  });
  // head
  const head = new THREE.Group(); head.position.y = 1.2; torso.add(head); head.position.y = 0.66;
  mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.1, 8), skin, 0, 0.03, 0, head);
  const HC = 0.38; // head center y
  const face = mesh(new THREE.SphereGeometry(0.36, 20, 16), skin, 0, HC, 0, head); face.scale.set(1.0, 0.95, 0.95);
  // hair: top cap (incl. bangs) + bob shell open at front
  const cap = mesh(new THREE.SphereGeometry(0.39, 24, 12, 0, Math.PI * 2, 0, Math.PI * 0.4), hairM, 0, HC + 0.01, 0, head);
  cap.scale.set(1.03, 1, 1.0);
  const open = 1.15; // half-angle of face opening
  const bob = mesh(new THREE.SphereGeometry(0.405, 24, 14, Math.PI / 2 + open, Math.PI * 2 - open * 2, 0.25, Math.PI * 0.6), hairM, 0, HC, 0, head);
  bob.scale.set(1.1, 1.0, 1.05);
  // side-swept bang
  const bang = mesh(new THREE.SphereGeometry(0.16, 10, 8), hairM, -0.13, HC + 0.2, 0.27, head); bang.scale.set(1.5, 0.55, 0.6); bang.rotation.z = -0.35;
  // eyes
  const eyeM = lam(0x2a1a12), white = lam(0xffffff, { emissive: 0x888888 });
  [-0.12, 0.12].forEach(x => {
    const e = mesh(new THREE.SphereGeometry(0.048, 10, 8), eyeM, x, HC - 0.02, 0.325, head); e.scale.set(0.9, 1.15, 0.5);
    mesh(new THREE.SphereGeometry(0.015, 6, 4), white, x + 0.015, HC + 0.005, 0.348, head);
    // happy eyebrow
    const br = mesh(new THREE.BoxGeometry(0.075, 0.011, 0.01), lam(0x6b4030), x, HC + 0.085, 0.335, head); br.rotation.z = x < 0 ? -0.12 : 0.12;
  });
  const smile = mesh(new THREE.TorusGeometry(0.065, 0.016, 6, 14, Math.PI), lam(0xc0392b), 0, HC - 0.12, 0.315, head);
  smile.rotation.z = Math.PI;
  const blushM = new THREE.MeshBasicMaterial({ color: 0xff8f9a, transparent: true, opacity: 0.55, depthWrite: false });
  [-0.22, 0.22].forEach(x => { const b = mesh(new THREE.CircleGeometry(0.05, 12), blushM, x, HC - 0.09, 0.285, head); b.rotation.y = x * 2.2; });
  // pearl earrings
  [-1, 1].forEach(s => mesh(new THREE.SphereGeometry(0.025, 6, 4), lam(0xffffff), s * 0.35, HC - 0.13, 0.03, head));
  // blob shadow
  const sh = mesh(new THREE.CircleGeometry(0.45, 16), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false }), 0, 0.03, 0);
  sh.rotation.x = -Math.PI / 2;
  root.scale.setScalar(S);
  return { root, pose, legs, arms, torso, head, shadow: sh };
}
const mayor = makeMayor();
scene.add(mayor.root, mayor.shadow);

// ---------- road vehicles ----------
const glassM = lam(0x1d2a38, { emissive: 0x0a1018 }), tireM = lam(0x1a1a1a), hlM = lam(0xffffcc, { emissive: 0xfff3a0 }), sigM = lam(0xffa000, { emissive: 0xff8800 });
const wheelGeo = new THREE.CylinderGeometry(0.34, 0.34, 0.26, 12).rotateZ(Math.PI / 2);
const CAR_COLORS = [0xd63031, 0xf5f6fa, 0x2d3436, 0x0984e3, 0xb2bec3, 0x6c5ce7, 0x00b894, 0xe17055, 0xfdcb6e];
function addWheels(g, xs, zs, r = 1) { for (const x of xs) for (const z of zs) mesh(wheelGeo, tireM, x, 0.34 * r, z, g).scale.setScalar(r); }
function addSignals(g, hx, zf, y = 0.75) {
  g.userData.signals = [-1, 1].map(s => { const m = mesh(new THREE.BoxGeometry(0.16, 0.14, 0.14), sigM, s * hx, y, zf, g); m.visible = false; return m; });
}
function faceTex(tex, side) { const m = new THREE.MeshLambertMaterial({ map: tex }); return [side, side, side, side, m, m]; }
function makeCar(taxi) {
  const g = new THREE.Group();
  const body = taxi ? lam(0xffd31a) : new THREE.MeshLambertMaterial({ color: pick(CAR_COLORS) });
  mesh(new THREE.BoxGeometry(1.8, 0.62, 4.2), body, 0, 0.64, 0, g);
  mesh(new THREE.BoxGeometry(1.62, 0.6, 2.2), glassM, 0, 1.25, -0.2, g);
  mesh(new THREE.BoxGeometry(1.66, 0.09, 2.05), body, 0, 1.58, -0.22, g);
  [-0.6, 0.6].forEach(x => mesh(new THREE.BoxGeometry(0.42, 0.16, 0.06), hlM, x, 0.74, 2.11, g));
  mesh(new THREE.BoxGeometry(0.6, 0.16, 0.04), lam(0xffffff), 0, 0.46, 2.12, g);
  mesh(new THREE.BoxGeometry(1.82, 0.12, 0.12), lam(0x333333), 0, 0.36, 2.1, g);
  addWheels(g, [-0.85, 0.85], [-1.35, 1.35]);
  if (taxi) {
    const t = textTexture(['計程車'], 128, 48, '#ffffff', '#c0392b', { size: 0.8 });
    mesh(new THREE.BoxGeometry(0.85, 0.3, 0.4), faceTex(t, lam(0xffffff)), 0, 1.78, -0.3, g);
  }
  addSignals(g, 0.92, 2.0);
  if (!taxi) g.userData.bodyMat = body;
  return g;
}
function makeScooter() {
  const g = new THREE.Group();
  const c = new THREE.MeshLambertMaterial({ color: pick(CAR_COLORS) });
  mesh(new THREE.BoxGeometry(0.42, 0.42, 1.5), c, 0, 0.5, 0, g);
  mesh(new THREE.BoxGeometry(0.38, 0.16, 0.7), lam(0x222222), 0, 0.78, -0.25, g);
  mesh(new THREE.BoxGeometry(0.36, 0.75, 0.14), c, 0, 0.85, 0.66, g);
  mesh(new THREE.BoxGeometry(0.75, 0.06, 0.06), lam(0x333333), 0, 1.22, 0.55, g);
  mesh(new THREE.BoxGeometry(0.2, 0.14, 0.06), hlM, 0, 1.08, 0.74, g);
  mesh(wheelGeo, tireM, 0, 0.25, 0.6, g).scale.set(0.6, 0.72, 0.72);
  mesh(wheelGeo, tireM, 0, 0.25, -0.55, g).scale.set(0.6, 0.72, 0.72);
  const shirt = new THREE.MeshLambertMaterial({ color: pick([0x74b9ff, 0xfab1a0, 0x55efc4, 0xffeaa7, 0xa29bfe, 0xffffff]) });
  mesh(new THREE.BoxGeometry(0.46, 0.6, 0.3), shirt, 0, 1.2, -0.12, g).rotation.x = 0.2;
  [-0.2, 0.2].forEach(x => { const a = mesh(new THREE.BoxGeometry(0.11, 0.11, 0.55), shirt, x, 1.3, 0.22, g); a.rotation.x = 0.35; });
  [-0.13, 0.13].forEach(x => mesh(new THREE.BoxGeometry(0.15, 0.15, 0.55), lam(0x34495e), x, 0.9, 0.1, g));
  const helm = new THREE.MeshLambertMaterial({ color: pick([0xe84393, 0xffffff, 0x0984e3, 0xd63031, 0xfdcb6e, 0x2d3436]) });
  mesh(new THREE.SphereGeometry(0.21, 12, 10), helm, 0, 1.7, -0.08, g);
  mesh(new THREE.BoxGeometry(0.3, 0.12, 0.05), glassM, 0, 1.68, 0.12, g);
  addSignals(g, 0.3, 0.7, 1.15);
  return g;
}
function makeBus() {
  const g = new THREE.Group();
  const white = lam(0xf7f7f2), blue = lam(0x1e5fb4);
  mesh(new THREE.BoxGeometry(2.4, 2.8, 11), white, 0, 1.75, 0, g);
  mesh(new THREE.BoxGeometry(2.42, 0.55, 11.02), blue, 0, 0.75, 0, g);
  mesh(new THREE.BoxGeometry(2.44, 0.9, 9.6), glassM, 0, 2.2, -0.4, g);
  mesh(new THREE.BoxGeometry(2.2, 1.35, 0.06), glassM, 0, 2.0, 5.51, g);
  const dest = textTexture(['嘉義市公車'], 320, 56, '#111', '#ffb020', { size: 0.8 });
  mesh(new THREE.PlaneGeometry(2.0, 0.35), new THREE.MeshBasicMaterial({ map: dest }), 0, 2.93, 5.52, g);
  [-0.85, 0.85].forEach(x => mesh(new THREE.BoxGeometry(0.4, 0.2, 0.06), hlM, x, 0.95, 5.52, g));
  addWheels(g, [-1.1, 1.1], [-3.6, 3.6], 1.4);
  addSignals(g, 1.22, 5.4, 1.1);
  return g;
}
function makeTruck() {
  const g = new THREE.Group();
  const cab = new THREE.MeshLambertMaterial({ color: pick([0x2e86de, 0x10ac84, 0xee5253, 0xf5f6fa]) });
  g.userData.bodyMat = cab;
  mesh(new THREE.BoxGeometry(2.2, 2.0, 1.9), cab, 0, 1.35, 3.25, g);
  mesh(new THREE.BoxGeometry(2.0, 0.8, 0.06), glassM, 0, 1.8, 4.21, g);
  [-0.8, 0.8].forEach(x => mesh(new THREE.BoxGeometry(0.36, 0.2, 0.06), hlM, x, 0.75, 4.21, g));
  const cargoTex = textTexture(['嘉義冷凍物流'], 384, 128, '#ffffff', '#1e5fb4', { size: 0.5 });
  mesh(new THREE.BoxGeometry(2.3, 2.6, 5.6), faceTex(cargoTex, lam(0xffffff)), 0, 1.9, -0.6, g);
  mesh(new THREE.BoxGeometry(1.8, 0.3, 7.5), lam(0x333333), 0, 0.45, 0.4, g);
  addWheels(g, [-1.0, 1.0], [3.1, -1.8, -2.9], 1.25);
  addSignals(g, 1.12, 4.1, 0.9);
  return g;
}

// ---------- obstacles ----------
function makeCone() {
  const g = new THREE.Group();
  mesh(new THREE.ConeGeometry(0.32, 0.8, 10), lam(0xff6a13), 0, 0.45, 0, g);
  mesh(new THREE.CylinderGeometry(0.2, 0.25, 0.12, 10), lam(0xffffff), 0, 0.42, 0, g);
  mesh(new THREE.BoxGeometry(0.75, 0.06, 0.75), lam(0xff6a13), 0, 0.03, 0, g);
  return g;
}
const stripeTex = canvasTex(256, 64, (g, w, h) => {
  g.fillStyle = '#fff'; g.fillRect(0, 0, w, h);
  g.fillStyle = '#e03131'; for (let x = -64; x < w + 64; x += 64) { g.beginPath(); g.moveTo(x, h); g.lineTo(x + 32, h); g.lineTo(x + 64, 0); g.lineTo(x + 32, 0); g.fill(); }
});
const barrierTex = textTexture(['道路施工'], 256, 64, '#e03131', '#ffffff', { size: 0.75 });
function makeBarrier() {
  const g = new THREE.Group();
  const top = new THREE.MeshLambertMaterial({ map: stripeTex });
  mesh(new THREE.BoxGeometry(1.9, 0.32, 0.12), top, 0, 0.82, 0, g);
  mesh(new THREE.BoxGeometry(1.9, 0.28, 0.1), [lam(0xe03131), lam(0xe03131), lam(0xe03131), lam(0xe03131), new THREE.MeshLambertMaterial({ map: barrierTex }), new THREE.MeshLambertMaterial({ map: barrierTex })], 0, 0.45, 0, g);
  [-0.85, 0.85].forEach(x => { mesh(new THREE.BoxGeometry(0.08, 1.0, 0.08), lam(0xdddddd), x, 0.5, 0, g); mesh(new THREE.BoxGeometry(0.1, 0.06, 0.6), lam(0x555555), x, 0.03, 0, g); });
  const l = mesh(new THREE.SphereGeometry(0.08, 8, 6), lam(0xffb000, { emissive: 0xffa000 }), 0.7, 1.05, 0, g);
  g.userData.blink = l;
  return g;
}
const overTex = textTexture(['聯外軌道路口', '請注意'], 512, 160, '#1e8a5a', '#ffffff', { size: 0.72, border: '#ffffff' });
function makeOverhead() {
  const g = new THREE.Group();
  const post = lam(0x8a939c);
  [-1.05, 1.05].forEach(x => mesh(new THREE.BoxGeometry(0.12, 2.4, 0.12), post, x, 1.2, 0, g));
  mesh(new THREE.BoxGeometry(2.25, 0.7, 0.14), [post, post, post, post, new THREE.MeshLambertMaterial({ map: overTex }), new THREE.MeshLambertMaterial({ map: overTex })], 0, 1.85, 0, g);
  mesh(new THREE.BoxGeometry(2.25, 0.1, 0.1), lam(0xf5c242), 0, 1.45, 0, g);
  return g;
}
const OB_DEF = {
  cone: { make: makeCone, hx: 0.36, hz: 0.36, y0: 0, y1: 0.85, n: 10 },
  barrier: { make: makeBarrier, hx: 0.95, hz: 0.2, y0: 0, y1: 1.0, n: 8 },
  overhead: { make: makeOverhead, hx: 1.05, hz: 0.15, y0: 1.2, y1: 3, n: 8 },
  car: { make: () => makeCar(false), hx: 0.9, hz: 2.15, y0: 0, y1: 3.5, n: 8, veh: true },
  taxi: { make: () => makeCar(true), hx: 0.9, hz: 2.15, y0: 0, y1: 3.5, n: 4, veh: true },
  scooter: { make: makeScooter, hx: 0.38, hz: 0.8, y0: 0, y1: 3.5, n: 6, veh: true },
  bus: { make: makeBus, hx: 1.2, hz: 5.5, y0: 0, y1: 3.5, n: 3, veh: true },
  truck: { make: makeTruck, hx: 1.15, hz: 3.9, y0: 0, y1: 3.5, n: 3, veh: true },
};
const pools = {};
const active = [];
for (const k in OB_DEF) {
  pools[k] = [];
  for (let i = 0; i < OB_DEF[k].n; i++) { const o = OB_DEF[k].make(); o.visible = false; o.userData.kind = k; scene.add(o); pools[k].push(o); }
}
function spawnOb(kind, lane, z, extra = {}) {
  const o = pools[kind].find(p => !p.visible);
  if (!o) return null;
  o.visible = true;
  o.position.set(LANES[extra.fromLane ?? lane], 0, z);
  o.rotation.set(0, 0, 0);
  Object.assign(o.userData, { lane, vz: 0, fromLane: null, targetLane: lane, cut: false }, extra);
  if (o.userData.bodyMat) o.userData.bodyMat.color.setHex(pick(CAR_COLORS));
  if (o.userData.signals) o.userData.signals.forEach(m => m.visible = false);
  active.push(o);
  return o;
}

// ---------- coins (instanced) + chicken rice bowls ----------
const N_COIN = 160;
const coinGeo = new THREE.CylinderGeometry(0.34, 0.34, 0.08, 18).rotateX(Math.PI / 2);
const coinIM = new THREE.InstancedMesh(coinGeo, new THREE.MeshLambertMaterial({ color: 0xffc81e, emissive: 0x7a5200 }), N_COIN);
coinIM.frustumCulled = false;
const coins = [];
for (let i = 0; i < N_COIN; i++) coins.push({ on: false, x: 0, y: 0, z: 0 });
scene.add(coinIM);
function spawnCoin(x, y, z) { const c = coins.find(c => !c.on); if (c) { c.on = true; c.x = x; c.y = y; c.z = z; } }
function makeBowl() {
  const g = new THREE.Group();
  const pts = []; for (let i = 0; i <= 8; i++) { const a = i / 8 * Math.PI / 2; pts.push(new THREE.Vector2(0.12 + Math.sin(a) * 0.32, -Math.cos(a) * 0.3 + 0.3)); }
  const bowl = new THREE.Mesh(new THREE.LatheGeometry(pts, 16), new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide })); g.add(bowl);
  mesh(new THREE.TorusGeometry(0.44, 0.03, 6, 20), lam(0x2f6fc4), 0, 0.3, 0, g).rotation.x = Math.PI / 2;
  mesh(new THREE.TorusGeometry(0.33, 0.02, 6, 20), lam(0x2f6fc4), 0, 0.15, 0, g).rotation.x = Math.PI / 2;
  const rice = mesh(new THREE.SphereGeometry(0.42, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), lam(0xfffdf5), 0, 0.22, 0, g); rice.scale.y = 0.45;
  const chick = lam(0xf2c46d);
  for (let i = 0; i < 9; i++) { const s = mesh(new THREE.BoxGeometry(0.22, 0.04, 0.05), chick, rand(-0.2, 0.2), 0.38, rand(-0.2, 0.2), g); s.rotation.y = rand(0, 3); }
  mesh(new THREE.BoxGeometry(0.16, 0.03, 0.12), lam(0xffe066), 0.1, 0.41, 0.05, g); // pickled radish
  const glow = mesh(new THREE.RingGeometry(0.55, 0.7, 20), new THREE.MeshBasicMaterial({ color: 0xffe066, transparent: true, opacity: 0.6, side: THREE.DoubleSide }), 0, 0.2, 0, g);
  g.userData.glow = glow;
  g.visible = false; g.userData.on = false;
  scene.add(g);
  return g;
}
const bowls = Array.from({ length: 5 }, makeBowl);
function spawnBowl(x, y, z) { const b = bowls.find(b => !b.userData.on); if (b) { b.userData.on = true; b.visible = true; b.position.set(x, y, z); } }

// ---------- audio ----------
let actx = null, muted = localStorage.getItem('mayorRunMuted') === '1';
function audio() { if (!actx) { try { actx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { } } if (actx && actx.state === 'suspended') actx.resume(); return actx; }
function beep(freq, dur, type = 'square', vol = 0.08, slide = 0) {
  if (muted) return; const a = audio(); if (!a) return;
  const o = a.createOscillator(), g = a.createGain(); o.type = type; o.frequency.setValueAtTime(freq, a.currentTime);
  if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), a.currentTime + dur);
  g.gain.setValueAtTime(vol, a.currentTime); g.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + dur);
  o.connect(g).connect(a.destination); o.start(); o.stop(a.currentTime + dur);
}
const sfx = {
  coin() { beep(988, 0.07, 'square', 0.05); setTimeout(() => beep(1319, 0.12, 'square', 0.05), 60); },
  bowl() { [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => beep(f, 0.12, 'triangle', 0.09), i * 70)); },
  jump() { beep(330, 0.18, 'triangle', 0.1, 400); },
  slide() { beep(500, 0.2, 'sawtooth', 0.04, -350); },
  lane() { beep(660, 0.05, 'sine', 0.05); },
  crash() { beep(200, 0.5, 'sawtooth', 0.15, -160); beep(90, 0.6, 'square', 0.1, -40); },
  horn() { beep(415, 0.18, 'square', 0.06); beep(523, 0.18, 'square', 0.05); setTimeout(() => { beep(415, 0.3, 'square', 0.06); beep(523, 0.3, 'square', 0.05); }, 220); },
};

// ---------- UI ----------
const $ = id => document.getElementById(id);
const ui = { hud: $('hud'), score: $('score'), dist: $('dist'), coins: $('coins'), start: $('startScreen'), pause: $('pauseScreen'), over: $('overScreen'), warn: $('warn'), foot: $('foot') };
const BEST_KEY = 'mayorRunBest';
let best = +localStorage.getItem(BEST_KEY) || 0;
$('bestStart').textContent = '最高分：' + best;
function setMuteUI() { $('muteBtn').classList.toggle('off', muted); }
setMuteUI();
$('muteBtn').onclick = (e) => { e.stopPropagation(); muted = !muted; localStorage.setItem('mayorRunMuted', muted ? '1' : '0'); setMuteUI(); if (!muted) sfx.coin(); };
$('pauseBtn').onclick = (e) => { e.stopPropagation(); togglePause(); };
$('startBtn').onclick = () => { audio(); startGame(); };
$('restartBtn').onclick = () => startGame();
$('resumeBtn').onclick = () => togglePause();
$('homeBtn').onclick = $('home2Btn').onclick = () => toHome();
function popup(text, color) {
  const p = document.createElement('div'); p.className = 'popup'; p.textContent = text; if (color) p.style.color = color;
  p.style.left = '50%'; p.style.top = '55%'; p.style.transform = 'translate(-50%,0)';
  document.body.appendChild(p);
  requestAnimationFrame(() => { p.style.transform = 'translate(-50%,-90px)'; p.style.opacity = '0'; });
  setTimeout(() => p.remove(), 950);
}

// ---------- game state ----------
const S = { mode: 'home', speed: START_SPEED, dist: 0, coins: 0, bonus: 0, lane: 1, x: 0, y: 0, vy: 0, slide: 0, runT: 0, spawnAcc: 0, crashT: 0, time: 0, lastTramLane: -1 };

function clearWorld() {
  for (const o of active) o.visible = false;
  active.length = 0;
  coins.forEach(c => c.on = false);
  bowls.forEach(b => { b.userData.on = false; b.visible = false; });
}
function resetPlayer() {
  Object.assign(S, { speed: START_SPEED, dist: 0, coins: 0, bonus: 0, lane: 1, x: 0, y: 0, vy: 0, slide: 0, spawnAcc: 0, crashT: 0, time: 0 });
  mayor.pose.rotation.set(0, 0, 0); mayor.pose.position.set(0, 0, 0);
}
function startGame() {
  clearWorld(); resetPlayer();
  S.mode = 'play';
  ui.start.classList.add('hidden'); ui.over.classList.add('hidden'); ui.pause.classList.add('hidden'); ui.foot.classList.add('hidden');
  ui.hud.classList.remove('hidden');
  // pre-fill: some coins straight ahead
  for (let i = 0; i < 8; i++) spawnCoin(trackX(W + 18 + i * 2.4), 1.0, -18 - i * 2.4);
  S.spawnAcc = 0; S.nextGap = 30; S.spawnZ = -60;
  // seed a couple of rows inside visible range
  generateRow(-60); generateRow(-90);
  updateHUD();
}
function toHome() {
  clearWorld(); resetPlayer(); S.mode = 'home';
  ui.over.classList.add('hidden'); ui.pause.classList.add('hidden'); ui.hud.classList.add('hidden'); ui.warn.classList.add('hidden');
  ui.start.classList.remove('hidden'); ui.foot.classList.remove('hidden');
  $('bestStart').textContent = '最高分：' + best;
}
function togglePause() {
  if (S.mode === 'play') { S.mode = 'pause'; ui.pause.classList.remove('hidden'); }
  else if (S.mode === 'pause') { S.mode = 'play'; ui.pause.classList.add('hidden'); last = performance.now(); }
}
function score() { return Math.floor(S.dist) + S.coins * 10 + S.bonus; }
function updateHUD() { ui.score.textContent = score(); ui.dist.textContent = Math.floor(S.dist); ui.coins.textContent = S.coins; }
function gameOver() {
  S.mode = 'crash'; S.crashT = 0; sfx.crash(); ui.warn.classList.add('hidden');
  if (navigator.vibrate) try { navigator.vibrate(120); } catch (e) { }
  setTimeout(() => {
    const sc = score(); const isBest = sc > best;
    if (isBest) { best = sc; localStorage.setItem(BEST_KEY, best); }
    $('oScore').textContent = sc; $('oDist').textContent = Math.floor(S.dist) + ' 公尺'; $('oCoins').textContent = S.coins; $('oBest').textContent = best;
    $('newBest').classList.toggle('hidden', !isBest);
    ui.over.classList.remove('hidden'); ui.hud.classList.add('hidden'); S.mode = 'over';
  }, 900);
}

// ---------- input ----------
function act(a) {
  if (S.mode !== 'play') return;
  if (a === 'left' && S.lane > 0) { S.lane--; sfx.lane(); }
  else if (a === 'right' && S.lane < 2) { S.lane++; sfx.lane(); }
  else if (a === 'jump' && S.y <= 0.001) { S.vy = JUMP_V; S.slide = 0; sfx.jump(); }
  else if (a === 'down') { if (S.y > 0.001) { S.vy = -22; S.queueSlide = true; } else { S.slide = SLIDE_TIME; sfx.slide(); } }
}
addEventListener('keydown', e => {
  const k = e.key;
  if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' '].includes(k)) e.preventDefault();
  if (k === 'ArrowLeft' || k === 'a' || k === 'A') act('left');
  else if (k === 'ArrowRight' || k === 'd' || k === 'D') act('right');
  else if (k === 'ArrowUp' || k === 'w' || k === 'W' || k === ' ') { if (S.mode === 'home' || S.mode === 'over') { if (k === ' ') startGame(); } else act('jump'); }
  else if (k === 'ArrowDown' || k === 's' || k === 'S') act('down');
  else if (k === 'p' || k === 'P' || k === 'Escape') togglePause();
  else if (k === 'Enter' && (S.mode === 'home' || S.mode === 'over')) startGame();
});
let tStart = null;
canvas.addEventListener('touchstart', e => { const t = e.changedTouches[0]; tStart = { x: t.clientX, y: t.clientY, done: false }; }, { passive: true });
canvas.addEventListener('touchmove', e => {
  if (!tStart || tStart.done) return; const t = e.changedTouches[0];
  const dx = t.clientX - tStart.x, dy = t.clientY - tStart.y;
  if (Math.max(Math.abs(dx), Math.abs(dy)) > 28) { tStart.done = true; swipe(dx, dy); }
}, { passive: true });
canvas.addEventListener('touchend', e => {
  if (!tStart || tStart.done) { tStart = null; return; }
  const t = e.changedTouches[0]; const dx = t.clientX - tStart.x, dy = t.clientY - tStart.y;
  if (Math.max(Math.abs(dx), Math.abs(dy)) > 18) swipe(dx, dy); else act('jump'); // tap = jump
  tStart = null;
}, { passive: true });
function swipe(dx, dy) { if (Math.abs(dx) > Math.abs(dy)) act(dx > 0 ? 'right' : 'left'); else act(dy < 0 ? 'jump' : 'down'); }
document.addEventListener('visibilitychange', () => { if (document.hidden && S.mode === 'play') togglePause(); });

// ---------- spawning ----------
const VEH = ['car', 'car', 'car', 'taxi', 'scooter', 'scooter', 'bus', 'truck'];
function vehBusy(zA, zB) {
  const set = new Set();
  for (const o of active) {
    const d = o.userData, def = OB_DEF[d.kind]; if (!def.veh) continue;
    if (o.position.z + def.hz > zA && o.position.z - def.hz < zB) { set.add(d.targetLane); if (d.fromLane != null) set.add(d.fromLane); }
  }
  return set;
}
function staticInLane(lane, z0, z1) { return active.some(o => !OB_DEF[o.userData.kind].veh && o.userData.lane === lane && o.position.z > z0 && o.position.z < z1); }
const vehVz = () => 4 + Math.min(1, S.dist / 1500) * 4;
function generateRow(z) {
  const lvl = Math.min(1, S.dist / 1500);
  const busy = vehBusy(z - 16, z + 28);
  const used = new Set();
  const vz = vehVz();
  const nVeh = Math.random() < 0.6 + lvl * 0.25 ? (Math.random() < 0.2 + lvl * 0.35 ? 2 : 1) : 0;
  for (let n = 0; n < nVeh; n++) {
    const free = [0, 1, 2].filter(l => !busy.has(l) && !used.has(l));
    if (free.length < 2) break; // always keep one lane without vehicles
    const kind = pick(VEH), def = OB_DEF[kind];
    let lane = pick(free), from = lane;
    if (free.length === 3 && Math.random() < 0.3 + lvl * 0.2) { // cut-in from neighbouring lane
      const nb = [lane - 1, lane + 1].filter(l => l >= 0 && l <= 2);
      from = pick(nb);
    }
    if (staticInLane(lane, z - 80, z + 1) || staticInLane(from, z - 80, z + 1)) continue;
    if (spawnOb(kind, lane, z - def.hz, { vz, fromLane: from === lane ? null : from, targetLane: lane, cut: from !== lane })) { used.add(lane); used.add(from); }
  }
  const nStat = nVeh === 0 ? (Math.random() < 0.4 + lvl * 0.3 ? 2 : 1) : (Math.random() < 0.5 ? 1 : 0);
  const sl = [0, 1, 2].filter(l => !used.has(l)).sort(() => Math.random() - 0.5);
  for (let n = 0; n < nStat && n < sl.length; n++) spawnOb(pick(['cone', 'barrier', 'overhead', 'barrier', 'cone']), sl[n], z);
  if (nVeh === 0 && Math.random() < 0.12 + lvl * 0.1) {
    const t = pick(['barrier', 'overhead']);
    for (const l of [0, 1, 2]) if (!active.some(o => o.userData.lane === l && Math.abs(o.position.z - z) < 1)) spawnOb(t, l, z);
  }
  // coins follow the snaking track
  if (Math.random() < 0.9) {
    const n = 6 + ((Math.random() * 5) | 0);
    const bowlAt = Math.random() < 0.18 ? ((Math.random() * n) | 0) : -1;
    for (let i = 0; i < n; i++) {
      const cz = z + 9 - i * 2.4, x = trackX(W - cz);
      let y = 1.0;
      for (const o of active) {
        const k = o.userData.kind; if (OB_DEF[k].veh || Math.abs(o.position.x - x) > 1.1) continue;
        const dd = Math.abs(cz - o.position.z);
        if ((k === 'barrier' || k === 'cone') && dd < 4) y = Math.max(y, 1.0 + 1.1 * Math.cos(dd / 4 * Math.PI / 2));
        else if (k === 'overhead' && dd < 2.5) y = 0.55;
      }
      if (i === bowlAt) spawnBowl(x, y - 0.2, cz); else spawnCoin(x, y, cz);
    }
  }
}
let ambientT = 1;
function spawnAmbientCar() { // start-screen traffic on the side lanes
  const lane = Math.random() < 0.5 ? 0 : 2;
  if (vehBusy(SPAWN_Z - 10, SPAWN_Z + 20).has(lane)) return;
  const kind = pick(VEH);
  spawnOb(kind, lane, SPAWN_Z, { vz: rand(5, 9), targetLane: lane });
}

// ---------- update ----------
const tmpM = new THREE.Matrix4(), tmpQ = new THREE.Quaternion(), tmpE = new THREE.Euler(), tmpV = new THREE.Vector3(), tmpS = new THREE.Vector3(1, 1, 1);
let warnOn = false;
function update(dt) {
  const t = S.time += dt;
  const playing = S.mode === 'play';
  const homeMode = S.mode === 'home';
  const speed = playing ? S.speed : homeMode ? 6 : (S.mode === 'crash' ? Math.max(0, S.speed * (1 - S.crashT * 3)) : 0);
  if (playing) S.speed = Math.min(MAX_SPEED, S.speed + ACCEL * dt * (S.speed < 22 ? 1 : 0.6));
  if (S.mode === 'crash') S.crashT += dt;
  const dz = speed * dt;
  if (playing) S.dist += dz;

  // texture scroll
  for (const [tx, len] of scrollTex) tx.offset.y = (tx.offset.y + dz / len) % 1;
  W += dz;
  updateScenery(dz);
  updateTrack();

  // player physics
  if (playing) {
    const tx = LANES[S.lane];
    S.x += (tx - S.x) * Math.min(1, dt * 14);
    if (S.y > 0 || S.vy > 0) { S.vy += GRAVITY * dt; S.y += S.vy * dt; if (S.y <= 0) { S.y = 0; S.vy = 0; if (S.queueSlide) { S.queueSlide = false; S.slide = SLIDE_TIME; sfx.slide(); } } }
    if (S.slide > 0) S.slide -= dt;
  }
  // character animation
  const m = mayor;
  m.root.position.set(S.x, S.y, 0);
  m.shadow.position.set(S.x, 0.04, 0); m.shadow.scale.setScalar(Math.max(0.4, 1 - S.y * 0.25));
  if (homeMode) {
    m.root.rotation.y += (0.35 - m.root.rotation.y) * Math.min(1, dt * 4);
    S.runT += dt * 3;
    m.pose.rotation.x = 0; m.pose.position.y = Math.abs(Math.sin(S.runT)) * 0.03;
    m.legs[0].rotation.x = m.legs[1].rotation.x = 0;
    m.arms[1].rotation.x = 0; m.arms[1].rotation.z = 2.6 + Math.sin(S.runT * 2.2) * 0.35; // waving
    m.arms[0].rotation.x = 0; m.arms[0].rotation.z = -0.18;
    m.head.rotation.z = Math.sin(S.runT) * 0.08;
  } else if (S.mode === 'crash' || S.mode === 'over') {
    m.pose.rotation.x += (1.3 - m.pose.rotation.x) * Math.min(1, dt * 6);
  } else if (playing) {
    m.root.rotation.y += (Math.PI - m.root.rotation.y) * Math.min(1, dt * 10);
    S.runT += dt * (8 + S.speed * 0.35);
    const sw = Math.sin(S.runT);
    m.arms[1].rotation.z = 0.18; m.arms[0].rotation.z = -0.18; m.head.rotation.z = 0;
    if (S.slide > 0) {
      m.pose.rotation.x += (-1.15 - m.pose.rotation.x) * Math.min(1, dt * 18);
      m.legs[0].rotation.x = m.legs[1].rotation.x = 1.2;
      m.arms[0].rotation.x = m.arms[1].rotation.x = -2.6;
      m.pose.position.y = 0.1;
    } else if (S.y > 0) {
      m.pose.rotation.x += (0 - m.pose.rotation.x) * Math.min(1, dt * 18);
      m.legs[0].rotation.x = -0.9; m.legs[1].rotation.x = 0.5;
      m.arms[0].rotation.x = -2.4; m.arms[1].rotation.x = -2.4;
      m.pose.position.y = 0;
    } else {
      m.pose.rotation.x += (0.12 - m.pose.rotation.x) * Math.min(1, dt * 18);
      m.legs[0].rotation.x = sw * 0.95; m.legs[1].rotation.x = -sw * 0.95;
      m.arms[0].rotation.x = -sw * 0.9; m.arms[1].rotation.x = sw * 0.9;
      m.pose.position.y = Math.abs(Math.cos(S.runT)) * 0.08;
    }
    // lean into lane change
    m.root.rotation.z = (S.x - LANES[S.lane]) * 0.12;
  }

  // obstacles
  let warn = false;
  const py0 = S.y, py1 = S.y + (S.slide > 0 ? 0.85 : 1.75);
  for (let i = active.length - 1; i >= 0; i--) {
    const o = active[i]; const d = o.userData;
    o.position.z += dz + d.vz * dt * (S.mode === 'play' || homeMode ? 1 : 0);
    if (d.cut) {
      const tx = LANES[d.targetLane], fx = LANES[d.fromLane];
      const k = THREE.MathUtils.clamp((o.position.z - (-85)) / 50, 0, 1);
      const e = k * k * (3 - 2 * k);
      const nx = fx + (tx - fx) * e, dx = nx - o.position.x, mv = dz + d.vz * dt;
      o.position.x = nx;
      o.rotation.y = mv > 0 ? Math.atan2(dx, mv) : 0;
      const on = k < 1 && Math.sin(t * 14) > 0;
      d.signals[tx > fx ? 1 : 0].visible = on;
      if (k < 1 && o.position.z > SPAWN_Z && o.position.z < -15) warn = true;
    }
    if (d.blink) d.blink.visible = Math.sin(t * 10) > 0;
    if (o.position.z > DESPAWN_Z + OB_DEF[d.kind].hz) { o.visible = false; active.splice(i, 1); continue; }
    const def = OB_DEF[d.kind];
    if (def.veh) for (const c of coins) if (c.on && Math.abs(c.x - o.position.x) < def.hx && Math.abs(c.z - o.position.z) < def.hz) c.on = false;
    if (!playing) continue;
    if (Math.abs(o.position.x - S.x) < def.hx + 0.32 && Math.abs(o.position.z) < def.hz + 0.3) {
      if (py1 > def.y0 + 0.02 && py0 < def.y1) { gameOver(); break; }
    }
  }
  if (warn !== warnOn && playing) { warnOn = warn; ui.warn.classList.toggle('hidden', !warn); if (warn) sfx.horn(); }
  if (!playing && warnOn) { warnOn = false; ui.warn.classList.add('hidden'); }

  // spawn
  if (playing) {
    S.spawnAcc += dz;
    const gap = Math.max(15, 30 - S.speed * 0.45) + rand(-2, 4) * 0;
    if (S.spawnAcc >= S.nextGap) { S.spawnAcc = 0; S.nextGap = gap + rand(0, 6); generateRow(SPAWN_Z); }
  } else if (homeMode) {
    ambientT -= dt; if (ambientT <= 0) { ambientT = rand(1.5, 3.5); spawnAmbientCar(); }
  }

  // coins
  const spin = t * 4;
  let ci = 0;
  for (let i = 0; i < N_COIN; i++) {
    const c = coins[i];
    if (c.on) {
      c.z += dz;
      if (c.z > DESPAWN_Z) c.on = false;
      else if (playing && Math.abs(c.x - S.x) < 0.85 && Math.abs(c.z) < 0.9 && c.y > py0 - 0.3 && c.y < py1 + 0.3) {
        c.on = false; S.coins++; sfx.coin();
      }
    }
    if (c.on) { tmpE.set(0, spin + c.z * 0.15, 0); tmpQ.setFromEuler(tmpE); tmpV.set(c.x, c.y, c.z); tmpS.set(1, 1, 1); }
    else { tmpV.set(0, -50, 0); tmpS.set(0.0001, 0.0001, 0.0001); }
    tmpM.compose(tmpV, tmpQ, tmpS); coinIM.setMatrixAt(ci++, tmpM);
  }
  coinIM.instanceMatrix.needsUpdate = true;
  for (const b of bowls) {
    if (!b.userData.on) continue;
    b.position.z += dz; b.rotation.y = t * 2; b.userData.glow.rotation.x = Math.PI / 2; b.position.y += Math.sin(t * 5) * 0.004;
    if (b.position.z > DESPAWN_Z) { b.userData.on = false; b.visible = false; }
    else if (playing && Math.abs(b.position.x - S.x) < 0.9 && Math.abs(b.position.z) < 1 && b.position.y + 0.2 > py0 - 0.3 && b.position.y < py1) {
      b.userData.on = false; b.visible = false; S.bonus += 50; S.coins += 5; sfx.bowl(); popup('雞肉飯 +50！');
    }
  }

  // camera
  const portrait = camera.aspect < 1;
  if (homeMode) {
    tmpV.set(0.9, 2.0, 4.6);
    camera.position.lerp(tmpV, Math.min(1, dt * 3));
    camera.lookAt(-0.4, 1.25, 0);
  } else {
    const cx = S.x * (portrait ? 0.75 : 0.55);
    tmpV.set(cx, portrait ? 5.0 : 4.4, portrait ? 8.2 : 7.4);
    camera.position.lerp(tmpV, Math.min(1, dt * (S.mode === 'play' ? 6 : 2)));
    camera.lookAt(cx * 0.9, 1.1, -10);
  }
  if (playing) updateHUD();
}

// ---------- resize / loop ----------
function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.fov = camera.aspect < 0.75 ? 72 : camera.aspect < 1.2 ? 66 : 58;
  camera.updateProjectionMatrix();
}
addEventListener('resize', resize); resize();
camera.position.set(0.9, 2.0, 4.6);
let last = performance.now();
function loop(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (S.mode !== 'pause') update(dt);
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
}
updateScenery(0);
requestAnimationFrame(loop);
