import { message } from "antd";
export function errorAPI(error: any) {
    console.log("err___________");
    try {
        for (const e of error.response.data.message) {
            console.log("e", e);

            message.error(e);
        }
    } catch {
        message.error("Đã có lỗi sảy ra, bạn vui lòng thử lại sau");
    }
}
