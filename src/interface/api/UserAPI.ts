import { AxiosResponse } from "axios";
import {
    ChatInterface,
    FriendInterface,
    MessageInterface,
    UserInterface,
} from "..";

export interface DataRegister {
    email: string;
    username: string;
    password: string;
    fullname: string;
    address: string;
    birthday: Date;
}

export interface ResponseRegister {
    message: string[];
}

export interface DataActivateUser {
    active_token: string;
}

export interface ResponseActivateUser {
    message: string[];
}

export interface DataLogin {
    username: string;
    password: string;
}

export interface ResponseLogin {
    token: string;
    user: UserInterface;
}

export interface DataSendResetPassword {
    username: string;
}

export interface ResponseSendResetPassword {
    message: string[];
}

export interface DataResetPassword {
    password: string;
    reset_password_token: string;
}

export interface ResponseResetPassword {
    message: string;
}

export interface DataChangePassword {
    old_password: string;
    password: string;
}

export interface ResponseChangePassword {
    message: string[];
}
export interface ResponseAddFriend {
    friends: FriendInterface[];
}

export interface ChatListInterFace {
    _id: string;
    name: string;
}

export default interface UserRepositoryInterface {
    register: (data: DataRegister) => Promise<AxiosResponse<ResponseRegister>>;
    activateUser: (
        data: DataActivateUser
    ) => Promise<AxiosResponse<ResponseActivateUser>>;
    sendResetPassword: (
        data: DataSendResetPassword
    ) => Promise<AxiosResponse<ResponseSendResetPassword>>;
    resetPassword: (
        data: DataResetPassword
    ) => Promise<AxiosResponse<ResponseResetPassword>>;
    login: (data: DataLogin) => Promise<AxiosResponse<ResponseLogin>>;
    getProfile: () => Promise<AxiosResponse<UserInterface>>;
    changePassword: (
        data: DataChangePassword
    ) => Promise<AxiosResponse<ResponseChangePassword>>;
    getUsers: () => Promise<AxiosResponse<UserInterface[]>>;
    getUser: (
        id: String,
        option: string
    ) => Promise<AxiosResponse<UserInterface>>;

    addFriend: (idFriend: string) => Promise<AxiosResponse<ResponseAddFriend>>;
    unfriend: (idFriend: string) => Promise<AxiosResponse<ResponseAddFriend>>;
    acceptFriend: (
        idFriend: string
    ) => Promise<AxiosResponse<ResponseAddFriend>>;
    getChatUser: (id: string) => Promise<AxiosResponse<ChatInterface>>;
    getChatMessage: (id: string) => Promise<AxiosResponse<ChatInterface>>;
    getListChat: () => Promise<AxiosResponse<ChatListInterFace[]>>;
    sendMessage: (
        id: string,
        data: { content: string }
    ) => Promise<AxiosResponse<MessageInterface>>;
}
