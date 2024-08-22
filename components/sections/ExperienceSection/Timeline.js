import React, { useEffect, useRef, useState } from "react";
import classes from "./ExperienceSection.module.scss";
import { useScroll, motion, useTransform } from "framer-motion";

const Timeline = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 75%"],
  });
  const [progressHeight, setProgressHeight] = useState(0);
  const scrollOffset = useTransform(scrollYProgress, [0, 1], [0, progressHeight]);

  useEffect(() => {
    setProgressHeight(ref.current.offsetHeight);
  }, []);

  return (
    <div ref={ref} className={classes.Timeline}>
      <motion.span className={classes.TimelineProgress} style={{ height: scrollOffset }} />
    </div>
  );
};

export default Timeline;
