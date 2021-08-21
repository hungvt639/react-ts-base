import { SET_USER, CLEAR_USER } from "../const";
import { Reducer } from "redux";
import { Action, UserState } from "../appstate";

const initialState: UserState = {};

const userReduce: Reducer<UserState, Action> = (
    state: UserState = initialState,
    action: Action
): UserState => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,
            };
        case CLEAR_USER:
            return {
                ...state,
                user: undefined,
            };
        default:
            return state;
    }
};
export default userReduce;
