import { put, call, takeLatest } from 'redux-saga/effects';
import { navigate } from '@reach/router';
import { signIn } from '../App/action';
import { appHeader } from '../../helpers/variables';
import Swal from 'sweetalert2';
import axios from 'axios';

const loginRequest = (data) => {
  return axios.request({
    method: 'POST',
    headers: appHeader,
    url: 'https://server.lifepotin.scrum-dev.com/api/functions/login',
    data: {
      username: data.email,
      password: data.password
    }
  });
};

export function* login(action) {
  try {
    const loginUser = yield call(loginRequest, action.data);
    const currentUser = loginUser.data.result;

    yield put(signIn(currentUser));

    if (currentUser.isFilledProfile) {
      navigate('user');
    } else {
      navigate('information');
    }
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

export function* signInWatcher() {
  yield takeLatest('SIGN_IN_REQUEST', login);
}