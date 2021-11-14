import { UserInterface } from "../../interface";
import { DataLogin } from "../../interface/request/UserRespository";
import { Action } from "../../interface/redux";
import { SET_USER, CLEAR_USER, SET_LOGIN, SET_RES_LOGIN } from "../const";

export const setResLogin = (user: UserInterface, token: string): Action => {
    return {
        type: SET_RES_LOGIN,
        user: user,
        token: token,
    };
};
export const setUser = (user?: UserInterface): Action => {
    return {
        type: SET_USER,
        user: user,
    };
};

export const clearUser = (): Action => {
    return {
        type: CLEAR_USER,
    };
};

export const setLogin = (data: DataLogin): Action => {
    return {
        type: SET_LOGIN,
        dataLogin: data,
    };
};
