// public/brimind/script.js
document.addEventListener('DOMContentLoaded', () => {
  // ---------- Common UI (scroll animations, nav highlight) ----------
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .arch-item, .traction-item, .invest-item, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  const style = document.createElement('style');
  style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);

  document.querySelectorAll('.cards, .arch-grid, .traction-grid').forEach(grid => {
    [...grid.children].forEach((child, i) => {
      child.style.transitionDelay = `${i * 80}ms`;
    });
  });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(link => {
      link.style.color = link.getAttribute('href') === `#${current}` ? '#fff' : '';
    });
  });

  // ---------- Presentation specific logic (only on presentation.html) ----------
  const presentationEl = document.querySelector('.presentation');
  if (presentationEl) {
    const slides = Array.from(presentationEl.querySelectorAll('.slide'));
    let currentIdx = slides.findIndex(s => s.classList.contains('active'));
    if (currentIdx === -1) currentIdx = 0;
    const showSlide = (idx) => {
      slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    };
    const prevBtn = presentationEl.querySelector('.slide-nav.prev');
    const nextBtn = presentationEl.querySelector('.slide-nav.next');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIdx = (currentIdx - 1 + slides.length) % slides.length;
        showSlide(currentIdx);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIdx = (currentIdx + 1) % slides.length;
        showSlide(currentIdx);
      });
    }
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        currentIdx = (currentIdx - 1 + slides.length) % slides.length;
        showSlide(currentIdx);
      } else if (e.key === 'ArrowRight') {
        currentIdx = (currentIdx + 1) % slides.length;
        showSlide(currentIdx);
      }
    });
  }
});
  // Animate elements on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .arch-item, .traction-item, .invest-item, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // Add visible class via observer
  const style = document.createElement('style');
  style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);

  // Stagger children in grids
  document.querySelectorAll('.cards, .arch-grid, .traction-grid').forEach(grid => {
    [...grid.children].forEach((child, i) => {
      child.style.transitionDelay = `${i * 80}ms`;
    });
  });

  // Nav active link highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(link => {
      link.style.color = link.getAttribute('href') === `#${current}` ? '#fff' : '';
    });
  });
});
