import React from "react";
import classes from "./Code.module.scss";

import Button from "../../../elements/Button/Button";
import { join } from "@/utils/helpers";
import { codeData } from "@/data/code-data";

const CodeHeader = ({ activeIndex, setActiveIndex }) => {
  return (
    <div className={classes.Header}>
      <div className={classes.Buttons}>
        <span className={classes.Button} />
        <span className={classes.Button} />
        <span className={classes.Button} />
      </div>
      <div className={classes.Tabs}>
        {codeData.map((tab, i) => (
          <Button
            key={tab.filename}
            className={join(activeIndex === i ? classes.active : null, classes.Tab)}
            styleName="unstyled"
            onClick={() => setActiveIndex(i)}
            isMagnetic={false}
          >
            <tab.Icon />
            <span>{tab.filename}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CodeHeader;
