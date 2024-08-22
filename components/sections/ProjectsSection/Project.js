import React from "react";
import classes from "./ProjectsSection.module.scss";
import Magnetic from "@/components/elements/Magnetic/Magnetic";
import { join } from "@/utils/helpers";
import Link from "next/link";

const Project = ({ children, className, innerProps = {}, ...otherProps }) => {
  return (
    <Link className={join(classes.Project, className)} href="/" {...otherProps}>
      <Magnetic {...innerProps} className={join(classes.ProjectContents, innerProps.className)}>
        {children}
      </Magnetic>
    </Link>
  );
};

export default Project;
