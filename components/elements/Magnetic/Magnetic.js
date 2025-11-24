"use client";

import React, { forwardRef } from "react";

import { motion, useSpring } from "motion/react";

const Magnetic = forwardRef(
  (
    {
      children,
      style,
      onMouseMove = (e) => {},
      onMouseLeave = (e) => {},
      maxShift = 5,
      ...otherProps
    },
    ref
  ) => {
    const shiftX = useSpring(0);
    const shiftY = useSpring(0);

    const mouseMoveHandler = (e) => {
      onMouseMove(e);

      const offset = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - offset.left - offset.width / 2;
      const y = e.clientY - offset.top - offset.height / 2;

      const percentageX = x / (offset.width / 2);
      const percentageY = y / (offset.height / 2);

      // Attract to cursor
      if (Math.abs(x) <= offset.width / 2 || Math.abs(y) <= offset.height / 2) {
        shiftX.set(maxShift * percentageX);
        shiftY.set(maxShift * percentageY);
      }
    };

    const mouseLeaveHandler = (e) => {
      onMouseLeave(e);

      shiftX.set(0);
      shiftY.set(0);
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={mouseMoveHandler}
        onMouseLeave={mouseLeaveHandler}
        style={{ translateX: shiftX, translateY: shiftY, ...style }}
        {...otherProps}
      >
        {children}
      </motion.div>
    );
  }
);

Magnetic.displayName = "Magnetic";

export default Magnetic;
