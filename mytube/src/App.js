import './App.css';
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path = "/search/:searchTerm">
                        <div className = "app_page">
                            <Sidebar />
                            <SearchPage />
                        </div>
                        <h1>Search page</h1> //can delete soon.
                    </Route>
                    <Route path = "/">
                        {/*<h1>Home Page baby</h1>*/}
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
