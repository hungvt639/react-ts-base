import { useEffect, useState } from "react";
import API from "../../../api";
import { errorAPI } from "../../../components/Error";
import { ChatInterface } from "../../../interface";

const useChatBox = (_id: any) => {
    const [chat, setChat] = useState<ChatInterface>();

    useEffect(() => {
        async function getChat() {
            try {
                const res = await API.user.getChatMessage(_id);
                setChat(res.data);
            } catch (e) {
                errorAPI(e);
            }
        }
        getChat();
    }, [_id]);

    return { chat };
};
export default useChatBox;
