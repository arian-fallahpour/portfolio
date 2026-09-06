"use client";

import React, { Fragment, useEffect, useState, useRef } from "react";
import classes from "./Cursor.module.scss";
import {
  motion,
  useSpring,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

// Every mode has to name every animated property, otherwise a value it leaves out
// keeps whatever the previous mode animated it to
const defaultCursorStyles = {
  width: 20,
  height: 20,
  borderRadius: 10,
  opacity: 0.5,
  filter: "blur(0px)",
};

const defaultRingStyles = {
  width: 30,
  height: 30,
  borderRadius: 15,
  opacity: 1,
  filter: "blur(0px)",
};

const outlineOffset = 10;

// How round the morphed shape gets, as a share of its shortest side
const morphRoundness = 0.35;

const finePointerQuery = "(hover: hover) and (pointer: fine)";

const transition = { type: "spring", stiffness: 300, damping: 30 };

// getComputedStyle can hand back percentages or a value per corner, neither of which
// interpolate cleanly, so reduce the radius to a single pixel value
const resolveRadius = (computed, rect) => {
  const [radius] = computed.borderRadius.split(" ");

  if (radius.endsWith("%")) {
    return (parseFloat(radius) / 100) * Math.min(rect.width, rect.height);
  }

  return parseFloat(radius) || 0;
};

// Lets a mode re-apply the values it already has without forcing a re-render
const sameConfig = (a, b) => {
  const keys = Object.keys(a);

  return keys.length === Object.keys(b).length && keys.every((key) => a[key] === b[key]);
};

// Speed (px/s) at which the stretch maxes out
const maxSpeed = 2500;
// Below this speed the direction of travel is too jittery to follow
const minSpeed = 40;
// Seconds the stretch takes to catch up to its target
const stretchSmoothing = 0.05;

// Eases a value towards its target, snapping on once it is close enough to rest
const settle = (value, target, ease) => {
  const next = value + (target - value) * ease;
  return Math.abs(target - next) < 0.0005 ? target : next;
};

// Only writes when the value actually moved, so a resting cursor stops repainting
const setIfChanged = (motionValue, next) => {
  if (motionValue.get() !== next) motionValue.set(next);
};

// Framer builds transforms as `scale scaleX scaleY rotate`, which stretches along
// the screen axes instead of along the direction of travel. Rotating first lines
// the stretch up with wherever the cursor is heading.
const stretchTransform = ({ rotate = "0deg", scaleX = 1, scaleY = 1, scale = 1 }) =>
  `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY}) scale(${scale})`;

/**
 * Squashes and stretches a cursor layer along the direction its position is
 * moving, by an amount proportional to how fast it is moving.
 */
const useStretch = (x, y, enabledRef, maxStretch) => {
  const velocityX = useVelocity(x);
  const velocityY = useVelocity(y);

  const rotate = useMotionValue(0);
  const scaleX = useMotionValue(1);
  const scaleY = useMotionValue(1);

  const angle = useRef(0);

  useAnimationFrame((time, delta) => {
    const vx = velocityX.get();
    const vy = velocityY.get();
    const speed = Math.hypot(vx, vy);
    const enabled = enabledRef.current;

    // Time based easing so the effect feels the same at any refresh rate
    const ease = 1 - Math.exp(-delta / 1000 / stretchSmoothing);

    if (enabled && speed > minSpeed) {
      const target = (Math.atan2(vy, vx) * 180) / Math.PI;
      // An ellipse reads the same at angle and angle + 180, so rotate by
      // whichever of the two is closer and never spin the long way round
      const difference = ((((target - angle.current + 90) % 180) + 180) % 180) - 90;
      // Ease into the new heading so a sudden change of direction bends rather than snaps
      angle.current += difference * ease;
    } else if (!enabled) {
      // Unwind the rotation alongside the stretch so shaped cursors sit straight
      angle.current = settle(angle.current, 0, ease);
    }

    const amount = enabled ? Math.min(speed / maxSpeed, 1) * maxStretch : 0;

    setIfChanged(scaleX, settle(scaleX.get(), 1 + amount, ease));
    // Squash across the direction of travel to keep the area roughly constant
    setIfChanged(scaleY, settle(scaleY.get(), 1 / (1 + amount), ease));
    setIfChanged(rotate, angle.current);
  });

  return { rotate, scaleX, scaleY };
};

const Cursor = () => {
  const [isDefaultMode, setIsDefaultMode] = useState(true);
  const [hasFinePointer, setHasFinePointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, { stiffness: 2000, damping: 100 });
  const cursorY = useSpring(0, { stiffness: 2000, damping: 100 });
  const ringX = useSpring(0, { stiffness: 750, damping: 100 });
  const ringY = useSpring(0, { stiffness: 750, damping: 100 });

  const [cursorConfig, setCursorConfig] = useState(defaultCursorStyles);
  const [ringConfig, setRingConfig] = useState(defaultRingStyles);

  const isMouseDown = useRef(false);
  const hasMoved = useRef(false);
  // Only the free floating cursor stretches, shapes snapped onto an element do not
  const canStretch = useRef(true);

  const cursorStretch = useStretch(cursorX, cursorY, canStretch, 0.5);
  const ringStretch = useStretch(ringX, ringY, canStretch, 0.75);

  useEffect(() => {
    const query = window.matchMedia(finePointerQuery);

    const handleChange = (e) => {
      setHasFinePointer(e.matches);

      if (!e.matches) {
        hasMoved.current = false;
        setIsVisible(false);
      }
    };

    handleChange(query);
    query.addEventListener("change", handleChange);

    return () => query.removeEventListener("change", handleChange);
  }, []);

  // Only hide the native cursor once the custom one has taken its place
  useEffect(() => {
    if (!isVisible) return;

    document.documentElement.classList.add("noCursor");

    return () => document.documentElement.classList.remove("noCursor");
  }, [isVisible]);

  useEffect(() => {
    if (!hasFinePointer) return;

    const applyCursor = (next) =>
      setCursorConfig((prev) => (sameConfig(prev, next) ? prev : next));
    const applyRing = (next) => setRingConfig((prev) => (sameConfig(prev, next) ? prev : next));

    const handleMouseMove = (e) => {
      // Place the cursor at the pointer on the first move instead of easing to it
      if (!hasMoved.current) {
        hasMoved.current = true;

        cursorX.jump(e.clientX);
        cursorY.jump(e.clientY);
        ringX.jump(e.clientX);
        ringY.jump(e.clientY);

        setIsVisible(true);
      }

      const element = e.target.closest && e.target.closest("[data-cursor]");
      const mode = element?.getAttribute("data-cursor");

      if (!mode) {
        setIsDefaultMode(true);
      } else {
        setIsDefaultMode(false);
      }

      canStretch.current = mode !== "morph" && mode !== "outline";

      if (mode === "morph") {
        const rect = element.getBoundingClientRect();
        const computed = window.getComputedStyle(element);

        const width = rect.width * (2 / 3);
        const height = rect.height * (2 / 3);
        const shortest = Math.min(width, height);

        // Keep the corners generous relative to the shape so the dot swells into a
        // soft blob rather than growing into a hard box
        const borderRadius = Math.min(
          Math.max(resolveRadius(computed, rect), shortest * morphRoundness),
          shortest / 2
        );

        cursorX.set(rect.left + rect.width / 2);
        cursorY.set(rect.top + rect.height / 2);
        ringX.set(rect.left + rect.width / 2);
        ringY.set(rect.top + rect.height / 2);

        applyCursor({
          ...defaultCursorStyles,
          width,
          height,
          borderRadius,
          opacity: 0,
          scale: isMouseDown.current ? 1.5 : 1,
          filter: "blur(20px)",
        });

        // Shrink the ring by scale rather than size, so it collapses towards its
        // centre instead of redrawing its border every frame
        applyRing({ ...defaultRingStyles, scale: 0, opacity: 0 });
      } else if (mode === "outline") {
        const rect = element.getBoundingClientRect();
        const computed = window.getComputedStyle(element);

        cursorX.set(rect.left + rect.width / 2);
        cursorY.set(rect.top + rect.height / 2);
        ringX.set(rect.left + rect.width / 2);
        ringY.set(rect.top + rect.height / 2);

        applyCursor({
          ...defaultCursorStyles,
          width: 0,
          height: 0,
          borderRadius: 0,
          opacity: 0,
          scale: 1,
        });

        applyRing({
          ...defaultRingStyles,
          width: rect.width + 2 * outlineOffset,
          height: rect.height + 2 * outlineOffset,
          // Grow the radius by the same offset so the outline stays concentric
          borderRadius: resolveRadius(computed, rect) + outlineOffset,
          scale: isMouseDown.current ? 0.9 : 1,
          opacity: 1,
        });
      } else {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        ringX.set(e.clientX);
        ringY.set(e.clientY);

        applyCursor({
          ...defaultCursorStyles,
          scale: isMouseDown.current ? 1.5 : 1,
        });
        applyRing({
          ...defaultRingStyles,
          scale: isMouseDown.current ? 0.5 : 1,
        });
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
  }, [cursorX, cursorY, ringX, ringY, isDefaultMode, hasFinePointer]);

  if (!hasFinePointer || !isVisible) return null;

  return (
    <Fragment>
      <motion.div
        className={classes.Cursor}
        style={{
          left: cursorX,
          top: cursorY,
          rotate: cursorStretch.rotate,
          scaleX: cursorStretch.scaleX,
          scaleY: cursorStretch.scaleY,
        }}
        transformTemplate={stretchTransform}
        initial={false}
        animate={cursorConfig}
        transition={transition}
      />
      <motion.div
        className={classes.Ring}
        style={{
          left: ringX,
          top: ringY,
          rotate: ringStretch.rotate,
          scaleX: ringStretch.scaleX,
          scaleY: ringStretch.scaleY,
        }}
        transformTemplate={stretchTransform}
        initial={false}
        animate={ringConfig}
        transition={transition}
      />
    </Fragment>
  );
};

export default Cursor;
