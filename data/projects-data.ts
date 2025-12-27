import { ProjectType } from "@/Types/ProjectType";
import { Skill } from "@/Types/SkillType";

import mipsDataPathImageSrc from "@/public/images/projects/mips-datapath.png";
import batOSImageSrc from "@/public/images/projects/bat-os-1.png";
import courseTrackerImageSrc from "@/public/images/projects/course-tracker.png";
import turboTutImageSrc from "@/public/images/projects/turbotut.png";

const projectsData: ProjectType[] = [
  {
    name: "MIPS Datapath",
    imageSrc: mipsDataPathImageSrc,
    skills: [Skill.Verilog],
    href: new URL("https://github.com/arian-fallahpour/verilog-hdl-datapath"),
  },
  {
    name: "BatOS",
    imageSrc: batOSImageSrc,
    skills: [Skill.CPlusPlus, Skill.Git, Skill.Linux],
    href: new URL("https://github.com/arian-fallahpour/bat-os"),
  },
  {
    name: "Course Tracker",
    imageSrc: courseTrackerImageSrc,
    skills: [Skill.Express, Skill.React, Skill.NextJS, Skill.AWS, Skill.Azure, Skill.MongoDB],
    href: new URL("https://coursetracker.ca/"),
  },
  {
    name: "TurboTut",
    imageSrc: turboTutImageSrc,
    skills: [Skill.React, Skill.Python, Skill.NextJS, Skill.AWS, Skill.MongoDB],
    href: new URL("https://turbotut.vercel.app/"),
  },
];

export default projectsData;
