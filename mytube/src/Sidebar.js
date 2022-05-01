import React from 'react';
import SidebarRow from './SidebarRow';
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className = "sidebar">
            <h2>Sidebar here.</h2>

            <SidebarRow title = "Home"/>
            <SidebarRow title = "Trending"/>
            <SidebarRow title = "Subscription"/>


        </div>
    )
}

export default Sidebar