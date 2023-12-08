import { combineReducers } from "@reduxjs/toolkit";
import dataSlice from "./slices/dataSlice";
import authSlice from "./slices/authSlice"


export const reducers = combineReducers({

    data: dataSlice,
    auth:authSlice
})