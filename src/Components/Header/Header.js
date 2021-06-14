import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import ball from './ball.png'
import './Header.css'

const Header = () => {

return(
    <div className="navbar">
        <Link to={`/`} className="ballLink"><img src={ball} className='ball'></img></Link>
        <button className="botun">Login</button>
    </div>
)
}
export default Header;