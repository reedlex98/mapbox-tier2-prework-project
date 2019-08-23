import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarToggler = props => {
    return <div className='rounded-button sidebar-toggler' onClick={props.toggleSidebar}>
        {props.isSidebarCollapsed ? <FontAwesomeIcon icon='toggle-off'/> : <FontAwesomeIcon icon='toggle-on'/>}
    </div>
}

export default SidebarToggler