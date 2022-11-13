import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const BooksFave = () => {
    const [booksfave, setBooksfave] = useState([]);

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8800/booksfave");
                setBooksfave(res.data);
            } catch(err) {
                console.log(err);
            }
        };
        fetchAllBooks();
    }, []);

    const handleDelete = async (id) => {
        try{
            await axios.delete("http://localhost:8800/booksfave/"+id)
            window.location.reload()
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1>Writing</h1>
            <div className="books">
                {booksfave.map((book) => (
                <div className="book">
                    {book.cover && <img src={book.cover} alt=""/> }
                    <div className='title-url'>
                        <h2>{book.title}</h2>
                        <p>{book.author}</p>
                        <a href={book.url} target="_blank" rel="noreferrer">{book.url}</a>
                    </div>    
                    <div className='music-buttons'>
                        <button className="delete" onClick={()=> handleDelete(book.id)}>delete</button>
                        <button className="update"><Link to={`/updatebooksfave/${book.id}`}>update</Link></button>
                        <button className='quotes'>quotes</button>
                    </div>
                 </div>
                ))}
            </div>
            <button className='addb'>
                <Link to="/addbooksfave">add new article</Link>
            </button>    
        </div>
    )
}

export default BooksFave; 