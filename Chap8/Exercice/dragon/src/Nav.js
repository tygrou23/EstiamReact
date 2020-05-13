import React, { Component } from 'react';
import { connect } from 'react-redux'; // subscribe dans le redux pour lire et exécuter une action

class Nav extends Component {

    render() {

        const { count, children } = this.props;

        return (
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">
                    <a  className="navbar-brand d-flex align-items-center">
                        <strong>Dragon List, number of dragon(s) TODO {count}</strong>
                    </a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => { return { dragons: state.dragons } };

export default connect(mapStateToProps)(Nav);