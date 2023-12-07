// dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    status: 'idle',
    error: null,
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        fetchData: (state, action) => {
            console.log('fetching', action, state)
            state.status = 'loading';
        },
        fetchDataSuccess: (state, action) => {
            console.log('fetch success')
            state.status = 'succeeded';
            console.log(action.payload);
            state.data = action.payload.products
        },
        fetchDataError: (state, action) => {
            console.log('fetch failed')
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

export const { fetchData, fetchDataSuccess, fetchDataError } = dataSlice.actions;
export default dataSlice.reducer;
