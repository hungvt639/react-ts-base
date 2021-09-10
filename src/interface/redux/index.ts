import store from "../../store";
import { UserInterface } from "..";
import { DataLogin } from "../request/UserRespository";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

//State gốc
export interface AppState {
    userState: UserState;
}

export interface UserState {
    user?: UserInterface;
}

export interface Action {
    type: string;
    user?: UserInterface;
    dataLogin?: DataLogin;
}

export const initStateRedux: AppState = {
    userState: { user: undefined },
};
