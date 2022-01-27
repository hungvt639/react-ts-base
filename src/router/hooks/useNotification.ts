import { useCallback, useEffect, useMemo } from "react";
import { MessMQTTInterface } from "../../interface";
import { MESSAGE } from "../const";
import notify from "../../components/notify";
import mqttClient, { TOPIC_MESSAGE } from "../../utils/mqtt";
import { useSelector } from "react-redux";
import { AppState } from "../../interface/redux";

const useNotification = (pathname: string) => {
    const client = mqttClient();
    const user = useSelector((s: AppState) => s.userState.user);
    const listTopics = useMemo(() => {
        return [`${TOPIC_MESSAGE}/${user?._id}`];
    }, [user?._id]);

    useEffect(() => {
        client.subscribe([`${TOPIC_MESSAGE}/${user?._id}`], (error: any) => {
            if (error) {
                console.log("Subscribe to topics error", error);
                return;
            }
        });
        return () => {
            client.unsubscribe(listTopics);
        };
    }, [client, listTopics, user?._id]);

    const notifyMQTT = useCallback(() => {
        client.on("message", async function (topic: any, mess: any) {
            if (!pathname.startsWith(MESSAGE)) {
                const m: MessMQTTInterface = JSON.parse(mess.toString());
                notify.message(m);
            }
        });
    }, [client, pathname]);

    useEffect(() => {
        notifyMQTT();
    }, [notifyMQTT]);

    return;
};
export default useNotification;
