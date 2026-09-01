import { join } from "@/utils/helpers";
import classes from "./Button.module.scss";

type ButtonPropsType = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...otherProps }: ButtonPropsType) => {
  return (
    <button className={join(classes.Button, className)} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
