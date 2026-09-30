import React from 'react';
import { useCareer } from '../context/CareerContext';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';

export const BloomScoreCard: React.FC = () => {
  const { bloomScore, selectedCareer, setActiveTab, userProfile } = useCareer();

  const score = bloomScore.totalScore;

  // Determine color and status
  const getColor = () => {
    if (score >= 85) return { stroke: '#10b981', text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' };
    if (score >= 70) return { stroke: '#38bdf8', text: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/30' };
    if (score >= 50) return { stroke: '#f59e0b', text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30' };
    return { stroke: '#f43f5e', text: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/30' };
  };

  const colors = getColor();

  // SVG Gauge calculations
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="bg-[#0a1424] border border-[#16253b] rounded-lg p-5 flex flex-col justify-between">
      <div className="flex items-center justify-between pb-3 border-b border-[#14233a]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Personal Readiness Index</span>
          <span className="text-slate-600">·</span>
          <span className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${colors.bg} ${colors.text} ${colors.border}`}>
            {bloomScore.tier}
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-400">Target: {selectedCareer.ticker}</span>
      </div>

      <div className="py-4 flex flex-col sm:flex-row items-center gap-6">
        {/* Radial SVG Dial */}
        <div className="relative w-32 h-32 shrink-0 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
            <circle
              cx="64"
              cy="64"
              r={radius}
              stroke="#132238"
              strokeWidth="9"
              fill="transparent"
            />
            <circle
              cx="64"
              cy="64"
              r={radius}
              stroke={colors.stroke}
              strokeWidth="9"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-700 ease-out"
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-extrabold font-mono tracking-tight text-white">{score}</span>
            <span className="text-[10px] uppercase font-mono text-slate-400">/ 100 score</span>
          </div>
        </div>

        {/* Diagnosis & Advice */}
        <div className="flex-1 space-y-2 text-center sm:text-left">
          <h4 className="text-sm font-semibold text-slate-100">
            {score >= 85
              ? 'Market-Ready Candidate'
              : score >= 70
              ? 'Strong Competitive Foundation'
              : score >= 50
              ? 'Bridging In Progress'
              : 'Early Transition Phase'}
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            {score >= 85
              ? `You possess full mastery of required core frameworks for ${selectedCareer.title}. Ready for top-of-market interviews.`
              : score >= 70
              ? `Solid technical profile. Master the remaining ${bloomScore.missingCriticalSkillsCount} critical skill requirements to reach job-ready status.`
              : `Key competency gaps identified in core system architecture. Follow the recommended learning path to bridge directly.`}
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>Est. <strong className="text-slate-200">{bloomScore.estimatedWeeksToReady} weeks</strong> ({userProfile.weeklyLearningHours}h/wk)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span><strong className="text-slate-200">{bloomScore.masteredSkillsCount}</strong> skills mastered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Component Formula Breakdown */}
      <div className="pt-3 border-t border-[#14233a] grid grid-cols-4 gap-2 text-center">
        <div className="bg-[#070e1a] p-2 rounded border border-[#132238]">
          <div className="text-[10px] text-slate-400 uppercase font-mono">Skills (50%)</div>
          <div className="text-sm font-bold font-mono text-emerald-400">{bloomScore.skillsComponent}%</div>
        </div>
        <div className="bg-[#070e1a] p-2 rounded border border-[#132238]">
          <div className="text-[10px] text-slate-400 uppercase font-mono">Exp (20%)</div>
          <div className="text-sm font-bold font-mono text-sky-400">{bloomScore.experienceComponent}%</div>
        </div>
        <div className="bg-[#070e1a] p-2 rounded border border-[#132238]">
          <div className="text-[10px] text-slate-400 uppercase font-mono">Proof (15%)</div>
          <div className="text-sm font-bold font-mono text-purple-400">{bloomScore.portfolioComponent}%</div>
        </div>
        <div className="bg-[#070e1a] p-2 rounded border border-[#132238]">
          <div className="text-[10px] text-slate-400 uppercase font-mono">Strategic (15%)</div>
          <div className="text-sm font-bold font-mono text-amber-400">{bloomScore.strategicComponent}%</div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-[11px] text-slate-400">
          Formula: <span className="font-mono text-slate-300">Bloom = 0.50·Skills + 0.20·Exp + 0.15·Proof + 0.15·Strat</span>
        </span>
        <button
          onClick={() => setActiveTab('skills')}
          className="text-xs text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1 transition-colors"
        >
          <span>Tune Skills</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
