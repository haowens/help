import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();
    
    const handleFave = () => {
        navigate("/favorite");
    }

    const handlePend = () => {
        navigate("/");
    }
    
    return(
        <div className='nav'>        
            <button className="navb" onClick={handlePend}>
                Pending
            </button>    
            <button className="navb" onClick={handleFave}>
                Favorite
            </button>
        </div>
    );
}

export default NavBar;