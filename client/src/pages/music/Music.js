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
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1>Music</h1>
            <div className="music">
                {music.map((mix) => (
                <div className="mix">
                    {mix.image && <img src={mix.image} alt=""/> }
                    <div className='title-url'>
                        <h2>{mix.title}</h2>
                        <a href={mix.url} target="_blank">{mix.url}</a>
                    </div>   
                    <div className='music-buttons'> 
                        <button className="delete" onClick={()=> handleDelete(mix.id)}>Delete</button>
                        <button className="update"><Link to={`/updatemusic/${mix.id}`}>Update</Link></button>
                    </div>
                 </div>
                ))}
            </div>
            <button className='addb'>
                <Link to="/addmusic">Add new mix</Link>
            </button>    
        </div>
    )
}

export default Music; 