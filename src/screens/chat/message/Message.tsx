import { useCallback } from "react";
import { useSelector } from "react-redux";
import { BASE_URL_IMG } from "../../../config";
import { MessageInterface, UserInterface } from "../../../interface";
import { AppState } from "../../../interface/redux";
import AvatarDefault from "../../../img/avatar_default.jpg";
type MessageProps = {
    message: MessageInterface[];
    profilesChat: UserInterface[];
};
const Message = (props: MessageProps) => {
    const { message, profilesChat } = props;
    const user = useSelector((s: AppState) => s.userState.user);

    const getAvtImg = useCallback(
        (index: number, id: string) => {
            if (message[index + 1]?.sender === message[index]?.sender) {
                return <div></div>;
            }

            const i = profilesChat.findIndex(
                (u: UserInterface) => u._id === id
            );
            if (i < 0) {
                return (
                    <img src={AvatarDefault} alt="Avt" width={25} height={25} />
                );
            } else {
                return (
                    <img
                        src={`${BASE_URL_IMG}${profilesChat[i].avatar}`}
                        alt="Avt"
                        width={25}
                        height={25}
                    />
                );
            }
        },
        [profilesChat, message]
    );
    const getAvtImgSender = useCallback(
        (index: number) => {
            if (message[index + 1]?.sender === message[index]?.sender) {
                return <div></div>;
            }

            return (
                <img
                    src={`${BASE_URL_IMG}${user?.avatar}`}
                    alt="Avt"
                    width={25}
                    height={25}
                />
            );
        },
        [user, message]
    );
    const getClassMess = useCallback(
        (index: number) => {
            if (
                message[index + 1]?.sender !== message[index]?.sender &&
                message[index - 1]?.sender !== message[index]?.sender
            ) {
                return "message-t-b";
            }
            if (message[index - 1]?.sender !== message[index]?.sender) {
                return "message-t";
            }
            if (message[index + 1]?.sender !== message[index]?.sender) {
                return "message-b";
            }

            return "message-c";
        },
        [message]
    );
    return (
        <div className="flex flex-col px-5">
            {message.map(
                (mess: MessageInterface, index: number) => (
                    <div
                        className={`flex ${
                            mess.sender !== user?._id ? "" : "justify-end"
                        }`}
                        key={index}
                    >
                        {mess.sender !== user?._id ? (
                            <div className="flex items-end flex-row w-70pc not-sender-smg">
                                <div className="avatar-sender mr-2">
                                    {getAvtImg(index, mess.sender)}
                                </div>
                                <div className="flex-1 flex">
                                    <p
                                        className={`bg-gray-500 text-white px-2 py-1 my-1px  ${getClassMess(
                                            index
                                        )}`}
                                    >
                                        {mess.content}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="flex justify-end items-end flex-row w-70pc sender-smg">
                                <div className="flex-1 flex justify-end mr-2">
                                    <p
                                        className={`bg-blue-600 text-white px-2 py-1 my-1px ${getClassMess(
                                            index
                                        )}`}
                                    >
                                        {mess.content}
                                    </p>
                                </div>

                                <div className="avatar-sender">
                                    {getAvtImgSender(index)}
                                </div>
                            </div>
                        )}
                    </div>
                )
                // ) : (
                //     <div className="flex justify-end my-1" key={index}></div>
                // )
            )}
        </div>
    );
};
export default Message;
