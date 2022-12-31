import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
    const [book, setBook] = useState({
        title: "",
        author: "",
        url: "",
        cover: "",
        book: 0
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async (e) => {
       e.preventDefault(); 
       try{
        await axios.post("http://localhost:8800/books", book);
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
            <h2 className='addh'>add new book or article</h2>
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
            <input 
                type="int" 
                placeholder="is book?" 
                onChange={handleChange} 
                name="book"
            />
            <button style={linkStyle} onClick={handleClick}>submit</button>
        </div>
    )
}

export default Add; 