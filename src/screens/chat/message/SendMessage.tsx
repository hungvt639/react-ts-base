import React, { useState } from "react";

type SendMessageProps = {
    sendMessage: (content: string) => Promise<void>;
};

const SendMessage = (props: SendMessageProps) => {
    const { sendMessage } = props;
    const [content, setContent] = useState("");
    async function subbmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        sendMessage(content);
        setContent("");
    }
    return (
        <form onSubmit={subbmit} className="flex flex-row">
            <input
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Aa"
            />
            <button type="submit">Send</button>
        </form>
    );
};
export default SendMessage;
