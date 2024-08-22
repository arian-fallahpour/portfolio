import React, { forwardRef, Fragment } from "react";
import classes from "./Code.module.scss";
import { join } from "@/utils/helpers";

const CodeEditor = forwardRef(({ revealIndex, formattedCharacters }, ref) => {
  let line = 1;
  return (
    <pre ref={ref} className={classes.Editor}>
      <code className={classes.EditorContent}>
        <span className={classes.Line}>{line}</span>
        {formattedCharacters.map((c, i) => {
          const isLineBreak = c.char === "\n";
          if (isLineBreak) line += 1;

          return (
            <Fragment key={i}>
              <span
                className={join(i < revealIndex ? classes.revealed : null, classes.Character)}
                style={{ color: c.color }}
              >
                {c.char}
              </span>
              {isLineBreak ? <span className={classes.Line}>{line}</span> : null}
            </Fragment>
          );
        })}
      </code>
    </pre>
  );
});

CodeEditor.displayName = "CodeEditor";

export default CodeEditor;
