import React from 'react';
import { useCareer } from '../context/CareerContext';
import { User, Crosshair } from 'lucide-react';

interface HeaderProps {
  onOpenProfile: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenProfile }) => {
  const { activeTab, setActiveTab, selectedCareer, userProfile } = useCareer();

  return (
    <header className="sticky top-0 z-40 h-14 bg-[#050b14]/95 backdrop-blur-md border-b border-[#16253b] px-4 md:px-8 flex items-center justify-between">
      {/* Zone 1: Brand Wordmark (Single clean element) */}
      <div className="flex items-center gap-6">
        <a 
          href="#terminal" 
          onClick={(e) => { e.preventDefault(); setActiveTab('terminal'); }}
          className="text-base font-bold tracking-tight text-white flex items-center gap-1.5 focus-visible:outline-emerald-500"
        >
          <span>Career</span><span className="text-emerald-400 font-extrabold">Bloom</span>
          <span className="text-[11px] font-mono font-normal text-slate-400 ml-1">Terminal</span>
        </a>
      </div>

      {/* Zone 2: Navigation Links (Single-line, 5 tabs) */}
      <nav className="hidden lg:flex items-center gap-1 bg-[#091322] p-1 border border-[#16253b] rounded-md">
        <button
          onClick={() => setActiveTab('terminal')}
          className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
            activeTab === 'terminal'
              ? 'bg-[#14233a] text-white shadow-xs'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Career Terminal
        </button>
        <button
          onClick={() => setActiveTab('skills')}
          className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
            activeTab === 'skills'
              ? 'bg-[#14233a] text-white shadow-xs'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Skill Gap & Bloom Score
        </button>
        <button
          onClick={() => setActiveTab('paths')}
          className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
            activeTab === 'paths'
              ? 'bg-[#14233a] text-white shadow-xs'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Career Graph & Pivots
        </button>
        <button
          onClick={() => setActiveTab('compare')}
          className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
            activeTab === 'compare'
              ? 'bg-[#14233a] text-white shadow-xs'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Compare Matrix
        </button>
        <button
          onClick={() => setActiveTab('roadmap')}
          className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
            activeTab === 'roadmap'
              ? 'bg-[#14233a] text-white shadow-xs'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Learning Roadmap
        </button>
      </nav>

      {/* Zone 3: Actions */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400 bg-[#091322] px-2.5 py-1 rounded border border-[#16253b]">
          <Crosshair className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="text-slate-500">Target:</span>
          <span className="text-emerald-300 font-semibold truncate max-w-[120px]">{selectedCareer.ticker}</span>
        </div>

        <button
          onClick={onOpenProfile}
          className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-200 bg-[#0d1a2d] hover:bg-[#14253e] border border-[#1f3655] rounded transition-colors whitespace-nowrap focus-visible:outline-emerald-500"
          title="Edit your baseline profile and experience"
        >
          <User className="w-3.5 h-3.5 text-sky-400" />
          <span className="truncate max-w-[110px]">{userProfile.name}</span>
          <span className="text-slate-400 font-mono text-[11px] hidden md:inline">({userProfile.yearsExperience}y exp)</span>
        </button>
      </div>
    </header>
  );
};
