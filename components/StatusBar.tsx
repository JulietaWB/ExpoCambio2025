import React, { useState } from 'react';
import { EconomyIcon, LeafIcon, HappinessIcon, RoundsIcon } from './IconComponents';
import { MAX_STAT_VALUE } from '../constants';
import { StatType } from '../types';

interface TooltipProps {
  description: string;
}

const StatTooltip: React.FC<TooltipProps> = ({ description }) => (
  <div 
    className="absolute top-full mt-3 w-full min-w-[250px] max-w-sm bg-white/90 text-green-900 p-4 rounded-lg shadow-xl z-30 border border-cyan-200"
    onClick={(e) => e.stopPropagation()} 
  >
    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-cyan-200 -mt-2"></div>
    <p className="text-sm leading-relaxed">{description}</p>
  </div>
);

interface StatBarProps {
  label: string;
  value: number;
  icon: React.ReactNode;
  colorClass: string;
  onClick: () => void;
  showTooltip: boolean;
  tooltipDescription: string;
}

const StatBar: React.FC<StatBarProps> = ({ label, value, icon, colorClass, onClick, showTooltip, tooltipDescription }) => {
  const percentage = Math.max(0, Math.min(100, (value / MAX_STAT_VALUE) * 100));

  return (
    <div className="relative w-full">
      <div 
        onClick={onClick}
        className="w-full p-3 bg-slate-800 rounded-lg shadow hover:bg-slate-700 transition-colors duration-200 cursor-pointer"
        aria-haspopup="true"
        aria-expanded={showTooltip}
      >
        <div className="flex items-center justify-between mb-1 text-slate-300">
          <div className="flex items-center space-x-2">
            {icon}
            <span className="font-medium">{label}</span>
          </div>
          <span className="font-bold text-lg">{value}</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2.5">
          <div 
            className={`h-2.5 rounded-full stat-bar-fill ${colorClass}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      {showTooltip && <StatTooltip description={tooltipDescription} />}
    </div>
  );
};

interface StatusBarProps {
  economy: number;
  ecosystem: number;
  peopleHappiness: number;
  rounds: number;
}

const STAT_DESCRIPTIONS = {
  [StatType.Economy]: 'Mide la salud financiera y la productividad de tu ciudad. Una economía fuerte genera ingresos, pero su crecimiento descontrolado puede dañar el ecosistema y la felicidad de los ciudadanos si no se gestiona bien.',
  [StatType.Ecosystem]: 'Representa la vitalidad del medio ambiente y la sostenibilidad de la ciudad. Un ecosistema saludable es crucial para la calidad de vida y el bienestar a largo plazo, aunque las medidas de protección pueden tener un costo económico.',
  [StatType.PeopleHappiness]: 'Refleja la satisfacción, el bienestar y el estado de ánimo general de tus ciudadanos. La gente feliz es más productiva y cohesiva, pero sus demandas de servicios y ocio pueden suponer una carga para la economía y el ecosistema.'
};

const StatusBar: React.FC<StatusBarProps> = ({ economy, ecosystem, peopleHappiness, rounds }) => {
  const [activeTooltip, setActiveTooltip] = useState<StatType | null>(null);

  const handleStatClick = (stat: StatType) => {
      setActiveTooltip(prev => (prev === stat ? null : stat));
  };
  
  const getStatColor = (value: number): string => {
    if (value <= 20) return 'bg-red-500';
    if (value <= 40) return 'bg-yellow-500';
    if (value <= 70) return 'bg-sky-500';
    return 'bg-green-500';
  };

  return (
    <div className="p-4 bg-white/80 border-2 border-cyan-100 rounded-2xl shadow-lg sticky top-0 z-20">
      {activeTooltip && <div className="fixed inset-0 z-10" onClick={() => setActiveTooltip(null)}></div>}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-20">
        <StatBar 
          label="Economía" 
          value={economy} 
          icon={<EconomyIcon className="text-yellow-400" />} 
          colorClass={getStatColor(economy)}
          onClick={() => handleStatClick(StatType.Economy)}
          showTooltip={activeTooltip === StatType.Economy}
          tooltipDescription={STAT_DESCRIPTIONS.economy}
        />
        <StatBar 
          label="Ecosistema" 
          value={ecosystem} 
          icon={<LeafIcon className="text-green-400" />} 
          colorClass={getStatColor(ecosystem)}
          onClick={() => handleStatClick(StatType.Ecosystem)}
          showTooltip={activeTooltip === StatType.Ecosystem}
          tooltipDescription={STAT_DESCRIPTIONS.ecosystem}
        />
        <StatBar 
          label="Felicidad" 
          value={peopleHappiness} 
          icon={<HappinessIcon className="text-blue-400" />} 
          colorClass={getStatColor(peopleHappiness)}
          onClick={() => handleStatClick(StatType.PeopleHappiness)}
          showTooltip={activeTooltip === StatType.PeopleHappiness}
          tooltipDescription={STAT_DESCRIPTIONS.peopleHappiness}
        />
        <div className="w-full p-3 bg-cyan-50 rounded-lg shadow flex flex-col items-center justify-center text-cyan-700 border border-cyan-200">
            <div className="flex items-center space-x-2">
                <RoundsIcon className="text-cyan-400"/>
                <span className="font-medium">Ronda</span>
            </div>
            <span className="font-bold text-3xl">{rounds}</span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;