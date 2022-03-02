import AxiosAPI from "../config";
import UserAPI, {
    DataLogin,
    DataRegister,
    DataChangePassword,
    DataActivateUser,
    DataSendResetPassword,
    DataResetPassword,
} from "../../interface/api/UserAPI";

const resource = "user";

const register = (data: DataRegister) => {
    return AxiosAPI(false).post(`${resource}/register`, data);
};

const activateUser = (data: DataActivateUser) => {
    return AxiosAPI(false).post(`${resource}/active_user`, data);
};

const login = (data: DataLogin) => {
    return AxiosAPI(false).post(`${resource}/login`, data);
};

const sendResetPassword = (data: DataSendResetPassword) => {
    return AxiosAPI(false).post(`${resource}/send-reset-password`, data);
};

const resetPassword = (data: DataResetPassword) => {
    return AxiosAPI(false).post(`${resource}/reset-password`, data);
};

const changePassword = (data: DataChangePassword) => {
    return AxiosAPI(true).post(`${resource}/change-password`, data);
};

const getProfile = () => {
    return AxiosAPI(true).get(`${resource}/profile`);
};
const getUsers = () => {
    return AxiosAPI(false).get(`${resource}/list`);
};
const getUser = (id: String, option: string) => {
    return AxiosAPI(false).get(`${resource}/user/${id}?option=${option}`);
};
const addFriend = (idFriend: String) => {
    return AxiosAPI(true).post(`${resource}/add-friend`, {
        idFriend: idFriend,
    });
};
const unfriend = (idFriend: String) => {
    return AxiosAPI(true).post(`${resource}/unfriend`, {
        idFriend: idFriend,
    });
};
const acceptFriend = (idFriend: String) => {
    return AxiosAPI(true).post(`${resource}/accep-friend`, {
        idFriend: idFriend,
    });
};
const getChatUser = (idFriend: string) => {
    return AxiosAPI(true).get(`${resource}/chat/${idFriend}`);
};
const getChatMessage = (idFriend: string) => {
    return AxiosAPI(true).get(`${resource}/message-chat/${idFriend}`);
};
const getMessage = (idFriend: string) => {
    return AxiosAPI(true).get(`${resource}/message/${idFriend}`);
};
const getListChat = () => {
    return AxiosAPI(true).get(`${resource}/chats`);
};
const sendMessage = (id: string, data: { content: string }) => {
    return AxiosAPI(true).post(`${resource}/message/${id}`, data);
};
const userAPI: UserAPI = {
    login,
    register,
    getProfile,
    changePassword,
    activateUser,
    sendResetPassword,
    resetPassword,
    getUsers,
    getUser,
    addFriend,
    unfriend,
    acceptFriend,
    getChatUser,
    getChatMessage,
    getMessage,
    getListChat,
    sendMessage,
};
export default userAPI;
