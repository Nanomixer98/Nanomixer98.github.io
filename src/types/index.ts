import type { IconType } from 'react-icons'

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  linkedinUsername: string;
  githubUsername: string;
  cvLink: string;
  contactDescription: string;
}

export interface TimelineItemData {
  company: string;
  url: string;
  role: string;
  date: string;
  side: 'left' | 'right';
  tags: string[];
}

export interface Skill {
  name: string;
  weight: number;
}

export interface SkillCategory {
  title: string;
  icon: IconType;
  skills: Skill[];
}

export interface GithubConfig {
  username: string;
  sortBy: string;
  exclude: {
    archived: boolean;
    forks: boolean;
    projects: string[];
  };
  githubPages: string[];
}

export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  archived: boolean;
  fork: boolean;
}
