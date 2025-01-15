import React from "react";

import { join } from "@/utils/helpers";
import classes from "./ProjectsSection.module.scss";

import Image from "next/image";
import Magnetic from "@/components/elements/Magnetic/Magnetic";
import Button from "@/components/elements/Button/Button";

import { skillsMap } from "@/data/skills";

const Project = ({ className, name, id, skills, link, coverImageSrc, index }) => {
  const projectSkills = skills.slice(0).reverse();

  return (
    <Button className={join(classes.Project, className)} styleName="unstyled" href={link} isLink openNewTab>
      <Magnetic className={classes.ProjectContents}>
        <div className={classes.ProjectDetails}>
          <div className={classes.ProjectTitle}>
            <p className="subtitle text-gradient-primary">0{index + 1}</p>
            <h3 className="header header-card">{name}</h3>
          </div>
          <div className={classes.ProjectStack}>
            {projectSkills.map((key) => {
              const skill = skillsMap.get(key);
              return (
                <div key={key} className={classes.Language}>
                  <skill.Icon />
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes[id + "Image"]}>
          <Image src={coverImageSrc} fill alt={`Project ${index + 1} cover`} />
        </div>
      </Magnetic>
    </Button>
  );
};

export default Project;
