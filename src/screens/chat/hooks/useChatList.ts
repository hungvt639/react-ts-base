import { useEffect, useState } from "react";
import API from "../../../api";
import { errorAPI } from "../../../components/Error";
import { ChatListInterFace } from "../../../interface/api/UserAPI";

const useChatList = () => {
    const [listChat, setListChat] = useState<ChatListInterFace[]>([]);

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

    return { listChat };
};
export default useChatList;
