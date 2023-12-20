"use client";

import { ProjectProvider } from "@/store/ProjectContext";
import React from "react";

const Providers = ({ children }) => {
  return <ProjectProvider>{children}</ProjectProvider>;
};

export default Providers;
