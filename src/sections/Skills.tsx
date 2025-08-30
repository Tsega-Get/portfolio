import "./styles/sectionStyles.css";

const Skills = () => {
  // You can replace these with your actual skills
  const skillsList = [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "Pthon",
    "Django",
    "RESTful APIs",
    "GraphQL",
    "Docker",
    "Git",
  ];

  return (
    <section id="skills" className="section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skillsList.map((skill) => (
          <div key={skill} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
