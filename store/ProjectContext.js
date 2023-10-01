"use client";

import { createContext, useState } from "react";

import projects from "@/data/projects.json";

export const ProjectContext = createContext({
  isActive: false,
  activeProject: 0,
  activeContent: 0,
  setIsActive: (val) => {},
  setActiveProject: (index) => {},
  prevContent: () => {},
  nextContent: () => {},
});

export const ProjectProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [activeContent, setActiveContent] = useState(0);

  const project = projects[activeProject];

  const setIsActiveHandler = (val) => setIsActive(val);
  const setActiveProjectHandler = (index) => {
    setActiveProject(index);
    setActiveContent(0);
  };
  const prevContentHandler = () =>
    setActiveContent((prev) => Math.max(0, (prev -= 1)));
  const nextContentHandler = () =>
    setActiveContent((prev) =>
      Math.min(project.content.length - 1, (prev += 1))
    );

  return (
    <ProjectContext.Provider
      value={{
        isActive,
        activeProject,
        activeContent,
        setIsActive: setIsActiveHandler,
        setActiveProject: setActiveProjectHandler,
        prevContent: prevContentHandler,
        nextContent: nextContentHandler,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
