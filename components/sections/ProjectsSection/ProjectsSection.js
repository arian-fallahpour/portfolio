"use client";

import React, { useEffect } from "react";
import classes from "./ProjectsSection.module.scss";

import Section from "@/components/elements/Section/Section";
import Project from "./Project";
import Image from "next/image";

import projects from "@/data/projects";
import { skillsMap } from "@/data/skills";
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
          <Project key={project.key} className={classes[project.name]} project={project}>
            <div className={classes.ProjectDetails}>
              <div className={classes.ProjectTitle}>
                <p className="subtitle text-gradient-primary">0{i + 1}</p>
                <h3 className="header header-card">{project.name}</h3>
              </div>
              <div className={classes.ProjectStack}>
                {project.skills.reverse().map((key) => {
                  const skill = skillsMap.get(key);
                  return (
                    <div key={key} className={classes.Language}>
                      <skill.Icon />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={classes[project.name + "Image"]}>
              <Image src={project.coverImageSrc} fill alt={`Project ${i + 1} cover`} />
            </div>
          </Project>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
