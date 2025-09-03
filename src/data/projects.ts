// This interface defines the "blueprint" for a project object.
export interface Project {
  id: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string; // Tailwind CSS color class e.g., 'text-blue-500'
  }[];
  image: string; // Path to the project image in your /public folder
  source_code_link: string;
}

// This is the array of your projects.
export const projects: Project[] = [
  {
    id: 1,
    name: "Nexus",
    description:
      "A comprehensive social media platform enabling users to connect, share updates, and engage with a community through a dynamic and interactive feed.",
    tags: [
      { name: "react", color: "text-blue-500" },
      { name: "django", color: "text-green-500" },
      { name: "mantine", color: "text-pink-500" },
    ],
    image: "/projects/nexus.png", // Example path
    source_code_link: "https://github.com/",
  },
  {
    id: 2,
    name: "Garment ERP System",
    description:
      "An enterprise resource planning system tailored for the garment industry, managing inventory, orders, and production workflows from a centralized dashboard.",
    tags: [
      { name: "Vue js", color: "text-blue-500" },
      { name: "mongo db", color: "text-green-500" },
      { name: "beautyfy", color: "text-pink-500" },
    ],
    image: "/projects/garment-erp.png", // Example path
    source_code_link: "https://github.com/",
  },
  {
    id: 3,
    name: "CBHI System",
    description:
      "A community-based health insurance platform designed to manage member registrations, premium collections, and claims processing for local healthcare initiatives.",
    tags: [
      { name: "php", color: "text-blue-500" },
      { name: "mysql", color: "text-green-500" },
      { name: "css", color: "text-pink-500" },
    ],
    image: "/projects/cbhi.png", // Example path
    source_code_link: "https://github.com/",
  },
  {
    id: 4,
    name: "University Guest Information Desk",
    description:
      "A web application for university visitors, providing campus maps, event schedules, department directories, and essential information to enhance their visit.",
    tags: [
      { name: "java", color: "text-blue-500" },
      { name: "mysql", color: "text-green-500" },
      { name: "api", color: "text-pink-500" },
    ],
    image: "/projects/info-desk.png", // Example path
    source_code_link: "https://github.com/",
  },
  {
    id: 5,
    name: "Personal Portfolio",
    description:
      "This responsive portfolio website, built to showcase my skills, projects, and professional experience using a modern tech stack and interactive animations.",
    tags: [
      { name: "react", color: "text-blue-500" },
      { name: "typescript", color: "text-green-500" },
      { name: "tailwind", color: "text-pink-500" },
    ],
    image: "/projects/portfolio.png", // Example path
    source_code_link: "https://github.com/",
  },
];
