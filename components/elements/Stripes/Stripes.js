"use client";

import React, { useEffect, useState } from "react";
import classes from "./Stripes.module.scss";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const Stripes = () => {
  const { scrollYProgress } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);

  const scrollOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [windowHeight * (8 / 10), documentHeight]
  );
  const scrollOffsetSpring = useSpring(scrollOffset, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const main = document.querySelector(".main");
    if (!main) return;

    // Sections that size themselves after mount (the pinned projects section)
    // change the page height, so keep remeasuring instead of reading once
    const measure = () => {
      setWindowHeight(window.innerHeight);
      setDocumentHeight(main.offsetHeight);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(main);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.span className={classes.Stripes} style={{ height: scrollOffsetSpring }}>
      <span className={classes.Stripe} style={{ height: documentHeight }} />
      <span className={classes.Stripe} style={{ height: documentHeight }} />
      <span className={classes.Stripe} style={{ height: documentHeight }} />
    </motion.span>
  );
};

export default Stripes;
