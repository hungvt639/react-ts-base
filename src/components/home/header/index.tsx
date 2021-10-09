import React from "react";
import "./header.scss";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { clearUser } from "../../../store/actions/userAction";
const Header = () => {
    const dispatch = useDispatch();
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
        localStorage.removeItem("user");
    }
    return (
        <div className="header">
            <div>{t("Header")}</div>
            <button onClick={onLangChange}>{t("L")}</button>
            <button onClick={logout}>{t("Logout")}</button>
        </div>
    );
};
export default Header;
