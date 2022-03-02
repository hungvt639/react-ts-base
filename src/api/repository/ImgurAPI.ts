import ImgurAPI from "../../interface/api/ImgurAPI";
import { APIImgur } from "../config";
const resource = "3";
const uploadImg = (data: FormData) => {
    return APIImgur(true).post(`${resource}/image`, data);
};
const imgurAPI: ImgurAPI = {
    uploadImg,
};
export default imgurAPI;
