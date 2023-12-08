import { call, put, takeLatest } from 'redux-saga/effects';
// import { CallApi.LOGIN } from './../api/callApi';
import { loginStart, loginSuccess, loginFailure } from '../slices/authSlice';


const LOGIN_API_URL = 'https://dummyjson.com/auth/login';

function* loginSaga(action) {
  try {
    yield put(loginStart());

    const response = yield call(fetch, LOGIN_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: action.payload.username,
        password: action.payload.password,
      }),
    });

    if (!response.ok) {
      const errorData = yield response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    const data = yield response.json();
    
    const token = data.token;

    yield put(loginSuccess(token));
  } catch (error) {
    yield put(loginFailure(error.message || 'Login failed'));
  }
}

function* authSaga() {
  yield takeLatest('auth/loginStart', loginSaga);
}

export default authSaga;
