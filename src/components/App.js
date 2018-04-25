import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/App.css';
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './home';
import Chat from './chat';
import Nav from './nav';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Nav />
        <Route exact path='/' component={Home} />
        <Route path='/chat' component={Chat} />
      </div>
    );
  }
}

export default App;
