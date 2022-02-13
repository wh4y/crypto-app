import {useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../../store/store";
import {getCryptoStats} from "../../../../../store/reducers/homePageReducer/actionCreators/cryptoStats";
import {createSelector} from "@reduxjs/toolkit";
import selectCryptoStats from "../selectors/selectCryptoStats";

export default () => {
    const selectStats = selectCryptoStats();

    let stats = useSelector(selectStats, shallowEqual);

    const isEmpty = stats.totalCoins === 0;

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (isEmpty) dispatch(getCryptoStats(null));
    }, [isEmpty]);

    stats = useSelector(selectStats);

    return stats;
}