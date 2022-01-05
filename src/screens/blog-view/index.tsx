import ViewBlog from "../../components/BlogView";

const BlogView = (props: any) => {
    const slug = props.match.params.slug;
    return <ViewBlog slug={slug} />;
};
export default BlogView;
