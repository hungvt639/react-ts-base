import ClientAPI from "../UserClient";
import UserRepositoryInterface, {
    DataLogin,
    DataRegister,
} from "../interface/UserRespository";

const resource = "api";

const signUp = (data: DataRegister) => {
    return ClientAPI(false).post(`${resource}/register`, data);
};

const signIn = (data: DataLogin) => {
    return ClientAPI(false).post(`${resource}/login`, data);
};

const changePassword = (data: string) => {
    return ClientAPI(true).post(`${resource}/change-pass`, {
        newPass: data,
    });
};

const getProfile = () => {
    return ClientAPI(true).post(`${resource}/get-user-from-token`, {});
};
// const Logout = () => {
//     return Client(true).get(`${resource}/logout/`);
// }
// const EditProfile = (data) => {
//     return Client(true).put(`${resource}/profile/`, data);
// }

// const ChangeAvatar = (data) => {
//     return Client(true).put(`${resource}/change-avatar/`, data)
// }
const userRepository: UserRepositoryInterface = {
    signIn: signIn,
    signUp: signUp,
    getProfile: getProfile,
    changePassword: changePassword,
};
export default userRepository;
