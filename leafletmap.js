window.onload = function () {
    var basemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	});

    $.getJSON("map.geojson", function(data) {

    var geojson = L.geoJson(data, {
      onEachFeature: function (feature, layer) {
        layer.bindPopup('<p><b>' + feature.properties.Activity + ', ' + feature.properties.Town + '</b></p>' + '<p>' + feature.properties.Description + '</p>' + '<p><i>' + feature.properties.Article_Name + ', ' + feature.properties.Newspaper + '</i></p>');
      }
    });


    var map = L.map('my-map')
    .fitBounds(geojson.getBounds());
    
    basemap.addTo(map);
    geojson.addTo(map);
    
  });

};
