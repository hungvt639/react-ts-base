import { AxiosResponse } from "axios";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useHistory } from "react-router-dom";
import API from "../api";
import { ResponseBlog } from "../interface/api/BlogAPI";
import { BLOG } from "../router/const";
import "./component.scss";
import { errorAPI } from "./Error";
const FormBlog = () => {
    const history = useHistory();
    let content = "";
    // const [title, setTitle] = useState("");
    let title = "";
    function handleChange(value: string) {
        content = value;
    }
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
        console.log(content);
    }
    const CustomUndo = () => (
        <svg viewBox="0 0 18 18">
            <polygon
                className="ql-fill ql-stroke"
                points="6 10 4 12 2 10 6 10"
            />
            <path
                className="ql-stroke"
                d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
            />
        </svg>
    );

    const CustomRedo = () => (
        <svg viewBox="0 0 18 18">
            <polygon
                className="ql-fill ql-stroke"
                points="12 10 14 12 16 10 12 10"
            />
            <path
                className="ql-stroke"
                d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
            />
        </svg>
    );
    const Size = Quill.import("formats/size");
    Size.whitelist = ["extra-small", "small", "medium", "large"];
    Quill.register(Size, true);

    const Font = Quill.import("formats/font");
    Font.whitelist = [
        "arial",
        "comic-sans",
        "courier-new",
        "georgia",
        "helvetica",
        "lucida",
    ];
    Quill.register(Font, true);
    // function undoChange() {
    //     Quill.history.undo();
    // }
    // function redoChange() {
    //     Quill.history.redo();
    // }
    const modules = {
        toolbar: {
            container: "#toolbar",
            // handlers: {
            // undo: undoChange,
            // redo: redoChange,
            // },
        },
        history: {
            delay: 500,
            maxStack: 100,
            userOnly: true,
        },
    };

    const formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "align",
        "strike",
        "script",
        "blockquote",
        "background",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "color",
        "code-block",
    ];

    // Quill Toolbar component
    const QuillToolbar = () => (
        <div id="toolbar">
            <span className="ql-formats">
                <select className="ql-font" defaultValue="arial">
                    <option value="arial">Arial</option>
                    <option value="comic-sans">Comic Sans</option>
                    <option value="courier-new">Courier New</option>
                    <option value="georgia">Georgia</option>
                    <option value="helvetica">Helvetica</option>
                    <option value="lucida">Lucida</option>
                </select>
                <select className="ql-size" defaultValue="medium">
                    <option value="extra-small">Size 1</option>
                    <option value="small">Size 2</option>
                    <option value="medium">Size 3</option>
                    <option value="large">Size 4</option>
                </select>
                <select className="ql-header" defaultValue="3">
                    <option value="1">Heading</option>
                    <option value="2">Subheading</option>
                    <option value="3">Normal</option>
                </select>
            </span>
            <span className="ql-formats">
                <button className="ql-bold" />
                <button className="ql-italic" />
                <button className="ql-underline" />
                <button className="ql-strike" />
            </span>
            <span className="ql-formats">
                <button className="ql-list" value="ordered" />
                <button className="ql-list" value="bullet" />
                <button className="ql-indent" value="-1" />
                <button className="ql-indent" value="+1" />
            </span>
            <span className="ql-formats">
                <button className="ql-script" value="super" />
                <button className="ql-script" value="sub" />
                <button className="ql-blockquote" />
                <button className="ql-direction" />
            </span>
            <span className="ql-formats">
                <select className="ql-align" />
                <select className="ql-color" />
                <select className="ql-background" />
            </span>
            <span className="ql-formats">
                <button className="ql-link" />
                <button className="ql-image" />
                <button className="ql-video" />
            </span>
            <span className="ql-formats">
                <button className="ql-formula" />
                <button className="ql-code-block" />
                <button className="ql-clean" />
            </span>
            <span className="ql-formats">
                <button className="ql-undo">
                    <CustomUndo />
                </button>
                <button className="ql-redo">
                    <CustomRedo />
                </button>
            </span>
        </div>
    );

    return (
        <div className="new-blog">
            <h1>Tạo blog mới</h1>
            <label htmlFor="title">Tiêu đề:</label>
            <input
                className="input-title"
                // value={title}
                id="title"
                onChange={(e) => (title = e.target.value)}
                placeholder="Tiêu đề"
            />
            <QuillToolbar />
            <ReactQuill
                theme="snow"
                value={""}
                onChange={handleChange}
                placeholder={"Nội dung..."}
                modules={modules}
                formats={formats}
            />
            <div className="btn-create-new-blog">
                <button onClick={create}>Tạo mới</button>
            </div>
        </div>
    );
};
export default FormBlog;
