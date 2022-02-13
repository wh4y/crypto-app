import {CryptoStats} from "../types/reducerTypes";
import {createRoutine} from "../../../../Packages/createRoutine";

export const getCryptoStats = createRoutine<null, CryptoStats, any, boolean>('GET_CRYPTO_STATS');

export type SetCryptoStatsAction = ReturnType<typeof getCryptoStats.success>;
export type WaitCryptoStatsAction = ReturnType<typeof getCryptoStats.pending>;

export const GET_CRYPTO_STATS = getCryptoStats.TRIGGER;
export const WAIT_CRYPTO_STATS = getCryptoStats.PENDING;
export const SET_CRYPTO_STATS = getCryptoStats.SUCCESS;