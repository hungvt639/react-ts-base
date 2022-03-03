import React, { useState } from "react";
import "./style.scss";
import {
    MdRemoveRedEye,
    MdRotateLeft,
    MdRotateRight,
    MdZoomIn,
    MdZoomOut,
    MdClose,
} from "react-icons/md";
type ImageProps = {
    className?: string;
    src: string;
    alt: string;
    width?: string | number;
    height?: string | number;
};
const Image = (props: ImageProps) => {
    const [show, setShow] = useState<boolean>(false);
    const [showElememt, setShowElememt] = useState<boolean>(false);

    const [scale, setScale] = useState<number>(0);
    const [rotate, setRotate] = useState<number>(0);
    const scales = [1, 1.2, 1.5, 2, 3, 5];

    function setDataScale(i: number) {
        if (scale + i < 0 || scale + i >= scales.length) return;
        setScale(scale + i);
    }
    const { className, alt, src, width, height } = props;
    function showImg() {
        setShowElememt(true);
        setShow(true);
    }
    function closeImg() {
        setShow(false);
        setTimeout(() => {
            setScale(0);
            setRotate(0);
            setShowElememt(false);
        }, 200);
        // clearTimeout(timerShow);
    }
    return (
        <div
            style={{ width: width ?? "", height: height ?? "" }}
            className={`_images ${className ?? ""}`}
        >
            <img src={src} alt={alt} />
            <div onClick={showImg} className="preview">
                <MdRemoveRedEye style={{ marginRight: 5 }} /> Preview
            </div>
            {showElememt ? (
                <div
                    className={
                        show
                            ? "modal-img modal-img-view"
                            : "modal-img modal-img-not-view"
                    }
                >
                    <div onClick={closeImg} className="close-modal-img"></div>
                    <div className="show-modal-img">
                        <img
                            style={{
                                transform: `rotate(${rotate}deg) scale(${scales[scale]},${scales[scale]})`,
                            }}
                            src={src}
                            alt={alt}
                        />
                    </div>
                    <div className="btn-action-img">
                        <span onClick={() => setRotate(rotate - 90)}>
                            <MdRotateLeft />
                        </span>
                        <span onClick={() => setRotate(rotate + 90)}>
                            <MdRotateRight />
                        </span>
                        <span
                            onClick={() => setDataScale(-1)}
                            className={
                                scale === 0 ? "btn-action-img-disable" : ""
                            }
                        >
                            <MdZoomIn />
                        </span>
                        <span
                            onClick={() => setDataScale(+1)}
                            className={
                                scale === scales.length - 1
                                    ? "btn-action-img-disable"
                                    : ""
                            }
                        >
                            <MdZoomOut />
                        </span>
                        <span onClick={closeImg}>
                            <MdClose />
                        </span>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};
export default Image;
