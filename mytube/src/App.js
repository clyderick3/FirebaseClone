import './App.css';
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header />
            <div className = "app_page">
                <Sidebar />
                <RecommendedVideos />
            </div>
        </div>
    );
}

export default App;
