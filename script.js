// ── MENU TOGGLE ──────────────────────────────────────────────────
const menuBtn = document.getElementById('menu-btn');
const nav = document.querySelector('.main-nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('show');
    menuBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close menu on nav link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── SCROLL: CLASS ON HEADER ──────────────────────────────────────
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}, { passive: true });

// ── SCROLL ANIMATION OBSERVER ────────────────────────────────────
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});
