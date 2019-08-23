import React from "react";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
const MapboxGeocoder = require("@mapbox/mapbox-gl-geocoder");

class Map extends React.Component {

  createMap(accessToken, config) {
    mapboxgl.accessToken = accessToken;
    return new mapboxgl.Map(config);
  }

  createMarkers(geojson, map) {
    geojson.features.forEach(function(marker) {
      new mapboxgl.Marker().setLngLat(marker.geometry.coordinates).addTo(map);
    });
  }

  initGeoJson() {
    return {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-46.476616, -23.978113]
          },
          properties: {
            title: "Mapbox",
            description:
              "Rua Eduardo Cacao, Jardim Rio Branco, Sao Vicente, Sao Paulo"
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-46.466608, -23.984892]
          },
          properties: {
            title: "Mapbox",
            description:
              "Supermercado Mini Preço, Jardim Rio Branco, Sao Vicente, Sao Paulo"
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-46.386018, -23.970975]
          },
          properties: {
            title: "Mapbox",
            description: "Biquinha de Anchieta, Centro, Sao Vicente, Sao Paulo"
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-46.370849, -23.977406]
          },
          properties: {
            title: "Mapbox",
            description: "Ilha Porchat, Itararé, Sao Vicente, Sao Paulo"
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-46.350136, -23.971674]
          },
          properties: {
            title: "Mapbox",
            description: "Emissário Submarino, José Menino, Santos, Sao Paulo"
          }
        }
      ]
    };
  }

  componentDidMount() {
    const map = this.createMap(
      "pk.eyJ1IjoicmVlZGxleDk4IiwiYSI6ImNqemhuZnJhdjA4M3kzaHFhMTB3dXR1aGkifQ.rMB3AI-KMw89KBRt2Q6KqQ",
      {
        container: "map-container", // HTML container id
        style: "mapbox://styles/mapbox/navigation-preview-night-v2", // style URL
        center: [-46.476616, -23.978113], // starting position as [lng, lat]
        pitch: 85,
        bearing: -27.6,
        zoom: 13
      }
    );
    this.createMarkers(this.initGeoJson(), map);

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      marker: true,
      proximity: {
        latitude: -23.978113,
        longitude: -46.476616
      },
      limit: 3
    });

    document.getElementById("geocoder").appendChild(geocoder.onAdd(map));
  }

  render() {
    return <div id="map-container" />;
  }
}

export default Map;
