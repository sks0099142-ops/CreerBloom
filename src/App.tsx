import React, { useState } from 'react';
import { CareerProvider, useCareer } from './context/CareerContext';
import { Header } from './components/Header';
import { TickerBar } from './components/TickerBar';
import { CareerTerminalOverview } from './components/CareerTerminalOverview';
import { SkillGapBloomView } from './components/SkillGapBloomView';
import { CareerPathwaysView } from './components/CareerPathwaysView';
import { CareerComparisonView } from './components/CareerComparisonView';
import { ProofOfSkillRoadmap } from './components/ProofOfSkillRoadmap';
import { UserProfileModal } from './components/UserProfileModal';

const AppContent: React.FC = () => {
  const { activeTab } = useCareer();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#040911] text-[#e2ecf8] flex flex-col font-sans">
      <Header onOpenProfile={() => setIsProfileOpen(true)} />
      <TickerBar />

      <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 md:px-8 py-6">
        {activeTab === 'terminal' && <CareerTerminalOverview />}
        {activeTab === 'skills' && <SkillGapBloomView />}
        {activeTab === 'paths' && <CareerPathwaysView />}
        {activeTab === 'compare' && <CareerComparisonView />}
        {activeTab === 'roadmap' && <ProofOfSkillRoadmap />}
      </main>

      {/* Quiet, clean footer adhering to constitution rules */}
      <footer className="border-t border-[#14233a] py-6 px-4 md:px-8 text-center text-xs text-slate-400 font-mono">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">CareerBloom</span>
            <span>·</span>
            <span>Market Intelligence Terminal</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Real-time Readiness Benchmarking</span>
            <span>·</span>
            <span>All Compensation Data in USD/Equiv</span>
          </div>

          <div>
            <span>© 2026 CareerBloom. Verified Market Intelligence.</span>
          </div>
        </div>
      </footer>

      <UserProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <CareerProvider>
      <AppContent />
    </CareerProvider>
  );
}
