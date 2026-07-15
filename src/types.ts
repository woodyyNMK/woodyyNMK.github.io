export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'Full Stack' | 'Mobile' | 'AI Integrated' | 'Security';
  techStack: string[];
  tags?: string[];
  links: {
    github?: string;
    demo?: string;
  };
  highlights: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  highlights: string[];
  techStack: string[];
  clients?: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  badgeColor?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: 'Experienced' | 'Familiar'}[];
  category: 'Development' | 'DevOps & Infrastructure' | 'Security' | 'Languages & Communication';
}
