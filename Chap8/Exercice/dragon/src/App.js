import React, { Component } from 'react';
import './App.css';

import Dragon from './Dragon';

// npm install redux  --save
// npm install react-redux --save

class App extends Component {

  render() {

    return (
      <>
        <p>Hello Dragon</p>
        <Dragon />
      </>
    )
  }
}


export default App;
