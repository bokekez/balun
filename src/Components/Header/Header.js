import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import ball from './ball.png'
import './Header.css'

const Header = () => {
    let history = useHistory();

    const handleClick = () => {
        history.push('/login');
    }

return(
    <div className="navbar">
        <Link to={`/`} className="ballLink"><img src={ball} className='ball'></img></Link>
        <button className="botun" onClick={handleClick}>Login</button>
    </div>
)
}
export default Header;