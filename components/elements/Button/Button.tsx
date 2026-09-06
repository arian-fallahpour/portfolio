import { join } from "@/utils/helper";
import classes from "./Button.module.scss";

export type ButtonVariant = "default" | "fill";

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
};

const Button = ({
  children,
  className,
  variant = "default",
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={join(className, classes.Button, classes[`Button--${variant}`])}
      {...props}
    >
      <span className={classes.Children}>{children}</span>
    </button>
  );
};

export default Button;
