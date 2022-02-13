import {call, CallEffect, delay, put, PutEffect, takeLeading} from "redux-saga/effects";
import HomePageService from '../../../../services/coinrankingService/coinrankingService';
import {GetStatsResponse} from "../../../../services/coinrankingService/interface";
import {GET_CRYPTO_STATS, getCryptoStats} from "../../../../store/reducers/homePageReducer/actionCreators/cryptoStats";


function* homePageWorker(): Generator<CallEffect<GetStatsResponse> | PutEffect, void, GetStatsResponse> {
    try {

        yield put(getCryptoStats.pending(true));
        yield delay(200);
        const {data, status} = yield call(() => HomePageService.getStats());

        if (status !== 'success') throw new Error('Something went wrong!');

        yield put(getCryptoStats.pending(false));
        yield put(getCryptoStats.success(data));
    } catch (e) {
        console.log(e);
    }
}

export function* homePageWatcher() {
    yield takeLeading(GET_CRYPTO_STATS, homePageWorker);
}