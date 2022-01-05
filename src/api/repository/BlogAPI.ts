import BlogAPI, { DataCreateBlog } from "../../interface/api/BlogAPI";
import AxiosAPI from "../config";
const resource = "api";
const getBlog = (slug: string) => {
    return AxiosAPI(false).get(`${resource}/blog/${slug}`);
};
const createBlog = (data: DataCreateBlog) => {
    return AxiosAPI(true).post(`${resource}/blog`, data);
};
const getListBlog = () => {
    return AxiosAPI(false).get(`${resource}/blog`);
};

const blogAPI: BlogAPI = {
    getListBlog: getListBlog,
    getBlog: getBlog,
    createBlog: createBlog,
};
export default blogAPI;
