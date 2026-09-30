import React, { useState } from 'react';
import { useCareer } from '../../context/CareerContext';

export const SkillRadarChart: React.FC = () => {
  const { radarData, selectedCareer } = useCareer();
  const [hoveredAxis, setHoveredAxis] = useState<string | null>(null);

  const size = 320;
  const center = size / 2;
  const radius = size * 0.38;
  const numAxes = radarData.length;

  const angleStep = (Math.PI * 2) / numAxes;

  // Convert value (0-100) and index into (x, y) coordinates
  const getCoordinates = (value: number, index: number) => {
    const angle = index * angleStep - Math.PI / 2;
    const distance = (value / 100) * radius;
    return {
      x: center + distance * Math.cos(angle),
      y: center + distance * Math.sin(angle)
    };
  };

  // Build polygon path string for a dataset
  const buildPath = (values: number[]) => {
    return values
      .map((val, idx) => {
        const { x, y } = getCoordinates(val, idx);
        return `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ') + ' Z';
  };

  const marketPath = buildPath(radarData.map(d => d.marketRequirement));
  const userPath = buildPath(radarData.map(d => d.userProficiency || 0));

  // Find hovered metric details
  const activeDetail = radarData.find(d => d.axis === hoveredAxis);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex items-center justify-between mb-1 text-xs">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1.5 rounded-sm bg-emerald-400 inline-block" />
            <span className="text-slate-300 font-medium">Your Profile</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1.5 rounded-sm bg-sky-400/60 inline-block" />
            <span className="text-slate-400 font-medium">Market Req</span>
          </div>
        </div>

        {activeDetail && (
          <div className="text-[11px] font-mono text-right">
            <span className="text-slate-400">{activeDetail.axis}: </span>
            <span className="text-emerald-400 font-semibold">{activeDetail.userProficiency}%</span>
            <span className="text-slate-500"> / </span>
            <span className="text-sky-300">{activeDetail.marketRequirement}%</span>
            {activeDetail.userProficiency! >= activeDetail.marketRequirement ? (
              <span className="text-emerald-400 ml-1">✓ Ready</span>
            ) : (
              <span className="text-amber-400 ml-1">
                ({activeDetail.marketRequirement - activeDetail.userProficiency!}% gap)
              </span>
            )}
          </div>
        )}
      </div>

      <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="w-full h-full select-none overflow-visible"
        >
          {/* Concentric spiderweb rings */}
          {[0.2, 0.4, 0.6, 0.8, 1.0].map((ringLevel, i) => {
            const ringPath = radarData
              .map((_, idx) => {
                const { x, y } = getCoordinates(ringLevel * 100, idx);
                return `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)},${y.toFixed(1)}`;
              })
              .join(' ') + ' Z';

            return (
              <path
                key={i}
                d={ringPath}
                fill="none"
                stroke="#152438"
                strokeWidth={i === 4 ? '1.5' : '1'}
                strokeDasharray={i === 4 ? 'none' : '2,3'}
              />
            );
          })}

          {/* Radial axis spokes */}
          {radarData.map((_, idx) => {
            const { x, y } = getCoordinates(100, idx);
            return (
              <line
                key={idx}
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke="#182a44"
                strokeWidth="1"
              />
            );
          })}

          {/* Market Requirement Polygon (Background) */}
          <path
            d={marketPath}
            fill="#38bdf8"
            fillOpacity="0.12"
            stroke="#38bdf8"
            strokeWidth="1.8"
            strokeDasharray="4,3"
          />

          {/* User Competency Polygon (Foreground) */}
          <path
            d={userPath}
            fill="#10b981"
            fillOpacity="0.28"
            stroke="#10b981"
            strokeWidth="2.2"
          />

          {/* User vertex dots */}
          {radarData.map((dim, idx) => {
            const { x, y } = getCoordinates(dim.userProficiency || 0, idx);
            const isHovered = hoveredAxis === dim.axis;
            return (
              <circle
                key={idx}
                cx={x}
                cy={y}
                r={isHovered ? 5 : 3.5}
                fill="#10b981"
                stroke="#040911"
                strokeWidth="2"
                className="transition-all"
              />
            );
          })}

          {/* Axis Labels positioned outside */}
          {radarData.map((dim, idx) => {
            const labelCoord = getCoordinates(124, idx);
            const isHovered = hoveredAxis === dim.axis;

            return (
              <g
                key={idx}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredAxis(dim.axis)}
                onMouseLeave={() => setHoveredAxis(null)}
              >
                <text
                  x={labelCoord.x}
                  y={labelCoord.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize="10"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  fontWeight={isHovered ? 'bold' : '500'}
                  fill={isHovered ? '#ffffff' : '#94a3b8'}
                  className="transition-colors"
                >
                  {dim.axis}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <p className="text-[11px] text-slate-400 text-center mt-1">
        Target benchmark: <span className="text-slate-300 font-semibold">{selectedCareer.title}</span>. Toggle skills below to watch your footprint expand.
      </p>
    </div>
  );
};
