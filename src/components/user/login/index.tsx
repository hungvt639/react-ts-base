import React, { useState, Fragment } from "react";
import { REGISTER, RESET_PASSWORD } from "../../router/const";
import { Link } from "react-router-dom";
import "./login.scss";

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [valiUsername, setValiUsername] = useState<boolean>(false);
    const [valiPassword, setValiPassword] = useState<boolean>(false);
    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setValiUsername(!username);
        setValiPassword(!password);
        if (username && password) {
            const data = { username: username, password: password };
            console.log(data);
        }
    }

    return (
        <div className="forms_">
            <h1>Đăng nhập</h1>
            <form onSubmit={(e) => onSubmit(e)} className="form_">
                <label>
                    Tài khoản đăng nhập (*)
                    <br />
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
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
                    <Link to={RESET_PASSWORD}>Quên mật khẩu</Link>
                </div>
                <button type="submit">Đăng nhập</button>
                <p className="form-has-user">
                    Không có tài khoản <Link to={REGISTER}>Đăng ký ngay</Link>
                </p>
            </form>
        </div>
    );
};
export default LoginForm;
