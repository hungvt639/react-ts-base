import store from ".";
import { DataTest } from "../interface";


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


//State gốc
export interface AppState {
    dataTest: DataTest;
}



export interface Action {
    type: string;
    payload?: any;
}


export const initStateRedux: AppState = {
    dataTest: {count: 0}
}