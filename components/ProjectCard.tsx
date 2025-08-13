
import React, { useState, useEffect } from 'react';
import { ProjectData, Character } from '../types';
import { EconomyIcon, LeafIcon, HappinessIcon } from './IconComponents';

interface ProjectCardProps {
  project: ProjectData;
  character: Character;
  onDecision: (approve: boolean) => void;
  isLoading: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, character, onDecision, isLoading }) => {
  const CharacterAvatar = character.IconComponent;
  const [pendingDecision, setPendingDecision] = useState<'approve' | 'reject' | null>(null);

  const handleButtonClick = (approve: boolean) => {
    if (pendingDecision === (approve ? 'approve' : 'reject')) {
      // Segundo clic - confirmar decisión
      setPendingDecision(null);
      onDecision(approve);
    } else {
      // Primer clic - mostrar consecuencias (o cambiar de opción)
      setPendingDecision(approve ? 'approve' : 'reject');
    }
  };

  // Exponer la función de cancelar al componente padre
  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      // Verificar si el clic fue fuera del ProjectCard
      const target = event.target as Element;
      const projectCardElement = document.querySelector('[data-project-card]');
      
      if (projectCardElement && !projectCardElement.contains(target)) {
        setPendingDecision(null);
      }
    };

    // Solo agregar el listener si hay una decisión pendiente
    if (pendingDecision) {
      document.addEventListener('click', handleGlobalClick);
    }

    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [pendingDecision]);

  const getEffects = (approve: boolean) => {
    return approve ? project.effects.approve : project.effects.reject;
  };

  const renderEffectsPreview = (approve: boolean) => {
    const effects = getEffects(approve);
    
    return (
      <div className="mt-3 p-3 bg-white rounded-lg border-2 border-gray-200 shadow-md">
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-1">
            <EconomyIcon className="w-5 h-5 text-yellow-400" />
            <span className={`text-sm font-bold ${effects.economy >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {effects.economy >= 0 ? '+' : ''}{effects.economy}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <HappinessIcon className="w-5 h-5 text-blue-400" />
            <span className={`text-sm font-bold ${effects.peopleHappiness >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {effects.peopleHappiness >= 0 ? '+' : ''}{effects.peopleHappiness}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <LeafIcon className="w-5 h-5 text-green-400" />
            <span className={`text-sm font-bold ${effects.ecosystem >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {effects.ecosystem >= 0 ? '+' : ''}{effects.ecosystem}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div 
      className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full max-w-3xl z-10"
      data-project-card
      onClick={(e) => e.stopPropagation()}
    >
      {/* Dynamic Character Avatar */}
      <div className="flex-shrink-0">
        <CharacterAvatar className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full border-4 border-cyan-200 shadow-lg" />
      </div>
      {/* Dialog Box */}
      <div className="w-full bg-white/90 border-2 border-green-200 rounded-2xl shadow-2xl p-6 relative">
        <p className="text-sm font-semibold text-cyan-700 mb-2">Propuesta de {character.name}:</p>
        <h2 className="text-2xl font-bold mb-3 text-green-700">{project.title}</h2>
        <p className="text-cyan-800 mb-6 text-base leading-relaxed">{project.description}</p>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="flex-1">
            <button
              onClick={() => handleButtonClick(true)}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-cyan-400 hover:to-green-400 text-white font-semibold py-3 px-4 rounded-full shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75 transform hover:scale-105"
              aria-label={`Aprobar el proyecto: ${project.title}`}
            >
              {pendingDecision === 'approve' ? 'Aprobar (Confirmar)' : 'Aprobar'}
            </button>
            {pendingDecision === 'approve' && renderEffectsPreview(true)}
          </div>
          <div className="flex-1">
            <button
              onClick={() => handleButtonClick(false)}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-blue-400 hover:to-cyan-400 text-white font-semibold py-3 px-4 rounded-full shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-opacity-75 transform hover:scale-105"
              aria-label={`Rechazar el proyecto: ${project.title}`}
            >
              {pendingDecision === 'reject' ? 'Rechazar (Confirmar)' : 'Rechazar'}
            </button>
            {pendingDecision === 'reject' && renderEffectsPreview(false)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
