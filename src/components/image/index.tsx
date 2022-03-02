import React, { useState } from "react";
import "./style.scss";
type ImageProps = {
    className?: string;
    src: string;
    alt: string;
};
const Image = (props: ImageProps) => {
    const { className, alt, src } = props;
    return (
        <div className={`_images ${className}`}>
            <img src={src} alt={alt} />
        </div>
    );
};
export default Image;
