import React from "react"
import Books from "./writing/Books";
import Music from "./music/Music";
import NavBar from "../NavBar";

const Home = () => {
    return(
        <React.Fragment> 
            <div className="home1">
            <NavBar/>
            <div className="home2">
            <Books/>
            <Music/>
            </div>
            </div>
        </React.Fragment>  
    );
}

export default Home;