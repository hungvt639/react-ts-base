import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { setUser } from "../../../store/actions/userAction";
import { useHistory } from 'react-router-dom';
import { HOME } from '../../router/const'
import API from "../../../request";
import { message } from 'antd'
import { errorAPI } from "../../utils/Error";
const Login = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const dispatch = useDispatch()
    const history = useHistory()
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        API.user.login({ username, password })
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                dispatch(setUser(res.data.user))
                history.push(HOME)
                message.success("Đăng nhập thành công")
            }).catch(errorAPI)
    }
    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <label>
                Tên đăng nhập:
                <input value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>
                Mật khẩu:
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            </label>
            <br />
            <button type="submit">Đăng nhập</button>
        </form>
    )
}
export default Login