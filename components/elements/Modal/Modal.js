import React, { useContext } from "react";
import classes from "./Modal.module.scss";
import { ModalContext } from "@/store/modal-context";
import { join } from "@/utils/helpers";
import { CloseIcon } from "../icons/CloseIcon";
import Button from "../Button/Button";

const Modal = () => {
  const { isVisible, content, hideModal } = useContext(ModalContext);

  return (
    <div className={join(classes.Modal, isVisible ? classes.visible : null)}>
      <Button className={classes.ModalClose} styleName="unstyled" onClick={() => hideModal()}>
        <CloseIcon />
      </Button>
      <div className={classes.ModalContent}>{content}</div>
    </div>
  );
};

export default Modal;
