import React, { useState } from "react";
import "./style.scss";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ResponseLogin } from "../../../interface/api/UserAPI";
import API from "../../../api";
import action from "../../../store/actions";
import notify from "../../../components/notify";
import { HOME } from "../../../router/route";
import { errorAPI } from "../../../components/Error";

const useLogin = (props: any) => {
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

    return {
        username,
        setUsername,
        password,
        setPassword,
        valiUsername,
        setValiUsername,
        valiPassword,
        setValiPassword,
        onSubmit,
    };
};
export default useLogin;
