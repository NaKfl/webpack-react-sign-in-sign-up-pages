import { put, call, takeLatest } from 'redux-saga/effects';
import { signIn } from '../App/action';
import { navigate } from '@reach/router';
import { appHeader } from '../../helpers/variables';
import Swal from 'sweetalert2';
import axios from 'axios';

const signUpRequest = ({ firstName, lastName, email, password }) => {

  return axios.request({
    method: 'POST',
    headers: appHeader,
    url: 'https://server.lifepotin.scrum-dev.com/api/functions/userSignup',
    data: {
      firstName, lastName, email, password
    }
  });
};

export function* signUp(action) {
  try {
    const newUser = yield call(signUpRequest, action.data);
    yield put(signIn(newUser.data.result));
    navigate('information');
  } catch{
    Swal.fire({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 1500,
      icon: 'error',
      title: 'Somethings wrong ~ I do not know !' 
    })
  }
}

export function* signUpWatcher() {
  yield takeLatest('SIGN_UP_REQUEST', signUp);
}