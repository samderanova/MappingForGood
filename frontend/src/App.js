import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Map from './components/Map';
import Home from './components/Home/Home';
import './App.css';

export default class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Router>
          <AppBar position="relative">
            <Toolbar>
              <Link to="/">
                <Typography variant="h5"><strong>MappingForGood</strong></Typography>
              </Link>
              <Link to='/map'>
                <Typography variant="h6">The Map</Typography>
              </Link>
            </Toolbar>
          </AppBar>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={Map} />
        </Router>
      </div>
    )
  }
}

