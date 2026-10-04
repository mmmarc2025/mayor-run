(()=>{var Fh=1,td=2,En=3,kn=0,Lt=1,Qi=2;var ai=100;var yo=204,Mo=205;var Xl=0,nd=1,id=2,Hn=0,rd=1,sd=2,ad=3,od=4,ld=5,cd=6,hd=7;var zh=300,ki=301,Vi=302,So=303,bo=304,fa=306,wr=1e3,Ar=1001,Eo=1002,Wt=1003,ud=1004;var Qr=1005;var dn=1006,Ba=1007;var Bi=1008;var An=1009,Hh=1010,Gh=1011,Rr=1012,jl=1013,ci=1014,pn=1015,Vr=1016,ql=1017,Yl=1018,Wi=1020,kh=35902,Vh=1021,Wh=1022,sn=1023,Xh=1024,jh=1025,Cr=1026,Xi=1027,Zl=1028,Jl=1029,qh=1030,Kl=1031;var $l=1033,Is=33776,Ls=33777,Us=33778,Ds=33779,To=35840,wo=35841,Ao=35842,Ro=35843,Co=36196,Po=37492,Io=37496,Lo=37808,Uo=37809,Do=37810,No=37811,Oo=37812,Bo=37813,Fo=37814,zo=37815,Ho=37816,Go=37817,ko=37818,Vo=37819,Wo=37820,Xo=37821,Ns=36492,jo=36494,qo=36495,Yh=36283,Yo=36284,Zo=36285,Jo=36286;var Bs=2300,Ko=2301,Fa=2302,Nc=2400,Oc=2401,Bc=2402;var Oi="",Rt="srgb",Xn="srgb-linear",Ql="display-p3",ga="display-p3-linear",Fs="linear",qe="srgb",zs="rec709",Hs="p3";var _i=7680;var Zh=515;var $o=35044;var Fc="300 es",ji=2e3,Gs=2001,Vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zc=1234567,zi=Math.PI/180,Pr=180/Math.PI;function mn(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(bt[255&i]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]+"-"+bt[255&e]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[63&t|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[255&n]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function Qo(i,e){return(i%e+e)%e}function Sr(i,e,t){return(1-t)*i+t*e}function rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("Invalid component type.")}}var Jh={DEG2RAD:zi,RAD2DEG:Pr,generateUUID:mn,clamp:_t,euclideanModulo:Qo,mapLinear:function(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)},inverseLerp:function(i,e,t){return i!==e?(t-i)/(e-i):0},lerp:Sr,damp:function(i,e,t,n){return Sr(i,e,1-Math.exp(-t*n))},pingpong:function(i,e=1){return e-Math.abs(Qo(i,2*e)-e)},smoothstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*(3-2*i)},smootherstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*i*(i*(6*i-15)+10)},randInt:function(i,e){return i+Math.floor(Math.random()*(e-i+1))},randFloat:function(i,e){return i+Math.random()*(e-i)},randFloatSpread:function(i){return i*(.5-Math.random())},seededRandom:function(i){i!==void 0&&(zc=i);let e=zc+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(i){return i*zi},radToDeg:function(i){return i*Pr},isPowerOfTwo:function(i){return(i&i-1)==0&&i!==0},ceilPowerOfTwo:function(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))},floorPowerOfTwo:function(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))},setQuaternionFromProperEuler:function(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),m=a((n-e)/2);switch(r){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:Ve,denormalize:rn},ie=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Le=class i{constructor(e,t,n,r,s,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],v=r[0],g=r[3],f=r[6],x=r[1],_=r[4],y=r[7],R=r[2],T=r[5],C=r[8];return s[0]=a*v+o*x+l*R,s[3]=a*g+o*_+l*T,s[6]=a*f+o*y+l*C,s[1]=c*v+h*x+u*R,s[4]=c*g+h*_+u*T,s[7]=c*f+h*y+u*C,s[2]=d*v+p*x+m*R,s[5]=d*g+p*_+m*T,s[8]=d*f+p*y+m*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,m=t*u+n*d+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=u*v,e[1]=(r*c-h*n)*v,e[2]=(o*n-r*a)*v,e[3]=d*v,e[4]=(h*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(za.makeScale(e,t)),this}rotate(e){return this.premultiply(za.makeRotation(-e)),this}translate(e,t){return this.premultiply(za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},za=new Le;function Kh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dd(){let i=ks("canvas");return i.style.display="block",i}var Hc={};function Os(i){i in Hc||(Hc[i]=!0,console.warn(i))}var Gc=new Le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kc=new Le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),hr={[Xn]:{transfer:Fs,primaries:zs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Rt]:{transfer:qe,primaries:zs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ga]:{transfer:Fs,primaries:Hs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(kc),fromReference:i=>i.applyMatrix3(Gc)},[Ql]:{transfer:qe,primaries:Hs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(kc),fromReference:i=>i.applyMatrix3(Gc).convertLinearToSRGB()}},pd=new Set([Xn,ga]),ke={enabled:!0,_workingColorSpace:Xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!pd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=hr[e].toReference;return(0,hr[t].fromReference)(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return hr[i].primaries},getTransfer:function(i){return i===Oi?Fs:hr[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(hr[e].luminanceCoefficients)}};function Hi(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function Ha(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var xi,el=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xi===void 0&&(xi=ks("canvas")),xi.width=e.width,xi.height=e.height;let n=xi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=ks("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*Hi(s[a]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Hi(t[n]/255)):t[n]=Hi(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},md=0,Vs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=mn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ga(r[a].image)):s.push(Ga(r[a]))}else s=Ga(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Ga(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?el.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var fd=0,Ut=class i extends Vn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=sn,l=An,c=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=mn(),this.name="",this.source=new Vs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wr:e.x=e.x-Math.floor(e.x);break;case Ar:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case wr:e.y=e.y-Math.floor(e.y);break;case Ar:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null,Ut.DEFAULT_MAPPING=zh,Ut.DEFAULT_ANISOTROPY=1;var Ke=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],v=l[2],g=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(p+1)/2,R=(f+1)/2,T=(h+d)/4,C=(u+v)/4,B=(m+g)/4;return _>y&&_>R?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=T/n,s=C/n):y>R?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=T/r,s=B/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=C/s,r=B/s),this.set(n,r,s,t),this}let x=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tl=class extends Vn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Ut(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Vs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends tl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ws=class extends Ut{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var nl=class extends Ut{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],d=s[a+0],p=s[a+1],m=s[a+2],v=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=m,void(e[t+3]=v);if(u!==v||l!==d||c!==p||h!==m){let g=1-o,f=l*d+c*p+h*m+u*v,x=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let R=Math.sqrt(_),T=Math.atan2(R,f*x);g=Math.sin(g*T)/R,o=Math.sin(o*T)/R}let y=o*x;if(l=l*g+d*y,c=c*g+p*y,h=h*g+m*y,u=u*g+v*y,g===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[a],d=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+h*u+l*p-c*d,e[t+1]=l*m+h*d+c*u-o*p,e[t+2]=c*m+h*p+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(s/2),d=l(n/2),p=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ka.copy(this).projectOnVector(e),this.sub(ka)}reflect(e){return this.sub(ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ka=new E,Vc=new Xt,on=class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,en):en.fromBufferAttribute(s,a),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),es.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),es.copy(n.boundingBox)),es.applyMatrix4(e.matrixWorld),this.union(es)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),ts.subVectors(this.max,ur),yi.subVectors(e.a,ur),Mi.subVectors(e.b,ur),Si.subVectors(e.c,ur),Dn.subVectors(Mi,yi),Nn.subVectors(Si,Mi),Qn.subVectors(yi,Si);let t=[0,-Dn.z,Dn.y,0,-Nn.z,Nn.y,0,-Qn.z,Qn.y,Dn.z,0,-Dn.x,Nn.z,0,-Nn.x,Qn.z,0,-Qn.x,-Dn.y,Dn.x,0,-Nn.y,Nn.x,0,-Qn.y,Qn.x,0];return!!Va(t,yi,Mi,Si,ts)&&(t=[1,0,0,0,1,0,0,0,1],!!Va(t,yi,Mi,Si,ts)&&(ns.crossVectors(Dn,Nn),t=[ns.x,ns.y,ns.z],Va(t,yi,Mi,Si,ts)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(en).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},xn=[new E,new E,new E,new E,new E,new E,new E,new E],en=new E,es=new on,yi=new E,Mi=new E,Si=new E,Dn=new E,Nn=new E,Qn=new E,ur=new E,ts=new E,ns=new E,ei=new E;function Va(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ei.fromArray(i,s);let o=r.x*Math.abs(ei.x)+r.y*Math.abs(ei.y)+r.z*Math.abs(ei.z),l=e.dot(ei),c=t.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var gd=new on,dr=new E,Wa=new E,ln=class{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):gd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);let t=dr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=.5*(n-this.radius);this.center.addScaledVector(dr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(Wa)),this.expandByPoint(dr.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},yn=new E,Xa=new E,is=new E,On=new E,ja=new E,rs=new E,qa=new E,qi=class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Xa.copy(e).add(t).multiplyScalar(.5),is.copy(t).sub(e).normalize(),On.copy(this.origin).sub(Xa);let s=.5*e.distanceTo(t),a=-this.direction.dot(is),o=On.dot(this.direction),l=-On.dot(is),c=On.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*l-o,d=a*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){let v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Xa).addScaledVector(is,d),p}intersectSphere(e,t){yn.subVectors(e.center,this.origin);let n=yn.dot(this.direction),r=yn.dot(yn)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r?null:((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>r?null:((o>n||n!=n)&&(n=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,n,r,s){ja.subVectors(t,e),rs.subVectors(n,e),qa.crossVectors(ja,rs);let a,o=this.direction.dot(qa);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}On.subVectors(this.origin,e);let l=a*this.direction.dot(rs.crossVectors(On,rs));if(l<0)return null;let c=a*this.direction.dot(ja.cross(On));if(c<0||l+c>o)return null;let h=-a*On.dot(qa);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},we=class i{constructor(e,t,n,r,s,a,o,l,c,h,u,d,p,m,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,u,d,p,m,v,g)}set(e,t,n,r,s,a,o,l,c,h,u,d,p,m,v,g){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=v,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/bi.setFromMatrixColumn(e,0).length(),s=1/bi.setFromMatrixColumn(e,1).length(),a=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,m=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,m=c*h,v=c*u;t[0]=d+v*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,m=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,m=o*h,v=o*u;t[0]=l*h,t[4]=m*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=m*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+m,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,p=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vd,e,_d)}lookAt(e,t,n){let r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Bn.crossVectors(n,Bt),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Bn.crossVectors(n,Bt)),Bn.normalize(),ss.crossVectors(Bt,Bn),r[0]=Bn.x,r[4]=ss.x,r[8]=Bt.x,r[1]=Bn.y,r[5]=ss.y,r[9]=Bt.y,r[2]=Bn.z,r[6]=ss.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],v=n[6],g=n[10],f=n[14],x=n[3],_=n[7],y=n[11],R=n[15],T=r[0],C=r[4],B=r[8],D=r[12],H=r[1],G=r[5],F=r[9],Y=r[13],k=r[2],Z=r[6],X=r[10],Q=r[14],ae=r[3],ce=r[7],ge=r[11],te=r[15];return s[0]=a*T+o*H+l*k+c*ae,s[4]=a*C+o*G+l*Z+c*ce,s[8]=a*B+o*F+l*X+c*ge,s[12]=a*D+o*Y+l*Q+c*te,s[1]=h*T+u*H+d*k+p*ae,s[5]=h*C+u*G+d*Z+p*ce,s[9]=h*B+u*F+d*X+p*ge,s[13]=h*D+u*Y+d*Q+p*te,s[2]=m*T+v*H+g*k+f*ae,s[6]=m*C+v*G+g*Z+f*ce,s[10]=m*B+v*F+g*X+f*ge,s[14]=m*D+v*Y+g*Q+f*te,s[3]=x*T+_*H+y*k+R*ae,s[7]=x*C+_*G+y*Z+R*ce,s[11]=x*B+_*F+y*X+R*ge,s[15]=x*D+_*Y+y*Q+R*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-r*c*u-s*o*d+n*c*d+r*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+e[15]*(-r*o*h-t*l*u+t*o*d+r*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],v=e[13],g=e[14],f=e[15],x=u*g*c-v*d*c+v*l*p-o*g*p-u*l*f+o*d*f,_=m*d*c-h*g*c-m*l*p+a*g*p+h*l*f-a*d*f,y=h*v*c-m*u*c+m*o*p-a*v*p-h*o*f+a*u*f,R=m*u*l-h*v*l-m*o*d+a*v*d+h*o*g-a*u*g,T=t*x+n*_+r*y+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return e[0]=x*C,e[1]=(v*d*s-u*g*s-v*r*p+n*g*p+u*r*f-n*d*f)*C,e[2]=(o*g*s-v*l*s+v*r*c-n*g*c-o*r*f+n*l*f)*C,e[3]=(u*l*s-o*d*s-u*r*c+n*d*c+o*r*p-n*l*p)*C,e[4]=_*C,e[5]=(h*g*s-m*d*s+m*r*p-t*g*p-h*r*f+t*d*f)*C,e[6]=(m*l*s-a*g*s-m*r*c+t*g*c+a*r*f-t*l*f)*C,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*p+t*l*p)*C,e[8]=y*C,e[9]=(m*u*s-h*v*s-m*n*p+t*v*p+h*n*f-t*u*f)*C,e[10]=(a*v*s-m*o*s+m*n*c-t*v*c-a*n*f+t*o*f)*C,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*C,e[12]=R*C,e[13]=(h*v*r-m*u*r+m*n*d-t*v*d-h*n*g+t*u*g)*C,e[14]=(m*o*r-a*v*r-m*n*l+t*v*l+a*n*g-t*o*g)*C,e[15]=(a*u*r-h*o*r+h*n*l-t*u*l-a*n*d+t*o*d)*C,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,m=s*u,v=a*h,g=a*u,f=o*u,x=l*c,_=l*h,y=l*u,R=n.x,T=n.y,C=n.z;return r[0]=(1-(v+f))*R,r[1]=(p+y)*R,r[2]=(m-_)*R,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(d+f))*T,r[6]=(g+x)*T,r[7]=0,r[8]=(m+_)*C,r[9]=(g-x)*C,r[10]=(1-(d+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=bi.set(r[0],r[1],r[2]).length(),a=bi.set(r[4],r[5],r[6]).length(),o=bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],tn.copy(this);let l=1/s,c=1/a,h=1/o;return tn.elements[0]*=l,tn.elements[1]*=l,tn.elements[2]*=l,tn.elements[4]*=c,tn.elements[5]*=c,tn.elements[6]*=c,tn.elements[8]*=h,tn.elements[9]*=h,tn.elements[10]*=h,t.setFromRotationMatrix(tn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),p,m;if(o===ji)p=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(o!==Gs)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),m=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(a-s),d=(t+e)*c,p=(n+r)*h,m,v;if(o===ji)m=(a+s)*u,v=-2*u;else{if(o!==Gs)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=s*u,v=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},bi=new E,tn=new we,vd=new E(0,0,0),_d=new E(1,1,1),Bn=new E,ss=new E,Bt=new E,Wc=new we,Xc=new Xt,jt=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jt.DEFAULT_ORDER="XYZ";var Xs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},xd=0,jc=new E,Ei=new Xt,Mn=new we,as=new E,pr=new E,yd=new E,Md=new Xt,qc=new E(1,0,0),Yc=new E(0,1,0),Zc=new E(0,0,1),Jc={type:"added"},Sd={type:"removed"},Ti={type:"childadded",child:null},Ya={type:"childremoved",child:null},yt=class i extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new E,t=new jt,n=new Xt,r=new E(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new we},normalMatrix:{value:new Le}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(qc,e)}rotateY(e){return this.rotateOnAxis(Yc,e)}rotateZ(e){return this.rotateOnAxis(Zc,e)}translateOnAxis(e,t){return jc.copy(e).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qc,e)}translateY(e){return this.translateOnAxis(Yc,e)}translateZ(e){return this.translateOnAxis(Zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?as.copy(e):as.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(pr,as,this.up):Mn.lookAt(as,pr,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),Ei.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jc),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sd),Ya.child=e,this.dispatchEvent(Ya),Ya.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jc),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,e,yd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,Md,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};yt.DEFAULT_UP=new E(0,1,0),yt.DEFAULT_MATRIX_AUTO_UPDATE=!0,yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var nn=new E,Sn=new E,Za=new E,bn=new E,wi=new E,Ai=new E,Kc=new E,Ja=new E,Ka=new E,$a=new E,Qa=new Ke,eo=new Ke,to=new Ke,wn=class i{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),nn.subVectors(e,t),r.cross(nn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){nn.subVectors(r,t),Sn.subVectors(n,t),Za.subVectors(e,t);let a=nn.dot(nn),o=nn.dot(Sn),l=nn.dot(Za),c=Sn.dot(Sn),h=Sn.dot(Za),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-p-m,m,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,bn)!==null&&bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bn.x),l.addScaledVector(a,bn.y),l.addScaledVector(o,bn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Qa.setScalar(0),eo.setScalar(0),to.setScalar(0),Qa.fromBufferAttribute(e,t),eo.fromBufferAttribute(e,n),to.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Qa,s.x),a.addScaledVector(eo,s.y),a.addScaledVector(to,s.z),a}static isFrontFacing(e,t,n,r){return nn.subVectors(n,t),Sn.subVectors(e,t),nn.cross(Sn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),.5*nn.cross(Sn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;wi.subVectors(r,n),Ai.subVectors(s,n),Ja.subVectors(e,n);let l=wi.dot(Ja),c=Ai.dot(Ja);if(l<=0&&c<=0)return t.copy(n);Ka.subVectors(e,r);let h=wi.dot(Ka),u=Ai.dot(Ka);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(wi,a);$a.subVectors(e,s);let p=wi.dot($a),m=Ai.dot($a);if(m>=0&&p<=m)return t.copy(s);let v=p*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Ai,o);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return Kc.subVectors(s,r),o=(u-h)/(u-h+(p-m)),t.copy(r).addScaledVector(Kc,o);let f=1/(g+v+d);return a=v*f,o=d*f,t.copy(n).addScaledVector(wi,a).addScaledVector(Ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},os={h:0,s:0,l:0};function no(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ke.workingColorSpace){if(e=Qo(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=no(a,s,e+1/3),this.g=no(a,s,e),this.b=no(a,s,e-1/3)}return ke.toWorkingColorSpace(this,r),this}setStyle(e,t=Rt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=$h[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return ke.fromWorkingColorSpace(Et.copy(this),e),65536*Math.round(_t(255*Et.r,0,255))+256*Math.round(_t(255*Et.g,0,255))+Math.round(_t(255*Et.b,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.fromWorkingColorSpace(Et.copy(this),t);let n=Et.r,r=Et.g,s=Et.b,a=Math.max(n,r,s),o=Math.min(n,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ke.workingColorSpace){return ke.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Rt){ke.fromWorkingColorSpace(Et.copy(this),e);let t=Et.r,n=Et.g,r=Et.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(e,t,n){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(os);let n=Sr(Fn.h,os.h,t),r=Sr(Fn.s,os.s,t),s=Sr(Fn.l,os.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Et=new Te;Te.NAMES=$h;var bd=0,Wn=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=mn(),this.name="",this.type="Material",this.blending=1,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=Mo,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yo&&(n.blendSrc=this.blendSrc),this.blendDst!==Mo&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},zt=class extends Wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},mf=Ed();function Ed(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,r[l]=24,r[256|l]=24):(n[l]=31744,n[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(8388608&c)==0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var ht=new E,ls=new ie,Dt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$o,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ls.fromBufferAttribute(this,t),ls.applyMatrix3(e),this.setXY(t,ls.x,ls.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ve(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),r=Ve(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),r=Ve(r,this.array),s=Ve(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$o&&(e.usage=this.usage),e}};var js=class extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var qs=class extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Pe=class extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Td=0,Vt=new we,io=new yt,Ri=new E,Ft=new on,mr=new on,vt=new E,at=class i extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kh(e)?qs:js)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Le().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return io.lookAt(e),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new E,1/0);if(e){let n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];mr.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Ft.min,mr.min),Ft.expandByPoint(vt),vt.addVectors(Ft.max,mr.max),Ft.expandByPoint(vt)):(Ft.expandByPoint(mr.min),Ft.expandByPoint(mr.max))}Ft.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(vt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)vt.fromBufferAttribute(o,c),l&&(Ri.fromBufferAttribute(e,c),vt.add(Ri)),r=Math.max(r,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let B=0;B<n.count;B++)o[B]=new E,l[B]=new E;let c=new E,h=new E,u=new E,d=new ie,p=new ie,m=new ie,v=new E,g=new E;function f(B,D,H){c.fromBufferAttribute(n,B),h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,H),d.fromBufferAttribute(s,B),p.fromBufferAttribute(s,D),m.fromBufferAttribute(s,H),h.sub(c),u.sub(c),p.sub(d),m.sub(d);let G=1/(p.x*m.y-m.x*p.y);isFinite(G)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(G),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(G),o[B].add(v),o[D].add(v),o[H].add(v),l[B].add(g),l[D].add(g),l[H].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let B=0,D=x.length;B<D;++B){let H=x[B],G=H.start;for(let F=G,Y=G+H.count;F<Y;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let _=new E,y=new E,R=new E,T=new E;function C(B){R.fromBufferAttribute(r,B),T.copy(R);let D=o[B];_.copy(D),_.sub(R.multiplyScalar(R.dot(D))).normalize(),y.crossVectors(T,D);let H=y.dot(l[B])<0?-1:1;a.setXYZW(B,_.x,_.y,_.z,H)}for(let B=0,D=x.length;B<D;++B){let H=x[B],G=H.start;for(let F=G,Y=G+H.count;F<Y;F+=3)C(e.getX(F+0)),C(e.getX(F+1)),C(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new E,s=new E,a=new E,o=new E,l=new E,c=new E,h=new E,u=new E;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,m=0;for(let v=0,g=l.length;v<g;v++){p=o.isInterleavedBufferAttribute?l[v]*o.data.stride+o.offset:l[v]*h;for(let f=0;f<h;f++)d[m++]=c[p++]}return new Dt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$c=new we,ti=new qi,cs=new ln,Qc=new E,hs=new E,us=new E,ds=new E,ro=new E,ps=new E,eh=new E,ms=new E,xt=class extends yt{constructor(e=new at,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){ps.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(ro.fromBufferAttribute(u,e),a?ps.addScaledVector(ro,h):ps.addScaledVector(ro.sub(t),h))}t.add(ps)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(s),ti.copy(e.ray).recast(e.near),cs.containsPoint(ti.origin)===!1&&(ti.intersectSphere(cs,Qc)===null||ti.origin.distanceToSquared(Qc)>(e.far-e.near)**2))return;$c.copy(s).invert(),ti.copy(e.ray).applyMatrix4($c),n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,ti)}}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let g=d[m],f=a[g.materialIndex];for(let x=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));x<_;x+=3)r=fs(this,f,e,n,c,h,u,o.getX(x),o.getX(x+1),o.getX(x+2)),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}else for(let m=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);m<v;m+=3)r=fs(this,a,e,n,c,h,u,o.getX(m),o.getX(m+1),o.getX(m+2)),r&&(r.faceIndex=Math.floor(m/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let g=d[m],f=a[g.materialIndex];for(let x=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));x<_;x+=3)r=fs(this,f,e,n,c,h,u,x,x+1,x+2),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}else for(let m=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);m<v;m+=3)r=fs(this,a,e,n,c,h,u,m,m+1,m+2),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}};function fs(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,hs),i.getVertexPosition(l,us),i.getVertexPosition(c,ds);let h=(function(u,d,p,m,v,g,f,x){let _;if(_=d.side===Lt?m.intersectTriangle(f,g,v,!0,x):m.intersectTriangle(v,g,f,d.side===kn,x),_===null)return null;ms.copy(x),ms.applyMatrix4(u.matrixWorld);let y=p.ray.origin.distanceTo(ms);return y<p.near||y>p.far?null:{distance:y,point:ms.clone(),object:u}})(i,e,t,n,hs,us,ds,eh);if(h){let u=new E;wn.getBarycoord(eh,hs,us,ds,u),r&&(h.uv=wn.getInterpolatedAttribute(r,o,l,c,u,new ie)),s&&(h.uv1=wn.getInterpolatedAttribute(s,o,l,c,u,new ie)),a&&(h.normal=wn.getInterpolatedAttribute(a,o,l,c,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new E,materialIndex:0};wn.getNormal(hs,us,ds,d.normal),h.face=d,h.barycoord=u}return h}var Me=class i extends at{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function m(v,g,f,x,_,y,R,T,C,B,D){let H=y/C,G=R/B,F=y/2,Y=R/2,k=T/2,Z=C+1,X=B+1,Q=0,ae=0,ce=new E;for(let ge=0;ge<X;ge++){let te=ge*G-Y;for(let re=0;re<Z;re++){let me=re*H-F;ce[v]=me*x,ce[g]=te*_,ce[f]=k,c.push(ce.x,ce.y,ce.z),ce[v]=0,ce[g]=0,ce[f]=T>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(re/C),u.push(1-ge/B),Q+=1}}for(let ge=0;ge<B;ge++)for(let te=0;te<C;te++){let re=d+te+Z*ge,me=d+te+Z*(ge+1),ue=d+(te+1)+Z*(ge+1),A=d+(te+1)+Z*ge;l.push(re,me,A),l.push(me,ue,A),ae+=6}o.addGroup(p,ae,D),p+=ae,d+=Q}m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,r,a,2),m("x","z","y",1,-1,e,n,-t,r,a,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Yi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function At(i){let e={};for(let t=0;t<i.length;t++){let n=Yi(i[t]);for(let r in n)e[r]=n[r]}return e}function Qh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}var wd={clone:Yi,merge:At},fn=class extends Wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ir=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zn=new E,th=new ie,nh=new ie,Ct=class extends Ir{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Pr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*zi*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Pr*Math.atan(Math.tan(.5*zi*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,th,nh),t.subVectors(nh,th)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*zi*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ci=-90,il=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ct(Ci,1,e,t);r.layers=this.layers,this.add(r);let s=new Ct(Ci,1,e,t);s.layers=this.layers,this.add(s);let a=new Ct(Ci,1,e,t);a.layers=this.layers,this.add(a);let o=new Ct(Ci,1,e,t);o.layers=this.layers,this.add(o);let l=new Ct(Ci,1,e,t);l.layers=this.layers,this.add(l);let c=new Ct(Ci,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===ji)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Gs)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ys=class extends Ut{constructor(e,t,n,r,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:ki,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},rl=class extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ys(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Me(5,5,5),s=new fn({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:0});s.uniforms.tEquirect.value=t;let a=new xt(r,s),o=t.minFilter;return t.minFilter===Bi&&(t.minFilter=dn),new il(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},so=new E,Ad=new E,Rd=new Le,Tn=class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=so.subVectors(n,t).cross(Ad.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(so),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rd.getNormalMatrix(e),r=this.coplanarPoint(so).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ni=new ln,gs=new E,Zi=class{constructor(e=new Tn,t=new Tn,n=new Tn,r=new Tn,s=new Tn,a=new Tn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],m=r[9],v=r[10],g=r[11],f=r[12],x=r[13],_=r[14],y=r[15];if(n[0].setComponents(l-s,d-c,g-p,y-f).normalize(),n[1].setComponents(l+s,d+c,g+p,y+f).normalize(),n[2].setComponents(l+a,d+h,g+m,y+x).normalize(),n[3].setComponents(l-a,d-h,g-m,y-x).normalize(),n[4].setComponents(l-o,d-u,g-v,y-_).normalize(),t===ji)n[5].setComponents(l+o,d+u,g+v,y+_).normalize();else{if(t!==Gs)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,v,_).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(gs.x=r.normal.x>0?e.max.x:e.min.x,gs.y=r.normal.y>0?e.max.y:e.min.y,gs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function eu(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Cd(i){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(i.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=i.createBuffer(),u;if(i.bindBuffer(a,h),i.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=i.FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?i.HALF_FLOAT:i.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=i.SHORT;else if(o instanceof Uint32Array)u=i.UNSIGNED_INT;else if(o instanceof Int32Array)u=i.INT;else if(o instanceof Int8Array)u=i.BYTE;else if(o instanceof Uint8Array)u=i.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=i.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,n));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(i.bindBuffer(o,s),c.length===0)i.bufferSubData(o,0,l);else{c.sort(((u,d)=>u.start-d.start));let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];i.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,n),r.version=t.version}}}}var Nt=class i extends at{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],m=[],v=[],g=[];for(let f=0;f<h;f++){let x=f*d-a;for(let _=0;_<c;_++){let y=_*u-s;m.push(y,-x,0),v.push(0,0,1),g.push(_/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){let _=x+c*f,y=x+c*(f+1),R=x+1+c*(f+1),T=x+1+c*f;p.push(_,y,T),p.push(y,R,T)}this.setIndex(p),this.setAttribute("position",new Pe(m,3)),this.setAttribute("normal",new Pe(v,3)),this.setAttribute("uv",new Pe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ie={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},le={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},un={basic:{uniforms:At([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:At([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:At([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:At([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:At([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:At([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:At([le.points,le.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:At([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:At([le.common,le.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:At([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:At([le.sprite,le.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:At([le.common,le.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:At([le.lights,le.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};un.physical={uniforms:At([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};var vs={r:0,b:0,g:0},ii=new jt,Pd=new we;function Id(i,e,t,n,r,s,a){let o=new Te(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function m(g){let f=g.isScene===!0?g.background:null;return f&&f.isTexture&&(f=(g.backgroundBlurriness>0?t:e).get(f)),f}function v(g,f){g.getRGB(vs,Qh(i)),n.buffers.color.setClear(vs.r,vs.g,vs.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(g,f=1){o.set(g),h=f,v(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(g){h=g,v(o,h)},render:function(g){let f=!1,x=m(g);x===null?v(o,h):x&&x.isColor&&(v(x,1),f=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||f)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))},addToRenderList:function(g,f){let x=m(f);x&&(x.isCubeTexture||x.mapping===fa)?(c===void 0&&(c=new xt(new Me(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Yi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,y,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),ii.copy(f.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Pd.makeRotationFromEuler(ii)),c.material.toneMapped=ke.getTransfer(x.colorSpace)!==qe,u===x&&d===x.version&&p===i.toneMapping||(c.material.needsUpdate=!0,u=x,d=x.version,p=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new xt(new Nt(2,2),new fn({name:"BackgroundMaterial",uniforms:Yi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=ke.getTransfer(x.colorSpace)!==qe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),u===x&&d===x.version&&p===i.toneMapping||(l.material.needsUpdate=!0,u=x,d=x.version,p=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}}}function Ld(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=c(null),s=r,a=!1;function o(f){return i.bindVertexArray(f)}function l(f){return i.deleteVertexArray(f)}function c(f){let x=[],_=[],y=[];for(let R=0;R<t;R++)x[R]=0,_[R]=0,y[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:_,attributeDivisors:y,object:f,attributes:{},index:null}}function h(){let f=s.newAttributes;for(let x=0,_=f.length;x<_;x++)f[x]=0}function u(f){d(f,0)}function d(f,x){let _=s.newAttributes,y=s.enabledAttributes,R=s.attributeDivisors;_[f]=1,y[f]===0&&(i.enableVertexAttribArray(f),y[f]=1),R[f]!==x&&(i.vertexAttribDivisor(f,x),R[f]=x)}function p(){let f=s.newAttributes,x=s.enabledAttributes;for(let _=0,y=x.length;_<y;_++)x[_]!==f[_]&&(i.disableVertexAttribArray(_),x[_]=0)}function m(f,x,_,y,R,T,C){C===!0?i.vertexAttribIPointer(f,x,_,R,T):i.vertexAttribPointer(f,x,_,y,R,T)}function v(){g(),a=!0,s!==r&&(s=r,o(s.object))}function g(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(f,x,_,y,R){let T=!1,C=(function(B,D,H){let G=H.wireframe===!0,F=n[B.id];F===void 0&&(F={},n[B.id]=F);let Y=F[D.id];Y===void 0&&(Y={},F[D.id]=Y);let k=Y[G];return k===void 0&&(k=c(i.createVertexArray()),Y[G]=k),k})(y,_,x);s!==C&&(s=C,o(s.object)),T=(function(B,D,H,G){let F=s.attributes,Y=D.attributes,k=0,Z=H.getAttributes();for(let X in Z)if(Z[X].location>=0){let Q=F[X],ae=Y[X];if(ae===void 0&&(X==="instanceMatrix"&&B.instanceMatrix&&(ae=B.instanceMatrix),X==="instanceColor"&&B.instanceColor&&(ae=B.instanceColor)),Q===void 0||Q.attribute!==ae||ae&&Q.data!==ae.data)return!0;k++}return s.attributesNum!==k||s.index!==G})(f,y,_,R),T&&(function(B,D,H,G){let F={},Y=D.attributes,k=0,Z=H.getAttributes();for(let X in Z)if(Z[X].location>=0){let Q=Y[X];Q===void 0&&(X==="instanceMatrix"&&B.instanceMatrix&&(Q=B.instanceMatrix),X==="instanceColor"&&B.instanceColor&&(Q=B.instanceColor));let ae={};ae.attribute=Q,Q&&Q.data&&(ae.data=Q.data),F[X]=ae,k++}s.attributes=F,s.attributesNum=k,s.index=G})(f,y,_,R),R!==null&&e.update(R,i.ELEMENT_ARRAY_BUFFER),(T||a)&&(a=!1,(function(B,D,H,G){h();let F=G.attributes,Y=H.getAttributes(),k=D.defaultAttributeValues;for(let Z in Y){let X=Y[Z];if(X.location>=0){let Q=F[Z];if(Q===void 0&&(Z==="instanceMatrix"&&B.instanceMatrix&&(Q=B.instanceMatrix),Z==="instanceColor"&&B.instanceColor&&(Q=B.instanceColor)),Q!==void 0){let ae=Q.normalized,ce=Q.itemSize,ge=e.get(Q);if(ge===void 0)continue;let te=ge.buffer,re=ge.type,me=ge.bytesPerElement,ue=re===i.INT||re===i.UNSIGNED_INT||Q.gpuType===jl;if(Q.isInterleavedBufferAttribute){let A=Q.data,M=A.stride,N=Q.offset;if(A.isInstancedInterleavedBuffer){for(let V=0;V<X.locationSize;V++)d(X.location+V,A.meshPerAttribute);B.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let V=0;V<X.locationSize;V++)u(X.location+V);i.bindBuffer(i.ARRAY_BUFFER,te);for(let V=0;V<X.locationSize;V++)m(X.location+V,ce/X.locationSize,re,ae,M*me,(N+ce/X.locationSize*V)*me,ue)}else{if(Q.isInstancedBufferAttribute){for(let A=0;A<X.locationSize;A++)d(X.location+A,Q.meshPerAttribute);B.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let A=0;A<X.locationSize;A++)u(X.location+A);i.bindBuffer(i.ARRAY_BUFFER,te);for(let A=0;A<X.locationSize;A++)m(X.location+A,ce/X.locationSize,re,ae,ce*me,ce/X.locationSize*A*me,ue)}}else if(k!==void 0){let ae=k[Z];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(X.location,ae);break;case 3:i.vertexAttrib3fv(X.location,ae);break;case 4:i.vertexAttrib4fv(X.location,ae);break;default:i.vertexAttrib1fv(X.location,ae)}}}}p()})(f,x,_,y),R!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))},reset:v,resetDefaultState:g,dispose:function(){v();for(let f in n){let x=n[f];for(let _ in x){let y=x[_];for(let R in y)l(y[R].object),delete y[R];delete x[_]}delete n[f]}},releaseStatesOfGeometry:function(f){if(n[f.id]===void 0)return;let x=n[f.id];for(let _ in x){let y=x[_];for(let R in y)l(y[R].object),delete y[R];delete x[_]}delete n[f.id]},releaseStatesOfProgram:function(f){for(let x in n){let _=n[x];if(_[f.id]===void 0)continue;let y=_[f.id];for(let R in y)l(y[R].object),delete y[R];delete _[f.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Ud(i,e,t){let n;function r(s,a,o){o!==0&&(i.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){i.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)r(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u];for(let u=0;u<l.length;u++)t.update(h,n,l[u])}}}function Dd(i,e,t,n){let r;function s(d){if(d==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(c===!0){let d=e.get("EXT_clip_control");d.clipControlEXT(d.LOWER_LEFT_EXT,d.ZERO_TO_ONE_EXT)}let h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(d){return d===sn||n.convert(d)===i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===Vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==An&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==pn&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:i.getParameter(i.MAX_TEXTURE_SIZE),maxCubemapSize:i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:i.getParameter(i.MAX_VERTEX_ATTRIBS),maxVertexUniforms:i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:i.getParameter(i.MAX_VARYING_VECTORS),maxFragmentUniforms:i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:i.getParameter(i.MAX_SAMPLES)}}function Nd(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Tn,o=new Le,l={value:null,needsUpdate:!1};function c(h,u,d,p){let m=h!==null?h.length:0,v=null;if(m!==0){if(v=l.value,p!==!0||v===null){let g=d+4*m,f=u.matrixWorldInverse;o.getNormalMatrix(f),(v===null||v.length<g)&&(v=new Float32Array(g));for(let x=0,_=d;x!==m;++x,_+=4)a.copy(h[x]).applyMatrix4(f,o),a.normal.toArray(v,_),v[_+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,v}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||r;return r=u,n=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,m=h.clipIntersection,v=h.clipShadows,g=i.get(h);if(!r||p===null||p.length===0||s&&!v)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let f=s?0:n,x=4*f,_=g.clippingState||null;l.value=_,_=c(p,u,x,d);for(let y=0;y!==x;++y)_[y]=t[y];g.clippingState=_,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=f}}}function Od(i){let e=new WeakMap;function t(r,s){return s===So?r.mapping=ki:s===bo&&(r.mapping=Vi),r}function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===So||s===bo){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new rl(a.height);return o.fromEquirectangularTexture(i,r),e.set(r,o),r.addEventListener("dispose",n),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var Zs=class extends Ir{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ih=[.125,.215,.35,.446,.526,.582],fr=20,ao=new Zs,rh=new Te,oo=null,lo=0,co=0,ho=!1,si=(1+Math.sqrt(5))/2,Pi=1/si,sh=[new E(-si,Pi,0),new E(si,Pi,0),new E(-Pi,0,si),new E(Pi,0,si),new E(0,si,-Pi),new E(0,si,Pi),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],Js=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){oo=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oo,lo,co),this._renderer.xr.enabled=ho,e.scissorTest=!1,_s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===Vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oo=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Vr,format:sn,colorSpace:Xn,depthBuffer:!1},r=ah(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ah(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+ih.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let m=1/p;d>a-4?m=ih[d-a+4-1]:d===0&&(m=0),c.push(m);let v=1/(p-2),g=-v,f=1+v,x=[g,g,f,g,f,f,g,g,f,f,g,f],_=6,y=6,R=3,T=2,C=1,B=new Float32Array(R*y*_),D=new Float32Array(T*y*_),H=new Float32Array(C*y*_);for(let F=0;F<_;F++){let Y=F%3*2/3-1,k=F>2?0:-1,Z=[Y,k,0,Y+2/3,k,0,Y+2/3,k+1,0,Y,k,0,Y+2/3,k+1,0,Y,k+1,0];B.set(Z,R*y*F),D.set(x,T*y*F);let X=[F,F,F,F,F,F];H.set(X,C*y*F)}let G=new at;G.setAttribute("position",new Dt(B,R)),G.setAttribute("uv",new Dt(D,T)),G.setAttribute("faceIndex",new Dt(H,C)),o.push(G),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(fr),h=new E(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,ao)}_sceneToCubeUV(e,t,n,r){let s=new Ct(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(rh),l.toneMapping=Hn,l.autoClear=!1;let u=new zt({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),d=new xt(new Me,u),p=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,p=!0):(u.color.copy(rh),p=!0);for(let v=0;v<6;v++){let g=v%3;g===0?(s.up.set(0,a[v],0),s.lookAt(o[v],0,0)):g===1?(s.up.set(0,0,a[v]),s.lookAt(0,o[v],0)):(s.up.set(0,a[v],0),s.lookAt(0,0,o[v]));let f=this._cubeSize;_s(r,g*f,v>2?f:0,f,f),l.setRenderTarget(r),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===ki||e.mapping===Vi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oh());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new xt(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;_s(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,ao)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=sh[(r-s-1)%sh.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new xt(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,m=s/p,v=isFinite(s)?1+Math.floor(3*m):fr;v>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to 20`);let g=[],f=0;for(let y=0;y<fr;++y){let R=y/m,T=Math.exp(-R*R/2);g.push(T),y===0?f+=T:y<v&&(f+=2*T)}for(let y=0;y<g.length;y++)g[y]=g[y]/f;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=g,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:x}=this;u.dTheta.value=p,u.mipInt.value=x-n;let _=this._sizeLods[r];_s(t,3*_*(r>x-4?r-x+4:0),4*(this._cubeSize-_),3*_,2*_),l.setRenderTarget(t),l.render(h,ao)}};function ah(i,e,t){let n=new Rn(i,e,t);return n.texture.mapping=fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _s(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function oh(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function lh(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ec(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bd(i){let e=new WeakMap,t=null;function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===So||s===bo,o=s===ki||s===Vi;if(a||o){let l=e.get(r),c=l!==void 0?l.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==c)return t===null&&(t=new Js(i)),l=a?t.fromEquirectangular(r,l):t.fromCubemap(r,l),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),l.texture;if(l!==void 0)return l.texture;{let h=r.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let m=0;m<p;m++)u[m]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new Js(i)),l=a?t.fromEquirectangular(r):t.fromCubemap(r),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),r.addEventListener("dispose",n),l.texture):null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Fd(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Os("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function zd(i,e,t,n){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,m=d.length;p<m;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let v=h.array;d=h.version;for(let g=0,f=v.length;g<f;g+=3){let x=v[g+0],_=v[g+1],y=v[g+2];c.push(x,_,_,y,y,x)}}else{if(u===void 0)return;{let v=u.array;d=u.version;for(let g=0,f=v.length/3-1;g<f;g+=3){let x=g+0,_=g+1,y=g+2;c.push(x,_,_,y,y,x)}}}let p=new(Kh(c)?qs:js)(c,1);p.version=d;let m=s.get(l);m&&e.remove(m),s.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],i.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,m=d.length;p<m;p++)e.update(d[p],i.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Hd(i,e,t){let n,r,s;function a(o,l,c){c!==0&&(i.drawElementsInstanced(n,l,r,o*s,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,l){i.drawElements(n,l,r,o*s),t.update(l,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,r,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,l,0,r,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p];for(let p=0;p<h.length;p++)t.update(d,n,h[p])}}}function Gd(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=r*(t/3);break;case i.LINES:e.lines+=r*(t/2);break;case i.LINE_STRIP:e.lines+=r*(t-1);break;case i.LINE_LOOP:e.lines+=r*t;break;case i.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function kd(i,e,t){let n=new WeakMap,r=new Ke;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==h){let B=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",B)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],f=a.morphAttributes.color||[],x=0;d===!0&&(x=1),p===!0&&(x=2),m===!0&&(x=3);let _=a.attributes.position.count*x,y=1;_>e.maxTextureSize&&(y=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let R=new Float32Array(_*y*4*h),T=new Ws(R,_,y,h);T.type=pn,T.needsUpdate=!0;let C=4*x;for(let D=0;D<h;D++){let H=v[D],G=g[D],F=f[D],Y=_*y*4*D;for(let k=0;k<H.count;k++){let Z=k*C;d===!0&&(r.fromBufferAttribute(H,k),R[Y+Z+0]=r.x,R[Y+Z+1]=r.y,R[Y+Z+2]=r.z,R[Y+Z+3]=0),p===!0&&(r.fromBufferAttribute(G,k),R[Y+Z+4]=r.x,R[Y+Z+5]=r.y,R[Y+Z+6]=r.z,R[Y+Z+7]=0),m===!0&&(r.fromBufferAttribute(F,k),R[Y+Z+8]=r.x,R[Y+Z+9]=r.y,R[Y+Z+10]=r.z,R[Y+Z+11]=F.itemSize===4?r.w:1)}}u={count:h,texture:T,size:new ie(_,y)},n.set(a,u),a.addEventListener("dispose",B)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let d=0;for(let m=0;m<l.length;m++)d+=l[m];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",l)}o.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}}}function Vd(i,e,t,n){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return c},dispose:function(){r=new WeakMap}}}var Ks=class extends Ut{constructor(e,t,n,r,s,a,o,l,c,h=1026){if(h!==Cr&&h!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Cr&&(n=ci),n===void 0&&h===Xi&&(n=Wi),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},tu=new Ut,ch=new Ks(1,1),nu=new Ws,iu=new nl,ru=new Ys,hh=[],uh=[],dh=new Float32Array(16),ph=new Float32Array(9),mh=new Float32Array(4);function er(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=hh[r];if(s===void 0&&(s=new Float32Array(r),hh[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function va(i,e){let t=uh[e];t===void 0&&(t=new Int32Array(e),uh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Wd(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xd(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function jd(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function qd(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function Yd(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;mh.set(n),i.uniformMatrix2fv(this.addr,!1,mh),pt(t,n)}}function Zd(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;ph.set(n),i.uniformMatrix3fv(this.addr,!1,ph),pt(t,n)}}function Jd(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;dh.set(n),i.uniformMatrix4fv(this.addr,!1,dh),pt(t,n)}}function Kd(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $d(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function Qd(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function ep(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function tp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function np(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function ip(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function rp(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function sp(i,e,t){let n=this.cache,r=t.allocateTextureUnit(),s;n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),this.type===i.SAMPLER_2D_SHADOW?(ch.compareFunction=Zh,s=ch):s=tu,t.setTexture2D(e||s,r)}function ap(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||iu,r)}function op(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ru,r)}function lp(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||nu,r)}function cp(i,e){i.uniform1fv(this.addr,e)}function hp(i,e){let t=er(e,this.size,2);i.uniform2fv(this.addr,t)}function up(i,e){let t=er(e,this.size,3);i.uniform3fv(this.addr,t)}function dp(i,e){let t=er(e,this.size,4);i.uniform4fv(this.addr,t)}function pp(i,e){let t=er(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function mp(i,e){let t=er(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fp(i,e){let t=er(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gp(i,e){i.uniform1iv(this.addr,e)}function vp(i,e){i.uniform2iv(this.addr,e)}function _p(i,e){i.uniform3iv(this.addr,e)}function xp(i,e){i.uniform4iv(this.addr,e)}function yp(i,e){i.uniform1uiv(this.addr,e)}function Mp(i,e){i.uniform2uiv(this.addr,e)}function Sp(i,e){i.uniform3uiv(this.addr,e)}function bp(i,e){i.uniform4uiv(this.addr,e)}function Ep(i,e,t){let n=this.cache,r=e.length,s=va(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||tu,s[a])}function Tp(i,e,t){let n=this.cache,r=e.length,s=va(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||iu,s[a])}function wp(i,e,t){let n=this.cache,r=e.length,s=va(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ru,s[a])}function Ap(i,e,t){let n=this.cache,r=e.length,s=va(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||nu,s[a])}var sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return Wd;case 35664:return Xd;case 35665:return jd;case 35666:return qd;case 35674:return Yd;case 35675:return Zd;case 35676:return Jd;case 5124:case 35670:return Kd;case 35667:case 35671:return $d;case 35668:case 35672:return Qd;case 35669:case 35673:return ep;case 5125:return tp;case 36294:return np;case 36295:return ip;case 36296:return rp;case 35678:case 36198:case 36298:case 36306:case 35682:return sp;case 35679:case 36299:case 36307:return ap;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return lp}})(t.type)}},al=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return cp;case 35664:return hp;case 35665:return up;case 35666:return dp;case 35674:return pp;case 35675:return mp;case 35676:return fp;case 5124:case 35670:return gp;case 35667:case 35671:return vp;case 35668:case 35672:return _p;case 35669:case 35673:return xp;case 5125:return yp;case 36294:return Mp;case 36295:return Sp;case 36296:return bp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return wp;case 36289:case 36303:case 36311:case 36292:return Ap}})(t.type)}},ol=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},uo=/(\w+)(\])?(\[|\.)?/g;function fh(i,e){i.seq.push(e),i.map[e.id]=e}function Rp(i,e,t){let n=i.name,r=n.length;for(uo.lastIndex=0;;){let s=uo.exec(n),a=uo.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){fh(t,c===void 0?new sl(o,i,e):new al(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new ol(o),fh(t,h)),t=h}}}var Gi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r);Rp(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function gh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Cp=37297,Pp=0;function vh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let m=p+1;h.push(`${m===l?">":" "} ${m}: ${c[p]}`)}return h.join(`
`)})(i.getShaderSource(e),a)}return r}function Ip(i,e){let t=(function(n){let r=ke.getPrimaries(ke.workingColorSpace),s=ke.getPrimaries(n),a;switch(r===s?a="":r===Hs&&s===zs?a="LinearDisplayP3ToLinearSRGB":r===zs&&s===Hs&&(a="LinearSRGBToLinearDisplayP3"),n){case Xn:case ga:return[a,"LinearTransferOETF"];case Rt:case Ql:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[a,"LinearTransferOETF"]}})(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Lp(i,e){let t;switch(e){case rd:t="Linear";break;case sd:t="Reinhard";break;case ad:t="Cineon";break;case od:t="ACESFilmic";break;case cd:t="AgX";break;case hd:t="Neutral";break;case ld:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var xs=new E;function Up(){return ke.getLuminanceCoefficients(xs),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${xs.x.toFixed(4)}, ${xs.y.toFixed(4)}, ${xs.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gr(i){return i!==""}function _h(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Dp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(i){return i.replace(Dp,Op)}var Np=new Map;function Op(i,e){let t=Ie[e];if(t===void 0){let n=Np.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return ll(t)}var Bp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yh(i){return i.replace(Bp,Fp)}function Fp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zp(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(G){let F="SHADOWMAP_TYPE_BASIC";return G.shadowMapType===Fh?F="SHADOWMAP_TYPE_PCF":G.shadowMapType===td?F="SHADOWMAP_TYPE_PCF_SOFT":G.shadowMapType===En&&(F="SHADOWMAP_TYPE_VSM"),F})(t),c=(function(G){let F="ENVMAP_TYPE_CUBE";if(G.envMap)switch(G.envMapMode){case ki:case Vi:F="ENVMAP_TYPE_CUBE";break;case fa:F="ENVMAP_TYPE_CUBE_UV"}return F})(t),h=(function(G){let F="ENVMAP_MODE_REFLECTION";return G.envMap&&G.envMapMode===Vi&&(F="ENVMAP_MODE_REFRACTION"),F})(t),u=(function(G){let F="ENVMAP_BLENDING_NONE";if(G.envMap)switch(G.combine){case Xl:F="ENVMAP_BLENDING_MULTIPLY";break;case nd:F="ENVMAP_BLENDING_MIX";break;case id:F="ENVMAP_BLENDING_ADD"}return F})(t),d=(function(G){let F=G.envMapCubeUVHeight;if(F===null)return null;let Y=Math.log2(F)-2,k=1/F;return{texelWidth:1/(3*Math.max(Math.pow(2,Y),112)),texelHeight:k,maxMip:Y}})(t),p=(function(G){return[G.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",G.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)})(t),m=(function(G){let F=[];for(let Y in G){let k=G[Y];k!==!1&&F.push("#define "+Y+" "+k)}return F.join(`
`)})(s),v=r.createProgram(),g,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(gr).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(gr).join(`
`),f.length>0&&(f+=`
`)):(g=[Mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),f=[Mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==Hn?Lp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,Ip("linearToOutputTexel",t.outputColorSpace),Up(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gr).join(`
`)),a=ll(a),a=_h(a,t),a=xh(a,t),o=ll(o),o=_h(o,t),o=xh(o,t),a=yh(a),o=yh(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=x+g+a,y=x+f+o,R=gh(r,r.VERTEX_SHADER,_),T=gh(r,r.FRAGMENT_SHADER,y);function C(G){if(i.debug.checkShaderErrors){let F=r.getProgramInfoLog(v).trim(),Y=r.getShaderInfoLog(R).trim(),k=r.getShaderInfoLog(T).trim(),Z=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,R,T);else{let Q=vh(r,R,"vertex"),ae=vh(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+F+`
`+Q+`
`+ae)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):Y!==""&&k!==""||(X=!1);X&&(G.diagnostics={runnable:Z,programLog:F,vertexShader:{log:Y,prefix:g},fragmentShader:{log:k,prefix:f}})}r.deleteShader(R),r.deleteShader(T),B=new Gi(r,v),D=(function(F,Y){let k={},Z=F.getProgramParameter(Y,F.ACTIVE_ATTRIBUTES);for(let X=0;X<Z;X++){let Q=F.getActiveAttrib(Y,X),ae=Q.name,ce=1;Q.type===F.FLOAT_MAT2&&(ce=2),Q.type===F.FLOAT_MAT3&&(ce=3),Q.type===F.FLOAT_MAT4&&(ce=4),k[ae]={type:Q.type,location:F.getAttribLocation(Y,ae),locationSize:ce}}return k})(r,v)}let B,D;r.attachShader(v,R),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),this.getUniforms=function(){return B===void 0&&C(this),B},this.getAttributes=function(){return D===void 0&&C(this),D};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(v,Cp)),H},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=T,this}var Hp=0,cl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new hl(e),t.set(e,n)),n}},hl=class{constructor(e){this.id=Hp++,this.code=e,this.usedTimes=0}};function Gp(i,e,t,n,r,s,a){let o=new Xs,l=new cl,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,p=r.vertexTextures,m=r.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(f){return c.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,x,_,y,R){let T=y.fog,C=R.geometry,B=f.isMeshStandardMaterial?y.environment:null,D=(f.isMeshStandardMaterial?t:e).get(f.envMap||B),H=D&&D.mapping===fa?D.image.height:null,G=v[f.type];f.precision!==null&&(m=r.getMaxPrecision(f.precision),m!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",m,"instead."));let F=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,Y=F!==void 0?F.length:0,k,Z,X,Q,ae=0;if(C.morphAttributes.position!==void 0&&(ae=1),C.morphAttributes.normal!==void 0&&(ae=2),C.morphAttributes.color!==void 0&&(ae=3),G){let lr=un[G];k=lr.vertexShader,Z=lr.fragmentShader}else k=f.vertexShader,Z=f.fragmentShader,l.update(f),X=l.getVertexShaderID(f),Q=l.getFragmentShaderID(f);let ce=i.getRenderTarget(),ge=R.isInstancedMesh===!0,te=R.isBatchedMesh===!0,re=!!f.map,me=!!f.matcap,ue=!!D,A=!!f.aoMap,M=!!f.lightMap,N=!!f.bumpMap,V=!!f.normalMap,w=!!f.displacementMap,P=!!f.emissiveMap,S=!!f.metalnessMap,L=!!f.roughnessMap,I=f.anisotropy>0,J=f.clearcoat>0,O=f.dispersion>0,K=f.iridescence>0,ne=f.sheen>0,$=f.transmission>0,he=I&&!!f.anisotropyMap,pe=J&&!!f.clearcoatMap,fe=J&&!!f.clearcoatNormalMap,Ae=J&&!!f.clearcoatRoughnessMap,Oe=K&&!!f.iridescenceMap,Ne=K&&!!f.iridescenceThicknessMap,ye=ne&&!!f.sheenColorMap,ze=ne&&!!f.sheenRoughnessMap,We=!!f.specularMap,$e=!!f.specularColorMap,xe=!!f.specularIntensityMap,Be=$&&!!f.transmissionMap,Xe=$&&!!f.thicknessMap,Zr=!!f.gradientMap,vi=!!f.alphaMap,Ot=f.alphaTest>0,_n=!!f.alphaHash,Yn=!!f.extensions,U=Hn;f.toneMapped&&(ce!==null&&ce.isXRRenderTarget!==!0||(U=i.toneMapping));let Zn={shaderID:G,shaderType:f.type,shaderName:f.name,vertexShader:k,fragmentShader:Z,defines:f.defines,customVertexShaderID:X,customFragmentShaderID:Q,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:m,batching:te,batchingColor:te&&R._colorsTexture!==null,instancing:ge,instancingColor:ge&&R.instanceColor!==null,instancingMorph:ge&&R.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Xn,alphaToCoverage:!!f.alphaToCoverage,map:re,matcap:me,envMap:ue,envMapMode:ue&&D.mapping,envMapCubeUVHeight:H,aoMap:A,lightMap:M,bumpMap:N,normalMap:V,displacementMap:p&&w,emissiveMap:P,normalMapObjectSpace:V&&f.normalMapType===1,normalMapTangentSpace:V&&f.normalMapType===0,metalnessMap:S,roughnessMap:L,anisotropy:I,anisotropyMap:he,clearcoat:J,clearcoatMap:pe,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ae,dispersion:O,iridescence:K,iridescenceMap:Oe,iridescenceThicknessMap:Ne,sheen:ne,sheenColorMap:ye,sheenRoughnessMap:ze,specularMap:We,specularColorMap:$e,specularIntensityMap:xe,transmission:$,transmissionMap:Be,thicknessMap:Xe,gradientMap:Zr,opaque:f.transparent===!1&&f.blending===1&&f.alphaToCoverage===!1,alphaMap:vi,alphaTest:Ot,alphaHash:_n,combine:f.combine,mapUv:re&&g(f.map.channel),aoMapUv:A&&g(f.aoMap.channel),lightMapUv:M&&g(f.lightMap.channel),bumpMapUv:N&&g(f.bumpMap.channel),normalMapUv:V&&g(f.normalMap.channel),displacementMapUv:w&&g(f.displacementMap.channel),emissiveMapUv:P&&g(f.emissiveMap.channel),metalnessMapUv:S&&g(f.metalnessMap.channel),roughnessMapUv:L&&g(f.roughnessMap.channel),anisotropyMapUv:he&&g(f.anisotropyMap.channel),clearcoatMapUv:pe&&g(f.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&g(f.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&g(f.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&g(f.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&g(f.sheenColorMap.channel),sheenRoughnessMapUv:ze&&g(f.sheenRoughnessMap.channel),specularMapUv:We&&g(f.specularMap.channel),specularColorMapUv:$e&&g(f.specularColorMap.channel),specularIntensityMapUv:xe&&g(f.specularIntensityMap.channel),transmissionMapUv:Be&&g(f.transmissionMap.channel),thicknessMapUv:Xe&&g(f.thicknessMap.channel),alphaMapUv:vi&&g(f.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(V||I),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!C.attributes.uv&&(re||vi),fog:!!T,useFog:f.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:R.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:ae,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:i.shadowMap.enabled&&_.length>0,shadowMapType:i.shadowMap.type,toneMapping:U,decodeVideoTexture:re&&f.map.isVideoTexture===!0&&ke.getTransfer(f.map.colorSpace)===qe,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===Lt,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:Yn&&f.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yn&&f.extensions.multiDraw===!0||te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return Zn.vertexUv1s=c.has(1),Zn.vertexUv2s=c.has(2),Zn.vertexUv3s=c.has(3),c.clear(),Zn},getProgramCacheKey:function(f){let x=[];if(f.shaderID?x.push(f.shaderID):(x.push(f.customVertexShaderID),x.push(f.customFragmentShaderID)),f.defines!==void 0)for(let _ in f.defines)x.push(_),x.push(f.defines[_]);return f.isRawShaderMaterial===!1&&((function(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)})(x,f),(function(_,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),_.push(o.mask)})(x,f),x.push(i.outputColorSpace)),x.push(f.customProgramCacheKey),x.join()},getUniforms:function(f){let x=v[f.type],_;if(x){let y=un[x];_=wd.clone(y.uniforms)}else _=f.uniforms;return _},acquireProgram:function(f,x){let _;for(let y=0,R=h.length;y<R;y++){let T=h[y];if(T.cacheKey===x){_=T,++_.usedTimes;break}}return _===void 0&&(_=new zp(i,x,f,s),h.push(_)),_},releaseProgram:function(f){if(--f.usedTimes==0){let x=h.indexOf(f);h[x]=h[h.length-1],h.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:h,dispose:function(){l.dispose()}}}function kp(){let i=new WeakMap;return{has:function(e){return i.has(e)},get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function Vp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Sh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bh(){let i=[],e=0,t=[],n=[],r=[];function s(a,o,l,c,h,u){let d=i[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},i[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:r,init:function(){e=0,t.length=0,n.length=0,r.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?r.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?r.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=i.length;a<o;a++){let l=i[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Vp),n.length>1&&n.sort(o||Sh),r.length>1&&r.sort(o||Sh)}}}function Wp(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),r;return n===void 0?(r=new bh,i.set(e,[r])):t>=n.length?(r=new bh,n.push(r)):r=n[t],r},dispose:function(){i=new WeakMap}}}function Xp(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new Te};break;case"SpotLight":t={position:new E,direction:new E,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new E,halfWidth:new E,halfHeight:new E}}return i[e.id]=t,t}}}var jp=0;function qp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Yp(i){let e=new Xp,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new E);let r=new E,s=new we,a=new we;return{setup:function(o){let l=0,c=0,h=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let u=0,d=0,p=0,m=0,v=0,g=0,f=0,x=0,_=0,y=0,R=0;o.sort(qp);for(let C=0,B=o.length;C<B;C++){let D=o[C],H=D.color,G=D.intensity,F=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)l+=H.r*G,c+=H.g*G,h+=H.b*G;else if(D.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(D.sh.coefficients[k],G);R++}else if(D.isDirectionalLight){let k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Z=D.shadow,X=t.get(D);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,n.directionalShadow[u]=X,n.directionalShadowMap[u]=Y,n.directionalShadowMatrix[u]=D.shadow.matrix,g++}n.directional[u]=k,u++}else if(D.isSpotLight){let k=e.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(H).multiplyScalar(G),k.distance=F,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,n.spot[p]=k;let Z=D.shadow;if(D.map&&(n.spotLightMap[_]=D.map,_++,Z.updateMatrices(D),D.castShadow&&y++),n.spotLightMatrix[p]=Z.matrix,D.castShadow){let X=t.get(D);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,n.spotShadow[p]=X,n.spotShadowMap[p]=Y,x++}p++}else if(D.isRectAreaLight){let k=e.get(D);k.color.copy(H).multiplyScalar(G),k.halfWidth.set(.5*D.width,0,0),k.halfHeight.set(0,.5*D.height,0),n.rectArea[m]=k,m++}else if(D.isPointLight){let k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),k.distance=D.distance,k.decay=D.decay,D.castShadow){let Z=D.shadow,X=t.get(D);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,X.shadowCameraNear=Z.camera.near,X.shadowCameraFar=Z.camera.far,n.pointShadow[d]=X,n.pointShadowMap[d]=Y,n.pointShadowMatrix[d]=D.shadow.matrix,f++}n.point[d]=k,d++}else if(D.isHemisphereLight){let k=e.get(D);k.skyColor.copy(D.color).multiplyScalar(G),k.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[v]=k,v++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let T=n.hash;T.directionalLength===u&&T.pointLength===d&&T.spotLength===p&&T.rectAreaLength===m&&T.hemiLength===v&&T.numDirectionalShadows===g&&T.numPointShadows===f&&T.numSpotShadows===x&&T.numSpotMaps===_&&T.numLightProbes===R||(n.directional.length=u,n.spot.length=p,n.rectArea.length=m,n.point.length=d,n.hemi.length=v,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=f,n.pointShadowMap.length=f,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=f,n.spotLightMatrix.length=x+_-y,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=R,T.directionalLength=u,T.pointLength=d,T.spotLength=p,T.rectAreaLength=m,T.hemiLength=v,T.numDirectionalShadows=g,T.numPointShadows=f,T.numSpotShadows=x,T.numSpotMaps=_,T.numLightProbes=R,n.version=jp++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,m=l.matrixWorldInverse;for(let v=0,g=o.length;v<g;v++){let f=o[v];if(f.isDirectionalLight){let x=n.directional[c];x.direction.setFromMatrixPosition(f.matrixWorld),r.setFromMatrixPosition(f.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),c++}else if(f.isSpotLight){let x=n.spot[u];x.position.setFromMatrixPosition(f.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(f.matrixWorld),r.setFromMatrixPosition(f.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),u++}else if(f.isRectAreaLight){let x=n.rectArea[d];x.position.setFromMatrixPosition(f.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(f.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(.5*f.width,0,0),x.halfHeight.set(0,.5*f.height,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),d++}else if(f.isPointLight){let x=n.point[h];x.position.setFromMatrixPosition(f.matrixWorld),x.position.applyMatrix4(m),h++}else if(f.isHemisphereLight){let x=n.hemi[p];x.direction.setFromMatrixPosition(f.matrixWorld),x.direction.transformDirection(m),p++}}},state:n}}function Eh(i){let e=new Yp(i),t=[],n=[],r={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,t.length=0,n.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function Zp(i){let e=new WeakMap;return{get:function(t,n=0){let r=e.get(t),s;return r===void 0?(s=new Eh(i),e.set(t,[s])):n>=r.length?(s=new Eh(i),r.push(s)):s=r[n],s},dispose:function(){e=new WeakMap}}}var ul=class extends Wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},dl=class extends Wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Jp(i,e,t){let n=new Zi,r=new ie,s=new ie,a=new Ke,o=new ul({depthPacking:3201}),l=new dl,c={},h=t.maxTextureSize,u={[kn]:Lt,[Lt]:kn,2:2},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new at;m.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new xt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fh;let f=this.type;function x(T,C){let B=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Rn(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,B,d,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,B,p,v,null)}function _(T,C,B,D){let H=null,G=B.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(G!==void 0)H=G;else if(H=B.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let F=H.uuid,Y=C.uuid,k=c[F];k===void 0&&(k={},c[F]=k);let Z=k[Y];Z===void 0&&(Z=H.clone(),k[Y]=Z,C.addEventListener("dispose",R)),H=Z}return H.visible=C.visible,H.wireframe=C.wireframe,H.side=D===En?C.shadowSide!==null?C.shadowSide:C.side:C.shadowSide!==null?C.shadowSide:u[C.side],H.alphaMap=C.alphaMap,H.alphaTest=C.alphaTest,H.map=C.map,H.clipShadows=C.clipShadows,H.clippingPlanes=C.clippingPlanes,H.clipIntersection=C.clipIntersection,H.displacementMap=C.displacementMap,H.displacementScale=C.displacementScale,H.displacementBias=C.displacementBias,H.wireframeLinewidth=C.wireframeLinewidth,H.linewidth=C.linewidth,B.isPointLight===!0&&H.isMeshDistanceMaterial===!0&&(i.properties.get(H).light=B),H}function y(T,C,B,D,H){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&H===En)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld);let F=e.update(T),Y=T.material;if(Array.isArray(Y)){let k=F.groups;for(let Z=0,X=k.length;Z<X;Z++){let Q=k[Z],ae=Y[Q.materialIndex];if(ae&&ae.visible){let ce=_(T,ae,D,H);T.onBeforeShadow(i,T,C,B,F,ce,Q),i.renderBufferDirect(B,null,F,ce,T,Q),T.onAfterShadow(i,T,C,B,F,ce,Q)}}}else if(Y.visible){let k=_(T,Y,D,H);T.onBeforeShadow(i,T,C,B,F,k,null),i.renderBufferDirect(B,null,F,k,T,null),T.onAfterShadow(i,T,C,B,F,k,null)}}let G=T.children;for(let F=0,Y=G.length;F<Y;F++)y(G[F],C,B,D,H)}function R(T){T.target.removeEventListener("dispose",R);for(let C in c){let B=c[C],D=T.target.uuid;D in B&&(B[D].dispose(),delete B[D])}}this.render=function(T,C,B){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let D=i.getRenderTarget(),H=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),F=i.state;F.setBlending(0),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let Y=f!==En&&this.type===En,k=f===En&&this.type!==En;for(let Z=0,X=T.length;Z<X;Z++){let Q=T[Z],ae=Q.shadow;if(ae===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(ae.autoUpdate===!1&&ae.needsUpdate===!1)continue;r.copy(ae.mapSize);let ce=ae.getFrameExtents();if(r.multiply(ce),s.copy(ae.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ce.x),r.x=s.x*ce.x,ae.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ce.y),r.y=s.y*ce.y,ae.mapSize.y=s.y)),ae.map===null||Y===!0||k===!0){let te=this.type!==En?{minFilter:Wt,magFilter:Wt}:{};ae.map!==null&&ae.map.dispose(),ae.map=new Rn(r.x,r.y,te),ae.map.texture.name=Q.name+".shadowMap",ae.camera.updateProjectionMatrix()}i.setRenderTarget(ae.map),i.clear();let ge=ae.getViewportCount();for(let te=0;te<ge;te++){let re=ae.getViewport(te);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),F.viewport(a),ae.updateMatrices(Q,te),n=ae.getFrustum(),y(C,B,ae.camera,Q,this.type)}ae.isPointLightShadow!==!0&&this.type===En&&x(ae,B),ae.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(D,H,G)}}var Kp={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function $p(i){let e=new function(){let S=!1,L=new Ke,I=null,J=new Ke(0,0,0,0);return{setMask:function(O){I===O||S||(i.colorMask(O,O,O,O),I=O)},setLocked:function(O){S=O},setClear:function(O,K,ne,$,he){he===!0&&(O*=$,K*=$,ne*=$),L.set(O,K,ne,$),J.equals(L)===!1&&(i.clearColor(O,K,ne,$),J.copy(L))},reset:function(){S=!1,I=null,J.set(-1,0,0,0)}}},t=new function(){let S=!1,L=!1,I=null,J=null,O=null;return{setReversed:function(K){L=K},setTest:function(K){K?me(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(K){I===K||S||(i.depthMask(K),I=K)},setFunc:function(K){if(L&&(K=Kp[K]),J!==K){switch(K){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:default:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL)}J=K}},setLocked:function(K){S=K},setClear:function(K){O!==K&&(i.clearDepth(K),O=K)},reset:function(){S=!1,I=null,J=null,O=null}}},n=new function(){let S=!1,L=null,I=null,J=null,O=null,K=null,ne=null,$=null,he=null;return{setTest:function(pe){S||(pe?me(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(pe){L===pe||S||(i.stencilMask(pe),L=pe)},setFunc:function(pe,fe,Ae){I===pe&&J===fe&&O===Ae||(i.stencilFunc(pe,fe,Ae),I=pe,J=fe,O=Ae)},setOp:function(pe,fe,Ae){K===pe&&ne===fe&&$===Ae||(i.stencilOp(pe,fe,Ae),K=pe,ne=fe,$=Ae)},setLocked:function(pe){S=pe},setClear:function(pe){he!==pe&&(i.clearStencil(pe),he=pe)},reset:function(){S=!1,L=null,I=null,J=null,O=null,K=null,ne=null,$=null,he=null}}},r=new WeakMap,s=new WeakMap,a={},o={},l=new WeakMap,c=[],h=null,u=!1,d=null,p=null,m=null,v=null,g=null,f=null,x=null,_=new Te(0,0,0),y=0,R=!1,T=null,C=null,B=null,D=null,H=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,Y=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),F=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),F=Y>=2);let Z=null,X={},Q=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),ce=new Ke().fromArray(Q),ge=new Ke().fromArray(ae);function te(S,L,I,J){let O=new Uint8Array(4),K=i.createTexture();i.bindTexture(S,K),i.texParameteri(S,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(S,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<I;ne++)S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY?i.texImage3D(L,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,O):i.texImage2D(L+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,O);return K}let re={};function me(S){a[S]!==!0&&(i.enable(S),a[S]=!0)}function ue(S){a[S]!==!1&&(i.disable(S),a[S]=!1)}re[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),re[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),re[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),e.setClear(0,0,0,1),t.setClear(1),n.setClear(0),me(i.DEPTH_TEST),t.setFunc(3),V(!1),w(1),me(i.CULL_FACE),N(0);let A={[ai]:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};A[103]=i.MIN,A[104]=i.MAX;let M={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,[yo]:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,[Mo]:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function N(S,L,I,J,O,K,ne,$,he,pe){if(S!==0){if(u===!1&&(me(i.BLEND),u=!0),S===5)O=O||L,K=K||I,ne=ne||J,L===p&&O===g||(i.blendEquationSeparate(A[L],A[O]),p=L,g=O),I===m&&J===v&&K===f&&ne===x||(i.blendFuncSeparate(M[I],M[J],M[K],M[ne]),m=I,v=J,f=K,x=ne),$.equals(_)!==!1&&he===y||(i.blendColor($.r,$.g,$.b,he),_.copy($),y=he),d=S,R=!1;else if(S!==d||pe!==R){if(p===ai&&g===ai||(i.blendEquation(i.FUNC_ADD),p=ai,g=ai),pe)switch(S){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}else switch(S){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}m=null,v=null,f=null,x=null,_.set(0,0,0),y=0,d=S,R=pe}}else u===!0&&(ue(i.BLEND),u=!1)}function V(S){T!==S&&(S?i.frontFace(i.CW):i.frontFace(i.CCW),T=S)}function w(S){S!==0?(me(i.CULL_FACE),S!==C&&(S===1?i.cullFace(i.BACK):S===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),C=S}function P(S,L,I){S?(me(i.POLYGON_OFFSET_FILL),D===L&&H===I||(i.polygonOffset(L,I),D=L,H=I)):ue(i.POLYGON_OFFSET_FILL)}return{buffers:{color:e,depth:t,stencil:n},enable:me,disable:ue,bindFramebuffer:function(S,L){return o[S]!==L&&(i.bindFramebuffer(S,L),o[S]=L,S===i.DRAW_FRAMEBUFFER&&(o[i.FRAMEBUFFER]=L),S===i.FRAMEBUFFER&&(o[i.DRAW_FRAMEBUFFER]=L),!0)},drawBuffers:function(S,L){let I=c,J=!1;if(S){I=l.get(L),I===void 0&&(I=[],l.set(L,I));let O=S.textures;if(I.length!==O.length||I[0]!==i.COLOR_ATTACHMENT0){for(let K=0,ne=O.length;K<ne;K++)I[K]=i.COLOR_ATTACHMENT0+K;I.length=O.length,J=!0}}else I[0]!==i.BACK&&(I[0]=i.BACK,J=!0);J&&i.drawBuffers(I)},useProgram:function(S){return h!==S&&(i.useProgram(S),h=S,!0)},setBlending:N,setMaterial:function(S,L){S.side===2?ue(i.CULL_FACE):me(i.CULL_FACE);let I=S.side===Lt;L&&(I=!I),V(I),S.blending===1&&S.transparent===!1?N(0):N(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),t.setFunc(S.depthFunc),t.setTest(S.depthTest),t.setMask(S.depthWrite),e.setMask(S.colorWrite);let J=S.stencilWrite;n.setTest(J),J&&(n.setMask(S.stencilWriteMask),n.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),n.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),P(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:V,setCullFace:w,setLineWidth:function(S){S!==B&&(F&&i.lineWidth(S),B=S)},setPolygonOffset:P,setScissorTest:function(S){S?me(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)},activeTexture:function(S){S===void 0&&(S=i.TEXTURE0+G-1),Z!==S&&(i.activeTexture(S),Z=S)},bindTexture:function(S,L,I){I===void 0&&(I=Z===null?i.TEXTURE0+G-1:Z);let J=X[I];J===void 0&&(J={type:void 0,texture:void 0},X[I]=J),J.type===S&&J.texture===L||(Z!==I&&(i.activeTexture(I),Z=I),i.bindTexture(S,L||re[S]),J.type=S,J.texture=L)},unbindTexture:function(){let S=X[Z];S!==void 0&&S.type!==void 0&&(i.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexImage3D:function(){try{i.compressedTexImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage2D:function(){try{i.texImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage3D:function(){try{i.texImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},updateUBOMapping:function(S,L){let I=s.get(L);I===void 0&&(I=new WeakMap,s.set(L,I));let J=I.get(S);J===void 0&&(J=i.getUniformBlockIndex(L,S.name),I.set(S,J))},uniformBlockBinding:function(S,L){let I=s.get(L).get(S);r.get(L)!==I&&(i.uniformBlockBinding(L,I,S.__bindingPointIndex),r.set(L,I))},texStorage2D:function(){try{i.texStorage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texStorage3D:function(){try{i.texStorage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage2D:function(){try{i.texSubImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage3D:function(){try{i.texSubImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},scissor:function(S){ce.equals(S)===!1&&(i.scissor(S.x,S.y,S.z,S.w),ce.copy(S))},viewport:function(S){ge.equals(S)===!1&&(i.viewport(S.x,S.y,S.z,S.w),ge.copy(S))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),a={},Z=null,X={},o={},l=new WeakMap,c=[],h=null,u=!1,d=null,p=null,m=null,v=null,g=null,f=null,x=null,_=new Te(0,0,0),y=0,R=!1,T=null,C=null,B=null,D=null,H=null,ce.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),e.reset(),t.reset(),n.reset()}}}function Th(i,e,t,n){let r=(function(s){switch(s){case An:case Hh:return{byteLength:1,components:1};case Rr:case Gh:case Vr:return{byteLength:2,components:1};case ql:case Yl:return{byteLength:2,components:4};case ci:case jl:case pn:return{byteLength:4,components:1};case kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case Vh:case Xh:return i*e;case jh:return i*e*2;case Zl:case Jl:return i*e/r.components*r.byteLength;case qh:case Kl:return i*e*2/r.components*r.byteLength;case Wh:return i*e*3/r.components*r.byteLength;case sn:case $l:return i*e*4/r.components*r.byteLength;case Is:case Ls:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Us:case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wo:case Ro:return Math.max(i,16)*Math.max(e,8)/4;case To:case Ao:return Math.max(i,8)*Math.max(e,8)/2;case Co:case Po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Io:case Lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Do:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case No:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case zo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Go:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ko:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Wo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Xo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ns:case jo:case qo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Yh:case Yo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Zo:case Jo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qp(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator!="undefined"&&/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,M){return p?new OffscreenCanvas(A,M):ks("canvas")}function v(A,M,N){let V=1,w=ue(A);if((w.width>N||w.height>N)&&(V=N/Math.max(w.width,w.height)),V<1){if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let P=Math.floor(V*w.width),S=Math.floor(V*w.height);u===void 0&&(u=m(P,S));let L=M?m(P,S):u;return L.width=P,L.height=S,L.getContext("2d").drawImage(A,0,0,P,S),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+P+"x"+S+")."),L}return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),A}return A}function g(A){return A.generateMipmaps&&A.minFilter!==Wt&&A.minFilter!==dn}function f(A){i.generateMipmap(A)}function x(A,M,N,V,w=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let P=M;if(M===i.RED&&(N===i.FLOAT&&(P=i.R32F),N===i.HALF_FLOAT&&(P=i.R16F),N===i.UNSIGNED_BYTE&&(P=i.R8)),M===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(P=i.R8UI),N===i.UNSIGNED_SHORT&&(P=i.R16UI),N===i.UNSIGNED_INT&&(P=i.R32UI),N===i.BYTE&&(P=i.R8I),N===i.SHORT&&(P=i.R16I),N===i.INT&&(P=i.R32I)),M===i.RG&&(N===i.FLOAT&&(P=i.RG32F),N===i.HALF_FLOAT&&(P=i.RG16F),N===i.UNSIGNED_BYTE&&(P=i.RG8)),M===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(P=i.RG8UI),N===i.UNSIGNED_SHORT&&(P=i.RG16UI),N===i.UNSIGNED_INT&&(P=i.RG32UI),N===i.BYTE&&(P=i.RG8I),N===i.SHORT&&(P=i.RG16I),N===i.INT&&(P=i.RG32I)),M===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(P=i.RGB8UI),N===i.UNSIGNED_SHORT&&(P=i.RGB16UI),N===i.UNSIGNED_INT&&(P=i.RGB32UI),N===i.BYTE&&(P=i.RGB8I),N===i.SHORT&&(P=i.RGB16I),N===i.INT&&(P=i.RGB32I)),M===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(P=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(P=i.RGBA16UI),N===i.UNSIGNED_INT&&(P=i.RGBA32UI),N===i.BYTE&&(P=i.RGBA8I),N===i.SHORT&&(P=i.RGBA16I),N===i.INT&&(P=i.RGBA32I)),M===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(P=i.RGB9_E5),M===i.RGBA){let S=w?Fs:ke.getTransfer(V);N===i.FLOAT&&(P=i.RGBA32F),N===i.HALF_FLOAT&&(P=i.RGBA16F),N===i.UNSIGNED_BYTE&&(P=S===qe?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(P=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(P=i.RGB5_A1)}return P!==i.R16F&&P!==i.R32F&&P!==i.RG16F&&P!==i.RG32F&&P!==i.RGBA16F&&P!==i.RGBA32F||e.get("EXT_color_buffer_float"),P}function _(A,M){let N;return A?M===null||M===ci||M===Wi?N=i.DEPTH24_STENCIL8:M===pn?N=i.DEPTH32F_STENCIL8:M===Rr&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ci||M===Wi?N=i.DEPTH_COMPONENT24:M===pn?N=i.DEPTH_COMPONENT32F:M===Rr&&(N=i.DEPTH_COMPONENT16),N}function y(A,M){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Wt&&A.minFilter!==dn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function R(A){let M=A.target;M.removeEventListener("dispose",R),(function(N){let V=n.get(N);if(V.__webglInit===void 0)return;let w=N.source,P=d.get(w);if(P){let S=P[V.__cacheKey];S.usedTimes--,S.usedTimes===0&&C(N),Object.keys(P).length===0&&d.delete(w)}n.remove(N)})(M),M.isVideoTexture&&h.delete(M)}function T(A){let M=A.target;M.removeEventListener("dispose",T),(function(N){let V=n.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(V.__webglFramebuffer[P]))for(let S=0;S<V.__webglFramebuffer[P].length;S++)i.deleteFramebuffer(V.__webglFramebuffer[P][S]);else i.deleteFramebuffer(V.__webglFramebuffer[P]);V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer[P])}else{if(Array.isArray(V.__webglFramebuffer))for(let P=0;P<V.__webglFramebuffer.length;P++)i.deleteFramebuffer(V.__webglFramebuffer[P]);else i.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&i.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let P=0;P<V.__webglColorRenderbuffer.length;P++)V.__webglColorRenderbuffer[P]&&i.deleteRenderbuffer(V.__webglColorRenderbuffer[P]);V.__webglDepthRenderbuffer&&i.deleteRenderbuffer(V.__webglDepthRenderbuffer)}let w=N.textures;for(let P=0,S=w.length;P<S;P++){let L=n.get(w[P]);L.__webglTexture&&(i.deleteTexture(L.__webglTexture),a.memory.textures--),n.remove(w[P])}n.remove(N)})(M)}function C(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let N=A.source;delete d.get(N)[M.__cacheKey],a.memory.textures--}let B=0;function D(A,M){let N=n.get(A);if(A.isVideoTexture&&(function(V){let w=a.render.frame;h.get(V)!==w&&(h.set(V,w),V.update())})(A),A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){let V=A.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(V.complete!==!1)return void Z(N,A,M);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+M)}let H={[wr]:i.REPEAT,[Ar]:i.CLAMP_TO_EDGE,[Eo]:i.MIRRORED_REPEAT},G={[Wt]:i.NEAREST,[ud]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Ba]:i.LINEAR_MIPMAP_NEAREST,[Bi]:i.LINEAR_MIPMAP_LINEAR},F={512:i.NEVER,519:i.ALWAYS,513:i.LESS,[Zh]:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function Y(A,M){if(M.type!==pn||e.has("OES_texture_float_linear")!==!1||M.magFilter!==dn&&M.magFilter!==Ba&&M.magFilter!==Qr&&M.magFilter!==Bi&&M.minFilter!==dn&&M.minFilter!==Ba&&M.minFilter!==Qr&&M.minFilter!==Bi||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,H[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,H[M.wrapT]),A!==i.TEXTURE_3D&&A!==i.TEXTURE_2D_ARRAY||i.texParameteri(A,i.TEXTURE_WRAP_R,H[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,G[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,G[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,F[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Wt||M.minFilter!==Qr&&M.minFilter!==Bi||M.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function k(A,M){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",R));let V=M.source,w=d.get(V);w===void 0&&(w={},d.set(V,w));let P=(function(S){let L=[];return L.push(S.wrapS),L.push(S.wrapT),L.push(S.wrapR||0),L.push(S.magFilter),L.push(S.minFilter),L.push(S.anisotropy),L.push(S.internalFormat),L.push(S.format),L.push(S.type),L.push(S.generateMipmaps),L.push(S.premultiplyAlpha),L.push(S.flipY),L.push(S.unpackAlignment),L.push(S.colorSpace),L.join()})(M);if(P!==A.__cacheKey){w[P]===void 0&&(w[P]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),w[P].usedTimes++;let S=w[A.__cacheKey];S!==void 0&&(w[A.__cacheKey].usedTimes--,S.usedTimes===0&&C(M)),A.__cacheKey=P,A.__webglTexture=w[P].texture}return N}function Z(A,M,N){let V=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(V=i.TEXTURE_3D);let w=k(A,M),P=M.source;t.bindTexture(V,A.__webglTexture,i.TEXTURE0+N);let S=n.get(P);if(P.version!==S.__version||w===!0){t.activeTexture(i.TEXTURE0+N);let L=ke.getPrimaries(ke.workingColorSpace),I=M.colorSpace===Oi?null:ke.getPrimaries(M.colorSpace),J=M.colorSpace===Oi||L===I?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let O=v(M.image,!1,r.maxTextureSize);O=me(M,O);let K=s.convert(M.format,M.colorSpace),ne=s.convert(M.type),$,he=x(M.internalFormat,K,ne,M.colorSpace,M.isVideoTexture);Y(V,M);let pe=M.mipmaps,fe=M.isVideoTexture!==!0,Ae=S.__version===void 0||w===!0,Oe=P.dataReady,Ne=y(M,O);if(M.isDepthTexture)he=_(M.format===Xi,M.type),Ae&&(fe?t.texStorage2D(i.TEXTURE_2D,1,he,O.width,O.height):t.texImage2D(i.TEXTURE_2D,0,he,O.width,O.height,0,K,ne,null));else if(M.isDataTexture)if(pe.length>0){fe&&Ae&&t.texStorage2D(i.TEXTURE_2D,Ne,he,pe[0].width,pe[0].height);for(let ye=0,ze=pe.length;ye<ze;ye++)$=pe[ye],fe?Oe&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,$.width,$.height,K,ne,$.data):t.texImage2D(i.TEXTURE_2D,ye,he,$.width,$.height,0,K,ne,$.data);M.generateMipmaps=!1}else fe?(Ae&&t.texStorage2D(i.TEXTURE_2D,Ne,he,O.width,O.height),Oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,O.width,O.height,K,ne,O.data)):t.texImage2D(i.TEXTURE_2D,0,he,O.width,O.height,0,K,ne,O.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){fe&&Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,he,pe[0].width,pe[0].height,O.depth);for(let ye=0,ze=pe.length;ye<ze;ye++)if($=pe[ye],M.format!==sn)if(K!==null)if(fe){if(Oe)if(M.layerUpdates.size>0){let We=Th($.width,$.height,M.format,M.type);for(let $e of M.layerUpdates){let xe=$.data.subarray($e*We/$.data.BYTES_PER_ELEMENT,($e+1)*We/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,$e,$.width,$.height,1,K,xe,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,$.width,$.height,O.depth,K,$.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ye,he,$.width,$.height,O.depth,0,$.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?Oe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,$.width,$.height,O.depth,K,ne,$.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ye,he,$.width,$.height,O.depth,0,K,ne,$.data)}else{fe&&Ae&&t.texStorage2D(i.TEXTURE_2D,Ne,he,pe[0].width,pe[0].height);for(let ye=0,ze=pe.length;ye<ze;ye++)$=pe[ye],M.format!==sn?K!==null?fe?Oe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ye,0,0,$.width,$.height,K,$.data):t.compressedTexImage2D(i.TEXTURE_2D,ye,he,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?Oe&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,$.width,$.height,K,ne,$.data):t.texImage2D(i.TEXTURE_2D,ye,he,$.width,$.height,0,K,ne,$.data)}else if(M.isDataArrayTexture)if(fe){if(Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,he,O.width,O.height,O.depth),Oe)if(M.layerUpdates.size>0){let ye=Th(O.width,O.height,M.format,M.type);for(let ze of M.layerUpdates){let We=O.data.subarray(ze*ye/O.data.BYTES_PER_ELEMENT,(ze+1)*ye/O.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ze,O.width,O.height,1,K,ne,We)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,K,ne,O.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,O.width,O.height,O.depth,0,K,ne,O.data);else if(M.isData3DTexture)fe?(Ae&&t.texStorage3D(i.TEXTURE_3D,Ne,he,O.width,O.height,O.depth),Oe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,K,ne,O.data)):t.texImage3D(i.TEXTURE_3D,0,he,O.width,O.height,O.depth,0,K,ne,O.data);else if(M.isFramebufferTexture){if(Ae)if(fe)t.texStorage2D(i.TEXTURE_2D,Ne,he,O.width,O.height);else{let ye=O.width,ze=O.height;for(let We=0;We<Ne;We++)t.texImage2D(i.TEXTURE_2D,We,he,ye,ze,0,K,ne,null),ye>>=1,ze>>=1}}else if(pe.length>0){if(fe&&Ae){let ye=ue(pe[0]);t.texStorage2D(i.TEXTURE_2D,Ne,he,ye.width,ye.height)}for(let ye=0,ze=pe.length;ye<ze;ye++)$=pe[ye],fe?Oe&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,K,ne,$):t.texImage2D(i.TEXTURE_2D,ye,he,K,ne,$);M.generateMipmaps=!1}else if(fe){if(Ae){let ye=ue(O);t.texStorage2D(i.TEXTURE_2D,Ne,he,ye.width,ye.height)}Oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,K,ne,O)}else t.texImage2D(i.TEXTURE_2D,0,he,K,ne,O);g(M)&&f(V),S.__version=P.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function X(A,M,N,V,w,P){let S=s.convert(N.format,N.colorSpace),L=s.convert(N.type),I=x(N.internalFormat,S,L,N.colorSpace);if(!n.get(M).__hasExternalTextures){let J=Math.max(1,M.width>>P),O=Math.max(1,M.height>>P);w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?t.texImage3D(w,P,I,J,O,M.depth,0,S,L,null):t.texImage2D(w,P,I,J,O,0,S,L,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),re(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,w,n.get(N).__webglTexture,0,te(M)):(w===i.TEXTURE_2D||w>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&w<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,w,n.get(N).__webglTexture,P),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Q(A,M,N){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){let V=M.depthTexture,w=V&&V.isDepthTexture?V.type:null,P=_(M.stencilBuffer,w),S=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=te(M);re(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L,P,M.width,M.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,L,P,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,P,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,S,i.RENDERBUFFER,A)}else{let V=M.textures;for(let w=0;w<V.length;w++){let P=V[w],S=s.convert(P.format,P.colorSpace),L=s.convert(P.type),I=x(P.internalFormat,S,L,P.colorSpace),J=te(M);N&&re(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,J,I,M.width,M.height):re(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,I,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,I,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(A){let M=n.get(A),N=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let V=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),V){let w=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,V.removeEventListener("dispose",w)};V.addEventListener("dispose",w),M.__depthDisposeCallback=w}M.__boundDepthTexture=V}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");(function(V,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,V),!w.depthTexture||!w.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(w.depthTexture).__webglTexture&&w.depthTexture.image.width===w.width&&w.depthTexture.image.height===w.height||(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),D(w.depthTexture,0);let P=n.get(w.depthTexture).__webglTexture,S=te(w);if(w.depthTexture.format===Cr)re(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,P,0,S):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,P,0);else{if(w.depthTexture.format!==Xi)throw new Error("Unknown depthTexture format");re(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,P,0,S):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,P,0)}})(M.__webglFramebuffer,A)}else if(N){M.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[V]),M.__webglDepthbuffer[V]===void 0)M.__webglDepthbuffer[V]=i.createRenderbuffer(),Q(M.__webglDepthbuffer[V],A,!1);else{let w=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=M.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,P),i.framebufferRenderbuffer(i.FRAMEBUFFER,w,i.RENDERBUFFER,P)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Q(M.__webglDepthbuffer,A,!1);else{let V=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,w=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,w),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,w)}t.bindFramebuffer(i.FRAMEBUFFER,null)}let ce=[],ge=[];function te(A){return Math.min(r.maxSamples,A.samples)}function re(A){let M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function me(A,M){let N=A.colorSpace,V=A.format,w=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||N!==Xn&&N!==Oi&&(ke.getTransfer(N)===qe?V===sn&&w===An||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),M}function ue(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=function(){let A=B;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),B+=1,A},this.resetTextureUnits=function(){B=0},this.setTexture2D=D,this.setTexture2DArray=function(A,M){let N=n.get(A);A.version>0&&N.__version!==A.version?Z(N,A,M):t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+M)},this.setTexture3D=function(A,M){let N=n.get(A);A.version>0&&N.__version!==A.version?Z(N,A,M):t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+M)},this.setTextureCube=function(A,M){let N=n.get(A);A.version>0&&N.__version!==A.version?(function(V,w,P){if(w.image.length!==6)return;let S=k(V,w),L=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+P);let I=n.get(L);if(L.version!==I.__version||S===!0){t.activeTexture(i.TEXTURE0+P);let J=ke.getPrimaries(ke.workingColorSpace),O=w.colorSpace===Oi?null:ke.getPrimaries(w.colorSpace),K=w.colorSpace===Oi||J===O?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ne=w.isCompressedTexture||w.image[0].isCompressedTexture,$=w.image[0]&&w.image[0].isDataTexture,he=[];for(let xe=0;xe<6;xe++)he[xe]=ne||$?$?w.image[xe].image:w.image[xe]:v(w.image[xe],!0,r.maxCubemapSize),he[xe]=me(w,he[xe]);let pe=he[0],fe=s.convert(w.format,w.colorSpace),Ae=s.convert(w.type),Oe=x(w.internalFormat,fe,Ae,w.colorSpace),Ne=w.isVideoTexture!==!0,ye=I.__version===void 0||S===!0,ze=L.dataReady,We,$e=y(w,pe);if(Y(i.TEXTURE_CUBE_MAP,w),ne){Ne&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,$e,Oe,pe.width,pe.height);for(let xe=0;xe<6;xe++){We=he[xe].mipmaps;for(let Be=0;Be<We.length;Be++){let Xe=We[Be];w.format!==sn?fe!==null?Ne?ze&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be,0,0,Xe.width,Xe.height,fe,Xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be,Oe,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be,0,0,Xe.width,Xe.height,fe,Ae,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be,Oe,Xe.width,Xe.height,0,fe,Ae,Xe.data)}}}else{if(We=w.mipmaps,Ne&&ye){We.length>0&&$e++;let xe=ue(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,$e,Oe,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if($){Ne?ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,he[xe].width,he[xe].height,fe,Ae,he[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Oe,he[xe].width,he[xe].height,0,fe,Ae,he[xe].data);for(let Be=0;Be<We.length;Be++){let Xe=We[Be].image[xe].image;Ne?ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be+1,0,0,Xe.width,Xe.height,fe,Ae,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be+1,Oe,Xe.width,Xe.height,0,fe,Ae,Xe.data)}}else{Ne?ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,fe,Ae,he[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Oe,fe,Ae,he[xe]);for(let Be=0;Be<We.length;Be++){let Xe=We[Be];Ne?ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be+1,0,0,fe,Ae,Xe.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be+1,Oe,fe,Ae,Xe.image[xe])}}}g(w)&&f(i.TEXTURE_CUBE_MAP),I.__version=L.version,w.onUpdate&&w.onUpdate(w)}V.__version=w.version})(N,A,M):t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+M)},this.rebindTextures=function(A,M,N){let V=n.get(A);M!==void 0&&X(V.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&ae(A)},this.setupRenderTarget=function(A){let M=A.texture,N=n.get(A),V=n.get(M);A.addEventListener("dispose",T);let w=A.textures,P=A.isWebGLCubeRenderTarget===!0,S=w.length>1;if(S||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=M.version,a.memory.textures++),P){N.__webglFramebuffer=[];for(let L=0;L<6;L++)if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer[L]=[];for(let I=0;I<M.mipmaps.length;I++)N.__webglFramebuffer[L][I]=i.createFramebuffer()}else N.__webglFramebuffer[L]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer=[];for(let L=0;L<M.mipmaps.length;L++)N.__webglFramebuffer[L]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(S)for(let L=0,I=w.length;L<I;L++){let J=n.get(w[L]);J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&re(A)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let L=0;L<w.length;L++){let I=w[L];N.__webglColorRenderbuffer[L]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[L]);let J=s.convert(I.format,I.colorSpace),O=s.convert(I.type),K=x(I.internalFormat,J,O,I.colorSpace,A.isXRRenderTarget===!0),ne=te(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,K,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,N.__webglColorRenderbuffer[L])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Q(N.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(P){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Y(i.TEXTURE_CUBE_MAP,M);for(let L=0;L<6;L++)if(M.mipmaps&&M.mipmaps.length>0)for(let I=0;I<M.mipmaps.length;I++)X(N.__webglFramebuffer[L][I],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+L,I);else X(N.__webglFramebuffer[L],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+L,0);g(M)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(S){for(let L=0,I=w.length;L<I;L++){let J=w[L],O=n.get(J);t.bindTexture(i.TEXTURE_2D,O.__webglTexture),Y(i.TEXTURE_2D,J),X(N.__webglFramebuffer,A,J,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,0),g(J)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let L=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(L=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(L,V.__webglTexture),Y(L,M),M.mipmaps&&M.mipmaps.length>0)for(let I=0;I<M.mipmaps.length;I++)X(N.__webglFramebuffer[I],A,M,i.COLOR_ATTACHMENT0,L,I);else X(N.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,L,0);g(M)&&f(L),t.unbindTexture()}A.depthBuffer&&ae(A)},this.updateRenderTargetMipmap=function(A){let M=A.textures;for(let N=0,V=M.length;N<V;N++){let w=M[N];if(g(w)){let P=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,S=n.get(w).__webglTexture;t.bindTexture(P,S),f(P),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(A){if(A.samples>0){if(re(A)===!1){let M=A.textures,N=A.width,V=A.height,w=i.COLOR_BUFFER_BIT,P=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,S=n.get(A),L=M.length>1;if(L)for(let I=0;I<M.length;I++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,S.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,S.__webglFramebuffer);for(let I=0;I<M.length;I++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(w|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(w|=i.STENCIL_BUFFER_BIT)),L){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,S.__webglColorRenderbuffer[I]);let J=n.get(M[I]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,N,V,0,0,N,V,w,i.NEAREST),l===!0&&(ce.length=0,ge.length=0,ce.push(i.COLOR_ATTACHMENT0+I),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ce.push(P),ge.push(P),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),L)for(let I=0;I<M.length;I++){t.bindFramebuffer(i.FRAMEBUFFER,S.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,S.__webglColorRenderbuffer[I]);let J=n.get(M[I]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.TEXTURE_2D,J,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,S.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}},this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=X,this.useMultisampledRTT=re}function em(i,e){return{convert:function(t,n=""){let r,s=ke.getTransfer(n);if(t===An)return i.UNSIGNED_BYTE;if(t===ql)return i.UNSIGNED_SHORT_4_4_4_4;if(t===Yl)return i.UNSIGNED_SHORT_5_5_5_1;if(t===kh)return i.UNSIGNED_INT_5_9_9_9_REV;if(t===Hh)return i.BYTE;if(t===Gh)return i.SHORT;if(t===Rr)return i.UNSIGNED_SHORT;if(t===jl)return i.INT;if(t===ci)return i.UNSIGNED_INT;if(t===pn)return i.FLOAT;if(t===Vr)return i.HALF_FLOAT;if(t===Vh)return i.ALPHA;if(t===Wh)return i.RGB;if(t===sn)return i.RGBA;if(t===Xh)return i.LUMINANCE;if(t===jh)return i.LUMINANCE_ALPHA;if(t===Cr)return i.DEPTH_COMPONENT;if(t===Xi)return i.DEPTH_STENCIL;if(t===Zl)return i.RED;if(t===Jl)return i.RED_INTEGER;if(t===qh)return i.RG;if(t===Kl)return i.RG_INTEGER;if(t===$l)return i.RGBA_INTEGER;if(t===Is||t===Ls||t===Us||t===Ds)if(s===qe){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===Is)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===Is)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Ls)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Us)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===To||t===wo||t===Ao||t===Ro){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===To)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===wo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Ao)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Ro)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Co||t===Po||t===Io){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===Co||t===Po)return s===qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===Io)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(t===Lo||t===Uo||t===Do||t===No||t===Oo||t===Bo||t===Fo||t===zo||t===Ho||t===Go||t===ko||t===Vo||t===Wo||t===Xo){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===Lo)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Uo)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Do)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===No)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Oo)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Bo)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Fo)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===zo)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Ho)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Go)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===ko)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Vo)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Wo)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Xo)return s===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Ns||t===jo||t===qo){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===Ns)return s===qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Yh||t===Yo||t===Zo||t===Jo){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===Ns)return r.COMPRESSED_RED_RGTC1_EXT;if(t===Yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Zo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Jo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Wi?i.UNSIGNED_INT_24_8:i[t]!==void 0?i[t]:null}}}var pl=class extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},nt=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},tm={type:"move"},br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),f=this._getHandJoint(c,v);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ml=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Ut;e.properties.get(r).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fn({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new Nt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fl=class extends Vn{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null,v=new ml,g=t.getContextAttributes(),f=null,x=null,_=[],y=[],R=new ie,T=null,C=new Ct;C.layers.enable(1),C.viewport=new Ke;let B=new Ct;B.layers.enable(2),B.viewport=new Ke;let D=[C,B],H=new pl;H.layers.enable(1),H.layers.enable(2);let G=null,F=null;function Y(te){let re=y.indexOf(te.inputSource);if(re===-1)return;let me=_[re];me!==void 0&&(me.update(te.inputSource,te.frame,c||a),me.dispatchEvent({type:te.type,data:te.inputSource}))}function k(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",Z);for(let te=0;te<_.length;te++){let re=y[te];re!==null&&(y[te]=null,_[te].disconnect(re))}G=null,F=null,v.reset(),e.setRenderTarget(f),p=null,d=null,u=null,r=null,x=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}function Z(te){for(let re=0;re<te.removed.length;re++){let me=te.removed[re],ue=y.indexOf(me);ue>=0&&(y[ue]=null,_[ue].disconnect(me))}for(let re=0;re<te.added.length;re++){let me=te.added[re],ue=y.indexOf(me);if(ue===-1){for(let M=0;M<_.length;M++){if(M>=y.length){y.push(me),ue=M;break}if(y[M]===null){y[M]=me,ue=M;break}}if(ue===-1)break}let A=_[ue];A&&A.connect(me)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let re=_[te];return re===void 0&&(re=new br,_[te]=re),re.getTargetRaySpace()},this.getControllerGrip=function(te){let re=_[te];return re===void 0&&(re=new br,_[te]=re),re.getGripSpace()},this.getHand=function(te){let re=_[te];return re===void 0&&(re=new br,_[te]=re),re.getHandSpace()},this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",k),r.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){let re={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Rn(p.framebufferWidth,p.framebufferHeight,{format:sn,type:An,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let re=null,me=null,ue=null;g.depth&&(ue=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=g.stencil?Xi:Cr,me=g.stencil?Wi:ci);let A={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(A),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Rn(d.textureWidth,d.textureHeight,{format:sn,type:An,depthTexture:new Ks(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ge.setContext(r),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};let X=new E,Q=new E;function ae(te,re){re===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(re.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let re=te.near,me=te.far;v.texture!==null&&(v.depthNear>0&&(re=v.depthNear),v.depthFar>0&&(me=v.depthFar)),H.near=B.near=C.near=re,H.far=B.far=C.far=me,G===H.near&&F===H.far||(r.updateRenderState({depthNear:H.near,depthFar:H.far}),G=H.near,F=H.far);let ue=te.parent,A=H.cameras;ae(H,ue);for(let M=0;M<A.length;M++)ae(A[M],ue);A.length===2?(function(M,N,V){X.setFromMatrixPosition(N.matrixWorld),Q.setFromMatrixPosition(V.matrixWorld);let w=X.distanceTo(Q),P=N.projectionMatrix.elements,S=V.projectionMatrix.elements,L=P[14]/(P[10]-1),I=P[14]/(P[10]+1),J=(P[9]+1)/P[5],O=(P[9]-1)/P[5],K=(P[8]-1)/P[0],ne=(S[8]+1)/S[0],$=L*K,he=L*ne,pe=w/(-K+ne),fe=pe*-K;if(N.matrixWorld.decompose(M.position,M.quaternion,M.scale),M.translateX(fe),M.translateZ(pe),M.matrixWorld.compose(M.position,M.quaternion,M.scale),M.matrixWorldInverse.copy(M.matrixWorld).invert(),P[10]===-1)M.projectionMatrix.copy(N.projectionMatrix),M.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{let Ae=L+pe,Oe=I+pe,Ne=$-fe,ye=he+(w-fe),ze=J*I/Oe*Ae,We=O*I/Oe*Ae;M.projectionMatrix.makePerspective(Ne,ye,ze,We,Ae,Oe),M.projectionMatrixInverse.copy(M.projectionMatrix).invert()}})(H,C,B):H.projectionMatrix.copy(C.projectionMatrix),(function(M,N,V){V===null?M.matrix.copy(N.matrixWorld):(M.matrix.copy(V.matrixWorld),M.matrix.invert(),M.matrix.multiply(N.matrixWorld)),M.matrix.decompose(M.position,M.quaternion,M.scale),M.updateMatrixWorld(!0),M.projectionMatrix.copy(N.projectionMatrix),M.projectionMatrixInverse.copy(N.projectionMatrixInverse),M.isPerspectiveCamera&&(M.fov=2*Pr*Math.atan(1/M.projectionMatrix.elements[5]),M.zoom=1)})(te,H,ue)},this.getCamera=function(){return H},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(H)};let ce=null,ge=new eu;ge.setAnimationLoop((function(te,re){if(h=re.getViewerPose(c||a),m=re,h!==null){let me=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let ue=!1;me.length!==H.cameras.length&&(H.cameras.length=0,ue=!0);for(let M=0;M<me.length;M++){let N=me[M],V=null;if(p!==null)V=p.getViewport(N);else{let P=u.getViewSubImage(d,N);V=P.viewport,M===0&&(e.setRenderTargetTextures(x,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(x))}let w=D[M];w===void 0&&(w=new Ct,w.layers.enable(M),w.viewport=new Ke,D[M]=w),w.matrix.fromArray(N.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(N.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(V.x,V.y,V.width,V.height),M===0&&(H.matrix.copy(w.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ue===!0&&H.cameras.push(w)}let A=r.enabledFeatures;if(A&&A.includes("depth-sensing")){let M=u.getDepthInformation(me[0]);M&&M.isValid&&M.texture&&v.init(e,M,r.renderState)}}for(let me=0;me<_.length;me++){let ue=y[me],A=_[me];ue!==null&&A!==void 0&&A.update(ue,re,c||a)}ce&&ce(te,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),m=null})),this.setAnimationLoop=function(te){ce=te},this.dispose=function(){}}},ri=new jt,nm=new we;function im(i,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function n(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===Lt&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===Lt&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(r.envMap.value=o,ri.copy(l),ri.x*=-1,ri.y*=-1,ri.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),r.envMapRotation.value.setFromMatrix4(nm.makeRotationFromEuler(ri)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,Qh(i)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(r,s):s.isMeshToonMaterial?(n(r,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(n(r,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(r,s)):s.isMeshStandardMaterial?(n(r,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Lt&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(r,s,l)):s.isMeshMatcapMaterial?(n(r,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?n(r,s):s.isMeshDistanceMaterial?(n(r,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?n(r,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function rm(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,m){let v=u.value,g=d+"_"+p;if(m[g]===void 0)return m[g]=typeof v=="number"||typeof v=="boolean"?v:v.clone(),!0;{let f=m[g];if(typeof v=="number"||typeof v=="boolean"){if(f!==v)return m[g]=v,!0}else if(f.equals(v)===!1)return f.copy(v),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),i.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(g){let f=g.uniforms,x=0,_=16;for(let R=0,T=f.length;R<T;R++){let C=Array.isArray(f[R])?f[R]:[f[R]];for(let B=0,D=C.length;B<D;B++){let H=C[B],G=Array.isArray(H.value)?H.value:[H.value];for(let F=0,Y=G.length;F<Y;F++){let k=c(G[F]),Z=x%_,X=Z%k.boundary,Q=Z+X;x+=X,Q!==0&&_-Q<k.storage&&(x+=_-Q),H.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=k.storage}}}let y=x%_;y>0&&(x+=_-y),g.__size=x,g.__cache={}})(u),p=(function(g){let f=(function(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();g.__bindingPointIndex=f;let x=i.createBuffer(),_=g.__size,y=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,_,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,f,x),x})(u),r[u.id]=p,u.addEventListener("dispose",h));let m=d.program;n.updateUBOMapping(u,m);let v=e.render.frame;s[u.id]!==v&&((function(g){let f=r[g.id],x=g.uniforms,_=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,f);for(let y=0,R=x.length;y<R;y++){let T=Array.isArray(x[y])?x[y]:[x[y]];for(let C=0,B=T.length;C<B;C++){let D=T[C];if(l(D,y,C,_)===!0){let H=D.__offset,G=Array.isArray(D.value)?D.value:[D.value],F=0;for(let Y=0;Y<G.length;Y++){let k=G[Y],Z=c(k);typeof k=="number"||typeof k=="boolean"?(D.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,H+F,D.__data)):k.isMatrix3?(D.__data[0]=k.elements[0],D.__data[1]=k.elements[1],D.__data[2]=k.elements[2],D.__data[3]=0,D.__data[4]=k.elements[3],D.__data[5]=k.elements[4],D.__data[6]=k.elements[5],D.__data[7]=0,D.__data[8]=k.elements[6],D.__data[9]=k.elements[7],D.__data[10]=k.elements[8],D.__data[11]=0):(k.toArray(D.__data,F),F+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)})(u),s[u.id]=v)},dispose:function(){for(let u in r)i.deleteBuffer(r[u]);a=[],r={},s={}}}}var $s=class{constructor(e={}){let{canvas:t=dd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e,d;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let p=new Uint32Array(4),m=new Int32Array(4),v=null,g=null,f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this.toneMapping=Hn,this.toneMappingExposure=1;let _=this,y=!1,R=0,T=0,C=null,B=-1,D=null,H=new Ke,G=new Ke,F=null,Y=new Te(0),k=0,Z=t.width,X=t.height,Q=1,ae=null,ce=null,ge=new Ke(0,0,Z,X),te=new Ke(0,0,Z,X),re=!1,me=new Zi,ue=!1,A=!1,M=new we,N=new we,V=new E,w=new Ke,P={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},S=!1;function L(){return C===null?Q:1}let I,J,O,K,ne,$,he,pe,fe,Ae,Oe,Ne,ye,ze,We,$e,xe,Be,Xe,Zr,vi,Ot,_n,Yn,U=n;function Zn(b,z){return t.getContext(b,z)}try{let b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",xc,!1),t.addEventListener("webglcontextrestored",yc,!1),t.addEventListener("webglcontextcreationerror",Mc,!1),U===null){let z="webgl2";if(U=Zn(z,b),U===null)throw Zn(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}function lr(){I=new Fd(U),I.init(),Ot=new em(U,I),J=new Dd(U,I,e,Ot),O=new $p(U),J.reverseDepthBuffer&&O.buffers.depth.setReversed(!0),K=new Gd(U),ne=new kp,$=new Qp(U,I,O,ne,J,Ot,K),he=new Od(_),pe=new Bd(_),fe=new Cd(U),_n=new Ld(U,fe),Ae=new zd(U,fe,K,_n),Oe=new Vd(U,Ae,fe,K),Xe=new kd(U,J,$),$e=new Nd(ne),Ne=new Gp(_,he,pe,I,J,_n,$e),ye=new im(_,ne),ze=new Wp,We=new Zp(I),Be=new Id(_,he,pe,O,Oe,d,l),xe=new Jp(_,Oe,J),Yn=new rm(U,K,J,O),Zr=new Ud(U,I,K),vi=new Hd(U,I,K),K.programs=Ne.programs,_.capabilities=J,_.extensions=I,_.properties=ne,_.renderLists=ze,_.shadowMap=xe,_.state=O,_.info=K}lr();let ft=new fl(_,U);function xc(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function yc(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let b=K.autoReset,z=xe.enabled,q=xe.autoUpdate,ee=xe.needsUpdate,W=xe.type;lr(),K.autoReset=b,xe.enabled=z,xe.autoUpdate=q,xe.needsUpdate=ee,xe.type=W}function Mc(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Sc(b){let z=b.target;z.removeEventListener("dispose",Sc),(function(q){(function(ee){let W=ne.get(ee).programs;W!==void 0&&(W.forEach((function(oe){Ne.releaseProgram(oe)})),ee.isShaderMaterial&&Ne.releaseShaderCache(ee))})(q),ne.remove(q)})(z)}function bc(b,z,q){b.transparent===!0&&b.side===2&&b.forceSinglePass===!1?(b.side=Lt,b.needsUpdate=!0,Kr(b,z,q),b.side=kn,b.needsUpdate=!0,Kr(b,z,q),b.side=2):Kr(b,z,q)}this.xr=ft,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=I.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=I.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize(Z,X,!1))},this.getSize=function(b){return b.set(Z,X)},this.setSize=function(b,z,q=!0){ft.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(Z=b,X=z,t.width=Math.floor(b*Q),t.height=Math.floor(z*Q),q===!0&&(t.style.width=b+"px",t.style.height=z+"px"),this.setViewport(0,0,b,z))},this.getDrawingBufferSize=function(b){return b.set(Z*Q,X*Q).floor()},this.setDrawingBufferSize=function(b,z,q){Z=b,X=z,Q=q,t.width=Math.floor(b*q),t.height=Math.floor(z*q),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(H)},this.getViewport=function(b){return b.copy(ge)},this.setViewport=function(b,z,q,ee){b.isVector4?ge.set(b.x,b.y,b.z,b.w):ge.set(b,z,q,ee),O.viewport(H.copy(ge).multiplyScalar(Q).round())},this.getScissor=function(b){return b.copy(te)},this.setScissor=function(b,z,q,ee){b.isVector4?te.set(b.x,b.y,b.z,b.w):te.set(b,z,q,ee),O.scissor(G.copy(te).multiplyScalar(Q).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(b){O.setScissorTest(re=b)},this.setOpaqueSort=function(b){ae=b},this.setTransparentSort=function(b){ce=b},this.getClearColor=function(b){return b.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(b=!0,z=!0,q=!0){let ee=0;if(b){let W=!1;if(C!==null){let oe=C.texture.format;W=oe===$l||oe===Kl||oe===Jl}if(W){let oe=C.texture.type,de=oe===An||oe===ci||oe===Rr||oe===Wi||oe===ql||oe===Yl,ve=Be.getClearColor(),Se=Be.getClearAlpha(),Re=ve.r,Ee=ve.g,be=ve.b;de?(p[0]=Re,p[1]=Ee,p[2]=be,p[3]=Se,U.clearBufferuiv(U.COLOR,0,p)):(m[0]=Re,m[1]=Ee,m[2]=be,m[3]=Se,U.clearBufferiv(U.COLOR,0,m))}else ee|=U.COLOR_BUFFER_BIT}z&&(ee|=U.DEPTH_BUFFER_BIT,U.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),q&&(ee|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xc,!1),t.removeEventListener("webglcontextrestored",yc,!1),t.removeEventListener("webglcontextcreationerror",Mc,!1),ze.dispose(),We.dispose(),ne.dispose(),he.dispose(),pe.dispose(),Oe.dispose(),_n.dispose(),Yn.dispose(),Ne.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Ec),ft.removeEventListener("sessionend",Tc),Jn.stop()},this.renderBufferDirect=function(b,z,q,ee,W,oe){z===null&&(z=P);let de=W.isMesh&&W.matrixWorld.determinant()<0,ve=(function(Ge,et,St,Ue,Ce){et.isScene!==!0&&(et=P),$.resetTextureUnits();let Kt=et.fog,ju=Ue.isMeshStandardMaterial?et.environment:null,qu=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Xn,$r=(Ue.isMeshStandardMaterial?pe:he).get(Ue.envMap||ju),Yu=Ue.vertexColors===!0&&!!St.attributes.color&&St.attributes.color.itemSize===4,Zu=!!St.attributes.tangent&&(!!Ue.normalMap||Ue.anisotropy>0),Ju=!!St.morphAttributes.position,Ku=!!St.morphAttributes.normal,$u=!!St.morphAttributes.color,Ic=Hn;Ue.toneMapped&&(C!==null&&C.isXRRenderTarget!==!0||(Ic=_.toneMapping));let Lc=St.morphAttributes.position||St.morphAttributes.normal||St.morphAttributes.color,Qu=Lc!==void 0?Lc.length:0,Fe=ne.get(Ue),ed=g.state.lights;if(ue===!0&&(A===!0||Ge!==D)){let kt=Ge===D&&Ue.id===B;$e.setState(Ue,Ge,kt)}let $t=!1;Ue.version===Fe.__version?Fe.needsLights&&Fe.lightsStateVersion!==ed.state.version||Fe.outputColorSpace!==qu||Ce.isBatchedMesh&&Fe.batching===!1?$t=!0:Ce.isBatchedMesh||Fe.batching!==!0?Ce.isBatchedMesh&&Fe.batchingColor===!0&&Ce.colorTexture===null||Ce.isBatchedMesh&&Fe.batchingColor===!1&&Ce.colorTexture!==null||Ce.isInstancedMesh&&Fe.instancing===!1?$t=!0:Ce.isInstancedMesh||Fe.instancing!==!0?Ce.isSkinnedMesh&&Fe.skinning===!1?$t=!0:Ce.isSkinnedMesh||Fe.skinning!==!0?Ce.isInstancedMesh&&Fe.instancingColor===!0&&Ce.instanceColor===null||Ce.isInstancedMesh&&Fe.instancingColor===!1&&Ce.instanceColor!==null||Ce.isInstancedMesh&&Fe.instancingMorph===!0&&Ce.morphTexture===null||Ce.isInstancedMesh&&Fe.instancingMorph===!1&&Ce.morphTexture!==null||Fe.envMap!==$r||Ue.fog===!0&&Fe.fog!==Kt?$t=!0:Fe.numClippingPlanes===void 0||Fe.numClippingPlanes===$e.numPlanes&&Fe.numIntersection===$e.numIntersection?(Fe.vertexAlphas!==Yu||Fe.vertexTangents!==Zu||Fe.morphTargets!==Ju||Fe.morphNormals!==Ku||Fe.morphColors!==$u||Fe.toneMapping!==Ic||Fe.morphTargetsCount!==Qu)&&($t=!0):$t=!0:$t=!0:$t=!0:$t=!0:($t=!0,Fe.__version=Ue.version);let Kn=Fe.currentProgram;$t===!0&&(Kn=Kr(Ue,et,Ce));let Uc=!1,cr=!1,Na=!1,st=Kn.getUniforms(),Un=Fe.uniforms;if(O.useProgram(Kn.program)&&(Uc=!0,cr=!0,Na=!0),Ue.id!==B&&(B=Ue.id,cr=!0),Uc||D!==Ge){J.reverseDepthBuffer?(M.copy(Ge.projectionMatrix),(function($n){let Ze=$n.elements;Ze[2]=.5*Ze[2]+.5*Ze[3],Ze[6]=.5*Ze[6]+.5*Ze[7],Ze[10]=.5*Ze[10]+.5*Ze[11],Ze[14]=.5*Ze[14]+.5*Ze[15]})(M),(function($n){let Ze=$n.elements;Ze[11]===-1?(Ze[10]=-Ze[10]-1,Ze[14]=-Ze[14]):(Ze[10]=-Ze[10],Ze[14]=1-Ze[14])})(M),st.setValue(U,"projectionMatrix",M)):st.setValue(U,"projectionMatrix",Ge.projectionMatrix),st.setValue(U,"viewMatrix",Ge.matrixWorldInverse);let kt=st.map.cameraPosition;kt!==void 0&&kt.setValue(U,V.setFromMatrixPosition(Ge.matrixWorld)),J.logarithmicDepthBuffer&&st.setValue(U,"logDepthBufFC",2/(Math.log(Ge.far+1)/Math.LN2)),(Ue.isMeshPhongMaterial||Ue.isMeshToonMaterial||Ue.isMeshLambertMaterial||Ue.isMeshBasicMaterial||Ue.isMeshStandardMaterial||Ue.isShaderMaterial)&&st.setValue(U,"isOrthographic",Ge.isOrthographicCamera===!0),D!==Ge&&(D=Ge,cr=!0,Na=!0)}if(Ce.isSkinnedMesh){st.setOptional(U,Ce,"bindMatrix"),st.setOptional(U,Ce,"bindMatrixInverse");let kt=Ce.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),st.setValue(U,"boneTexture",kt.boneTexture,$))}Ce.isBatchedMesh&&(st.setOptional(U,Ce,"batchingTexture"),st.setValue(U,"batchingTexture",Ce._matricesTexture,$),st.setOptional(U,Ce,"batchingIdTexture"),st.setValue(U,"batchingIdTexture",Ce._indirectTexture,$),st.setOptional(U,Ce,"batchingColorTexture"),Ce._colorsTexture!==null&&st.setValue(U,"batchingColorTexture",Ce._colorsTexture,$));let Oa=St.morphAttributes;Oa.position===void 0&&Oa.normal===void 0&&Oa.color===void 0||Xe.update(Ce,St,Kn),(cr||Fe.receiveShadow!==Ce.receiveShadow)&&(Fe.receiveShadow=Ce.receiveShadow,st.setValue(U,"receiveShadow",Ce.receiveShadow)),Ue.isMeshGouraudMaterial&&Ue.envMap!==null&&(Un.envMap.value=$r,Un.flipEnvMap.value=$r.isCubeTexture&&$r.isRenderTargetTexture===!1?-1:1),Ue.isMeshStandardMaterial&&Ue.envMap===null&&et.environment!==null&&(Un.envMapIntensity.value=et.environmentIntensity),cr&&(st.setValue(U,"toneMappingExposure",_.toneMappingExposure),Fe.needsLights&&(Qt=Na,(hn=Un).ambientLightColor.needsUpdate=Qt,hn.lightProbe.needsUpdate=Qt,hn.directionalLights.needsUpdate=Qt,hn.directionalLightShadows.needsUpdate=Qt,hn.pointLights.needsUpdate=Qt,hn.pointLightShadows.needsUpdate=Qt,hn.spotLights.needsUpdate=Qt,hn.spotLightShadows.needsUpdate=Qt,hn.rectAreaLights.needsUpdate=Qt,hn.hemisphereLights.needsUpdate=Qt),Kt&&Ue.fog===!0&&ye.refreshFogUniforms(Un,Kt),ye.refreshMaterialUniforms(Un,Ue,Q,X,g.state.transmissionRenderTarget[Ge.id]),Gi.upload(U,Cc(Fe),Un,$));var hn,Qt;if(Ue.isShaderMaterial&&Ue.uniformsNeedUpdate===!0&&(Gi.upload(U,Cc(Fe),Un,$),Ue.uniformsNeedUpdate=!1),Ue.isSpriteMaterial&&st.setValue(U,"center",Ce.center),st.setValue(U,"modelViewMatrix",Ce.modelViewMatrix),st.setValue(U,"normalMatrix",Ce.normalMatrix),st.setValue(U,"modelMatrix",Ce.matrixWorld),Ue.isShaderMaterial||Ue.isRawShaderMaterial){let kt=Ue.uniformsGroups;for(let $n=0,Ze=kt.length;$n<Ze;$n++){let Dc=kt[$n];Yn.update(Dc,Kn),Yn.bind(Dc,Kn)}}return Kn})(b,z,q,ee,W);O.setMaterial(ee,de);let Se=q.index,Re=1;if(ee.wireframe===!0){if(Se=Ae.getWireframeAttribute(q),Se===void 0)return;Re=2}let Ee=q.drawRange,be=q.attributes.position,He=Ee.start*Re,rt=(Ee.start+Ee.count)*Re;oe!==null&&(He=Math.max(He,oe.start*Re),rt=Math.min(rt,(oe.start+oe.count)*Re)),Se!==null?(He=Math.max(He,0),rt=Math.min(rt,Se.count)):be!=null&&(He=Math.max(He,0),rt=Math.min(rt,be.count));let Qe=rt-He;if(Qe<0||Qe===1/0)return;let gt;_n.setup(W,ee,ve,q,Se);let je=Zr;if(Se!==null&&(gt=fe.get(Se),je=vi,je.setIndex(gt)),W.isMesh)ee.wireframe===!0?(O.setLineWidth(ee.wireframeLinewidth*L()),je.setMode(U.LINES)):je.setMode(U.TRIANGLES);else if(W.isLine){let Ge=ee.linewidth;Ge===void 0&&(Ge=1),O.setLineWidth(Ge*L()),W.isLineSegments?je.setMode(U.LINES):W.isLineLoop?je.setMode(U.LINE_LOOP):je.setMode(U.LINE_STRIP)}else W.isPoints?je.setMode(U.POINTS):W.isSprite&&je.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)je.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(I.get("WEBGL_multi_draw"))je.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Ge=W._multiDrawStarts,et=W._multiDrawCounts,St=W._multiDrawCount,Ue=Se?fe.get(Se).bytesPerElement:1,Ce=ne.get(ee).currentProgram.getUniforms();for(let Kt=0;Kt<St;Kt++)Ce.setValue(U,"_gl_DrawID",Kt),je.render(Ge[Kt]/Ue,et[Kt])}else if(W.isInstancedMesh)je.renderInstances(He,Qe,W.count);else if(q.isInstancedBufferGeometry){let Ge=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,et=Math.min(q.instanceCount,Ge);je.renderInstances(He,Qe,et)}else je.render(He,Qe)},this.compile=function(b,z,q=null){q===null&&(q=b),g=We.get(q),g.init(z),x.push(g),q.traverseVisible((function(W){W.isLight&&W.layers.test(z.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))})),b!==q&&b.traverseVisible((function(W){W.isLight&&W.layers.test(z.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))})),g.setupLights();let ee=new Set;return b.traverse((function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let oe=W.material;if(oe)if(Array.isArray(oe))for(let de=0;de<oe.length;de++){let ve=oe[de];bc(ve,q,W),ee.add(ve)}else bc(oe,q,W),ee.add(oe)})),x.pop(),g=null,ee},this.compileAsync=function(b,z,q=null){let ee=this.compile(b,z,q);return new Promise((W=>{function oe(){ee.forEach((function(de){ne.get(de).currentProgram.isReady()&&ee.delete(de)})),ee.size!==0?setTimeout(oe,10):W(b)}I.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)}))};let Ua=null;function Ec(){Jn.stop()}function Tc(){Jn.start()}let Jn=new eu;function Da(b,z,q,ee){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||me.intersectsSprite(b)){ee&&w.setFromMatrixPosition(b.matrixWorld).applyMatrix4(N);let oe=Oe.update(b),de=b.material;de.visible&&v.push(b,oe,de,q,w.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||me.intersectsObject(b))){let oe=Oe.update(b),de=b.material;if(ee&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),w.copy(b.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),w.copy(oe.boundingSphere.center)),w.applyMatrix4(b.matrixWorld).applyMatrix4(N)),Array.isArray(de)){let ve=oe.groups;for(let Se=0,Re=ve.length;Se<Re;Se++){let Ee=ve[Se],be=de[Ee.materialIndex];be&&be.visible&&v.push(b,oe,be,q,w.z,Ee)}}else de.visible&&v.push(b,oe,de,q,w.z,null)}}let W=b.children;for(let oe=0,de=W.length;oe<de;oe++)Da(W[oe],z,q,ee)}function wc(b,z,q,ee){let W=b.opaque,oe=b.transmissive,de=b.transparent;g.setupLightsView(q),ue===!0&&$e.setGlobalState(_.clippingPlanes,q),ee&&O.viewport(H.copy(ee)),W.length>0&&Jr(W,z,q),oe.length>0&&Jr(oe,z,q),de.length>0&&Jr(de,z,q),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Ac(b,z,q,ee){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ee.id]===void 0&&(g.state.transmissionRenderTarget[ee.id]=new Rn(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")||I.has("EXT_color_buffer_float")?Vr:An,minFilter:Bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ke.workingColorSpace}));let W=g.state.transmissionRenderTarget[ee.id],oe=ee.viewport||H;W.setSize(oe.z,oe.w);let de=_.getRenderTarget();_.setRenderTarget(W),_.getClearColor(Y),k=_.getClearAlpha(),k<1&&_.setClearColor(16777215,.5),_.clear(),S&&Be.render(q);let ve=_.toneMapping;_.toneMapping=Hn;let Se=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),g.setupLightsView(ee),ue===!0&&$e.setGlobalState(_.clippingPlanes,ee),Jr(b,q,ee),$.updateMultisampleRenderTarget(W),$.updateRenderTargetMipmap(W),I.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Ee=0,be=z.length;Ee<be;Ee++){let He=z[Ee],rt=He.object,Qe=He.geometry,gt=He.material,je=He.group;if(gt.side===2&&rt.layers.test(ee.layers)){let Ge=gt.side;gt.side=Lt,gt.needsUpdate=!0,Rc(rt,q,ee,Qe,gt,je),gt.side=Ge,gt.needsUpdate=!0,Re=!0}}Re===!0&&($.updateMultisampleRenderTarget(W),$.updateRenderTargetMipmap(W))}_.setRenderTarget(de),_.setClearColor(Y,k),Se!==void 0&&(ee.viewport=Se),_.toneMapping=ve}function Jr(b,z,q){let ee=z.isScene===!0?z.overrideMaterial:null;for(let W=0,oe=b.length;W<oe;W++){let de=b[W],ve=de.object,Se=de.geometry,Re=ee===null?de.material:ee,Ee=de.group;ve.layers.test(q.layers)&&Rc(ve,z,q,Se,Re,Ee)}}function Rc(b,z,q,ee,W,oe){b.onBeforeRender(_,z,q,ee,W,oe),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(_,z,q,ee,b,oe),W.transparent===!0&&W.side===2&&W.forceSinglePass===!1?(W.side=Lt,W.needsUpdate=!0,_.renderBufferDirect(q,z,ee,W,b,oe),W.side=kn,W.needsUpdate=!0,_.renderBufferDirect(q,z,ee,W,b,oe),W.side=2):_.renderBufferDirect(q,z,ee,W,b,oe),b.onAfterRender(_,z,q,ee,W,oe)}function Kr(b,z,q){z.isScene!==!0&&(z=P);let ee=ne.get(b),W=g.state.lights,oe=g.state.shadowsArray,de=W.state.version,ve=Ne.getParameters(b,W.state,oe,z,q),Se=Ne.getProgramCacheKey(ve),Re=ee.programs;ee.environment=b.isMeshStandardMaterial?z.environment:null,ee.fog=z.fog,ee.envMap=(b.isMeshStandardMaterial?pe:he).get(b.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Re===void 0&&(b.addEventListener("dispose",Sc),Re=new Map,ee.programs=Re);let Ee=Re.get(Se);if(Ee!==void 0){if(ee.currentProgram===Ee&&ee.lightsStateVersion===de)return Pc(b,ve),Ee}else ve.uniforms=Ne.getUniforms(b),b.onBeforeCompile(ve,_),Ee=Ne.acquireProgram(ve,Se),Re.set(Se,Ee),ee.uniforms=ve.uniforms;let be=ee.uniforms;return(b.isShaderMaterial||b.isRawShaderMaterial)&&b.clipping!==!0||(be.clippingPlanes=$e.uniform),Pc(b,ve),ee.needsLights=(function(He){return He.isMeshLambertMaterial||He.isMeshToonMaterial||He.isMeshPhongMaterial||He.isMeshStandardMaterial||He.isShadowMaterial||He.isShaderMaterial&&He.lights===!0})(b),ee.lightsStateVersion=de,ee.needsLights&&(be.ambientLightColor.value=W.state.ambient,be.lightProbe.value=W.state.probe,be.directionalLights.value=W.state.directional,be.directionalLightShadows.value=W.state.directionalShadow,be.spotLights.value=W.state.spot,be.spotLightShadows.value=W.state.spotShadow,be.rectAreaLights.value=W.state.rectArea,be.ltc_1.value=W.state.rectAreaLTC1,be.ltc_2.value=W.state.rectAreaLTC2,be.pointLights.value=W.state.point,be.pointLightShadows.value=W.state.pointShadow,be.hemisphereLights.value=W.state.hemi,be.directionalShadowMap.value=W.state.directionalShadowMap,be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,be.spotShadowMap.value=W.state.spotShadowMap,be.spotLightMatrix.value=W.state.spotLightMatrix,be.spotLightMap.value=W.state.spotLightMap,be.pointShadowMap.value=W.state.pointShadowMap,be.pointShadowMatrix.value=W.state.pointShadowMatrix),ee.currentProgram=Ee,ee.uniformsList=null,Ee}function Cc(b){if(b.uniformsList===null){let z=b.currentProgram.getUniforms();b.uniformsList=Gi.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function Pc(b,z){let q=ne.get(b);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}Jn.setAnimationLoop((function(b){Ua&&Ua(b)})),typeof self!="undefined"&&Jn.setContext(self),this.setAnimationLoop=function(b){Ua=b,ft.setAnimationLoop(b),b===null?Jn.stop():Jn.start()},ft.addEventListener("sessionstart",Ec),ft.addEventListener("sessionend",Tc),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(y===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(z),z=ft.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,z,C),g=We.get(b,x.length),g.init(z),x.push(g),N.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),me.setFromProjectionMatrix(N),A=this.localClippingEnabled,ue=$e.init(this.clippingPlanes,A),v=ze.get(b,f.length),v.init(),f.push(v),ft.enabled===!0&&ft.isPresenting===!0){let oe=_.xr.getDepthSensingMesh();oe!==null&&Da(oe,z,-1/0,_.sortObjects)}Da(b,z,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(ae,ce),S=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,S&&Be.addToRenderList(v,b),this.info.render.frame++,ue===!0&&$e.beginShadows();let q=g.state.shadowsArray;xe.render(q,b,z),ue===!0&&$e.endShadows(),this.info.autoReset===!0&&this.info.reset();let ee=v.opaque,W=v.transmissive;if(g.setupLights(),z.isArrayCamera){let oe=z.cameras;if(W.length>0)for(let de=0,ve=oe.length;de<ve;de++)Ac(ee,W,b,oe[de]);S&&Be.render(b);for(let de=0,ve=oe.length;de<ve;de++){let Se=oe[de];wc(v,b,Se,Se.viewport)}}else W.length>0&&Ac(ee,W,b,z),S&&Be.render(b),wc(v,b,z);C!==null&&($.updateMultisampleRenderTarget(C),$.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(_,b,z),_n.resetDefaultState(),B=-1,D=null,x.pop(),x.length>0?(g=x[x.length-1],ue===!0&&$e.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,f.pop(),v=f.length>0?f[f.length-1]:null},this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,z,q){ne.get(b.texture).__webglTexture=z,ne.get(b.depthTexture).__webglTexture=q;let ee=ne.get(b);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=q===void 0,ee.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,z){let q=ne.get(b);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,q=0){C=b,R=z,T=q;let ee=!0,W=null,oe=!1,de=!1;if(b){let ve=ne.get(b);if(ve.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(U.FRAMEBUFFER,null),ee=!1;else if(ve.__webglFramebuffer===void 0)$.setupRenderTarget(b);else if(ve.__hasExternalTextures)$.rebindTextures(b,ne.get(b.texture).__webglTexture,ne.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ee=b.depthTexture;if(ve.__boundDepthTexture!==Ee){if(Ee!==null&&ne.has(Ee)&&(b.width!==Ee.image.width||b.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(b)}}let Se=b.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(de=!0);let Re=ne.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(W=Array.isArray(Re[z])?Re[z][q]:Re[z],oe=!0):W=b.samples>0&&$.useMultisampledRTT(b)===!1?ne.get(b).__webglMultisampledFramebuffer:Array.isArray(Re)?Re[q]:Re,H.copy(b.viewport),G.copy(b.scissor),F=b.scissorTest}else H.copy(ge).multiplyScalar(Q).floor(),G.copy(te).multiplyScalar(Q).floor(),F=re;if(O.bindFramebuffer(U.FRAMEBUFFER,W)&&ee&&O.drawBuffers(b,W),O.viewport(H),O.scissor(G),O.setScissorTest(F),oe){let ve=ne.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,ve.__webglTexture,q)}else if(de){let ve=ne.get(b.texture),Se=z||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,ve.__webglTexture,q||0,Se)}B=-1},this.readRenderTargetPixels=function(b,z,q,ee,W,oe,de){if(!b||!b.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de]),ve){O.bindFramebuffer(U.FRAMEBUFFER,ve);try{let Se=b.texture,Re=Se.format,Ee=Se.type;if(!J.textureFormatReadable(Re))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Ee))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");z>=0&&z<=b.width-ee&&q>=0&&q<=b.height-W&&U.readPixels(z,q,ee,W,Ot.convert(Re),Ot.convert(Ee),oe)}finally{let Se=C!==null?ne.get(C).__webglFramebuffer:null;O.bindFramebuffer(U.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(b,z,q,ee,W,oe,de){if(!b||!b.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de]),ve){let Se=b.texture,Re=Se.format,Ee=Se.type;if(!J.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=b.width-ee&&q>=0&&q<=b.height-W){O.bindFramebuffer(U.FRAMEBUFFER,ve);let be=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,be),U.bufferData(U.PIXEL_PACK_BUFFER,oe.byteLength,U.STREAM_READ),U.readPixels(z,q,ee,W,Ot.convert(Re),Ot.convert(Ee),0);let He=C!==null?ne.get(C).__webglFramebuffer:null;O.bindFramebuffer(U.FRAMEBUFFER,He);let rt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await(function(Qe,gt,je){return new Promise((function(Ge,et){setTimeout((function St(){switch(Qe.clientWaitSync(gt,Qe.SYNC_FLUSH_COMMANDS_BIT,0)){case Qe.WAIT_FAILED:et();break;case Qe.TIMEOUT_EXPIRED:setTimeout(St,je);break;default:Ge()}}),je)}))})(U,rt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,be),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,oe),U.deleteBuffer(be),U.deleteSync(rt),oe}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,z=null,q=0){b.isTexture!==!0&&(Os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,b=arguments[1]);let ee=Math.pow(2,-q),W=Math.floor(b.image.width*ee),oe=Math.floor(b.image.height*ee),de=z!==null?z.x:0,ve=z!==null?z.y:0;$.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,de,ve,W,oe),O.unbindTexture()},this.copyTextureToTexture=function(b,z,q=null,ee=null,W=0){let oe,de,ve,Se,Re,Ee;b.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,b=arguments[1],z=arguments[2],W=arguments[3]||0,q=null),q!==null?(oe=q.max.x-q.min.x,de=q.max.y-q.min.y,ve=q.min.x,Se=q.min.y):(oe=b.image.width,de=b.image.height,ve=0,Se=0),ee!==null?(Re=ee.x,Ee=ee.y):(Re=0,Ee=0);let be=Ot.convert(z.format),He=Ot.convert(z.type);$.setTexture2D(z,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);let rt=U.getParameter(U.UNPACK_ROW_LENGTH),Qe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),gt=U.getParameter(U.UNPACK_SKIP_PIXELS),je=U.getParameter(U.UNPACK_SKIP_ROWS),Ge=U.getParameter(U.UNPACK_SKIP_IMAGES),et=b.isCompressedTexture?b.mipmaps[W]:b.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,et.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,et.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ve),U.pixelStorei(U.UNPACK_SKIP_ROWS,Se),b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,W,Re,Ee,oe,de,be,He,et.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,W,Re,Ee,et.width,et.height,be,et.data):U.texSubImage2D(U.TEXTURE_2D,W,Re,Ee,oe,de,be,He,et),U.pixelStorei(U.UNPACK_ROW_LENGTH,rt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,gt),U.pixelStorei(U.UNPACK_SKIP_ROWS,je),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ge),W===0&&z.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),O.unbindTexture()},this.copyTextureToTexture3D=function(b,z,q=null,ee=null,W=0){let oe,de,ve,Se,Re,Ee,be,He,rt;b.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,ee=arguments[1]||null,b=arguments[2],z=arguments[3],W=arguments[4]||0);let Qe=b.isCompressedTexture?b.mipmaps[W]:b.image;q!==null?(oe=q.max.x-q.min.x,de=q.max.y-q.min.y,ve=q.max.z-q.min.z,Se=q.min.x,Re=q.min.y,Ee=q.min.z):(oe=Qe.width,de=Qe.height,ve=Qe.depth,Se=0,Re=0,Ee=0),ee!==null?(be=ee.x,He=ee.y,rt=ee.z):(be=0,He=0,rt=0);let gt=Ot.convert(z.format),je=Ot.convert(z.type),Ge;if(z.isData3DTexture)$.setTexture3D(z,0),Ge=U.TEXTURE_3D;else{if(!z.isDataArrayTexture&&!z.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");$.setTexture2DArray(z,0),Ge=U.TEXTURE_2D_ARRAY}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);let et=U.getParameter(U.UNPACK_ROW_LENGTH),St=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ue=U.getParameter(U.UNPACK_SKIP_PIXELS),Ce=U.getParameter(U.UNPACK_SKIP_ROWS),Kt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Qe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Se),U.pixelStorei(U.UNPACK_SKIP_ROWS,Re),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ee),b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Ge,W,be,He,rt,oe,de,ve,gt,je,Qe.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(Ge,W,be,He,rt,oe,de,ve,gt,Qe.data):U.texSubImage3D(Ge,W,be,He,rt,oe,de,ve,gt,je,Qe),U.pixelStorei(U.UNPACK_ROW_LENGTH,et),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,St),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ue),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ce),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Kt),W===0&&z.generateMipmaps&&U.generateMipmap(Ge),O.unbindTexture()},this.initRenderTarget=function(b){ne.get(b).__webglFramebuffer===void 0&&$.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?$.setTextureCube(b,0):b.isData3DTexture?$.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?$.setTexture2DArray(b,0):$.setTexture2D(b,0),O.unbindTexture()},this.resetState=function(){R=0,T=0,C=null,O.reset(),_n.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ql?"display-p3":"srgb",t.unpackColorSpace=ke.workingColorSpace===ga?"display-p3":"srgb"}};var Qs=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ea=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jt,this.environmentIntensity=1,this.environmentRotation=new jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},gl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$o,this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},wt=new E,ta=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),r=Ve(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),r=Ve(r,this.array),s=Ve(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Lr=class extends Wn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ii,vr=new E,Li=new E,Ui=new E,Di=new ie,_r=new ie,su=new we,ys=new E,xr=new E,Ms=new E,wh=new ie,po=new ie,Ah=new ie,na=class extends yt{constructor(e=new Lr){if(super(),this.isSprite=!0,this.type="Sprite",Ii===void 0){Ii=new at;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gl(t,5);Ii.setIndex([0,1,2,0,2,3]),Ii.setAttribute("position",new ta(n,3,0,!1)),Ii.setAttribute("uv",new ta(n,2,3,!1))}this.geometry=Ii,this.material=e,this.center=new ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Li.setFromMatrixScale(this.matrixWorld),su.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ui.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Li.multiplyScalar(-Ui.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;Ss(ys.set(-.5,-.5,0),Ui,a,Li,r,s),Ss(xr.set(.5,-.5,0),Ui,a,Li,r,s),Ss(Ms.set(.5,.5,0),Ui,a,Li,r,s),wh.set(0,0),po.set(1,0),Ah.set(1,1);let o=e.ray.intersectTriangle(ys,xr,Ms,!1,vr);if(o===null&&(Ss(xr.set(-.5,.5,0),Ui,a,Li,r,s),po.set(0,1),o=e.ray.intersectTriangle(ys,Ms,xr,!1,vr),o===null))return;let l=e.ray.origin.distanceTo(vr);l<e.near||l>e.far||t.push({distance:l,point:vr.clone(),uv:wn.getInterpolation(vr,ys,xr,Ms,wh,po,Ah,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ss(i,e,t,n,r,s){Di.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(_r.x=s*Di.x-r*Di.y,_r.y=r*Di.x+s*Di.y):_r.copy(Di),i.copy(e),i.x+=_r.x,i.y+=_r.y,i.applyMatrix4(su)}var ff=new E,gf=new E;var vf=new E,_f=new Ke,xf=new Ke,yf=new E,Mf=new we,Sf=new E,bf=new ln,Ef=new we,Tf=new qi;var vl=class extends Ut{constructor(e=null,t=1,n=1,r,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wf=new we,Af=new we;var ia=class extends Dt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ni=new we,Rh=new we,bs=[],Ch=new on,sm=new we,yr=new xt,Mr=new ln,Ht=class extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ia(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,sm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new on),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),Ch.copy(e.boundingBox).applyMatrix4(Ni),this.boundingBox.union(Ch)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),Mr.copy(e.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(Mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=r[s+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(yr.geometry=this.geometry,yr.material=this.material,yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mr.copy(this.boundingSphere),Mr.applyMatrix4(n),e.ray.intersectsSphere(Mr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ni),Rh.multiplyMatrices(n,Ni),yr.matrixWorld=Rh,yr.raycast(e,bs);for(let a=0,o=bs.length;a<o;a++){let l=bs[a];l.instanceId=s,l.object=this,t.push(l)}bs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ia(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new vl(new Float32Array(r*this.count),r,this.count,Zl,pn));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var _l=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n){let r=this.pool,s=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];s.push(a),this.index++,a.start=e.start,a.count=e.count,a.z=t,a.index=n}reset(){this.list.length=0,this.index=0}},Rf=new we,Cf=new we,Pf=new we,If=new Te(1,1,1),Lf=new we,Uf=new Zi,Df=new on,Nf=new ln,Of=new E,Bf=new E,Ff=new E,zf=new _l,Hf=new xt;var Gf=new E,kf=new E,Vf=new we,Wf=new qi,Xf=new ln,jf=new E,qf=new E;var Yf=new E,Zf=new E;var Jf=new we,Kf=new qi,$f=new ln,Qf=new E;var Ji=class extends Ut{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},qt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=n[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,n[r]===a)return r/(s-1);let h=n[r];return(r+(a-h)/(n[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ie:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new E,r=[],s=[],a=[],o=new E,l=new we;for(let p=0;p<=e;p++){let m=p/e;r[p]=this.getTangentAt(m,new E)}s[0]=new E,a[0]=new E;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(_t(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(_t(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),a[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ur=class extends qt{constructor(e=0,t=0,n=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ie){let n=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},xl=class extends Ur{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function tc(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){let a=s*s;return i+e*s+t*a+n*(a*s)}}}var Es=new E,mo=new tc,fo=new tc,go=new tc,Dr=class extends qt{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new E){let n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(Es.subVectors(r[0],r[1]).add(r[0]),o=Es);let u=r[c%s],d=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(Es.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=Es),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(l),p);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),mo.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,m,v,g),fo.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,m,v,g),go.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,m,v,g)}else this.curveType==="catmullrom"&&(mo.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),fo.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),go.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(mo.calc(h),fo.calc(h),go.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new E().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ph(i,e,t,n,r){let s=.5*(n-e),a=.5*(r-t),o=i*i;return(2*t-2*n+s+a)*(i*o)+(-3*t+3*n-2*s-a)*o+s*i+t}function Er(i,e,t,n){return(function(r,s){let a=1-r;return a*a*s})(i,e)+(function(r,s){return 2*(1-r)*r*s})(i,t)+(function(r,s){return r*r*s})(i,n)}function Tr(i,e,t,n,r){return(function(s,a){let o=1-s;return o*o*o*a})(i,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(i,t)+(function(s,a){return 3*(1-s)*s*s*a})(i,n)+(function(s,a){return s*s*s*a})(i,r)}var ra=class extends qt{constructor(e=new ie,t=new ie,n=new ie,r=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ie){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Tr(e,r.x,s.x,a.x,o.x),Tr(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},yl=class extends qt{constructor(e=new E,t=new E,n=new E,r=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new E){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Tr(e,r.x,s.x,a.x,o.x),Tr(e,r.y,s.y,a.y,o.y),Tr(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sa=class extends qt{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ml=class extends qt{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends qt{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Er(e,r.x,s.x,a.x),Er(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends qt{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Er(e,r.x,s.x,a.x),Er(e,r.y,s.y,a.y),Er(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},la=class extends qt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Ph(o,l.x,c.x,h.x,u.x),Ph(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new ie().fromArray(r))}return this}},ca=Object.freeze({__proto__:null,ArcCurve:xl,CatmullRomCurve3:Dr,CubicBezierCurve:ra,CubicBezierCurve3:yl,EllipseCurve:Ur,LineCurve:sa,LineCurve3:Ml,QuadraticBezierCurve:aa,QuadraticBezierCurve3:oa,SplineCurve:la}),Sl=class extends qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ca[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new ca[r.type]().fromJSON(r))}return this}},Nr=class extends Sl{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new sa(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new aa(this.currentPoint.clone(),new ie(e,t),new ie(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){let o=new ra(this.currentPoint.clone(),new ie(e,t),new ie(n,r),new ie(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new la(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){let c=new Ur(e,t,n,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ki=class i extends at{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=_t(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new E,d=new ie,p=new E,m=new E,v=new E,g=0,f=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,f=e[x+1].y-e[x].y,p.x=1*f,p.y=-g,p.z=0*f,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[x+1].x-e[x].x,f=e[x+1].y-e[x].y,p.x=1*f,p.y=-g,p.z=0*f,m.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(m)}for(let x=0;x<=t;x++){let _=n+x*h*r,y=Math.sin(_),R=Math.cos(_);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*y,u.y=e[T].y,u.z=e[T].x*R,a.push(u.x,u.y,u.z),d.x=x/t,d.y=T/(e.length-1),o.push(d.x,d.y);let C=l[3*T+0]*y,B=l[3*T+1],D=l[3*T+0]*R;c.push(C,B,D)}}for(let x=0;x<t;x++)for(let _=0;_<e.length-1;_++){let y=_+x*e.length,R=y,T=y+e.length,C=y+e.length+1,B=y+1;s.push(R,T,B),s.push(C,B,T)}this.setIndex(s),this.setAttribute("position",new Pe(a,3)),this.setAttribute("uv",new Pe(o,2)),this.setAttribute("normal",new Pe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},bl=class i extends Ki{constructor(e=1,t=1,n=4,r=8){let s=new Nr;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},gn=class i extends at{constructor(e=1,t=32,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new E,h=new ie;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Pe(a,3)),this.setAttribute("normal",new Pe(o,3)),this.setAttribute("uv",new Pe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},mt=class i extends at{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],p=[],m=0,v=[],g=n/2,f=0;function x(_){let y=m,R=new ie,T=new E,C=0,B=_===!0?e:t,D=_===!0?1:-1;for(let G=1;G<=r;G++)u.push(0,g*D,0),d.push(0,D,0),p.push(.5,.5),m++;let H=m;for(let G=0;G<=r;G++){let F=G/r*l+o,Y=Math.cos(F),k=Math.sin(F);T.x=B*k,T.y=g*D,T.z=B*Y,u.push(T.x,T.y,T.z),d.push(0,D,0),R.x=.5*Y+.5,R.y=.5*k*D+.5,p.push(R.x,R.y),m++}for(let G=0;G<r;G++){let F=y+G,Y=H+G;_===!0?h.push(Y,Y+1,F):h.push(Y+1,Y,F),C+=3}c.addGroup(f,C,_===!0?1:2),f+=C}(function(){let _=new E,y=new E,R=0,T=(t-e)/n;for(let C=0;C<=s;C++){let B=[],D=C/s,H=D*(t-e)+e;for(let G=0;G<=r;G++){let F=G/r,Y=F*l+o,k=Math.sin(Y),Z=Math.cos(Y);y.x=H*k,y.y=-D*n+g,y.z=H*Z,u.push(y.x,y.y,y.z),_.set(k,T,Z).normalize(),d.push(_.x,_.y,_.z),p.push(F,1-D),B.push(m++)}v.push(B)}for(let C=0;C<r;C++)for(let B=0;B<s;B++){let D=v[B][C],H=v[B+1][C],G=v[B+1][C+1],F=v[B][C+1];e>0&&(h.push(D,H,F),R+=3),t>0&&(h.push(H,G,F),R+=3)}c.addGroup(f,R,0),f+=R})(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Pe(u,3)),this.setAttribute("normal",new Pe(d,3)),this.setAttribute("uv",new Pe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Or=class i extends mt{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hi=class i extends at{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];function o(d,p,m,v){let g=v+1,f=[];for(let x=0;x<=g;x++){f[x]=[];let _=d.clone().lerp(m,x/g),y=p.clone().lerp(m,x/g),R=g-x;for(let T=0;T<=R;T++)f[x][T]=T===0&&x===g?_:_.clone().lerp(y,T/R)}for(let x=0;x<g;x++)for(let _=0;_<2*(g-x)-1;_++){let y=Math.floor(_/2);_%2==0?(l(f[x][y+1]),l(f[x+1][y]),l(f[x][y])):(l(f[x][y+1]),l(f[x+1][y+1]),l(f[x+1][y]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let m=3*d;p.x=e[m+0],p.y=e[m+1],p.z=e[m+2]}function h(d,p,m,v){v<0&&d.x===1&&(a[p]=d.x-1),m.x===0&&m.z===0&&(a[p]=v/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new E,m=new E,v=new E;for(let g=0;g<t.length;g+=3)c(t[g+0],p),c(t[g+1],m),c(t[g+2],v),o(p,m,v,d)})(r),(function(d){let p=new E;for(let m=0;m<s.length;m+=3)p.x=s[m+0],p.y=s[m+1],p.z=s[m+2],p.normalize().multiplyScalar(d),s[m+0]=p.x,s[m+1]=p.y,s[m+2]=p.z})(n),(function(){let d=new E;for(let m=0;m<s.length;m+=3){d.x=s[m+0],d.y=s[m+1],d.z=s[m+2];let v=u(d)/2/Math.PI+.5,g=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(v,1-g)}var p;(function(){let m=new E,v=new E,g=new E,f=new E,x=new ie,_=new ie,y=new ie;for(let R=0,T=0;R<s.length;R+=9,T+=6){m.set(s[R+0],s[R+1],s[R+2]),v.set(s[R+3],s[R+4],s[R+5]),g.set(s[R+6],s[R+7],s[R+8]),x.set(a[T+0],a[T+1]),_.set(a[T+2],a[T+3]),y.set(a[T+4],a[T+5]),f.copy(m).add(v).add(g).divideScalar(3);let C=u(f);h(x,T+0,m,C),h(_,T+2,v,C),h(y,T+4,g,C)}})(),(function(){for(let m=0;m<a.length;m+=6){let v=a[m+0],g=a[m+2],f=a[m+4],x=Math.max(v,g,f),_=Math.min(v,g,f);x>.9&&_<.1&&(v<.2&&(a[m+0]+=1),g<.2&&(a[m+2]+=1),f<.2&&(a[m+4]+=1))}})()})(),this.setAttribute("position",new Pe(s,3)),this.setAttribute("normal",new Pe(s.slice(),3)),this.setAttribute("uv",new Pe(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},El=class i extends hi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ts=new E,ws=new E,vo=new E,As=new wn,Tl=class extends at{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(zi*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:v,b:g,c:f}=As;if(v.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),As.getNormal(vo),u[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,u[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let x=0;x<3;x++){let _=(x+1)%3,y=u[x],R=u[_],T=As[h[x]],C=As[h[_]],B=`${y}_${R}`,D=`${R}_${y}`;D in d&&d[D]?(vo.dot(d[D].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(C.x,C.y,C.z)),d[D]=null):B in d||(d[B]={index0:c[x],index1:c[_],normal:vo.clone()})}}for(let m in d)if(d[m]){let{index0:v,index1:g}=d[m];Ts.fromBufferAttribute(o,v),ws.fromBufferAttribute(o,g),p.push(Ts.x,Ts.y,Ts.z),p.push(ws.x,ws.y,ws.z)}this.setAttribute("position",new Pe(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ha=class extends Nr{constructor(e){super(e),this.uuid=mn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new Nr().fromJSON(r))}return this}},am=function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Ih(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(n&&(s=(function(m,v,g,f){let x=[],_,y,R,T,C;for(_=0,y=v.length;_<y;_++)R=v[_]*f,T=_<y-1?v[_+1]*f:m.length,C=Ih(m,R,T,f,!1),C===C.next&&(C.steiner=!0),x.push(mm(C));for(x.sort(um),_=0;_<x.length;_++)g=dm(x[_],g);return g})(i,e,s,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let m=t;m<r;m+=t)u=i[m],d=i[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Br(s,a,t,o,l,p,0),a};function Ih(i,e,t,n,r){let s,a;if(r===(function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(i,e,t,n)>0)for(s=e;s<t;s+=n)a=Lh(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=Lh(s,i[s],i[s+1],a);return a&&_a(a,a.next)&&(zr(a),a=a.next),a}function ui(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!_a(n,n.next)&&tt(n.prev,n,n.next)!==0)n=n.next;else{if(zr(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Br(i,e,t,n,r,s,a){if(!i)return;!a&&s&&(function(h,u,d,p){let m=h;do m.z===0&&(m.z=wl(m.x,m.y,u,d,p)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==h);m.prevZ.nextZ=null,m.prevZ=null,(function(v){let g,f,x,_,y,R,T,C,B=1;do{for(f=v,v=null,y=null,R=0;f;){for(R++,x=f,T=0,g=0;g<B&&(T++,x=x.nextZ,x);g++);for(C=B;T>0||C>0&&x;)T!==0&&(C===0||!x||f.z<=x.z)?(_=f,f=f.nextZ,T--):(_=x,x=x.nextZ,C--),y?y.nextZ=_:v=_,_.prevZ=y,y=_;f=x}y.nextZ=null,B*=2}while(R>1)})(m)})(i,n,r,s);let o,l,c=i;for(;i.prev!==i.next;)if(o=i.prev,l=i.next,s?lm(i,n,r,s):om(i))e.push(o.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),zr(i),i=l.next,c=l.next;else if((i=l)===c){a?a===1?Br(i=cm(ui(i),e,t),e,t,n,r,s,2):a===2&&hm(i,e,t,n,r,s):Br(ui(i),e,t,n,r,s,1);break}}function om(i){let e=i.prev,t=i,n=i.next;if(tt(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=r<s?r<a?r:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&Fi(r,o,s,l,a,c,m.x,m.y)&&tt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function lm(i,e,t,n){let r=i.prev,s=i,a=i.next;if(tt(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,v=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,f=wl(p,m,e,t,n),x=wl(v,g,e,t,n),_=i.prevZ,y=i.nextZ;for(;_&&_.z>=f&&y&&y.z<=x;){if(_.x>=p&&_.x<=v&&_.y>=m&&_.y<=g&&_!==r&&_!==a&&Fi(o,h,l,u,c,d,_.x,_.y)&&tt(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=v&&y.y>=m&&y.y<=g&&y!==r&&y!==a&&Fi(o,h,l,u,c,d,y.x,y.y)&&tt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=v&&_.y>=m&&_.y<=g&&_!==r&&_!==a&&Fi(o,h,l,u,c,d,_.x,_.y)&&tt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=x;){if(y.x>=p&&y.x<=v&&y.y>=m&&y.y<=g&&y!==r&&y!==a&&Fi(o,h,l,u,c,d,y.x,y.y)&&tt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function cm(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!_a(r,s)&&au(r,n,n.next,s)&&Fr(r,s)&&Fr(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),zr(n),zr(n.next),n=i=s),n=n.next}while(n!==i);return ui(n)}function hm(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&fm(a,o)){let l=ou(a,o);return a=ui(a,a.next),l=ui(l,l.next),Br(a,e,t,n,r,s,0),void Br(l,e,t,n,r,s,0)}o=o.next}a=a.next}while(a!==i)}function um(i,e){return i.x-e.x}function dm(i,e){let t=(function(r,s){let a,o=s,l=-1/0,c=r.x,h=r.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let g=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(g<=c&&g>l&&(l=g,a=o.x<o.next.x?o:o.next,g===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,m,v=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&Fi(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(m=Math.abs(h-o.y)/(c-o.x),Fr(o,r)&&(m<v||m===v&&(o.x>a.x||o.x===a.x&&pm(a,o)))&&(a=o,v=m)),o=o.next;while(o!==u);return a})(i,e);if(!t)return e;let n=ou(t,i);return ui(n,n.next),ui(t,t.next)}function pm(i,e){return tt(i.prev,i,e.prev)<0&&tt(e.next,i,i.next)<0}function wl(i,e,t,n,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function mm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Fi(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function fm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!(function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&au(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1})(i,e)&&(Fr(i,e)&&Fr(e,i)&&(function(t,n){let r=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(i,e)&&(tt(i.prev,i,e.prev)||tt(i,e.prev,e))||_a(i,e)&&tt(i.prev,i,i.next)>0&&tt(e.prev,e,e.next)>0)}function tt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function _a(i,e){return i.x===e.x&&i.y===e.y}function au(i,e,t,n){let r=Cs(tt(i,e,t)),s=Cs(tt(i,e,n)),a=Cs(tt(t,n,i)),o=Cs(tt(t,n,e));return r!==s&&a!==o||!(r!==0||!Rs(i,t,e))||!(s!==0||!Rs(i,n,e))||!(a!==0||!Rs(t,i,n))||!(o!==0||!Rs(t,e,n))}function Rs(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Cs(i){return i>0?1:i<0?-1:0}function Fr(i,e){return tt(i.prev,i,i.next)<0?tt(i,e,i.next)>=0&&tt(i,i.prev,e)>=0:tt(i,e,i.prev)<0||tt(i,i.next,e)<0}function ou(i,e){let t=new Al(i.i,i.x,i.y),n=new Al(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Lh(i,e,t,n){let r=new Al(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function zr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Al(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Gn=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Uh(e),Dh(n,e);let a=e.length;t.forEach(Uh);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Dh(n,t[l]);let o=am(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Uh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Dh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Rl=class i extends at{constructor(e=new ha([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:gm,_,y,R,T,C,B=!1;f&&(_=f.getSpacedPoints(h),B=!0,d=!1,y=f.computeFrenetFrames(h,!1),R=new E,T=new E,C=new E),d||(g=0,p=0,m=0,v=0);let D=o.extractPoints(c),H=D.shape,G=D.holes;if(!Gn.isClockWise(H)){H=H.reverse();for(let w=0,P=G.length;w<P;w++){let S=G[w];Gn.isClockWise(S)&&(G[w]=S.reverse())}}let F=Gn.triangulateShape(H,G),Y=H;for(let w=0,P=G.length;w<P;w++){let S=G[w];H=H.concat(S)}function k(w,P,S){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),w.clone().addScaledVector(P,S)}let Z=H.length,X=F.length;function Q(w,P,S){let L,I,J,O=w.x-P.x,K=w.y-P.y,ne=S.x-w.x,$=S.y-w.y,he=O*O+K*K,pe=O*$-K*ne;if(Math.abs(pe)>Number.EPSILON){let fe=Math.sqrt(he),Ae=Math.sqrt(ne*ne+$*$),Oe=P.x-K/fe,Ne=P.y+O/fe,ye=((S.x-$/Ae-Oe)*$-(S.y+ne/Ae-Ne)*ne)/(O*$-K*ne);L=Oe+O*ye-w.x,I=Ne+K*ye-w.y;let ze=L*L+I*I;if(ze<=2)return new ie(L,I);J=Math.sqrt(ze/2)}else{let fe=!1;O>Number.EPSILON?ne>Number.EPSILON&&(fe=!0):O<-Number.EPSILON?ne<-Number.EPSILON&&(fe=!0):Math.sign(K)===Math.sign($)&&(fe=!0),fe?(L=-K,I=O,J=Math.sqrt(he)):(L=O,I=K,J=Math.sqrt(he/2))}return new ie(L/J,I/J)}let ae=[];for(let w=0,P=Y.length,S=P-1,L=w+1;w<P;w++,S++,L++)S===P&&(S=0),L===P&&(L=0),ae[w]=Q(Y[w],Y[S],Y[L]);let ce=[],ge,te=ae.concat();for(let w=0,P=G.length;w<P;w++){let S=G[w];ge=[];for(let L=0,I=S.length,J=I-1,O=L+1;L<I;L++,J++,O++)J===I&&(J=0),O===I&&(O=0),ge[L]=Q(S[L],S[J],S[O]);ce.push(ge),te=te.concat(ge)}for(let w=0;w<g;w++){let P=w/g,S=p*Math.cos(P*Math.PI/2),L=m*Math.sin(P*Math.PI/2)+v;for(let I=0,J=Y.length;I<J;I++){let O=k(Y[I],ae[I],L);ue(O.x,O.y,-S)}for(let I=0,J=G.length;I<J;I++){let O=G[I];ge=ce[I];for(let K=0,ne=O.length;K<ne;K++){let $=k(O[K],ge[K],L);ue($.x,$.y,-S)}}}let re=m+v;for(let w=0;w<Z;w++){let P=d?k(H[w],te[w],re):H[w];B?(T.copy(y.normals[0]).multiplyScalar(P.x),R.copy(y.binormals[0]).multiplyScalar(P.y),C.copy(_[0]).add(T).add(R),ue(C.x,C.y,C.z)):ue(P.x,P.y,0)}for(let w=1;w<=h;w++)for(let P=0;P<Z;P++){let S=d?k(H[P],te[P],re):H[P];B?(T.copy(y.normals[w]).multiplyScalar(S.x),R.copy(y.binormals[w]).multiplyScalar(S.y),C.copy(_[w]).add(T).add(R),ue(C.x,C.y,C.z)):ue(S.x,S.y,u/h*w)}for(let w=g-1;w>=0;w--){let P=w/g,S=p*Math.cos(P*Math.PI/2),L=m*Math.sin(P*Math.PI/2)+v;for(let I=0,J=Y.length;I<J;I++){let O=k(Y[I],ae[I],L);ue(O.x,O.y,u+S)}for(let I=0,J=G.length;I<J;I++){let O=G[I];ge=ce[I];for(let K=0,ne=O.length;K<ne;K++){let $=k(O[K],ge[K],L);B?ue($.x,$.y+_[h-1].y,_[h-1].x+S):ue($.x,$.y,u+S)}}}function me(w,P){let S=w.length;for(;--S>=0;){let L=S,I=S-1;I<0&&(I=w.length-1);for(let J=0,O=h+2*g;J<O;J++){let K=Z*J,ne=Z*(J+1);M(P+L+K,P+I+K,P+I+ne,P+L+ne)}}}function ue(w,P,S){l.push(w),l.push(P),l.push(S)}function A(w,P,S){N(w),N(P),N(S);let L=r.length/3,I=x.generateTopUV(n,r,L-3,L-2,L-1);V(I[0]),V(I[1]),V(I[2])}function M(w,P,S,L){N(w),N(P),N(L),N(P),N(S),N(L);let I=r.length/3,J=x.generateSideWallUV(n,r,I-6,I-3,I-2,I-1);V(J[0]),V(J[1]),V(J[3]),V(J[1]),V(J[2]),V(J[3])}function N(w){r.push(l[3*w+0]),r.push(l[3*w+1]),r.push(l[3*w+2])}function V(w){s.push(w.x),s.push(w.y)}(function(){let w=r.length/3;if(d){let P=0,S=Z*P;for(let L=0;L<X;L++){let I=F[L];A(I[2]+S,I[1]+S,I[0]+S)}P=h+2*g,S=Z*P;for(let L=0;L<X;L++){let I=F[L];A(I[0]+S,I[1]+S,I[2]+S)}}else{for(let P=0;P<X;P++){let S=F[P];A(S[2],S[1],S[0])}for(let P=0;P<X;P++){let S=F[P];A(S[0]+Z*h,S[1]+Z*h,S[2]+Z*h)}}n.addGroup(w,r.length/3-w,0)})(),(function(){let w=r.length/3,P=0;me(Y,P),P+=Y.length;for(let S=0,L=G.length;S<L;S++){let I=G[S];me(I,P),P+=I.length}n.addGroup(w,r.length/3-w,1)})()}this.setAttribute("position",new Pe(r,3)),this.setAttribute("uv",new Pe(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},n),n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ca[r.type]().fromJSON(r)),new i(n,e.options)}},gm={generateTopUV:function(i,e,t,n,r){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*r],h=e[3*r+1];return[new ie(s,a),new ie(o,l),new ie(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*r],p=e[3*r+1],m=e[3*r+2],v=e[3*s],g=e[3*s+1],f=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new ie(a,1-l),new ie(c,1-u),new ie(d,1-m),new ie(v,1-f)]:[new ie(o,1-l),new ie(h,1-u),new ie(p,1-m),new ie(g,1-f)]}},Hr=class i extends hi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Cl=class i extends hi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Gr=class i extends at{constructor(e=.5,t=1,n=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new E,m=new ie;for(let v=0;v<=r;v++){for(let g=0;g<=n;g++){let f=s+g/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let v=0;v<r;v++){let g=v*(n+1);for(let f=0;f<n;f++){let x=f+g,_=x,y=x+n+1,R=x+n+2,T=x+1;o.push(_,y,T),o.push(y,R,T)}}this.setIndex(o),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Pl=class i extends at{constructor(e=new ha([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,m=d.holes;Gn.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,f=m.length;g<f;g++){let x=m[g];Gn.isClockWise(x)===!0&&(m[g]=x.reverse())}let v=Gn.triangulateShape(p,m);for(let g=0,f=m.length;g<f;g++){let x=m[g];p=p.concat(x)}for(let g=0,f=p.length;g<f;g++){let x=p[g];r.push(x.x,x.y,0),s.push(0,0,1),a.push(x.x,x.y)}for(let g=0,f=v.length;g<f;g++){let x=v[g],_=x[0]+u,y=x[1]+u,R=x[2]+u;n.push(_,y,R),l+=3}}this.setIndex(n),this.setAttribute("position",new Pe(r,3)),this.setAttribute("normal",new Pe(s,3)),this.setAttribute("uv",new Pe(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];n.push(a)}return new i(n,e.curveSegments)}},ot=class i extends at{constructor(e=1,t=32,n=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new E,d=new E,p=[],m=[],v=[],g=[];for(let f=0;f<=n;f++){let x=[],_=f/n,y=0;f===0&&a===0?y=.5/t:f===n&&l===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){let T=R/t;u.x=-e*Math.cos(r+T*s)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+T*s)*Math.sin(a+_*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(T+y,1-_),x.push(c++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<t;x++){let _=h[f][x+1],y=h[f][x],R=h[f+1][x],T=h[f+1][x+1];(f!==0||a>0)&&p.push(_,y,T),(f!==n-1||l<Math.PI)&&p.push(y,R,T)}this.setIndex(p),this.setAttribute("position",new Pe(m,3)),this.setAttribute("normal",new Pe(v,3)),this.setAttribute("uv",new Pe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Il=class i extends hi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Cn=class i extends at{constructor(e=1,t=.4,n=12,r=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],l=[],c=[],h=new E,u=new E,d=new E;for(let p=0;p<=n;p++)for(let m=0;m<=r;m++){let v=m/r*s,g=p/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=r;m++){let v=(r+1)*p+m-1,g=(r+1)*(p-1)+m-1,f=(r+1)*(p-1)+m,x=(r+1)*p+m;a.push(v,g,x),a.push(g,f,x)}this.setIndex(a),this.setAttribute("position",new Pe(o,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Ll=class i extends at{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new E,d=new E,p=new E,m=new E,v=new E,g=new E,f=new E;for(let _=0;_<=n;++_){let y=_/n*s*Math.PI*2;x(y,s,a,e,p),x(y+.01,s,a,e,m),g.subVectors(m,p),f.addVectors(m,p),v.crossVectors(g,f),f.crossVectors(v,g),v.normalize(),f.normalize();for(let R=0;R<=r;++R){let T=R/r*Math.PI*2,C=-t*Math.cos(T),B=t*Math.sin(T);u.x=p.x+(C*f.x+B*v.x),u.y=p.y+(C*f.y+B*v.y),u.z=p.z+(C*f.z+B*v.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(_/n),h.push(R/r)}}for(let _=1;_<=n;_++)for(let y=1;y<=r;y++){let R=(r+1)*(_-1)+(y-1),T=(r+1)*_+(y-1),C=(r+1)*_+y,B=(r+1)*(_-1)+y;o.push(R,T,B),o.push(T,C,B)}function x(_,y,R,T,C){let B=Math.cos(_),D=Math.sin(_),H=R/y*_,G=Math.cos(H);C.x=T*(2+G)*.5*B,C.y=T*(2+G)*D*.5,C.z=T*Math.sin(H)*.5}this.setIndex(o),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},kr=class i extends at{constructor(e=new oa(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new E,l=new E,c=new ie,h=new E,u=[],d=[],p=[],m=[];function v(g){h=e.getPointAt(g/t,h);let f=a.normals[g],x=a.binormals[g];for(let _=0;_<=r;_++){let y=_/r*Math.PI*2,R=Math.sin(y),T=-Math.cos(y);l.x=T*f.x+R*x.x,l.y=T*f.y+R*x.y,l.z=T*f.z+R*x.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let g=0;g<t;g++)v(g);v(s===!1?t:0),(function(){for(let g=0;g<=t;g++)for(let f=0;f<=r;f++)c.x=g/t,c.y=f/r,p.push(c.x,c.y)})(),(function(){for(let g=1;g<=t;g++)for(let f=1;f<=r;f++){let x=(r+1)*(g-1)+(f-1),_=(r+1)*g+(f-1),y=(r+1)*g+f,R=(r+1)*(g-1)+f;m.push(x,_,R),m.push(_,y,R)}})()})(),this.setIndex(m),this.setAttribute("position",new Pe(u,3)),this.setAttribute("normal",new Pe(d,3)),this.setAttribute("uv",new Pe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new ca[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Ul=class extends at{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new E,s=new E;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,m=d+u.count;p<m;p+=3)for(let v=0;v<3;v++){let g=o.getX(p+v),f=o.getX(p+(v+1)%3);r.fromBufferAttribute(a,g),s.fromBufferAttribute(a,f),Nh(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Nh(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Pe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Nh(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n),t.add(r),!0)}var eg=Object.freeze({__proto__:null,BoxGeometry:Me,CapsuleGeometry:bl,CircleGeometry:gn,ConeGeometry:Or,CylinderGeometry:mt,DodecahedronGeometry:El,EdgesGeometry:Tl,ExtrudeGeometry:Rl,IcosahedronGeometry:Hr,LatheGeometry:Ki,OctahedronGeometry:Cl,PlaneGeometry:Nt,PolyhedronGeometry:hi,RingGeometry:Gr,ShapeGeometry:Pl,SphereGeometry:ot,TetrahedronGeometry:Il,TorusGeometry:Cn,TorusKnotGeometry:Ll,TubeGeometry:kr,WireframeGeometry:Ul});var it=class extends Wn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ps(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function vm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var $i=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Dl=class extends $i{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nc,endingEnd:Nc}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Oc:s=e,o=2*t-n;break;case Bc:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Oc:a=e,l=2*n-t;break;case Bc:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-t)/(r-t),v=m*m,g=v*m,f=-d*g+2*d*v-d*m,x=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*m+1,_=(-1-p)*g+(1.5+p)*v+.5*m,y=p*g-p*v;for(let R=0;R!==o;++R)s[R]=f*a[h+R]+x*a[c+R]+_*a[l+R]+y*a[u+R];return s}},Nl=class extends $i{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Ol=class extends $i{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},an=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ps(t,this.TimeBufferType),this.values=Ps(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ps(e.times,Array),values:Ps(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Bs:t=this.InterpolantFactoryMethodDiscrete;break;case Ko:t=this.InterpolantFactoryMethodLinear;break;case Fa:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bs;case this.InterpolantFactoryMethodLinear:return Ko;case this.InterpolantFactoryMethodSmooth:return Fa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&vm(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Fa,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let m=t[h+p];if(m!==t[u+p]||m!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};an.prototype.TimeBufferType=Float32Array,an.prototype.ValueBufferType=Float32Array,an.prototype.DefaultInterpolation=Ko;var oi=class extends an{constructor(e,t,n){super(e,t,n)}};oi.prototype.ValueTypeName="bool",oi.prototype.ValueBufferType=Array,oi.prototype.DefaultInterpolation=Bs,oi.prototype.InterpolantFactoryMethodLinear=void 0,oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends an{};Bl.prototype.ValueTypeName="color";var Fl=class extends an{};Fl.prototype.ValueTypeName="number";var zl=class extends $i{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)Xt.slerpFlat(s,0,a,c-o,a,c,l);return s}},ua=class extends an{InterpolantFactoryMethodLinear(e){return new zl(this.times,this.values,this.getValueSize(),e)}};ua.prototype.ValueTypeName="quaternion",ua.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends an{constructor(e,t,n){super(e,t,n)}};li.prototype.ValueTypeName="string",li.prototype.ValueBufferType=Array,li.prototype.DefaultInterpolation=Bs,li.prototype.InterpolantFactoryMethodLinear=void 0,li.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends an{};Hl.prototype.ValueTypeName="vector";var Gl=class{constructor(e,t,n){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},_m=new Gl,kl=class{constructor(e){this.manager=e!==void 0?e:_m,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(r,s){n.load(e,r,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};kl.DEFAULT_MATERIAL_NAME="__DEFAULT";var da=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},pa=class extends da{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},_o=new we,Oh=new E,Bh=new E,Vl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zi,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Oh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oh),Bh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bh),t.updateMatrixWorld(),_o.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_o),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var tg=new we,ng=new E,ig=new E;var Wl=class extends Vl{constructor(){super(new Zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ma=class extends da{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Wl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var rg=new we,sg=new we,ag=new we;var og=new E,lg=new Xt,cg=new E,hg=new E;var ug=new E,dg=new Xt,pg=new E,mg=new E;var nc="\\[\\]\\.:\\/",xm=new RegExp("["+nc+"]","g"),xo="[^"+nc+"]",ym="[^"+nc.replace("\\.","")+"]",Mm=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",xo)+/(WCOD+)?/.source.replace("WCOD",ym)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xo)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xo)+"$"),Sm=["material","materials","bones","map"],Je=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xm,"")}static parseTrackName(e){let t=Mm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Sm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Je.Composite=class{constructor(i,e,t){let n=t||Je.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray],Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fg=new Float32Array(1);var gg=new we;var vg=new ie;var _g=new E,xg=new E;var yg=new E;var Mg=new E,Sg=new we,bg=new we;var Eg=new E,Tg=new Te,wg=new Te;var Ag=new E,Rg=new E,Cg=new E;var Pg=new E,Ig=new Ir;var Lg=new on;var Ug=new E;typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var Jt=[-2.5,0,2.5],Em=-125,jn=14,yu=13,Tm=34,wm=.22,Am=-34,Rm=11.5,Mu=.75,Cm='"Noto Sans TC","Noto Sans CJK TC","PingFang TC","Microsoft JhengHei",sans-serif',Su=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&innerWidth<900,Tt=(i,e)=>i+Math.random()*(e-i),fi=i=>i[Math.random()*i.length|0],Aa=document.getElementById("game"),Ra=new $s({canvas:Aa,antialias:!Su,powerPreference:"high-performance"});Ra.setPixelRatio(Math.min(window.devicePixelRatio||1,Su?1.5:2));Ra.outputColorSpace=Rt;var ct=new ea,Pm=14085367;ct.fog=new Qs(Pm,55,135);ct.background=(()=>{let i=document.createElement("canvas");i.width=4,i.height=256;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"#5fb2ec"),t.addColorStop(.55,"#a9d8f5"),t.addColorStop(1,"#d6ecf7"),e.fillStyle=t,e.fillRect(0,0,4,256);let n=new Ji(i);return n.colorSpace=Rt,n})();var Zt=new Ct(60,1,.1,200);ct.add(new pa(16777215,8228714,1.6));var bu=new ma(16774368,1.6);bu.position.set(6,12,5);ct.add(bu);var ic={};function _e(i,e){let t=i+JSON.stringify(e||{});return ic[t]||(ic[t]=new it(Object.assign({color:i},e||{}))),ic[t]}function se(i,e,t=0,n=0,r=0,s){let a=new xt(i,e);return a.position.set(t,n,r),s&&s.add(a),a}function ar(i,e,t,n,r,s={}){let a=document.createElement("canvas");a.width=e,a.height=t;let o=new Ji(a);return o.colorSpace=Rt,o.anisotropy=4,o.userData.draw=(l,c=n,h=r)=>{let u=a.getContext("2d");u.fillStyle=c,u.fillRect(0,0,e,t),s.border&&(u.strokeStyle=s.border,u.lineWidth=t*.08,u.strokeRect(t*.04,t*.04,e-t*.08,t-t*.08)),u.fillStyle=h,u.textAlign="center",u.textBaseline="middle";let d=l.length;l.forEach((p,m)=>{let v=(s.size||.62)*t/d;u.font=`900 ${v}px ${Cm}`,u.fillText(p,e/2,t*(m+.5)/d,e*.92)}),o.needsUpdate=!0},o.userData.draw(i),o}var De=new yt;function Ca(i,e,t,n=1,r=1){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let a=new Ji(s);return a.colorSpace=Rt,a.wrapS=a.wrapT=wr,a.repeat.set(n,r),a.anisotropy=8,a}var qn=300,or=-qn/2+20,Eu=Ca(256,256,(i,e,t)=>{i.fillStyle="#5b5f66",i.fillRect(0,0,e,t);for(let n=0;n<400;n++)i.fillStyle=`rgba(${Math.random()<.5?"255,255,255":"0,0,0"},0.06)`,i.fillRect(Math.random()*e,Math.random()*t,3,3);i.fillStyle="#f2f2f2",[e/3,2*e/3].forEach(n=>{i.fillRect(n-3,0,6,t*.5)}),i.fillStyle="#f5c242",i.fillRect(4,0,6,t),i.fillRect(e-10,0,6,t)},1,qn/8),Im=se(new Nt(7.6,qn),new it({map:Eu}),0,.01,or,ct);Im.rotation.x=-Math.PI/2;var gc=Ca(64,64,(i,e,t)=>{i.fillStyle="#d8c7a8",i.fillRect(0,0,e,t),i.strokeStyle="#b9a688",i.lineWidth=2;for(let n=0;n<=2;n++)i.beginPath(),i.moveTo(0,n*32),i.lineTo(e,n*32),i.stroke(),i.beginPath(),i.moveTo(n*32,0),i.lineTo(n*32,t),i.stroke()},4,qn/2),Lm=se(new Nt(4.5,qn),new it({map:gc}),6.2,.06,or,ct);Lm.rotation.x=-Math.PI/2;var Um=se(new Nt(4.5,qn),new it({map:gc}),-6.2,.06,or,ct);Um.rotation.x=-Math.PI/2;var Dm=se(new Nt(120,qn),_e(8368986),0,-.01,or,ct);Dm.rotation.x=-Math.PI/2;var Tu=new Me(.25,.18,qn);se(Tu,_e(15328474),3.92,.09,or,ct);se(Tu,_e(15328474),-3.92,.09,or,ct);var Nm=[[Eu,8],[gc,2]],Mt=0,ut=[];function wu(i){for(;!ut.length||ut[ut.length-1].d1<i;){let e=ut[ut.length-1];if(!e){ut.push({d0:-60,d1:45,x0:Jt[0],x1:Jt[0],lane:0});continue}if(e.x0!==e.x1||Math.random()<.12||j.mode==="home"){let t=j.mode==="home"?30:Tt(18,40);ut.push({d0:e.d1,d1:e.d1+t,x0:e.x1,x1:e.x1,lane:e.lane})}else{let t=e.lane+(Math.random()<.5?-1:1);(t<0||t>2)&&(t=1);let n=Tt(16,22);ut.push({d0:e.d1,d1:e.d1+n,x0:e.x1,x1:Jt[t],lane:t})}}for(;ut.length>2&&ut[1].d1<Mt-40;)ut.shift()}function Om(i){for(;ut.length>1&&ut[ut.length-1].d0>i;)ut.pop();let e=ut[ut.length-1];e.x0===e.x1&&e.d1>i&&(e.d1=i)}function vn(i){for(let e of ut)if(i<=e.d1){if(i<e.d0)return e.x0;let t=(i-e.d0)/(e.d1-e.d0);return e.x0+(e.x1-e.x0)*t*t*(3-2*t)}return ut[ut.length-1].x1}var ba=1.2,Pa=125,ac=new Ht(new Me(2.1,.06,ba+.05),_e(10260348),Pa),oc=new Ht(new Me(1.85,.08,.3),_e(5914672),Pa),Sa=new Ht(new Me(.12,.14,ba+.06),new it({color:14673130,emissive:5592405}),Pa*2);[ac,oc,Sa].forEach(i=>{i.frustumCulled=!1,ct.add(i)});function Bm(){wu(Mt+170);let i=Math.floor((Mt-14)/ba);for(let e=0;e<Pa;e++){let t=(i+e)*ba,n=Mt-t,r=vn(t),s=-Math.atan2(vn(t+.6)-vn(t-.6),1.2),a=Math.cos(s),o=-Math.sin(s);De.rotation.set(0,s,0),De.scale.set(1,1,1),De.position.set(r,.04,n),De.updateMatrix(),ac.setMatrixAt(e,De.matrix),De.position.set(r,.09,n),De.updateMatrix(),oc.setMatrixAt(e,De.matrix),De.position.set(r-.62*a,.16,n-.62*o),De.updateMatrix(),Sa.setMatrixAt(e*2,De.matrix),De.position.set(r+.62*a,.16,n+.62*o),De.updateMatrix(),Sa.setMatrixAt(e*2+1,De.matrix)}De.rotation.set(0,0,0),ac.instanceMatrix.needsUpdate=oc.instanceMatrix.needsUpdate=Sa.instanceMatrix.needsUpdate=!0}var pi=240,Fm=Ca(128,256,(i,e,t)=>{i.fillStyle="#ffffff",i.fillRect(0,0,e,t);for(let n=0;n<4;n++)for(let r=0;r<2;r++)i.fillStyle="#3d5a73",i.fillRect(14+r*60,16+n*60,40,38),i.fillStyle="rgba(255,255,255,.35)",i.fillRect(14+r*60,16+n*60,40,8);i.fillStyle="#d9d0c0",i.fillRect(0,t-6,e,6)}),zm=[15918022,15251872,13229032,16111482,14737624,12114096,15780297,14271139,10994905,16773590],Xr=44,nr=new Ht(new Me(1,1,1).translate(0,.5,0),new it({map:Fm}),Xr),Au=[],ir=new Ht(new Me(1,.35,1),_e(9067076),Xr);for(let i=0;i<Xr;i++){let t={side:i%2?1:-1,z:-(i>>1)*(pi/(Xr/2))+10};Ru(t),Au.push(t),nr.setColorAt(i,new Te(t.color)),ir.setColorAt(i,new Te(t.roof))}function Ru(i){i.w=Tt(5,9),i.h=Tt(5,14),i.dp=Tt(5,8),i.x=i.side<0?-9.2-i.dp/2+Tt(-.5,.5):9.2+i.dp/2+Tt(-.5,.5),i.color=fi(zm),i.roof=fi([9067076,6122878,10506797,7048794])}ct.add(nr,ir);var jr=36,lc=new Ht(new mt(.15,.2,1.6,6).translate(0,.8,0),_e(8016438),jr),Ea=new Ht(new Hr(1.1,0),new it({color:16777215,flatShading:!0}),jr),Cu=[];for(let i=0;i<jr;i++){let e=i%2?1:-1;Cu.push({x:e>0?7:-7,z:-(i>>1)*(pi/(jr/2))+4,s:Tt(.85,1.25)}),Ea.setColorAt(i,new Te(fi([4165434,5219146,3111482,5941818])))}ct.add(lc,Ea);var qr=10,cc=new Ht(new mt(.07,.09,4.2,6).translate(0,2.1,0),_e(4871520),qr),hc=new Ht(new Me(.9,.15,.3),_e(16774084,{emissive:6709056}),qr),Pu=[];for(let i=0;i<qr;i++)Pu.push({z:-i*(pi/qr)-9,s:i%2?1:-1});ct.add(cc,hc);var lu=["\u96DE\u8089\u98EF","\u706B\u96DE\u8089\u98EF","\u5609\u7FA9","\u65B9\u584A\u9165","\u6DBC\u9EB5","\u7802\u934B\u9B5A\u982D","\u8C46\u82B1","\u6728\u74DC\u725B\u5976","\u6587\u5316\u8DEF","\u9D5D\u8089","\u7CBF\u4ED4\u6E6F","\u5674\u6C34"],Hm=[["#c0392b","#fff"],["#f39c12","#fff"],["#2e86c1","#fff"],["#ffffff","#c0392b"],["#27ae60","#fff"],["#8e44ad","#fff"]],Iu=[];for(let i=0;i<10;i++){let e=fi(Hm),t=lu[i%lu.length],n=ar(t.split(""),64,64*t.length,e[0],e[1],{size:.8*t.length>3?.75:.8}),r=new xt(new Me(.25,.75*t.length,.9),[_e(3355443),_e(3355443),_e(3355443),_e(3355443),new it({map:n}),new it({map:n})]),s=i%2?1:-1;r.rotation.y=(s<0,0),r.rotation.y=Math.PI/2,r.userData={side:s,z:-i*24-6},r.position.set(s<0?-8.9:8.9,3.2+Tt(0,1.5),r.userData.z),ct.add(r),Iu.push(r)}function Lu(i){for(let e=0;e<Xr;e++){let t=Au[e];t.z+=i,t.z>jn+10&&(t.z-=pi,Ru(t),nr.setColorAt(e,new Te(t.color)),ir.setColorAt(e,new Te(t.roof)),nr.instanceColor.needsUpdate=!0,ir.instanceColor.needsUpdate=!0),De.position.set(t.x,0,t.z),De.scale.set(t.dp,t.h,t.w),De.rotation.set(0,0,0),De.updateMatrix(),nr.setMatrixAt(e,De.matrix),De.position.set(t.x,t.h+.17,t.z),De.scale.set(t.dp+.3,1,t.w+.3),De.updateMatrix(),ir.setMatrixAt(e,De.matrix)}nr.instanceMatrix.needsUpdate=ir.instanceMatrix.needsUpdate=!0;for(let e=0;e<jr;e++){let t=Cu[e];t.z+=i,t.z>jn&&(t.z-=pi),De.scale.set(t.s,t.s,t.s),De.position.set(t.x,0,t.z),De.updateMatrix(),lc.setMatrixAt(e,De.matrix),De.position.set(t.x,2.1*t.s,t.z),De.updateMatrix(),Ea.setMatrixAt(e,De.matrix)}lc.instanceMatrix.needsUpdate=Ea.instanceMatrix.needsUpdate=!0,De.scale.set(1,1,1);for(let e=0;e<qr;e++){let t=Pu[e];t.z+=i,t.z>jn&&(t.z-=pi),De.position.set(4.3*t.s,0,t.z),De.updateMatrix(),cc.setMatrixAt(e,De.matrix),De.position.set(3.95*t.s,4.2,t.z),De.updateMatrix(),hc.setMatrixAt(e,De.matrix)}cc.instanceMatrix.needsUpdate=hc.instanceMatrix.needsUpdate=!0;for(let e of Iu)e.position.z+=i,e.position.z>jn&&(e.position.z-=pi)}function Gm(){let i=new nt,e=new nt;i.add(e);let t=_e(16241334),n=new it({color:4860442,side:Qi}),r=_e(2450377),s=_e(1788569),a=_e(16183257),o=_e(2304058),l=_e(1710618),c=1,h=[];[-.15,.15].forEach(X=>{let Q=new nt;Q.position.set(X,.55,0),e.add(Q),se(new mt(.085,.075,.46,8),o,0,-.25,0,Q),se(new Me(.15,.09,.24),l,0,-.5,.04,Q),h.push(Q)});let u=new nt;u.position.y=.55,e.add(u),se(new mt(.27,.36,.58,16),r,0,.29,0,u),se(new ot(.36,16,10,0,Math.PI*2,Math.PI/2,Math.PI/2),r,0,.04,0,u).scale.set(1,.25,1),se(new mt(.365,.375,.08,16),s,0,.02,0,u),se(new mt(.12,.135,.1,14),a,0,.62,0,u);let d=se(new Me(.035,.32,.02),a,.09,.45,.3,u);d.rotation.z=-.9,d.rotation.x=-.12;let p=se(new Me(.03,.4,.02),a,.19,.22,.335,u);p.rotation.x=-.14,[.42,.3,.18].forEach((X,Q)=>se(new Me(.1,.03,.03),a,.19,X,.335-Q*.01,u));let m=[];[-1,1].forEach(X=>{let Q=new nt;Q.position.set(X*.33,.52,0),u.add(Q);let ae=se(new mt(.075,.095,.38,8),r,0,-.18,0,Q);se(new mt(.098,.098,.05,8),a,0,-.37,0,Q),se(new ot(.07,8,6),t,0,-.43,0,Q),Q.rotation.z=X*.18,m.push(Q)});let v=new nt;v.position.y=1.2,u.add(v),v.position.y=.66,se(new mt(.07,.08,.1,8),t,0,.03,0,v);let g=.38;se(new ot(.36,20,16),t,0,g,0,v).scale.set(1.06,.95,.95),se(new ot(.39,24,12,0,Math.PI*2,0,Math.PI*.4),n,0,g+.01,0,v).scale.set(1.03,1,1);let _=1.15;se(new ot(.405,24,14,Math.PI/2+_,Math.PI*2-_*2,.25,Math.PI*.6),n,0,g,0,v).scale.set(1.1,1,1.05);let R=se(new ot(.16,10,8),n,-.13,g+.2,.27,v);R.scale.set(1.5,.55,.6),R.rotation.z=-.35;let T=_e(2759186),C=_e(16777215,{emissive:8947848});[-.12,.12].forEach(X=>{se(new ot(.048,10,8),T,X,g-.02,.325,v).scale.set(.9,1.15,.5),se(new ot(.015,6,4),C,X+.015,g+.005,.348,v);let ae=se(new Me(.075,.011,.01),_e(7028784),X,g+.085,.335,v);ae.rotation.z=X<0?-.12:.12});let B=se(new Cn(.065,.016,6,14,Math.PI),_e(12597547),0,g-.12,.315,v),D=_e(2825494),H=new zt({color:10475263,transparent:!0,opacity:.6,depthWrite:!1,side:Qi}),G=.372,F=g-.015,Y=.082;[-.125,.125].forEach((X,Q)=>{if(se(new Cn(Y,.014,6,24),D,X,F,G,v),Q===0)se(new gn(Y-.004,24),H,X,F,G,v);else{se(new gn(Y-.004,24,2,Math.PI*2-2),H,X,F,G,v);let ae=_e(3355443);[[.3,.07],[1.2,.06],[-.6,.065],[2.9,.05]].forEach(([ce,ge])=>{let te=se(new Me(ge,.006,.004),ae,X+Math.cos(ce)*ge/2-.01,F+Math.sin(ce)*ge/2-.005,G+.004,v);te.rotation.z=ce})}}),se(new Me(.08,.014,.014),D,0,F+.02,G,v),[-1,1].forEach(X=>{let Q=se(new Me(.014,.014,.3),D,X*.24,F+.01,.23,v);Q.rotation.y=X*.45}),B.rotation.z=Math.PI;let k=new zt({color:16748442,transparent:!0,opacity:.55,depthWrite:!1});[-.22,.22].forEach(X=>{let Q=se(new gn(.062,14),k,X*1.05,g-.09,.29,v);Q.rotation.y=X*2.2,Q.scale.set(1.15,.9,1)}),[-1,1].forEach(X=>se(new ot(.025,6,4),_e(16777215),X*.35,g-.13,.03,v));let Z=se(new gn(.45,16),new zt({color:0,transparent:!0,opacity:.28,depthWrite:!1}),0,.03,0);return Z.rotation.x=-Math.PI/2,i.scale.setScalar(c),{root:i,pose:e,legs:h,arms:m,torso:u,head:v,shadow:Z}}var In=Gm();ct.add(In.root,In.shadow);var Ln=4.6,Uu=.25,uc=3,Pn=.9,dc=Pn+uc*Ln+(uc-1)*Uu,xa=_e(16250866),cu=_e(2001498),hu=_e(15964702),ya=_e(3357248),km=_e(1911352,{emissive:659480}),Vm=_e(16777164,{emissive:16774048}),Wm=ar(["\u5609\u7FA9\u806F\u5916\u8ECC\u9053"],384,64,"#111","#ffb020",{size:.8}),Xm=new zt({color:12576511,transparent:!0,opacity:.18,depthWrite:!1}),jm=ar(["\u5F35\u5553\u6977"],192,60,"#ffffff","#1e5fb4",{size:.85,border:"#1e5fb4"}),Pt={torso:new mt(.17,.22,.45,12),vest:new mt(.185,.235,.43,12,1,!1,.55,Math.PI*2-1.1),head:new ot(.29,16,12),hair:new ot(.305,16,8,0,Math.PI*2,0,Math.PI*.36),swoop:new Me(.34,.07,.2),arm:new mt(.055,.065,.3,8).translate(0,-.15,0),hand:new ot(.06,8,6),frame:new Me(.15,.1,.012),lens:new Me(.115,.068,.012),bridge:new Me(.06,.018,.012),eye:new ot(.022,6,5),smile:new Cn(.06,.014,6,12,Math.PI),collar:new Me(.12,.2,.02)},It={skin:_e(15977381),shirt:_e(16645629),vest:new it({color:1776415,side:Qi}),hair:_e(1118481),frame:_e(1118481),lens:_e(15398655,{emissive:5595238}),eye:_e(1118481),smile:_e(11549230)};function qm(){let i=new nt;se(Pt.torso,It.shirt,0,.22,0,i),se(Pt.vest,It.vest,0,.21,0,i),se(Pt.collar,It.shirt,0,.33,.2,i);let e=.72;se(Pt.head,It.skin,0,e,0,i).scale.set(1,.95,.95),se(Pt.hair,It.hair,0,e+.02,-.01,i);let t=se(Pt.swoop,It.hair,.07,e+.21,.19,i);t.rotation.z=-.25,t.rotation.x=-.5,[-.105,.105].forEach(a=>{se(Pt.frame,It.frame,a,e+.01,.285,i),se(Pt.lens,It.lens,a,e+.01,.29,i),se(Pt.eye,It.eye,a,e+.005,.297,i).scale.set(1,1,.3)}),se(Pt.bridge,It.frame,0,e+.03,.287,i);let n=se(Pt.smile,It.smile,0,e-.1,.27,i);n.rotation.z=Math.PI;let r=new nt;r.position.set(.21,.4,0),i.add(r),se(Pt.arm,It.shirt,0,0,0,r),se(Pt.hand,It.skin,0,-.32,0,r);let s=new nt;return s.position.set(-.21,.4,0),i.add(s),se(Pt.arm,It.shirt,0,0,0,s),se(Pt.hand,It.skin,0,-.32,0,s),s.rotation.z=-.25,i.userData.arm=r,i}function rc(i,e){let t=new nt;if(se(new Me(2.3,2.6,Ln),xa,0,1.75,0,t),se(new Me(2.34,.42,Ln+.02),cu,0,.62,0,t),se(new Me(2.34,.12,Ln+.02),hu,0,.9,0,t),se(new Me(2.36,.9,Ln-.9),km,0,2.1,0,t),se(new Me(2,.32,Ln-.4),ya,0,.26,0,t),i){let n=Ln/2,r=n+Pn/2,s=n+Pn;se(new Me(2.3,1.05,Pn),xa,0,.975,r,t),se(new Me(2.3,.3,Pn),xa,0,2.9,r,t),[-1.075,1.075].forEach(o=>se(new Me(.15,1.25,Pn),xa,o,2.125,r,t)),se(new Nt(2,1.25),_e(5595243),0,2.125,n+.02,t),se(new Me(2.32,.42,Pn+.02),cu,0,.62,r,t),se(new Me(2.32,.12,Pn+.02),hu,0,.9,r,t),se(new Nt(2,1.25),Xm,0,2.125,s-.02,t),[-.8,.8].forEach(o=>se(new Me(.36,.2,.06),Vm,o,1.15,s+.02,t)),se(new Nt(2,.26),new zt({map:Wm}),0,2.9,s+.01,t),se(new Nt(1.1,.34),new zt({map:jm}),0,1.22,s+.01,t);let a=qm();a.position.set(0,1.28,n+.4),a.scale.setScalar(1.25),t.add(a),t.userData.zhang=a}if(e){se(new Me(1.2,.2,2.6),ya,0,3.15,0,t);let n=se(new Me(.06,1.1,.06),ya,0,3.7,0,t);n.rotation.x=.6,se(new Me(1.4,.06,.1),ya,0,4.15,-.3,t)}return t.visible=!1,ct.add(t),t}var Yr=[];for(let i=0;i<4;i++){let e=[rc(!0,!1),rc(!1,!0),rc(!1,!1)];Yr.push({cars:e,zhang:e[0].userData.zhang,on:!1,d:0,vz:0,ph:Math.random()*6})}function uu(i,e){if(Yr.some(n=>n.on&&Math.abs(n.d-i)<dc+25))return null;let t=Yr.find(n=>!n.on);return t?(t.on=!0,t.d=i,t.vz=e,t.cars.forEach(n=>n.visible=!0),Du(t),t):null}function Du(i){for(let e=0;e<uc;e++){let t=i.d+Pn+Ln/2+e*(Ln+Uu),n=i.cars[e];n.position.set(vn(t),.1,Mt-t),n.rotation.y=Math.atan2(-(vn(t+.8)-vn(t-.8))/1.6,1)}}function Ym(){Yr.forEach(i=>{i.on=!1,i.cars.forEach(e=>e.visible=!1)})}function Zm(){let i=new nt;return se(new Or(.32,.8,10),_e(16738835),0,.45,0,i),se(new mt(.2,.25,.12,10),_e(16777215),0,.42,0,i),se(new Me(.75,.06,.75),_e(16738835),0,.03,0,i),i}var Jm=Ca(256,64,(i,e,t)=>{i.fillStyle="#fff",i.fillRect(0,0,e,t),i.fillStyle="#e03131";for(let n=-64;n<e+64;n+=64)i.beginPath(),i.moveTo(n,t),i.lineTo(n+32,t),i.lineTo(n+64,0),i.lineTo(n+32,0),i.fill()}),du=ar(["\u9053\u8DEF\u65BD\u5DE5"],256,64,"#e03131","#ffffff",{size:.75});function Km(){let i=new nt,e=new it({map:Jm});se(new Me(1.9,.32,.12),e,0,.82,0,i),se(new Me(1.9,.28,.1),[_e(14692657),_e(14692657),_e(14692657),_e(14692657),new it({map:du}),new it({map:du})],0,.45,0,i),[-.85,.85].forEach(n=>{se(new Me(.08,1,.08),_e(14540253),n,.5,0,i),se(new Me(.1,.06,.6),_e(5592405),n,.03,0,i)});let t=se(new ot(.08,8,6),_e(16756736,{emissive:16752640}),.7,1.05,0,i);return i.userData.blink=t,i}var pu=ar(["\u806F\u5916\u8ECC\u9053\u8DEF\u53E3","\u8ACB\u6CE8\u610F"],512,160,"#1e8a5a","#ffffff",{size:.72,border:"#ffffff"});function $m(){let i=new nt,e=_e(9081756);return[-1.05,1.05].forEach(t=>se(new Me(.12,2.4,.12),e,t,1.2,0,i)),se(new Me(2.25,.7,.14),[e,e,e,e,new it({map:pu}),new it({map:pu})],0,1.85,0,i),se(new Me(2.25,.1,.1),_e(16106050),0,1.45,0,i),i}var Qm=(()=>{let i=[];for(let e=0;e<=70;e++){let t=e/70*Math.PI*2*1.75,n=.1+e/70*.36;i.push(new E(Math.cos(t)*n,.09+Math.sin(e*.9)*.012,Math.sin(t)*n))}return new kr(new Dr(i),90,.075,8,!1)})(),ef=_e(14256760,{emissive:3807762}),mu=_e(12085850),tf=new it({color:10254894,transparent:!0,opacity:.55,depthWrite:!1}),nf=new zt({color:16777215,transparent:!0,opacity:.35,depthWrite:!1}),rf=ar(["\u8C6C\u5927\u8178"],192,64,"#ffffff","#b2452f",{size:.8,border:"#b2452f"});function sf(){let i=new nt,e=new nt;e.scale.set(1.3,1.5,1.3),i.add(e);let t=se(new gn(.72,20),tf,0,.035,0,e);t.rotation.x=-Math.PI/2,t.scale.set(1.15,.9,1);let n=se(new gn(.16,12),nf,-.32,.04,.22,e);n.rotation.x=-Math.PI/2,n.scale.set(1.8,.6,1),se(Qm,ef,0,0,0,e),se(new ot(.085,8,6),mu,.46,.09,-.02,e),se(new ot(.08,8,6),mu,.1,.09,0,e);let r=new na(new Lr({map:rf,transparent:!0,depthWrite:!1}));return r.scale.set(1.4,.47,1),r.position.y=1,i.add(r),i.userData.label=r,i}var Wr={cone:{make:Zm,hx:.36,hz:.36,y0:0,y1:.85,n:10},barrier:{make:Km,hx:.95,hz:.2,y0:0,y1:1,n:8},overhead:{make:$m,hx:1.05,hz:.15,y0:1.2,y1:3,n:8},intestine:{make:sf,hx:.6,hz:.55,y0:0,y1:.35,n:8}},pc={},gi=[];for(let i in Wr){pc[i]=[];for(let e=0;e<Wr[i].n;e++){let t=Wr[i].make();t.visible=!1,t.userData.kind=i,ct.add(t),pc[i].push(t)}}function af(i,e,t,n={}){var s;let r=pc[i].find(a=>!a.visible);return r?(r.visible=!0,r.position.set(Jt[(s=n.fromLane)!=null?s:e],0,t),r.rotation.set(0,0,0),Object.assign(r.userData,{lane:e,vz:0,fromLane:null,targetLane:e,cut:!1},n),gi.push(r),r):null}var vc=160,of=new mt(.34,.34,.08,18).rotateX(Math.PI/2),Ta=new Ht(of,new it({color:16762910,emissive:8016384}),vc);Ta.frustumCulled=!1;var Ia=[];for(let i=0;i<vc;i++)Ia.push({on:!1,x:0,y:0,z:0});ct.add(Ta);function Nu(i,e,t){let n=Ia.find(r=>!r.on);n&&(n.on=!0,n.x=i,n.y=e,n.z=t)}function lf(){let i=new nt,e=[];for(let a=0;a<=8;a++){let o=a/8*Math.PI/2;e.push(new ie(.12+Math.sin(o)*.32,-Math.cos(o)*.3+.3))}let t=new xt(new Ki(e,16),new it({color:16777215,side:Qi}));i.add(t),se(new Cn(.44,.03,6,20),_e(3108804),0,.3,0,i).rotation.x=Math.PI/2,se(new Cn(.33,.02,6,20),_e(3108804),0,.15,0,i).rotation.x=Math.PI/2;let n=se(new ot(.42,14,8,0,Math.PI*2,0,Math.PI/2),_e(16776693),0,.22,0,i);n.scale.y=.45;let r=_e(15909997);for(let a=0;a<9;a++){let o=se(new Me(.22,.04,.05),r,Tt(-.2,.2),.38,Tt(-.2,.2),i);o.rotation.y=Tt(0,3)}se(new Me(.16,.03,.12),_e(16769126),.1,.41,.05,i);let s=se(new Gr(.55,.7,20),new zt({color:16769126,transparent:!0,opacity:.6,side:Qi}),0,.2,0,i);return i.userData.glow=s,i.visible=!1,i.userData.on=!1,ct.add(i),i}var _c=Array.from({length:5},lf);function cf(i,e,t){let n=_c.find(r=>!r.userData.on);n&&(n.userData.on=!0,n.visible=!0,n.position.set(i,e,t))}var tr=null,rr=localStorage.getItem("mayorRunMuted")==="1";function Ou(){if(!tr)try{tr=new(window.AudioContext||window.webkitAudioContext)}catch{}return tr&&tr.state==="suspended"&&tr.resume(),tr}function Gt(i,e,t="square",n=.08,r=0){if(rr)return;let s=Ou();if(!s)return;let a=s.createOscillator(),o=s.createGain();a.type=t,a.frequency.setValueAtTime(i,s.currentTime),r&&a.frequency.exponentialRampToValueAtTime(Math.max(40,i+r),s.currentTime+e),o.gain.setValueAtTime(n,s.currentTime),o.gain.exponentialRampToValueAtTime(1e-4,s.currentTime+e),a.connect(o).connect(s.destination),a.start(),a.stop(s.currentTime+e)}var cn={coin(){Gt(988,.07,"square",.05),setTimeout(()=>Gt(1319,.12,"square",.05),60)},bowl(){[523,659,784,1047].forEach((i,e)=>setTimeout(()=>Gt(i,.12,"triangle",.09),e*70))},jump(){Gt(330,.18,"triangle",.1,400)},slide(){Gt(500,.2,"sawtooth",.04,-350)},lane(){Gt(660,.05,"sine",.05)},slip(){Gt(900,.35,"sine",.09,-700),setTimeout(()=>Gt(160,.4,"square",.08,-60),300)},crash(){Gt(200,.5,"sawtooth",.15,-160),Gt(90,.6,"square",.1,-40)},bell(){Gt(1568,.22,"sine",.07),setTimeout(()=>Gt(1568,.22,"sine",.07),260),setTimeout(()=>Gt(1568,.22,"sine",.07),520)}},Ye=i=>document.getElementById(i),lt={hud:Ye("hud"),score:Ye("score"),dist:Ye("dist"),coins:Ye("coins"),start:Ye("startScreen"),pause:Ye("pauseScreen"),over:Ye("overScreen"),warn:Ye("warn"),foot:Ye("foot")},Bu="mayorRunBest",sr=+localStorage.getItem(Bu)||0;Ye("bestStart").textContent="\u6700\u9AD8\u5206\uFF1A"+sr;function Fu(){Ye("muteBtn").classList.toggle("off",rr)}Fu();Ye("muteBtn").onclick=i=>{i.stopPropagation(),rr=!rr,localStorage.setItem("mayorRunMuted",rr?"1":"0"),Fu(),rr||cn.coin()};Ye("pauseBtn").onclick=i=>{i.stopPropagation(),La()};Ye("startBtn").onclick=()=>{Ou(),wa()};Ye("restartBtn").onclick=()=>wa();Ye("resumeBtn").onclick=()=>La();Ye("homeBtn").onclick=Ye("home2Btn").onclick=()=>uf();function hf(i,e){let t=document.createElement("div");t.className="popup",t.textContent=i,e&&(t.style.color=e),t.style.left="50%",t.style.top="55%",t.style.transform="translate(-50%,0)",document.body.appendChild(t),requestAnimationFrame(()=>{t.style.transform="translate(-50%,-90px)",t.style.opacity="0"}),setTimeout(()=>t.remove(),950)}var j={mode:"home",speed:yu,dist:0,coins:0,bonus:0,lane:1,x:0,y:0,vy:0,slide:0,runT:0,spawnAcc:0,crashT:0,time:0,lastTramLane:-1};function zu(){for(let i of gi)i.visible=!1;gi.length=0,Ia.forEach(i=>i.on=!1),_c.forEach(i=>{i.userData.on=!1,i.visible=!1}),Ym()}function Hu(){Object.assign(j,{speed:yu,dist:0,coins:0,bonus:0,lane:1,x:0,y:0,vy:0,slide:0,spawnAcc:0,crashT:0,time:0}),In.pose.rotation.set(0,0,0),In.pose.position.set(0,0,0),j.crashKind=null,j.slipZ=0,In.root.rotation.set(0,j.mode==="home"?.35:Math.PI,0),In.root.position.z=0,In.arms[0].rotation.set(0,0,-.18),In.arms[1].rotation.set(0,0,.18)}function wa(){zu(),Hu(),j.mode="play",lt.start.classList.add("hidden"),lt.over.classList.add("hidden"),lt.pause.classList.add("hidden"),lt.foot.classList.add("hidden"),lt.hud.classList.remove("hidden"),Om(Mt+55),wu(Mt+170);for(let i=0;i<8;i++)Nu(Jt[1],1,-16-i*2.4);j.spawnAcc=0,j.nextGap=30,j.trainAcc=0,j.trainGap=25,mc(-60),mc(-90),ku()}function uf(){zu(),Hu(),j.mode="home",lt.over.classList.add("hidden"),lt.pause.classList.add("hidden"),lt.hud.classList.add("hidden"),lt.warn.classList.add("hidden"),lt.start.classList.remove("hidden"),lt.foot.classList.remove("hidden"),Ye("bestStart").textContent="\u6700\u9AD8\u5206\uFF1A"+sr}function La(){j.mode==="play"?(j.mode="pause",lt.pause.classList.remove("hidden")):j.mode==="pause"&&(j.mode="play",lt.pause.classList.add("hidden"),fc=performance.now())}function Gu(){return Math.floor(j.dist)+j.coins*10+j.bonus}function ku(){lt.score.textContent=Gu(),lt.dist.textContent=Math.floor(j.dist),lt.coins.textContent=j.coins}function fu(i){if(j.mode="crash",j.crashT=0,j.crashKind=i,j.slipZ=0,i==="slip"?cn.slip():cn.crash(),lt.warn.classList.add("hidden"),navigator.vibrate)try{navigator.vibrate(120)}catch{}setTimeout(()=>{let e=Gu(),t=e>sr;t&&(sr=e,localStorage.setItem(Bu,sr)),Ye("oScore").textContent=e,Ye("oDist").textContent=Math.floor(j.dist)+" \u516C\u5C3A",Ye("oCoins").textContent=j.coins,Ye("oBest").textContent=sr,Ye("newBest").classList.toggle("hidden",!t),Ye("overTitle").textContent=i==="slip"?"\u8E29\u5230\u8C6C\u5927\u8178\u6ED1\u5012\u4E86\uFF01":"\u54CE\u5440\uFF01\u649E\u5230\u4E86",lt.over.classList.remove("hidden"),lt.hud.classList.add("hidden"),j.mode="over"},900)}function mi(i){j.mode==="play"&&(i==="left"&&j.lane>0?(j.lane--,cn.lane()):i==="right"&&j.lane<2?(j.lane++,cn.lane()):i==="jump"&&j.y<=.001?(j.vy=Rm,j.slide=0,cn.jump()):i==="down"&&(j.y>.001?(j.vy=-22,j.queueSlide=!0):(j.slide=Mu,cn.slide())))}addEventListener("keydown",i=>{let e=i.key;["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e)&&i.preventDefault(),e==="ArrowLeft"||e==="a"||e==="A"?mi("left"):e==="ArrowRight"||e==="d"||e==="D"?mi("right"):e==="ArrowUp"||e==="w"||e==="W"||e===" "?j.mode==="home"||j.mode==="over"?e===" "&&wa():mi("jump"):e==="ArrowDown"||e==="s"||e==="S"?mi("down"):e==="p"||e==="P"||e==="Escape"?La():e==="Enter"&&(j.mode==="home"||j.mode==="over")&&wa()});var Yt=null;Aa.addEventListener("touchstart",i=>{let e=i.changedTouches[0];Yt={x:e.clientX,y:e.clientY,done:!1}},{passive:!0});Aa.addEventListener("touchmove",i=>{if(!Yt||Yt.done)return;let e=i.changedTouches[0],t=e.clientX-Yt.x,n=e.clientY-Yt.y;Math.max(Math.abs(t),Math.abs(n))>28&&(Yt.done=!0,Vu(t,n))},{passive:!0});Aa.addEventListener("touchend",i=>{if(!Yt||Yt.done){Yt=null;return}let e=i.changedTouches[0],t=e.clientX-Yt.x,n=e.clientY-Yt.y;Math.max(Math.abs(t),Math.abs(n))>18?Vu(t,n):mi("jump"),Yt=null},{passive:!0});function Vu(i,e){Math.abs(i)>Math.abs(e)?mi(i>0?"right":"left"):mi(e<0?"jump":"down")}document.addEventListener("visibilitychange",()=>{document.hidden&&j.mode==="play"&&La()});function gu(i,e,t){for(let n=e;n<=t;n+=2)if(Math.abs(Jt[i]-vn(n))<1.75)return!1;return!0}function mc(i){let e=Math.min(1,j.dist/1500),t=Mt-i,n=[0,1,2].filter(o=>gu(o,t-8,t+8)).sort(()=>Math.random()-.5),r=Math.random()<.3+e*.35?2:Math.random()<.85?1:0;for(let o=0;o<r&&o<n.length;o++)af(fi(["cone","barrier","overhead","barrier","intestine","intestine"]),n[o],i);let s=[0,1,2].filter(o=>gu(o,t-9,t+16)),a=s.length?fi(s):fi([0,1,2]);if(Math.random()<.92){let o=6+(Math.random()*5|0),l=Math.random()<.2?Math.random()*o|0:-1;for(let c=0;c<o;c++){let h=i+9-c*2.4;if(Math.abs(Jt[a]-vn(Mt-h))<1.75)continue;let u=1;for(let d of gi){if(d.userData.lane!==a)continue;let p=d.userData.kind,m=Math.abs(h-d.position.z);(p==="barrier"||p==="cone"||p==="intestine")&&m<4?u=Math.max(u,1+1.1*Math.cos(m/4*Math.PI/2)):p==="overhead"&&m<2.5&&(u=.55)}c===l?cf(Jt[a],u-.2,h):Nu(Jt[a],u,h)}}}var df=()=>5+Math.min(1,j.dist/1500)*7,vu=new we,_u=new Xt,xu=new jt,di=new E,sc=new E(1,1,1),Ma=!1;function pf(i){let e=j.time+=i,t=j.mode==="play",n=j.mode==="home",r=t?j.speed:n?6:j.mode==="crash"?Math.max(0,j.speed*(1-j.crashT*3)):0;t&&(j.speed=Math.min(Tm,j.speed+wm*i*(j.speed<22?1:.6))),j.mode==="crash"&&(j.crashT+=i);let s=r*i;t&&(j.dist+=s);for(let[m,v]of Nm)m.offset.y=(m.offset.y+s/v)%1;if(Mt+=s,Lu(s),Bm(),t){let m=Jt[j.lane];j.x+=(m-j.x)*Math.min(1,i*14),(j.y>0||j.vy>0)&&(j.vy+=Am*i,j.y+=j.vy*i,j.y<=0&&(j.y=0,j.vy=0,j.queueSlide&&(j.queueSlide=!1,j.slide=Mu,cn.slide()))),j.slide>0&&(j.slide-=i)}let a=In;if(a.root.position.set(j.x,j.y,(j.mode==="crash"||j.mode==="over")&&j.crashKind==="slip"?j.slipZ:0),a.shadow.position.set(j.x,.04,a.root.position.z),a.shadow.scale.setScalar(Math.max(.4,1-j.y*.25)),n)a.root.rotation.y+=(.35-a.root.rotation.y)*Math.min(1,i*4),j.runT+=i*3,a.pose.rotation.x=0,a.pose.position.y=Math.abs(Math.sin(j.runT))*.03,a.legs[0].rotation.x=a.legs[1].rotation.x=0,a.arms[1].rotation.x=0,a.arms[1].rotation.z=2.6+Math.sin(j.runT*2.2)*.35,a.arms[0].rotation.x=0,a.arms[0].rotation.z=-.18,a.head.rotation.z=Math.sin(j.runT)*.08;else if((j.mode==="crash"||j.mode==="over")&&j.crashKind==="slip"){let m=Math.min(1,i*7),v=Math.max(0,1-j.crashT*1.1);a.root.rotation.y+=i*16*v,j.slipZ-=i*6*v,a.root.position.z=j.slipZ,a.pose.rotation.x+=(-1.35-a.pose.rotation.x)*m,a.pose.position.y=.12,a.legs[0].rotation.x+=(-1.4-a.legs[0].rotation.x)*m,a.legs[1].rotation.x+=(-1-a.legs[1].rotation.x)*m,a.arms[0].rotation.z+=(-2.2-a.arms[0].rotation.z)*m,a.arms[1].rotation.z+=(2.2-a.arms[1].rotation.z)*m,a.arms[0].rotation.x=a.arms[1].rotation.x=0}else if(j.mode==="crash"||j.mode==="over")a.pose.rotation.x+=(1.3-a.pose.rotation.x)*Math.min(1,i*6);else if(t){a.root.rotation.y+=(Math.PI-a.root.rotation.y)*Math.min(1,i*10),j.runT+=i*(8+j.speed*.35);let m=Math.sin(j.runT);a.arms[1].rotation.z=.18,a.arms[0].rotation.z=-.18,a.head.rotation.z=0,j.slide>0?(a.pose.rotation.x+=(-1.15-a.pose.rotation.x)*Math.min(1,i*18),a.legs[0].rotation.x=a.legs[1].rotation.x=1.2,a.arms[0].rotation.x=a.arms[1].rotation.x=-2.6,a.pose.position.y=.1):j.y>0?(a.pose.rotation.x+=(0-a.pose.rotation.x)*Math.min(1,i*18),a.legs[0].rotation.x=-.9,a.legs[1].rotation.x=.5,a.arms[0].rotation.x=-2.4,a.arms[1].rotation.x=-2.4,a.pose.position.y=0):(a.pose.rotation.x+=(.12-a.pose.rotation.x)*Math.min(1,i*18),a.legs[0].rotation.x=m*.95,a.legs[1].rotation.x=-m*.95,a.arms[0].rotation.x=-m*.9,a.arms[1].rotation.x=m*.9,a.pose.position.y=Math.abs(Math.cos(j.runT))*.08),a.root.rotation.z=(j.x-Jt[j.lane])*.12}let o=!1,l=j.y,c=j.y+(j.slide>0?.85:1.75);for(let m=gi.length-1;m>=0;m--){let v=gi[m],g=v.userData;if(v.position.z+=s+g.vz*i*(j.mode==="play"||n?1:0),g.blink&&(g.blink.visible=Math.sin(e*10)>0),g.label&&(g.label.material.opacity=Jh.clamp((v.position.z+45)/15,0,1),g.label.position.y=1+Math.sin(e*4+v.position.z)*.06),v.position.z>jn+Wr[g.kind].hz){v.visible=!1,gi.splice(m,1);continue}let f=Wr[g.kind];if(t&&Math.abs(v.position.x-j.x)<f.hx+.36&&Math.abs(v.position.z)<f.hz+.32&&c>f.y0+.02&&l<f.y1){fu(g.kind==="intestine"?"slip":"hit");break}}let h=t||n;for(let m of Yr)if(m.on){if(h&&(m.d-=m.vz*i),Du(m),m.zhang.userData.arm.rotation.z=2.7+Math.sin(e*9+m.ph)*.35,m.zhang.rotation.y=Math.sin(e*2+m.ph)*.15,Mt-m.d-dc>jn+3){m.on=!1,m.cars.forEach(v=>v.visible=!1);continue}if(t){if(Mt>m.d-.3&&Mt<m.d+dc+.3&&Math.abs(vn(Mt)-j.x)<1.15+.34){fu("train");break}if(m.d>Mt){let v=(m.d-Mt)/(j.speed+m.vz),g=m.d-m.vz*v;v<2.4&&Math.abs(vn(g)-Jt[j.lane])<1.6&&(o=!0)}}}if(o!==Ma&&t&&(Ma=o,lt.warn.classList.toggle("hidden",!o),o&&cn.bell()),!t&&Ma&&(Ma=!1,lt.warn.classList.add("hidden")),t){j.spawnAcc+=s;let m=Math.max(15,30-j.speed*.45)+Tt(-2,4)*0;if(j.spawnAcc>=j.nextGap&&(j.spawnAcc=0,j.nextGap=m+Tt(0,6),mc(Em)),j.trainAcc+=s,j.trainAcc>=j.trainGap&&uu(Mt+145,df())){let v=Math.min(1,j.dist/1500);j.trainAcc=0,j.trainGap=Tt(40,75)-v*15}}else n&&(j.homeT=(j.homeT||0)-i,j.homeT<=0&&uu(Mt+120,8)&&(j.homeT=Tt(4,7)));let u=e*4,d=0;for(let m=0;m<vc;m++){let v=Ia[m];v.on&&(v.z+=s,v.z>jn?v.on=!1:t&&Math.abs(v.x-j.x)<.85&&Math.abs(v.z)<.9&&v.y>l-.3&&v.y<c+.3&&(v.on=!1,j.coins++,cn.coin())),v.on?(xu.set(0,u+v.z*.15,0),_u.setFromEuler(xu),di.set(v.x,v.y,v.z),sc.set(1,1,1)):(di.set(0,-50,0),sc.set(1e-4,1e-4,1e-4)),vu.compose(di,_u,sc),Ta.setMatrixAt(d++,vu)}Ta.instanceMatrix.needsUpdate=!0;for(let m of _c)m.userData.on&&(m.position.z+=s,m.rotation.y=e*2,m.userData.glow.rotation.x=Math.PI/2,m.position.y+=Math.sin(e*5)*.004,m.position.z>jn?(m.userData.on=!1,m.visible=!1):t&&Math.abs(m.position.x-j.x)<.9&&Math.abs(m.position.z)<1&&m.position.y+.2>l-.3&&m.position.y<c&&(m.userData.on=!1,m.visible=!1,j.bonus+=50,j.coins+=5,cn.bowl(),hf("\u96DE\u8089\u98EF +50\uFF01")));let p=Zt.aspect<1;if(n)di.set(.9,2,4.6),Zt.position.lerp(di,Math.min(1,i*3)),Zt.lookAt(-.4,1.25,0);else{let m=j.x*(p?.75:.55);di.set(m,p?5:4.4,p?8.2:7.4),Zt.position.lerp(di,Math.min(1,i*(j.mode==="play"?6:2))),Zt.lookAt(m*.9,1.1,-10)}t&&ku()}function Wu(){let i=innerWidth,e=innerHeight;Ra.setSize(i,e,!1),Zt.aspect=i/e,Zt.fov=Zt.aspect<.75?72:Zt.aspect<1.2?66:58,Zt.updateProjectionMatrix()}addEventListener("resize",Wu);Wu();Zt.position.set(.9,2,4.6);var fc=performance.now();function Xu(i){let e=Math.min(.05,(i-fc)/1e3);fc=i,j.mode!=="pause"&&pf(e),Ra.render(ct,Zt),requestAnimationFrame(Xu)}Lu(0);requestAnimationFrame(Xu);})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
