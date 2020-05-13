import { ADD_DRAGON } from '../actions/actions-types';
import { combineReducers } from "redux";

const initialState = {
  dragons: ["Apalala", "Balaur", "Bolla"],
  count: 3
}

const rootReducer = combineReducers({ dragons: dragonReducer });

export default rootReducer;

/* export default */ function dragonReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DRAGON:
      console.log('action add dragon', action);
      return {
        dragons: [...state.dragons, action.payload],
        count: state.count++
      };
    default:
      return state;
  }
}