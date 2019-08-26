import React from "react";

const Sidebar = props => {
  return (
    <div className={`sidebar ${props.isSidebarCollapsed && "collapse"}`}>
        {props.children}
    </div>
  );
};

export default Sidebar;
