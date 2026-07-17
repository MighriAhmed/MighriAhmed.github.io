import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function bindHoverMotion(
  el: HTMLElement,
  onMove: (e: MouseEvent) => void,
  onLeave: () => void,
) {
  el.addEventListener('mousemove', onMove);
  el.addEventListener('mouseleave', onLeave);
  return () => {
    el.removeEventListener('mousemove', onMove);
    el.removeEventListener('mouseleave', onLeave);
  };
}

function initMagneticButtons() {
  const magnets = document.querySelectorAll<HTMLElement>('[data-magnetic]');
  const cleanups: Array<() => void> = [];

  magnets.forEach((btn) => {
    const strength = 28;
    const onMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, {
        x: x / strength,
        y: y / strength,
        duration: 0.35,
        ease: 'power3.out',
      });
    };
    const onLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    };
    cleanups.push(bindHoverMotion(btn, onMove, onLeave));
  });

  return () => cleanups.forEach((fn) => fn());
}

function initTiltCards() {
  const cards = document.querySelectorAll<HTMLElement>('[data-tilt]');
  const cleanups: Array<() => void> = [];

  cards.forEach((card) => {
    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const midX = rect.width / 2;
      const midY = rect.height / 2;
      const rotateY = ((x - midX) / midX) * 6;
      const rotateX = ((midY - y) / midY) * 6;
      gsap.to(card, {
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformOrigin: 'center',
        duration: 0.35,
        ease: 'power2.out',
      });
    };
    const onLeave = () => {
      gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.55, ease: 'power3.out' });
    };
    cleanups.push(bindHoverMotion(card, onMove, onLeave));
  });

  return () => cleanups.forEach((fn) => fn());
}

export default function PageEffects() {
  useEffect(() => {
    const preferReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let lenis: Lenis | null = null;
    let rafId = 0;

    if (!preferReduced) {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      lenis.on('scroll', ScrollTrigger.update);
      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
      gsap.ticker.lagSmoothing(0);
    }

    const reveals = gsap.utils.toArray<HTMLElement>('.reveal');
    reveals.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: preferReduced ? 0.01 : 0.9,
            ease: 'power3.out',
            overwrite: true,
          });
          el.classList.add('is-visible');
        },
      });
    });

    const staggerGroups = gsap.utils.toArray<HTMLElement>('[data-stagger]');
    staggerGroups.forEach((group) => {
      const children = group.querySelectorAll<HTMLElement>('[data-stagger-item]');
      gsap.set(children, { opacity: 0, y: 24 });
      ScrollTrigger.create({
        trigger: group,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(children, {
            opacity: 1,
            y: 0,
            duration: preferReduced ? 0.01 : 0.7,
            stagger: preferReduced ? 0 : 0.08,
            ease: 'power3.out',
          });
        },
      });
    });

    const counters = gsap.utils.toArray<HTMLElement>('[data-counter]');
    counters.forEach((el) => {
      const target = Number(el.dataset.counter || 0);
      const obj = { val: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: target,
            duration: preferReduced ? 0.01 : 1.6,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = String(Math.round(obj.val));
            },
          });
        },
      });
    });

    const timeline = document.querySelector('[data-timeline]');
    if (timeline) {
      const items = timeline.querySelectorAll<HTMLElement>('[data-timeline-item]');
      gsap.set(items, { opacity: 0, x: -20 });
      ScrollTrigger.create({
        trigger: timeline,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(items, {
            opacity: 1,
            x: 0,
            stagger: preferReduced ? 0 : 0.12,
            duration: preferReduced ? 0.01 : 0.75,
            ease: 'power3.out',
          });
        },
      });
    }

    const cleanupMagnetic = preferReduced ? () => undefined : initMagneticButtons();
    const cleanupTilt = preferReduced ? () => undefined : initTiltCards();

    const parallaxEls = document.querySelectorAll<HTMLElement>('[data-parallax]');
    const onParallax = (e: MouseEvent) => {
      const cx = e.clientX / window.innerWidth - 0.5;
      const cy = e.clientY / window.innerHeight - 0.5;
      parallaxEls.forEach((el) => {
        const depth = Number(el.dataset.parallax || 10);
        gsap.to(el, {
          x: cx * depth,
          y: cy * depth,
          duration: 0.8,
          ease: 'power2.out',
        });
      });
    };
    if (!preferReduced) {
      window.addEventListener('mousemove', onParallax, { passive: true });
    }

    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
      cleanupMagnetic();
      cleanupTilt();
      window.removeEventListener('mousemove', onParallax);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
