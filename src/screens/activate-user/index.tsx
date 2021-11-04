import { AxiosResponse } from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ResponseActivateUser } from "../../interface/request/UserRespository";
import API from "../../request";
import { LOGIN } from "../../router/const";
import { errorAPI } from "../../components/Error";
import { message } from "antd";

const ActivateUser = () => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function activate() {
            try {
                const active_token: string =
                    window.location.search.split("=")[1];
                const res: AxiosResponse<ResponseActivateUser> =
                    await API.user.activateUser({ active_token: active_token });
                setLoading(false);
                message.success(res.data.message[0]);
            } catch (err: any) {
                errorAPI(err);
            }
        }
        activate();
    }, []);

    if (loading) {
        return <div>Loading...!</div>;
    } else {
        return (
            <div>
                Kích hoạt tài khoản thành công, bấm vào
                <Link to={LOGIN}> đây</Link> để đăng nhập
            </div>
        );
    }
};
export default ActivateUser;
