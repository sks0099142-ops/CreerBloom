import React, { useState } from 'react';
import { useCareer } from '../context/CareerContext';
import { 
  Bell, 
  BellRing, 
  Zap, 
  X, 
  ArrowRight, 
  TrendingUp, 
  TrendingDown, 
  CheckCheck, 
  Trash2, 
  Play, 
  Pause,
  Clock,
  Radio
} from 'lucide-react';

export const TickerBar: React.FC = () => {
  const { 
    careers, 
    selectedCareer, 
    setSelectedCareerId,
    watchedCareerIds,
    toggleWatchCareer,
    isCareerWatched,
    alerts,
    activeNotification,
    dismissNotification,
    markAllAlertsRead,
    clearAllAlerts,
    triggerVelocityShift,
    isLiveSimulationActive,
    toggleLiveSimulation,
    setActiveTab
  } = useCareer();

  const [showAlertsPanel, setShowAlertsPanel] = useState<boolean>(false);

  const unreadAlertsCount = alerts.filter(a => !a.read).length;

  const getWeatherDot = (status: string) => {
    switch (status) {
      case 'sunny':
        return <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" title="Sunny (High Liquidity)" />;
      case 'overcast':
        return <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" title="Overcast (Competitive)" />;
      case 'stormy':
        return <span className="w-1.5 h-1.5 rounded-full bg-rose-400 inline-block" title="Stormy (Contracting)" />;
      case 'emerging':
        return <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" title="Emerging Front" />;
      default:
        return <span className="w-1.5 h-1.5 rounded-full bg-slate-400 inline-block" />;
    }
  };

  return (
    <div className="relative z-30 bg-[#03070e] border-b border-[#14233a]">
      {/* 1. Real-Time Bloom Alert Banner (Shows when a watched career velocity shifts) */}
      {activeNotification && (
        <div className="bg-gradient-to-r from-amber-500/15 via-[#0e1f36] to-emerald-500/15 border-b border-amber-500/30 px-4 py-2 flex items-center justify-between gap-3 text-xs animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono font-bold text-[10px] shrink-0 uppercase tracking-wider animate-pulse">
              <Zap className="w-3 h-3 text-amber-400 fill-amber-400" />
              Career Bloom Alert
            </span>

            <span className="text-[11px] font-mono text-slate-400 shrink-0">
              [{activeNotification.timestamp}]
            </span>

            <div className="flex items-center gap-2 truncate">
              <span className="font-mono font-bold text-white shrink-0">
                {activeNotification.ticker}
              </span>

              <span className="text-slate-300 hidden sm:inline">
                {activeNotification.title}:
              </span>

              <span className={`inline-flex items-center gap-1 font-mono font-bold px-1.5 py-0.5 rounded text-[11px] shrink-0 ${
                activeNotification.direction === 'up' 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                  : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
              }`}>
                {activeNotification.direction === 'up' ? (
                  <TrendingUp className="w-3 h-3 text-emerald-400" />
                ) : (
                  <TrendingDown className="w-3 h-3 text-rose-400" />
                )}
                {activeNotification.delta > 0 ? `+${activeNotification.delta}%` : `${activeNotification.delta}%`} shift
                <span className="text-slate-400 font-normal">
                  (now {activeNotification.newVelocity}%)
                </span>
              </span>

              <span className="text-slate-300 text-xs truncate hidden md:inline">
                {activeNotification.message}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                setSelectedCareerId(activeNotification.careerId);
                setActiveTab('terminal');
              }}
              className="px-2.5 py-1 bg-[#162a47] hover:bg-[#1f3a61] text-emerald-300 border border-emerald-500/40 rounded text-[11px] font-mono font-semibold flex items-center gap-1 transition-colors"
            >
              <span>Inspect Role</span>
              <ArrowRight className="w-3 h-3" />
            </button>

            <button
              onClick={() => dismissNotification(activeNotification.id)}
              className="p-1 text-slate-400 hover:text-white rounded transition-colors"
              title="Dismiss alert"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* 2. Main Live Ticker Bar with Watch Toggles */}
      <div className="py-1.5 px-4 flex items-center justify-between gap-3 overflow-x-auto no-scrollbar">
        {/* Left Side: Market Tickers */}
        <div className="flex items-center gap-2 min-w-max">
          <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider pl-1 pr-2 border-r border-[#16253b] flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${isLiveSimulationActive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-500'}`} />
            <span>Market Tickers</span>
          </div>

          {careers.map((career) => {
            const isSelected = career.id === selectedCareer.id;
            const isWatched = isCareerWatched(career.id);
            const isPositive = career.hiringVelocity >= 0;
            const hasRecentDelta = career.lastVelocityDelta !== undefined;

            return (
              <div
                key={career.id}
                className={`group flex items-center rounded text-xs transition-all font-mono tabular-nums border ${
                  isSelected
                    ? 'bg-[#10233b] text-white border-emerald-500/50 shadow-xs'
                    : isWatched
                    ? 'bg-[#0b182b] hover:bg-[#10223b] text-slate-200 border-amber-500/40'
                    : 'bg-[#081220] hover:bg-[#0c1a2e] text-slate-300 border-[#16253b]'
                }`}
              >
                {/* Watch Toggle Button (Integrated into each ticker) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWatchCareer(career.id);
                  }}
                  className={`pl-2 pr-1 py-1 transition-colors ${
                    isWatched 
                      ? 'text-amber-400 hover:text-amber-300' 
                      : 'text-slate-600 hover:text-slate-300'
                  }`}
                  title={isWatched ? `Watching ${career.ticker} alerts (Click to unwatch)` : `Set Bloom Alert for ${career.ticker}`}
                >
                  {isWatched ? (
                    <BellRing className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ) : (
                    <Bell className="w-3.5 h-3.5" />
                  )}
                </button>

                {/* Role click area */}
                <button
                  onClick={() => setSelectedCareerId(career.id)}
                  className="flex items-center gap-2 pr-2.5 py-1 text-left"
                >
                  <div className="flex items-center gap-1">
                    {getWeatherDot(career.weather.status)}
                    <span className={`font-semibold ${isSelected ? 'text-emerald-300 font-bold' : 'text-slate-100'}`}>
                      {career.ticker}
                    </span>
                  </div>

                  <span className="text-slate-400 text-[11px]">${Math.round(career.medianSalary / 1000)}k</span>

                  <span className={`text-[11px] font-semibold flex items-center ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {isPositive ? '+' : ''}{career.hiringVelocity}%
                    {hasRecentDelta && (
                      <span className={`ml-1 text-[9px] px-1 rounded ${career.lastVelocityDelta! >= 0 ? 'bg-emerald-500/30 text-emerald-300' : 'bg-rose-500/30 text-rose-300'}`}>
                        {career.lastVelocityDelta! >= 0 ? `▲` : `▼`}
                      </span>
                    )}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Right Side: Quick Bloom Alert Controls & History Drawer Trigger */}
        <div className="flex items-center gap-2 shrink-0 border-l border-[#16253b] pl-3 ml-2">
          {/* Quick Shift Simulator Trigger */}
          <button
            onClick={() => triggerVelocityShift(selectedCareer.id)}
            className="flex items-center gap-1 px-2 py-1 rounded bg-[#091524] hover:bg-[#12233b] border border-[#1b314f] text-[11px] font-mono text-amber-300 hover:text-amber-200 transition-colors"
            title={`Simulate a velocity shift on ${selectedCareer.ticker} to test real-time Bloom Alerts`}
          >
            <Zap className="w-3 h-3 text-amber-400" />
            <span className="hidden sm:inline">Simulate Shift</span>
          </button>

          {/* Live Feed Toggle */}
          <button
            onClick={toggleLiveSimulation}
            className={`flex items-center gap-1 px-2 py-1 rounded border text-[11px] font-mono transition-colors ${
              isLiveSimulationActive
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                : 'bg-[#091524] border-[#1b314f] text-slate-400'
            }`}
            title={isLiveSimulationActive ? 'Live Market Telemetry Active (click to pause)' : 'Telemetry Paused (click to resume)'}
          >
            {isLiveSimulationActive ? (
              <>
                <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                <span className="hidden md:inline">Feed Live</span>
              </>
            ) : (
              <>
                <Pause className="w-3 h-3 text-slate-400" />
                <span className="hidden md:inline">Paused</span>
              </>
            )}
          </button>

          {/* Bloom Alerts Center Trigger */}
          <button
            onClick={() => {
              setShowAlertsPanel(!showAlertsPanel);
              if (!showAlertsPanel && unreadAlertsCount > 0) {
                markAllAlertsRead();
              }
            }}
            className={`relative flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-medium transition-colors border ${
              showAlertsPanel
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                : unreadAlertsCount > 0
                ? 'bg-[#142338] text-amber-300 border-amber-500/40'
                : 'bg-[#091524] text-slate-300 border-[#1b314f] hover:text-white'
            }`}
            title="Open Career Bloom Alert Log"
          >
            <Bell className={`w-3.5 h-3.5 ${unreadAlertsCount > 0 ? 'text-amber-400' : 'text-slate-400'}`} />
            <span>Alerts</span>
            {unreadAlertsCount > 0 ? (
              <span className="px-1.5 py-0.2 rounded-full bg-amber-500 text-[#040911] font-bold text-[10px] animate-pulse">
                {unreadAlertsCount}
              </span>
            ) : alerts.length > 0 ? (
              <span className="text-[10px] text-slate-400">({alerts.length})</span>
            ) : null}
          </button>
        </div>
      </div>

      {/* 3. Alerts Center Popover Panel */}
      {showAlertsPanel && (
        <div className="absolute right-4 top-full mt-1 w-96 max-w-[95vw] bg-[#091525] border border-[#1d3554] rounded-lg shadow-2xl p-4 text-xs font-sans z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between pb-2.5 border-b border-[#16273d]">
            <div className="flex items-center gap-2">
              <BellRing className="w-4 h-4 text-amber-400" />
              <h4 className="font-bold text-white text-xs">Career Bloom Alert Feed</h4>
              <span className="text-[10px] font-mono text-slate-400">({watchedCareerIds.length} watched)</span>
            </div>

            <div className="flex items-center gap-2">
              {alerts.length > 0 && (
                <button
                  onClick={clearAllAlerts}
                  className="text-[11px] text-slate-400 hover:text-rose-400 font-mono transition-colors flex items-center gap-1"
                  title="Clear alert feed"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear</span>
                </button>
              )}

              <button
                onClick={() => setShowAlertsPanel(false)}
                className="text-slate-400 hover:text-white transition-colors p-0.5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Watched Roles summary pills */}
          <div className="py-2 flex items-center gap-1.5 flex-wrap border-b border-[#14233a] mb-2">
            <span className="text-[10px] font-mono text-slate-400">Watched:</span>
            {watchedCareerIds.length === 0 ? (
              <span className="text-[11px] text-slate-500 italic">No roles watched yet. Click the 🔔 icon next to any ticker to watch.</span>
            ) : (
              watchedCareerIds.map(id => {
                const c = careers.find(career => career.id === id);
                if (!c) return null;
                return (
                  <button
                    key={id}
                    onClick={() => {
                      setSelectedCareerId(id);
                      setShowAlertsPanel(false);
                      setActiveTab('terminal');
                    }}
                    className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#10233b] hover:bg-[#163050] text-[10px] font-mono text-amber-300 border border-amber-500/30"
                  >
                    <span>{c.ticker}</span>
                    <span className="text-slate-400">({c.hiringVelocity}%)</span>
                  </button>
                );
              })
            )}
          </div>

          {/* Alerts Feed List */}
          <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
            {alerts.length === 0 ? (
              <div className="text-center py-6 text-slate-400 space-y-2">
                <Clock className="w-6 h-6 mx-auto text-slate-500" />
                <p className="text-xs">No velocity shifts detected for watched careers yet.</p>
                <p className="text-[11px] text-slate-500 font-mono">
                  Toggle the <span className="text-amber-400 font-bold">🔔</span> next to tickers or click <span className="text-amber-300 font-bold">"Simulate Shift"</span> above to test alerts.
                </p>
              </div>
            ) : (
              alerts.map(alert => (
                <div
                  key={alert.id}
                  onClick={() => {
                    setSelectedCareerId(alert.careerId);
                    setShowAlertsPanel(false);
                    setActiveTab('terminal');
                  }}
                  className="p-2.5 rounded border border-[#172b44] hover:border-emerald-500/40 bg-[#070e1a] hover:bg-[#0c182a] cursor-pointer transition-all space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-white text-xs">{alert.ticker}</span>
                      <span className="text-slate-400 text-[11px] truncate max-w-[130px]">{alert.title}</span>
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-[11px]">
                      <span className={`px-1.5 py-0.2 rounded font-bold flex items-center gap-0.5 ${
                        alert.direction === 'up' 
                          ? 'bg-emerald-500/20 text-emerald-300' 
                          : 'bg-rose-500/20 text-rose-300'
                      }`}>
                        {alert.direction === 'up' ? '+' : ''}{alert.delta}%
                      </span>
                      <span className="text-slate-500 text-[10px]">{alert.timestamp}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-300 leading-snug">
                    {alert.message}
                  </p>

                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-[#122238]">
                    <span>Prev: {alert.previousVelocity}% ⟶ New: {alert.newVelocity}%</span>
                    <span className="text-emerald-400 font-medium">Inspect Role ⟶</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};
