import { all } from 'redux-saga/effects';
import { signUpWatcher } from './containers/SignUp/sagas';
import { signInWatcher } from './containers/SignIn/sagas';
import { updateProfileWatcher } from './containers/Information/sagas';

export default function* rootSaga() {
  yield all([
    signUpWatcher(),
    signInWatcher(),
    updateProfileWatcher()
  ]);
};