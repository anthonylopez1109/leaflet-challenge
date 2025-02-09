// Initialize the map
let myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add the basemap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a>',
}).addTo(myMap);

// Fetch and plot earthquakes
fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson')
  .then(response => response.json())
  .then(data => plotEarthquakes(data));

function getColor(depth) {
    if (depth > 90) {
        return 'brown';
    } else if (depth > 70) {
        return 'red';
    } else if (depth > 50) {
        return 'orange';
    } else if (depth > 30) {
        return 'gold';
    } else if (depth > 10) {
        return 'yellow';
    } else {
        return 'green'; // Fix the final else block
    }
}

function getRadius(magnitude) {
    return magnitude * 4; // Adjust size scaling
}

function plotEarthquakes(data) {
    data.features.forEach(feature => {
        let [longitude, latitude, depth] = feature.geometry.coordinates;
        let magnitude = feature.properties.mag;
        let place = feature.properties.place;

        L.circleMarker([latitude, longitude], {
            radius: getRadius(magnitude),
            fillColor: getColor(depth),
            color: "#000",
            weight: 0.5,
            opacity: 1,
            fillOpacity: 0.7
        }).bindPopup(`<h3>${place}</h3><p>Magnitude: ${magnitude}</p><p>Depth: ${depth} km</p>`)
        .addTo(myMap);
    });
}

// Add legend
let legend = L.control({ position: 'bottomright' });
legend.onAdd = function () {
    let div = L.DomUtil.create('div', 'info legend');
    let depths = [-10, 10, 30, 50, 70, 90];
    div.innerHTML = '<h4>Depth (km)</h4>';
    
    for (let i = 0; i < depths.length; i++) {
        div.innerHTML +=
            `<i style="background: ${getColor(depths[i])}; width: 18px; height: 18px; display: inline-block; margin-right: 5px;"></i> ` +
            `${depths[i]}${depths[i + 1] ? '&ndash;' + depths[i + 1] : '+'}<br>`;
    }
    return div;
};
legend.addTo(myMap);

// Tectonic Plates (optional)
d3.json("https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json").then(function (plate_data) {
    L.geoJson(plate_data, {
        color: 'orange',
        weight: 2
    }).addTo(myMap);
});

   
