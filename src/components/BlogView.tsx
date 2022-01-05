import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ResponseBlog } from "../interface/api/BlogAPI";
import API from "../api";

type propsBlogView = {
    slug: string;
};

const ViewBlog = (props: propsBlogView) => {
    const [blog, setBlog] = useState<ResponseBlog>();
    useEffect(() => {
        async function getBlog() {
            try {
                const res: AxiosResponse<ResponseBlog> = await API.blog.getBlog(
                    props.slug
                );
                document.title = res.data.title;
                setBlog(res.data);
            } catch {}
        }
        getBlog();
    }, [props.slug]);
    return (
        <div>
            <h1>{blog?.title}</h1>
            <div
                dangerouslySetInnerHTML={{ __html: blog ? blog.content : "" }}
            />
        </div>
    );
};
export default ViewBlog;
