import React from "react";
import classes from "./SkillsSection.module.scss";

const Skill = ({ name, Icon }) => {
  return (
    <div className={classes.Skill}>
      <div className={classes.SkillIcon}>
        <Icon />
      </div>
      <div className={classes.SkillName}>{name}</div>
    </div>
  );
};

export default Skill;
