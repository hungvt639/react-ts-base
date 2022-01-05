import { checkRePassword } from "../../utils/validate";
import API from "../../api";
import { message } from "antd";
import { errorAPI } from "../../components/Error";
import { FriendInterface } from "../../interface";
export async function changePassword(
    data: {
        old_password: string;
        password: string;
        re_password: string;
    },
    setShowValidate: any,
    reset: any
) {
    const { old_password, password, re_password } = data;
    const checkRePass = checkRePassword(password, re_password);
    setShowValidate({
        oldPassword: !old_password,
        password: !password,
        rePassword: !re_password,
        checkRePassword: !checkRePass,
    });
    if (old_password && checkRePass) {
        try {
            await API.user.changePassword({ old_password, password });
            message.success("Đổi mật khẩu thành công!");
            reset({ old_password: "", password: "", re_password: "" });
        } catch (err) {
            errorAPI(err);
        }
    }
}
export async function addFriend(
    idFriend: string,
    setListFriend: (friends: FriendInterface[]) => void
) {
    try {
        const res = await API.user.addFriend(idFriend);
        setListFriend(res.data.friends);
    } catch (e) {
        errorAPI(e);
    }
}
export async function unFriend(
    idFriend: string,
    setListFriend: (friends: FriendInterface[]) => void
) {
    try {
        const res = await API.user.unfriend(idFriend);
        setListFriend(res.data.friends);
    } catch (e) {
        errorAPI(e);
    }
}
export async function acceptFriend(
    idFriend: string,
    setListFriend: (friends: FriendInterface[]) => void
) {
    console.log("acccc");

    try {
        const res = await API.user.acceptFriend(idFriend);
        setListFriend(res.data.friends);
    } catch (e) {
        errorAPI(e);
    }
}

export async function getIdMessage(idFriend: string) {
    try {
        const res = await API.user.getChatUser(idFriend);
        return res.data._id;
    } catch (e) {
        errorAPI(e);
    }
    return null;
}
