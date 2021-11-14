import React from "react";
import "./header.scss";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../../store/actions/userAction";
import { Dropdown } from "antd";
import { AppState } from "../../../interface/redux";
import { Link } from "react-router-dom";
import { PROFILE } from "../../../router/const";
import VIImg from "../../../img/vi.png";
import ENImg from "../../../img/en.png";

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
    const menu = (
        <div>
            <div>
                <Link to={PROFILE}>Profile</Link>
            </div>
            <div onClick={logout}>{t("Logout")}</div>
        </div>
    );
    return (
        <div className="header">
            <div className="max-width1200 headers margin-0auto">
                <div className="width-100 height-100">{t("Header")}</div>
                <div className="align-items-center">
                    <div className="btn-header" onClick={onLangChange}>
                        <img
                            className="img-language"
                            width="24px"
                            alt="language"
                            src={i18n.language === "vi" ? VIImg : ENImg}
                        />
                        {t("L")}
                    </div>
                    <Dropdown overlay={menu} placement="bottomRight">
                        <div className="btn-header">{`${user?.last_name} ${user?.first_name}`}</div>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};
export default Header;
