
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  taglines: string[];
  email: string;
  socials: SocialLink[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface CurrentFocusItem {
    title: string;
    description: string;
}

export interface CurrentFocus {
    introduction: string;
    focusPoints: CurrentFocusItem[];
    shortTermGoals: string[];
}

export interface GithubStats {
  username: string;
  stats: string;
  topLangs: string;
  streak: string;
  summaryCards: {
    profileDetails: string;
    reposPerLang: string;
    mostCommitLang: string;
    stats: string;
    productiveTime: string;
  }
}

export interface Award {
    title: string;
    event: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  about: string;
  skills: SkillCategory[];
  experience: ExperienceItem[];
  currentFocus: CurrentFocus;
  githubStats: GithubStats;
  awards: Award[];
}
