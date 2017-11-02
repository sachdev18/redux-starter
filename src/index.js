import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import clickReducer from './reducers/click_reducer'
import App from './components/app';
// import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(clickReducer)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

