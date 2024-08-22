import React, { useContext } from "react";
import classes from "./ProjectsSection.module.scss";
import Magnetic from "@/components/elements/Magnetic/Magnetic";
import { join } from "@/utils/helpers";
import Button from "@/components/elements/Button/Button";
import { ModalContext } from "@/store/modal-context";
import ProjectModal from "./ProjectModal/ProjectModal";

const Project = ({ children, className, project, onClick = (e) => {}, innerProps = {}, ...otherProps }) => {
  const { showModal } = useContext(ModalContext);

  const onClickHandler = (e) => {
    onClick(e);

    showModal(<ProjectModal project={project} />);
  };

  return (
    <Button className={join(classes.Project, className)} styleName="unstyled" onClick={onClickHandler} {...otherProps}>
      <Magnetic {...innerProps} className={join(classes.ProjectContents, innerProps.className)}>
        {children}
      </Magnetic>
    </Button>
  );
};

export default Project;
