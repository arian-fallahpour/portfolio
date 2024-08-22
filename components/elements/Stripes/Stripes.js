"use client";

import React, { useEffect, useState } from "react";
import classes from "./Stripes.module.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Stripes = () => {
  const { scrollYProgress } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);

  const scrollOffset = useTransform(scrollYProgress, [0, 1], [windowHeight * (8 / 10), documentHeight]);
  const scrollOffsetSpring = useSpring(scrollOffset, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setDocumentHeight(document.querySelector(".main").offsetHeight);
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
