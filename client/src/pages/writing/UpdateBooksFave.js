import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateBooksFave = () => {
    const [book, setBook] = useState({
        title: "",
        author: "",
        url: "",
        cover: ""
    });

    const navigate = useNavigate();
    const location = useLocation();
    const bookId = location.pathname.split("/")[2];

    const handleChange = (e) => {
        setBook((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async (e) => {
       e.preventDefault(); 
       try{
        await axios.put("http://localhost:8800/booksfave/" + bookId, book);
        navigate("/favorite");
       } catch(err) {
        console.log(err);
       }
    };

    return (
        <div className='form'>
            <h1>Update Book</h1>
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
            <button className="addb" onClick={handleClick}>Update</button>
        </div>
    )
}

export default UpdateBooksFave; 