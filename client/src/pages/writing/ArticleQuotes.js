import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const ArticleQuotes = () => {
    const [quotes, setQuotes] = useState([]);
    const navigate = useNavigate(); 

    const linkStyle = {
        padding: "10px 40px",
        background: "black",
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: "Merriweather"
    };

    useEffect(() => {
        const fetchAllQuotes = async () => {
            try {
                const res = await axios.get("http://localhost:8800/article_quotes");
                setQuotes(res.data);
            } catch(err) {
                console.log(err);
            }
        };
        fetchAllQuotes();
    }, []);

    const handleDelete = async (id) => {
        try{
            await axios.delete("http://localhost:8800/article_quotes/"+id)
            window.location.reload()
        } catch(err) {
            console.log(err)
        }
    }

    const handleBack = () => {
        navigate("/");
    }

    return (
        <div className='articlequotes'>
            <div className='nav'>               
                <button className="navbactive" onClick={handleBack}>
                    ← back            
                </button>               
            </div>
            <div className="ac-title-button"> 
                <h2 className='ac'>article quotes</h2>
                <Link to="/addarticlequote" style={linkStyle}>new</Link>
            </div>
            <div className="quotes">
                {quotes.map((quote) => (
                <div className="quote">
                    <p className='text'>{quote.quote}</p>
                    <button className="delete" onClick={()=> handleDelete(quote.id)}>delete</button>
                 </div>
                ))}
            </div>
        </div>
    )
}

export default ArticleQuotes;