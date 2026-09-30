import React, { useState } from 'react';
import { useCareer } from '../context/CareerContext';
import { SkillProficiency } from '../types';
import { Check, Clock, AlertCircle, RotateCcw } from 'lucide-react';

export const SkillInventory: React.FC = () => {
  const { selectedCareer, userSkills, setSkillState } = useCareer();
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [filterGapOnly, setFilterGapOnly] = useState<boolean>(false);

  const skills = selectedCareer.skills;

  const categories = ['All', ...Array.from(new Set(skills.map(s => s.category)))];

  const filteredSkills = skills.filter(skill => {
    if (filterCategory !== 'All' && skill.category !== filterCategory) return false;
    const status = userSkills[skill.id] || 'missing';
    if (filterGapOnly && status === 'mastered') return false;
    return true;
  });

  const getDemandBadge = (level: string) => {
    switch (level) {
      case 'Critical':
        return <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 border border-rose-500/30 px-1.5 py-0.5 rounded">Critical Req</span>;
      case 'High':
        return <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/30 px-1.5 py-0.5 rounded">High Demand</span>;
      default:
        return <span className="text-[10px] font-mono text-slate-400 bg-slate-500/10 border border-slate-500/30 px-1.5 py-0.5 rounded">Moderate</span>;
    }
  };

  return (
    <div className="bg-[#0a1424] border border-[#16253b] rounded-lg p-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#14233a] gap-3">
        <div>
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <span>Skill Gap Inventory & Mastery Calibrator</span>
            <span className="text-[11px] font-mono font-normal text-slate-400">
              ({skills.length} core competencies)
            </span>
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Toggle your real-world proficiency to recalibrate your Bloom Score and Radar in real time.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1 p-0.5 bg-[#070e1a] border border-[#16253b] rounded">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-2 py-0.5 text-[11px] rounded transition-colors whitespace-nowrap ${
                  filterCategory === cat
                    ? 'bg-[#14233a] text-emerald-400 font-medium'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={() => setFilterGapOnly(!filterGapOnly)}
            className={`px-2.5 py-1 text-[11px] font-mono rounded border transition-colors ${
              filterGapOnly
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-[#070e1a] text-slate-400 border-[#16253b] hover:text-slate-200'
            }`}
          >
            {filterGapOnly ? 'Showing Gaps Only' : 'Show All'}
          </button>
        </div>
      </div>

      {/* Skills Table / List */}
      <div className="mt-4 space-y-2.5">
        {filteredSkills.map(skill => {
          const currentStatus = userSkills[skill.id] || 'missing';

          return (
            <div
              key={skill.id}
              className={`p-3.5 rounded-lg border transition-all ${
                currentStatus === 'mastered'
                  ? 'bg-[#0a1827] border-emerald-500/30'
                  : currentStatus === 'in_progress'
                  ? 'bg-[#0a172c] border-sky-500/30'
                  : 'bg-[#070e1a] border-[#152336]'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-semibold text-slate-100">{skill.name}</span>
                    {getDemandBadge(skill.marketDemandLevel)}
                    <span className="text-[11px] font-mono text-slate-400">
                      Weight: {skill.marketWeight}%
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">·</span>
                    <span className="text-[11px] font-mono text-slate-400">
                      ~{skill.typicalWeeksToMaster}w ramp
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">
                    {skill.description}
                  </p>
                </div>

                {/* 3-Way Segmented Mastery Toggle */}
                <div className="flex items-center gap-1 p-1 bg-[#040810] border border-[#16253b] rounded self-start md:self-center shrink-0">
                  <button
                    onClick={() => setSkillState(skill.id, 'missing')}
                    className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono rounded transition-all ${
                      currentStatus === 'missing'
                        ? 'bg-rose-500/20 text-rose-300 font-semibold border border-rose-500/40 shadow-xs'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <AlertCircle className="w-3 h-3" />
                    <span>Missing Gap</span>
                  </button>

                  <button
                    onClick={() => setSkillState(skill.id, 'in_progress')}
                    className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono rounded transition-all ${
                      currentStatus === 'in_progress'
                        ? 'bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/40 shadow-xs'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Clock className="w-3 h-3" />
                    <span>In Progress</span>
                  </button>

                  <button
                    onClick={() => setSkillState(skill.id, 'mastered')}
                    className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono rounded transition-all ${
                      currentStatus === 'mastered'
                        ? 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/40 shadow-xs'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Check className="w-3 h-3" />
                    <span>Mastered</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-[#14233a] flex items-center justify-between text-xs text-slate-400">
        <span>Click any status above to immediately re-run the market readiness engine.</span>
        <button
          onClick={() => {
            skills.forEach(s => setSkillState(s.id, 'mastered'));
          }}
          className="text-xs text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1"
        >
          <span>Simulate 100% Mastery</span>
        </button>
      </div>
    </div>
  );
};
