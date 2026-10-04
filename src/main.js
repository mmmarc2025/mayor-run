import * as THREE from '../vendor/three.module.min.js';

// ---------- constants ----------
const LANES = [-2.2, 0, 2.2];
const TRACK_X = -6.8;
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

const trackTex = canvasTex(128, 128, (g, w, h) => {
  g.fillStyle = '#8c8577'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 300; i++) { g.fillStyle = `rgba(0,0,0,${Math.random() * .15})`; g.fillRect(Math.random() * w, Math.random() * h, 2, 2); }
  g.fillStyle = '#6b4f3a'; g.fillRect(10, h * .3, w - 20, h * .36);
  g.fillStyle = 'rgba(0,0,0,.25)'; g.fillRect(10, h * .62, w - 20, h * .04);
}, 1, ROAD_LEN / 1.2);
const trackBed = mesh(new THREE.PlaneGeometry(3.4, ROAD_LEN), new THREE.MeshLambertMaterial({ map: trackTex }), TRACK_X, 0.02, ROAD_Z, scene);
trackBed.rotation.x = -Math.PI / 2;
const railGeo = new THREE.BoxGeometry(0.12, 0.16, ROAD_LEN);
const railMat = new THREE.MeshLambertMaterial({ color: 0xc9ced6, emissive: 0x333333 });
[-0.72, 0.72].forEach(dx => mesh(railGeo, railMat, TRACK_X + dx, 0.1, ROAD_Z, scene));

const sideTex = canvasTex(64, 64, (g, w, h) => {
  g.fillStyle = '#d8c7a8'; g.fillRect(0, 0, w, h);
  g.strokeStyle = '#b9a688'; g.lineWidth = 2;
  for (let i = 0; i <= 2; i++) { g.beginPath(); g.moveTo(0, i * 32); g.lineTo(w, i * 32); g.stroke(); g.beginPath(); g.moveTo(i * 32, 0); g.lineTo(i * 32, h); g.stroke(); }
}, 4, ROAD_LEN / 2);
// right sidewalk & left buffer
const sideR = mesh(new THREE.PlaneGeometry(4.5, ROAD_LEN), new THREE.MeshLambertMaterial({ map: sideTex }), 5.65, 0.06, ROAD_Z, scene); sideR.rotation.x = -Math.PI / 2;
const grassTex = canvasTex(64, 64, (g, w, h) => {
  g.fillStyle = '#6fb04a'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 200; i++) { g.fillStyle = `rgba(30,80,20,${Math.random() * .3})`; g.fillRect(Math.random() * w, Math.random() * h, 2, 3); }
}, 2, ROAD_LEN / 2);
const bufL = mesh(new THREE.PlaneGeometry(1.6, ROAD_LEN), new THREE.MeshLambertMaterial({ map: grassTex }), -4.3, 0.05, ROAD_Z, scene); bufL.rotation.x = -Math.PI / 2;
const sideL = mesh(new THREE.PlaneGeometry(4.5, ROAD_LEN), new THREE.MeshLambertMaterial({ map: sideTex }), -10.75, 0.06, ROAD_Z, scene); sideL.rotation.x = -Math.PI / 2;
const base = mesh(new THREE.PlaneGeometry(120, ROAD_LEN), lam(0x7fb35a), 0, -0.01, ROAD_Z, scene); base.rotation.x = -Math.PI / 2;
// curbs
const curbGeo = new THREE.BoxGeometry(0.25, 0.18, ROAD_LEN);
mesh(curbGeo, lam(0xe9e4da), 3.45, 0.09, ROAD_Z, scene);
mesh(curbGeo, lam(0xe9e4da), -3.45, 0.09, ROAD_Z, scene);
// overhead catenary wire above track (static)
const wireGeo = new THREE.BoxGeometry(0.04, 0.04, ROAD_LEN);
mesh(wireGeo, lam(0x222222), TRACK_X, 5.2, ROAD_Z, scene);
const scrollTex = [[roadTex, 8], [trackTex, 1.2], [sideTex, 2], [grassTex, 2]];

