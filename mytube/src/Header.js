import React from 'react';
import './Header.css';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import CircleNotificationsSharpIcon from '@mui/icons-material/CircleNotificationsSharp';
import {Avatar} from "@mui/material";
// import {NotificationAdd} from "@mui/icons-material";


function Header() {
    return (
        <div className = "header">
            <div className="header_left">
                <MenuSharpIcon />
            <img
                className = "headerLogo"
                src = {require("./WeTube.png")}
                alt=""
            />
            Sponsored by NYCETube, DiaryFibre, and FLINT.
            </div>

            <div className="header_input">
                <input placeholder = "Search" type = "text"/>
                <SearchSharpIcon className = "header_inputButton"/>
            </div>

            <div className="header_icons">
                <VideoCallSharpIcon className = "header_icon"/>
                <AppsSharpIcon className = "header_icon"/>
                <CircleNotificationsSharpIcon className = "header_icon"/>
                <Avatar
                    alt = "Clizzy"
                    img src = "https://media-exp1.licdn.com/dms/image/C4E03AQG16NeR7pYFiw/profile-displayphoto-shrink_800_800/0/1651343221678?e=1657152000&v=beta&t=0Bkl_FzmtdndDUvI9ESOlzw3xtf_1XtkE-zMEkYGRLE" />
            </div>




        </div>
    );
}

export default Header;