import LocationsRespositoryInterface from "../../interface/request/LocationsRespository";
import ClientAPI from "../ClientAPI";
const resource = "api";
const getListProvinces = () => {
    return ClientAPI(false).get(`${resource}/locations`);
};
const getListDistricts = (id: number) => {
    return ClientAPI(false).get(`${resource}/locations/${id}`);
};
const getListWards = (id: number) => {
    return ClientAPI(false).get(`${resource}/district/${id}`);
};

const locationsRespository: LocationsRespositoryInterface = {
    getListProvinces: getListProvinces,
    getListDistricts: getListDistricts,
    getListWards: getListWards,
};
export default locationsRespository;
