import { put, call, takeLatest } from 'redux-saga/effects';
import Swal from 'sweetalert2';
import axios from 'axios';
import { appHeader } from '../../helpers/variables';
import { signIn } from '../App/action';

// Gọi API upload avatar
const uploadAvatarRequest = ({ avatar }) => {
  let formData = new FormData();
  formData.append('file', avatar);
  formData.append('type', 'AVATAR');

  return axios.request({
    method: 'POST',
    headers: { ...appHeader, 'Content-Type': 'multipart/form-data' },
    url: 'https://server.lifepotin.scrum-dev.com/api/upload/uploadImage',
    data: formData
  });
};

// Gọi API upload certificate
const uploadCertificateRequest = ({ avatar }) => {
  let formData = new FormData();
  formData.append('file', avatar);
  formData.append('type', 'CERTIFICATE');

  return axios.request({
    method: 'POST',
    headers: { ...appHeader, 'Content-Type': 'multipart/form-data' },
    url: 'https://server.lifepotin.scrum-dev.com/api/upload/uploadImage',
    data: formData
  });
};

// Gọi API update profile của user
const updateProfileRequest = ({ dateOfBirth, gender, sessionToken, avatarId, JLPTCertificateImageId, introVideoId }) => {
  return axios.request({
    method: 'POST',
    headers: { ...appHeader, 'X-Parse-Session-Token': `${sessionToken}` },
    url: 'https://server.lifepotin.scrum-dev.com/api/functions/updateProfile',
    data: {
      dateOfBirth, gender, avatarId, JLPTCertificateImageId, introVideoId,
      university: 'Huflit',
      department: 'Huflit',
      degree: 'Huflit',
      universityStartDate: '1998/02',
      JLPTLevel: 'Advance',
      JLPTScore: 27,
      universityEndDate: '2019/02',
      isFilledProfile: true
    }
  });
};

export function* updateProfile(action) {
  try {
    const avatar = yield call(uploadAvatarRequest, action.data);
    const certificate = yield call(uploadCertificateRequest, action.data);
    const userInfo = {
      ...action.data,
      avatarId: avatar.data.objectId,
      JLPTCertificateImageId: certificate.data.objectId
    };

    const user = yield call(updateProfileRequest, userInfo);

    yield put(signIn(user.data.result));
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

export function* updateProfileWatcher() {
  yield takeLatest('UPDATE_PROFILE_REQUEST', updateProfile);
}