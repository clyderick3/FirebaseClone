import React from 'react';
import './Header.css';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import {Avatar} from "@mui/material";


function Header() {
    return (
        <div className = "header">
            <div className="header_left">
                <MenuSharpIcon />

            </div>

            <img
                className = "headerLogo"
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                alt=""
            />

            <div className="header_input">
                <input type = "text"/>
                <SearchSharpIcon/>
            </div>
            <div className="header_icons">
                <VideoCallSharpIcon/>
                <AppsSharpIcon/>
                <Avatar
                    alt = "Clizzy"
                    img src = "https://media-exp1.licdn.com/dms/image/C4E03AQG16NeR7pYFiw/profile-displayphoto-shrink_800_800/0/1651343221678?e=1657152000&v=beta&t=0Bkl_FzmtdndDUvI9ESOlzw3xtf_1XtkE-zMEkYGRLE" />
            </div>




        </div>
    );
}

export default Header;