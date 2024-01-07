import styles from "./_Modal.module.scss";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  const modalOverlayClasses = `${styles.overlay} ${props.className || ""}`;

  return <div className={modalOverlayClasses}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <>
      {createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay children={props.children} className={props.className} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
