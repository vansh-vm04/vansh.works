import { IProject, ISkill } from "./types";

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
    description:
      "Summarize any video, audio or meeting transcripts in one click.",
    live: "https://easy-summary.vercel.app/",
    github: "https://github.com/vansh-vm04/AI-Summarizer",
    skills: ["TypeScript", "Next.js", "Express.js", "Groq API"],
    featured: true,
    images: [
      "https://res.cloudinary.com/dd2jupzdn/image/upload/v1770565099/Screenshot_2026-02-08_204208_e3fhd6.png",
      "https://res.cloudinary.com/dd2jupzdn/image/upload/v1770565258/Screenshot_2026-02-08_211041_uttia5.png",
    ],
  },
  {
    name: "Leads Management App",
    description:
      "CRM dashboard to manage leads with role-based ownership, validation, and server-side filtering.",
    live: "https://e-leads.vercel.app",
    github: "https://github.com/vansh-vm04/e-Leads",
    skills: ["Next.js", "TypeScript", "Zod", "Prisma", "PostgreSQL"],
    featured: true,
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
    featured: true,
    images: [
      "https://res.cloudinary.com/dd2jupzdn/image/upload/v1770565075/Screenshot_2026-02-08_204811_qtoaia.png",
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
    name: "Bakery Website",
    description:
      "A modern bakery website to explore cakes, browse categories, and place orders with a clean and responsive UI.",
    live: "https://cakes-bakery.vercel.app",
    github: "https://github.com/vansh-vm04/cake-site",
    skills: ["React.js", "Tailwind CSS"],
    featured: false,
    images: [
      "https://res.cloudinary.com/dd2jupzdn/image/upload/v1770565075/Screenshot_2026-02-08_204502_hz8usb.png",
      "https://res.cloudinary.com/dd2jupzdn/image/upload/v1770565074/Screenshot_2026-02-08_204541_rkrjxr.png",
      "https://res.cloudinary.com/dd2jupzdn/image/upload/v1770565074/Screenshot_2026-02-08_204605_vkbx7q.png",
      "https://res.cloudinary.com/dd2jupzdn/image/upload/v1770565073/Screenshot_2026-02-08_204646_ylg41z.png"
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
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },

  // Frontend
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },

  // Backend & APIs
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "WebSockets",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
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
  {
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },

  // DevOps
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
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
];

export const books = [
  "https://res.cloudinary.com/dhuql3iuv/image/upload/v1758554452/ikigai_ppgbw8.png",
  "https://res.cloudinary.com/dhuql3iuv/image/upload/v1758554466/atomic_wbn0xf.jpg",
  "https://res.cloudinary.com/dhuql3iuv/image/upload/v1758554452/courage_iavudn.png",
  "https://res.cloudinary.com/dhuql3iuv/image/upload/v1758554451/do-it-today_xzg5oe.jpg",
  "https://res.cloudinary.com/dhuql3iuv/image/upload/v1758550876/attitude_nz7i56.jpg",
  "https://res.cloudinary.com/dhuql3iuv/image/upload/v1758558146/psychology-of-money_qszhp0.jpg"
]
