import React from "react";
import classes from "./SkillsSection.module.scss";
import Magnetic from "@/components/elements/Magnetic/Magnetic";

const Skill = ({ name, Icon }) => {
  return (
    <Magnetic className={classes.Skill} data-cursor="morph">
      <div className={classes.SkillIcon}>
        <Icon />
      </div>
      <div className={classes.SkillName}>{name}</div>
    </Magnetic>
  );
};

export default Skill;
