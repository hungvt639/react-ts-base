import "./style.scss";
type propsModal = {
    children: any;
    show: boolean;
    onClose: any;
};

const Modal = (props: propsModal) => {
    const { children, show, onClose } = props;
    return (
        <div className={show ? "modal" : "modal-none"}>
            <div className={show ? "modal-children" : "modal-children-none"}>
                {children}
            </div>
            <div
                style={{ display: show ? "block" : "none" }}
                onClick={onClose}
                className="modal-close"
            ></div>
        </div>
    );
};
export default Modal;
