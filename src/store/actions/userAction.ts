import { UserInterface } from "../../interface";
import { DataLogin } from "../../interface/request/UserRespository";
import { Action } from "../../interface/redux";
import { SET_USER, CLEAR_USER, SET_LOGIN } from "../const";

export const setUser = (user: UserInterface, token: string): Action => {
    return {
        type: SET_USER,
        user: user,
        token: token,
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
