import { join } from "@/utils/helpers";
import React, { forwardRef } from "react";
import classes from "./Section.module.scss";

const Section = forwardRef(({ className, children, style, ...otherProps }, ref) => {
  return (
    <section ref={ref} className={join(classes.Section, className)} style={style} {...otherProps}>
      {children}
    </section>
  );
});

Section.displayName = "Section";

export default Section;
