import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { MessMQTTInterface } from "../../interface";
import { MESSAGE } from "../../router/const";
import "./style.scss";
type NotifiMessageProps = {
    message: string | JSX.Element;
    time: number;
    classChill: string;
};
const NotifyMessage = (props: NotifiMessageProps) => {
    const { message, time, classChill } = props;
    useEffect(() => {
        setShow(true);
        let timer = setTimeout(() => setShow(false), time);
        return () => {
            clearTimeout(timer);
        };
    }, [message, time]);
    const [show, setShow] = useState<boolean>(true);
    // if (show) {
    //     return <div className={`show-notify ${classChill}`}>{message}</div>;
    // } else {
    //     return <Fragment />;
    // }

    return (
        <div className={show ? `show-notify ${classChill}` : "not-show-notify"}>
            <div className="notify">{message}</div>
            <div onClick={() => setShow(false)} className="close-btn">
                X
            </div>
        </div>
    );
};

function showNotify(
    message: string | JSX.Element,
    time: number,
    classChill: string = ""
) {
    const child = document.createElement("DIV");
    child.className = "notify";

    const e = document.getElementById("__notify");
    if (e) {
        ReactDOM.render(
            <NotifyMessage
                message={message}
                time={time}
                classChill={classChill}
            />,
            e.appendChild(child)
        );
    } else {
        const mess = document.createElement("DIV");
        mess.id = "__notify";
        ReactDOM.render(
            <NotifyMessage
                message={message}
                time={time}
                classChill={classChill}
            />,
            document.body.appendChild(mess)
        );
    }
}

function error(message: string, time: number = 5000) {
    showNotify(message, time, "error");
}
function success(message: string, time: number = 5000) {
    showNotify(message, time, "success");
}

function message(message: MessMQTTInterface, time: number = 5000) {
    const m = (
        <a href={`${MESSAGE}/${message.chat}`}>
            <h2>{message.from}</h2>
            <h3>{message.to}</h3>
            <p>{message.m.content}</p>
        </a>
    );
    showNotify(m, time, "success");
}
const notify = {
    error,
    success,
    message,
};
export default notify;
