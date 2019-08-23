import React from "react";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import SidebarToggler from "./components/SidebarToggler";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarCollapsed: false
    };
    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  toggleSidebar() {
    this.setState(prevState => {
      return {
        isSidebarCollapsed: !prevState.isSidebarCollapsed
      }
    })
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
