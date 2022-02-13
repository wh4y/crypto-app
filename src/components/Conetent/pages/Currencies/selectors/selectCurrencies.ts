import {RootState} from "../../../../../store/store";
import {createSelector} from "reselect";
import {useMemo} from "react";

const currenciesSelector = (state: RootState) => state.currenciesPageReducer.currencies;
const isCurrenciesLoadingSelector = (state: RootState) => state.currenciesPageReducer.loading;

export default (simplified: boolean) => createSelector(
    [currenciesSelector, isCurrenciesLoadingSelector],
    (currencies, loading) => {

        const memoizedData = useMemo(() => currencies.slice(0, 10), [currencies]);

        if (simplified) return {
            currencies: memoizedData,
            loading,
        }

        return {
            currencies,
            loading,
        }
    });