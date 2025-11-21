
(function() {
  const body = document.body;
  const toggle = document.getElementById('themeToggle');

  const stored = window.localStorage.getItem('kazoo-theme');
  if (stored === 'dark') {
    body.setAttribute('data-theme', 'dark');
  } else if (stored === 'light') {
    body.setAttribute('data-theme', 'light');
  } else {
    body.setAttribute('data-theme', 'light');
  }

  function updateToggleLabel() {
    if (!toggle) return;
    const isDark = body.getAttribute('data-theme') === 'dark';
    toggle.querySelector('.mode-label').textContent = isDark ? 'Dark' : 'Light';
  }

  if (toggle) {
    toggle.addEventListener('click', function() {
      const current = body.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      body.setAttribute('data-theme', next);
      window.localStorage.setItem('kazoo-theme', next);
      updateToggleLabel();
    });
  }
  updateToggleLabel();

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }
})();
