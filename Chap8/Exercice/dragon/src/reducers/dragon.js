import { ADD_DRAGON, DRAGON } from "../constants/actions";

const stateInit = {
    dragons: ["Apalala", "Balaur", "Bolla"],
    count: 0,
    dragon: ''
}

// reducer <=> Algorithmique de votre store
export default (state = stateInit, action = {}) => {

    switch (action.type) {

        case DRAGON:
            return {
                ...state, dragon: action.dragon
            }

        case ADD_DRAGON:
            const dragons = [ ...state.dragons, state.dragon ];
            const count = dragons.length;

            return {
                ...state,
                count : count,
                dragons : dragons,
                dragon : '' // mise à jour du champ de saisi
            }

        default:
            return state;
    }
}