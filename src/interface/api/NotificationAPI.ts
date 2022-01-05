import { AxiosResponse } from "axios";
import { Notification } from "..";

export default interface NotificationAPI {
    getNotifyForUser: () => Promise<AxiosResponse<Notification[]>>;
    getNotifyNotUser: () => Promise<AxiosResponse<Notification[]>>;
}
