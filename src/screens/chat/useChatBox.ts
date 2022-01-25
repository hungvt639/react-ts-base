import { useEffect, useState } from "react";
import API from "../../api";
import { errorAPI } from "../../components/Error";
import {
    ChatInterface,
    MemberInterface,
    MessageInterface,
} from "../../interface";
import { ChatListInterFace } from "../../interface/api/UserAPI";
import mqttClient, { TOPIC_MESSAGE } from "../../utils/mqtt";

type ChatBoxProps = {
    _id: any;
};
const useChatBox = (props: ChatBoxProps) => {
    const { _id } = props;
    const [chat, setChat] = useState<ChatInterface>();
    const [message, setMessage] = useState<MessageInterface[]>([]);
    const [profilesChat, setProfilesChat] = useState({});
    const [listChat, setListChat] = useState<ChatListInterFace[]>([]);
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

    useEffect(() => {
        async function getChat() {
            try {
                const res = await API.user.getChatMessage(_id);
                setChat(res.data);
                setMessage(res.data.message);
            } catch (e) {
                errorAPI(e);
            }
        }
        getChat();
    }, [_id]);

    useEffect(() => {
        async function getProfiles() {
            let profiles: any = {};
            if (chat) {
                await Promise.all(
                    chat.member.map(async (m: MemberInterface) => {
                        const res = await API.user.getUser(
                            m.idUser,
                            "fullname avatar"
                        );
                        profiles[`${m.idUser}`] = res.data;
                        // return res.data;
                    })
                );
                setProfilesChat(profiles);
            }
        }
        getProfiles();
    }, [chat]);

    useEffect(() => {
        async function getListChat() {
            try {
                const res = await API.user.getListChat();
                setListChat(res.data);
            } catch (e) {
                errorAPI(e);
            }
        }
        getListChat();
    }, []);

    async function sendMessage(content: string) {
        if (content) {
            const res = await API.user.sendMessage(_id, { content: content });
            setMessage(message.concat(res.data));
        }
    }
    return { chat, message, profilesChat, listChat, sendMessage };
};
export default useChatBox;
