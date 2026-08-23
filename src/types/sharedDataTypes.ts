import type { ReactNode } from 'react';

export interface BioDocument {
  title: string;
  paragraphs: string[];
}

export interface EducationDocument {
  field: string;
  institution: string;
  location: string;
  achievements: string;
  skills: string;
}

export interface HomeHeroDocument {
  description: string;
}

export interface ProjectDocument {
  title: string;
  description: string;
  technologies: string;
  takeaways: string;
  image: string;
  image2: string;
  repositoryLink: string;
  deploymentLink: string;
  otherContributors?: string;
}

export interface TechSkillDocument {
  title: string;
  type?: string;
  svg: ReactNode;
}

export interface WorkExperienceDocument {
  title: string;
  company: string;
  location: string;
  URL: string;
  start: string;
  end: string;
  achievements: string;
  skills: string;
}
