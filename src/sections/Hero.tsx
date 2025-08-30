import "./styles/sectionStyles.css";

const Hero = () => {
  return (
    <section id="home" className="section hero-section">
      <h1>Workspace</h1>
      <p className="subtitle">
        Full-Stack Developer | Building the Future, One Line of Code at a Time.
      </p>
      <a href="#projects" className="cta-button">
        View My Work
      </a>
    </section>
  );
};

export default Hero;
