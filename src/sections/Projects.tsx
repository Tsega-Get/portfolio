import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

// Import your project data
import { projects } from "../data/projects";
import type { Project } from "../data/projects";
// Import your animation variants if you have them in a separate file
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

// Define the types for the ProjectCard props
interface ProjectCardProps extends Project {
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.05}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col"
      >
        <div className="relative w-full h-[230px]">
          <div className=" inset-0 bg-opacity-50 rounded-2xl z-0 p-16">
            <img
              src={image}
              alt={`Project: ${name}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="absolute inset-0 flex justify-end m-3">
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 transition-opacity"
            >
              {/* You can use an icon here, e.g., from react-icons */}
              <img
                src="portfolio/src/assets/github.png"
                alt="GitHub"
                className="w-1/2 h-1/2 object-contain"
              />
            </a>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 pt-4 border-t border-gray-700">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="mt-20 pb-14  max-w-7xl mx-auto py-16 sm:py-24"
    >
      <motion.section
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-16"
      >
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            My Work
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Projects.
          </h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("up", "tween", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcase my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories. It reflects my ability to solve
            complex problems, work with different technologies, and manage
            projects effectively.
          </motion.p>
        </div>

        <div className="mt-20 flex flex-wrap gap-7 justify-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${project.id}`}
              index={index}
              {...project}
            />
          ))}
        </div>
      </motion.section>
    </section>
  );
};

// If you have a SectionWrapper HOC, use it like this.
// Otherwise, just use the standard export.
// export default SectionWrapper(Projects, "work");
export default Projects;
