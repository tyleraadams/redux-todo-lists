import React, { Component } from 'react';
import ListIndexContainer from '../../containers/ListIndexContainer/ListIndexContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Your To Do Lists</h1>
        <ListIndexContainer />
      </div>
    );
  }
}

export default App;
