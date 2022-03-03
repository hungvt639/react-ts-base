import "./profile.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../interface/redux";
import Avatar from "./Avatar";
import Modal from "../../components/modal";
import EditProfile from "./EditProfile";
import { FriendInterface, UserInterface } from "../../interface";
import ChangePassword from "./ChangePassword";
import { errorAPI } from "../../components/Error";
import API from "../../api";
import UserAction from "./UserAction";
import { getIdMessage } from "./function";
import { useHistory } from "react-router-dom";
import { MESSAGE } from "../../router/route";
import action from "../../store/actions";

const Profile = (props: any) => {
    const _id = props.match.params.id;
    const history = useHistory();
    const [showEdit, setShowEdit] = useState<boolean>(false);
    const [profile, setProfile] = useState<UserInterface | undefined>();
    const idUser = useSelector((state: AppState) => state.userState.user?._id);
    const user = useSelector((state: AppState) => state.userState.user);
    const friendList = useSelector(
        (state: AppState) => state.userState.user?.friends
    );
    const token = useSelector((state: AppState) => state.userState.token);

    useEffect(() => {
        async function fetchUser() {
            if (_id === idUser) {
                //user
                setProfile(user);
            } else {
                //khách
                try {
                    const res = await API.user.getUser(_id, "");
                    setProfile(res.data);
                } catch (e) {
                    errorAPI(e);
                }
            }
        }
        fetchUser();
    }, [_id, idUser, user]);
    const dispatch = useDispatch();
    function setListFriend(friends: FriendInterface[]) {
        dispatch(action.setFriends(friends));
    }
    async function goToMessage() {
        const messId = await getIdMessage(_id);
        if (messId) {
            history.push(`${MESSAGE}/${messId}`);
        }
    }
    // const friend = user?.friends?.filter((f) => f._id === _id);
    return (
        <div className="profile">
            <div className="show-profile display-flex">
                <div className="left center">
                    <Avatar
                        isUser={_id === idUser}
                        user={profile}
                        token={token}
                    />
                </div>
                <div className="right">
                    <div className="right-top">
                        <div className="display-flex">
                            <p className="laber-profile">Họ và Tên: </p>
                            <p>{profile?.fullname}</p>
                        </div>
                        <div className="display-flex">
                            <p className="laber-profile">Email: </p>
                            <p>{profile?.email}</p>
                        </div>
                        {/* <div className="display-flex">
                            <p className="laber-profile">Số điện thoại: </p>
                            <p>{user?.phone}</p>
                        </div> */}
                        <div className="display-flex">
                            <p className="laber-profile">Địa chỉ: </p>
                            <p>{profile?.address}</p>
                        </div>
                        <div className="display-flex">
                            <p className="laber-profile">ngày sinh: </p>
                            <p>{profile?.birthday}</p>
                        </div>
                        {/* <div className="display-flex">
                            <p className="laber-profile">Giới tính: </p>
                            <p>
                                {user?.gender === 1
                                    ? "Nam"
                                    : user?.gender === 2
                                    ? "Nữ"
                                    : "Khác"}
                            </p>
                        </div> */}
                        {idUser === _id ? (
                            <div className="btn-edit-profile">
                                <button onClick={() => setShowEdit(true)}>
                                    Chỉnh sửa thông tin
                                </button>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="right-bottom flex-1">
                        {idUser === _id ? (
                            <ChangePassword />
                        ) : (
                            <UserAction
                                _id={_id}
                                friendList={friendList}
                                setListFriend={setListFriend}
                                goToMessage={goToMessage}
                            />
                        )}
                    </div>
                </div>
            </div>
            <Modal show={showEdit} onClose={() => setShowEdit(false)}>
                <EditProfile />
            </Modal>
        </div>
    );
};
export default Profile;
