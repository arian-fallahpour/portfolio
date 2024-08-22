import React, { useContext } from "react";
import classes from "./Modal.module.scss";
import { ModalContext } from "@/store/modal-context";
import { join } from "@/utils/helpers";

const Modal = () => {
  const { isVisible, content, hideModal } = useContext(ModalContext);

  return (
    <div className={join(classes.Modal, isVisible ? classes.visible : null)}>
      <div className={classes.ModalContent}>{content}</div>
    </div>
  );
};

export default Modal;
