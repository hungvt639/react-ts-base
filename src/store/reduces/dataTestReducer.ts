import {ADDITION_COUNR_ONE, SUBTRACTION_COUNR_ONE, RESET_COUNT} from "../const";
import { Reducer } from "redux";
import { Action } from "../appstate";
import { DataTest } from "../../interface";
const initialState: DataTest = {
    count: 0
};
const dataTestReduce: Reducer<DataTest, Action> = (
    state: DataTest = initialState,
    action: Action
): DataTest => {
    switch (action.type) {
        case ADDITION_COUNR_ONE:
            return {
                ...state,
                count: state.count + 1,
            };
        case SUBTRACTION_COUNR_ONE:
            return {
                ...state,
                count: state.count - 1,
            };
        case RESET_COUNT:
            return{
                ...state, count: 0
            }
        default:
            return state;
    }
};
export default dataTestReduce;
