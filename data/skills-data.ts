import { Skill, SkillsType } from "@/Types/SkillType";

import PythonIcon from "@/components/elements/icons/skills/PythonIcon.js";
import JavaScriptIcon from "@/components/elements/icons/skills/JavaScriptIcon.js";
import TypeScriptIcon from "@/components/elements/icons/skills/TypeScriptIcon.js";
import JavaIcon from "@/components/elements/icons/skills/JavaIcon.js";
import CIcon from "@/components/elements/icons/skills/CIcon.js";
import CPlusPlusIcon from "@/components/elements/icons/skills/CPlusPlusIcon.js";
import ReactIcon from "@/components/elements/icons/skills/ReactIcon.js";
import NodeJSIcon from "@/components/elements/icons/skills/NodeJsIcon.js";
import NextJSIcon from "@/components/elements/icons/skills/NextJsIcon.js";
import ExpressIcon from "@/components/elements/icons/skills/ExpressIcon.js";
import MongoDBIcon from "@/components/elements/icons/skills/MongoDBIcon.js";
import SQLIcon from "@/components/elements/icons/skills/SQLIcon.js";
import AWSIcon from "@/components/elements/icons/skills/AWSIcon.js";
import AzureIcon from "@/components/elements/icons/skills/AzureIcon.js";
import GitIcon from "@/components/elements/icons/skills/GitIcon.js";
import JestIcon from "@/components/elements/icons/skills/JestIcon.js";
import VerilogIcon from "@/components/elements/icons/skills/VerilogIcon.js";
import LinuxIcon from "@/components/elements/icons/skills/LinuxIcon.js";

const skillsData: SkillsType[] = [
  { name: Skill.Python, Icon: PythonIcon },
  { name: Skill.JavaScript, Icon: JavaScriptIcon },
  { name: Skill.TypeScript, Icon: TypeScriptIcon },
  { name: Skill.Java, Icon: JavaIcon },
  { name: Skill.C, Icon: CIcon },
  { name: Skill.CPlusPlus, Icon: CPlusPlusIcon },
  { name: Skill.React, Icon: ReactIcon },
  { name: Skill.NodeJS, Icon: NodeJSIcon },
  { name: Skill.NextJS, Icon: NextJSIcon },
  { name: Skill.Express, Icon: ExpressIcon },
  { name: Skill.MongoDB, Icon: MongoDBIcon },
  { name: Skill.SQL, Icon: SQLIcon },
  { name: Skill.AWS, Icon: AWSIcon },
  { name: Skill.Azure, Icon: AzureIcon },
  { name: Skill.Git, Icon: GitIcon },
  { name: Skill.Jest, Icon: JestIcon },
  { name: Skill.Verilog, Icon: VerilogIcon },
  { name: Skill.Linux, Icon: LinuxIcon },
];

export default skillsData;
