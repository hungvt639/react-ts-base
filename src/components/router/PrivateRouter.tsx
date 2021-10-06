import React from "react";
import Header from "../home/header";
import Slider from "../home/slider";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { WaitingComponent } from ".";
import { PROFILE, HOME } from "./const";

const Profile = React.lazy(() => import("../home/content/profile"));
const Home = React.lazy(() => import("../home/content/home"));
const PrivateRouter = () => {
    return (
        <Router>
            <Header />
            <div className="content">
                <Slider />
                <Switch>
                    <Route
                        exact
                        path={PROFILE}
                        component={WaitingComponent(Profile)}
                    />
                    <Route path={HOME} component={WaitingComponent(Home)} />
                </Switch>
            </div>
        </Router>
    );
};
export default PrivateRouter;
