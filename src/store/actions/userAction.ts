import { UserInterface } from "../../interface";
import { DataLogin } from "../../request/interface/UserRespository";
import { Action } from "../appstate";
import { SET_USER, CLEAR_USER, SET_LOGIN } from "../const";

export const setUser = (user: UserInterface): Action => {
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
