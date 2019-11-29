import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appReducer from './containers/App/appReducer';

const createReducer = () => {
  const rootReducer = combineReducers({
    user: appReducer,
    form: formReducer
  });
  return rootReducer;
};
export default createReducer;