import React, { useContext } from "react";
import classes from "./ProjectModal.module.scss";
import Button from "@/components/elements/Button/Button";
import { CloseIcon } from "@/components/elements/icons/CloseIcon";
import { ModalContext } from "@/store/modal-context";

const ProjectModal = ({ project }) => {
  const { hideModal } = useContext(ModalContext);

  return (
    <div className={classes.Modal}>
      <div className={classes.Content}>
        <div className={classes.Showcase}>
          <video autoPlay muted>
            <source src="/videos/turbotut-showcase.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <Button styleName="rounded" className={classes.Close} onClick={() => hideModal()}>
        <CloseIcon />
      </Button>
    </div>
  );
};

export default ProjectModal;
