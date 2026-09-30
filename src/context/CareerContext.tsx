import React, { createContext, useContext, useState, useMemo, useEffect, useCallback } from 'react';
import { Career, UserProfile, SkillProficiency, BloomScoreBreakdown, RadarDimension, BloomAlert } from '../types';
import { CAREERS_DATABASE, INITIAL_USER_PROFILE, INITIAL_USER_SKILLS } from '../data/careers';

interface CareerContextType {
  careers: Career[];
  selectedCareer: Career;
  setSelectedCareerId: (id: string) => void;
  userProfile: UserProfile;
  updateUserProfile: (profile: Partial<UserProfile>) => void;
  userSkills: Record<string, SkillProficiency>;
  setSkillState: (skillId: string, state: SkillProficiency) => void;
  bloomScore: BloomScoreBreakdown;
  activeTab: 'terminal' | 'skills' | 'paths' | 'compare' | 'roadmap';
  setActiveTab: (tab: 'terminal' | 'skills' | 'paths' | 'compare' | 'roadmap') => void;
  compareList: string[];
  toggleCompare: (careerId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  radarData: RadarDimension[];
  // Career Bloom Watch & Alert Feature
  watchedCareerIds: string[];
  toggleWatchCareer: (careerId: string) => void;
  isCareerWatched: (careerId: string) => boolean;
  alerts: BloomAlert[];
  activeNotification: BloomAlert | null;
  dismissNotification: (id?: string) => void;
  markAllAlertsRead: () => void;
  clearAllAlerts: () => void;
  triggerVelocityShift: (targetCareerId?: string, customDelta?: number) => void;
  isLiveSimulationActive: boolean;
  toggleLiveSimulation: () => void;
}

const CareerContext = createContext<CareerContextType | null>(null);

const WATCH_STORAGE_KEY = 'careerbloom_watched_careers';

export const CareerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [careers, setCareers] = useState<Career[]>(CAREERS_DATABASE);
  const [selectedCareerId, setSelectedCareerId] = useState<string>('ai-pm');
  const [userProfile, setUserProfile] = useState<UserProfile>(INITIAL_USER_PROFILE);
  const [userSkills, setUserSkills] = useState<Record<string, SkillProficiency>>(INITIAL_USER_SKILLS);
  const [activeTab, setActiveTab] = useState<'terminal' | 'skills' | 'paths' | 'compare' | 'roadmap'>('terminal');
  const [compareList, setCompareList] = useState<string[]>(['ai-pm', 'ml-sys-eng', 'swe-fullstack']);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Watch state initialization with persistence
  const [watchedCareerIds, setWatchedCareerIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(WATCH_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    return ['ai-pm', 'ml-sys-eng'];
  });

  // Alerts state
  const [alerts, setAlerts] = useState<BloomAlert[]>([]);
  const [activeNotification, setActiveNotification] = useState<BloomAlert | null>(null);
  const [isLiveSimulationActive, setIsLiveSimulationActive] = useState<boolean>(true);

