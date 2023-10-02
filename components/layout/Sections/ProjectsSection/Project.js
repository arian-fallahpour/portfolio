"use client";

import Button from "@/components/UI/Button/Button";
import classes from "./ProjectsSection.module.scss";

import Image from "next/image";
import { useContext } from "react";
import { ProjectContext } from "@/store/ProjectContext";

const Project = ({ index, image, name, description }) => {
  const projectContext = useContext(ProjectContext);

  const onClickHandler = () => {
    projectContext.setIsActive(true);
    projectContext.setActiveProject(index);
  };

  return (
    <article className={classes.Project}>
      <div className={classes.ProjectImage}>
        <Image
          src={`/assets/app/projects/${image}`}
          alt={`Cover image of ${name} project`}
          sizes="(max-width: 1600px) 30vw, (max-width: 1200px) 34vw, (max-width: 800px) 38vw, 33vw"
          objectFit="cover"
          quality={80}
          fill
        />
      </div>
      <div className={classes.ProjectContent}>
        <h3 className="header header-card">{name}</h3>
        <p className="paragraph">{description}</p>
        <Button onClick={onClickHandler}>Explore</Button>
      </div>
    </article>
  );
};

export default Project;
