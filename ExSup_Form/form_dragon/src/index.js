import React from 'react'
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from 'react-redux';
// import thunk from "redux-thunk";

import dragonReducer from "./reducer/dragonReducer";

import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
// const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(dragonReducer);


// const store = createStore(dragonReducer);

const render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

render()