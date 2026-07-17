import { useEffect } from 'react';

export default function CursorGlow() {
  useEffect(() => {
    const el = document.createElement('div');
    el.className = 'cursor-glow';
    document.body.appendChild(el);

    const move = (e: MouseEvent) => {
      el.classList.add('is-active');
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };

    const leave = () => el.classList.remove('is-active');

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseleave', leave);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', leave);
      el.remove();
    };
  }, []);

  return null;
}
