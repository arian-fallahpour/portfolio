"use client";

import React, { useEffect, useRef, useState } from "react";
import classes from "./ProjectsSection.module.scss";

import Section from "@/components/elements/Section/Section";
import Project from "./Project/Project";

import projectsData from "@/data/projects-data";

import ClipIn from "@/components/elements/ClipIn/ClipIn";
import {
  motion,
  stagger,
  useAnimate,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
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
  const panelRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  // Distance the track must travel left before the last project sits at the edge
  const [scrollDistance, setScrollDistance] = useState(0);

  const isInView = useInView(panelRef, { once: true, amount: 0.25 });

  // Progress of the section through its pinned range: 0 when it locks to the
  // top of the viewport, 1 when its bottom reaches the bottom of the viewport
  const { scrollYProgress } = useScroll({ target: scope, offset: ["start start", "end end"] });
  const trackOffset = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);
  const trackOffsetSpring = useSpring(trackOffset, {
    stiffness: 400,
    damping: 60,
    restDelta: 0.5,
  });

  useEffect(() => {
    if (isInView) {
      animations.forEach((animation) => {
        animate(animation.selector, animation.styles, animation.options);
      });
    }
  }, [isInView, animate]);

  // The section is made exactly as tall as the horizontal travel it has to do,
  // so the leftover scroll is spent moving the track sideways
  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    const measure = () => {
      setScrollDistance(Math.max(0, track.scrollWidth - viewport.clientWidth));
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(track);

    return () => observer.disconnect();
  }, []);

  return (
    <Section
      ref={scope}
      className={classes.ProjectsSection}
      style={{ height: `calc(var(--projects-panel-height) + ${scrollDistance}px)` }}
    >
      <ClipIn direction="horizontal" className={classes.Divider} />

      <div ref={panelRef} className={classes.Panel}>
        <h2 className={join("header", "header-section", classes.Header)}>Projects</h2>

        <div ref={viewportRef} className={classes.Viewport}>
          <motion.div ref={trackRef} className={classes.Track} style={{ x: trackOffsetSpring }}>
            {projectsData.map((project, i) => (
              <div className={classes.Project} key={project.name}>
                <Project
                  name={project.name}
                  skills={project.skills}
                  href={project.href}
                  imageSrc={project.imageSrc}
                  project={project}
                  index={i}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default ProjectsSection;
