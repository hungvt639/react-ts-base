import { AxiosResponse } from "axios";

export interface UserInterface {}

export interface DataRegister {}

export interface DataLogin {}

export default interface UserRepositoryInterface {
    signUp: (data: DataRegister) => Promise<AxiosResponse<UserInterface>>;
    signIn: (data: DataLogin) => Promise<AxiosResponse<UserInterface>>;
    getProfile: () => Promise<AxiosResponse<UserInterface>>;
    changePassword: (data: string) => Promise<AxiosResponse<any>>;
}
