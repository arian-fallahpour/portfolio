import AWSIcon from "@/components/elements/icons/AWSIcon";
import { ChatGPTIcon } from "@/components/elements/icons/ChatGPTIcon";
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
    visible: true,
  },
  {
    name: "Javascript",
    key: "javascript",
    Icon: JavascriptIcon,
    visible: true,
  },
  {
    name: "C",
    key: "c",
    Icon: CIcon,
    visible: true,
  },
  {
    name: "Sass",
    key: "sass",
    Icon: SassIcon,
    visible: true,
  },
  {
    name: "React",
    key: "react",
    Icon: ReactIcon,
    visible: true,
  },
  {
    name: "React Query",
    key: "reactQuery",
    Icon: ReactQueryIcon,
    visible: true,
  },
  {
    name: "Jest",
    key: "jest",
    Icon: JestIcon,
    visible: true,
  },
  {
    name: "NextJs",
    key: "nextJs",
    Icon: NextJsIcon,
    visible: true,
  },
  {
    name: "NodeJs",
    key: "nodeJs",
    Icon: NodeJsIcon,
    visible: true,
  },
  {
    name: "ExpressJs",
    key: "expressJs",
    Icon: ExpressJsIcon,
    visible: true,
  },
  {
    name: "PuppeteerJs",
    key: "puppeteerJs",
    Icon: PuppeteerIcon,
    visible: true,
  },
  {
    name: "Stripe",
    key: "stripe",
    Icon: StripeIcon,
    visible: true,
  },
  {
    name: "AWS",
    key: "aws",
    Icon: AWSIcon,
    visible: true,
  },
  {
    name: "MongoDB",
    key: "mongodb",
    Icon: MongoDBIcon,
    visible: true,
  },
  {
    name: "Git",
    key: "git",
    Icon: GitIcon,
    visible: true,
  },
  {
    name: "ChatGPT",
    key: "chatGPT",
    Icon: ChatGPTIcon,
    visible: false,
  },
];

export default skills;

export const skillsMap = new Map();
for (let i = 0; i < skills.length; i++) {
  skillsMap.set(skills[i].key, skills[i]);
}
