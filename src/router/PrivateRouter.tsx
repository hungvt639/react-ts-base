import React from "react";
import Header from "../components/header";
import { Route, Switch } from "react-router-dom";
import { WaitingComponent } from ".";
import {
    HOME,
    NEW_BLOG,
    LIST_BLOG,
    BLOG_VIEW,
    USER_PROFILE_ROUTER,
    MESSAGE_ROUTER,
} from "./const";
import useNotification from "./hooks/useNotification";

const Profile = React.lazy(() => import("../screens/profile"));
const NewBlog = React.lazy(() => import("../screens/new_blog"));
const Home = React.lazy(() => import("../screens/home"));
const ListBlog = React.lazy(() => import("../screens/list-blog"));
const BlogView = React.lazy(() => import("../screens/blog-view"));
const Chat = React.lazy(() => import("../screens/chat"));

const PrivateRouter = (props: any) => {
    const pathname = props.location.pathname;

    useNotification(pathname);
    return (
        <>
            <Header />
            <div className="content">
                <Switch>
                    <Route
                        exact
                        path={USER_PROFILE_ROUTER}
                        component={WaitingComponent(Profile)}
                    />
                    <Route
                        exact
                        path={NEW_BLOG}
                        component={WaitingComponent(NewBlog)}
                    />
                    <Route
                        exact
                        path={LIST_BLOG}
                        component={WaitingComponent(ListBlog)}
                    />
                    <Route
                        exact
                        path={BLOG_VIEW}
                        component={WaitingComponent(BlogView)}
                    />
                    <Route
                        exact
                        path={MESSAGE_ROUTER}
                        component={WaitingComponent(Chat)}
                    />
                    <Route path={HOME} component={WaitingComponent(Home)} />
                </Switch>
            </div>
        </>
    );
};

export default PrivateRouter;
