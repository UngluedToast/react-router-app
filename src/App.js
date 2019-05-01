import React from 'react';
import './App.css';
import Home from './home';
import About from './about';
import Rats from './rat';
import PageNotFound from './PageNotFound'
import Header from './Header'


import {
  Link,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <div className="App">

    <Header/>
    <br />
      <Link to="/">Home</Link>
    <br />
      <Link to="/Rats">Rats</Link>
    <br />
      <Link to="/About">About</Link>

      <Switch>
        <Route  exact path="/" component={Home}/>
        <Route path="/Rats" component={Rats}/>
        <Route path="/About" component={About}/>
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  );
}

export default App;
