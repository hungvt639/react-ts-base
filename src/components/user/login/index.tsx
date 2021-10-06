import React, { useState, Fragment } from "react";
import { REGISTER, SEND_RESET_PASSWORD } from "../../router/const";
import { Link } from "react-router-dom";
import "./login.scss";
import API from "../../../request";
import { errorAPI } from "../../utils/Error";
import { ResponseLogin } from "../../../interface/request/UserRespository";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/actions/userAction";
import { message } from "antd";
import { useHistory } from "react-router-dom";
import { HOME } from "../../router/const";

const LoginForm: React.FC = (props: any) => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [valiUsername, setValiUsername] = useState<boolean>(false);
    const [valiPassword, setValiPassword] = useState<boolean>(false);

    const dispatch = useDispatch();
    const history = useHistory();

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (username && password) {
            try {
                const res: AxiosResponse<ResponseLogin> = await API.user.login({
                    username,
                    password,
                });
                localStorage.setItem("token", res.data.token);
                dispatch(setUser(res.data.user, res.data.token));
                message.success("Đăng nhập thành công!");
                const backTo: string = props.location.search;
                if (backTo) {
                    history.push(backTo.slice(6));
                } else {
                    history.push(HOME);
                }
            } catch (err) {
                errorAPI(err);
            }
        }
    }

    return (
        <div className="login">
            <div className="forms_">
                <h1>Đăng nhập</h1>
                <form onSubmit={(e) => onSubmit(e)} className="form_">
                    <label>
                        Tài khoản đăng nhập (*)
                        <br />
                        <input
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                                setValiUsername(!e.target.value);
                            }}
                            type="text"
                            name="username"
                            placeholder="Tài khoản đăng nhập"
                        />
                        {valiUsername ? (
                            <p className="form-mess-err">
                                Tài khoản không được để trống!
                            </p>
                        ) : (
                            <Fragment />
                        )}
                    </label>

                    <label>
                        Mật khẩu (*)
                        <br />
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setValiPassword(!e.target.value);
                            }}
                            type="password"
                            name="password"
                            placeholder="Mật khẩu"
                            autoComplete="on"
                        />
                        {valiPassword ? (
                            <p className="form-mess-err">
                                Mật khẩu không được để trống!
                            </p>
                        ) : (
                            <Fragment />
                        )}
                    </label>
                    <div className="forgot-password">
                        <Link to={SEND_RESET_PASSWORD}>Quên mật khẩu</Link>
                    </div>
                    <button type="submit">Đăng nhập</button>
                    <p className="form-has-user">
                        Không có tài khoản{" "}
                        <Link to={REGISTER}>Đăng ký ngay</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};
export default LoginForm;
