import {
  fullstackIcon,
  backendIcon,
  frontendIcon,
  databaseIcon,
  devopsIcon,
  python,
  java,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  vuejs,
  docker,
  django,
  sql,
  mongo,
  ts,
  portfolio,
  mobileAppIcon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Full-Stack Web Development", icon: fullstackIcon },
  { title: "Backend APIs", icon: backendIcon },
  { title: "Frontend Development", icon: frontendIcon },
  { title: "Database Design", icon: databaseIcon },
  { title: "Flutter & React native", icon: mobileAppIcon },
  { title: "DevOps / CI-CD", icon: devopsIcon },
];
export const projectsImages = [
  { name: "Python", image: python },
  { name: "Portfolio", image: portfolio },
];

export const technologies = [
  { name: "Python", icon: python, type: "language" },
  { name: "JavaScript", icon: javascript, type: "language" },
  { name: "TypeScript", icon: ts, type: "language" },
  { name: "Java", icon: java, type: "language" },
  { name: "HTML 5", icon: html, type: "markup" },
  { name: "CSS 3", icon: css, type: "style" },
  { name: "React", icon: reactjs, type: "framework" },
  { name: "Vue", icon: vuejs, type: "framework" },
  { name: "Node.js", icon: nodejs, type: "runtime" },
  { name: "Express.js", icon: nodejs, type: "framework" },
  { name: "MongoDB", icon: mongo, type: "database" },
  { name: "SQL", icon: sql, type: "database" },
  { name: "Tailwind CSS", icon: tailwind, type: "style" },
  { name: "Git", icon: git, type: "tool" },
  { name: "Docker", icon: docker, type: "tool" },
  { name: "Django", icon: django, type: "framework" },
];
