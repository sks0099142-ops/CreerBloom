import React, { useState } from 'react';
import { useCareer } from '../context/CareerContext';
import { GrowthTrajectoryChart } from './charts/GrowthTrajectoryChart';
import { SkillRadarChart } from './charts/SkillRadarChart';
import { SalaryGeoChart } from './charts/SalaryGeoChart';
import { BloomScoreCard } from './BloomScoreCard';
import { CareerWeatherCard } from './CareerWeatherCard';
import { Search, DollarSign, TrendingUp, ShieldCheck, Globe, Building, ArrowRight, BarChart2, Bell, BellRing, Zap } from 'lucide-react';

export const CareerTerminalOverview: React.FC = () => {
  const { 
    careers, 
    selectedCareer, 
    setSelectedCareerId, 
    setActiveTab, 
    toggleWatchCareer, 
    isCareerWatched, 
    triggerVelocityShift 
  } = useCareer();
  const [searchInput, setSearchInput] = useState('');
  const [activeSectorFilter, setActiveSectorFilter] = useState('All');

  const isWatched = isCareerWatched(selectedCareer.id);

  // Sectors for fast filtering
  const sectors = ['All', 'Artificial Intelligence', 'Engineering', 'Cloud', 'Security', 'Data', 'Finance', 'Design'];

  const filteredCareers = careers.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(searchInput.toLowerCase()) ||
                          c.ticker.toLowerCase().includes(searchInput.toLowerCase()) ||
                          c.sector.toLowerCase().includes(searchInput.toLowerCase());
    const matchesSector = activeSectorFilter === 'All' || c.sector.toLowerCase().includes(activeSectorFilter.toLowerCase());
    return matchesSearch && matchesSector;
  });

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredCareers.length > 0) {
      setSelectedCareerId(filteredCareers[0].id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Search & Execution Command Bar */}
      <div className="bg-[#0a1424] border border-[#16253b] rounded-lg p-4">
        <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              placeholder="SEARCH CAREER TICKER OR TITLE (e.g. AI Product Manager, ML Systems, Cloud Architect, Data Scientist)..."
              className="w-full bg-[#050b14] border border-[#1a2d48] focus:border-emerald-500 rounded-md pl-10 pr-4 py-2.5 text-xs text-white font-mono placeholder:text-slate-500 outline-hidden transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-[#040911] font-mono font-bold text-xs rounded transition-colors whitespace-nowrap"
          >
            EXECUTE ANALYSIS
          </button>
        </form>

        {/* Sector Quick Pills (interactive buttons) */}
        <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-[#132238] overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider pr-1">Sectors:</span>
          {sectors.map(sec => (
            <button
              key={sec}
              onClick={() => setActiveSectorFilter(sec)}
              className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition-colors whitespace-nowrap ${
                activeSectorFilter === sec
                  ? 'bg-[#14233a] text-emerald-400 font-semibold border border-emerald-500/40'
                  : 'text-slate-400 hover:text-slate-200 border border-transparent'
              }`}
            >
              {sec}
            </button>
          ))}
        </div>

        {/* Search Results Dropdown/Suggestions if searching */}
        {searchInput && (
          <div className="mt-3 pt-3 border-t border-[#132238] flex flex-wrap gap-2">
            <span className="text-[11px] font-mono text-slate-400">Matches:</span>
            {filteredCareers.map(c => (
              <button
                key={c.id}
                onClick={() => {
                  setSelectedCareerId(c.id);
                  setSearchInput('');
                }}
                className="px-2 py-0.5 rounded bg-[#0e1d33] hover:bg-[#162e52] text-xs font-mono text-emerald-300 border border-[#193354] transition-colors"
              >
                {c.ticker} · {c.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Career Market Intelligence Hero Card */}
      <div className="bg-[#0a1424] border border-[#16253b] rounded-lg p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-5 border-b border-[#14233a] gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-1.5">
              <span>{selectedCareer.ticker}</span>
              <span className="text-slate-600">/</span>
              <span>{selectedCareer.sector}</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">{selectedCareer.jobOpeningsCount.toLocaleString()} Active Requisitions</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              {selectedCareer.title}
            </h1>
            <p className="text-xs text-slate-300 mt-2 max-w-3xl leading-relaxed">
              {selectedCareer.summary}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 self-start lg:self-center">
            {/* Career Bloom Alert / Watch Status Button */}
            <button
              onClick={() => toggleWatchCareer(selectedCareer.id)}
              className={`px-3.5 py-2 rounded text-xs font-mono font-semibold transition-all flex items-center gap-1.5 border shadow-xs ${
                isWatched
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 hover:bg-amber-500/30'
                  : 'bg-[#101f33] text-slate-300 border-[#1c3656] hover:border-amber-500/40 hover:text-white'
              }`}
              title={isWatched ? 'Bloom Alert Active: Click to remove from watchlist' : 'Set Bloom Alert: Get notified when hiring velocity shifts'}
            >
              {isWatched ? (
                <>
                  <BellRing className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
                  <span>Bloom Alert Active</span>
                </>
              ) : (
                <>
                  <Bell className="w-3.5 h-3.5 text-slate-400" />
                  <span>Set Bloom Alert</span>
                </>
              )}
            </button>

            {/* Quick Test Shift on Selected Career */}
            <button
              onClick={() => triggerVelocityShift(selectedCareer.id)}
              className="px-3 py-2 bg-[#091524] hover:bg-[#12233b] text-amber-300 border border-[#1b314f] rounded text-xs font-mono transition-colors flex items-center gap-1"
              title="Simulate immediate market velocity shift on this role"
            >
              <Zap className="w-3 h-3 text-amber-400" />
              <span>Simulate Shift</span>
            </button>

            <button
              onClick={() => setActiveTab('skills')}
              className="px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded text-xs font-mono font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>Inspect Skill Radar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* High-Density Key Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-5">
          <div className="bg-[#070e1a] p-3.5 rounded border border-[#132238]">
            <span className="text-[11px] font-mono text-slate-400 uppercase flex items-center gap-1">
              <DollarSign className="w-3 h-3 text-emerald-400" />
              Median Salary
            </span>
            <strong className="text-lg md:text-xl font-bold font-mono text-emerald-400 tabular-nums block mt-1">
              ${selectedCareer.medianSalary.toLocaleString()}
            </strong>
            <span className="text-[10px] font-mono text-slate-500">Top 10%: ${selectedCareer.topSalary.toLocaleString()}</span>
          </div>

          <div className="bg-[#070e1a] p-3.5 rounded border border-[#132238] relative overflow-hidden">
            <span className="text-[11px] font-mono text-slate-400 uppercase flex items-center justify-between">
              <span className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-sky-400" />
                Hiring Velocity
              </span>
              {isWatched && (
                <span className="text-[9px] font-mono text-amber-400 flex items-center gap-0.5">
                  <Bell className="w-2.5 h-2.5 fill-amber-400" /> Watched
                </span>
              )}
            </span>
            <strong className="text-lg md:text-xl font-bold font-mono text-sky-400 tabular-nums block mt-1">
              +{selectedCareer.hiringVelocity}%
            </strong>
            <span className="text-[10px] font-mono flex items-center gap-1">
              {selectedCareer.lastVelocityDelta !== undefined ? (
                <span className={`font-semibold ${selectedCareer.lastVelocityDelta >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {selectedCareer.lastVelocityDelta >= 0 ? `▲ +${selectedCareer.lastVelocityDelta}% shift` : `▼ ${selectedCareer.lastVelocityDelta}% shift`}
                </span>
              ) : (
                <span className="text-slate-500">YoY market demand</span>
              )}
            </span>
          </div>

          <div className="bg-[#070e1a] p-3.5 rounded border border-[#132238]">
            <span className="text-[11px] font-mono text-slate-400 uppercase flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              AI Automation Risk
            </span>
            <strong className="text-lg md:text-xl font-bold font-mono text-white uppercase block mt-1">
              {selectedCareer.automationRisk.level}
            </strong>
            <span className="text-[10px] font-mono text-emerald-400">{selectedCareer.automationRisk.score}/100 vulnerability</span>
          </div>

          <div className="bg-[#070e1a] p-3.5 rounded border border-[#132238]">
            <span className="text-[11px] font-mono text-slate-400 uppercase flex items-center gap-1">
              <Globe className="w-3 h-3 text-purple-400" />
              Remote Volume
            </span>
            <strong className="text-lg md:text-xl font-bold font-mono text-purple-300 tabular-nums block mt-1">
              {selectedCareer.remotePercentage}%
            </strong>
            <span className="text-[10px] font-mono text-slate-500">Global flexible roles</span>
          </div>

          <div className="bg-[#070e1a] p-3.5 rounded border border-[#132238]">
            <span className="text-[11px] font-mono text-slate-400 uppercase flex items-center gap-1">
              <Building className="w-3 h-3 text-amber-400" />
              Stability Index
            </span>
            <strong className="text-lg md:text-xl font-bold font-mono text-amber-400 tabular-nums block mt-1">
              {selectedCareer.stabilityIndex}/100
            </strong>
            <span className="text-[10px] font-mono text-slate-500">Structural resilience</span>
          </div>

          <div className="bg-[#070e1a] p-3.5 rounded border border-[#132238]">
            <span className="text-[11px] font-mono text-slate-400 uppercase flex items-center gap-1">
              <BarChart2 className="w-3 h-3 text-emerald-400" />
              Open Requisitions
            </span>
            <strong className="text-lg md:text-xl font-bold font-mono text-white tabular-nums block mt-1">
              {selectedCareer.jobOpeningsCount.toLocaleString()}
            </strong>
            <span className="text-[10px] font-mono text-emerald-400">Immediate hiring</span>
          </div>
        </div>
      </div>

      {/* 2-Column Terminal Layout: Market Dynamics vs Personal Bloom Readiness */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (7 cols): Market Trajectory & Geo Compensation */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-[#0a1424] border border-[#16253b] rounded-lg p-5">
            <GrowthTrajectoryChart />
          </div>

          <div className="bg-[#0a1424] border border-[#16253b] rounded-lg p-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#14233a] mb-4">
              <div>
                <h3 className="text-sm font-bold text-white">Geographic Compensation Benchmarks</h3>
                <span className="text-xs text-slate-400">Total compensation adjustments across major metropolitan hubs</span>
              </div>
              <span className="text-xs font-mono text-emerald-400">Live Rates</span>
            </div>
            <SalaryGeoChart />
          </div>
        </div>

        {/* Right Column (5 cols): Bloom Score & Market Weather Signal */}
        <div className="lg:col-span-5 space-y-6">
          <BloomScoreCard />

          <CareerWeatherCard />

          {/* Quick Skill Radar Snapshot */}
          <div className="bg-[#0a1424] border border-[#16253b] rounded-lg p-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#14233a] mb-3">
              <div>
                <h3 className="text-sm font-bold text-white">Skill Gap Radar Preview</h3>
                <span className="text-xs text-slate-400">Your profile vs benchmark</span>
              </div>
              <button
                onClick={() => setActiveTab('skills')}
                className="text-xs font-mono text-sky-400 hover:text-sky-300 font-medium"
              >
                Expand Radar ⟶
              </button>
            </div>
            <SkillRadarChart />
          </div>
        </div>
      </div>
    </div>
  );
};
