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

export interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface ApiResponse {
  total: {
    [year: number]: number;
    [year: string]: number; // 'lastYear'
  };
  contributions: Array<Contribution>;
}

export interface ApiErrorResponse {
  error: string;
}
