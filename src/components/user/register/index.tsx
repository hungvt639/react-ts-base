import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { LOGIN } from "../../router/const";
import { checkRePassword, validateEmail } from "../../../utils/validate";
import "./register.scss";
import API from "../../../request";
import { ResponseRegister } from "../../../interface/request/UserRespository";
import { AxiosResponse } from "axios";
import { message } from "antd";
import { useHistory } from "react-router-dom";
import { errorAPI } from "../../utils/Error";
const Register = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rePassword, setRePassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [first_name, setFirstName] = useState<string>("");
    const [last_name, setLastName] = useState<string>("");

    const [valiUsername, setValiUsername] = useState<boolean>(false);
    const [valiPassword, setValiPassword] = useState<boolean>(false);
    const [valiRePassword, setValiRePassword] = useState<boolean>(false);
    const [valiEmail, setValiEmail] = useState<boolean>(false);

    const history = useHistory();

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();

        setValiUsername(!username);
        setValiPassword(!password);
        setValiRePassword(!checkRePassword(password, rePassword));
        setValiEmail(!validateEmail(email));

        if (
            username &&
            password &&
            rePassword &&
            email &&
            validateEmail(email) &&
            checkRePassword(password, rePassword)
        ) {
            try {
                const data = {
                    username,
                    password,
                    email,
                    first_name,
                    last_name,
                };
                const res: AxiosResponse<ResponseRegister> =
                    await API.user.register(data);
                console.log(res);
                for (const mess of res.data.message) {
                    message.success(mess);
                }
                history.push(LOGIN);
            } catch (err) {
                errorAPI(err);
            }
        }
    }

    return (
        <div className="register">
            <div className="forms_">
                <h1>Đăng ký</h1>
                <form onSubmit={(e) => onSubmit(e)} className="form_">
                    <div className="fullname">
                        <label className="firstname">
                            <input
                                value={first_name}
                                onChange={(e) => setFirstName(e.target.value)}
                                type="text"
                                name="firstName"
                                placeholder="Họ"
                            />
                        </label>
                        <label className="lastname">
                            <input
                                value={last_name}
                                onChange={(e) => setLastName(e.target.value)}
                                type="text"
                                name="lastName"
                                placeholder="Tên"
                            />
                        </label>
                    </div>
                    <label>
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
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setValiEmail(!validateEmail(e.target.value));
                            }}
                            type="text"
                            name="email"
                            placeholder="Email"
                        />
                        {valiEmail ? (
                            <p className="form-mess-err">
                                Định dạng email không đúng!
                            </p>
                        ) : (
                            <Fragment />
                        )}
                    </label>
                    <label>
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
                    <label>
                        <input
                            value={rePassword}
                            onChange={(e) => {
                                setRePassword(e.target.value);
                                setValiRePassword(
                                    !checkRePassword(password, e.target.value)
                                );
                            }}
                            type="password"
                            name="re-password"
                            placeholder="Nhập lại mật khẩu"
                            autoComplete="on"
                        />
                        {valiRePassword ? (
                            <p className="form-mess-err">
                                Nhập lại mật khẩu không khớp!
                            </p>
                        ) : (
                            <Fragment />
                        )}
                    </label>
                    <button type="submit">Đăng ký</button>
                    <p className="form-has-user">
                        Đã có tài khoản <Link to={LOGIN}>Đăng Nhập ngay</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};
export default Register;
