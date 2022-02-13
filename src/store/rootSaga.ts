import {all} from 'redux-saga/effects'
import {homePageWatcher} from "../components/Conetent/pages/Home/homePageSaga";
import {currenciesWatcher} from "../components/Conetent/pages/Currencies/currenciesSaga";

export function* rootSaga() {
    yield all([
        homePageWatcher(),
        currenciesWatcher(),
    ]);
}