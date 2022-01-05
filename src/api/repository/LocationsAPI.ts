import LocationsAPI from "../../interface/api/LocationsAPI";
import AxiosAPI from "../config";
const resource = "api";
const getListProvinces = () => {
    return AxiosAPI(false).get(`${resource}/locations`);
};
const getListDistricts = (id: number) => {
    return AxiosAPI(false).get(`${resource}/locations/${id}`);
};
const getListWards = (id: number) => {
    return AxiosAPI(false).get(`${resource}/district/${id}`);
};

const locationsAPI: LocationsAPI = {
    getListProvinces: getListProvinces,
    getListDistricts: getListDistricts,
    getListWards: getListWards,
};
export default locationsAPI;
