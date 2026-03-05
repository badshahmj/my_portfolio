import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const mx = useRef(0), my = useRef(0);
  const rx = useRef(0), ry = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const onMove = e => { mx.current = e.clientX; my.current = e.clientY; };
    document.addEventListener('mousemove', onMove);

    const animate = () => {
      rx.current += (mx.current - rx.current) * 0.15;
      ry.current += (my.current - ry.current) * 0.15;
      if (cursorRef.current) {
        cursorRef.current.style.left = mx.current + 'px';
        cursorRef.current.style.top  = my.current + 'px';
      }
      if (ringRef.current) {
        ringRef.current.style.left = rx.current + 'px';
        ringRef.current.style.top  = ry.current + 'px';
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    const onEnter = () => {
      if (cursorRef.current) cursorRef.current.style.transform = 'translate(-50%,-50%) scale(2)';
      if (ringRef.current) { ringRef.current.style.width = '60px'; ringRef.current.style.height = '60px'; }
    };
    const onLeave = () => {
      if (cursorRef.current) cursorRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
      if (ringRef.current) { ringRef.current.style.width = '36px'; ringRef.current.style.height = '36px'; }
    };
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} style={{
        width: 12, height: 12,
        background: 'var(--accent)',
        borderRadius: '50%',
        position: 'fixed',
        top: 0, left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%,-50%)',
        transition: 'transform 0.1s ease, background 0.2s',
        mixBlendMode: 'screen',
      }} />
      <div ref={ringRef} style={{
        width: 36, height: 36,
        border: '1px solid var(--accent)',
        borderRadius: '50%',
        position: 'fixed',
        top: 0, left: 0,
        pointerEvents: 'none',
        zIndex: 9998,
        transform: 'translate(-50%,-50%)',
        transition: 'transform 0.12s ease, width 0.2s, height 0.2s',
        opacity: 0.5,
      }} />
    </>
  );
}
