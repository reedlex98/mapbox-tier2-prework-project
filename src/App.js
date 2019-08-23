import React from "react";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import SidebarToggler from "./components/SidebarToggler";

import { faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faToggleOn, faToggleOff);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarCollapsed: false
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState(prevState => {
      return {
        isSidebarCollapsed: !prevState.isSidebarCollapsed
      };
    });
  }

  componentDidMount() {
    const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
    const MapboxGeocoder = require("@mapbox/mapbox-gl-geocoder");
    mapboxgl.accessToken =
      "pk.eyJ1IjoicmVlZGxleDk4IiwiYSI6ImNqemhuZnJhdjA4M3kzaHFhMTB3dXR1aGkifQ.rMB3AI-KMw89KBRt2Q6KqQ";

    var map = new mapboxgl.Map({
      container: "map-container", // HTML container id
      style: "mapbox://styles/mapbox/navigation-preview-night-v2", // style URL
      center: [-46.476616, -23.978113], // starting position as [lng, lat]
      pitch: 85,
      bearing: -27.6,
      zoom: 15
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    })

    document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

    const marker = new mapboxgl.Marker()
      .setLngLat([-46.476616, -23.978113])
      .addTo(map);
  }

  render() {
    return (
      <div>
        <Sidebar isSidebarCollapsed={this.state.isSidebarCollapsed} />
        <SidebarToggler
          isSidebarCollapsed={this.state.isSidebarCollapsed}
          toggleSidebar={this.toggleSidebar}
        />
        <Map />
      </div>
    );
  }
}

export default App;
