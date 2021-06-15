import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { ItemContext } from '../Context';
// import './Pregled.css'

const Unos = () => {

return(
    <div className="termini">
        <form>
            <label>Termin:</label>
            <input/>
            <label>Igrači:</label>
            <input/>
        </form>
    </div>
)
}

export default Unos;