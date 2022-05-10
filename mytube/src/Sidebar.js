import React from 'react';
import SidebarRow from './SidebarRow';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import AutoStoriesSharpIcon from '@mui/icons-material/AutoStoriesSharp';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import LibraryMusicSharpIcon from '@mui/icons-material/LibraryMusicSharp';
import LocalLibrarySharpIcon from '@mui/icons-material/LocalLibrarySharp';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import HistoryIcon from '@mui/icons-material/History';
import "./Sidebar.css";


function Sidebar() {
    return (
        <div className = "sidebar">
            <SidebarRow selected Icon = {HomeSharpIcon} title = "Home"/>
            <SidebarRow Icon = {WhatshotSharpIcon} title = "Trending"/>
            <SidebarRow Icon = {SubscriptionsSharpIcon} title = "Subscription"/>
            <hr/>
            <SidebarRow Icon = {AutoStoriesSharpIcon} title = "Short"/>
            <SidebarRow Icon = {OndemandVideoSharpIcon} title = "Originals"/>
            <SidebarRow Icon = {LibraryMusicSharpIcon} title = "Music"/>
            <SidebarRow Icon = {HistoryIcon} title = "History"/>
            <SidebarRow Icon = {WatchLaterIcon} title = "Watch Later"/>
            <SidebarRow Icon = {ThumbUpIcon} title = "Liked Videos"/>
            <SidebarRow Icon = {LocalLibrarySharpIcon} title = "Library"/>
            <SidebarRow Icon = {LocalLibrarySharpIcon} title = "Your Videos"/>
            <hr/>




        </div>
    )
}

export default Sidebar