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
    title: "Full-Stack Developer",
    company_name: "Innovate Solutions Inc.",
    icon: "/assets/images/company-innovate.png", // Example path to company logo
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    website: "https://innovatesolutions.example.com",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers and product managers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Mobile First Co.",
    icon: "/assets/images/company-mobilefirst.png", // Example path to company logo
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Dec 2022",
    website: "https://mobilefirst.example.com",
    points: [
      "Designed and developed cross-platform mobile applications for iOS and Android using React Native.",
      "Worked with native modules when required to achieve platform-specific functionality.",
      "Managed application state using Redux for predictable and maintainable code.",
      "Published applications to the Apple App Store and Google Play Store.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Creative Agency",
    icon: "/assets/images/company-creative.png", // Example path to company logo
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
