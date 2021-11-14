import "./profile.scss";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../../interface/redux";
import Avatar from "./Avatar";
import { useForm } from "react-hook-form";
import ValidateNotification from "../../../../components/ValidateNotification";
import { checkRePassword } from "../../../../utils/validate";
import { errorAPI } from "../../../../components/Error";
import API from "../../../../request";
import { message } from "antd";
import Modal from "../../../../components/Modal";
import EditProfile from "./EditProfile";
const Profile = () => {
    const { register, handleSubmit, reset } = useForm();
    const user = useSelector((state: AppState) => state.userState.user);
    const token = useSelector((state: AppState) => state.userState.token);

    const [showEdit, setShowEdit] = useState<boolean>(false);
    const [showValidate, setShowValidate] = useState({
        oldPassword: false,
        password: false,
        rePassword: false,
        checkRePassword: false,
    });
    async function changePassword(data: {
        old_password: string;
        password: string;
        re_password: string;
    }) {
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
    return (
        <div className="profile">
            <div className="show-profile display-flex">
                <div className="left center">
                    <Avatar user={user} token={token} />
                </div>
                <div className="right">
                    <div className="right-top">
                        <div className="display-flex">
                            <p className="laber-profile">Họ và Tên: </p>
                            <p>
                                {user?.last_name} {user?.first_name}
                            </p>
                        </div>
                        <div className="display-flex">
                            <p className="laber-profile">Email: </p>
                            <p>{user?.email}</p>
                        </div>
                        <div className="display-flex">
                            <p className="laber-profile">Số điện thoại: </p>
                            <p>{user?.phone}</p>
                        </div>
                        <div className="display-flex">
                            <p className="laber-profile">Địa chỉ: </p>
                            <p>{user?.address}</p>
                        </div>
                        <div className="display-flex">
                            <p className="laber-profile">ngày sinh: </p>
                            <p>{user?.birthday}</p>
                        </div>
                        <div className="display-flex">
                            <p className="laber-profile">Giới tính: </p>
                            <p>
                                {user?.gender === 1
                                    ? "Nam"
                                    : user?.gender === 2
                                    ? "Nữ"
                                    : "Khác"}
                            </p>
                        </div>
                        <div className="btn-edit-profile">
                            <button onClick={() => setShowEdit(true)}>
                                Chỉnh sửa thông tin
                            </button>
                        </div>
                    </div>
                    <div className="right-bottom">
                        <form onSubmit={handleSubmit(changePassword)}>
                            <div className="flex-column old-password">
                                <label htmlFor="old_password">
                                    Mật khẩu cũ:
                                </label>
                                <input
                                    type="password"
                                    id="old_password"
                                    {...register("old_password", {
                                        required: true,
                                    })}
                                />
                                <ValidateNotification
                                    show={showValidate.oldPassword}
                                    message={"Mật khẩu cũ không được để trống"}
                                />
                            </div>

                            <div className="flex-row">
                                <div className="flex-column new-password">
                                    <label htmlFor="password">
                                        Mật khẩu mới:
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        {...register("password", {
                                            required: true,
                                        })}
                                    />
                                    <ValidateNotification
                                        show={showValidate.password}
                                        message={"Mật khẩu không được để trống"}
                                    />
                                </div>
                                <div className="flex-column re-new-password">
                                    <label htmlFor="re_password">
                                        Nhập lại mật khẩu:
                                    </label>
                                    <input
                                        type="password"
                                        id="re_password"
                                        {...register("re_password", {
                                            required: true,
                                        })}
                                    />
                                    <ValidateNotification
                                        show={showValidate.rePassword}
                                        message={"Vui lòng nhập lại mật khẩu"}
                                    />
                                    <ValidateNotification
                                        show={showValidate.checkRePassword}
                                        message={"Nhập lại mật khẩu không đúng"}
                                    />
                                </div>
                            </div>
                            <div className="btn-submit-change-password">
                                <button type="submit">Đổi mật khẩu</button>
                            </div>
                        </form>
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
