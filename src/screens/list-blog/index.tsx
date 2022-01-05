import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../api";
import { errorAPI } from "../../components/Error";
import { ResponseBlog } from "../../interface/api/BlogAPI";
import { BLOG } from "../../router/const";
const ListBlog = (props: any) => {
    const [blogs, setBlogs] = useState<ResponseBlog[]>([]);
    useEffect(() => {
        async function getBlogs() {
            try {
                const res = await API.blog.getListBlog();
                console.log(res.data);

                setBlogs(res.data);
            } catch (e) {
                errorAPI(e);
            }
        }
        getBlogs();
    }, []);
    return (
        <div>
            {blogs.map((value: ResponseBlog, index: number) => (
                <div key={index}>
                    <Link to={`${BLOG}/${value.slug}`}>{value.title}</Link>
                </div>
            ))}
        </div>
    );
};
export default ListBlog;
