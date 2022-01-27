import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import API from "../../../api";
import { errorAPI } from "../../../components/Error";
import { MessageInterface, MessMQTTInterface } from "../../../interface";
import { AppState } from "../../../interface/redux";
import mqttClient, { TOPIC_MESSAGE } from "../../../utils/mqtt";

const useMessage = (_id: any) => {
    const client = mqttClient();
    const user = useSelector((s: AppState) => s.userState.user);
    const [message, setMessage] = useState<MessageInterface[]>([]);

    const listTopics = useMemo(() => {
        return [`${TOPIC_MESSAGE}/${user?._id}`];
    }, [user?._id]);

    const messMQTT = useCallback(() => {
        client.on("message", async function (topic: any, mess: any) {
            const m: MessMQTTInterface = JSON.parse(mess.toString());
            if (m.chat === _id) {
                setMessage((msg) => [...msg, m.m]);
            }
        });
    }, [_id, client]);

    useEffect(() => {
        client.subscribe(listTopics, (error: any) => {
            if (error) {
                console.log("Subscribe to topics error", error);
                return;
            }
        });
        return () => {
            client.unsubscribe(listTopics);
        };
    }, [user?._id, client, listTopics]);

    useEffect(() => {
        messMQTT();
    }, [messMQTT]);

    const getMessage = useCallback(async () => {
        try {
            const res = await API.user.getMessage(_id);
            setMessage(res.data);
        } catch (e) {
            errorAPI(e);
        }
    }, [_id]);

    useEffect(() => {
        getMessage();
    }, [getMessage]);

    const sendMessage = useCallback(
        async (content: string) => {
            if (content) {
                API.user.sendMessage(_id, {
                    content: content,
                });
            }
        },
        [_id]
    );

    return { message, sendMessage };
};
export default useMessage;
