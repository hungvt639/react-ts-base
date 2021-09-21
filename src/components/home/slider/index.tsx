import React from "react";
import "./slide.scss";
import { useTranslation } from "react-i18next";
const Slider = () => {
    const { t } = useTranslation();
    return <div className="slider">{t("Slider")}</div>;
};
export default Slider;
