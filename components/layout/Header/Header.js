import classes from "./Header.module.scss";

import Image from "next/image";
import Container from "@/components/UI/Container/Container";
import Button from "@/components/UI/Button/Button";

import src from "@/public/assets/app/header-1.jpeg";

import socials from "@/data/socials.json";

const Header = () => {
  const Socials = socials.map((data, i) => (
    <li key={i} className={classes.HeaderSocial}>
      <Button buttonType="outline" href={data.link} isLink>
        <i className={`bi ${data.icon}`} />
      </Button>
    </li>
  ));

  return (
    <header className={classes.Header}>
      <span className={classes.HeaderGradient} />
      <span className={classes.HeaderGrid} />

      <Container className={classes.HeaderContainer}>
        <div className={classes.HeaderContent}>
          <div className={classes.HeaderTitle}>
            <h1 className="header header-page">Arian Fallahpour</h1>
            <h2 className="subtitle subtitle-page">
              Entrepreneur and Computer Engineer
            </h2>
          </div>
          <p className="paragraph">Welcome to my personal portfolio!</p>
          <p className="paragraph">
            I showcase many of my greatest achievements, skills, hobbies,
            projects, and more so that you can get to know me a bit better.
          </p>
        </div>

        <div className={classes.HeaderImage}>
          <Image
            src={src}
            alt="Photo of me leaning on a balcony at the Wynn Hotel in Las Vegas"
            fill
            sizes="(max-width: 1600px) 30vw, (max-width: 1200px) 33vw, (max-width: 800px) 30vw, 33vw"
            objectFit="cover"
            quality={90}
            priority
            loading="eager"
          />
        </div>
        <ul className={classes.HeaderSocials}>{Socials}</ul>
      </Container>
    </header>
  );
};

export default Header;
