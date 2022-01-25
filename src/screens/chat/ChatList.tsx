import { Link } from "react-router-dom";
import { ChatListInterFace } from "../../interface/api/UserAPI";
import { MESSAGE } from "../../router/const";

type ChatListProps = {
    listChat: ChatListInterFace[];
};
const ChatList = (props: ChatListProps) => {
    const { listChat } = props;
    return (
        <div>
            <div>
                {listChat.map((lChat: ChatListInterFace) => (
                    <Link to={`${MESSAGE}/${lChat._id}`}>
                        <div key={lChat._id}>
                            <p>{lChat.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default ChatList;
