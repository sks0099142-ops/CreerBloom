import React from 'react';
import { useCareer } from '../context/CareerContext';
import { GitBranch, ArrowRight, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';

export const CareerPathwaysView: React.FC = () => {
  const { selectedCareer, setSelectedCareerId, careers } = useCareer();

  return (
    <div className="space-y-6">
      {/* Intro banner */}
      <div className="bg-[#0a1424] border border-[#16253b] rounded-lg p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
              <GitBranch className="w-3.5 h-3.5 text-emerald-400" />
              <span>Career Trajectory Graph & Transition Matrix</span>
            </div>
            <h2 className="text-xl font-bold text-white">
              Progression Outposts from {selectedCareer.title}
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              Career transitions are evaluated by competency overlap, salary elevation potential, and market friction.
            </p>
          </div>

          <div className="bg-[#070e1a] p-3 rounded border border-[#16253b] font-mono text-xs flex items-center gap-4">
            <div>
              <span className="text-slate-500 block text-[10px]">CURRENT TARGET</span>
              <span className="text-white font-bold">{selectedCareer.ticker}</span>
            </div>
            <div className="text-slate-600">⟶</div>
            <div>
              <span className="text-slate-500 block text-[10px]">MEDIAN BASE</span>
              <span className="text-emerald-400 font-bold">${Math.round(selectedCareer.medianSalary / 1000)}k</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pathways Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {selectedCareer.careerPaths.map((path, idx) => {
          const salaryBoost = path.salaryPotential - selectedCareer.medianSalary;
          const isBoost = salaryBoost > 0;

          // Check if target role matches any career in database
          const matchedCareer = careers.find(c => c.title.toLowerCase().includes(path.targetRole.toLowerCase().split(' ')[0]));

          return (
            <div
              key={idx}
              className="bg-[#0a1424] border border-[#16253b] hover:border-emerald-500/40 rounded-lg p-5 flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#14233a]">
                  <span className="text-[11px] font-mono text-slate-400">Timeframe: {path.timeframe}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                    path.frictionScore === 'Low'
                      ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
                      : path.frictionScore === 'Medium'
                      ? 'text-amber-400 bg-amber-500/10 border-amber-500/30'
                      : 'text-rose-400 bg-rose-500/10 border-rose-500/30'
                  }`}>
                    {path.frictionScore} Friction
                  </span>
                </div>

                <div className="py-4">
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {path.targetRole}
                  </h3>
                  <div className="flex items-center gap-3 mt-2 font-mono text-xs">
                    <span className="text-slate-400">Potential:</span>
                    <span className="text-emerald-400 font-bold">${Math.round(path.salaryPotential / 1000)}k</span>
                    {isBoost && (
                      <span className="text-emerald-300 text-[11px]">
                        (+${Math.round(salaryBoost / 1000)}k delta)
                      </span>
                    )}
                  </div>
                </div>

                {/* Overlap Bar */}
                <div className="bg-[#070e1a] p-3 rounded border border-[#132238] space-y-1.5 mb-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Layers className="w-3 h-3 text-sky-400" />
                      <span>Skill Footprint Overlap</span>
                    </span>
                    <span className="text-emerald-400 font-bold">{path.skillOverlap}%</span>
                  </div>
                  <div className="w-full bg-[#101e33] h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 rounded-full"
                      style={{ width: `${path.skillOverlap}%` }}
                    />
                  </div>
                </div>

                {/* Bridge Skills Required */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Bridge Competencies Needed:
                  </span>
                  <div className="space-y-1">
                    {path.bridgeSkills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-1.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="truncate">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#14233a] flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">Pivot Pathway</span>
                {matchedCareer ? (
                  <button
                    onClick={() => setSelectedCareerId(matchedCareer.id)}
                    className="text-xs text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1 transition-colors"
                  >
                    <span>Analyze Pivot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <span className="text-xs text-slate-400 font-mono">Executive Target</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Origin Feeder Roles Analysis */}
      <div className="bg-[#0a1424] border border-[#16253b] rounded-lg p-5">
        <h3 className="text-sm font-bold text-white mb-2">
          Common Feeder Pipelines for {selectedCareer.title}
        </h3>
        <p className="text-xs text-slate-400 mb-4">
          Where successful practitioners typically migrate from, along with median transition time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="bg-[#070e1a] p-3 rounded border border-[#152336] space-y-1">
            <span className="text-emerald-400 font-mono font-semibold block">Full-Stack / Backend Engineering</span>
            <p className="text-slate-400">High technical depth. Primary bridge needed: Product Strategy & ROI modeling.</p>
            <span className="text-[11px] text-slate-500 font-mono block pt-1">Avg Pivot: 6–9 months</span>
          </div>

          <div className="bg-[#070e1a] p-3 rounded border border-[#152336] space-y-1">
            <span className="text-sky-400 font-mono font-semibold block">Senior Data Analyst / BI Lead</span>
            <p className="text-slate-400">Strong experimentation fundamentals. Primary bridge needed: Foundation model architecture.</p>
            <span className="text-[11px] text-slate-500 font-mono block pt-1">Avg Pivot: 8–12 months</span>
          </div>

          <div className="bg-[#070e1a] p-3 rounded border border-[#152336] space-y-1">
            <span className="text-purple-400 font-mono font-semibold block">Technical Product Manager</span>
            <p className="text-slate-400">Exceptional stakeholder alignment. Primary bridge needed: LLM evals and vector infra.</p>
            <span className="text-[11px] text-slate-500 font-mono block pt-1">Avg Pivot: 4–6 months</span>
          </div>
        </div>
      </div>
    </div>
  );
};
