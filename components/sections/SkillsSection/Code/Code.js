"use client";

import React, { useEffect, useState } from "react";
import classes from "./Code.module.scss";
import CodeHeader from "./CodeHeader";

import CodeEditor from "./CodeEditor";
import Magnetic from "@/components/elements/Magnetic/Magnetic";
import { useAnimate } from "motion/react";

import { codeData } from "@/data/code-data";

const characterDelayMS = 25;

const Code = ({ isVisible, delay, duration }) => {
  const [scope, animate] = useAnimate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const { code } = codeData[activeIndex];

  useEffect(() => {
    if (isVisible) {
      animate(`.${classes.Window}`, { opacity: 1, translate: 0 }, { duration, delay });
    }
  }, [isVisible, animate, delay, duration]);

  // Change active tab
  const changeActiveIndex = (index) => {
    setCharIndex(0);
    setActiveIndex(index);
  };

  // Animate typing effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCharIndex((prev) => {
        if (prev < code.length) {
          return prev + 1;
        }

        clearInterval(interval);
        return prev;
      });
    }, characterDelayMS);

    return () => clearInterval(interval);
  }, [activeIndex, code]);

  return (
    <Magnetic ref={scope} className={classes.Code}>
      <div className={classes.Window} data-cursor="morph">
        <span className={classes.Shine} />

        <CodeHeader activeIndex={activeIndex} setActiveIndex={changeActiveIndex} />
        <CodeEditor activeIndex={activeIndex} charIndex={charIndex} />
      </div>
    </Magnetic>
  );
};

export default Code;
