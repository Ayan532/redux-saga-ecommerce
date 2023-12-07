import { call, put } from "redux-saga/effects";
import { CallApi } from "./api/callApi";
import { API_URL } from "../../../config";
import { fetchDataError, fetchDataSuccess } from "../../redux/slices/dataSlice";



export function* fetchDataSaga(data) {
    try {
        let link;
        if(data.payload){
            link=`${API_URL.ALL_PRODUCTS}/search?q=${data.payload}`
        }else{

            link=`${API_URL.ALL_PRODUCTS}`
        }
        const response = yield call(CallApi.GET,link );
        console.log(response)
        yield put(fetchDataSuccess(response.data));
    } catch (error) {
        yield put(fetchDataError(error.message));
    }
}
