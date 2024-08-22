import React, { useEffect } from "react";
import classes from "./ExperienceSection.module.scss";
import { stagger, useAnimate, useInView } from "framer-motion";

const animations = [
  {
    selector: `.${classes.ExperienceNumber} `,
    styles: { width: "100%" },
    options: { duration: 1.5, ease: "easeOut" },
  },
  {
    selector: `.${classes.ExperienceNumber} `,
    styles: { opacity: 1 },
    options: { duration: 0.5, ease: "easeOut" },
  },
  {
    selector: `.${classes.ExperienceContent} > * `,
    styles: { opacity: 1, translate: 0 },
    options: { duration: 0.5, delay: stagger(0.15, { startDelay: 0.5 }) },
  },
];

const Experience = ({ index, duration, name, role, list }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, amount: 1 });

  useEffect(() => {
    if (isInView) {
      animations.forEach((animation) => {
        animate(animation.selector, animation.styles, animation.options);
      });
    }
  }, [isInView]);

  return (
    <li ref={scope} className={classes.Experience}>
      <div className={classes.ExperienceContainer}>
        <div className={classes.ExperienceNumber}>
          <div className={classes.ExperienceNumberOuter}>
            <div className={classes.ExperienceNumberInner}>{index + 1}</div>
          </div>
          <span className={classes.ExperienceNumberLine} />
        </div>

        <div className={classes.ExperienceContent}>
          <div className={classes.ExperienceTitle}>
            <div className="subtitle">{duration}</div>
            <h3 className="header header-card">{name}</h3>
            <p className="paragraph">{role}</p>
          </div>
          <ul className="ul">
            {list.map((item, i) => (
              <li key={i} className="li">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Experience;
