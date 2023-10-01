import classes from "./SkillsSection.module.scss";
import Section from "../../Section/Section";

import Skill from "./Skill";
import { useMemo } from "react";
import Container from "@/components/UI/Container/Container";

const skills = [
  {
    name: "html",
    description:
      "The elementary markup language of the internet. It is used to structure elements on the webpage.",
  },
  {
    name: "css",
    description:
      "Cascading slide sheets, a language used to style HTML elements and give websites a nice feeling.",
  },
  {
    name: "javascript",
    description:
      "This is the programming language that can be read on every browser. It is responsible for enabling interactivity to websites.",
  },
  {
    name: "react",
    description:
      "React is a javascript library developed by Facebook and made available to the public. It makes front end development much easier and faster.",
  },
  {
    name: "nodejs",
    description:
      "A javascript runtime that can do things similar to other well known languages such as Java, Python, C, and more. It is a fast, easy and reliable way to program the backend of a website.",
  },
  {
    name: "mongodb",
    description:
      "A fast and intuitive database service that many big companies use and are looking for when it comes to a potential employee.",
  },
  {
    name: "nextjs",
    description:
      "A javascript framework that enables many pre-installed features such as server-side rendering, lazy image loading that speed up development, while also making your website incredibly fast.",
  },
  {
    name: "autodesk inventor",
    description:
      "A CAD software used to model objects and test them in a virtual environment which would later be fabricated in real life.",
  },
];

const SkillsSection = () => {
  const skillsColumns = useMemo(() => {
    const columns = [[], [], []];

    skills.forEach((skill, i) => {
      const Element = <Skill key={i} {...skill} />;
      const divided = (i / 3).toString().split(".");

      if (!divided[1]) columns[0].push(Element);
      else if (divided[1].startsWith("3")) columns[1].push(Element);
      else if (divided[1].startsWith("6")) columns[2].push(Element);
    });

    return columns;
  }, []);

  return (
    <Section className={classes.Section}>
      <span className={classes.Background} />
      <Container className={classes.Container}>
        <h2 className="header header-section text-center">My Skills</h2>
        <div className={classes.Skills}>
          <div className={classes.SkillsColumn}>{skillsColumns[0]}</div>
          <div className={classes.SkillsColumn}>{skillsColumns[1]}</div>
          <div className={classes.SkillsColumn}>{skillsColumns[2]}</div>
        </div>
      </Container>
    </Section>
  );
};

export default SkillsSection;
