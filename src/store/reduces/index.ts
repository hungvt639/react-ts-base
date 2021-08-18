import { combineReducers } from "redux";
import { Action, AppState } from "../appstate";
import { ReducersMapObject } from "redux";
import dataTestReduce from "./dataTestReducer";
const map: ReducersMapObject<AppState, Action> = {
    dataTest: dataTestReduce,
};
const reducer = combineReducers(map);
export default reducer;