  // Sync watched career IDs to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(WATCH_STORAGE_KEY, JSON.stringify(watchedCareerIds));
    } catch {
      // ignore
    }
  }, [watchedCareerIds]);

  const toggleWatchCareer = useCallback((careerId: string) => {
    setWatchedCareerIds(prev => {
      const isWatched = prev.includes(careerId);
      if (isWatched) {
        return prev.filter(id => id !== careerId);
      } else {
        return [...prev, careerId];
      }
    });
  }, []);

  const isCareerWatched = useCallback((careerId: string) => {
    return watchedCareerIds.includes(careerId);
  }, [watchedCareerIds]);

  const dismissNotification = useCallback((id?: string) => {
    setActiveNotification(prev => {
      if (!id || (prev && prev.id === id)) {
        return null;
      }
      return prev;
    });
  }, []);

  const markAllAlertsRead = useCallback(() => {
    setAlerts(prev => prev.map(a => ({ ...a, read: true })));
  }, []);

  const clearAllAlerts = useCallback(() => {
    setAlerts([]);
    setActiveNotification(null);
  }, []);

  const toggleLiveSimulation = useCallback(() => {
    setIsLiveSimulationActive(prev => !prev);
  }, []);

  // Trigger a realistic velocity shift
  const triggerVelocityShift = useCallback((targetCareerId?: string, customDelta?: number) => {
    setCareers(prevCareers => {
      // Choose target
      const targetIndex = targetCareerId
        ? prevCareers.findIndex(c => c.id === targetCareerId)
        : Math.floor(Math.random() * prevCareers.length);

      if (targetIndex === -1) return prevCareers;
      const target = prevCareers[targetIndex];

      // Calculate shift delta
      let delta: number;
      if (customDelta !== undefined) {
        delta = customDelta;
      } else {
        // Bias towards positive shifts for emerging roles, realistic random between -2.2% and +4.5%
        const isUp = Math.random() > 0.35;
        const magnitude = (Math.random() * 2.8 + 0.6);
        delta = Number((isUp ? magnitude : -magnitude).toFixed(1));
      }

      // Bound velocity reasonably between 4.0% and 58.0%
      const newVelocity = Number(Math.max(4.0, Math.min(58.0, target.hiringVelocity + delta)).toFixed(1));
      const actualDelta = Number((newVelocity - target.hiringVelocity).toFixed(1));

      if (actualDelta === 0) return prevCareers;

      // Check if watched to generate Bloom Alert
      const isWatched = watchedCareerIds.includes(target.id);

      if (isWatched) {
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const direction: 'up' | 'down' = actualDelta >= 0 ? 'up' : 'down';
        
        let message = '';
        if (direction === 'up') {
          message = actualDelta >= 2.5
            ? `Rapid hiring acceleration (+${actualDelta}%): Acute enterprise headcount demand for ${target.title}.`
            : `Hiring velocity expanded (+${actualDelta}%): Increased requisition volume posted this cycle.`;
        } else {
          message = `Hiring velocity tempered (${actualDelta}%): Quarterly headcount quotas stabilizing for ${target.title}.`;
        }

        const newAlert: BloomAlert = {
          id: `alert-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
          careerId: target.id,
          ticker: target.ticker,
          title: target.title,
          timestamp,
          previousVelocity: target.hiringVelocity,
          newVelocity,
          delta: actualDelta,
          direction,
          message,
          read: false
        };

        setAlerts(currAlerts => [newAlert, ...currAlerts.slice(0, 19)]);
        setActiveNotification(newAlert);
      }

      const updatedCareers = [...prevCareers];
      updatedCareers[targetIndex] = {
        ...target,
        hiringVelocity: newVelocity,
        lastVelocityDelta: actualDelta
      };

      return updatedCareers;
    });
  }, [watchedCareerIds]);

  // Periodic background simulation of hiring velocity shifts across market
  useEffect(() => {
    if (!isLiveSimulationActive) return;

    // Trigger an initial preview alert after 4 seconds if no alerts exist yet, so users immediately see the system live
    const initialTimer = setTimeout(() => {
      // Pick a watched career to showcase the Bloom Alert
      if (watchedCareerIds.length > 0) {
        const randomWatched = watchedCareerIds[Math.floor(Math.random() * watchedCareerIds.length)];
        triggerVelocityShift(randomWatched, 2.4);
      }
    }, 3800);

    const interval = setInterval(() => {
      // Pick from watched careers with 70% probability to make alerts tangible and engaging
      if (watchedCareerIds.length > 0 && Math.random() > 0.3) {
        const randomWatched = watchedCareerIds[Math.floor(Math.random() * watchedCareerIds.length)];
        triggerVelocityShift(randomWatched);
      } else {
        triggerVelocityShift();
      }
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isLiveSimulationActive, watchedCareerIds, triggerVelocityShift]);

  // Auto-dismiss active toast notification after 9 seconds
  useEffect(() => {
    if (!activeNotification) return;
    const timer = setTimeout(() => {
      setActiveNotification(null);
    }, 9000);
    return () => clearTimeout(timer);
  }, [activeNotification]);

  const selectedCareer = useMemo(() => {
    return careers.find(c => c.id === selectedCareerId) || careers[0];
  }, [careers, selectedCareerId]);

  const setSkillState = (skillId: string, state: SkillProficiency) => {
    setUserSkills(prev => ({
      ...prev,
      [skillId]: state
    }));
  };

  const updateUserProfile = (profileUpdate: Partial<UserProfile>) => {
    setUserProfile(prev => ({ ...prev, ...profileUpdate }));
  };

  const toggleCompare = (careerId: string) => {
    setCompareList(prev => {
      if (prev.includes(careerId)) {
        if (prev.length <= 1) return prev; // keep at least 1
        return prev.filter(id => id !== careerId);
      } else {
        if (prev.length >= 3) {
          return [prev[1], prev[2], careerId];
        }
        return [...prev, careerId];
      }
    });
  };

  // Dynamically calculate Bloom Score for current target career
  const bloomScore: BloomScoreBreakdown = useMemo(() => {
    const skills = selectedCareer.skills;
    if (skills.length === 0) {
      return {
        totalScore: 75,
        tier: 'Near Competitive',
        skillsComponent: 75,
        experienceComponent: 70,
        portfolioComponent: 75,
        strategicComponent: 80,
        missingCriticalSkillsCount: 0,
        masteredSkillsCount: 0,
        estimatedWeeksToReady: 8
      };
    }

    let totalWeight = 0;
    let earnedWeight = 0;
    let missingCritical = 0;
    let masteredCount = 0;
    let totalWeeksNeeded = 0;

    skills.forEach(skill => {
      totalWeight += skill.marketWeight;
      const status = userSkills[skill.id] || 'missing';
      
      if (status === 'mastered') {
        earnedWeight += skill.marketWeight;
        masteredCount++;
      } else if (status === 'in_progress') {
        earnedWeight += skill.marketWeight * 0.55;
        totalWeeksNeeded += skill.typicalWeeksToMaster * 0.5;
      } else {
        totalWeeksNeeded += skill.typicalWeeksToMaster;
        if (skill.marketDemandLevel === 'Critical') {
          missingCritical++;
        }
      }
    });

    const skillsCoverage = Math.round((earnedWeight / totalWeight) * 100);

    // Experience calibration: role target median benchmark vs user years
    const expBase = Math.min(100, Math.round((userProfile.yearsExperience / 5) * 100));
    
    // Strategic/alignment score based on related role overlap
    const strategicBase = userProfile.currentRole.toLowerCase().includes('engineer') || 
                          userProfile.currentRole.toLowerCase().includes('developer') || 
                          userProfile.currentRole.toLowerCase().includes('product') ? 85 : 68;

    // Portfolio proof component
    const portfolioBase = Math.min(100, Math.round(masteredCount * 18 + 25));

    // Transparent Bloom Formula:
    // Total = (0.50 * Skills) + (0.20 * Experience) + (0.15 * Portfolio) + (0.15 * Strategic)
    const rawScore = Math.round(
      skillsCoverage * 0.50 +
      expBase * 0.20 +
      portfolioBase * 0.15 +
      strategicBase * 0.15
    );

    const boundedScore = Math.max(12, Math.min(98, rawScore));

    let tier: 'Job Ready' | 'Near Competitive' | 'Intermediate' | 'Foundational' = 'Intermediate';
    if (boundedScore >= 85) tier = 'Job Ready';
    else if (boundedScore >= 70) tier = 'Near Competitive';
    else if (boundedScore >= 50) tier = 'Intermediate';
    else tier = 'Foundational';

    // Learning hours adjustment: nominal 10 hrs/week
    const paceMultiplier = 10 / Math.max(2, userProfile.weeklyLearningHours);
    const estimatedWeeksToReady = Math.max(2, Math.round(totalWeeksNeeded * paceMultiplier));

    return {
      totalScore: boundedScore,
      tier,
      skillsComponent: skillsCoverage,
      experienceComponent: expBase,
      portfolioComponent: portfolioBase,
      strategicComponent: strategicBase,
      missingCriticalSkillsCount: missingCritical,
      masteredSkillsCount: masteredCount,
      estimatedWeeksToReady
    };
  }, [selectedCareer, userSkills, userProfile]);

  // Compute radar chart values for user based on skill progress per category
  const radarData: RadarDimension[] = useMemo(() => {
    return selectedCareer.radarDimensions.map(dim => {
      // Find skills in this dimension
      let matchCount = 0;
      let scoreSum = 0;

      selectedCareer.skills.forEach(skill => {
        let matchesDim = false;
        if (dim.axis.includes('Technical') && (skill.category === 'Technical' || skill.category === 'System Architecture')) matchesDim = true;
        if (dim.axis.includes('Product') && skill.category === 'Product & Strategy') matchesDim = true;
        if (dim.axis.includes('Data') && skill.category === 'Data & Analytics') matchesDim = true;
        if (dim.axis.includes('Leadership') && skill.category === 'Leadership & Comms') matchesDim = true;
        if (dim.axis.includes('Tooling') && skill.category === 'Tooling & Automation') matchesDim = true;

        if (matchesDim) {
          matchCount++;
          const status = userSkills[skill.id] || 'missing';
          if (status === 'mastered') scoreSum += 100;
          else if (status === 'in_progress') scoreSum += 55;
          else scoreSum += 15;
        }
      });

      const userProficiency = matchCount > 0 ? Math.round(scoreSum / matchCount) : Math.round(bloomScore.totalScore * 0.85);

      return {
        axis: dim.axis,
        marketRequirement: dim.marketRequirement,
        userProficiency: Math.min(100, Math.max(10, userProficiency))
      };
    });
  }, [selectedCareer, userSkills, bloomScore]);

  return (
    <CareerContext.Provider
      value={{
        careers,
        selectedCareer,
        setSelectedCareerId,
        userProfile,
        updateUserProfile,
        userSkills,
        setSkillState,
        bloomScore,
        activeTab,
        setActiveTab,
        compareList,
        toggleCompare,
        searchQuery,
        setSearchQuery,
        radarData,
        watchedCareerIds,
        toggleWatchCareer,
        isCareerWatched,
        alerts,
        activeNotification,
        dismissNotification,
        markAllAlertsRead,
        clearAllAlerts,
        triggerVelocityShift,
        isLiveSimulationActive,
        toggleLiveSimulation
      }}
    >
      {children}
    </CareerContext.Provider>
  );
};

export const useCareer = () => {
  const context = useContext(CareerContext);
  if (!context) {
    throw new Error('useCareer must be used within a CareerProvider');
  }
  return context;
};
