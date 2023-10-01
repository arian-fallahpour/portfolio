import { join } from "@/utils/helpers";
import classes from "./Section.module.scss";

const Section = ({ children, className }) => {
  return (
    <section className={join(classes.Section, className)}>{children}</section>
  );
};

export default Section;
