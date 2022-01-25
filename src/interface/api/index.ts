import UserAPI from "./UserAPI";
import LocationsAPI from "./LocationsAPI";
import BlogAPI from "./BlogAPI";
import NotificationAPI from "./NotificationAPI";
import ImgurAPI from "./ImgurAPI";
export default interface API {
    user: UserAPI;
    locations: LocationsAPI;
    blog: BlogAPI;
    notification: NotificationAPI;
    imgur: ImgurAPI;
}
