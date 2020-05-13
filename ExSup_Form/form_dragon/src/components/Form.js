import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addDragon } from '../actions/dragonAction'

const mapDispatchToProps = { addDragon };

class Form extends Component {
    constructor(props) {
        super(props);
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(e);
        console.log(typeof e.target.name.value);
        if(e.target.name.value.length > 0 ) { this.props.addDragon(e.target.name.value) }
    }

    render() {
        // const { value, onIncrement, onDecrement } = this.props;
        return (
            <form onSubmit={e => this.onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="name">Ajoutez un dragon</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="add dragon..."
                    />
                </div>
                <button
                    type="submit"
                    class="btn btn-primary"
                    >
                    Add
                </button>
            </form>
        );
    }
}

export default connect(null, mapDispatchToProps)(Form);