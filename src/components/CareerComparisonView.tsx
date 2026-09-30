import React from 'react';
import { useCareer } from '../context/CareerContext';
import { Scale, Plus, X, ArrowUpRight, Bell, BellRing } from 'lucide-react';

export const CareerComparisonView: React.FC = () => {
  const { 
    careers, 
    compareList, 
    toggleCompare, 
    setSelectedCareerId, 
    setActiveTab, 
    userSkills, 
    toggleWatchCareer, 
    isCareerWatched 
  } = useCareer();

  const comparedCareers = careers.filter(c => compareList.includes(c.id));

  // Quick helper to calculate Bloom score for any career based on user skills
  const computeQuickBloom = (careerId: string) => {
    const career = careers.find(c => c.id === careerId);
    if (!career || career.skills.length === 0) return 70;

    let totalWeight = 0;
    let earnedWeight = 0;
    career.skills.forEach(s => {
      totalWeight += s.marketWeight;
      const status = userSkills[s.id] || 'missing';
      if (status === 'mastered') earnedWeight += s.marketWeight;
      else if (status === 'in_progress') earnedWeight += s.marketWeight * 0.55;
    });

    const skillScore = Math.round((earnedWeight / totalWeight) * 100);
    return Math.max(15, Math.min(96, Math.round(skillScore * 0.6 + 28)));
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#0a1424] border border-[#16253b] rounded-lg p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
              <Scale className="w-3.5 h-3.5 text-emerald-400" />
              <span>Multi-Role Arbitrage & Comparison Matrix</span>
            </div>
            <h2 className="text-xl font-bold text-white">Side-by-Side Market Benchmark</h2>
            <p className="text-xs text-slate-400 mt-1">
              Evaluate compensation ceiling, automation resilience, hiring weather, and your personal Bloom readiness.
            </p>
          </div>

          {/* Quick role adder */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-slate-400 font-mono">Add to matrix:</span>
            {careers
              .filter(c => !compareList.includes(c.id))
              .slice(0, 4)
              .map(c => (
                <button
                  key={c.id}
                  onClick={() => toggleCompare(c.id)}
                  className="flex items-center gap-1 px-2 py-1 text-xs font-mono bg-[#070e1a] hover:bg-[#101e33] text-slate-300 border border-[#16253b] rounded transition-colors"
                >
                  <Plus className="w-3 h-3 text-emerald-400" />
                  <span>{c.ticker}</span>
                </button>
              ))}
          </div>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {comparedCareers.map(career => {
          const quickBloom = computeQuickBloom(career.id);
          const isPositive = career.hiringVelocity >= 0;

          return (
            <div
              key={career.id}
              className="bg-[#0a1424] border border-[#16253b] rounded-lg p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#14233a]">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-emerald-400">{career.ticker}</span>
                    <button
                      onClick={() => toggleWatchCareer(career.id)}
                      className={`p-1 rounded transition-colors ${
                        isCareerWatched(career.id)
                          ? 'text-amber-400 bg-amber-500/10 hover:bg-amber-500/20'
                          : 'text-slate-500 hover:text-slate-300'
                      }`}
                      title={isCareerWatched(career.id) ? 'Bloom Alert Active (Click to unwatch)' : 'Set Bloom Alert for this role'}
                    >
                      {isCareerWatched(career.id) ? (
                        <BellRing className="w-3.5 h-3.5 fill-amber-400 text-amber-400 animate-pulse" />
                      ) : (
                        <Bell className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                  {comparedCareers.length > 1 && (
                    <button
                      onClick={() => toggleCompare(career.id)}
                      className="text-slate-500 hover:text-rose-400 transition-colors"
                      title="Remove from comparison"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="py-3">
                  <h3 className="text-lg font-bold text-white leading-tight">{career.title}</h3>
                  <span className="text-xs text-sky-400 font-mono block mt-1">{career.sector}</span>
                </div>

                {/* Personal Bloom Score Callout */}
                <div className="bg-[#070e1a] p-3 rounded border border-[#152336] mb-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-400 block">Your Readiness</span>
                    <span className="text-xl font-bold font-mono text-emerald-400">{quickBloom}%</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-slate-400 block">Readiness Tier</span>
                    <span className="text-xs font-semibold text-slate-200">
                      {quickBloom >= 80 ? 'Ready' : quickBloom >= 65 ? 'Competitive' : 'Developing'}
                    </span>
                  </div>
                </div>

                {/* Metrics Table */}
                <div className="space-y-2 text-xs divide-y divide-[#132238]">
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-slate-400">Median Salary</span>
                    <span className="font-mono font-bold text-white tabular-nums">
                      ${career.medianSalary.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-slate-400">Top 10th Percentile</span>
                    <span className="font-mono font-bold text-emerald-400 tabular-nums">
                      ${career.topSalary.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-slate-400">Hiring Velocity (YoY)</span>
                    <span className={`font-mono font-bold tabular-nums ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {isPositive ? '+' : ''}{career.hiringVelocity}%
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-slate-400">Market Weather</span>
                    <span className="font-mono text-slate-200">{career.weather.label.split('·')[0]}</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-slate-400">Automation Vulnerability</span>
                    <span className="font-mono uppercase text-slate-200">{career.automationRisk.level} ({career.automationRisk.score}/100)</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-slate-400">Remote Percentage</span>
                    <span className="font-mono text-slate-200 tabular-nums">{career.remotePercentage}%</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-slate-400">Stability Rating</span>
                    <span className="font-mono text-slate-200 tabular-nums">{career.stabilityIndex}/100</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-slate-400">Active Job Volume</span>
                    <span className="font-mono text-slate-200 tabular-nums">{career.jobOpeningsCount.toLocaleString()} reqs</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#14233a]">
                <button
                  onClick={() => {
                    setSelectedCareerId(career.id);
                    setActiveTab('terminal');
                  }}
                  className="w-full py-2 bg-[#12243d] hover:bg-[#183152] text-slate-200 hover:text-white font-mono text-xs font-semibold rounded transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Select as Active Target</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
