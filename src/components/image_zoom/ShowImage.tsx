import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./style.scss";
import {
    MdRotateLeft,
    MdRotateRight,
    MdZoomIn,
    MdZoomOut,
    MdClose,
} from "react-icons/md";
type ShowImageProps = {
    src: string;
    alt: string;
    show: boolean;
    onClose: () => void;
};
const ShowImage = (props: ShowImageProps) => {
    const { alt, src, show, onClose } = props;

    const [showElememt, setShowElememt] = useState<boolean>(false);
    const [scale, setScale] = useState<number>(0);
    const [rotate, setRotate] = useState<number>(0);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [bgrSize, setBgrSize] = useState("");
    const [bgrPosition, setBgrPosition] = useState("");
    const imgRef = useRef<HTMLImageElement>(null);
    const scales = [1, 1.2, 1.5, 2, 3, 5];
    const rectangle = { width: 40, height: 40, scale: 10 };
    // const result = { width: 800, height: 100 };
    const imgW = 300;
    const setDataScale = useCallback(
        (i: number) => {
            if (scale + i < 0 || scale + i >= scales.length) return;
            setScale(scale + i);
        },
        [scale, scales.length]
    );

    useEffect(() => {
        if (show === true) {
            setShowElememt(true);
        } else {
            setTimeout(() => {
                setScale(0);
                setRotate(0);
                setShowElememt(false);
            }, 200);
        }
    }, [show]);

    const escFunction = useCallback(
        (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

    const getBgrSize = useMemo(() => {
        return imgW * rectangle.scale + "px ";
    }, [rectangle.scale]);

    useEffect(() => {
        console.log("ref", imgRef.current);
        // if (imgRef.current)
        //     let offset = imgRef.current.getBoundingClientRect()

        // const img = document.getElementById("myimage");
        // console.log(img);

        // if (img) {
        //     const offset = img.getBoundingClientRect();
        //     // const cx = result.width / rectangle.width;
        //     // const cy = result.height / rectangle.height;
        //     setBgrSize(
        //         offset.width * rectangle.scale +
        //             "px " +
        //             offset.height * rectangle.scale +
        //             "px"
        //     );
        // }
    }, []);

    //_________________________
    const changePosition = useCallback(
        (e: any) => {
            e.preventDefault();
            // const offset = e.target.getBoundingClientRect();
            const img = document.getElementById("myimage");
            if (img) {
                const offset = img.getBoundingClientRect();
                let top = e.clientY - offset.top - rectangle.height / 2;
                if (top + rectangle.height > offset.height)
                    top = offset.height - rectangle.height;
                if (top < 0) top = 0;

                let left = e.clientX - offset.left - rectangle.width / 2;
                if (left + rectangle.width > offset.width)
                    left = offset.width - rectangle.width;
                if (left < 0) left = 0;
                setPosition({ left: left, top: top });
                // const cx = result.width / rectangle.width;
                // const cy = result.height / rectangle.height;
                setBgrSize(
                    offset.width * rectangle.scale +
                        "px " +
                        offset.height * rectangle.scale +
                        "px"
                );
                setBgrPosition(
                    "-" +
                        left * rectangle.scale +
                        "px -" +
                        top * rectangle.scale +
                        "px"
                );
            }
        },
        [rectangle.height, rectangle.scale, rectangle.width]
    );
    if (!showElememt) return <></>;

    return (
        <div
            className={
                show
                    ? "modal-img modal-img-view"
                    : "modal-img modal-img-not-view"
            }
        >
            <div onClick={onClose} className="close-modal-img"></div>
            <div className="show-modal-img">
                <div
                    onMouseMove={changePosition}
                    className="img-zoom-container"
                >
                    <img
                        ref={imgRef}
                        id="myimage"
                        src={src}
                        alt={alt}
                        width={imgW}
                    ></img>
                    <div
                        style={{ ...position, ...rectangle }}
                        className="img-zoom-lens"
                    ></div>
                </div>
                <div
                    id="myresult"
                    style={{
                        backgroundImage: `url('${src}')`,
                        backgroundSize: getBgrSize,
                        backgroundPosition: bgrPosition,
                        width: rectangle.width * rectangle.scale,
                        height: rectangle.height * rectangle.scale,
                    }}
                    className="img-zoom-result"
                ></div>

                {/* <img
                    style={{
                        transform: `rotate(${rotate}deg) scale(${scales[scale]},${scales[scale]})`,
                    }}
                    src={src}
                    alt={alt}
                /> */}
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
                    className={scale === 0 ? "btn-action-img-disable" : ""}
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
                <span onClick={onClose}>
                    <MdClose />
                </span>
            </div>
        </div>
    );
};
export default ShowImage;
