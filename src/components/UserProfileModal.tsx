import React, { useState } from 'react';
import { useCareer } from '../context/CareerContext';
import { X, User, Sliders, Briefcase, Clock, Building2 } from 'lucide-react';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({ isOpen, onClose }) => {
  const { userProfile, updateUserProfile } = useCareer();

  const [name, setName] = useState(userProfile.name);
  const [currentRole, setCurrentRole] = useState(userProfile.currentRole);
  const [yearsExperience, setYearsExperience] = useState(userProfile.yearsExperience);
  const [weeklyLearningHours, setWeeklyLearningHours] = useState(userProfile.weeklyLearningHours);
  const [preferredWorkMode, setPreferredWorkMode] = useState(userProfile.preferredWorkMode);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile({
      name,
      currentRole,
      yearsExperience,
      weeklyLearningHours,
      preferredWorkMode
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div 
        className="bg-[#0a1424] border border-[#1f3655] rounded-xl max-w-lg w-full p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        aria-labelledby="profile-title"
      >
        <div className="flex items-center justify-between pb-3 border-b border-[#14233a]">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-emerald-400" />
            <h3 id="profile-title" className="text-base font-bold text-white">Configure User Profile & Baseline</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-1 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 font-medium mb-1 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-sky-400" />
              <span>Full Name</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full bg-[#050b14] border border-[#1b2d47] focus:border-emerald-500 rounded px-3 py-2 text-white font-mono outline-hidden"
              required
            />
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
              <span>Current Role / Background</span>
            </label>
            <input
              type="text"
              value={currentRole}
              onChange={e => setCurrentRole(e.target.value)}
              placeholder="e.g. Full-Stack Developer, Junior Data Analyst, Marketing Associate"
              className="w-full bg-[#050b14] border border-[#1b2d47] focus:border-emerald-500 rounded px-3 py-2 text-white font-mono outline-hidden"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-slate-300 font-medium">Years Experience</label>
                <span className="font-mono text-emerald-400 font-bold">{yearsExperience} yrs</span>
              </div>
              <input
                type="range"
                min="0"
                max="15"
                step="1"
                value={yearsExperience}
                onChange={e => setYearsExperience(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-slate-300 font-medium flex items-center gap-1">
                  <Clock className="w-3 h-3 text-sky-400" />
                  <span>Learning Commitment</span>
                </label>
                <span className="font-mono text-sky-400 font-bold">{weeklyLearningHours} h/wk</span>
              </div>
              <input
                type="range"
                min="2"
                max="35"
                step="1"
                value={weeklyLearningHours}
                onChange={e => setWeeklyLearningHours(Number(e.target.value))}
                className="w-full accent-sky-400 cursor-pointer"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-purple-400" />
              <span>Work Mode Preference</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['Remote', 'Hybrid', 'On-site'] as const).map(mode => (
                <button
                  type="button"
                  key={mode}
                  onClick={() => setPreferredWorkMode(mode)}
                  className={`py-2 text-xs font-mono rounded border transition-all ${
                    preferredWorkMode === mode
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 font-bold'
                      : 'bg-[#050b14] text-slate-400 border-[#16253b] hover:text-white'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-[#14233a] flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs text-slate-300 hover:text-white font-medium rounded transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs bg-emerald-500 hover:bg-emerald-400 text-[#040911] font-bold rounded transition-colors shadow-xs"
            >
              Recalibrate Bloom Engine
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
