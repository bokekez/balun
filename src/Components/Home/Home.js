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
    
    useEffect(() => {
        fetch('http://localhost:3000/', {
            method: 'get',
            headers: {'Content-Type': 'application/json, charset=UTF-8',
                        'Accept': 'application/json, text/html'}
            })
            .then(response => response.json())
            .then(response => {
                const temp = response.map(member => ({
                    'id': member.id,
                    'termin': member.termin,
                    "igrač1": member.igrač1,
                    "igrač1G": member.igrač1G
                }))
                console.log(temp);
            })
            
    }, [])

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