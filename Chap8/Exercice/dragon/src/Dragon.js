import React, { Component } from 'react';
import { connect } from 'react-redux'; // subscribe dans le redux pour lire et exécuter une action
import { ADD_DRAGON } from './constants/actions';

class Dragon extends Component {

    render() {

        // Afficher la liste des dragons
        
        const { dragons } = this.props;

        return (
            <h2>Liste des dragons </h2>
        )
    }
}

// lecture du state => props lecture seule dans mon composant
const mapStateToProps = state => { return { dragons : state.dragons  } };

const mapDispatchToProps = dispatch => {

    return {
        add : dragon => dispatch({ 
            type : ADD_DRAGON, 
            dragon 
        }),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dragon);
