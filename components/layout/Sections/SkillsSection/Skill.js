import HtmlIcon from "@/public/assets/app/skills/HtmlIcon";
import classes from "./SkillsSection.module.scss";
import CssIcon from "@/public/assets/app/skills/CssIcon";
import JavascriptIcon from "@/public/assets/app/skills/JavascriptIcon";
import ReactIcon from "@/public/assets/app/skills/ReactIcon";
import NodeIcon from "@/public/assets/app/skills/NodeIcon";
import MongoDBIcon from "@/public/assets/app/skills/MongoDBIcon";
import NextIcon from "@/public/assets/app/skills/NextIcon";
import AutodeskIcon from "@/public/assets/app/skills/AutodeskIcon.svg";
import Image from "next/image";

const Skill = ({ name, icon, description }) => {
  return (
    <div className={classes.Skill}>
      {name === "html" && <HtmlIcon />}
      {name === "css" && <CssIcon />}
      {name === "javascript" && <JavascriptIcon />}
      {name === "react" && <ReactIcon />}
      {name === "nodejs" && <NodeIcon />}
      {name === "mongodb" && <MongoDBIcon />}
      {name === "nextjs" && <NextIcon />}
      {name === "autodesk inventor" && (
        <Image src={AutodeskIcon} alt="Autodesk inventor logo" />
      )}
      <h3 className="header header-card text-center">{name}</h3>
      <p className="paragraph">{description}</p>
    </div>
  );
};

export default Skill;
