import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

export default class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Router>
          <Route path='/' exact component={Home} />
          <Route path='/' component={About} />
        </Router>
      </div>
    )
  }
}

