import axios from "axios";

export class CallApi {

    static TIMEOUT_DURATION = 5000;

    static handleAxiosError(error) {
        // if (error.code === 'ECONNABORTED') {
        //     error.message = "Request timed out. Please try again.";
        // } else if (error.response && error.response.status === 401 && window.location.pathname !== APP_URL.LOGIN) {
        //     sessionStorage.clear();
        //     // toast.error("Please login again !");
        //     // window.location.href = APP_URL.LOGIN;
        // }
        // throw error;
    }

    static GET = (url, params, token) => {
        let headers = {};
        if (token) {
            headers = {
                Authorization: `Bearer ${token}`,
            };
        }
        return  axios({
            method: 'GET',
            url,
            headers,
            params,
            timeout: CallApi.TIMEOUT_DURATION
        }).catch(CallApi.handleAxiosError);
    }

    static POST(url, data, token) {
        let headers = {};
        if (token) {
            headers = {
                Authorization: `Bearer ${token}`,
            };
        }
        return axios({
            method: 'POST',
            url,
            headers,
            data,
            timeout: CallApi.TIMEOUT_DURATION
        }).catch(CallApi.handleAxiosError);
    }

    static PUT(url, data, token) {
        let headers = {};
        if (token) {
            headers = {
                Authorization: `Bearer ${token}`,
            };
        }
        return axios({
            method: 'PUT',
            url,
            headers,
            data,
            timeout: CallApi.TIMEOUT_DURATION
        }).catch(CallApi.handleAxiosError);
    }

    static PATCH(url, data, token) {
        let headers = {};
        if (token) {
            headers = {
                Authorization: `Bearer ${token}`,
            };
        }
        return axios({
            method: 'PATCH',
            url,
            headers,
            data,
            timeout: CallApi.TIMEOUT_DURATION
        }).catch(CallApi.handleAxiosError);
    }

    static DELETE(url, data, token) {
        let headers = {};
        if (token) {
            headers = {
                Authorization: `Bearer ${token}`,
            };
        }
        return axios({
            method: 'DELETE',
            url,
            headers,
            data,
            timeout: CallApi.TIMEOUT_DURATION
        }).catch(CallApi.handleAxiosError);
    }
}