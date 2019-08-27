import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarToggler = props => {
    return <div>
        <div className='sidebar-toggler' onClick={props.toggleSidebar}>
            {props.isSidebarCollapsed ? <FontAwesomeIcon icon='toggle-off'/> : <FontAwesomeIcon icon='toggle-on'/>}
        </div>
    </div>
}

export default SidebarToggler