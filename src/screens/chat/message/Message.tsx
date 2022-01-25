import { useSelector } from "react-redux";
import { BASE_URL_IMG } from "../../../config";
import { MessageInterface } from "../../../interface";
import { AppState } from "../../../interface/redux";

type MessageProps = {
    message: MessageInterface[];
};
const Message = (props: MessageProps) => {
    const { message } = props;
    const user = useSelector((s: AppState) => s.userState.user);
    console.log(user);

    return (
        <div className="flex flex-col px-5">
            {message.map(
                (mess: MessageInterface, index: number) => (
                    // mess.sender !== user?._id ? (
                    <div
                        className={`flex my-1 ${
                            mess.sender !== user?._id ? "" : "justify-end"
                        }`}
                        key={index}
                    >
                        {mess.sender !== user?._id ? (
                            <div className="flex items-end w-70pc">
                                <p className="bg-gray-500 text-white px-2 py-1 mr-2 text-sender">
                                    {mess.content}
                                </p>
                                {/* <div>{mess.content}</div> */}
                            </div>
                        ) : (
                            <div className="flex justify-end items-end w-70pc">
                                <p className="bg-blue-600 text-white px-2 py-1 mr-2 text-sender">
                                    {mess.content}
                                </p>
                                <img
                                    className="avatar-sender"
                                    src={`${BASE_URL_IMG}${user.avatar}`}
                                    alt="Avt"
                                    width={25}
                                    height={25}
                                />
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
