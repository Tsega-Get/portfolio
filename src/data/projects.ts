// First, we define the 'interface'. This is like a blueprint for our project objects.
// It tells TypeScript that every project must have these properties.
export interface Project {
  id: number;
  title: string;
  description: string;
  // image: string; // We'll add this back when you have images
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

// This is the actual data for your projects, stored in an array.
export const projectData: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce website with product listings, a shopping cart, and a secure checkout process.",
    // image: '/assets/images/project-ecommerce.png',
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Tsega-Get/portfolio",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A responsive task board with drag-and-drop functionality to organize tasks and improve productivity.",
    // image: '/assets/images/project-task-app.png',
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Tsega-Get/portfolio",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "This very website, designed to showcase my skills and projects in a clean, modern, and responsive layout.",
    // image: '/assets/images/project-portfolio.png',
    technologies: ["React", "TypeScript", "Vite", "CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Tsega-Get/portfolio",
  },
];
