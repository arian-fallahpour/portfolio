"use client";

import Section from "@/components/elements/Section/Section";
import React, { useEffect } from "react";
import classes from "./ExperienceSection.module.scss";
import experiences from "@/data/experiences-data";
import { useAnimate, useInView } from "motion/react";
import Experience from "./Experience";
import Timeline from "./Timeline";

const animations = [
  {
    selector: `.${classes.Header} `,
    styles: { opacity: 1, translate: 0 },
    options: { duration: 0.5 },
  },
];

const ExperienceSection = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "0px 0px -200px 0px" });

  useEffect(() => {
    if (isInView) {
      animations.forEach((animation) => {
        animate(animation.selector, animation.styles, animation.options);
      });
    }
  }, [isInView, animate]);

  return (
    <Section ref={scope} className={classes.ExperienceSection}>
      <div className={classes.Header}>
        <h2 className="header header-section">Experience</h2>
      </div>
      <div className={classes.Main}>
        <Timeline />
        <ul className={classes.Experiences}>
          {experiences.map((experience, i) => (
            <Experience
              key={experience.key}
              index={i}
              duration={experience.duration}
              name={experience.name}
              role={experience.role}
              list={experience.list}
            />
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default ExperienceSection;
