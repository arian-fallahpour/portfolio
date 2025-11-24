import React, { useContext } from "react";
import classes from "./Modal.module.scss";
import { ModalContext } from "@/store/modal-context";
import { join } from "@/utils/helpers";
import { AnimatePresence, motion } from "motion/react";

const Modal = () => {
  const { isVisible, content } = useContext(ModalContext);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={classes.Modal}
          initial={{ opacity: 0, visibility: "hidden" }}
          animate={{ opacity: 1, visibility: "visible" }}
          exit={{ opacity: 0, visibility: "hidden" }}
        >
          <motion.div
            className={classes.ModalContent}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            style={{ translate: "-50% -50%" }}
          >
            {content}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
