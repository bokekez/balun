import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { ItemContext } from '../Context';
// import './Pregled.css'

const Login = () => {

return(
    <div className="termini">
        <form>
            <label>Username:</label>
            <input/>
            <label>Password:</label>
            <input/>
        </form>
    </div>
)
}

export default Login;