import { combineReducers } from "@reduxjs/toolkit";
import dataSlice from "./slices/dataSlice";


export const reducers = combineReducers({

    data: dataSlice
})