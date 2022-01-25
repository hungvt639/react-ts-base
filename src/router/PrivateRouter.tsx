import React from "react";
import Header from "../components/header";
// import Slider from "../components/slider";
import { Route, Switch } from "react-router-dom";
import { WaitingComponent } from ".";
// import map from "../screens/home/content/map";
import {
    HOME,
    NEW_BLOG,
    MAP,
    LIST_BLOG,
    BLOG_VIEW,
    USER_PROFILE_ROUTER,
    MESSAGE_ROUTER,
} from "./const";

const Profile = React.lazy(() => import("../screens/profile"));
const NewBlog = React.lazy(() => import("../screens/new_blog"));
const Home = React.lazy(() => import("../screens/home"));
const Maps = React.lazy(() => import("../screens/map"));
const ListBlog = React.lazy(() => import("../screens/list-blog"));
const BlogView = React.lazy(() => import("../screens/blog-view"));
const Chat = React.lazy(() => import("../screens/chat"));

const PrivateRouter = () => {
    return (
        <>
            <Header />
            <div className="content">
                {/* <Slider /> */}
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
                    <Route exact path={MAP} component={Maps} />
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
