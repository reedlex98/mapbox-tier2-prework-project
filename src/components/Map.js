import React from "react";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

// const MapboxGeocoder = require("@mapbox/mapbox-gl-geocoder");

class Map extends React.Component {

  createMap(accessToken, config) {
    mapboxgl.accessToken = accessToken;
    return new mapboxgl.Map(config);
  }

  createMarkers(geojson, map) {
    geojson.forEach(function(marker) {
      const el = document.createElement('div')
      el.classList.add('marker')
      new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 25 })
      .setHTML(`<h3> ${marker.properties.title}</h3>
                <p>
                  ${marker.properties.description}
                </p>`
              ))
      .addTo(map);
    });
  }

  componentDidMount() {
    const map = this.createMap(
      "pk.eyJ1IjoicmVlZGxleDk4IiwiYSI6ImNqemhuZnJhdjA4M3kzaHFhMTB3dXR1aGkifQ.rMB3AI-KMw89KBRt2Q6KqQ",
      {
        container: "map-container", // HTML container id
        style: "mapbox://styles/mapbox/navigation-preview-night-v2", // style URL
        center: [-46.38365788608155,-23.9593187188718], // starting position as [lng, lat]
        pitch: 85,
        bearing: -27.6,
        zoom: 13
      }
    );
    
    this.createMarkers(this.props.locations, map);
    // const geocoder = new MapboxGeocoder({
    //   accessToken: mapboxgl.accessToken,
    //   mapboxgl: mapboxgl,
    //   marker: true,
    //   placeholder: 'Search for a place in Sao Vicente',
    //   proximity: {
    //     latitude: -23.978113,
    //     longitude: -46.476616
    //   },
    //   bbox: [-46.650268293716294,-24.00971344305148,-46.35592184956596,-23.898951151178693],
    //   limit: 5
    // });
    
    // document.getElementById("geocoder").appendChild(geocoder.onAdd(map));
  }

  render() {
    return <div id="map-container" />;
  }
}

export default Map;
