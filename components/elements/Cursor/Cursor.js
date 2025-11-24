"use client";

import React, { Fragment, useEffect, useState, useRef } from "react";
import classes from "./Cursor.module.scss";
import { motion, useSpring } from "framer-motion";

const defaultCursorStyles = {
  width: 20,
  height: 20,
  borderRadius: 10,
  opacity: 0.5,
};

const defaultRingStyles = {
  width: 30,
  height: 30,
  borderRadius: 15,
  opacity: 1,
};

const outlineOffset = 10;

const Cursor = () => {
  const [isDefaultMode, setIsDefaultMode] = useState(true);
  const cursorX = useSpring(0, { stiffness: 999, damping: 100 });
  const cursorY = useSpring(0, { stiffness: 150, damping: 20 });
  const ringX = useSpring(0, { stiffness: 50, damping: 10 });
  const ringY = useSpring(0, { stiffness: 50, damping: 10 });

  const [cursorConfig, setCursorConfig] = useState(defaultCursorStyles);
  const [ringConfig, setRingConfig] = useState(defaultRingStyles);

  const isMouseDown = useRef(false);

  useEffect(() => {
    cursorX.jump(window.innerWidth / 2);
    cursorY.jump(window.innerHeight / 2);
    ringX.jump(window.innerWidth / 2);
    ringY.jump(window.innerHeight / 2);

    setCursorConfig((prev) => ({ ...prev, opacity: 1 }));
  }, [cursorX, cursorY, ringX, ringY]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const element = e.target.closest && e.target.closest("[data-cursor]");
      const mode = element?.getAttribute("data-cursor");

      if (!mode) {
        setIsDefaultMode(true);
      } else {
        setIsDefaultMode(false);
      }

      if (mode === "morph") {
        const rect = element.getBoundingClientRect();
        const computed = window.getComputedStyle(element);

        cursorX.set(rect.left + rect.width / 2);
        cursorY.set(rect.top + rect.height / 2);
        ringX.set(rect.left + rect.width / 2);
        ringY.set(rect.top + rect.height / 2);

        setCursorConfig({
          width: rect.width * (2 / 3),
          height: rect.height * (2 / 3),
          borderRadius: computed.borderRadius,
          opacity: 0,
          filter: "blur(20px)",
        });

        setRingConfig({ width: 0, height: 0, scale: 0, opacity: 0 });
      } else if (mode === "outline") {
        const rect = element.getBoundingClientRect();
        const computed = window.getComputedStyle(element);

        cursorX.set(rect.left + rect.width / 2);
        cursorY.set(rect.top + rect.height / 2);
        ringX.set(rect.left + rect.width / 2);
        ringY.set(rect.top + rect.height / 2);

        setCursorConfig((prev) => ({ ...prev, width: 0, height: 0, opacity: 0 }));

        const borderRadius = computed.borderRadius.endsWith("%")
          ? rect.width / 2
          : computed.borderRadius;

        setRingConfig({
          width: rect.width + 2 * outlineOffset,
          height: rect.height + 2 * outlineOffset,
          borderRadius: borderRadius,
          scale: isMouseDown.current ? 0.9 : 1,
          opacity: 1,
        });
      } else {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        ringX.set(e.clientX);
        ringY.set(e.clientY);

        setCursorConfig(defaultCursorStyles);
        setRingConfig(defaultRingStyles);
      }
    };

    const onMouseDownHandler = (e) => {
      isMouseDown.current = true;
      const element = e.target.closest("[data-cursor]");
      const mode = element?.getAttribute("data-cursor");

      setCursorConfig((prev) => ({ ...prev, scale: 1.5 }));

      if (mode === "outline") {
        setRingConfig((prev) => ({ ...prev, scale: 0.9 }));
      } else {
        setRingConfig((prev) => ({ ...prev, scale: 0.5 }));
      }
    };

    const onMouseUpHandler = (e) => {
      isMouseDown.current = false;
      setCursorConfig((prev) => ({ ...prev, scale: 1 }));
      setRingConfig((prev) => ({ ...prev, scale: 1 }));
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", onMouseDownHandler);
    document.addEventListener("mouseup", onMouseUpHandler);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", onMouseDownHandler);
      document.removeEventListener("mouseup", onMouseUpHandler);
    };
  }, [cursorX, cursorY, ringX, ringY, isDefaultMode]);

  return (
    <Fragment>
      <motion.div
        className={classes.Cursor}
        style={{ left: cursorX, top: cursorY }}
        animate={cursorConfig}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
      <motion.div
        className={classes.Ring}
        style={{ left: ringX, top: ringY }}
        animate={ringConfig}
      />
    </Fragment>
  );
};

export default Cursor;
