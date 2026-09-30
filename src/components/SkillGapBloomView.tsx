import React from 'react';
import { useCareer } from '../context/CareerContext';
import { BloomScoreCard } from './BloomScoreCard';
import { SkillRadarChart } from './charts/SkillRadarChart';
import { SkillInventory } from './SkillInventory';
import { Target, Zap, Clock, ShieldCheck } from 'lucide-react';

export const SkillGapBloomView: React.FC = () => {
  const { selectedCareer, bloomScore, userProfile } = useCareer();

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-[#0a1424] border border-[#16253b] rounded-lg p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
              <Target className="w-3.5 h-3.5 text-emerald-400" />
              <span>Competency Gap Diagnosis & Bloom Score Engine</span>
            </div>
            <h2 className="text-xl font-bold text-white">
              Target Role: {selectedCareer.title} ({selectedCareer.ticker})
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              Compare your current capability footprint against verified market expectations. Toggle any skill to view instant recalculations.
            </p>
          </div>

          <div className="bg-[#070e1a] p-3 rounded border border-[#16253b] font-mono text-xs flex items-center gap-4">
            <div>
              <span className="text-slate-500 block text-[10px]">CURRENT ROLE</span>
              <span className="text-white font-bold">{userProfile.currentRole}</span>
            </div>
            <div className="text-slate-600">·</div>
            <div>
              <span className="text-slate-500 block text-[10px]">EXPERIENCE</span>
              <span className="text-sky-400 font-bold">{userProfile.yearsExperience} Years</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Split: Bloom Score Gauge & Radar Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 flex flex-col">
          <BloomScoreCard />
        </div>

        <div className="lg:col-span-6 bg-[#0a1424] border border-[#16253b] rounded-lg p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-[#14233a] mb-2">
            <div>
              <h3 className="text-sm font-bold text-white">5-Axis Skill Gap Radar</h3>
              <span className="text-xs text-slate-400">Green (Your Footprint) vs Blue (Market Benchmark)</span>
            </div>
            <span className="text-xs font-mono text-emerald-400">Live Synthesis</span>
          </div>

          <div className="py-2">
            <SkillRadarChart />
          </div>

          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#14233a] text-center font-mono text-xs">
            <div className="bg-[#070e1a] p-2 rounded border border-[#132238]">
              <span className="text-[10px] text-slate-400 block">Critical Missing</span>
              <span className="text-sm font-bold text-rose-400">{bloomScore.missingCriticalSkillsCount} Skills</span>
            </div>
            <div className="bg-[#070e1a] p-2 rounded border border-[#132238]">
              <span className="text-[10px] text-slate-400 block">Mastered</span>
              <span className="text-sm font-bold text-emerald-400">{bloomScore.masteredSkillsCount} Skills</span>
            </div>
            <div className="bg-[#070e1a] p-2 rounded border border-[#132238]">
              <span className="text-[10px] text-slate-400 block">Time to Ready</span>
              <span className="text-sm font-bold text-sky-400">{bloomScore.estimatedWeeksToReady} Weeks</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Interactive Skill Checklist */}
      <SkillInventory />
    </div>
  );
};
