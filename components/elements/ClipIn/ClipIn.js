"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";

const ClipIn = forwardRef(
  (
    {
      children,
      isVisible = true,
      direction = "up",
      transition = {
        duration: 1,
        delay: 0,
      },
      instant,
      ...otherProps
    },
    ref
  ) => {
    transition = {
      duration: transition.duration || 1,
      delay: transition.delay || 0,
      ease: transition.ease || "easeInOut",
    };

    if (instant) {
      transition.delay = 0;
      transition.duration = 0;
    }

    // Determine animation direction
    let initialClip, finalClip;
    if (direction === "right") {
      initialClip = "polygon(0 0, 0 0, 0 100%, 0 100%)";
      finalClip = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    } else if (direction === "left") {
      initialClip = "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)";
      finalClip = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    } else if (direction === "up") {
      initialClip = "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)";
      finalClip = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    } else if (direction === "down") {
      initialClip = "polygon(0 0, 100% 0, 100% 0, 0 0)";
      finalClip = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    } else if (direction === "horizontal") {
      initialClip = "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)";
      finalClip = "polygon(0% 0, 100% 0, 100% 100%, 0 100%)";
    } else if (direction === "vertical") {
      initialClip = "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)";
      finalClip = "polygon(0% 0, 100% 0, 100% 100%, 0 100%)";
    }

    return (
      <motion.div
        initial={{ clipPath: initialClip }}
        animate={isVisible ? { clipPath: finalClip } : false}
        transition={transition}
        ref={ref}
        {...otherProps}
      >
        {children}
      </motion.div>
    );
  }
);

ClipIn.displayName = "ClipIn";

export default ClipIn;
