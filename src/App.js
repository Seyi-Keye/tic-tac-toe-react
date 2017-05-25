import React, { Component } from 'react';
// import { Registration } from './components/Registration';
// import { NavBar } from './components/NavBar';
import { Board } from './components/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<NavBar />*/}
        <Board />
        {/*<Registration />*/}
      </div>
    );
  }
}

export default App;
