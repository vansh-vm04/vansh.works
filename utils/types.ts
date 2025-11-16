export interface IProject {
  name: string;
  description: string;
  live: string;
  github: string;
  skills: string[];
  featured: boolean;
}

export interface IQuote {
  quote: string;
  author: string;
}

export interface ISkill {
  name: string;
  icon: string;
}
