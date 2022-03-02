import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import API, { tryApi } from "../../../api";
import { MessageInterface, MessMQTTInterface } from "../../../interface";
import { AppState } from "../../../interface/redux";
import mqttClient, { TOPIC_MESSAGE } from "../../../utils/mqtt";
import { ISubscriptionMap } from "mqtt";

const useMessage = (_id: any) => {
    const client = mqttClient();
    const user = useSelector((s: AppState) => s.userState.user);
    const [message, setMessage] = useState<MessageInterface[]>([]);

    const listTopicsSub: ISubscriptionMap = useMemo(() => {
        let a: ISubscriptionMap = {};
        a[`${TOPIC_MESSAGE}/${user?._id}`] = { qos: 2 };
        return a;
    }, [user?._id]);

    const listTopics = useMemo(() => {
        return [`${TOPIC_MESSAGE}/${user?._id}`];
    }, [user?._id]);
    // console.log("listTopicsSub", listTopicsSub);

    const messMQTT = useCallback(() => {
        client.on("message", async function (topic: any, mess: any) {
            const m: MessMQTTInterface = await JSON.parse(mess.toString());
            if (m.chat === _id) {
                setMessage((msg) => [...msg, m.m]);
            }
        });
    }, [_id, client]);
    useEffect(() => {
        client.subscribe(listTopicsSub, (error: any) => {
            if (error) {
                console.log("Subscribe to topics error");
                return;
            }
        });
        return () => {
            client.unsubscribe(listTopics);
        };
    }, [user?._id, client, listTopicsSub, listTopics]);

    useEffect(() => {
        messMQTT();
    }, [messMQTT]);

    const getMessage = useCallback(async () => {
        tryApi(async () => {
            const res = await API.user.getMessage(_id);
            setMessage(res.data);
        });
        // try {
        //     const res = await API.user.getMessage(_id);
        //     setMessage(res.data);
        // } catch (e) {
        //     errorAPI(e);
        // }
    }, [_id]);

    useEffect(() => {
        getMessage();
    }, [getMessage]);

    const sendMessage = useCallback(
        async (content: string) => {
            if (content) {
                await API.user.sendMessage(_id, {
                    content: content,
                });
            }
        },
        [_id]
    );

    return { message, sendMessage };
};
export default useMessage;
