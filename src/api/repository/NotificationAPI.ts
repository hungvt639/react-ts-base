import NotificationAPI from "../../interface/api/NotificationAPI";
import AxiosAPI from "../config";
const resource = "notify";
const getNotifyForUser = () => {
    return AxiosAPI(true).get(`${resource}/list-user`);
};
const getNotifyNotUser = () => {
    return AxiosAPI(false).get(`${resource}/lists`);
};

const notificationAPI: NotificationAPI = {
    getNotifyForUser,
    getNotifyNotUser,
};
export default notificationAPI;
