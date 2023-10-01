import Button from "@/components/UI/Button/Button";
import classes from "./ContactSection.module.scss";

const Social = ({ icon, link }) => {
  return (
    <li className={classes.Social}>
      <Button buttonType="social" href={link} isLink>
        <i className={`bi ${icon}`} />
      </Button>
    </li>
  );
};

export default Social;
