import React from "react";
import classes from "./ProjectsSection.module.scss";
import Magnetic from "@/components/elements/Magnetic/Magnetic";
import { join } from "@/utils/helpers";
import Button from "@/components/elements/Button/Button";

const Project = ({ children, className, project, innerProps = {}, ...otherProps }) => {
  return (
    <Button
      className={join(classes.Project, className)}
      styleName="unstyled"
      href={project.link}
      isLink
      openNewTab
      {...otherProps}
    >
      <Magnetic {...innerProps} className={join(classes.ProjectContents, innerProps.className)}>
        {children}
      </Magnetic>
    </Button>
  );
};

export default Project;
