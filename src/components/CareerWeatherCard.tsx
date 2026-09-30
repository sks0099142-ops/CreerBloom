import React from 'react';
import { useCareer } from '../context/CareerContext';
import { Sun, CloudSun, CloudRain, Zap, TrendingUp, ShieldAlert, Users, Compass } from 'lucide-react';

export const CareerWeatherCard: React.FC = () => {
  const { selectedCareer } = useCareer();
  const weather = selectedCareer.weather;

  const getWeatherVisual = () => {
    switch (weather.status) {
      case 'sunny':
        return {
          icon: <Sun className="w-6 h-6 text-emerald-400 shrink-0" />,
          badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
          title: 'Sunny · Net Capital Expansion',
          barColor: 'from-emerald-500 to-teal-400'
        };
      case 'overcast':
        return {
          icon: <CloudSun className="w-6 h-6 text-amber-400 shrink-0" />,
          badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
          title: 'Overcast · Heightened Selection Bar',
          barColor: 'from-amber-500 to-yellow-400'
        };
      case 'stormy':
        return {
          icon: <CloudRain className="w-6 h-6 text-rose-400 shrink-0" />,
          badgeColor: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
          title: 'Stormy · Macro Compression',
          barColor: 'from-rose-500 to-red-400'
        };
      case 'emerging':
        return {
          icon: <Zap className="w-6 h-6 text-cyan-400 shrink-0" />,
          badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
          title: 'Emerging · Frontier Talent Inflow',
          barColor: 'from-cyan-500 to-blue-400'
        };
      default:
        return {
          icon: <Sun className="w-6 h-6 text-emerald-400 shrink-0" />,
          badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
          title: 'Sunny',
          barColor: 'from-emerald-500 to-teal-400'
        };
    }
  };

  const visual = getWeatherVisual();

  return (
    <div className="bg-[#0a1424] border border-[#16253b] rounded-lg p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-[#14233a]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Market Signal</span>
            <span className="text-slate-600">·</span>
            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${visual.badgeColor}`}>
              {selectedCareer.weather.label}
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-400">Index: {weather.pressureIndex}/100</span>
        </div>

        <div className="flex items-start gap-4 py-4">
          <div className="p-2.5 rounded-lg bg-[#0e1d33] border border-[#193252]">
            {visual.icon}
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">{visual.title}</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {weather.description}
            </p>
          </div>
        </div>

        {/* Hiring Urgency Window */}
        <div className="bg-[#070e1a] p-3 rounded border border-[#132238] space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Hiring Liquidity Index</span>
            <span className="text-emerald-400 font-semibold">{weather.pressureIndex} / 100</span>
          </div>
          <div className="w-full bg-[#101e33] h-1.5 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${visual.barColor}`}
              style={{ width: `${weather.pressureIndex}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
            <span className="flex items-center gap-1">
              <Compass className="w-3 h-3 text-sky-400" />
              <span>Optimal Window:</span>
            </span>
            <span className="text-slate-200 font-mono font-medium">{weather.hiringWindow}</span>
          </div>
        </div>
      </div>

      {/* Weather Factors Grid */}
      <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-[#14233a] text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Hiring: <strong className="text-white font-mono">+{selectedCareer.hiringVelocity}%</strong></span>
        </div>
        <div className="flex items-center gap-2 text-slate-300">
          <ShieldAlert className="w-3.5 h-3.5 text-sky-400 shrink-0" />
          <span>Automation Risk: <strong className="text-white uppercase font-mono">{selectedCareer.automationRisk.level}</strong></span>
        </div>
        <div className="flex items-center gap-2 text-slate-300">
          <Users className="w-3.5 h-3.5 text-purple-400 shrink-0" />
          <span>Remote Vol: <strong className="text-white font-mono">{selectedCareer.remotePercentage}%</strong></span>
        </div>
        <div className="flex items-center gap-2 text-slate-300">
          <Compass className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Stability: <strong className="text-white font-mono">{selectedCareer.stabilityIndex}/100</strong></span>
        </div>
      </div>
    </div>
  );
};
