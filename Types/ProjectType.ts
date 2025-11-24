import { Skill } from "./SkillType";

export type ProjectType = {
  name: string;
  imageSrc: string | null;
  skills: Skill[];
  href: URL | null;
};
