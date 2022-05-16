import './App.css';
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path = "/search/:searchTerm">
                        <h1>Search page</h1>
                    </Route>
                    <Route path = "/">
                        {/*<h1>Home page</h1>*/}
                        {/*<Header />*/}
                        <div className = "app_page">
                            <Sidebar />
                            <RecommendedVideos />
                        </div>
                    </Route>
                </Switch>
            </Router>



        </div>
    );
}

export default App;
