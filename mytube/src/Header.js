import React from 'react';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import {Avatar} from "@mui/material";


function Header() {
    return (
        <div className = "header">
            <h1>My FAKE YouTube header.</h1>
            <MenuSharpIcon />
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                alt=""
            />
            <input type = "text"/>
            <SearchSharpIcon/>
            <VideoCallSharpIcon/>
            <AppsSharpIcon/>
            <Avatar
                alt = "Clizzy"
                src = "content/avi.jpg" />

        </div>
    );
}

export default Header;