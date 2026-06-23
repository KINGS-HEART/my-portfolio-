export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  image: string;
  featured: boolean;
  category: string;
}

export type Skill = {
  name: string;
  level: string;
  icon?: React.ReactNode; // ✅ optional now
};

export interface SkillsData {
  languages: Skill[];
  backend: Skill[];
  databases: Skill[];
  tools: Skill[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  technologies: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  coverImage: string | null;
  platform: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
}
