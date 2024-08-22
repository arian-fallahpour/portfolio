"use client";

import React, { useEffect } from "react";
import classes from "./Header.module.scss";
import Image from "next/image";
import Button from "@/components/elements/Button/Button";

import socials from "@/data/socials";
import { stagger, useAnimate, useInView } from "framer-motion";
import { join } from "@/utils/helpers";

const animations = [
  {
    class: `.${classes.Image}`,
    styles: { opacity: 1, translate: 0 },
    options: { duration: 1, ease: "easeOut" },
  },
  {
    class: `.${classes.ContentRole}`,
    styles: { opacity: 1, translate: 0 },
    options: { duration: 0.5, delay: 0.15 },
  },
  {
    class: `.${classes.ContentName}`,
    styles: { opacity: 1, translate: 0 },
    options: { duration: 0.5, delay: 0.3 },
  },
  {
    class: `.${classes.ContentIntro}`,
    styles: { opacity: 1, translate: 0 },
    options: { duration: 0.5, delay: 0.45 },
  },
  {
    class: `.${classes.ContentDescription}`,
    styles: { opacity: 1, translate: 0 },
    options: { duration: 0.5, delay: 0.6 },
  },
  {
    class: `.${classes.Link}`,
    styles: { opacity: 1, translate: 0 },
    options: { duration: 0.5, delay: stagger(0.15, { startDelay: 0.75 }) },
  },
];

const Header = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      animations.forEach((animation) => {
        animate(animation.class, animation.styles, animation.options);
      });
    }
  }, [isInView, animate]);

  return (
    <header ref={scope} className={join(classes.Header)}>
      <div className={classes.Main}>
        <div className={classes.Content}>
          <p className={join("subtitle", classes.ContentRole)}>Software Engineer</p>
          <h1 className={join("header", "header-title", "text-gradient-primary", classes.ContentName)}>
            Arian Fallahpour
          </h1>
          <p className={join("paragraph", classes.ContentIntro)}>Welcome to my portfolio!</p>
          <p className={join("paragraph", classes.ContentDescription)}>
            I showcase many of my greatest achievements, skills, hobbies, projects, and more so that you can get to know
            me a bit better.
          </p>
          <div className={classes.Links}>
            {socials.map((social) => (
              <Button key={social.key} className={classes.Link} styleName="shine" href={social.href} isLink>
                <social.Icon />
              </Button>
            ))}
          </div>
        </div>
        <div className={classes.Image}>
          <Image src="/images/portrait-1.jpeg" priority fill alt="Arian Fallahpour" />
        </div>
      </div>
    </header>
  );
};

export default Header;
