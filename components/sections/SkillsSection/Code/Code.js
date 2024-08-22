"use client";

import React, { useEffect, useRef, useState } from "react";
import classes from "./Code.module.scss";
import CodeHeader from "./CodeHeader";
import { formattedCode, tabs } from "@/data/code";

import CodeEditor from "./CodeEditor";
import Magnetic from "@/components/elements/Magnetic/Magnetic";
import { useAnimate } from "framer-motion";

const Code = ({ isVisible, delay, duration }) => {
  const [scope, animate] = useAnimate();

  const [activeIndex, setActiveIndex] = useState(0);
  const [revealIndex, setRevealIndex] = useState(0);
  const [height, setHeight] = useState(-1);
  const editorRef = useRef(null);

  const tab = tabs[activeIndex];
  const formattedCharacters = formattedCode[activeIndex];

  useEffect(() => {
    if (isVisible) {
      animate(`.${classes.Window}`, { opacity: 1, translate: 0 }, { duration, delay });
    }
  }, [isVisible]);

  // Periodically change revealIndex
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeout(() => setActiveIndex((p) => (p >= tabs.length - 1 ? 0 : p + 1)));
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [activeIndex]);

  // Reset revealIndex
  useEffect(() => {
    setRevealIndex(0);
    if (editorRef.current) {
      setHeight(editorRef.current.offsetHeight);
    }
  }, [activeIndex]);

  // Write code
  useEffect(() => {
    const revealNextChar = () => {
      if (revealIndex + 1 < tab.code.split("").length) setRevealIndex((p) => p + 1);
    };

    const timeout = setTimeout(revealNextChar, 25);

    return () => {
      clearTimeout(timeout);
    };
  }, [revealIndex]);

  return (
    <Magnetic ref={scope} className={classes.Code}>
      <div className={classes.Window}>
        <span className={classes.Shine} />
        <CodeHeader activeIndex={activeIndex} setActiveIndex={setActiveIndex} tabs={tabs} />
        <div className={classes.Main} style={{ height: height >= 0 ? height : null }}>
          <CodeEditor ref={editorRef} revealIndex={revealIndex} formattedCharacters={formattedCharacters} />
        </div>
      </div>
    </Magnetic>
  );
};

export default Code;
