// First, we define the 'Experience' interface. This is the blueprint for a job or work role.
export interface Experience {
  title: string;
  company_name: string;
  icon: string; // Path to company logo image
  iconBg: string; // Background color for the icon container
  date: string;
  link?: string; // Optional: URL to the company's website
  points: string[]; // An array of bullet points for responsibilities and achievements
  showCase?: string; // Optional: A label for showcasing the experience, e.g., "website"
}

// This is the actual data for your experiences, stored in an array.
export const experiences: Experience[] = [
  {
    title: "Software Engineer (Ethiopia | TBD) ",
    company_name: "Tern systems",
    icon: "/assets/images/company-innovate.png",
    iconBg: "#383E56",
    date: "Dec 2022 - Present",
    showCase: "website",
    link: "https://www.tern.systems/",
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
    showCase: "website",
    link: "https://ethioden.com/",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers and product managers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Poshak Consultancy Services PLC",
    icon: "/assets/images/company-mobilefirst.png",
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Sep 2022",
    showCase: "linked-in",
    link: "https://www.linkedin.com/company/poshak-consultancy-services-plc-eth/about/",
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
    company_name: "ANRS-STICC",
    icon: "/assets/images/company-creative.png",
    iconBg: "#383E56",
    date: "Oct 2019 - Jan 2020",
    showCase: "Facebook",
    link: "https://web.facebook.com/profile.php?id=100067560995785&sk=following",
    points: [
      "Assisted the senior development team in building and styling web pages using HTML, CSS, and JavaScript.",
      "Learned and applied the fundamentals of the React framework in a professional environment.",
      "Participated in daily stand-up meetings and contributed to project planning.",
    ],
  },
];
