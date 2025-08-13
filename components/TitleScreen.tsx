
import React from 'react';
import { CityscapeIllustration } from './IconComponents';

interface TitleScreenProps {
  onStart: () => void;
}

const TitleScreen: React.FC<TitleScreenProps> = ({ onStart }) => {
  return (
    <div 
      className="title-screen-bg fixed inset-0 flex flex-col items-center justify-center p-4 text-center z-50 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/title-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>
      
      {/* Fondo decorativo low poly estilo Interland */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-1" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Islas low poly */}
        <polygon points="300,900 400,700 500,900" fill="#B2F2E5" opacity="0.7" />
        <polygon points="1600,950 1700,800 1800,950" fill="#A7F3D0" opacity="0.7" />
        <polygon points="900,1050 1050,850 1200,1050" fill="#BAE6FD" opacity="0.7" />
        {/* Nubes */}
        <ellipse cx="400" cy="200" rx="120" ry="40" fill="#fff" opacity="0.5" />
        <ellipse cx="1500" cy="150" rx="100" ry="30" fill="#fff" opacity="0.4" />
        <ellipse cx="1000" cy="300" rx="80" ry="25" fill="#fff" opacity="0.3" />
      </svg>
      
      {/* Personaje low poly central */}
      <div className="relative z-10 flex flex-col items-center">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
          {/* Cuerpo low poly */}
          <polygon points="60,110 40,80 80,80" fill="#38bdf8" />
          <polygon points="60,80 50,60 70,60" fill="#22d3ee" />
          <polygon points="60,60 55,45 65,45" fill="#0ea5e9" />
          {/* Cabeza */}
          <polygon points="60,45 52,35 68,35" fill="#7dd3fc" />
        </svg>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tighter drop-shadow-lg">
          El Dilema del Alcalde
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-sm">
          Equilibra el progreso y el bienestar para forjar el futuro de tu ciudad.
        </p>
        <button
          onClick={onStart}
          className="btn text-xl py-4 px-10 rounded-full shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50"
        >
          ¡EMPEZAR!
        </button>
      </div>
      {/* Más decoraciones low poly si quieres */}
    </div>
  );
};

export default TitleScreen;
