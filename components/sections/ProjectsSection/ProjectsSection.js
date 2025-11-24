"use client";

import React, { useEffect } from "react";
import classes from "./ProjectsSection.module.scss";

import Section from "@/components/elements/Section/Section";
import Project from "./Project/Project";

import projectsData from "@/data/projects-data";

import ClipIn from "@/components/elements/ClipIn/ClipIn";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { join } from "@/utils/helpers";

const animations = [
  {
    selector: `.${classes.Header}`,
    styles: { opacity: 1, translate: 0 },
    options: { duration: 0.5, delay: 0.25 },
  },
  {
    selector: `.${classes.Project}`,
    styles: { opacity: 1, translate: 0 },
    options: { duration: 0.5, delay: stagger(0.25, { startDelay: 0.5 }) },
  },
];

const ProjectsSection = () => {
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
    <Section ref={scope} className={classes.ProjectsSection}>
      <ClipIn direction="horizontal" className={classes.Divider} />
      <h2 className={join("header", "header-section", classes.Header)}>Projects</h2>
      <div className={classes.Projects}>
        <div className={classes.Container}>
          {projectsData.map((project, i) => (
            <div className={classes.Project} key={project.name}>
              <Project
                key={project.name}
                name={project.name}
                skills={project.skills}
                href={project.href}
                imageSrc={project.imageSrc}
                project={project}
                index={i}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProjectsSection;
