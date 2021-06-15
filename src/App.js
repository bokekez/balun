import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, HashRouter, useHistory, useParams } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Termini from './Components/Termini/Termini';
import Uktamice from './Components/Utakmice/Utakmice';
import Pregled from './Components/Pregled/Pregled';
import Login from './Components/Login/Login';
import Unos from './Components/Unos/Unos';
import { useState } from 'react';
import { ItemContext } from './Components/Context';

function App() {
  const [data, setData] = useState({
    termini: 0,
    utakmice: 0,
    goloviTotal: 0
  });
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <ItemContext.Provider value={{data, setData}}>
          <Header/>
          <Route exact={true} path="/" render={() =>(
            <Home/>
          )}/>
          <Route exact={true} path="/termini" render={() =>(
            <Termini/>
          )}/>
          <Route exact={true} path="/utakmice" render={() =>(
            <Uktamice/>
          )}/>
          <Route exact={true} path="/pregled" render={() =>(
            <Pregled/>
          )}/>
          <Route exact={true} path="/login" render={() =>(
            <Login/>
          )}/>
          <Route exact={true} path="/login" render={() =>(
            <Unos/>
          )}/>
        </ItemContext.Provider>
      </div>
    </Router>
  );
}

export default App;
