import { useState } from "react";
import { checkRePassword, validateEmail } from "../../../utils/validate";
import API from "../../../api";
import { DataRegister, ResponseRegister } from "../../../interface/api/UserAPI";
import { AxiosResponse } from "axios";
import { useHistory } from "react-router-dom";
import { errorAPI } from "../../../components/Error";
import notify from "../../../components/notify";
import { LOGIN } from "../../../router/route";

interface DataFormRegister extends DataRegister {
    rePassword: string;
}

const useRegister = () => {
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

    return {
        valiUsername,
        setValiUsername,
        valiPassword,
        setValiPassword,
        valiRePassword,
        setValiRePassword,
        valiEmail,
        setValiEmail,
        onSubmit,
    };
};
export default useRegister;
