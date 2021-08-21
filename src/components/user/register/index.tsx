import React, { useRef } from "react";
import Input from "../../utils/Input";
const Register = () => {
    const usernameRef = useRef<string>("")
    const passwordRef = useRef<string>("")
    const rePasswordRef = useRef<string>("")
    const emailRef = useRef<string>("")
    const firstNameRef = useRef<string>("")
    const lastNameRef = useRef<string>("")
    return (
        <form>
            <label>
                Tên đăng nhập:
                <Input refValue={usernameRef} />
            </label>
            <label>
                Mật khẩu:
                <Input type="password" refValue={passwordRef} />
            </label>
            <label>
                Nhập lại mật khẩu:
                <Input type="password" refValue={rePasswordRef} />
            </label>
            <label>
                Email:
                <Input refValue={emailRef} />
            </label>
            <label>
                Họ:
                <Input refValue={firstNameRef} />
            </label>
            <label>
                Tên:
                <Input refValue={lastNameRef} />
            </label>
        </form>
    )
}
export default Register