import React, { Component } from 'react';
import './App.css';
import Dragon from './Dragon';
import Nav from './Nav';
import Form from './Form';

class App extends Component {

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
           <Form />
          </div>
          <div className="col-12 col-md-8">
            <Nav />
            <Dragon />
          </div>
        </div>
      </div>
    )
  }
}


export default App;