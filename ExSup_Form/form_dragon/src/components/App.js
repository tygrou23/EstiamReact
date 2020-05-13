import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Dragon from './Dragon';
import Form from './Form';
import Nav from './Nav';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="container">
                <Nav />
                <div class="row">
                    <div class="col-12 col-md-4">
                    <Form />
                    </div>
                    <div class="col-12 col-md-8">
                        <Dragon />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;