import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { ItemContext } from '../Context';
// import './Pregled.css'

const Unos = () => {
    const [temp1, setTemp1] = useState({
        igrač1: '',
        igrač1Gol: 0,
    });
    const [temp2, setTemp2] = useState({
        igrač2: '',
        igrač2Gol: 0,
    });
    const [temp3, setTemp3] = useState({
        igrač3: '',
        igrač3Gol: 0,
    });
    const [temp4, setTemp4] = useState({
        igrač4: '',
        igra4Gol: 0,
    });
    const [temp5, setTemp5] = useState({
        igrač5: '',
        igrač5Gol: 0,
    });
    const [temp6, setTemp6] = useState({
        igrač6: '',
        igrač6Gol: 0,
    });
    const [temp7, setTemp7] = useState({
        igrač7: '',
        igrač7Gol: 0,
    });
    const [temp8, setTemp8] = useState({
        igrač8: '',
        igrač8Gol: 0,
    });
    const [ termin, setTermin] = useState({});

    const handleChange1 = (e) => {
        setTemp1({igrač1: e.target.value});
    }
    const handleChange2 = (e) => {
        setTemp2({igrač2: e.target.value});
    }
    const handleChange3 = (e) => {
        setTemp3({igrač3: e.target.value});
    }
    const handleChange4 = (e) => {
        setTemp4({igrač4: e.target.value});
    }
    const handleChange5 = (e) => {
        setTemp5({igrač5: e.target.value});
    }
    const handleChange6 = (e) => {
        setTemp6({igrač6: e.target.value});
    }
    const handleChange7 = (e) => {
        setTemp7({igrač7: e.target.value});
    }
    const handleChange8 = (e) => {
        setTemp8({igrač8: e.target.value});
    }
    const handleChange1G = (e) => {
        setTemp1({igrač1Gol: e.target.value});
    }
    const handleChange2G = (e) => {
        setTemp2({igrač2Gol: e.target.value});
    }
    const handleChange3G = (e) => {
        setTemp3({igrač3Gol: e.target.value});
    }
    const handleChange4G = (e) => {
        setTemp4({igrač4Gol: e.target.value});
    }
    const handleChange5G = (e) => {
        setTemp5({igrač5Gol: e.target.value});
    }
    const handleChange6G = (e) => {
        setTemp6({igrač6Gol: e.target.value});
    }
    const handleChange7g = (e) => {
        setTemp7({igrač7Gol: e.target.value});
    }
    const handleChange8G = (e) => {
        setTemp8({igrač8Gol: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const holder = {
            igrač1: temp1.igrač1,
            igrač1Gol: temp1.igrač1Gol,
            igrač2: temp2.igrač2,
            igrač2Gol: temp2.igrač2Gol,
            igrač3: temp3.igrač3,
            igrač3Gol: temp3.igrač3Gol,
            igrač4: temp4.igrač4,
            igra4Gol: temp4.igrač4Gol,
            igrač5: temp5.igrač5,
            igrač5Gol: temp5.igrač5Gol,
            igrač6: temp6.igrač6,
            igrač6Gol: temp6.igrač6Gol,
            igrač7: temp7.igrač7,
            igrač7Gol: temp7.igrač7Gol,
            igrač8: temp8.igrač8,
            igrač8Gol: temp8.igrač8Gol,
        }
        setTermin({holder})
    }
    //console.log(temp);
    console.log('1', termin);
return(
    <div className="termini">
        <form onSubmit={handleSubmit}>
            <h3>Utakmica 1:</h3>
            <div>
                <h4>Ekipa 1</h4>
                <label>Igrači 1:</label>
                <input onChange={handleChange1}/>
                <label>Golovi:</label>
                <input onChange={handleChange1G}/>
                <label>Igrači 2:</label>
                <input onChange={handleChange2}/>
                <label>Golovi:</label>
                <input onChange={handleChange2G}/>
                <label>Igrači 3:</label>
                <input onChange={handleChange3}/>
                <label>Golovi:</label>
                <input onChange={handleChange3G}/>
                <label>Igrači 4:</label>
                <input onChange={handleChange4}/>
                <label>Golovi:</label>
                <input onChange={handleChange4G}/>
            </div>
            <div>
                <h4>Ekipa 2</h4>
                <label>Igrači 5:</label>
                <input onChange={handleChange5}/>
                <label>Golovi:</label>
                <input onChange={handleChange5G}/>
                <label>Igrači 6:</label>
                <input onChange={handleChange6}/>
                <label>Golovi:</label>
                <input onChange={handleChange6G}/>
                <label>Igrači 7:</label>
                <input onChange={handleChange7}/>
                <label>Golovi:</label>
                <input onChange={handleChange7g}/>
                <label>Igrači 8:</label>
                <input onChange={handleChange8}/>
                <label>Golovi:</label>
                <input onChange={handleChange8G}/>
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
)
}

export default Unos;