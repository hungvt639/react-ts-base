import { message } from "antd";
export function errorAPI(error: any) {
    console.log("err___________", error);
    if (typeof error.response === "undefined") {
        message.error("Đã có lỗi sảy ra, bạn vui lòng thử lại sau");
        return;
    }
    message.error(error.response.data.message);
}
