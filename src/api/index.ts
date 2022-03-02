import Api from "../interface/api";
import userAPI from "./repository/UserAPI";
import locationsAPI from "./repository/LocationsAPI";
import blogAPI from "./repository/BlogAPI";
import notificationAPI from "./repository/NotificationAPI";
import imgurAPI from "./repository/ImgurAPI";
const API: Api = {
    user: userAPI,
    locations: locationsAPI,
    blog: blogAPI,
    notification: notificationAPI,
    imgur: imgurAPI,
};

export default API;
