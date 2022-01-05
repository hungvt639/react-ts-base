import { changePassword } from "./function";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ValidateNotification from "../../components/ValidateNotification";

const ChangePassword = () => {
    const { register, handleSubmit, reset } = useForm();
    const [showValidate, setShowValidate] = useState({
        oldPassword: false,
        password: false,
        rePassword: false,
        checkRePassword: false,
    });
    return (
        <form
            onSubmit={handleSubmit((data: any) =>
                changePassword(data, setShowValidate, reset)
            )}
        >
            <div className="flex-column old-password">
                <label htmlFor="old_password">Mật khẩu cũ:</label>
                <input
                    type="password"
                    id="old_password"
                    {...register("old_password", {
                        required: true,
                    })}
                />
                <ValidateNotification
                    show={showValidate.oldPassword}
                    message={"Mật khẩu cũ không được để trống"}
                />
            </div>

            <div className="flex-row">
                <div className="flex-column new-password">
                    <label htmlFor="password">Mật khẩu mới:</label>
                    <input
                        type="password"
                        id="password"
                        {...register("password", {
                            required: true,
                        })}
                    />
                    <ValidateNotification
                        show={showValidate.password}
                        message={"Mật khẩu không được để trống"}
                    />
                </div>
                <div className="flex-column re-new-password">
                    <label htmlFor="re_password">Nhập lại mật khẩu:</label>
                    <input
                        type="password"
                        id="re_password"
                        {...register("re_password", {
                            required: true,
                        })}
                    />
                    <ValidateNotification
                        show={showValidate.rePassword}
                        message={"Vui lòng nhập lại mật khẩu"}
                    />
                    <ValidateNotification
                        show={showValidate.checkRePassword}
                        message={"Nhập lại mật khẩu không đúng"}
                    />
                </div>
            </div>
            <div className="btn-submit-change-password">
                <button type="submit">Đổi mật khẩu</button>
            </div>
        </form>
    );
};
export default ChangePassword;
