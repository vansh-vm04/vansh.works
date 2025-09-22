import { IProject } from "./types";

export const links = {
  github: "https://github.com/vansh-vm04",
  linkedin: "https://www.linkedin.com/in/vansh027/",
  mail: "mailto:contact@vansh.works",
  resume:
    "https://drive.google.com/file/d/1Oi5-eQyS2wuxssXgrPspljXgKEy41V7M/view?usp=sharing",
};

export const projects: IProject[] = [
  {
    name: "AI Summarizer",
    description: "Summarize any transcripts in one click.",
    live: "https://easy-summary.vercel.app/",
    github: "https://github.com/vansh-vm04/AI-Summarizer",
    skills: ["TypeScript", "Next.js", "Groq API"],
    featured:true
  },
  {
    name: "Leads Management App",
    description:
      "CRM dashboard to manage leads with role-based ownership, validation, and server-side filtering.",
    live: "https://e-leads.vercel.app",
    github: "https://github.com/vansh-vm04/e-Leads",
    skills: ["Next.js", "TypeScript", "Zod", "NextAuth", "Tailwind CSS"],
    featured:true
  },
  {
    name: "WeTalk",
    description: "Real-time chat app with WebSocket integration.",
    live: "https://wetalk-app.vercel.app/",
    github: "https://github.com/vansh-vm04/WeTalk",
    skills: ["React", "Tailwind CSS", "Node.js", "WebSockets"],
    featured:true
  },
  {
    name: "BundleUp",
    description: "All your youtube, tweet and blog links in one app.",
    live: "https://bundleup.vercel.app/",
    github: "https://github.com/vansh-vm04/bundleup",
    skills: ["TypeScript", "Node.js", "React", "Tailwind CSS"],
    featured:false
  },
  {
    name: "Profolio",
    description: "Portfolio generator with customizable templates.",
    live: "https://profolio-app.vercel.app/",
    github: "https://github.com/vansh-vm04/profolio",
    skills: ["React", "Tailwind CSS", "Node.js"],
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
      "Tailwind CSS",
      "ShadCN",
      "Stream Video SDK",
    ],
    featured:false
  },
];

export const skills = [
  //Languages
  "TypeScript",
  "JavaScript",
  "Java",

  // Frontend Frameworks & Libraries
  "React.js / Next.js",
  "Tailwind CSS",

  // Backend & APIs
  "Node.js",
  "Express.js",
  "Rest APIs",
  "WebSockets",
  "MongoDB",
  "PostgreSQL",
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

export const quotes = [
  { quote: "When something is important enough, you do it even if the odds are not in your favor.", author: "Elon Musk" },
  { quote: "Your most unhappy customers are your greatest source of learning.", author: "Bill Gates" },
  { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { quote: "Life is like riding a bicycle. To keep your balance you must keep moving.", author: "Albert Einstein" },
  { quote: "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.", author: "Mark Zuckerberg" },
  { quote: "The people who are crazy enough to think they can change the world are the ones who do.", author: "Steve Jobs" },
  { quote: "Don’t compare yourself with anyone in this world. If you do so, you are insulting yourself.", author: "Bill Gates" },
  { quote: "Persistence is very important. You should not give up unless you are forced to give up.", author: "Elon Musk" },
  { quote: "I have no special talent. I am only passionately curious.", author: "Albert Einstein" },
  { quote: "I’m convinced that about half of what separates successful entrepreneurs from the non-successful ones is pure perseverance.", author: "Steve Jobs" },
  { quote: "The biggest risk is not taking any risk… In a world that’s changing really quickly, the only strategy that is guaranteed to fail is not taking risks.", author: "Mark Zuckerberg" },
  { quote: "Don’t let the noise of others’ opinions drown out your own inner voice.", author: "Steve Jobs" },
  { quote: "It’s fine to celebrate success, but it is more important to heed the lessons of failure.", author: "Bill Gates" },
  { quote: "I think it is possible for ordinary people to choose to be extraordinary.", author: "Elon Musk" },
  { quote: "Logic will get you from A to B. Imagination will take you everywhere.", author: "Albert Einstein" },
  { quote: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
  { quote: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
  { quote: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
  { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { quote: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
  { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { quote: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
  { quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt" },
  { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { quote: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { quote: "Don’t limit yourself. Many people limit themselves to what they think they can do.", author: "Mary Kay Ash" },
  { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
  { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { quote: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
  { quote: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
  { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { quote: "Motivation is what gets you started. Habit is what keeps you going.", author: "Jim Ryun" },
  { quote: "Don’t let what you cannot do interfere with what you can do.", author: "John Wooden" },
  { quote: "You can’t cross the sea merely by standing and staring at the water.", author: "Rabindranath Tagore" },
  { quote: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
  { quote: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
  { quote: "Do not be embarrassed by your failures, learn from them and start again.", author: "Richard Branson" },
  { quote: "If you really look closely, most overnight successes took a long time.", author: "Steve Jobs" },
  { quote: "Chase the vision, not the money; the money will end up following you.", author: "Tony Hsieh" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" }
];

export function getRandomQuote(){
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex]
}