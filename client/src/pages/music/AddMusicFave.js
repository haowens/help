import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddMusicFave = () => {
    const [mix, setMix] = useState({
        title: "",
        url: "",
        image: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setMix((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async (e) => {
       e.preventDefault(); 
       try{
        await axios.post("http://localhost:8800/musicfave", mix);
        navigate("/favorite");
       } catch(err) {
        console.log(err);
       }
    };

    return (
        <div className='form'>
            <h1>Add New Mix</h1>
            <input 
                type="text" 
                placeholder="title" 
                onChange={handleChange} 
                name="title"
            />
            <input 
                type="text" 
                placeholder="url" 
                onChange={handleChange} 
                name="url"
            />
            <input 
                type="text" 
                placeholder="image" 
                onChange={handleChange} 
                name="image"
            />
            <button className="addb" onClick={handleClick}>Add</button>
        </div>
    )
}

export default AddMusicFave; 