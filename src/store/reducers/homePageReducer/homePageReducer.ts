import {createReducer} from "@reduxjs/toolkit";
import {HomePageState} from "./types/reducerTypes";
import {
    SET_CRYPTO_STATS,
    SetCryptoStatsAction,
    WAIT_CRYPTO_STATS,
    WaitCryptoStatsAction
} from "./actionCreators/cryptoStats";

const initialState: HomePageState = {
    cryptoStats: {
        total: 0,
        total24hVolume: '',
        totalCoins: 0,
        totalExchanges: 0,
        totalMarketCap: '',
        totalMarkets: 0,
        loading: false,
    }
};

export const homePageReducer = createReducer(
    initialState
    , {
        [SET_CRYPTO_STATS]: (state, {payload}: SetCryptoStatsAction) => {
            state.cryptoStats = payload;
        },
        [WAIT_CRYPTO_STATS]: (state, {payload}: WaitCryptoStatsAction) => {
            state.cryptoStats.loading = payload;
        },
    }
);