import { useEffect, useState } from "react";
import API from "../../api";
import { errorAPI } from "../../components/Error";
import { ChatInterface, MessageInterface } from "../../interface";

const Chat = (props: any) => {
    const _id = props.match.params.id;
    const [chat, setChat] = useState<ChatInterface>();
    const [message, setMessage] = useState<MessageInterface[]>([]);
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
    return (
        <div className="chat flex-1 flex flex-nowrap">
            <div className="h-full w-80">Left</div>
            <div className="h-full w-full flex-col flex">
                <div className="flex h-20 w-full">Top</div>
                <div className="flex-1 overflow-hidden">Message</div>
            </div>
        </div>
    );
};
export default Chat;
