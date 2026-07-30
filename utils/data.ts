import {
  IEducation,
  IExperience,
  IOpenSourceContribution,
  IProject,
  ISkill,
} from "./types";

export const links = {
  github: "https://github.com/vansh-vm04",
  linkedin: "https://www.linkedin.com/in/vanshmorwani",
  mail: "mailto:vanshmorwani1@gmail.com",
  resume:
    "https://drive.google.com/file/d/1Oi5-eQyS2wuxssXgrPspljXgKEy41V7M/view?usp=sharing",
};

export const projects: IProject[] = [
  {
    name: "DayONE",
    description:
      "All-in-one productivity app for tasks, habits, notes, and reminders.",
    github: "https://github.com/vansh-vm04/productivity-app",
    skills: ["React Native", "Expo", "TypeScript", "SQLite"],
    featured: true,
    images: [
      "https://res.cloudinary.com/dd2jupzdn/image/upload/v1780887435/dayone-banner-2_dizkj6.png",
      "https://res.cloudinary.com/dd2jupzdn/image/upload/v1780887434/dayone-banner-3_cahfvv.png",
      "https://res.cloudinary.com/dd2jupzdn/image/upload/v1780887433/dayone-banner-4_rnznl7.png"
    ],
    download: "https://github.com/vansh-vm04/productivity-app/releases/download/v1.0.0/DayONE-v1.0.0.apk"
  },
  {
    name: "Profolio",
    description: "Portfolio generator with customizable templates.",
    live: "https://profolio-app.vercel.app/",
    github: "https://github.com/vansh-vm04/profolio",
    skills: ["React", "Node.js", "Express.js", "MongoDB"],
    featured: true,
    images: [
      "https://res.cloudinary.com/dd2jupzdn/image/upload/v1770565075/Screenshot_2026-02-08_210131_ssyir8.png",
      "https://res.cloudinary.com/dd2jupzdn/image/upload/v1770565074/Screenshot_2026-02-08_210154_pdhtuw.png",
      "https://res.cloudinary.com/dd2jupzdn/image/upload/v1770565074/Screenshot_2026-02-08_210222_dxhzhj.png",
      "https://res.cloudinary.com/dd2jupzdn/image/upload/v1770565074/Screenshot_2026-02-08_210307_np7uem.png",
      "https://res.cloudinary.com/dd2jupzdn/image/upload/v1770565073/Screenshot_2026-02-08_210348_yf1wq1.png",
    ],
  },
  {
    name: "Leads Management App",
    description:
      "CRM dashboard to manage leads with role-based ownership, validation, and server-side filtering.",
    live: "https://e-leads.vercel.app",
    github: "https://github.com/vansh-vm04/e-Leads",
    skills: ["Next.js", "TypeScript", "Zod", "Prisma", "PostgreSQL"],
    featured: false,
    images: [
      "https://res.cloudinary.com/dd2jupzdn/image/upload/v1770565075/Screenshot_2026-02-08_204257_xi3avt.png",
      "https://res.cloudinary.com/dd2jupzdn/image/upload/v1770565075/Screenshot_2026-02-08_204352_cgqcuk.png",
    ],
  },
  {
    name: "WeTalk",
    description: "Real-time chat app with WebSocket integration.",
    live: "https://wetalk-app.vercel.app/",
    github: "https://github.com/vansh-vm04/WeTalk",
    skills: ["React", "TypeScript", "Node.js", "WebSockets"],
    featured: false,
    images: [
      "https://res.cloudinary.com/dd2jupzdn/image/upload/v1770565075/Screenshot_2026-02-08_204811_qtoaia.png",
    ],
  },
  {
    name: "AI Summarizer",
    description:
      "Summarize any video, audio or meeting transcripts in one click.",
    live: "https://easy-summary.vercel.app/",
    github: "https://github.com/vansh-vm04/AI-Summarizer",
    skills: ["TypeScript", "Next.js", "Express.js", "Groq API"],
    featured: false,
    images: [
      "https://res.cloudinary.com/dd2jupzdn/image/upload/v1770565099/Screenshot_2026-02-08_204208_e3fhd6.png",
      "https://res.cloudinary.com/dd2jupzdn/image/upload/v1770565258/Screenshot_2026-02-08_211041_uttia5.png",
    ],
  },
  {
    name: "BundleUp",
    description: "All your youtube, tweet and blog links in one app.",
    live: "https://bundleup.vercel.app/",
    github: "https://github.com/vansh-vm04/bundleup",
    skills: ["TypeScript", "Express.js", "React", "MongoDB"],
    featured: false,
    images: [
      "https://res.cloudinary.com/dd2jupzdn/image/upload/v1770565073/Screenshot_2026-02-08_210603_vrfr7q.png",
      "https://res.cloudinary.com/dd2jupzdn/image/upload/v1770565073/Screenshot_2026-02-08_210520_btkxjz.png",
      "https://res.cloudinary.com/dd2jupzdn/image/upload/v1770565073/Screenshot_2026-02-08_210629_tc9sqf.png",
    ],
  },
];

