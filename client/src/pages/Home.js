import React, { useState } from "react"
import Books from "./writing/Books";
import Music from "./music/Music";

const Home = () => {
    const [writing, setWriting] = useState(true);
    const [music, setMusic] = useState(false);

    const handleMusi = () => {
        setMusic(true);
        setWriting(false);
    }

    const handleWrit = () => {
        setWriting(true);
        setMusic(false);
    }

    return(
        <React.Fragment> 
            <div className="home1">
                {writing &&
                    <div className='nav'>               
                        <button className="navbactive" onClick={handleWrit}>
                            writing
                        </button>    
                        <button className="navbnotactive" onClick={handleMusi}>
                            music?
                        </button>
                    </div>    
                }
                {music &&
                    <div className='nav'>               
                        <button className="navbnotactive" onClick={handleWrit}>
                            writing
                        </button>    
                        <button className="navbactive" onClick={handleMusi}>
                            music?
                        </button>
                    </div>    
                }
                {writing && <Books/>}
                {music && <Music/>}
            </div>
        </React.Fragment>  
    );
}

export default Home;