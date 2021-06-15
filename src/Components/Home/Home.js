import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import './Home.css';
import { ItemContext } from '../Context';
import calendar from './calendar.png';
import soccer from './soccer.png';
import goal from './goal.png'

const Home = () => {
    const {data} = useContext(ItemContext);
    let history = useHistory();
    
    const handleTermin = () => {
        history.push('/termini');
    }

    const handleUtakmica = () => {
        history.push('/utakmice');
    }

    const handlePregled = () => {
        history.push('/pregled');
    }

return(
    <div className="home">
        <div className="karticaTermin" onClick={handleTermin}>
            <p>Odigrani termini</p>
            <p>{data.termini}</p>
            <div className="kartica">
                <img src={calendar} className="slika"></img>
                <p>Pregled</p>
            </div>
        </div>
        <div className="karticaUtakmica" onClick={handleUtakmica}>
            <p>Odigrani utakmice</p>
            <p>{data.utakmice}</p>
            <div className="kartica">
                <img src={soccer} className="slika"></img>
                <p>Pregled</p>
            </div>
        </div>
        <div className="karticaPregled" onClick={handlePregled}>
            <p>Broj golova</p>
            <p>{data.goloviTotal}</p>
            <div className="kartica">
                <img src={goal} className="slika"></img>
                <p>Pregled</p>
            </div>
        </div>
    </div>
)
}
export default Home;