export const featuredProjects = projects.filter(
  (project) => project.featured === true,
);

export const skills: ISkill[] = [
  // Languages
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  // Frontend
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },

  // Backend & APIs
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "NestJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },

  // DevOps
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonwebservices.svg",
  },
  {
    name: "Azure DevOps",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg",
  },

  // Tools & Others
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "Bruno",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bruno.svg",
  },
  {
    name: "Stripe Payments",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stripe.svg",
  },
];

export const books = [
  "https://res.cloudinary.com/dhuql3iuv/image/upload/v1758554452/ikigai_ppgbw8.png",
  "https://res.cloudinary.com/dhuql3iuv/image/upload/v1758554466/atomic_wbn0xf.jpg",
  "https://res.cloudinary.com/dhuql3iuv/image/upload/v1758554452/courage_iavudn.png",
  "https://res.cloudinary.com/dhuql3iuv/image/upload/v1758554451/do-it-today_xzg5oe.jpg",
  "https://res.cloudinary.com/dhuql3iuv/image/upload/v1758550876/attitude_nz7i56.jpg",
  "https://res.cloudinary.com/dhuql3iuv/image/upload/v1758558146/psychology-of-money_qszhp0.jpg",
];

export const experiences: IExperience[] = [
  {
    company: "BetaTest Solutions",
    role: "Software Engineer Intern",
    duration: "Nov 2025 – June 2026",
    location: "Bangalore, India",
    logo: "https://res.cloudinary.com/dhuql3iuv/image/upload/v1772828265/Screenshot_2026-03-07_014549_acf8kk.png",
    skills: ["React", "React Native", "NestJS", "TypeScript", "MariaDB", "Redis", "Azure DevOps", "Stripe Payments", "Bruno"],
    responsibilities: [
      "Worked on a multi platform application including B2C mobile and web platforms and a B2B web platform using React, React Native, NestJS, and REST APIs in an Agile environment using Azure DevOps.",
      "Integrated Stripe payment gateway for seamless payments and worked with Stripe Products and Invoices. Also integrated the Wise API for bank account registration and verification, supporting users across 160+ countries.",
      "Built multiple end to end features by planning database structure, developing REST APIs, building frontend screens, and improving API response time using Redis caching across the application.",
      "Implemented an API Gateway to manage authentication for 4 platforms through a single token issuer and added JWT refresh token functionality for secure user and admin authentication.",
    ],
  },
  {
    company: "Upwork",
    role: "Freelance Software Engineer",
    duration: "Aug 2025 – Oct 2025",
    location: "Remote",
    logo: "https://res.cloudinary.com/dd2jupzdn/image/upload/v1782360715/upwork_logo_zycqsm.jpg",
    skills: ["React", "Next.js", "Express.js", "Vercel", "Postman", "AWS"],
    responsibilities: [
      "Built and improved 5+ customer facing web features using React.js, TypeScript, and Node.js, created reusable components, integrated REST APIs, fixed bugs, and worked in an Agile development environment.",
      "Fixed 10+ production issues across frontend and backend by debugging code, improving SQL queries, optimizing application performance, and improving the overall user experience.",
      "Integrated Amazon SES and SendGrid with backend REST APIs to send 10,000+ transactional emails, build emailservices, and support production features across the application.",
    ],
  },
];

export const educations: IEducation[] = [
  {
    institution: "JECRC University, Jaipur",
    degree: "B.Tech. in Computer Science and Engineering",
    duration: "2022 – 2026",
    location: "Jaipur, Rajasthan",
    logo: "/images/jecrc.png",
  },
];

export const openSourceContributions: IOpenSourceContribution[] = [
  {
    project: "NestJS Documentation",
    description: "Contributed to the official NestJS documentation repository",
    prLink: "https://github.com/nestjs/docs.nestjs.com/pull/3400",
    prNumber: 3400,
    repoIcon: "https://github.com/nestjs.png?size=80",
    repoLink: "https://github.com/nestjs/docs.nestjs.com",
  },
];
