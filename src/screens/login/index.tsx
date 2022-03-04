import React, { useState, Fragment } from "react";
import { REGISTER, SEND_RESET_PASSWORD } from "../../router/route";
import { Link } from "react-router-dom";
import "./login.scss";
import API from "../../api";
import { errorAPI } from "../../components/Error";
import { ResponseLogin } from "../../interface/api/UserAPI";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { HOME } from "../../router/route";
import notify from "../../components/notify";
import action from "../../store/actions";
import ImageZoom from "../../components/image_zoom";
import Ns2 from "../../img/ns2.png";
const LoginForm = (props: any) => {
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
                dispatch(action.setResLogin(res.data.user, res.data.token));
                notify.success("Đăng nhập thành công!");
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
                <ImageZoom src={Ns2} alt="abc" />

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
