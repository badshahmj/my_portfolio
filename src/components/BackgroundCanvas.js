import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    // Stars
    const starGeo = new THREE.BufferGeometry();
    const starCount = 1500;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) positions[i] = (Math.random() - 0.5) * 200;
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0x546e8a, size: 0.15 })));

    // Accent stars
    const accentGeo = new THREE.BufferGeometry();
    const accentPos = new Float32Array(80 * 3);
    for (let i = 0; i < 80 * 3; i++) accentPos[i] = (Math.random() - 0.5) * 200;
    accentGeo.setAttribute('position', new THREE.BufferAttribute(accentPos, 3));
    scene.add(new THREE.Points(accentGeo, new THREE.PointsMaterial({ color: 0x00e5ff, size: 0.4 })));

    // Grid
    const grid = new THREE.GridHelper(300, 60, 0x0d2233, 0x0d2233);
    grid.position.y = -15;
    scene.add(grid);

    // Floating cubes
    const cubes = [];
    for (let i = 0; i < 6; i++) {
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 1.5, 1.5),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0x00e5ff : 0xa259ff,
          wireframe: true, transparent: true, opacity: 0.15,
        })
      );
      mesh.position.set((Math.random() - 0.5) * 40, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10);
      mesh.userData.speed = 0.003 + Math.random() * 0.005;
      mesh.userData.rotAxis = new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize();
      scene.add(mesh);
      cubes.push(mesh);
    }

    let mouseX = 0, mouseY = 0;
    const onMouse = e => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    document.addEventListener('mousemove', onMouse);

    let rafId;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      camera.position.x += (mouseX * 3 - camera.position.x) * 0.03;
      camera.position.y += (-mouseY * 2 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);
      cubes.forEach(c => c.rotateOnAxis(c.userData.rotAxis, c.userData.speed));
      grid.position.z += 0.02;
      if (grid.position.z > 5) grid.position.z = 0;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{
      position: 'fixed', top: 0, left: 0,
      width: '100%', height: '100%',
      zIndex: 0, pointerEvents: 'none',
    }} />
  );
}
