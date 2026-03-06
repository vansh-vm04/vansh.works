export interface IProject {
  name: string;
  description: string;
  live: string;
  github: string;
  skills: string[];
  featured: boolean;
  images?: string[];
}

export interface IQuote {
  quote: string;
  author: string;
}

export interface ISkill {
  name: string;
  icon: string;
}

export interface IExperience {
  company: string;
  role: string;
  duration: string;
  location: string;
  logo: string;
  responsibilities: string[];
}
