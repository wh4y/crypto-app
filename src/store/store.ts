import {configureStore} from "@reduxjs/toolkit";
import {homePageReducer} from "./reducers/homePageReducer/homePageReducer";
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./rootSaga";
import {currenciesPageReducer} from "./reducers/currenciesPageReducer/currenciesPageReducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        homePageReducer,
        currenciesPageReducer,
    },
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;