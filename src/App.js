import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import MainSection from './components/MainSection';
import Eat from './components/pages/Eat';
import Drink from './components/pages/Drink';
import Sleep from './components/pages/Sleep';
import Study from './components/pages/Study';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Switch>
            <Route path ='/Home' exact component = {Home} />
            <Route path ='/Eat' exact component = {Eat} />
            <Route path ='/Drink' exact component = {Drink} />
            <Route path ='/Sleep' exact component = {Sleep} />
            <Route path ='/Study' exact component = {Study} />
          </Switch>
      </Router>

    </>
  );
}

export default App;
