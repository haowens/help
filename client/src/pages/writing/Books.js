import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const Books = () => {
    const [books, setBooks] = useState([]);

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

    const linkStyle2 = {
        border: "none",
        padding: "5px 22px",
        background: "black",
        textDecoration: "none",
        color: "white",
        fontSize: "14px",
        fontFamily: "Merriweather"
    };

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8800/books");
                setBooks(res.data);
            } catch(err) {
                console.log(err);
            }
        };
        fetchAllBooks();
    }, []);

    const handleDelete = async (id) => {
        try{
            await axios.delete("http://localhost:8800/books/"+id)
            window.location.reload()
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div>
            <Link to="/add" style={linkStyle}>new</Link>
            <div className="books">
                {books.map((book) => (         
                <div>
                    {(book.book === 1) && (
                    <div className="book">
                        {book.cover && <img src={book.cover} alt=""/> }
                        <div className='title-url'>
                            <h2>{book.title}</h2>
                            <p>{book.author}</p>
                            <a href={book.url} target="_blank" rel="noreferrer">{book.url}</a>
                        </div>    
                        <div className='writing-buttons'>
                            <Link to={"/quotes/" + book.id} style={linkStyle2}>quotes</Link>
                            <button className="delete" onClick={()=> handleDelete(book.id)}>delete</button>
                        </div>
                    </div>)} 
   
                    {!book.book && (
                    <div className="notbook">
                        {book.cover && <img src={book.cover} alt=""/> }
                        <div className='title-url'>
                            <h2>{book.title}</h2>
                            <p>{book.author}</p>
                            <a href={book.url} target="_blank" rel="noreferrer">{book.url}</a>
                        </div>    
                        <div className='writing-buttons'>
                            <Link to="/articlequotes" style={linkStyle2}>quotes</Link>
                            <button className="delete" onClick={()=> handleDelete(book.id)}>delete</button>
                        </div>
                    </div>)}
                 </div>
                ))}
            </div>
        </div>
    )
}

export default Books; 