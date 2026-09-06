"use client";

import { SVGProps, useEffect, useState } from "react";

import IconButton from "@/components/elements/IconButton/IconButton";
import { join } from "@/utils/helper";

import HomeIcon from "@/components/icons/HomeIcon";
import MailIcon from "@/components/icons/MailIcon";
import MemoryIcon from "@/components/icons/MemoryIcon";
import MilitaryTechIcon from "@/components/icons/MilitaryTechIcon";
import PersonIcon from "@/components/icons/PersonIcon";
import SchoolIcon from "@/components/icons/SchoolIcon";
import TerminalIcon from "@/components/icons/TerminalIcon";
import WorkIcon from "@/components/icons/WorkIcon";

import classes from "./Nav.module.scss";

type NavItem = {
  /** id of the section this item scrolls to */
  id: string;
  label: string;
  Icon: (props: SVGProps<SVGSVGElement>) => React.ReactElement;
};

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", Icon: HomeIcon },
  { id: "about", label: "About", Icon: PersonIcon },
  { id: "education", label: "Education", Icon: SchoolIcon },
  { id: "experience", label: "Experience", Icon: WorkIcon },
  { id: "projects", label: "Projects", Icon: TerminalIcon },
  { id: "skills", label: "Skills", Icon: MemoryIcon },
  { id: "leadership", label: "Leadership", Icon: MilitaryTechIcon },
  { id: "contact", label: "Contact", Icon: MailIcon },
];

const Nav = () => {
  const [activeId, setActiveId] = useState(NAV_ITEMS[0].id);

  // Highlight whichever section is crossing the middle of the viewport.
  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(
      (section) => section !== null
    );
    if (sections.length === 0) return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }

        const current = NAV_ITEMS.find(({ id }) => visible.has(id));
        if (current) setActiveId(current.id);
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };

  return (
    <nav className={classes.Nav} aria-label="Sections">
      <ul className={classes.List}>
        {NAV_ITEMS.map(({ id, label, Icon }) => (
          <li key={id} className={classes.Item}>
            <IconButton
              variant="fill"
              label={label}
              className={join(classes.Link, activeId === id ? classes.Active : undefined)}
              aria-current={activeId === id ? "true" : undefined}
              onClick={() => scrollToSection(id)}
            >
              <span className={classes.Icon}>
                <Icon />
              </span>
              <span className={classes.Label}>{label}</span>
            </IconButton>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
