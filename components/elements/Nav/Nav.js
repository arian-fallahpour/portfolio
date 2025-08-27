"use client";

import React from "react";
import classes from "./Nav.module.scss";
import Button from "../Button/Button";

const Nav = () => {
  return (
    <nav className={classes.Nav}>
      <ul className={classes.List}>
        <li className={classes.Item}>
          <Button className={classes.Link}>Skills</Button>
        </li>
        <li className={classes.Item}>
          <Button className={classes.Link}>Experience</Button>
        </li>
        <li className={classes.Item}>
          <Button className={classes.Link}>Projects</Button>
        </li>
        <li className={classes.Item}>
          <Button className={classes.Link}>Contact</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
