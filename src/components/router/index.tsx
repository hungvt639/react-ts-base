import React, { Suspense } from "react";
import { LOGIN, REGISTER, HOME } from "./const";
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
// import Home from '../home/content/home';

const Login = React.lazy(() => import("../user/login"));
const Register = React.lazy(() => import("../user/register"));
const Screen = React.lazy(() => import("./Screen"));

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
        <Route exact path={REGISTER} component={WaitingComponent(Register)} />
        <CheckLogin />
      </Switch>
    </Router>
  );
};
export default Routers;

const CheckLogin = () => {
  const token = localStorage.getItem("token");
  if (token) return <Route path={HOME} component={WaitingComponent(Screen)} />;
  else return <Redirect to={LOGIN} />;
};
