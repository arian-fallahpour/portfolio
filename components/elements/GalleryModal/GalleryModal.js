"use client";

import React, { useContext, useState } from "react";
import classes from "./GalleryModal.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { join } from "@/utils/helpers";
import { ArrowLeftIcon } from "../icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import Button from "../Button/Button";
import { CloseIcon } from "../icons/CloseIcon";
import { ModalContext } from "@/store/modal-context";

const GalleryModal = ({ sources }) => {
  const { hideModal } = useContext(ModalContext);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const gapLength = "var(--width-sm)";

  const prevSlideHandler = () => {
    setActiveSlideIndex((p) => (p > 0 ? p - 1 : p));
  };

  const nextSlideHandler = () => {
    setActiveSlideIndex((p) => (p + 1 <= sources.length - 1 ? p + 1 : p));
  };

  return (
    <div className={classes.Modal}>
      <div className={classes.Images}>
        {sources.map((source, i) => (
          <motion.div
            key={source}
            className={join(classes.Image, i === activeSlideIndex ? classes.active : null)}
            transition={{ duration: 0.5, type: "tween" }}
            initial={{
              translateX: `calc((100% + ${gapLength}) * ${i - activeSlideIndex})`,
              opacity: i === activeSlideIndex ? 1 : 0,
            }}
            animate={{
              translateX: `calc((100% + ${gapLength}) * ${i - activeSlideIndex})`,
              opacity: i === activeSlideIndex ? 1 : 0,
            }}
          >
            <Image src={source} fill alt={`Photo ${i + 1}`} />
          </motion.div>
        ))}
      </div>

      <Button styleName="rounded" className={classes.Close} onClick={() => hideModal()}>
        <CloseIcon />
      </Button>
      <Button
        onClick={prevSlideHandler}
        isDisabled={activeSlideIndex <= 0}
        styleName="rounded"
        className={classes.PrevSlide}
      >
        <ArrowLeftIcon color="inherit" />
      </Button>
      <Button
        onClick={nextSlideHandler}
        isDisabled={activeSlideIndex >= sources.length - 1}
        styleName="rounded"
        className={classes.NextSlide}
      >
        <ArrowRightIcon />
      </Button>
    </div>
  );
};

export default GalleryModal;
