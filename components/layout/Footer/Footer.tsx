import classes from "./Footer.module.scss";

const socials = [
  { label: "GitHub", href: "https://github.com/arian-fallahpour" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arian-fallahpour/" },
  { label: "Email", href: "mailto:arianf2004@gmail.com" },
];

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.Inner}>
        <p className={classes.Copy}>
          &copy; {new Date().getFullYear()} Arian Fallahpour
        </p>

        <ul className={classes.Socials}>
          {socials.map((social) => (
            <li key={social.href}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.SocialLink}
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
