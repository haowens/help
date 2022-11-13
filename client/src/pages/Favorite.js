import React from "react"
import MusicFave from "./music/MusicFave";
import NavBar from "../NavBar";
import BooksFave from "./writing/BooksFave";

const Favorite = () => {
    return(
            <React.Fragment> 
                <div className="home1">
                <NavBar/>
                <div className="home2">
                <BooksFave/>
                {/* <p>hi</p> */}
                <MusicFave/>
                </div>
                </div>
            </React.Fragment>
    );
}

export default Favorite;