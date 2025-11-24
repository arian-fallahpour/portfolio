import React, { useEffect, useRef, useState } from "react";
import classes from "./ExperienceSection.module.scss";
import { useScroll, motion, useTransform, useMotionValueEvent, useSpring } from "motion/react";

const Timeline = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 75%"],
  });
  const [timelineHeight, setTimelineHeight] = useState(0);
  const [progressHeight, setProgressHeight] = useState(0);
  const scrollOffset = useTransform(scrollYProgress, [0, 1], [0, timelineHeight]);
  const scrollOffsetSpring = useSpring(scrollOffset, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollOffsetSpring, "change", (latest) => {
    setProgressHeight((p) => (latest > p ? latest : p));
  });

  useEffect(() => {
    setTimelineHeight(ref.current.offsetHeight);
  }, []);

  return (
    <div ref={ref} className={classes.Timeline}>
      <motion.span className={classes.TimelineProgress} style={{ height: progressHeight }} />
    </div>
  );
};

export default Timeline;
