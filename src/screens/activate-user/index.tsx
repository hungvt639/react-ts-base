import { AxiosResponse } from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ResponseActivateUser } from "../../interface/api/UserAPI";
import API from "../../api";
import { LOGIN } from "../../router/route";
import { errorAPI } from "../../components/Error";
import notify from "../../components/notify";

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
                notify.success(res.data.message[0]);
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
