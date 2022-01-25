import Message from "./message/Message";
// import { useEffect, useState } from "react";
// import API from "../../api";
// import { errorAPI } from "../../components/Error";
// import {
//     ChatInterface,
//     MemberInterface,
//     MessageInterface,
// } from "../../interface";
// import { ChatListInterFace } from "../../interface/api/UserAPI";
import ChatList from "./ChatList";
import SendMessage from "./message/SendMessage";
// import mqttClient, { TOPIC_MESSAGE } from "../../utils/mqtt";
import "./style.scss";
import useChatBox from "./useChatBox";
import { useEffect, useRef } from "react";

const Chat = (props: any) => {
    const messagesEndRef = useRef<null | HTMLDivElement>(null);
    const _id = props.match.params.id;
    const { chat, message, listChat, sendMessage } = useChatBox({ _id: _id });
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView();
    };

    useEffect(() => {
        scrollToBottom();
    }, [message]);

    return (
        <div className="chat h-full flex-1 flex flex-nowrap">
            <div className="h-full w-80 border-r border-solid border-slate-500">
                <ChatList listChat={listChat} />
            </div>
            <div className="h-full w-full flex-col flex">
                <div className="flex h-20 w-full border-b border-solid border-slate-500">
                    <div>{chat?.name}</div>
                </div>
                <div className="flex-1 overflow-auto border-r border-solid border-slate-500 flex-row-reverse">
                    <Message message={message} />
                    <div ref={messagesEndRef} />
                </div>
                <div className="overflow-hidden border-t border-solid border-slate-500 py-4 px-2">
                    <SendMessage sendMessage={sendMessage} />
                </div>
            </div>
        </div>
    );
};
export default Chat;
