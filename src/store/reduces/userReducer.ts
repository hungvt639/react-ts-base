import { SET_USER, CLEAR_USER } from "../const";
import { Reducer } from "redux";
import { Action, UserState } from "../../interface/redux";

const initialState: UserState = {
    user: undefined,
    token: localStorage.getItem("token"),
};

const userReduce: Reducer<UserState, Action> = (
    state: UserState = initialState,
    action: Action
): UserState => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,
                token: action.token,
            };
        case CLEAR_USER:
            return {
                ...state,
                user: undefined,
                token: null,
            };
        default:
            return state;
    }
};
export default userReduce;
