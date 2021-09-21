import React from "react";
import "./header.scss";
import { useTranslation } from "react-i18next";
const Header = () => {
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
    return (
        <div className="header">
            <div>{t("Header")}</div>
            <button onClick={onLangChange}>{t("L")}</button>
        </div>
    );
};
export default Header;
