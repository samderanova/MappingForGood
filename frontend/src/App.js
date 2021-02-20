import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Map from './components/Map/Map';
import Home from './components/Home/Home';
import MessageBoard from './components/MessageBoard/MessageBoard'
import './App.css';
import Form from './components/Form/Form';

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
              <Link to='/help-form'>
                <Typography variant="h6">Help For Your Town</Typography>
              </Link>
              <Link to='/messageBoard'>
                <Typography variant="h6">Message Board</Typography>
              </Link>
            </Toolbar>
          </AppBar>
          <Route path='/' exact component={Home} />
          <Route path='/map' component={Map} />
          <Route path='/help-form' component={Form} />
          <Route path='/messageBoard' component={MessageBoard} />
        </Router>
      </div>
    )
  }
}

