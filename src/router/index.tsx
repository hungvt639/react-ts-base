import React, { Suspense, useEffect, useState } from "react";
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
import { useSelector, useDispatch } from "react-redux";
// import Home from '../home/content/home';
import "./router.scss";
import "./general.scss";
import { AppState } from "../interface/redux";
import { UserInterface } from "../interface";
import API from "../request";
import { AxiosResponse } from "axios";
import { clearUser, setUser } from "../store/actions/userAction";
const Login = React.lazy(() => import("../screens/login"));
const Register = React.lazy(() => import("../screens/register"));
const PrivateRouter = React.lazy(() => import("./PrivateRouter"));
const ActivateUser = React.lazy(() => import("../screens/activate-user"));
const SendResetPassword = React.lazy(
    () => import("../screens/send-reset-password")
);
const ResetPassword = React.lazy(() => import("../screens/reset-password"));
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
    const [loading, setLoading] = useState<boolean>(true);
    const dispatch = useDispatch();
    const token = useSelector((state: AppState) => state.userState.token);
    const user = useSelector((state: AppState) => state.userState.user);
    useEffect(() => {
        async function getProfile() {
            if (!user && token) {
                try {
                    const res: AxiosResponse<UserInterface> =
                        await API.user.getProfile();
                    dispatch(setUser(res.data, token));
                } catch (e) {
                    dispatch(clearUser());
                    localStorage.removeItem("token");
                    // localStorage.removeItem("user");
                }
            }
        }
        getProfile();
        setLoading(false);
    }, [user, token, dispatch]);
    if (loading) {
        return <div>Loading...!</div>;
    }
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
