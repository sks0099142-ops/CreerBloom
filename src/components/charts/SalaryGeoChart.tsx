import React from 'react';
import { useCareer } from '../../context/CareerContext';

export const SalaryGeoChart: React.FC = () => {
  const { selectedCareer } = useCareer();
  const geoSalaries = selectedCareer.geoSalaries;

  const maxVal = Math.max(...geoSalaries.map(g => g.median));

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
        <span>Location Hub</span>
        <span>Median Comp (Base + Equity est.)</span>
      </div>

      {geoSalaries.map((geo, idx) => {
        const percentage = Math.round((geo.median / maxVal) * 100);
        const isHighest = idx === 0;

        return (
          <div key={geo.location} className="space-y-1">
            <div className="flex items-center justify-between text-xs font-medium">
              <div className="flex items-center gap-1.5 truncate">
                <span className="text-slate-200 truncate">{geo.location}</span>
                {geo.remoteAvailable && (
                  <span className="text-[10px] text-emerald-400 font-mono">· Remote</span>
                )}
              </div>
              <span className={`font-mono tabular-nums ${isHighest ? 'text-emerald-400 font-bold' : 'text-slate-300'}`}>
                ${geo.median.toLocaleString()}
              </span>
            </div>

            <div className="w-full bg-[#111f33] h-2 rounded overflow-hidden">
              <div
                className={`h-full rounded transition-all duration-500 ${
                  isHighest ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : 'bg-sky-500/70'
                }`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
