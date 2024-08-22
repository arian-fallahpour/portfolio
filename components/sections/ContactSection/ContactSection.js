"use client";

import Section from "@/components/elements/Section/Section";
import React, { useEffect } from "react";
import classes from "./ContactSection.module.scss";
import Button from "@/components/elements/Button/Button";
import socials from "@/data/socials";
import Image from "next/image";
import { stagger, useAnimate, useInView } from "framer-motion";
import ClipIn from "@/components/elements/ClipIn/ClipIn";

const animations = [
  {
    selector: `.${classes.Header} > *:not(.${classes.HeaderLight})`,
    styles: { opacity: 1, translate: 0 },
    options: { duration: 0.5, delay: stagger(0.2, { startDelay: 0.5 }) },
  },
  {
    selector: `.${classes.Link}`,
    styles: { opacity: 1, translate: 0 },
    options: { duration: 0.5, delay: stagger(0.2, { startDelay: 0.5 + 2 * 0.2 }) },
  },
  {
    selector: `.${classes.Image}`,
    styles: { opacity: 1, translate: 0 },
    options: { duration: 0.5, delay: 1.25 },
  },
];

const ContactSection = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, amount: 0.25 });

  useEffect(() => {
    if (isInView) {
      animations.forEach((animation) => {
        animate(animation.selector, animation.styles, animation.options);
      });
    }
  }, [isInView]);

  return (
    <Section ref={scope} className={classes.ContactSection}>
      <ClipIn isVisible={isInView} direction="right" className={classes.Container}>
        <div className={classes.Main}>
          <div className={classes.Details}>
            <div className={classes.Header}>
              <ClipIn
                isVisible={isInView}
                duration={0.5}
                delay={0.25}
                direction="vertical"
                className={classes.HeaderLight}
              />
              <h2 className="header header-section text-gradient-primary">Let's talk</h2>
              <p className="paragraph light">
                Don't be afraid to reach out! Whether you have a question, or you have a potential job offer, I'm always
                available to help out!
              </p>
            </div>
            <ClipIn isVisible={isInView} direction="right" className={classes.Info}>
              <ul className={classes.Links}>
                {socials.map((social) => (
                  <li key={social.key} className={classes.Link}>
                    <Button styleName="rounded">
                      <social.Icon />
                    </Button>
                    <h3 className="header header-text light">{social.name}</h3>
                    <p className="paragraph light">{social.value}</p>
                  </li>
                ))}
              </ul>
            </ClipIn>
          </div>
          <ClipIn
            isVisible={isInView}
            direction="down"
            transition={{ duration: 1, delay: 0.5 }}
            className={classes.Figure}
          >
            <div className={classes.Image}>
              <Image src="/images/portrait-1.jpeg" fill />
            </div>
          </ClipIn>
        </div>
      </ClipIn>
    </Section>
  );
};

export default ContactSection;
