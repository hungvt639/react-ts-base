import { FriendInterface, UserInterface } from "../../interface";
import { DataLogin } from "../../interface/api/UserAPI";
import { Action } from "../../interface/redux";
import {
    SET_USER,
    CLEAR_USER,
    SET_LOGIN,
    SET_RES_LOGIN,
    SET_FRIENDS,
} from "../const";

const setResLogin = (user: UserInterface, token: string): Action => {
    return {
        type: SET_RES_LOGIN,
        user: user,
        token: token,
    };
};
const setUser = (user?: UserInterface): Action => {
    return {
        type: SET_USER,
        user: user,
    };
};

const clearUser = (): Action => {
    return {
        type: CLEAR_USER,
    };
};

const setLogin = (data: DataLogin): Action => {
    return {
        type: SET_LOGIN,
        dataLogin: data,
    };
};
const setFriends = (data: FriendInterface[]): Action => {
    return {
        type: SET_FRIENDS,
        friends: data,
    };
};

const userAction = {
    setResLogin,
    setUser,
    clearUser,
    setLogin,
    setFriends,
};
export default userAction;
