import { AxiosResponse } from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "react-quill/dist/quill.snow.css";
import { useHistory } from "react-router-dom";
import API from "../api";
import { ResponseBlog } from "../interface/api/BlogAPI";
import { BLOG } from "../router/const";
import "./component.scss";
import { errorAPI } from "./Error";
import { useState } from "react";
import { BASE_URL_IMG } from "../config";
const FormBlogCK = () => {
    const history = useHistory();
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    // let title = "";
    // function handleChange(value: string) {
    //     content = value;
    // }
    async function create() {
        try {
            const res: AxiosResponse<ResponseBlog> = await API.blog.createBlog({
                title,
                content,
            });
            history.push(`${BLOG}/${res.data.slug}`);
            console.log(res.data);
        } catch (e) {
            errorAPI(e);
        }
    }

    return (
        <div className="new-blog">
            <h1>Tạo blog mới</h1>
            <label htmlFor="title">Tiêu đề:</label>
            <input
                className="input-title"
                value={title}
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Tiêu đề"
            />
            <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor 5!</p>"
                config={{
                    ckfinder: {
                        uploadUrl: `${BASE_URL_IMG}/api/image`,
                    },
                }}
                onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setContent(data);
                }}
            />
            <div className="btn-create-new-blog">
                <button onClick={create}>Tạo mới</button>
            </div>
        </div>
    );
};
export default FormBlogCK;
