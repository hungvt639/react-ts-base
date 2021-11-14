import Repositories from "../interface/request";
import userRepository from "./repository/UserRespository";
import locationsRespository from "./repository/LocationsRespository";
const API: Repositories = {
    user: userRepository,
    locations: locationsRespository,
};

export default API;
