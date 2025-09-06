// First, we define the 'Experience' interface. This is the blueprint for a job or work role.
export interface Experience {
  title: string;
  company_name: string;
  icon: string; // Path to company logo image
  iconBg: string; // Background color for the icon container
  date: string;
  website?: string; // Optional: URL to the company's website
  points: string[]; // An array of bullet points for responsibilities and achievements
}

// This is the actual data for your experiences, stored in an array.
export const experiences: Experience[] = [
  {
    title: "Software Engineer (Ethiopia | TBD) ",
    company_name: "Tern systems",
    icon: "/assets/images/company-innovate.png",
    iconBg: "#383E56",
    date: "Dec 2022 - Present",
    website: "https://www.tern.systems/",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers and product managers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Programmer",
    company_name: "Ethioden Consultancy PLC",
    icon: "/assets/images/company-innovate.png",
    iconBg: "#383E56",
    date: "Nov 2022 - Present",
    website: "https://ethioden.com/",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers and product managers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Poshak consultancy PLC",
    icon: "/assets/images/company-mobilefirst.png",
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Sep 2022",
    website: "#",
    points: [
      "Developed responsive and dynamic web applications using Vue.js and Vuetify.",
      "Built and maintained RESTful APIs using LoopBack for Node.js backend.",
      "Implemented state management with Vuex for scalable and maintainable applications.",
      "Optimized frontend performance and user experience across different devices.",
      "Collaborated with team members to integrate backend services and ensure smooth data flow.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Creative Agency",
    icon: "/assets/images/company-creative.png",
    iconBg: "#383E56",
    date: "Jun 2021 - Aug 2021",
    website: "https://creativeagency.example.com",
    points: [
      "Assisted the senior development team in building and styling web pages using HTML, CSS, and JavaScript.",
      "Learned and applied the fundamentals of the React framework in a professional environment.",
      "Participated in daily stand-up meetings and contributed to project planning.",
      "Gained experience with version control systems, primarily Git and GitHub.",
    ],
  },
];
