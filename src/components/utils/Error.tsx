import { message } from "antd";
export function errorAPI(error: any) {
    console.log("err___________");
    try {
        for (const err in error.response.data) {
            for (const e of error.response.data[err]) {
                message.error(e);
            }
        }
    } catch {
        message.error("Đã có lỗi sảy ra, bạn vui lòng thử lại sau");
    }
}
