export enum Skill {
  Python = "Python",
  JavaScript = "JavaScript",
  TypeScript = "TypeScript",
  Java = "Java",
  C = "C",
  CPlusPlus = "CPlusPlus",
  React = "React",
  NodeJS = "NodeJS",
  NextJS = "NextJS",
  SCSS = "SCSS",
  Express = "Express",
  MongoDB = "MongoDB",
  SQL = "SQL",
  AWS = "AWS",
  Azure = "Azure",
  Git = "Git",
  Jest = "Jest",
  Verilog = "Verilog",
  Linux = "Linux",
}

export type SkillsType = {
  name: Skill;
  Icon: React.ComponentType<any> | null;
};
