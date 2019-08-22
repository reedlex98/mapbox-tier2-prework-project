import React from "react";
// const mbxClient = require("@mapbox/mapbox-sdk");
// const mbxStyles = require("@mapbox/mapbox-sdk/services/styles");
// const mbxTilesets = require("@mapbox/mapbox-sdk/services/tilesets");

  // const baseClient = mbxClient({
  //   accessToken:
  //     "pk.eyJ1IjoicmVlZGxleDk4IiwiYSI6ImNqemh1bGhlMjB0cm0zYm92Ym00ZG9nM2sifQ.UlybX4LYGPwEdoR6JpyxRA"
  // });
  // const stylesService = mbxStyles(baseClient);
  // const tilesetsService = mbxTilesets(baseClient);

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: "",
      isFetchFinish: false
    };
  }

  componentDidMount() {
    var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

    mapboxgl.accessToken =
      "pk.eyJ1IjoicmVlZGxleDk4IiwiYSI6ImNqemhuZnJhdjA4M3kzaHFhMTB3dXR1aGkifQ.rMB3AI-KMw89KBRt2Q6KqQ";

    var map = new mapboxgl.Map({
      container: "map-container", // HTML container id
      style: "mapbox://styles/mapbox/streets-v9", // style URL
      center: [-46.476616,  -23.978113], // starting position as [lng, lat]
      zoom: 15
    });
    
    var marker = new mapboxgl.Marker()
      .setLngLat([-46.476616,  -23.978113])
      .addTo(map);
  }

  render() {
    return <div id="map-container"></div>;
  }
}

export default Map;
