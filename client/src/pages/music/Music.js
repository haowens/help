import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Music = () => {
    const [music, setMusic] = useState([]);


    useEffect(() => {
        const fetchAllMusic = async () => {
            try {
                const res = await axios.get("http://localhost:8800/music");
                setMusic(res.data);
            } catch(err) {
                console.log(err);
            }
        };
        fetchAllMusic();
    }, []);

    const handleDelete = async (id) => {
        try{
            await axios.delete("http://localhost:8800/music/"+id)
            window.location.reload()
            //needs work
        } catch(err) {
            console.log(err)
        }
    }

    const linkStyle = {
        border: "2px solid rgb(47, 10, 167)",
        padding: "10px 40px",
        background: "antiquewhite",
        textDecoration: "none",
        color: "black",
        fontSize: "20px",
        fontWeight: "bold",
        margin: "20px",
        fontFamily: "Merriweather"
    };

    return (
        <div>
            <Link to="/addmusic" style={linkStyle}>new</Link>
            <div className="books">
                {music.map((mix) => (         
                <div>
                    {(mix.music === 1) && (
                        <div className="book">
                        {mix.image && <img src={mix.image} alt=""/> }
                            <div className='title-url'>
                                <h2>{mix.title}</h2>
                                <a href={mix.url} target="_blank" rel="noreferrer">{mix.url}</a>
                            </div>   
                            <div className='writing-buttons'> 
                                <button className="delete" onClick={()=> handleDelete(mix.id)}>delete</button>
                            </div>
                        </div>)} 
   
                    {!mix.music && (
                    <div className="notbook">
                        {mix.image && <img src={mix.image} alt=""/> }
                            <div className='title-url'>
                                <h2>{mix.title}</h2>
                                <a href={mix.url} target="_blank" rel="noreferrer">{mix.url}</a>
                            </div>   
                            <div className='writing-buttons'> 
                                <button className="delete" onClick={()=> handleDelete(mix.id)}>delete</button>
                            </div>
                    </div>)}
                 </div>
                ))}
            </div>
        </div>
    )
}

export default Music; 