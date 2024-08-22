import { join } from "@/utils/helpers";
import React, { forwardRef } from "react";
import classes from "./Section.module.scss";

const Section = forwardRef(({ className, children, style, ...otherProps }, ref) => {
  return (
    <section ref={ref} className={join(classes.Section, className)} {...otherProps}>
      {children}
    </section>
  );
});

export default Section;
