
import React from 'react';

interface GameOverScreenProps {
  rounds: number;
  onRestart: () => void;
  message: string;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({ rounds, onRestart, message }) => {
  return (
    <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-md flex flex-col items-center justify-center z-50 p-4 text-center intro-slide">
      <div className="bg-slate-800 p-8 md:p-12 rounded-xl shadow-2xl max-w-md w-full">
        <h2 className="text-4xl font-bold text-red-500 mb-4">¡Juego Terminado!</h2>
        <p className="text-slate-300 text-lg mb-2">{message}</p>
        <p className="text-slate-200 text-xl mb-6">Sobreviviste <span className="font-bold text-sky-400">{rounds}</span> rondas.</p>
        <button
          onClick={onRestart}
          className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );
};

export default GameOverScreen;
