import UserAPI from "./UserAPI";
import LocationsAPI from "./LocationsAPI";
import BlogAPI from "./BlogAPI";
import NotificationAPI from "./NotificationAPI";
export default interface API {
    user: UserAPI;
    locations: LocationsAPI;
    blog: BlogAPI;
    notification: NotificationAPI;
}
