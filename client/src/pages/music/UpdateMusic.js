import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateMusic = () => {
    const [mix, setMix] = useState({
        title: "",
        url: "",
        image: ""
    });

    const navigate = useNavigate();
    const location = useLocation();
    const mixId = location.pathname.split("/")[2];

    const handleChange = (e) => {
        setMix((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async (e) => {
       e.preventDefault(); 
       try{
        await axios.put("http://localhost:8800/music/" + mixId, mix);
        navigate("/");
       } catch(err) {
        console.log(err);
       }
    };

    return (
        <div className='form'>
            <h1>Update Mix</h1>
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
            <button className="addb" onClick={handleClick}>Update</button>
        </div>
    )
}

export default UpdateMusic; 