import Link from "next/link";

import classes from "./Header.module.scss";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <header className={classes.Header}>
      <div className={classes.Inner}>
        <Link href="/" className={classes.Logo}>
          Arian&nbsp;Fallahpour
        </Link>

        <nav className={classes.Nav} aria-label="Primary">
          <ul className={classes.NavList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={classes.NavLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
