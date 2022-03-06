import "./style.scss";
import { useSelector } from "react-redux";
import { AppState } from "../../interface/redux";
import Avatar from "./Avatar";
import Modal from "../../components/modal";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import UserAction from "./UserAction";
import useProfile from "./hook/useProfile";
import useEditProfile from "./hook/useEditProfile";

const Profile = (props: any) => {
    const _id = props.match.params.id;

    const { profile } = useProfile(_id);
    const { showEdit, setShowEdit } = useEditProfile();
    const idUser = useSelector((state: AppState) => state.userState.user?._id);

    return (
        <div className="_profile">
            <div className="show-profile display-flex">
                <div className="left center">
                    <Avatar isUser={_id === idUser} user={profile} />
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
                            <UserAction _id={_id} />
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
