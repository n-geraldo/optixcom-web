// Load the Simplemaps library to render the country map defined in mapdata.js.
(function() {
  function loadMapScript() {
    var script = document.createElement('script');
    script.src = 'https://simplemaps.com/static/demos/resources/countrymap.js';
    script.defer = true;
    document.head.appendChild(script);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadMapScript);
  } else {
    loadMapScript();
  }
})();

