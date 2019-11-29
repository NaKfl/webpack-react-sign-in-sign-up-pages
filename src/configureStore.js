import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import rootSaga from './rootSaga';

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    createReducer(),
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
  sagaMiddleware.run(rootSaga)
  return store;
};
export default configureStore;