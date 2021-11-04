import React from "react";
import "./header.scss";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../../store/actions/userAction";
import { Dropdown } from "antd";
import { AppState } from "../../../interface/redux";
const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: AppState) => state.userState.user);
    const { t, i18n } = useTranslation();

    function onLangChange() {
        let lg = "";
        if (i18n.language === "vi") {
            lg = "en";
        } else {
            lg = "vi";
        }
        i18n.changeLanguage(lg);
    }
    function logout() {
        dispatch(clearUser());
        localStorage.removeItem("token");
        // localStorage.removeItem("user");
    }
    const menu = <div onClick={logout}>{t("Logout")}</div>;
    return (
        <div className="header">
            <div className="max-width1200 headers margin-auto">
                <div className="width-100 height-100">{t("Header")}</div>
                <div className="align-items-center">
                    <div className="btn-header" onClick={onLangChange}>
                        {t("L")}
                    </div>
                    <Dropdown overlay={menu} placement="bottomRight">
                        <div className="btn-header">{`${user?.first_name} ${user?.last_name}`}</div>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};
export default Header;
