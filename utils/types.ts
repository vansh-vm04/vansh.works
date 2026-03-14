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

export interface IEducation {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  logo: string;
}
