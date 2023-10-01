import { join } from "@/utils/helpers";
import classes from "./Container.module.scss";

const Container = ({ className, children, ...otherProps }) => {
  return (
    <div className={join(classes.Container, className)} {...otherProps}>
      {children}
    </div>
  );
};

export default Container;
