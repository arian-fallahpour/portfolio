import React from "react";
import classes from "./Code.module.scss";

import Button from "../../../elements/Button/Button";
import { join } from "@/utils/helpers";

const CodeHeader = ({ activeIndex, setActiveIndex, tabs }) => {
  return (
    <div className={classes.Header}>
      <div className={classes.HeaderButtons}>
        <span className={classes.HeaderButton} />
        <span className={classes.HeaderButton} />
        <span className={classes.HeaderButton} />
      </div>
      <div className={classes.HeaderTabs}>
        {tabs.map((tab, i) => (
          <Button
            key={tab.filename}
            className={join(activeIndex === i ? classes.active : null, classes.HeaderTab)}
            styleName="unstyled"
            onClick={() => setActiveIndex(i)}
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
