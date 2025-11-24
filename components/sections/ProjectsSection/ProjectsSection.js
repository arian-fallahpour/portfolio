"use client";

import React from "react";
import classes from "./ProjectsSection.module.scss";

import Section from "@/components/elements/Section/Section";
import Project from "./Project/Project";

import projectsData from "@/data/projects-data";

import ClipIn from "@/components/elements/ClipIn/ClipIn";
import { stagger } from "motion/react";

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
  return (
    <Section className={classes.ProjectsSection}>
      <ClipIn direction="horizontal" className={classes.Divider} />
      <h2 className="header header-section">Projects</h2>
      <div className={classes.Projects}>
        <div className={classes.Container}>
          {projectsData.map((project, i) => (
            <Project
              key={project.name}
              name={project.name}
              id={project.key}
              skills={project.skills}
              href={project.href}
              imageSrc={project.imageSrc}
              project={project}
              index={i}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProjectsSection;
