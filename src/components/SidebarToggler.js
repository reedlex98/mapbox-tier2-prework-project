import React from 'react'

const SidebarToggler = props => {
    return <div class='rounded-button sidebar-toggler' onClick={props.toggleSidebar}>
        {props.isSidebarCollapsed ? 'Uncollapse' : 'collapse'}
    </div>
}

export default SidebarToggler