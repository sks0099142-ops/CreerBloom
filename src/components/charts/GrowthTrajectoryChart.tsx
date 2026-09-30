import React, { useState } from 'react';
import { useCareer } from '../../context/CareerContext';

export const GrowthTrajectoryChart: React.FC = () => {
  const { selectedCareer } = useCareer();
  const [metricMode, setMetricMode] = useState<'momentum' | 'salary'>('momentum');
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const years = metricMode === 'momentum' 
    ? selectedCareer.growthHistory.years 
    : selectedCareer.salaryHistory.years;
  
  const values = metricMode === 'momentum'
    ? selectedCareer.growthHistory.values
    : selectedCareer.salaryHistory.values;

  const width = 580;
  const height = 220;
  const padding = { top: 25, right: 30, bottom: 35, left: 45 };

  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const minVal = Math.min(...values) * 0.85;
  const maxVal = Math.max(...values) * 1.1;

  const getX = (index: number) => padding.left + (index / (values.length - 1)) * chartW;
  const getY = (val: number) => padding.top + chartH - ((val - minVal) / (maxVal - minVal)) * chartH;

  // Generate SVG path for smooth line
  const points = values.map((val, idx) => ({ x: getX(idx), y: getY(val) }));
  
  const pathD = points.reduce((acc, point, i, arr) => {
    if (i === 0) return `M ${point.x},${point.y}`;
    const prev = arr[i - 1];
    const cp1x = prev.x + (point.x - prev.x) / 2;
    const cp1y = prev.y;
    const cp2x = prev.x + (point.x - prev.x) / 2;
    const cp2y = point.y;
    return `${acc} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${point.x},${point.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x},${padding.top + chartH} L ${points[0].x},${padding.top + chartH} Z`;

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-xs font-semibold text-slate-200">
            {metricMode === 'momentum' ? 'Market Demand Trajectory' : 'Historical Median Compensation ($k)'}
          </span>
          <span className="text-[11px] text-slate-400 block">5-Year Projected Momentum Index</span>
        </div>

        {/* Segmented interactive toggle */}
        <div className="flex items-center gap-1 p-0.5 bg-[#091424] border border-[#16253b] rounded">
          <button
            onClick={() => setMetricMode('momentum')}
            className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
              metricMode === 'momentum'
                ? 'bg-[#182a44] text-emerald-400 font-semibold shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Demand Index
          </button>
          <button
            onClick={() => setMetricMode('salary')}
            className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
              metricMode === 'salary'
                ? 'bg-[#182a44] text-sky-400 font-semibold shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Salary ($k)
          </button>
        </div>
      </div>

      <div className="relative flex-1 w-full min-h-[190px]">
        <svg 
          viewBox={`0 0 ${width} ${height}`} 
          className="w-full h-full overflow-visible select-none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={metricMode === 'momentum' ? '#10b981' : '#38bdf8'} stopOpacity="0.32" />
              <stop offset="100%" stopColor={metricMode === 'momentum' ? '#10b981' : '#38bdf8'} stopOpacity="0.00" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[0, 0.33, 0.66, 1].map((ratio, i) => {
            const y = padding.top + chartH * ratio;
            const labelVal = Math.round(maxVal - ratio * (maxVal - minVal));
            return (
              <g key={i}>
                <line
                  x1={padding.left}
                  y1={y}
                  x2={width - padding.right}
                  y2={y}
                  stroke="#14233a"
                  strokeDasharray="2,3"
                />
                <text
                  x={padding.left - 8}
                  y={y + 3}
                  textAnchor="end"
                  fill="#64748b"
                  fontSize="10"
                  fontFamily="JetBrains Mono, monospace"
                >
                  {metricMode === 'salary' ? `$${labelVal}k` : labelVal}
                </text>
              </g>
            );
          })}

          {/* Area fill */}
          <path d={areaD} fill="url(#chartGradient)" />

          {/* Stroke Line */}
          <path
            d={pathD}
            fill="none"
            stroke={metricMode === 'momentum' ? '#10b981' : '#38bdf8'}
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Data Points and interactive hover hitboxes */}
          {points.map((p, i) => {
            const isHovered = hoverIndex === i;
            return (
              <g key={i} className="cursor-pointer" onMouseEnter={() => setHoverIndex(i)} onMouseLeave={() => setHoverIndex(null)}>
                {/* Vertical hover guide */}
                {isHovered && (
                  <line
                    x1={p.x}
                    y1={padding.top}
                    x2={p.x}
                    y2={padding.top + chartH}
                    stroke="#38bdf8"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                  />
                )}

                <circle
                  cx={p.x}
                  cy={p.y}
                  r={isHovered ? 5 : 3.5}
                  fill={isHovered ? '#ffffff' : (metricMode === 'momentum' ? '#10b981' : '#38bdf8')}
                  stroke="#050b14"
                  strokeWidth="2"
                  className="transition-all"
                />

                {/* X-axis year label */}
                <text
                  x={p.x}
                  y={height - 8}
                  textAnchor="middle"
                  fill={isHovered ? '#e2e8f0' : '#64748b'}
                  fontSize="11"
                  fontFamily="JetBrains Mono, monospace"
                  fontWeight={isHovered ? 'bold' : 'normal'}
                >
                  {years[i]}
                </text>

                {/* Value tooltip callout */}
                {isHovered && (
                  <g transform={`translate(${p.x}, ${p.y - 28})`}>
                    <rect
                      x="-34"
                      y="-16"
                      width="68"
                      height="22"
                      rx="4"
                      fill="#0e1d33"
                      stroke="#1e3a61"
                      strokeWidth="1"
                    />
                    <text
                      x="0"
                      y="-2"
                      textAnchor="middle"
                      fill="#5eead4"
                      fontSize="10"
                      fontWeight="bold"
                      fontFamily="JetBrains Mono, monospace"
                    >
                      {metricMode === 'salary' ? `$${values[i]}k/yr` : `Idx: ${values[i]}`}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-2 border-t border-[#132237] mt-1">
        <span>Historical 2023 ⟶ Projection 2028</span>
        <span className="text-emerald-400 font-semibold">+{selectedCareer.hiringVelocity}% 5-Yr Velocity</span>
      </div>
    </div>
  );
};
