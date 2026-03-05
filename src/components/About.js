import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './About.module.css';

export default function About() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const w = canvas.offsetWidth || 400;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(w, w);
    renderer.setPixelRatio(window.devicePixelRatio);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 5;

    const mesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.8, 1),
      new THREE.MeshBasicMaterial({ color: 0x00e5ff, wireframe: true, transparent: true, opacity: 0.4 })
    );
    scene.add(mesh);

    const inner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.2, 0),
      new THREE.MeshBasicMaterial({ color: 0xa259ff, wireframe: true, transparent: true, opacity: 0.2 })
    );
    scene.add(inner);

    const orbitGeo = new THREE.BufferGeometry();
    const orbitPos = new Float32Array(80 * 3);
    for (let i = 0; i < 80; i++) {
      const theta = (i / 80) * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.2 + Math.random() * 0.5;
      orbitPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      orbitPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      orbitPos[i * 3 + 2] = r * Math.cos(phi);
    }
    orbitGeo.setAttribute('position', new THREE.BufferAttribute(orbitPos, 3));
    const orbit = new THREE.Points(orbitGeo, new THREE.PointsMaterial({ color: 0xff3d7f, size: 0.06 }));
    scene.add(orbit);

    let rafId;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      mesh.rotation.y  += 0.006; mesh.rotation.x  += 0.003;
      inner.rotation.y -= 0.008; inner.rotation.z  += 0.004;
      orbit.rotation.y += 0.004; orbit.rotation.x  += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    return () => { cancelAnimationFrame(rafId); renderer.dispose(); };
  }, []);

  return (
    <section id="about" className={styles.about}>
      <div className={`${styles.canvasWrap} reveal`}>
        <canvas ref={canvasRef} className={styles.canvas} />
      </div>
      <div className={styles.content}>
        <p className={styles.label}>// 01 — About Me</p>
        <h2 className={styles.heading}>Code Meets <em>Vision</em></h2>
        <p>I started as a software engineer obsessed with clean architecture and scalable systems. After honing my skills across fintech, HR tech, and e-commerce products, I took the leap to found <strong>Everiday</strong>.</p>
        <p>I bridge the gap between <strong>technical execution</strong> and <strong>product thinking</strong> — whether that's architecting microservices, building a component library, or launching a consumer brand from scratch.</p>
        <p>Based in <strong>Delhi, India</strong>. Kurukshetra University alumnus. Certified in Data Structures & Algorithms.</p>
        <div className={`${styles.stats} reveal`}>
          {[['3+','Years Exp'],['4+','Products Built'],['1','Company Founded']].map(([n,l]) => (
            <div key={l} className={styles.stat}>
              <div className={styles.statNum}>{n}</div>
              <div className={styles.statLabel}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
