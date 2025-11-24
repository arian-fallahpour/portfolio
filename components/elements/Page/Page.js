"use client";

import React, { useEffect } from "react";
import Cursor from "../Cursor/Cursor";

const Page = ({ children }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      document.body.style.cursor = "none";
      document.documentElement.style.cursor = "none";
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <body>
      <main className="main">
        {children}

        <Cursor />
      </main>
    </body>
  );
};

export default Page;
