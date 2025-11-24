"use client";

import { forwardRef } from "react";
import classes from "./Button.module.scss";

import { join, toCap } from "@/utils/helpers";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Magnetic from "../Magnetic/Magnetic";

const Button = forwardRef(
  (
    {
      isBackButton,
      isForwardButton,
      isLink,
      isHashLink,
      isActive,
      isDisabled,
      isLoading,
      isMagnetic = true,
      cursorBehavior = "morph",
      openNewTab,
      children,
      styleName,
      variantName,
      size = "normal",
      className,
      activeClassName,
      ...otherProps
    },
    ref
  ) => {
    const router = useRouter();

    // Add onFocus/onBlur if it doesn't exist mouseEnter/mouseLeave does
    if (otherProps.onMouseEnter && !otherProps.onFocus)
      otherProps.onFocus = otherProps.onMouseEnter;
    if (otherProps.onMouseLeave && !otherProps.onBlur) otherProps.onBlur = otherProps.onMouseLeave;

    // Determine className
    const styleClassName = classes["Button" + toCap(styleName || "")];
    const variantClassName = classes["Button" + toCap(styleName || "") + "--" + variantName];

    const buttonClassName = join(
      classes.Button,
      styleName ? styleClassName : null,
      variantName ? variantClassName : null,
      classes[`size-${size}`],
      className ? className : null,
      isLoading ? classes.loading : null,
      isDisabled ? classes.disabled : null,
      isActive ? classes.active : null
    );

    // Determine tag
    const Tag = isLink || isHashLink ? Link : "button";

    const onClickHandler = () => {
      if (otherProps.onClick) otherProps.onClick();
      if (isBackButton) router.back();
      if (isForwardButton) router.forward();
    };

    const buttonElement = (
      <Tag
        className={buttonClassName}
        href={otherProps.href}
        disabled={isDisabled}
        replace={isHashLink ? true : otherProps.replace}
        onClick={onClickHandler}
        {...otherProps}
        target={openNewTab ? "_blank" : undefined}
        ref={ref}
        data-cursor={cursorBehavior}
      >
        {children}
        {isLoading && <span className={classes.loader} />}
      </Tag>
    );

    if (isMagnetic) {
      return <Magnetic maxShift={10}>{buttonElement}</Magnetic>;
    } else {
      return buttonElement;
    }
  }
);
Button.displayName = "Button";

export default Button;
