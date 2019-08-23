import React from 'react'
import Geocoder from './Geocoder'

const Sidebar = props =>   {
    return <div className={`sidebar ${props.isSidebarCollapsed && 'collapse'}`}>
        <Geocoder/>
    </div>
}
export default Sidebar