import {RootState} from "../../../../../store/store";
import {createSelector} from "@reduxjs/toolkit";


const statsSelector = (state: RootState) => state.homePageReducer.cryptoStats;
export default () => createSelector([statsSelector], (stats) => stats);