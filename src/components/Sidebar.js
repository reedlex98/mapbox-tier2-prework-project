import React from 'react'

const Sidebar = props =>   {
    return <div class={`sidebar ${props.isSidebarCollapsed && 'collapse'}`}>
        hey I'm the sidebar
    </div>
}
export default Sidebar