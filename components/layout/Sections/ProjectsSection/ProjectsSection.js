import classes from "./ProjectsSection.module.scss";

import Section from "../../Section/Section";
import Project from "./Project";

import src from "@/public/assets/app/header-1.jpeg";
import Container from "@/components/UI/Container/Container";

import projects from "@/data/projects.json";

const ProjectsSection = () => {
  const Projects = projects.map((project, i) => (
    <Project key={i} index={i} src={src} {...project} />
  ));

  return (
    <Section className={classes.ProjectsSection}>
      <h2 className="header header-section text-center">Projects</h2>
      <Container className={classes.ProjectsContainer}>
        <div className={classes.Projects}>{Projects}</div>
      </Container>
    </Section>
  );
};

export default ProjectsSection;
