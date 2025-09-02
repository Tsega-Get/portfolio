import { useState, useEffect } from "react";
import { projectData } from "../data/projects";
import type { Project } from "../data/projects";

const Projects = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Simulate fetching data
    const timer = setTimeout(() => {
      setProjects(projectData);
      setIsLoading(false);
    }, 1000); // 1-second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>
      {isLoading ? (
        <p>Loading projects...</p>
      ) : (
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
