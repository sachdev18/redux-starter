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

const store = createStore(clickReducer,

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));

