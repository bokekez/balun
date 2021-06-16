import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { ItemContext } from '../Context';
// import './Pregled.css'

const Unos = () => {

return(
    <div className="termini">
        <form>
            <h3>Utakmica 1:</h3>
            <div>
                <h4>Ekipa 1</h4>
                <label>Igrači 1:</label>
                <input/>
                <label>Golovi:</label>
                <input/>
                <label>Igrači 2:</label>
                <input/>
                <label>Golovi:</label>
                <input/>
                <label>Igrači 3:</label>
                <input/>
                <label>Golovi:</label>
                <input/>
                <label>Igrači 4:</label>
                <input/>
                <label>Golovi:</label>
                <input/>
            </div>
            <div>
                <h4>Ekipa 2</h4>
                <label>Igrači 5:</label>
                <input/>
                <label>Golovi:</label>
                <input/>
                <label>Igrači 6:</label>
                <input/>
                <label>Golovi:</label>
                <input/>
                <label>Igrači 7:</label>
                <input/>
                <label>Golovi:</label>
                <input/>
                <label>Igrači 8:</label>
                <input/>
                <label>Golovi:</label>
                <input/>
            </div>
        </form>
    </div>
)
}

export default Unos;