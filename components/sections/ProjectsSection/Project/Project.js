import React from "react";

import classes from "./Project.module.scss";

import Image from "next/image";
import Magnetic from "@/components/elements/Magnetic/Magnetic";
import Button from "@/components/elements/Button/Button";
import skillsData from "@/data/skills-data";

const Project = ({ name, skills, href, imageSrc, index }) => {
  return (
    <Button className={classes.Project} styleName="unstyled" href={href} isLink openNewTab>
      <Magnetic className={classes.Magnetic} maxShift={10} data-cursor="morph">
        <Image className={classes.Image} src={imageSrc} alt={`Project ${index + 1} cover`} />
        <span className={classes.Gradient} />
        <span className={classes.Shine} />
        <div className={classes.Content}>
          <h3 className="header header-card">{name}</h3>
          <div className={classes.Skills}>
            {skills
              .map((s) => skillsData.find((skill) => skill.name === s))
              .map((skill) => (
                <div key={skill.name} className={classes.Skill} data-skill={skill.name}>
                  <skill.Icon />
                </div>
              ))}
          </div>
        </div>
      </Magnetic>
    </Button>
  );
};

export default Project;
