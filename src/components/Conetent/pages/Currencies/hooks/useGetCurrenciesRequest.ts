import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../../../../store/store";
import {getCurrencies} from "../../../../../store/reducers/currenciesPageReducer/actionCreators/currencies";
import selectCurrencies from "../selectors/selectCurrencies";


export default (simplified: boolean) => {

    const selectCurrenciesData = selectCurrencies(simplified);
    
    let currenciesData = useSelector(selectCurrenciesData);

    const isSimplifiedAndEmpty = simplified && currenciesData.currencies.length < 10;
    const isNotSimplifiedAndEmpty = !simplified && currenciesData.currencies.length < 100;
    const shouldFetch = isNotSimplifiedAndEmpty || isSimplifiedAndEmpty;

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (shouldFetch) dispatch(getCurrencies(null));
    }, [shouldFetch]);

    currenciesData = useSelector(selectCurrenciesData);

    return currenciesData;
}