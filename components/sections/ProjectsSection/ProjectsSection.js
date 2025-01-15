"use client";

import React, { useEffect } from "react";
import classes from "./ProjectsSection.module.scss";

import Section from "@/components/elements/Section/Section";
import Project from "./Project";

import projects from "@/data/projects";

import ClipIn from "@/components/elements/ClipIn/ClipIn";
import { stagger, useAnimate, useInView } from "framer-motion";

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
      <ClipIn direction="horizontal" isVisible={isInView} className={classes.Divider} />
      <div className={classes.Projects}>
        <div className={classes.Header}>
          <h2 className="header header-section">Projects</h2>
        </div>
        {projects.map((project, i) => (
          <Project
            key={project.key}
            name={project.name}
            id={project.key}
            skills={project.skills}
            link={project.link}
            coverImageSrc={project.coverImageSrc}
            className={classes[project.key]}
            project={project}
            index={i}
          />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
