/* ═══════════════════════════════════════════════════════════════════════════
   Brentford Capital — Main JavaScript
   Slideshow · Navigation · Scroll Reveal · Mobile Menu · Smooth Scroll
   ═══════════════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── Utility ────────────────────────────────────────────────────────── */
  const qs  = (sel, ctx = document) => ctx.querySelector(sel);
  const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* ─── Hero Slideshow ─────────────────────────────────────────────────── */
  const slides     = qsa('.hero-slide');
  const dots       = qsa('.hero-dot');
  const INTERVAL   = 7000;
  let   current    = 0;
  let   timer      = null;

  function showSlide(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function nextSlide() { showSlide(current + 1); }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, INTERVAL);
  }

  if (slides.length > 0) {
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => { showSlide(i); startTimer(); });
    });
    startTimer();
  }

  /* ─── Hero Text Reveal on Load ───────────────────────────────────────── */
  function triggerHeroReveal() {
    document.body.classList.add('loaded');
  }

  if (document.readyState === 'complete') {
    // already loaded
    setTimeout(triggerHeroReveal, 80);
  } else {
    window.addEventListener('load', () => setTimeout(triggerHeroReveal, 80));
  }

  /* ─── Navigation — Scroll Effect ────────────────────────────────────── */
  const nav = qs('#nav');

  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on init

  /* ─── Mobile Menu ────────────────────────────────────────────────────── */
  const hamburger = qs('#hamburger');
  const navLinks  = qs('#navLinks');
  const navCta    = qs('.nav-cta');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
      navLinks.classList.toggle('is-open', open);
      if (navCta) navCta.classList.toggle('is-open', open);
      // Always force scrolled state so nav bg shows when menu open
      if (open) nav.classList.add('scrolled');
      else if (window.scrollY <= 50) nav.classList.remove('scrolled');
    });

    // Close on link click
    qsa('a', navLinks).forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('is-open');
        if (navCta) navCta.classList.remove('is-open');
      });
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (!nav.contains(e.target)) {
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('is-open');
        if (navCta) navCta.classList.remove('is-open');
      }
    });
  }

  /* ─── Scroll Reveal — IntersectionObserver ───────────────────────────── */
  const revealEls = qsa('.reveal');

  if ('IntersectionObserver' in window && revealEls.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  } else {
    // Fallback — show all
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ─── Stagger children inside grid containers ────────────────────────── */
  const staggerContainers = [
    '.pillars-grid',
    '.services-grid',
    '.insights-grid',
    '.approach-grid',
  ];

  staggerContainers.forEach(sel => {
    const container = qs(sel);
    if (!container) return;
    qsa('.reveal', container).forEach((child, i) => {
      child.classList.add(`stagger-${(i % 4) + 1}`);
    });
  });

  /* ─── Smooth Scroll for Anchor Links ─────────────────────────────────── */
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href');
    if (id === '#') return;
    const target = qs(id);
    if (!target) return;
    e.preventDefault();
    const offset = parseInt(getComputedStyle(document.documentElement)
      .getPropertyValue('--nav-h') || '80', 10);
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });

  /* ─── Active nav link highlight on scroll ───────────────────────────── */
  const sections = qsa('section[id], header[id]');
  const navAnchors = qsa('.nav-link[href^="#"]');

  function updateActiveLink() {
    let closest = null;
    let minDist = Infinity;
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      const dist = Math.abs(rect.top - 100);
      if (dist < minDist) { minDist = dist; closest = sec.id; }
    });
    navAnchors.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${closest}`);
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });

})();
