import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DRAGON } from './constants/actions';
import './Form.css';

class Form extends Component {

    handleSubmit = e => {
        e.preventDefault();
    }

    handleChange = e => {
        const { value } = e.target;
        
        this.props.set(value);
    }

    render() {

        const { dragon } = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group Form-header">
                    <input
                        type="text"
                        className="form-control"
                        value={dragon}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        )
    }
}

const mapStateToProps = state => { return { dragon: state.dragon } };

const mapDispatchToProps = dispatch => {

    return {
        set: dragon => dispatch({
            type: DRAGON,
            dragon
        }),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);