import { all, takeLatest } from 'redux-saga/effects'
import { fetchDataSaga } from './sagas/dataSaga'
import { loginUser } from './../../services/auth.service';


export function* sagas() {
    yield all([
        takeLatest('data/fetchData', fetchDataSaga),
        takeLatest('user/loginSuccessful', loginUser),
    ]
    )
}