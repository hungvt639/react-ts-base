import { useCallback, useEffect, useState } from "react";
import API from "../../../api";
import { errorAPI } from "../../../components/Error";
import { MessageInterface } from "../../../interface";
import mqttClient, { TOPIC_MESSAGE } from "../../../utils/mqtt";

const useMessage = (_id: any) => {
    const [message, setMessage] = useState<MessageInterface[]>([]);

    useEffect(() => {
        mqttClient.subscribe([`${TOPIC_MESSAGE}/${_id}`], (error: any) => {
            if (error) {
                console.log("Subscribe to topics error", error);
                return;
            }
        });
    }, [_id]);

    mqttClient.on("message", async function (topic: any, mess: any) {
        const m: MessageInterface = await JSON.parse(await mess.toString());
        setMessage(message.concat(m));
    });
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
                const res = await API.user.sendMessage(_id, {
                    content: content,
                });
                setMessage(message.concat(res.data));
            }
        },
        [_id, message]
    );

    return { message, sendMessage };
};
export default useMessage;
