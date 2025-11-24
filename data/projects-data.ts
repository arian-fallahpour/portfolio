import { ProjectType } from "@/Types/ProjectType";
import { Skill } from "@/Types/SkillType";

import batOSImageSrc from "@/public/images/projects/bat-os-1.png";
import courseTrackerImageSrc from "@/public/images/projects/course-tracker.png";
import turboTutImageSrc from "@/public/images/projects/turbotut.png";

const projectsData: ProjectType[] = [
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
