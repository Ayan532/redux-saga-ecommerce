import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";


import { reducers } from "./redux";
import { sagas } from "./saga";


const saga = createSagaMiddleware();

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(saga),
})

saga.run(sagas);

export default store