import { ADD_DRAGON } from "../constants/actions";


const stateInit = {
    dragons: ["Apalala", "Balaur", "Bolla"],
    count: 0
}

// reducer <=> Algorithmique de votre store
export default (state = stateInit, action = {}) => {

    switch (action.type) {

        case ADD_DRAGON:

            console.log(action);

            return { ...state }

        default:
            return state;

    }

}