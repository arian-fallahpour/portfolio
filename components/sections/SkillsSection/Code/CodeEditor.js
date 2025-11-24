"use client";

import React, { useEffect, useRef, useState } from "react";
import classes from "./Code.module.scss";
import { AnimatePresence, motion } from "motion/react";
import { join } from "@/utils/helpers";
import { Deque } from "@datastructures-js/deque";

import Prism from "prismjs";
import loadLanguages from "prismjs/components/";
loadLanguages(["javascript", "python", "cpp"]);

import "prismjs/themes/prism-okaidia.css";

import { codeData } from "@/data/code-data";

const CodeEditor = ({ activeIndex, charIndex }) => {
  const { code, language } = codeData[activeIndex];

  const [contentHeight, setContentHeight] = useState(0);
  const linesRef = useRef(null);

  // Smoothly adjust height based on content
  useEffect(() => {
    if (!linesRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setContentHeight(linesRef.current.scrollHeight);
    });

    resizeObserver.observe(linesRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  const lines = code.split("\n").map((_, i) => i + 1);
  const tokens = Prism.tokenize(code, Prism.languages[language]);

  return (
    <pre className={classes.Editor}>
      <code
        style={{ height: contentHeight ? contentHeight + "px" : "auto" }}
        className={classes.Content}
      >
        <span ref={linesRef} className={classes.Lines}>
          <AnimatePresence mode="popLayout">
            {lines.map((n) => (
              <motion.span
                layout
                key={n}
                className={classes.Number}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {n}
              </motion.span>
            ))}
          </AnimatePresence>
        </span>

        <span className={classes.Text}>
          <AnimatePresence>{renderTokens(tokens, charIndex)}</AnimatePresence>
        </span>
      </code>

      <code className={classes.Content}></code>
    </pre>
  );
};

export default CodeEditor;

function renderTokens(tokens, charIndex) {
  const elements = [];

  let k = 0;
  const queue = new Deque(tokens);
  while (queue.size() > 0) {
    const token = queue.popFront();

    if (typeof token === "string") {
      for (const char of token) {
        k++;

        if (k > charIndex) continue;

        elements.push(
          <motion.span key={k} className={join("token", token.type)}>
            {char}
          </motion.span>
        );
      }
    } else if (typeof token.content === "string") {
      for (const char of token.content) {
        k++;

        if (k > charIndex) continue;

        elements.push(
          <motion.span key={k} className={join("token", token.type)}>
            {char}
          </motion.span>
        );
      }
    } else {
      for (const subToken of token.content.reverse()) {
        queue.pushFront(subToken);
      }
    }
  }

  return elements;
}
