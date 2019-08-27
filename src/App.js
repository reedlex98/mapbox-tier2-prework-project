import React from "react";
import Map from "./components/Map";
import Filter from "./components/Filter";
import Sidebar from "./components/Sidebar";
import SidebarToggler from "./components/SidebarToggler";

import {
  faToggleOn,
  faLongArrowAltRight,
  faToggleOff
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import locations from "./locations/locations";
import FilteredList from "./components/FilteredList";

library.add(faToggleOn, faToggleOff, faLongArrowAltRight);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarCollapsed: false,
      locations: locations.features,
      filteredLocations: [],
      filteredList: [],
      search: ""
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.filterList = this.filterList.bind(this);
    this.filterLocations = this.filterLocations.bind(this);
  }

  filterLocations() {
    this.setState(prevState => {
      return {
        filteredLocations: prevState.locations.filter(location =>
          prevState.filteredList.includes(location.properties.title)
        )
      }
    })
  }

  filterList() {
    this.setState(prevState => {
      return {
        filteredList: prevState.locations
          .filter(value =>
            value.properties.title.toLowerCase().startsWith(prevState.search)
          )
          .map(value => value.properties.title)
      };
    });
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
    this.filterList();
    this.filterLocations()
  }

  toggleSidebar() {
    this.setState(prevState => {
      return {
        isSidebarCollapsed: !prevState.isSidebarCollapsed
      };
    });
  }

  render() {
    return (
      <div>
        <Sidebar
          isSidebarCollapsed={this.state.isSidebarCollapsed}
          locations={this.state.locations}
        >
          <Filter handleChange={this.handleChange} search={this.state.search} />
          <FilteredList
            locations={this.state.locations}
            search={this.state.search}
            filteredList={this.state.filteredList}
          />
        </Sidebar>
        <SidebarToggler
          isSidebarCollapsed={this.state.isSidebarCollapsed}
          toggleSidebar={this.toggleSidebar}
        />
        <Map
          locations={
            this.state.filteredLocations.length > 0
              ? this.state.filteredLocations
              : this.state.locations
          }
        />
      </div>
    );
  }
}

export default App;
