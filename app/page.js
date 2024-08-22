import Page from "@/components/elements/Page/Page";
import Stripes from "@/components/elements/Stripes/Stripes";
import ContactSection from "@/components/sections/ContactSection/ContactSection";
import EducationSection from "@/components/sections/EducationSection/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection/ExperienceSection";
import Header from "@/components/sections/Header/Header";
import ProjectsSection from "@/components/sections/ProjectsSection/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection/SkillsSection";

export default function HomePage() {
  return (
    <Page>
      <Header />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Stripes />
    </Page>
  );
}
