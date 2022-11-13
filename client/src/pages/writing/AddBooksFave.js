import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddBooksFave = () => {
    const [book, setBook] = useState({
        title: "",
        author: "",
        url: "",
        cover: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async (e) => {
       e.preventDefault(); 
       try{
        await axios.post("http://localhost:8800/booksfave", book);
        navigate("/favorite");
       } catch(err) {
        console.log(err);
       }
    };

    return (
        <div className='form'>
            <h1>Add New Book</h1>
            <input 
                type="text" 
                placeholder="title" 
                onChange={handleChange} 
                name="title"
            />
            <input 
                type="text" 
                placeholder="author" 
                onChange={handleChange} 
                name="author"
            />
            <input 
                type="text" 
                placeholder="url" 
                onChange={handleChange} 
                name="url"
            />
            <input 
                type="text" 
                placeholder="cover" 
                onChange={handleChange} 
                name="cover"
            />
            <button className="addb" onClick={handleClick}>Add</button>
        </div>
    )
}

export default AddBooksFave; 