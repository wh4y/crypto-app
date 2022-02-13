import {Coin} from "../types/reducerTypes";
import {createRoutine} from "../../../../Packages/createRoutine";

export const getCurrencies = createRoutine<null, Coin[], any, boolean>('GET_CURRENCIES');

export type SetCurrenciesAction = ReturnType<typeof getCurrencies.success>;
export type GetCurrenciesAction = ReturnType<typeof getCurrencies>;
export type WaitCurrenciesAction = ReturnType<typeof getCurrencies.pending>;

export const GET_CURRENCIES = getCurrencies.TRIGGER;
export const WAIT_CURRENCIES = getCurrencies.PENDING;
export const SET_CURRENCIES = getCurrencies.SUCCESS;
//-------------------------------------------------------------------------------------------------------------

export const simplifyCurrencyList = createRoutine<null>('GET_CURRENCIES');

export const SIMPLIFY_CURRENCY_LIST = simplifyCurrencyList.TRIGGER;
