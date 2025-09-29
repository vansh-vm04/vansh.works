import { IProject } from "./types";

export const links = {
  github: "https://github.com/vansh-vm04",
  linkedin: "https://www.linkedin.com/in/vanshmorwani",
  mail: "mailto:contact@vansh.works",
  resume:
    "https://drive.google.com/file/d/1Oi5-eQyS2wuxssXgrPspljXgKEy41V7M/view?usp=sharing",
};

export const projects: IProject[] = [
  {
    name: "AI Summarizer",
    description: "Summarize any video, audio or meeting transcripts in one click.",
    live: "https://easy-summary.vercel.app/",
    github: "https://github.com/vansh-vm04/AI-Summarizer",
    skills: ["TypeScript", "Next.js", "Express.js", "Groq API"],
    featured:true
  },
  {
    name: "Leads Management App",
    description:
      "CRM dashboard to manage leads with role-based ownership, validation, and server-side filtering.",
    live: "https://e-leads.vercel.app",
    github: "https://github.com/vansh-vm04/e-Leads",
    skills: ["Next.js", "TypeScript", "Zod", "Prisma", "PostgreSQL"],
    featured:true
  },
  {
    name: "WeTalk",
    description: "Real-time chat app with WebSocket integration.",
    live: "https://wetalk-app.vercel.app/",
    github: "https://github.com/vansh-vm04/WeTalk",
    skills: ["React", "TypeScript", "Node.js", "WebSockets"],
    featured:true
  },
  {
    name: "BundleUp",
    description: "All your youtube, tweet and blog links in one app.",
    live: "https://bundleup.vercel.app/",
    github: "https://github.com/vansh-vm04/bundleup",
    skills: ["TypeScript", "Express.js", "React", "MongoDB"],
    featured:false
  },
  {
    name: "Profolio",
    description: "Portfolio generator with customizable templates.",
    live: "https://profolio-app.vercel.app/",
    github: "https://github.com/vansh-vm04/profolio",
    skills: ["React", "Node.js", "Express.js", "MongoDB"],
    featured:false
  },
  {
    name: "VidCell",
    description: "Video conferencing app with Stream Video SDK.",
    live: "https://vidcell.vercel.app/",
    github: "https://github.com/vansh-vm04/vidcell",
    skills: [
      "Next.js",
      "TypeScript",
      "ShadCN",
      "Stream Video SDK",
    ],
    featured:false
  },
];

export const featuredProjects = projects.filter(project => project.featured === true);

export const skills = [
  //Languages
  "TypeScript",
  "JavaScript",
  "Java",

  // Frontend Frameworks & Libraries
  "React.js / Next.js",
  "Angular",
  "Redux",
  "Recoil",
  "Tailwind CSS",

  // Backend & APIs
  "Node.js",
  "Express.js",
  "Rest APIs",
  "WebSockets",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Prisma",

  // DevOps & Deployment
  "Docker",

  // Tools & Others
  "Git / GitHub",
  "Postman",
];

export const books = [
  "https://res.cloudinary.com/dhuql3iuv/image/upload/v1758554452/ikigai_ppgbw8.png",
  "https://res.cloudinary.com/dhuql3iuv/image/upload/v1758554466/atomic_wbn0xf.jpg",
  "https://res.cloudinary.com/dhuql3iuv/image/upload/v1758554452/courage_iavudn.png",
  "https://res.cloudinary.com/dhuql3iuv/image/upload/v1758554451/do-it-today_xzg5oe.jpg",
  "https://res.cloudinary.com/dhuql3iuv/image/upload/v1758550876/attitude_nz7i56.jpg",
  "https://res.cloudinary.com/dhuql3iuv/image/upload/v1758558146/psychology-of-money_qszhp0.jpg"
]
