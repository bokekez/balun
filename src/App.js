import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, HashRouter, useHistory, useParams } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
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
        </ItemContext.Provider>
      </div>
    </Router>
  );
}

export default App;
