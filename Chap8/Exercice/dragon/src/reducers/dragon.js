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

            return {
                ...state
            }

        default:
            return state;
    }
}