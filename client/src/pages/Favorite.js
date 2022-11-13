import React from "react"
import Books from "./writing/Books";
import MusicFave from "./music/MusicFave";
import NavBar from "../NavBar";
import BooksFave from "./writing/BooksFave";

const Favorite = () => {
    return(
        <div className="home1">
            <div className="home2">
            <React.Fragment> 
                <div className="home1">
                <NavBar/>
                <div className="home2">
                <BooksFave/>
                <p>hi</p>
                <MusicFave/>
                </div>
                </div>
            </React.Fragment>
            </div>
        </div>   
    );
}

export default Favorite;