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

  // Leaflet map of European locations
  const mapEl = document.getElementById('coverageMap');
  if (mapEl && window.L) {
    const map = L.map(mapEl, {scrollWheelZoom: false});
    const locations = [
      {name: 'Tirana, Albania', coords: [41.3275, 19.8187], note: 'Head office'},
      {name: 'Prishtina, Kosovo', coords: [42.6629, 21.1655]},
      {name: 'Bulgaria', coords: [42.7339, 25.4858]},
      {name: 'Slovenia', coords: [46.1512, 14.9955]},
      {name: 'Frankfurt, Germany', coords: [50.1109, 8.6821]}
    ];

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    const bounds = L.latLngBounds(locations.map((loc) => loc.coords));
    locations.forEach((loc) => {
      const content = `<strong>${loc.name}</strong>${loc.note ? `<br>${loc.note}` : ''}`;
      L.marker(loc.coords).addTo(map).bindPopup(content);
    });
    map.fitBounds(bounds, {padding: [30, 30]});
  }
});
