import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import './Home.css';
import { ItemContext } from '../Context';
import calendar from './calendar.png';
import soccer from './soccer.png';
import goal from './goal.png'

const Home = () => {
    const {data} = useContext(ItemContext);
return(
    <div className="home">
        <div className="karticaTermin">
            <p>Odigrani termini</p>
            <p>{data.termini}</p>
            <img src={calendar}></img>
        </div>
        <div className="karticaUtakmica">
            <p>Odigrani utakmice</p>
            <p>{data.utakmice}</p>
            <img src={soccer}></img>
        </div>
        <div className="karticaPregled">
            <p>Broj golova</p>
            <p>{data.goloviTotal}</p>
            <img src={goal}></img>
        </div>
    </div>
)
}
export default Home;