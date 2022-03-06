import { UserInterface } from "../../interface";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import { BASE_URL, BASE_URL_IMG } from "../../env";
import Image from "../../components/image";
import useAvatar from "./hook/useAvatar";
type propsAvatar = {
    user?: UserInterface;
    isUser?: boolean;
};
const Avatar = (props: propsAvatar) => {
    const { isUser, user } = props;
    const { loading, beforeUpload, changeAvatar, token } = useAvatar(user);

    return (
        <div className="avatar">
            <div className="avatar-img">
                <Image
                    width="100%"
                    height="100%"
                    alt="avatar"
                    className="avatar-image"
                    src={`${BASE_URL_IMG}${user?.avatar}`}
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
                            action={`${BASE_URL}/user/avatar`}
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
