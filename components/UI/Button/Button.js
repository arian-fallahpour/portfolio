import { join, toCap } from "@/utils/helpers";
import classes from "./Button.module.scss";
import Link from "next/link";

const Button = ({
  className,
  children,
  buttonType,
  isLink,
  isHashLink,
  ...otherProps
}) => {
  const props = {
    className: join(
      classes.Button,
      buttonType ? classes[`Button${toCap(buttonType)}`] : null,
      className
    ),
    ...otherProps,
  };

  if (isLink) {
    return <Link {...props}>{children}</Link>;
  }

  return <button {...props}>{children}</button>;
};

export default Button;
