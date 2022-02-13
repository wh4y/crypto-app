import {createReducer} from "@reduxjs/toolkit";
import CurrenciesPageState from "./types/reducerTypes";
import {SET_CURRENCIES, SetCurrenciesAction, WAIT_CURRENCIES, WaitCurrenciesAction} from "./actionCreators/currencies";

const initialState: CurrenciesPageState = {
    currencies: [],
    loading: false,
};

export const currenciesPageReducer = createReducer(
    initialState
    , {
        [SET_CURRENCIES]: (state, {payload}: SetCurrenciesAction) => {
            state.currencies = payload;
        },
        [WAIT_CURRENCIES]: (state, {payload}: WaitCurrenciesAction) => {
            state.loading = payload;
        },
    }
);