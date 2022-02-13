import {
    GET_CURRENCIES,
    getCurrencies,
    GetCurrenciesAction
} from "../../../../store/reducers/currenciesPageReducer/actionCreators/currencies";
import {call, CallEffect, delay, put, PutEffect, takeLeading} from 'redux-saga/effects';
import CoinrankingService from './../../../../services/coinrankingService/coinrankingService';
import {GetCoinsResponse} from "../../../../services/coinrankingService/interface";

function* currenciesWorker({payload}: GetCurrenciesAction): Generator<CallEffect<GetCoinsResponse> | PutEffect, void, GetCoinsResponse> {
    let count = payload ? 10 : 100;

    try {
        yield put(getCurrencies.pending(true));
        yield delay(200);
        const {status, data: {coins}} = yield call(() => CoinrankingService.getCoins(count));

        if (status !== 'success') throw new Error('Something went wrong!');

        yield put(getCurrencies.success(coins));
        yield put(getCurrencies.pending(false));
    } catch (e) {
        console.log(e);
    }
}

export function* currenciesWatcher() {
    yield takeLeading(GET_CURRENCIES, currenciesWorker);
}