import Repositories from "../interface/request";
import userRepository from "./repository/UserRespository";
const API: Repositories = {
    user: userRepository,
};

export default API;
