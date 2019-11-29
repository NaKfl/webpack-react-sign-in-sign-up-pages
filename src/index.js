import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
// Redux
// import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import createReducer from './reducers';
// import createSagaMiddleware from 'redux-saga';
import configureStore from './configureStore';
// Bootstrap
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
