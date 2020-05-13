import React, { Component } from 'react';
import { connect } from 'react-redux'; // subscribe dans le redux pour lire et exécuter une action
import PropTypes from 'prop-types';

class Dragon extends Component {

    render() {
        // Afficher la liste des dragons
        const { dragons } = this.props;

        return (
            <ul className="list-group">
                <li className="list-group-item reverse">
                    <button
                        onClick={this.handleReverse}
                        type="button" className="btn btn-primary push-right"
                    >Reverse</button>
                </li>
                {dragons.map((dragon, i) => (
                    <li key={i} className="list-group-item">{dragon}</li>
                ))}
            </ul>)
    }
}

Dragon.propTypes = {
    dragons: PropTypes.arrayOf(PropTypes.string)
}

// lecture du state => props lecture seule dans mon composant
const mapStateToProps = state => { return { dragons: state.dragons } };

export default connect(mapStateToProps)(Dragon);