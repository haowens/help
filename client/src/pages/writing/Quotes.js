import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useLocation, useNavigate} from 'react-router-dom';

const Quotes = () => {
    const [quotes, setQuotes] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const bookId = location.pathname.split("/")[2];

    useEffect(() => {
        const fetchAllQuotes = async () => {
            try {
                const res = await axios.get("http://localhost:8800/quotes");
                setQuotes(res.data);
            } catch(err) {
                console.log(err);
            }
        };
        fetchAllQuotes();
    }, []);

    return(
         <div>
         <h1>Quotes</h1>
         <div className="books">
         {quotes.map((quote) => (
            <div>
            {(quote.id == bookId) && 
                <div className='quotes'>
                    {quote.q1 && <p>{quote.q1}</p>}
                    {quote.q2 && <p>{quote.q2}</p>}
                    {quote.q3 && <p>{quote.q3}</p>}
                </div>}
            </div>
         ))}
         </div>
         <button className='addb'><Link to={'/favorite'}>back</Link></button>
         </div>
     )
}

export default Quotes; 