import React, { Suspense } from "react";
import {
    LOGIN,
    REGISTER,
    HOME,
    ACTIVATE_USER,
    SEND_RESET_PASSWORD,
    RESET_PASSWORD,
} from "./const";
import {
    Route,
    Redirect,
    Switch,
    BrowserRouter as Router,
} from "react-router-dom";
import { useSelector } from "react-redux";
// import Home from '../home/content/home';
import "./router.scss";
import "./general.scss";
import { AppState } from "../../interface/redux";
const Login = React.lazy(() => import("../user/login"));
const Register = React.lazy(() => import("../user/register"));
const PrivateRouter = React.lazy(() => import("./PrivateRouter"));
const ActivateUser = React.lazy(() => import("../user/activate-user"));
const SendResetPassword = React.lazy(
    () => import("../user/send-reset-password")
);
const ResetPassword = React.lazy(() => import("../user/reset-password"));
export function WaitingComponent(Component: any) {
    return (props: any) => (
        <Suspense fallback={<div>loading</div>}>
            <Component {...props} />
        </Suspense>
    );
}

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={LOGIN} component={WaitingComponent(Login)} />
                <Route
                    exact
                    path={REGISTER}
                    component={WaitingComponent(Register)}
                />
                <Route
                    exact
                    path={ACTIVATE_USER}
                    component={WaitingComponent(ActivateUser)}
                />
                <Route
                    exact
                    path={SEND_RESET_PASSWORD}
                    component={WaitingComponent(SendResetPassword)}
                />
                <Route
                    exact
                    path={RESET_PASSWORD}
                    component={WaitingComponent(ResetPassword)}
                />
                <CheckLogin />
            </Switch>
        </Router>
    );
};
export default Routers;

const CheckLogin = (props: any) => {
    // const token = localStorage.getItem("token");
    const token = useSelector((state: AppState) => state.userState.token);
    console.log("token", token);

    if (token)
        return (
            <Route path={HOME} component={WaitingComponent(PrivateRouter)} />
        );
    else
        return (
            <Redirect
                to={{
                    pathname: LOGIN,
                    search: `?next=${props.location.pathname}${props.location.search}`,
                }}
            />
        );
};
