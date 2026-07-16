import interntrackImg from "@/assets/project-interntrack.png";
import hospitalImg from "@/assets/project-hospital.png";
import chefClaudeImg from "@/assets/project-chef-claude.png";
import dataDrivenImg from "@/assets/project-data-driven.png";
import tenziesImg from "@/assets/project-tenzies.png";
import assemblyEndgameImg from "@/assets/project-assembly-endgame.png";

export const projects = [
  {
    slug: "interntrack",
    title: "InternTrack",
    description:
      "A job and internship application tracker that helps users manage applications, statuses, and deadlines with client-side filtering and persistent local storage.",
    image: interntrackImg,
    tech: ["React (Vite)", "Tailwind CSS v4", "Axios", "React Router", "Context API", "localStorage"],
    role: "Sole developer — designed and built the full frontend, state layer, and persistence.",
    liveUrl: "https://intern-tracker-beta.vercel.app/",
    githubUrl: "https://github.com/MS-Ihsaan/intern-tracker",
    categories: ["Frontend", "React", "Full Stack"],
    featured: true,
  },
  {
    slug: "hospital-appointment",
    title: "Hospital Appointment Booking System",
    description:
      "A collaborative full-stack hospital appointment platform for booking and managing doctor appointments with transactional booking workflows and double-booking prevention.",
    image: hospitalImg,
    tech: ["React", "Vite", "JavaScript", "HTML5", "CSS3", "AI API"],
    role:
      "Built the responsive React frontend, integrated the AI recipe generation API, managed application state, and designed an intuitive user experience for ingredient-based recipe generation.",
    githubUrl: "https://github.com/himalsamarawickrama/hospital-appointment-system",
    categories: ["Full Stack", "Backend", "React", "Java", "Spring Boot"],
    featured: true,
  },
  {
    slug: "assembly-endgame",
    title: "Assembly: Endgame",
    description:
      "An interactive word-guessing game inspired by Hangman, built with React. Players must correctly guess the hidden word before exhausting their attempts, featuring real-time feedback, dynamic keyboard interactions, and engaging game animations.",
    image: assemblyEndgameImg,
    tech: [
      "React",
      "Vite",
      "JavaScript",
      "HTML5",
      "CSS3"
    ],
    role:
      "Developed the complete game using React Hooks, implementing word generation, game state management, keyboard interactions, win/loss detection, conditional rendering, accessibility enhancements, and responsive UI design.",
    liveUrl: "https://assembly-endgame-sandy.vercel.app/",
    githubUrl: "https://github.com/MS-Ihsaan/assembly-endgame",
    categories: ["Frontend", "React", "Game"],
    featured: true,
  },
  {
    slug: "tenzies-game",
    title: "Tenzies Game",
    description:
      "An interactive dice game built with React where players roll, hold, and match all ten dice with the same value in the fewest rolls possible. Features dynamic state management, conditional rendering, and responsive gameplay.",
    image: tenziesImg,
    tech: [
      "React",
      "Vite",
      "JavaScript",
      "HTML5",
      "CSS3"
    ],
    role:
      "Developed the complete game logic using React Hooks, implemented dice state management, win detection, random dice generation, and a responsive user interface.",
    liveUrl: "https://tenzies-game-bay.vercel.app/",
    githubUrl: "https://github.com/MS-Ihsaan/tenzies-game",
    categories: ["Frontend", "React", "Game"],
    featured: true,
  },
  {
    slug: "chef-claude",
    title: "Chef Claude App",
    description:
      "A modern AI-powered recipe generator that creates personalized recipes from user-provided ingredients. Features a responsive interface, efficient state management, and seamless AI integration for an enhanced cooking experience.",
    image: chefClaudeImg,
    tech: ["React", "Spring Boot", "JPA / Hibernate", "Lombok", "MySQL"],
    role:
      "Built the responsive React frontend, integrated the AI recipe generation API, managed application state, and designed an intuitive user experience for ingredient-based recipe generation.",
    liveUrl: "https://chef-claude-app-wine.vercel.app/",
    githubUrl: "https://github.com/MS-Ihsaan/chef-claude-app",
    categories: ["Frontend", "React", "AI"],
    featured: true,
  },
  {
    slug: "my-data-driven-app",
    title: "My Data Driven App",
    description:
      "A responsive data visualization dashboard that transforms raw datasets into meaningful insights through interactive charts and real-time analytics. Designed to help users explore and understand data efficiently.",
    image: dataDrivenImg,
    tech: ["React", "JavaScript", "Vite", "HTML5", "CSS3", "Chart.js"],
    role:
      "Designed and developed the frontend dashboard, implemented interactive charts, responsive layouts, and optimized the user experience for data exploration.",
    githubUrl: "https://github.com/MS-Ihsaan/my-data-driven-app",
    liveUrl: "https://my-data-driven-app.vercel.app/",
    categories: ["Frontend", "React", "Data Visualization"],
    featured: true,
  }
];

export const projectCategories = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "React",
  "Java",
  "Spring Boot",
];
