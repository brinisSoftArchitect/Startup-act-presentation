// public/brimind/presentation.js
document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide:not([style*="display:none"])'));
  const total = slides.length;
  let current = 0;

  const counter = document.getElementById('ppCounter');
  const dotsContainer = document.getElementById('ppDots');

  // Build dots
  slides.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'pp-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(d);
  });

  function goTo(idx) {
    slides[current].classList.remove('active');
    dotsContainer.children[current].classList.remove('active');
    current = (idx + total) % total;
    slides[current].classList.add('active');
    dotsContainer.children[current].classList.add('active');
    counter.textContent = (current + 1) + ' / ' + total;
  }

  document.getElementById('prevBtn').addEventListener('click', () => goTo(current - 1));
  document.getElementById('nextBtn').addEventListener('click', () => goTo(current + 1));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(current + 1);
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goTo(current - 1);
  });
});
