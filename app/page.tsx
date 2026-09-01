import classes from "./page.module.scss";

export default function Home() {
  return (
    <div className={classes.Page}>
      <section className={classes.Hero}>
        <div className={classes.Container}>
          <p className="subtitle">Software Engineer</p>
          <h1 className="header header-title">Arian Fallahpour</h1>
          <p className="paragraph light">
            I build things for the web. Welcome to my portfolio — a look at my
            skills, projects, and experience.
          </p>
        </div>
      </section>

      <section id="about" className={classes.Section}>
        <div className={classes.Container}>
          <h2 className="header header-section">About</h2>
          <p className="paragraph light">Placeholder content.</p>
        </div>
      </section>

      <section id="projects" className={classes.Section}>
        <div className={classes.Container}>
          <h2 className="header header-section">Projects</h2>
          <p className="paragraph light">Placeholder content.</p>
        </div>
      </section>

      <section id="experience" className={classes.Section}>
        <div className={classes.Container}>
          <h2 className="header header-section">Experience</h2>
          <p className="paragraph light">Placeholder content.</p>
        </div>
      </section>

      <section id="contact" className={classes.Section}>
        <div className={classes.Container}>
          <h2 className="header header-section">Contact</h2>
          <p className="paragraph light">Placeholder content.</p>
        </div>
      </section>
    </div>
  );
}
