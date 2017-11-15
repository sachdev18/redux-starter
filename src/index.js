import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import clickReducer from './reducers/click_reducer'
import App from './components/app';
import thunk from 'redux-thunk'
import { logger } from "redux-logger";
// import reducers from './reducers';

// const middleware = applyMiddleware()(createStore);
// const store = middleware(clickReducer)

const store = createStore(clickReducer, 0);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
