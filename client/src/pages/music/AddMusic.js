import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddMusic = () => {
    const [mix, setMix] = useState({
        title: "",
        url: "",
        image: "",
        music: 0
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setMix((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async (e) => {
       e.preventDefault(); 
       try{
        await axios.post("http://localhost:8800/music", mix);
        navigate("/");
       } catch(err) {
        console.log(err);
       }
    };

    const linkStyle = {
        padding: "5px 40px",
        background: "black",
        textDecoration: "none",
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
        fontFamily: "Merriweather",     
    };

    return (
        <div className='form'>
            <h2 className="addh">add new album/podcast/movie/idk</h2>
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
            <input 
                type="int" 
                placeholder="is music?" 
                onChange={handleChange} 
                name="music"
            />
            <button style={linkStyle} onClick={handleClick}>submit</button>
        </div>
    )
}

export default AddMusic; 