import Header from "@/components/layout/Header/Header";
import ContactSection from "@/components/layout/Sections/ContactSection/ContactSection";
import ProjectsSection from "@/components/layout/Sections/ProjectsSection/ProjectsSection";
import Showcase from "@/components/layout/Sections/ProjectsSection/Showcase";
import SkillsSection from "@/components/layout/Sections/SkillsSection/SkillsSection";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Showcase />
      <Header />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </Fragment>
  );
}
