
import React, { useState, useEffect, useCallback } from 'react';
import { GameState, ProjectEffect, Character } from './types';
import { INITIAL_STAT_VALUE, MAX_STAT_VALUE, MIN_STAT_VALUE_FOR_GAME_OVER, CHARACTERS, MAX_ROUNDS } from './constants';
import StatusBar from './components/StatusBar';
import ProjectCard from './components/ProjectCard';
import LoadingIndicator from './components/LoadingIndicator';
import DecisionFeedback from './components/DecisionFeedback';
import TitleScreen from './components/TitleScreen';
import IntroSlides from './components/IntroSlides';
import EndSummaryScreen from './components/EndSummaryScreen';
import { ResetIcon } from './components/IconComponents';
import projectData from './data.json';

type GamePhase = 'title' | 'intro' | 'playing' | 'gameOver' | 'termComplete';

// Función para barajar un array (algoritmo de Fisher-Yates)
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const App: React.FC = () => {
  const initialGameState: GameState = {
    economy: INITIAL_STAT_VALUE,
    ecosystem: INITIAL_STAT_VALUE,
    peopleHappiness: INITIAL_STAT_VALUE,
    rounds: 0,
    gameOver: false,
    gameMessage: null,
    isLoadingProject: true, // Start as true for the first load
    currentProject: null,
    currentCharacter: null,
    decisionOutcome: null,
  };

  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [characterQueue, setCharacterQueue] = useState<Character[]>([]);
  const [gamePhase, setGamePhase] = useState<GamePhase>('title');
  const [gameOverReason, setGameOverReason] = useState<string>("");
  const [availableProjects, setAvailableProjects] = useState([]);
  const [prevStats, setPrevStats] = useState({
    economy: INITIAL_STAT_VALUE,
    ecosystem: INITIAL_STAT_VALUE,
    peopleHappiness: INITIAL_STAT_VALUE,
  });
  const [showStatChange, setShowStatChange] = useState(false);

  const startGame = () => {
    setGamePhase('intro');
    setShowStatChange(false); // Oculta animación al iniciar
  };

  useEffect(() => {
    // Cargar proyectos de data.json al iniciar
    setAvailableProjects(shuffleArray(projectData));
  }, []);

  const loadNextProject = useCallback(() => {
    setGameState(prev => ({...prev, isLoadingProject: true, decisionOutcome: null, gameMessage: null }));
    if (availableProjects.length === 0) {
      setGameOverReason('No hay más proyectos disponibles.');
      setGameState(prev => ({ ...prev, gameOver: true, isLoadingProject: false }));
      return;
    }
    const [nextProject, ...rest] = availableProjects;
    setAvailableProjects(rest);
    const nextCharacter = CHARACTERS.find(c => c.name === nextProject.characterName) || CHARACTERS[0];
    setGameState(prev => ({
      ...prev,
      currentProject: nextProject,
      currentCharacter: nextCharacter,
      isLoadingProject: false,
    }));
  }, [availableProjects]);
  
  const handleIntroComplete = useCallback(() => {
    setGamePhase('playing');
    setCharacterQueue(shuffleArray(CHARACTERS));
  }, []);

  useEffect(() => {
    if (gamePhase === 'playing' && !gameState.currentProject && characterQueue.length > 0) {
      loadNextProject();
    }
  }, [gamePhase, gameState.currentProject, characterQueue, loadNextProject]);

  const applyEffects = (effects: ProjectEffect) => {
    setGameState(prev => {
      // Guarda los valores previos antes de aplicar el cambio
      setPrevStats({
        economy: prev.economy,
        ecosystem: prev.ecosystem,
        peopleHappiness: prev.peopleHappiness,
      });
      setShowStatChange(true); // Solo muestra animación después de la primera decisión
      const newEconomy = Math.min(MAX_STAT_VALUE, Math.max(0, prev.economy + effects.economy));
      const newEcosystem = Math.min(MAX_STAT_VALUE, Math.max(0, prev.ecosystem + effects.ecosystem));
      const newPeopleHappiness = Math.min(MAX_STAT_VALUE, Math.max(0, prev.peopleHappiness + effects.peopleHappiness));
      return {
        ...prev,
        economy: newEconomy,
        ecosystem: newEcosystem,
        peopleHappiness: newPeopleHappiness,
      };
    });
  };

  useEffect(() => {
    if (gameState.gameOver) {
        setGamePhase('termComplete');
    }
  }, [gameState.gameOver]);

  const handleDecision = (approve: boolean) => {
    if (!gameState.currentProject || gameState.isLoadingProject) return;

    setGameState(prev => ({...prev, isLoadingProject: true }));

    const decisionEffects = approve ? gameState.currentProject.effects.approve : gameState.currentProject.effects.reject;
    const decisionFlavorText = approve ? gameState.currentProject.flavorText.approve : gameState.currentProject.flavorText.reject;
    
    applyEffects(decisionEffects);
    
    setGameState(prev => ({
      ...prev,
      rounds: prev.rounds + 1,
      decisionOutcome: decisionFlavorText,
    }));
  };

  useEffect(() => {
    if (gameState.decisionOutcome === null) return;

    // Check for game over (stat at 0) first
    let reason = "";
    if (gameState.economy <= MIN_STAT_VALUE_FOR_GAME_OVER) reason = "¡La economía de la ciudad ha colapsado!";
    else if (gameState.ecosystem <= MIN_STAT_VALUE_FOR_GAME_OVER) reason = "¡El medio ambiente ha sido dañado irreversiblemente!";
    else if (gameState.peopleHappiness <= MIN_STAT_VALUE_FOR_GAME_OVER) reason = "¡Los ciudadanos están en rebelión abierta!";
    
    if (reason) {
      setGameOverReason(reason);
      setGameState(prev => ({ ...prev, gameOver: true }));
      // Let the other useEffect handle the phase change to gameOver
      return;
    }

    // Check for end of term (6 rounds completed)
    if (gameState.rounds >= MAX_ROUNDS) {
      setTimeout(() => {
        setGamePhase('termComplete');
      }, 2500);
      return;
    }

    // If game continues, load next project
    setTimeout(() => {
      loadNextProject();
    }, 2500);

  }, [gameState.decisionOutcome, gameState.economy, gameState.ecosystem, gameState.peopleHappiness, gameState.rounds, loadNextProject]);

  const restartGame = () => {
    setGameOverReason("");
    setGameState({ ...initialGameState, isLoadingProject: true });
    setCharacterQueue([]);
    setGamePhase('title');
    setShowStatChange(false); // Resetear estado de animación al reiniciar
  };

  if (gamePhase === 'title') {
    return <TitleScreen onStart={startGame} />;
  }

  if (gamePhase === 'intro') {
    return <IntroSlides onComplete={handleIntroComplete} />;
  }
  
  if (gamePhase === 'termComplete') {
    return <EndSummaryScreen 
      onRestart={restartGame} 
      {...gameState} 
      isGameOver={gameState.gameOver}
      gameOverReason={gameOverReason}
    />;
  }

  return (
    <div 
      className="interland-bg min-h-screen flex flex-col items-center p-0 md:p-0 relative overflow-hidden"
    >
      {/* Decoración SVG estilo low poly */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="1600" cy="200" rx="300" ry="80" fill="#B3E5FC" fillOpacity="0.5"/>
        <ellipse cx="400" cy="150" rx="250" ry="60" fill="#B2F2E5" fillOpacity="0.4"/>
        <ellipse cx="960" cy="900" rx="500" ry="120" fill="#E0F7FA" fillOpacity="0.6"/>
        {/* Puedes agregar más formas low poly aquí */}
      </svg>
      <button
        onClick={restartGame}
        className="absolute top-6 right-6 z-30 p-2 bg-white/80 backdrop-blur-sm hover:bg-green-200 rounded-full text-green-700 hover:text-green-900 transition-all duration-200 shadow-lg border border-green-200"
        aria-label="Reiniciar juego"
        title="Reiniciar juego"
      >
        <ResetIcon className="w-6 h-6" />
      </button>
      <StatusBar
        economy={gameState.economy}
        ecosystem={gameState.ecosystem}
        peopleHappiness={gameState.peopleHappiness}
        rounds={gameState.rounds}
        prevEconomy={showStatChange ? prevStats.economy : undefined}
        prevEcosystem={showStatChange ? prevStats.ecosystem : undefined}
        prevPeopleHappiness={showStatChange ? prevStats.peopleHappiness : undefined}
      />
      <main className="container mx-auto flex flex-col items-center justify-center flex-grow w-full max-w-4xl px-4 z-10">
        {gameState.decisionOutcome && !gameState.gameOver && (
          <DecisionFeedback message={gameState.decisionOutcome} />
        )}
        {gameState.isLoadingProject && (!gameState.decisionOutcome || gameState.gameOver) && <LoadingIndicator />}
                 {!gameState.isLoadingProject && gameState.currentProject && gameState.currentCharacter && !gameState.decisionOutcome && (
           <div 
               className="relative w-full h-auto min-h-[350px] md:min-h-[300px] flex items-center justify-center p-4 rounded-2xl overflow-hidden bg-white/80 shadow-xl border border-green-100"
           >
              <ProjectCard 
                  project={gameState.currentProject}
                  character={gameState.currentCharacter}
                  onDecision={handleDecision}
                  isLoading={gameState.isLoadingProject || !!gameState.decisionOutcome}
              />
          </div>
        )}
         {!gameState.isLoadingProject && gameState.currentProject && gameState.decisionOutcome && !gameState.gameOver && (
           <LoadingIndicator />
         )}
      </main>
      <footer className="text-center py-4 text-green-800 text-sm z-10">
        <p>El Dilema del Alcalde &copy; {new Date().getFullYear()}. ¡Gobierna con sabiduría!</p>
      </footer>
    </div>
  );
};

export default App;
