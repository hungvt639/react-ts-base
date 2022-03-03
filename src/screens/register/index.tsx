import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LOGIN } from "../../router/route";
import { checkRePassword, validateEmail } from "../../utils/validate";
import "./register.scss";
import API from "../../api";
import { DataRegister, ResponseRegister } from "../../interface/api/UserAPI";
import { AxiosResponse } from "axios";
import { useHistory } from "react-router-dom";
import { errorAPI } from "../../components/Error";
import { useForm } from "react-hook-form";
import notify from "../../components/notify";

interface DataFormRegister extends DataRegister {
    rePassword: string;
}

const Register = () => {
    const { register, handleSubmit, getValues } = useForm();

    // const [username, setUsername] = useState<string>("");
    // const [password, setPassword] = useState<string>("");
    // const [rePassword, setRePassword] = useState<string>("");
    // const [email, setEmail] = useState<string>("");
    // const [first_name, setFirstName] = useState<string>("");
    // const [last_name, setLastName] = useState<string>("");

    const [valiUsername, setValiUsername] = useState<boolean>(false);
    const [valiPassword, setValiPassword] = useState<boolean>(false);
    const [valiRePassword, setValiRePassword] = useState<boolean>(false);
    const [valiEmail, setValiEmail] = useState<boolean>(false);

    const history = useHistory();

    async function onSubmit(data: DataFormRegister) {
        console.log("data", data);

        setValiUsername(!data.username);
        setValiPassword(!data.password);
        setValiRePassword(!checkRePassword(data.password, data.rePassword));
        setValiEmail(!validateEmail(data.email));
        if (
            data.username &&
            data.password &&
            data.rePassword &&
            data.email &&
            validateEmail(data.email) &&
            checkRePassword(data.password, data.rePassword)
        ) {
            try {
                const res: AxiosResponse<ResponseRegister> =
                    await API.user.register(data);
                console.log(res);
                notify.success(
                    "Đăng ký tài khoản thành công, vui lòng đăng nhập để sử dụng dịch vụ"
                );
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
                <form onSubmit={handleSubmit(onSubmit)} className="form_">
                    <label>
                        <input
                            {...register("fullname")}
                            type="text"
                            name="fullname"
                            placeholder="Họ và Tên"
                        />
                        <p className="form-mess-err"></p>
                    </label>

                    <label>
                        <input
                            {...register("username")}
                            type="text"
                            name="username"
                            placeholder="Tài khoản đăng nhập"
                            onChange={(e) => {
                                setValiUsername(!e.target.value);
                            }}
                        />
                        {valiUsername ? (
                            <p className="form-mess-err">
                                Tài khoản không được để trống!
                            </p>
                        ) : (
                            <p className="form-mess-err"></p>
                        )}
                    </label>

                    <label>
                        <input
                            {...register("email")}
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={(e) => {
                                setValiEmail(!validateEmail(e.target.value));
                            }}
                        />
                        {valiEmail ? (
                            <p className="form-mess-err">
                                Định dạng email không đúng!
                            </p>
                        ) : (
                            <p className="form-mess-err"></p>
                        )}
                    </label>
                    <label>
                        <input
                            {...register("password")}
                            type="password"
                            name="password"
                            placeholder="Mật khẩu"
                            autoComplete="on"
                            onChange={(e) => {
                                setValiPassword(!e.target.value);
                            }}
                        />
                        {valiPassword ? (
                            <p className="form-mess-err">
                                Mật khẩu không được để trống!
                            </p>
                        ) : (
                            <p className="form-mess-err"></p>
                        )}
                    </label>
                    <label>
                        <input
                            {...register("rePassword")}
                            type="password"
                            name="rePassword"
                            placeholder="Nhập lại mật khẩu"
                            autoComplete="on"
                            onChange={(e) => {
                                setValiRePassword(
                                    !checkRePassword(
                                        getValues("password"),
                                        e.target.value
                                    )
                                );
                            }}
                        />
                        {valiRePassword ? (
                            <p className="form-mess-err">
                                Nhập lại mật khẩu không khớp!
                            </p>
                        ) : (
                            <p className="form-mess-err"></p>
                        )}
                    </label>
                    <label className="address">
                        <input
                            {...register("address")}
                            type="text"
                            name="address"
                            placeholder="Địa chỉ"
                        />
                        <p className="form-mess-err"></p>
                    </label>
                    <label className="birthday">
                        <input
                            {...register("birthday")}
                            type="text"
                            name="birthday"
                            placeholder="Ngày sinh"
                        />
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
