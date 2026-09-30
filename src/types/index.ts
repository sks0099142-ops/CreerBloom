export type WeatherStatus = 'sunny' | 'overcast' | 'stormy' | 'emerging';

export type AutomationRiskLevel = 'low' | 'moderate' | 'elevated';

export type SkillProficiency = 'missing' | 'in_progress' | 'mastered';

export interface SkillItem {
  id: string;
  name: string;
  category: 'Technical' | 'Product & Strategy' | 'Data & Analytics' | 'System Architecture' | 'Leadership & Comms' | 'Tooling & Automation';
  marketWeight: number; // 0-100
  marketDemandLevel: 'Critical' | 'High' | 'Moderate';
  description: string;
  typicalWeeksToMaster: number;
}

export interface RadarDimension {
  axis: string;
  marketRequirement: number; // 0-100
  userProficiency?: number; // 0-100
}

export interface GeoSalary {
  location: string;
  median: number;
  currency: string;
  remoteAvailable: boolean;
}

export interface CareerPathStep {
  targetRole: string;
  timeframe: string;
  salaryPotential: number;
  frictionScore: 'Low' | 'Medium' | 'High';
  skillOverlap: number; // percentage e.g. 75
  bridgeSkills: string[];
}

export interface RoadmapSprint {
  phase: number;
  title: string;
  timeEstimate: string;
  focus: string;
  projectCapstone: {
    title: string;
    description: string;
    deliverable: string;
  };
  interviewFocalPoints: string[];
}

export interface Career {
  id: string;
  slug: string;
  ticker: string; // e.g. CB:AIPM
  title: string;
  sector: string;
  summary: string;
  medianSalary: number;
  entrySalary: number;
  topSalary: number;
  hiringVelocity: number; // percentage e.g. 38.5
  remotePercentage: number;
  automationRisk: {
    level: AutomationRiskLevel;
    score: number; // 0-100 risk score
    rationale: string;
  };
  stabilityIndex: number; // 0-100
  jobOpeningsCount: number;
  weather: {
    status: WeatherStatus;
    label: string;
    description: string;
    hiringWindow: string;
    pressureIndex: number; // 0-100
  };
  growthHistory: {
    years: string[];
    values: number[]; // index scale
  };
  salaryHistory: {
    years: string[];
    values: number[]; // median salary in thousands
  };
  geoSalaries: GeoSalary[];
  radarDimensions: RadarDimension[];
  skills: SkillItem[];
  careerPaths: CareerPathStep[];
  roadmap: RoadmapSprint[];
  lastVelocityDelta?: number;
}

export interface BloomAlert {
  id: string;
  careerId: string;
  ticker: string;
  title: string;
  timestamp: string;
  previousVelocity: number;
  newVelocity: number;
  delta: number;
  direction: 'up' | 'down';
  message: string;
  read: boolean;
}

export interface UserSkillState {
  [skillId: string]: SkillProficiency;
}

export interface UserProfile {
  name: string;
  currentRole: string;
  yearsExperience: number;
  weeklyLearningHours: number;
  preferredWorkMode: 'Remote' | 'Hybrid' | 'On-site';
}

export interface BloomScoreBreakdown {
  totalScore: number;
  tier: 'Job Ready' | 'Near Competitive' | 'Intermediate' | 'Foundational';
  skillsComponent: number;
  experienceComponent: number;
  portfolioComponent: number;
  strategicComponent: number;
  missingCriticalSkillsCount: number;
  masteredSkillsCount: number;
  estimatedWeeksToReady: number;
}
