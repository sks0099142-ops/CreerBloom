import React from 'react';
import { useCareer } from '../context/CareerContext';
import { Award, Briefcase, CheckCircle, Target, Sparkles } from 'lucide-react';

export const ProofOfSkillRoadmap: React.FC = () => {
  const { selectedCareer, userProfile } = useCareer();
  const roadmap = selectedCareer.roadmap;

  return (
    <div className="space-y-6">
      <div className="bg-[#0a1424] border border-[#16253b] rounded-lg p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>Proof-of-Skill Portfolio & Learning Roadmap</span>
            </div>
            <h2 className="text-xl font-bold text-white">
              Target Curriculum: {selectedCareer.title}
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              Employers disregard generic resume bullet points. Complete these targeted capstones to generate unassailable public evidence of technical competence.
            </p>
          </div>

          <div className="bg-[#070e1a] p-3 rounded border border-[#16253b] font-mono text-xs flex items-center gap-4">
            <div>
              <span className="text-slate-500 block text-[10px]">TARGET VELOCITY</span>
              <span className="text-emerald-400 font-bold">{userProfile.weeklyLearningHours} hrs/week</span>
            </div>
            <div className="text-slate-600">·</div>
            <div>
              <span className="text-slate-500 block text-[10px]">TOTAL PHASES</span>
              <span className="text-white font-bold">{roadmap.length} Sprints</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sprints List */}
      <div className="space-y-4">
        {roadmap.map((sprint, idx) => (
          <div
            key={idx}
            className="bg-[#0a1424] border border-[#16253b] rounded-lg p-5 transition-all hover:border-[#223d63]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#14233a] gap-2">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded bg-[#10233b] border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center">
                  0{sprint.phase}
                </span>
                <h3 className="text-base font-bold text-white">{sprint.title}</h3>
              </div>
              <span className="text-xs font-mono text-sky-400 bg-sky-500/10 border border-sky-500/30 px-2 py-0.5 rounded self-start sm:self-auto">
                {sprint.timeEstimate}
              </span>
            </div>

            <p className="text-xs text-slate-300 py-3 leading-relaxed">
              {sprint.focus}
            </p>

            {/* Proof of Skill Capstone Box */}
            <div className="bg-[#070e1a] border border-[#17273d] rounded-lg p-4 space-y-2 mt-2">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Proof-of-Skill Capstone Project</span>
              </div>

              <h4 className="text-sm font-bold text-slate-100">{sprint.projectCapstone.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {sprint.projectCapstone.description}
              </p>

              <div className="flex items-center gap-2 text-xs pt-1 border-t border-[#132032] text-slate-300">
                <Briefcase className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span className="text-slate-400">Deliverable:</span>
                <span className="font-mono text-slate-200">{sprint.projectCapstone.deliverable}</span>
              </div>
            </div>

            {/* Interview Focal Points */}
            <div className="mt-4 pt-3 border-t border-[#14233a]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                Executive & Technical Interview Focal Points:
              </span>
              <div className="flex flex-wrap gap-2">
                {sprint.interviewFocalPoints.map((point, pIdx) => (
                  <span
                    key={pIdx}
                    className="text-xs text-slate-300 bg-[#0d1b2e] border border-[#193252] px-2.5 py-1 rounded flex items-center gap-1.5"
                  >
                    <Target className="w-3 h-3 text-purple-400" />
                    <span>{point}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
