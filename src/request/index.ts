import Repositories from "./interface";
import userRepository from "./repository/UserRespository";
const API: Repositories = {
    user: userRepository,
};

export default API;
