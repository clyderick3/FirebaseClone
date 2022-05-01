import './App.css';
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/*<h1>Hello there friends, let's build our YouTube Clone :) .</h1>*/}
        <Header />
        <div className="app_page">
            <Sidebar />
            {/* Recommendations */}
        </div>
    </div>
  );
}

export default App;
