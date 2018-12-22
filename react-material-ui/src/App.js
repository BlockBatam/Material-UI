import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.css';

import Pages from './components/Pages/Pages';
import Link from './components/contens/Link';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Pages />
        <Link />
        
      </div>
    );
  }
}

export default App;
 