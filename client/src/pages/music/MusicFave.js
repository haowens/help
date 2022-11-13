import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const MusicFave = () => {
    const [musicfave, setMusicfave] = useState([]);

    useEffect(() => {
        const fetchAllMusic = async () => {
            try {
                const res = await axios.get("http://localhost:8800/musicfave");
                setMusicfave(res.data);
            } catch(err) {
                console.log(err);
            }
        };
        fetchAllMusic();
    }, []);

    const handleDelete = async (id) => {
        try{
            await axios.delete("http://localhost:8800/musicfave/"+id)
            window.location.reload()
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1>Music</h1>
            <div className="music">
                {musicfave.map((mix) => (
                <div className="mix">
                    {mix.image && <img src={mix.image} alt=""/> }
                    <div className='title-url'>
                        <h2>{mix.title}</h2>
                        <a href={mix.url} target="_blank" rel="noreferrer">{mix.url}</a>
                    </div>   
                    <div className='music-buttons'> 
                        <button className="delete" onClick={()=> handleDelete(mix.id)}>delete</button>
                        <button className="update"><Link to={`/updatemusicfave/${mix.id}`}>update</Link></button>
                    </div>
                 </div>
                ))}
            </div>
            <button className='addb'>
                <Link to="/addmusicfave">add new mix</Link>
            </button>    
        </div>
    )
}

export default MusicFave; 