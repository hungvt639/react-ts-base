import { useState } from "react";
import { UserInterface } from "../../interface";
import { Image, message, Upload } from "antd";
// import { LoadingOutlined } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/actions/userAction";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
type propsAvatar = {
    user?: UserInterface;
    token?: string | null;
    isUser?: boolean;
};
const Avatar = (props: propsAvatar) => {
    const { isUser, user, token } = props;

    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);

    const beforeUpload = (file: File) => {
        const type = ["image/jpeg", "image/png"];
        const check = type.includes(file.type);
        if (!check) {
            message.error("Không hỗ trợ loại file này");
        }
        return check;
    };
    const changeAvatar = (info: any) => {
        if (info.file.status === "uploading") {
            setLoading(true);
            return;
        }
        if (info.file.status === "done") {
            dispatch(
                setUser(
                    user
                        ? { ...user, avatar: info.file.response.avatar }
                        : undefined
                )
            );
            setLoading(false);
            message.success("Cập nhật ảnh đại diện thành công");
        }
    };
    return (
        <div className="avatar">
            <div className="avatar-img">
                <Image
                    className="avatar-image"
                    src={`${process.env.REACT_APP_BASE_URL_IMG}${user?.avatar}`}
                />
                {isUser ? (
                    <ImgCrop>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className={
                                loading ? "change-avatar" : "change-avatar"
                            }
                            showUploadList={false}
                            action={`${process.env.REACT_APP_BASE_URL}/user/avatar`}
                            beforeUpload={beforeUpload}
                            headers={{
                                Authorization: "Bearer " + token,
                            }}
                            onChange={changeAvatar}
                        >
                            {/* {loading ? (
                                <span className="avatar-uploader-button_loading">
                                    <LoadingOutlined />
                                </span>
                            ) : (
                                <span className="avatar-uploader-button">
                                    Thay đổi
                                </span>
                            )} */}
                            <ChangeCircleOutlinedIcon />
                        </Upload>
                    </ImgCrop>
                ) : (
                    <></>
                )}
            </div>
            <p className="fullname">{user?.fullname}</p>
        </div>
    );
};
export default Avatar;
