document.addEventListener('DOMContentLoaded', () => {
  // year in footer
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  // mobile nav
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('[data-nav]');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // contact form async submit
  const f = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (f) {
    f.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.textContent = 'Sending...';
      const fd = new FormData(f);
      const body = Object.fromEntries(fd.entries());
      try {
        const r = await fetch('/api/contact', {
          method: 'POST',
          headers: {'content-type':'application/json'},
          body: JSON.stringify(body)
        });
        if (r.ok) {
          status.textContent = 'Thanks! We will get back to you shortly.';
          f.reset();
        } else {
          const txt = await r.text();
          status.textContent = 'Failed to send: ' + txt;
        }
      } catch (err) {
        status.textContent = 'Network error. Please try again.';
      }
    });
  }
});