// ---------- instanced scenery ----------
const dummy = new THREE.Object3D();
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
  d.x = d.side < 0 ? -13.5 - d.dp / 2 + rand(-0.5, 0.5) : 8.5 + d.dp / 2 + rand(-0.5, 0.5);
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
  treeData.push({ x: side > 0 ? 6.6 : -11.0, z: -(i >> 1) * (SCEN_SPAN / (N_TREE / 2)) + 4, s: rand(0.85, 1.25) });
  crownIM.setColorAt(i, new THREE.Color(pick([0x3f8f3a, 0x4fa34a, 0x2f7a3a, 0x5aaa3a])));
}
scene.add(trunkIM, crownIM);
// catenary poles beside track
const N_POLE = 14;
const poleGeo = new THREE.BoxGeometry(0.22, 5.6, 0.22).translate(0, 2.8, 0);
const armGeo = new THREE.BoxGeometry(2.4, 0.12, 0.12);
const poleIM = new THREE.InstancedMesh(poleGeo, lam(0x9aa3ad), N_POLE);
const armIM = new THREE.InstancedMesh(armGeo, lam(0x9aa3ad), N_POLE);
const poleData = [];
for (let i = 0; i < N_POLE; i++) poleData.push({ z: -i * (SCEN_SPAN / N_POLE) });
scene.add(poleIM, armIM);
// street lamps on right
const N_LAMP = 10;
const lampIM = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.07, 0.09, 4.2, 6).translate(0, 2.1, 0), lam(0x4a5560), N_LAMP);
const lampHeadIM = new THREE.InstancedMesh(new THREE.BoxGeometry(0.9, 0.15, 0.3), lam(0xfff3c4, { emissive: 0x665f40 }), N_LAMP);
const lampData = [];
for (let i = 0; i < N_LAMP; i++) lampData.push({ z: -i * (SCEN_SPAN / N_LAMP) - 9 });
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
  m.position.set(side < 0 ? -13.1 : 8.2, 3.2 + rand(0, 1.5), m.userData.z);
  scene.add(m); signs.push(m);
}

