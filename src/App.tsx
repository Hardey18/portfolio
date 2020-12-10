import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Routes/Home';
import About from './components/Routes/About';
import Contact from './components/Routes/Contact';
import Experience from './components/Routes/Experience';
import Portfolio from './components/Routes/Portfolio';
import Header from './components/Header';
import Movie from './components/Routes/portfolio/Movie';
import Factory from './components/Routes/portfolio/Factory';
import StarWars from './components/Routes/portfolio/StarWars';

function App() {
  return (
    <>
      <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/experience" component={Experience} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/portfolio/movie" component={Movie} />
                <Route exact path="/portfolio/factory" component={Factory} />
                <Route exact path="/portfolio/starwars" component={StarWars} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
