
import React from 'react';
import { ProjectData, Character } from '../types';

interface ProjectCardProps {
  project: ProjectData;
  character: Character;
  onDecision: (approve: boolean) => void;
  isLoading: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, character, onDecision, isLoading }) => {
  const CharacterAvatar = character.IconComponent;
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full max-w-3xl z-10">
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
          <button
            onClick={() => onDecision(true)}
            disabled={isLoading}
            className="flex-1 bg-gradient-to-r from-green-400 to-cyan-400 hover:from-cyan-400 hover:to-green-400 text-white font-semibold py-3 px-4 rounded-full shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75 transform hover:scale-105"
            aria-label={`Aprobar el proyecto: ${project.title}`}
          >
            Aprobar
          </button>
          <button
            onClick={() => onDecision(false)}
            disabled={isLoading}
            className="flex-1 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-blue-400 hover:to-cyan-400 text-white font-semibold py-3 px-4 rounded-full shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-opacity-75 transform hover:scale-105"
            aria-label={`Rechazar el proyecto: ${project.title}`}
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
