import React from 'react';
import './SidebarRow.css';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';

function SidebarRow({title}) {
    return (
        <div className = "sidebarRow">
            <HomeSharpIcon/>
            <h2>{title}</h2>
        </div>
    )
}

export default SidebarRow