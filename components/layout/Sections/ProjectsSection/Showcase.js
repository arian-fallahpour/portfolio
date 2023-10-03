"use client";

import { useContext } from "react";
import classes from "./Showcase.module.scss";
import { ProjectContext } from "@/store/ProjectContext";
import { join } from "@/utils/helpers";
import Image from "next/image";

import projects from "@/data/projects.json";
import Button from "@/components/UI/Button/Button";

const Showcase = () => {
  const projectContext = useContext(ProjectContext);
  const { isActive, activeProject, activeContent } = projectContext;

  const project = projects[activeProject];
  const content = project.content[activeContent];

  const onExitHandler = () => projectContext.setIsActive(false);
  const onPrevContentHandler = () => projectContext.prevContent();
  const onNextContentHandler = () => projectContext.nextContent();

  return (
    <>
      <span
        className={join(classes.Overlay, isActive ? classes.active : null)}
      />

      <div className={join(classes.Showcase, isActive ? classes.active : null)}>
        <div className={classes.ShowcaseImage}>
          {content.type === "image" && (
            <Image
              src={`/assets/app/projects/${content.src}`}
              alt={content.title}
              sizes="(max-width: 1600px) 41vw, (max-width: 1200px) 47vw, (max-width: 800px) 64vw, 33vw"
              objectFit="cover"
              fill
            />
          )}
          {isActive && content.type === "youtube" && (
            <iframe
              width="1000"
              height="750"
              src="https://www.youtube.com/embed/Xn_OXclwqPI?si=7E6IsrEXpHopkxGd"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
          <Button
            className={classes.ShowcasePrev}
            buttonType="transparent"
            onClick={onPrevContentHandler}
          >
            <i className="bi bi-arrow-left-short" />
          </Button>
          <Button
            className={classes.ShowcaseNext}
            buttonType="transparent"
            onClick={onNextContentHandler}
          >
            <i className="bi bi-arrow-right-short" />
          </Button>
        </div>
        <div className={classes.ShowcaseContent}>
          <h1 className="header header-card">{content.title}</h1>
          <p className="paragraph">{content.description}</p>
        </div>
      </div>

      <Button
        className={join(classes.OverlayExit, isActive ? classes.active : null)}
        onClick={onExitHandler}
        buttonType="bubble"
      >
        <i className="bi bi-x-lg" />
      </Button>
    </>
  );
};

export default Showcase;
