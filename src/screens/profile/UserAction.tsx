import { STT_FRIEND } from "../../config/const";
import useUser from "./hook/useUser";

type PropsUserAction = {
    _id: string;
};
const UserAction = (props: PropsUserAction) => {
    const { _id } = props;
    const { goToMessage, friend, acceptFriend, addFriend, unFriend } =
        useUser(_id);

    if (friend?.length) {
        if (friend[0].status === STT_FRIEND.REQUEST_INVITE) {
            return (
                <>
                    <button
                        onClick={() => unFriend(_id)}
                        className="bg-red-800 border-red-800 text-white"
                    >
                        Hủy kết bạn
                    </button>
                </>
            );
        }
        if (friend[0].status === STT_FRIEND.WAIT_CONFIRM) {
            return (
                <>
                    <button
                        onClick={() => acceptFriend(_id)}
                        className="bg-green-700 border-gray-500 text-white mr-5"
                    >
                        Chấp nhận lời mời kết bạn
                    </button>
                    <button
                        onClick={() => unFriend(_id)}
                        className="bg-red-800 border-red-800 text-white"
                    >
                        Hủy
                    </button>
                </>
            );
        } else
            return (
                <>
                    <button
                        onClick={goToMessage}
                        className="bg-yellow-400 broder-yellow-400"
                    >
                        Nhắn tin
                    </button>
                    <button
                        onClick={() => unFriend(_id)}
                        className="bg-red-800 border-red-800 text-white"
                    >
                        Hủy kết bạn
                    </button>
                </>
            );
    } else {
        return (
            <>
                <button
                    onClick={() => addFriend(_id)}
                    className="bg-blue-400 border-blue-400 text-white"
                >
                    Kết bạn
                </button>
            </>
        );
    }
};
export default UserAction;
