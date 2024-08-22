import AWSIcon from "@/components/elements/icons/AWSIcon";
import CIcon from "@/components/elements/icons/CIcon";
import ExpressJsIcon from "@/components/elements/icons/ExpressJsIcon";
import GitIcon from "@/components/elements/icons/GitIcon";
import JavascriptIcon from "@/components/elements/icons/JavascriptIcon";
import JestIcon from "@/components/elements/icons/JestIcon";
import MongoDBIcon from "@/components/elements/icons/MongoDBIcon";
import NextJsIcon from "@/components/elements/icons/NextJsIcon";
import NodeJsIcon from "@/components/elements/icons/NodeJsIcon";
import PuppeteerIcon from "@/components/elements/icons/PuppeteerIcon";
import PythonIcon from "@/components/elements/icons/PythonIcon";
import ReactIcon from "@/components/elements/icons/ReactIcon";
import ReactQueryIcon from "@/components/elements/icons/ReactQueryIcon";
import SassIcon from "@/components/elements/icons/SassIcon";
import StripeIcon from "@/components/elements/icons/StripeIcon";

const skills = [
  {
    name: "Python",
    key: "python",
    Icon: PythonIcon,
  },
  {
    name: "Javascript",
    key: "javascript",
    Icon: JavascriptIcon,
  },
  {
    name: "C",
    key: "c",
    Icon: CIcon,
  },
  {
    name: "Sass",
    key: "sass",
    Icon: SassIcon,
  },
  {
    name: "React",
    key: "react",
    Icon: ReactIcon,
  },
  {
    name: "React Query",
    key: "reactQuery",
    Icon: ReactQueryIcon,
  },
  {
    name: "Jest",
    key: "jest",
    Icon: JestIcon,
  },
  {
    name: "NextJs",
    key: "nextJs",
    Icon: NextJsIcon,
  },
  {
    name: "NodeJs",
    key: "nodeJs",
    Icon: NodeJsIcon,
  },
  {
    name: "ExpressJs",
    key: "expressJs",
    Icon: ExpressJsIcon,
  },
  {
    name: "PuppeteerJs",
    key: "puppeteerJs",
    Icon: PuppeteerIcon,
  },
  {
    name: "Stripe",
    key: "stripe",
    Icon: StripeIcon,
  },
  {
    name: "AWS",
    key: "aws",
    Icon: AWSIcon,
  },
  {
    name: "MongoDB",
    key: "mongodb",
    Icon: MongoDBIcon,
  },
  {
    name: "Git",
    key: "git",
    Icon: GitIcon,
  },
];

export default skills;

export const skillsMap = new Map();
for (let i = 0; i < skills.length; i++) {
  skillsMap.set(skills[i].key, skills[i]);
}
