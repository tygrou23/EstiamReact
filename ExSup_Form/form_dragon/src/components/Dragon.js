import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


const mapStateToProps = (store) => { return { dragons: store.dragons, count: store.count }; };

class Dragon extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <ul className="list-group">
                {this.props.dragons.dragons.map(d => { // le premier "dragons" est le choix du reducer utilisé
                    return (
                        <li className="list-group-item">{d}</li>
                    )
                })}
            </ul>
        );
    }
}

export default connect(mapStateToProps)(Dragon);