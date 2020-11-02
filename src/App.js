import React from 'react';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import './App.css';
import ArticleListing from './containers/ArticleListing';
import Article from './containers/Article';
import Home from './containers/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Route to home */}
          <Route path="/home/">
            <Home />
          </Route>
          {/* Route to articles listing */}
          <Route path ="/article/">
            <ArticleListing />
          </Route>
          {/* Route to individual articles page */}
          <Route path="/article/:id">
            <Article />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
