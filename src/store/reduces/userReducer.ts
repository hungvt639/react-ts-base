import { SET_USER, CLEAR_USER, SET_RES_LOGIN, SET_FRIENDS } from "../const";
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
        case SET_RES_LOGIN:
            return {
                ...state,
                user: action.user,
                token: action.token,
            };
        case SET_USER:
            return {
                ...state,
                user: action.user,
            };
        case CLEAR_USER:
            return {
                ...state,
                user: undefined,
                token: null,
            };
        case SET_FRIENDS:
            return {
                ...state,
                user: state.user
                    ? { ...state.user, friends: action.friends }
                    : undefined,
            };
        default:
            return state;
    }
};
export default userReduce;
