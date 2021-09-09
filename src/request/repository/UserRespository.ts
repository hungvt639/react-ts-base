import ClientAPI from "../ClientAPI";
import UserRepositoryInterface, {
    DataLogin,
    DataRegister,
    DataChangePassword,
} from "../interface/UserRespository";

const resource = "user";

const register = (data: DataRegister) => {
    return ClientAPI(false).post(`${resource}/register`, data);
};

const login = (data: DataLogin) => {
    return ClientAPI(false).post(`${resource}/login`, data);
};

const changePassword = (data: DataChangePassword) => {
    return ClientAPI(true).post(`${resource}/change-password`, {
        newPass: data,
    });
};

const getProfile = () => {
    return ClientAPI(true).post(`${resource}/profile`);
};

const userRepository: UserRepositoryInterface = {
    login: login,
    register: register,
    getProfile: getProfile,
    changePassword: changePassword,
};
export default userRepository;
