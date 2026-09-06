import Button, { ButtonProps } from "@/components/elements/Button/Button";
import { join } from "@/utils/helper";
import classes from "./IconButton.module.scss";

export type IconButtonProps = ButtonProps & {
  /** Accessible name for the icon-only control. */
  label: string;
};

const IconButton = ({ label, className, children, ...props }: IconButtonProps) => {
  return (
    <Button className={join(className, classes.IconButton)} aria-label={label} {...props}>
      {children}
    </Button>
  );
};

export default IconButton;
