"use client";

import React, { useEffect } from "react";
import classes from "./SkillsSection.module.scss";

import Section from "@/components/elements/Section/Section";
import Skill from "./Skill";
import skillsData from "@/data/skills-data";
import Code from "./Code/Code";
import { stagger, useAnimate, useInView } from "motion/react";
import ClipIn from "@/components/elements/ClipIn/ClipIn";
import { join } from "@/utils/helpers";

const animations = [
  {
    selector: `.${classes.SkillsHeader}`,
    styles: { opacity: 1, translate: 0 },
    options: { duration: 0.5, delay: 0.5 },
  },
  {
    selector: `.${classes.SkillsListItem}`,
    styles: { opacity: 1, translate: 0 },
    options: { duration: 0.5, delay: stagger(0.1, { startDelay: 0.75 }) },
  },
];

const SkillsSection = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, amount: 0.25 });

  useEffect(() => {
    if (isInView) {
      animations.forEach((animation) => {
        animate(animation.selector, animation.styles, animation.options);
      });
    }
  }, [isInView, animate]);

  return (
    <Section ref={scope} className={classes.SkillsSection}>
      <ClipIn isVisible={isInView} direction="right" duration={1} className={classes.Container}>
        <div className={classes.Content}>
          <div className={classes.Skills}>
            <ClipIn
              isVisible={isInView}
              direction="vertical"
              transition={{ duration: 1 }}
              className={classes.SkillsLight}
            />
            <h2 className={join("header", "header-section", "light", classes.SkillsHeader)}>
              Skills
            </h2>
            <ul className={classes.SkillsList}>
              {skillsData.map((skill) => (
                <li key={skill.name} className={classes.SkillsListItem}>
                  <Skill name={skill.name} Icon={skill.Icon} />
                </li>
              ))}
            </ul>
          </div>
          <ClipIn
            isVisible={isInView}
            direction="down"
            transition={{ delay: 0.5 }}
            className={classes.Code}
          >
            <Code isVisible={isInView} delay={1.25} duration={0.5} />
          </ClipIn>
        </div>
      </ClipIn>
    </Section>
  );
};

export default SkillsSection;
