"use client";

import React, { useContext, useEffect } from "react";
import classes from "./EducationSection.module.scss";

import Section from "@/components/elements/Section/Section";
import Image from "next/image";

import McMasterLogoSrc from "@/public/images/logo-mcmaster.png";
import LangstaffLogoSrc from "@/public/images/logo-langstaff.png";
import { join } from "@/utils/helpers";
import Button from "@/components/elements/Button/Button";
import { ModalContext } from "@/store/modal-context";
import GalleryModal from "@/components/elements/GalleryModal/GalleryModal";
import { stagger, useAnimate, useInView } from "framer-motion";
import ClipIn from "@/components/elements/ClipIn/ClipIn";

const animations = [
  {
    class: `.${classes.Header} > *`,
    styles: { opacity: 1, translate: 0 },
    options: { duration: 0.5, delay: 0.5 },
  },
  {
    class: `.${classes.Certification} > *`,
    styles: { opacity: 1, translate: 0 },
    options: { duration: 0.5, delay: stagger(0.15, { startDelay: 0.75 }) },
  },
  // classes.Education:nth-child(2)'s animation
  {
    class: `.${classes.Education}:nth-child(2) > *`,
    styles: { opacity: 1, translate: 0 },
    options: { duration: 0.5, delay: stagger(0.15, { startDelay: 1.25 }) },
  },
  // classes.Education:nth-child(3)'s animation
  {
    class: `.${classes.Education}:nth-child(3) > *`,
    styles: { opacity: 1, translate: 0 },
    options: { duration: 0.5, delay: stagger(0.15, { startDelay: 1.75 }) },
  },
];

const EducationSection = () => {
  const { showModal } = useContext(ModalContext);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      animations.forEach((animation) => {
        animate(animation.class, animation.styles, animation.options);
      });
    }
  }, [isInView, animate]);

  const showGalleryModalHandler = () => {
    showModal(
      <GalleryModal
        sources={[
          "/images/certificates/react.jpg",
          "/images/certificates/nodejs.jpg",
          "/images/certificates/javascript.jpg",
        ]}
      />
    );
  };

  return (
    <Section ref={scope} className={classes.EducationSection}>
      <ClipIn isVisible={isInView} direction="horizontal" className={classes.Divider}>
        <span className={classes.Line} />
      </ClipIn>
      <ClipIn isVisible={isInView} direction="horizontal" className={classes.Header}>
        <h2 className="header header-section text-center">Education and Certifications</h2>
      </ClipIn>
      <div className={classes.Content}>
        <div className={classes.Certification}>
          <Button className={classes.Images} styleName="unstyled" onClick={showGalleryModalHandler}>
            <div className={classes.Image}>
              <Image src="/images/certificates/react.jpg" alt="React Certificate" fill />
            </div>
            <div className={classes.Image}>
              <Image src="/images/certificates/nodejs.jpg" alt="NodeJs Certificate" fill />
            </div>
            <div className={classes.Image}>
              <Image src="/images/certificates/javascript.jpg" alt="Javascript Certificate" fill />
            </div>
          </Button>

          <p className="subtitle text-gradient-primary">certifications</p>
          <h4 className="header header-card">Udemy</h4>
          <ul className="ul">
            <li className="li">React - The Complete Guide 2024 (incl. Next.js, Redux)</li>
            <li className="li">Node.js, Express, MongoDB & More: The Complete Bootcamp</li>
            <li className="li">The Complete JavaScript Course 2024: From Zero to Expert!</li>
          </ul>
        </div>
        <ClipIn
          isVisible={isInView}
          direction="right"
          delay={1}
          className={join(classes.Education, classes.EducationUniversity)}
        >
          <div className={classes.EducationLogo}>
            <Image src={McMasterLogoSrc} alt="McMaster university logo" />
          </div>
          <p className="subtitle text-gradient-primary">university</p>
          <h3 className="header header-card">Software Engineering co-op</h3>
          <ul className="ul">
            <li className="li">Mars Rover Team</li>
            <li className="li">Recyling robot</li>
          </ul>
        </ClipIn>
        <ClipIn
          isVisible={isInView}
          direction="right"
          delay={1.5}
          className={join(classes.Education, classes.EducationHighSchool)}
        >
          <div className={classes.EducationLogo}>
            <Image src={LangstaffLogoSrc} alt="Langstaff secondary school logo" />
          </div>
          <p className="subtitle text-gradient-primary">high school</p>
          <h3 className="header header-card">Langstaff Secondary School</h3>
          <ul className="ul">
            <li className="li">Varsity Soccer Team</li>
            <li className="li">Relay for Life Organizer</li>
          </ul>
        </ClipIn>
      </div>
    </Section>
  );
};

export default EducationSection;
