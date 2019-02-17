import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Ranking from './components/Ranking';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/all">All Categories</Link></li>
          <li><Link to="/category/2502">PCs, AVs</Link></li>
          <li><Link to=""></Link></li>
        </ul>
      </div>
    );
  }
}

export default App;
