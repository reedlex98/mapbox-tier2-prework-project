import React from 'react';
import ReactMapGL from 'react-map-gl';

class MapContainer extends React.Component {

  state = {
    viewport: {
      height: '100vh',
      width: '100vw',
      latitude: -23.978113,
      longitude: -46.476616,
      zoom: 13
    }
  };

  render() {
    return (
      <ReactMapGL id='map-container'
        mapStyle="mapbox://styles/mapbox/navigation-preview-night-v2"
        mapboxApiAccessToken = "pk.eyJ1IjoicmVlZGxleDk4IiwiYSI6ImNqemhuZnJhdjA4M3kzaHFhMTB3dXR1aGkifQ.rMB3AI-KMw89KBRt2Q6KqQ"
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}

export default MapContainer