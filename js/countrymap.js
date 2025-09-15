// Placeholder implementation for country map rendering.
// This script populates the #map div with location data from mapdata.js.

(function() {
  function initMap() {
    var mapDiv = document.getElementById('map');
    var data = window.simplemaps_countrymap_mapdata;
    if (!mapDiv || !data || !data.locations) return;
    var list = document.createElement('ul');
    Object.keys(data.locations).forEach(function(key) {
      var loc = data.locations[key];
      var item = document.createElement('li');
      item.textContent = loc.name + ' (' + loc.lat + ', ' + loc.lng + ')';
      list.appendChild(item);
    });
    mapDiv.appendChild(list);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMap);
  } else {
    initMap();
  }
})();