// tram stations
const STATION_NAMES = ['嘉義車站', '文化路夜市', '噴水圓環', '檜意森活村', '嘉義公園', '北門驛', '中央第一商場', '蘭潭', '射日塔', '博愛路'];
let stationIdx = 0;
const stations = [];
for (let i = 0; i < 2; i++) {
  const g = new THREE.Group();
  mesh(new THREE.BoxGeometry(2.2, 0.35, 16), lam(0xbfc6cc), 0, 0.175, 0, g);
  mesh(new THREE.BoxGeometry(2.2, 0.06, 16), lam(0xf5c242), 1.08 - 1.1 + 1.06, 0.36, 0, g).scale.set(0.08, 1, 1);
  const roofM = lam(0x2f6fc4);
  mesh(new THREE.BoxGeometry(2.8, 0.18, 13), roofM, 0.1, 3.3, 0, g);
  [-5, 0, 5].forEach(z => mesh(new THREE.BoxGeometry(0.15, 3, 0.15), lam(0xdddddd), -0.7, 1.8, z, g));
  mesh(new THREE.BoxGeometry(0.06, 1.6, 10), new THREE.MeshLambertMaterial({ color: 0xbfe3ff, transparent: true, opacity: 0.45 }), -0.95, 1.2, 0, g);
  const tex = textTexture(['嘉義聯外軌道', STATION_NAMES[0]], 512, 160, '#2f6fc4', '#ffffff', { size: 0.7, border: '#f39a1e' });
  const sign = mesh(new THREE.BoxGeometry(0.12, 1.0, 3.2), [new THREE.MeshLambertMaterial({ map: tex }), new THREE.MeshLambertMaterial({ map: tex }), roofM, roofM, roofM, roofM], 0.1, 3.95, 0, g);
  tex.center.set(0.5, 0.5);
  g.userData = { z: -60 - i * 150, tex };
  g.position.set(TRACK_X - 2.75, 0, g.userData.z);
  scene.add(g); stations.push(g);
  nameStation(g);
}
function nameStation(g) {
  const n = STATION_NAMES[stationIdx++ % STATION_NAMES.length];
  g.userData.tex.userData.draw(['嘉義聯外軌道', n + '站']);
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
  for (let i = 0; i < N_POLE; i++) {
    const d = poleData[i]; d.z += dz; if (d.z > DESPAWN_Z) d.z -= SCEN_SPAN;
    dummy.position.set(TRACK_X + 1.9, 0, d.z); dummy.updateMatrix(); poleIM.setMatrixAt(i, dummy.matrix);
    dummy.position.set(TRACK_X + 0.8, 5.3, d.z); dummy.updateMatrix(); armIM.setMatrixAt(i, dummy.matrix);
  }
  poleIM.instanceMatrix.needsUpdate = armIM.instanceMatrix.needsUpdate = true;
  for (let i = 0; i < N_LAMP; i++) {
    const d = lampData[i]; d.z += dz; if (d.z > DESPAWN_Z) d.z -= SCEN_SPAN;
    dummy.position.set(3.9, 0, d.z); dummy.updateMatrix(); lampIM.setMatrixAt(i, dummy.matrix);
    dummy.position.set(3.55, 4.2, d.z); dummy.updateMatrix(); lampHeadIM.setMatrixAt(i, dummy.matrix);
  }
  lampIM.instanceMatrix.needsUpdate = lampHeadIM.instanceMatrix.needsUpdate = true;
  for (const s of signs) { s.position.z += dz; if (s.position.z > DESPAWN_Z) s.position.z -= SCEN_SPAN; }
  for (const st of stations) { st.position.z += dz; if (st.position.z > DESPAWN_Z + 10) { st.position.z -= 300; nameStation(st); } }
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

// ---------- tram ----------
const tramBodyGeo = new THREE.BoxGeometry(2.3, 2.7, 12);
function makeTram() {
  const g = new THREE.Group();
  const white = lam(0xf7f7f2), green = lam(0x1e8a5a), orange = lam(0xf39a1e), glass = lam(0x1d2a38, { emissive: 0x0a1018 }), dark = lam(0x333a40);
  mesh(tramBodyGeo, white, 0, 1.65, 0, g);
  mesh(new THREE.BoxGeometry(2.34, 0.35, 12.02), green, 0, 0.45, 0, g);
  mesh(new THREE.BoxGeometry(2.34, 0.12, 12.02), orange, 0, 0.7, 0, g);
  mesh(new THREE.BoxGeometry(2.36, 0.95, 10.5), glass, 0, 1.95, 0.2, g);
  // front nose (toward +z, facing player)
  const nose = mesh(new THREE.BoxGeometry(2.3, 2.2, 1.2), white, 0, 1.4, 6.3, g);
  const ws = mesh(new THREE.BoxGeometry(2.0, 1.2, 0.1), glass, 0, 2.05, 6.88, g); ws.rotation.x = -0.18;
  mesh(new THREE.BoxGeometry(2.32, 0.4, 1.22), green, 0, 0.45, 6.3, g);
  mesh(new THREE.BoxGeometry(2.32, 0.12, 1.22), orange, 0, 0.7, 6.3, g);
  const hlM = lam(0xffffcc, { emissive: 0xfff3a0 });
  [-0.75, 0.75].forEach(x => mesh(new THREE.BoxGeometry(0.35, 0.18, 0.06), hlM, x, 0.95, 6.92, g));
  const dest = textTexture(['嘉義聯外軌道'], 384, 64, '#111', '#ffb020', { size: 0.8 });
  mesh(new THREE.PlaneGeometry(2.1, 0.35), new THREE.MeshBasicMaterial({ map: dest }), 0, 2.8, 6.91, g);
  mesh(new THREE.BoxGeometry(1.2, 0.2, 3), dark, 0, 3.08, 0, g);
  const panto = mesh(new THREE.BoxGeometry(0.06, 1.2, 0.06), dark, 0, 3.7, 0, g); panto.rotation.x = 0.6;
  mesh(new THREE.BoxGeometry(1.4, 0.06, 0.1), dark, 0, 4.2, -0.35, g);
  // wheels skirts
  mesh(new THREE.BoxGeometry(2.0, 0.3, 11), dark, 0, 0.15, 0, g);
  g.userData = { active: false, kind: 'tram' };
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
  tram: { make: makeTram, hx: 1.15, hz: 6.9, y0: 0, y1: 3.2, n: 5 },
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
  o.position.set(lane == null ? extra.x : LANES[lane], 0, z);
  o.rotation.set(0, 0, 0);
  Object.assign(o.userData, { lane, vz: 0, switchFrom: null, ambient: false, warned: false }, extra);
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
  bell() { beep(1568, 0.25, 'sine', 0.06); setTimeout(() => beep(1568, 0.25, 'sine', 0.06), 280); },
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
  for (let i = 0; i < 8; i++) spawnCoin(LANES[1], 1.0, -18 - i * 2.4);
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
function tramLanesBusy() {
  const set = new Set();
  for (const o of active) if (o.userData.kind === 'tram' && !o.userData.ambient && o.position.z < 4) set.add(o.userData.targetLane ?? o.userData.lane);
  return set;
}
function laneHasObAt(lane, z0, z1) { return active.some(o => o.userData.lane === lane && o.position.z > z0 && o.position.z < z1); }
function generateRow(z) {
  const busy = tramLanesBusy();
  const free = [0, 1, 2].filter(l => !busy.has(l));
  const r = Math.random();
  const lvl = Math.min(1, S.dist / 1500);
  let used = new Set();
  const tramChance = 0.18 + lvl * 0.17;
  if (r < tramChance && free.length >= 2) {
    // a tram comes at her: either head-on in a lane, or switching in from the rail track
    const switching = Math.random() < 0.45;
    let lane = switching ? (Math.random() < 0.7 ? 0 : 1) : pick(free);
    if (!free.includes(lane)) lane = pick(free);
    if (free.filter(l => l !== lane).length >= 1 && !laneHasObAt(lane, -70, 0)) {
      const vz = rand(3, 6) + lvl * 3;
      const tz = z - 10;
      if (switching) spawnOb('tram', lane, tz, { x: TRACK_X, switchFrom: TRACK_X, targetLane: lane, vz });
      else spawnOb('tram', lane, tz, { vz, targetLane: lane });
      if (switching) { const o = active[active.length - 1]; o.position.x = TRACK_X; }
      used.add(lane);
      // something in another lane sometimes
      const others = free.filter(l => l !== lane);
      if (others.length > 1 && Math.random() < 0.5) { const l2 = pick(others); spawnOb(pick(['cone', 'barrier', 'overhead']), l2, z); used.add(l2); }
    }
  } else {
    const n = Math.random() < 0.35 + lvl * 0.35 ? 2 : 1;
    const lanes = [0, 1, 2].sort(() => Math.random() - 0.5).slice(0, n);
    // never block all remaining tram-free lanes with obstacles of mixed types that are hard? (all passable by jump/slide, ok)
    const allSame = Math.random() < 0.15 + lvl * 0.1;
    const t0 = pick(['cone', 'barrier', 'overhead', 'barrier']);
    for (const l of lanes) {
      if (busy.has(l)) continue;
      spawnOb(allSame ? t0 : pick(['cone', 'barrier', 'overhead', 'barrier', 'cone']), l, z); used.add(l);
    }
    if (Math.random() < 0.12 + lvl * 0.1) { // full-width jump/slide row
      const t = pick(['barrier', 'overhead']);
      for (const l of [0, 1, 2]) if (!used.has(l) && !busy.has(l)) { spawnOb(t, l, z); used.add(l); }
    }
  }
  // coins
  const cl = [0, 1, 2].filter(l => !busy.has(l) && !(active.some(o => o.userData.kind === 'tram' && o.userData.targetLane === l && o.position.z < 4)));
  if (cl.length && Math.random() < 0.85) {
    const l = pick(cl);
    const obHere = active.find(o => o.userData.lane === l && Math.abs(o.position.z - z) < 1 && o.userData.kind !== 'tram');
    const n = 6 + ((Math.random() * 4) | 0);
    const bowlAt = Math.random() < 0.18 ? ((Math.random() * n) | 0) : -1;
    for (let i = 0; i < n; i++) {
      const cz = z + 8 - i * 2.4;
      let y = 1.0;
      if (obHere) {
        const k = obHere.userData.kind;
        if (k === 'barrier' || k === 'cone') { const d = Math.abs(cz - z); y = d < 4 ? 1.0 + 1.1 * Math.cos(d / 4 * Math.PI / 2) : 1.0; }
        else if (k === 'overhead') { y = Math.abs(cz - z) < 2 ? 0.55 : 0.7; }
      }
      if (i === bowlAt) spawnBowl(LANES[l], y - 0.2, cz); else spawnCoin(LANES[l], y, cz);
    }
  }
}
let ambientT = 4;
function spawnAmbientTram() {
  // on the rail track, either oncoming (fast) or same direction (slower than her -> she overtakes)
  if (active.some(o => o.userData.kind === 'tram' && Math.abs(o.position.x - TRACK_X) < 0.5 && o.position.z < 0)) return;
  const o = spawnOb('tram', null, SPAWN_Z - 20, { x: TRACK_X, ambient: true, vz: rand(6, 12) });
  if (o) sfx.bell();
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
  updateScenery(dz);

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
    if (d.kind === 'tram' && d.switchFrom != null) {
      // switch from track into lane between z=-75 and z=-30
      const tx = LANES[d.targetLane];
      const k = THREE.MathUtils.clamp((o.position.z - (-85)) / 50, 0, 1);
      const e = k * k * (3 - 2 * k);
      const nx = d.switchFrom + (tx - d.switchFrom) * e;
      const dx = nx - o.position.x;
      o.position.x = nx;
      o.rotation.y = (dz + d.vz * dt) > 0 ? Math.atan2(dx, (dz + d.vz * dt)) * 0.9 : 0;
      if (k < 1 && o.position.z > SPAWN_Z + 5) warn = true;
      d.lane = Math.abs(nx - tx) < 1 ? d.targetLane : null;
    }
    if (d.blink) d.blink.visible = Math.sin(t * 10) > 0;
    if (o.position.z > DESPAWN_Z + (d.kind === 'tram' ? 8 : 0)) { o.visible = false; active.splice(i, 1); continue; }
    if (!playing || d.ambient) continue;
    const def = OB_DEF[d.kind];
    if (Math.abs(o.position.x - S.x) < def.hx + 0.32 && Math.abs(o.position.z) < def.hz + 0.3) {
      if (py1 > def.y0 + 0.02 && py0 < def.y1) { gameOver(); break; }
    }
  }
  if (warn !== warnOn && playing) { warnOn = warn; ui.warn.classList.toggle('hidden', !warn); if (warn) sfx.bell(); }
  if (!playing && warnOn) { warnOn = false; ui.warn.classList.add('hidden'); }

  // spawn
  if (playing) {
    S.spawnAcc += dz;
    const gap = Math.max(15, 30 - S.speed * 0.45) + rand(-2, 4) * 0;
    if (S.spawnAcc >= S.nextGap) { S.spawnAcc = 0; S.nextGap = gap + rand(0, 6); generateRow(SPAWN_Z); }
    ambientT -= dt; if (ambientT <= 0) { ambientT = rand(5, 10); spawnAmbientTram(); }
  } else if (homeMode) {
    ambientT -= dt; if (ambientT <= 0) { ambientT = rand(5, 8); spawnAmbientTram(); }
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
    const cx = S.x * (portrait ? 0.75 : 0.55) + (portrait ? -0.5 : -0.8);
    tmpV.set(cx, portrait ? 5.0 : 4.4, portrait ? 8.2 : 7.4);
    camera.position.lerp(tmpV, Math.min(1, dt * (S.mode === 'play' ? 6 : 2)));
    camera.lookAt(cx * 0.9 - 0.3, 1.1, -10);
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
