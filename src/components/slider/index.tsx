import React from "react";
import "./slide.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HOME, LIST_BLOG, MAP, NEW_BLOG } from "../../router/const";
const Slider = () => {
    const { t } = useTranslation();
    return (
        <div className="slider">
            {t("Slider")}
            <div>
                <Link to={HOME}>Home</Link>
            </div>
            <div>
                <Link to={NEW_BLOG}>New Blog</Link>
            </div>
            <div>
                <Link to={LIST_BLOG}>List Blog</Link>
            </div>
            <div>
                <Link to={MAP}>Map</Link>
            </div>
        </div>
    );
};
export default Slider;
