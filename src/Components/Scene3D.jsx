import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/* ─── GLSL shaders ─── */
const PLANET_VERT = `
varying vec3 vNormal;
varying vec3 vPos;
void main() {
  vNormal = normalize(normalMatrix * normal);
  vPos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const PLANET_FRAG = `
precision highp float;
uniform float uTime;
varying vec3 vNormal;
varying vec3 vPos;

float hash(vec3 p) { return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.545); }
float noise(vec3 p) {
  vec3 i=floor(p); vec3 f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(
    mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),
    mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),
    f.z);
}

void main() {
  vec3 p = vPos * 2.2 + vec3(uTime*0.025, 0.0, uTime*0.015);
  float n = noise(p)*0.5 + noise(p*2.3+1.7)*0.3 + noise(p*5.1+3.2)*0.2;

  vec3 c1=vec3(0.04,0.01,0.16), c2=vec3(0.16,0.05,0.40), c3=vec3(0.38,0.10,0.68);
  vec3 col = n < 0.45 ? mix(c1,c2,n/0.45) : mix(c2,c3,(n-0.45)/0.55);

  float rim = pow(1.0 - abs(dot(vNormal, vec3(0.0,0.0,1.0))), 3.0);
  col += vec3(0.22,0.10,0.75) * rim * 1.2;
  col *= 0.55 + max(0.0, dot(vNormal, normalize(vec3(1.0,0.7,0.5)))) * 0.45;
  gl_FragColor = vec4(col, 1.0);
}`;

const ATMO_VERT = `
varying vec3 vNormal;
void main() {
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const ATMO_FRAG = `
precision mediump float;
varying vec3 vNormal;
void main() {
  float r = pow(1.0 - abs(dot(vNormal, vec3(0.0,0.0,1.0))), 2.2);
  gl_FragColor = vec4(0.38, 0.16, 0.95, r * 0.55);
}`;

/* ─── Section states ─── */
const STATES = [
  { t: 0,    x:  3.2, y:  0.5,  s: 1.8,  moon: true,  belt: false, signal: false },
  { t: 0.17, x:  5.8, y:  3.8,  s: 0.85, moon: false, belt: false, signal: false },
  { t: 0.38, x: -4.5, y:  0.5,  s: 0.9,  moon: true,  belt: false, signal: false },
  { t: 0.56, x:  5.0, y: -1.5,  s: 0.75, moon: false, belt: true,  signal: false },
  { t: 0.75, x:  0.0, y: -3.0,  s: 1.1,  moon: false, belt: false, signal: true  },
];

function lerpN(a, b, t) { const s = t * t * (3 - 2 * t); return a + (b - a) * s; }

function getTarget(scroll) {
  for (let i = 0; i < STATES.length - 1; i++) {
    if (scroll >= STATES[i].t && scroll < STATES[i + 1].t) {
      const a = STATES[i], b = STATES[i + 1];
      const lt = (scroll - a.t) / (b.t - a.t);
      return { x: lerpN(a.x, b.x, lt), y: lerpN(a.y, b.y, lt), s: lerpN(a.s, b.s, lt), ...a };
    }
  }
  return { ...STATES[STATES.length - 1] };
}

export default function Scene3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || window.innerWidth < 768) return;

    /* ── Renderer — explicitly transparent ── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // alpha=0 → transparent clear
    renderer.domElement.style.cssText =
      'position:absolute;top:0;left:0;width:100%;height:100%;display:block;';
    el.appendChild(renderer.domElement);

    /* ── Scene + camera ── */
    const scene  = new THREE.Scene(); // no scene.background → inherits renderer clear
    const camera = new THREE.PerspectiveCamera(
      42, window.innerWidth / window.innerHeight, 0.1, 100
    );
    camera.position.set(0, 0, 10);

    /* ── Lights ── */
    scene.add(new THREE.AmbientLight(0x8b5cf6, 0.4));
    const l1 = new THREE.PointLight(0xc084fc, 1.8);
    l1.position.set(8, 6, 4);
    scene.add(l1);
    const l2 = new THREE.PointLight(0xec4899, 0.5);
    l2.position.set(-4, -3, 3);
    scene.add(l2);

    /* ── Planet group ── */
    const group = new THREE.Group();
    group.position.set(3.2, 0.5, 0);
    scene.add(group);

    /* Atmosphere */
    const atmoMat = new THREE.ShaderMaterial({
      vertexShader: ATMO_VERT, fragmentShader: ATMO_FRAG,
      side: THREE.BackSide, transparent: true, depthWrite: false,
    });
    group.add(new THREE.Mesh(new THREE.SphereGeometry(1.15, 32, 32), atmoMat));

    /* Planet body */
    const planetMat = new THREE.ShaderMaterial({
      vertexShader: PLANET_VERT, fragmentShader: PLANET_FRAG,
      uniforms: { uTime: { value: 0 } },
    });
    const planet = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 64), planetMat);
    group.add(planet);

    /* Ring */
    const ringMesh = new THREE.Mesh(
      new THREE.RingGeometry(1.38, 2.2, 128),
      new THREE.MeshBasicMaterial({ color: 0x9333ea, transparent: true, opacity: 0.32, side: THREE.DoubleSide })
    );
    ringMesh.rotation.set(Math.PI * 0.52, 0.12, 0.28);
    group.add(ringMesh);

    /* Moon orbit group */
    const moonOrbit = new THREE.Group();
    const moonMat = new THREE.MeshStandardMaterial({ color: 0xa1a1aa, roughness: 0.9, transparent: true, opacity: 1 });
    const moonMesh = new THREE.Mesh(new THREE.SphereGeometry(0.22, 16, 16), moonMat);
    moonMesh.position.set(2.0, 0.25, 0);
    moonOrbit.add(moonMesh);
    group.add(moonOrbit);

    /* Asteroid belt */
    const beltPos = new Float32Array(220 * 3);
    for (let i = 0; i < 220; i++) {
      const a = (i / 220) * Math.PI * 2;
      const r = 1.55 + Math.random() * 0.55;
      beltPos[i * 3]     = Math.cos(a) * r + (Math.random() - 0.5) * 0.22;
      beltPos[i * 3 + 1] = (Math.random() - 0.5) * 0.18;
      beltPos[i * 3 + 2] = Math.sin(a) * r + (Math.random() - 0.5) * 0.22;
    }
    const beltGeo = new THREE.BufferGeometry();
    beltGeo.setAttribute('position', new THREE.BufferAttribute(beltPos, 3));
    const beltMat = new THREE.PointsMaterial({ color: 0xa855f7, size: 0.04, transparent: true, opacity: 0, sizeAttenuation: true });
    const beltMesh = new THREE.Points(beltGeo, beltMat);
    beltMesh.rotation.x = 0.15;
    group.add(beltMesh);

    /* Signal rings */
    const sigMats = [0, 1, 2].map(() =>
      new THREE.MeshBasicMaterial({ color: 0xc084fc, transparent: true, opacity: 0, side: THREE.DoubleSide })
    );
    const sigRings = sigMats.map((mat) => {
      const m = new THREE.Mesh(new THREE.RingGeometry(0.95, 1.06, 64), mat);
      m.rotation.x = Math.PI / 2;
      group.add(m);
      return m;
    });

    /* ── State ── */
    let scrollT    = 0;
    let prevScrollT = 0;
    let lastTime   = performance.now();
    let animId;

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollT = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    /* ── Animation loop ── */
    function lerp(a, b, t) { return a + (b - a) * t; }

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const now     = performance.now();
      const elapsed = now / 1000;
      const delta   = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const tgt = getTarget(scrollT);
      const spd = 2.2;

      /* Smooth position & scale */
      group.position.x = lerp(group.position.x, tgt.x, delta * spd);
      group.position.y = lerp(group.position.y, tgt.y, delta * spd);
      const ns = lerp(group.scale.x, tgt.s, delta * spd);
      group.scale.setScalar(ns);

      /* Scroll velocity → extra spin */
      const vel = (scrollT - prevScrollT) * 60;
      prevScrollT = scrollT;
      planet.rotation.y += delta * (0.10 + Math.abs(vel) * 2.5);
      planet.rotation.z  = lerp(planet.rotation.z, vel * 0.12, delta * 4);

      /* Moon orbit */
      moonOrbit.rotation.y += delta * 0.38;
      moonMat.opacity = lerp(moonMat.opacity, tgt.moon ? 1 : 0, delta * 2);

      /* Asteroid belt */
      beltMesh.rotation.y += delta * 0.14;
      beltMat.opacity = lerp(beltMat.opacity, tgt.belt ? 0.85 : 0, delta * 2);

      /* Signal rings */
      sigRings.forEach((ring, i) => {
        const t2 = ((elapsed * 0.45 + i * 0.75) % 1);
        ring.scale.setScalar(1 + t2 * 3.2);
        sigMats[i].opacity = (1 - t2) * (tgt.signal ? 0.62 : 0);
      });

      /* Shader time */
      planetMat.uniforms.uTime.value = elapsed;

      renderer.render(scene, camera);
    };
    animate();

    /* ── Cleanup ── */
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hidden md:block fixed inset-0 pointer-events-none"
      style={{ zIndex: 2 }}
    />
  );
}
