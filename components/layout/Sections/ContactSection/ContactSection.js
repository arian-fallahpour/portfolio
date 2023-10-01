import classes from "./ContactSection.module.scss";

import Section from "../../Section/Section";

import socials from "@/data/socials.json";
import Social from "./Social";
import Container from "@/components/UI/Container/Container";

const ContactSection = () => {
  const Socials = socials.map((data, i) => <Social key={i} {...data} />);

  return (
    <Section className={classes.ContactSection}>
      <Container className={classes.ContactContainer}>
        <h2 className="header header-section text-center">Contact me</h2>
        <div className={classes.Contact}>
          <div className={classes.ContactColumn}>
            <div className={classes.ContactRow}>
              <div className={classes.ContactCell}>
                <h3 className="header header-card">email</h3>
                <p className="paragraph">{socials[4].value}</p>
              </div>
            </div>
            <div className={classes.ContactRow}>
              <div className={classes.ContactCell}>
                <h3 className="header header-card">phone</h3>
                <p className="paragraph">{socials[5].value}</p>
              </div>
            </div>
          </div>
          <div className={classes.ContactColumn}>
            <div className={classes.ContactCell}>
              <p className="paragraph text-center">{`Don't be afraid to reach out! Whether you have a question, or you have a potential job, I'm always available to help out!`}</p>
            </div>
          </div>
          <div className={classes.ContactColumn}>
            <div className={classes.ContactCell}>
              <ul className={classes.Socials}>{Socials}</ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactSection;
