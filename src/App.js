import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Ranking from './containers/Ranking';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/all">All Categories</Link></li>
          <li><Link to="/category/2502">Computers and Peripherals</Link></li>
          <li><Link to="/category/100002">Books, Magazines, Comics</Link></li>
        </ul>

        <Route path="/all" component={Ranking} />
        <Route
          path="/category/:id"
          render={
            ({ match }) => <Ranking categoryId={match.params.id} />
          }
        />
      </div>
    );
  }
}

export default App;
