import React, { useState } from 'react';
import { EconomyIcon, LeafIcon, HappinessIcon, BalanceIcon } from './IconComponents';
import { MAX_STAT_VALUE } from '../constants';

interface EndSummaryScreenProps {
  economy: number;
  ecosystem: number;
  peopleHappiness: number;
  onRestart: () => void;
  isGameOver?: boolean;
  gameOverReason?: string;
}

interface Slide {
  type: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  statValue?: number;
  fixedText?: string;
}

const getConclusionText = (stat: 'economy' | 'ecosystem' | 'peopleHappiness', value: number): string => {
  if (value > 85) {
    switch(stat) {
      case 'economy': return "La prosperidad abunda, pero no olvides que el crecimiento sin control puede tener un costo oculto en otras áreas.";
      case 'ecosystem': return "La sostenibilidad es tu legado, un modelo a seguir para el mundo.";
      case 'peopleHappiness': return "¡La gente te adora! Has creado una ciudad llena de alegría y bienestar.";
    }
  }
  if (value > 60) {
     switch(stat) {
      case 'economy': return "Has fomentado el crecimiento sin sacrificar por completo otras áreas. ¡Un trabajo bien hecho!";
      case 'ecosystem': return "La ciudad es más verde y limpia gracias a tus políticas.";
      case 'peopleHappiness': return "Los ciudadanos están contento, has sabido escuchar sus necesidades y mejorar su calidad de vida de forma notable.";
    }
  }
  if (value > 35) {
     switch(stat) {
      case 'economy': return "No hubo un crecimiento espectacular, pero evitaste la recesión. Es una base estable para el futuro.";
      case 'ecosystem': return "No ha habido grandes desastres, pero tampoco mejoras significativas. Queda trabajo por hacer.";
      case 'peopleHappiness': return "La moral de la gente es estable, aunque sin grandes entusiasmos; has cubierto las necesidades básicas.";
    }
  }
  return "El estado de esta área es crítico. Tu sucesor tendrá un gran desafío para recuperarla.";
};

const getStatColor = (value: number): string => {
  if (value <= 20) return 'text-red-500';
  if (value <= 40) return 'text-yellow-500';
  if (value <= 70) return 'text-sky-500';
  return 'text-green-500';
};
const getStatBgColor = (value: number): string => {
  if (value <= 20) return 'bg-red-500';
  if (value <= 40) return 'bg-yellow-500';
  if (value <= 70) return 'bg-sky-500';
  return 'bg-green-500';
};

const FinalStat: React.FC<{ icon: React.ReactNode, label: string, value: number, colorClass: string, bgColorClass: string }> = ({ icon, label, value, colorClass, bgColorClass }) => {
    const percentage = Math.max(0, Math.min(100, (value / MAX_STAT_VALUE) * 100));
    return (
        <div className="flex flex-col items-center p-6 bg-slate-900/50 rounded-lg flex-1">
            <div className="flex items-center gap-3 text-2xl font-bold">
                {icon}
                <span>{label}</span>
            </div>
            <p className={`text-6xl font-bold my-4 ${colorClass}`}>{value}</p>
            <div className="w-full bg-slate-700 rounded-full h-4">
              <div 
                className={`h-4 rounded-full stat-bar-fill ${bgColorClass}`}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
        </div>
    );
};

const EndSummaryScreen: React.FC<EndSummaryScreenProps> = ({ economy, ecosystem, peopleHappiness, onRestart, isGameOver = false, gameOverReason = "" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      type: 'summary',
      icon: <BalanceIcon className="w-20 h-20 text-sky-400" />,
      title: isGameOver ? 'Fin del Mandato - Game Over' : 'Fin del Mandato',
      description: isGameOver 
        ? `Tu mandato ha terminado prematuramente. ${gameOverReason} Aquí está el resumen de tu gestión y el legado que dejas en la ciudad.`
        : 'Has completado 6 rondas como alcalde. Aquí está el resumen de tu gestión y el legado que dejas en la ciudad.'
    },
    {
      type: 'economy-analysis',
      icon: <EconomyIcon className="w-20 h-20 text-yellow-400" />,
      title: 'Análisis Económico',
      description: getConclusionText('economy', economy),
      statValue: economy,
      fixedText: "La economía de una ciudad no es solo dinero: incluye empleo, inversión, comercio y servicios públicos. Gobernar implica decidir en qué invertir y a quién beneficiar"
    },
    {
      type: 'ecosystem-analysis',
      icon: <LeafIcon className="w-20 h-20 text-green-400" />,
      title: 'Análisis del Ecosistema',
      description: getConclusionText('ecosystem', ecosystem),
      statValue: ecosystem,
      fixedText: "El ecosistema urbano incluye aire, agua, áreas verdes y biodiversidad. Ignorar al ambiente genera contaminación, inundaciones, olas de frío y de calor, y enfermedades. Proteger la naturaleza es proteger también la vida humana, pero exige pensar en el largo plazo"
    },
    {
      type: 'happiness-analysis',
      icon: <HappinessIcon className="w-20 h-20 text-pink-400" />,
      title: 'Análisis de Felicidad',
      description: getConclusionText('peopleHappiness', peopleHappiness),
      statValue: peopleHappiness,
      fixedText: "El bienestar de la gente no es solo su riqueza: la vivienda, la salud, la educación, el transporte y la participación ciudadana son esenciales. En la vida real, lo que hace feliz a un sector puede malestar a otro: los gobiernos deben aprender a escuchar y negociar"
    },
    {
        type: 'final-stats',
        title: 'Tu Legado en Números',
        description: 'Así dejas la ciudad. Cada número cuenta una parte de la historia de tu mandato y el impacto de tus decisiones en la vida de los ciudadanos.',
    },
    {
        type: 'final-lesson',
        title: 'La Lección de la Sostenibilidad Urbana',
        description: "El Dilema del Alcalde es un reflejo de los desafíos reales. Una ciudad verdaderamente próspera no es la más rica ni la más verde, sino la que encuentra un equilibrio armonioso entre el crecimiento económico, el cuidado del medio ambiente y la felicidad de su gente. La sostenibilidad no es un objetivo, es un acto de balance constante.",
    },
    {
        type: 'call-to-action',
        title: '¿Cómo podemos mejorar nuestra ciudad?',
        description: 'Aquí tienes algunas formas de participar activamente en el futuro de tu comunidad:'
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onRestart();
    }
  };

  const slide = slides[currentSlide];
  const isLastSlide = currentSlide === slides.length - 1;
  const isFinalSection = slide.type === 'final-stats' || slide.type === 'final-lesson' || slide.type === 'call-to-action';
  const isAnalysisSlide = slide.type === 'economy-analysis' || slide.type === 'ecosystem-analysis' || slide.type === 'happiness-analysis';

  const getMaxWidth = () => {
    if (isFinalSection) return 'max-w-4xl';
    if (isAnalysisSlide) return 'max-w-2xl';
    return 'max-w-lg';
  };

  return (
    <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-md flex flex-col items-center justify-center z-50 p-4 text-center">
        <div key={currentSlide} className={`bg-slate-800 p-8 md:p-12 rounded-xl shadow-2xl intro-slide transition-all duration-500 w-full mt-8 ${getMaxWidth()}`}>
            
            <h2 className="text-3xl font-bold text-sky-400 mb-4">
              {slide.type === 'call-to-action' ? (
                <>
                  ¿Cómo podemos mejorar <span className="italic font-bold">nuestra</span> ciudad?
                </>
              ) : (
                slide.title
              )}
            </h2>

            {slide.type === 'summary' && (
                <>
                    <div className="flex justify-center mb-6 min-h-[100px] items-center">
                      {slide.icon}
                    </div>
                    <p className="text-slate-300 text-lg mb-8 min-h-[120px]">{slide.description}</p>
                </>
            )}

            {(slide.type === 'economy-analysis' || slide.type === 'ecosystem-analysis' || slide.type === 'happiness-analysis') && (
                <>
                    <div className="flex justify-center mb-6 min-h-[100px] items-center">
                      {slide.icon}
                    </div>
                    {slide.statValue !== undefined && (
                        <p className={`text-5xl font-bold mb-4 ${getStatColor(slide.statValue)}`}>{slide.statValue} / {MAX_STAT_VALUE}</p>
                    )}
                    <p className="text-slate-300 text-lg mb-3 min-h-[90px]">{slide.description}</p>
                    <div className="bg-slate-700/50 p-4 rounded-lg border-l-4 border-sky-400">
                      <p className="text-slate-200 text-sm leading-relaxed">{slide.fixedText}</p>
                    </div>
                </>
            )}

            {slide.type === 'final-stats' && (
                <div className="my-8">
                    <div className="flex flex-col md:flex-row gap-6">
                        <FinalStat icon={<EconomyIcon className="w-8 h-8 text-yellow-400"/>} label="Economía" value={economy} colorClass={getStatColor(economy)} bgColorClass={getStatBgColor(economy)} />
                        <FinalStat icon={<LeafIcon className="w-8 h-8 text-green-400"/>} label="Ecosistema" value={ecosystem} colorClass={getStatColor(ecosystem)} bgColorClass={getStatBgColor(ecosystem)} />
                        <FinalStat icon={<HappinessIcon className="w-8 h-8 text-pink-400"/>} label="Felicidad" value={peopleHappiness} colorClass={getStatColor(peopleHappiness)} bgColorClass={getStatBgColor(peopleHappiness)} />
                    </div>
                     <p className="text-slate-400 text-base mt-8">{slide.description}</p>
                </div>
            )}
            
            {slide.type === 'final-lesson' && (
                 <div className="my-8 flex flex-col items-center gap-8">
                    <div className="relative flex items-center justify-center">
                        <BalanceIcon className="w-24 h-24 text-sky-400" />
                        <EconomyIcon className="w-12 h-12 text-yellow-400 absolute -top-4 -left-12 animate-pulse"/>
                        <LeafIcon className="w-12 h-12 text-green-400 absolute -top-4 -right-12 animate-pulse delay-300"/>
                        <HappinessIcon className="w-12 h-12 text-pink-400 absolute bottom-0 animate-pulse delay-500"/>
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">{slide.description}</p>
                 </div>
            )}

            {slide.type === 'call-to-action' && (
                <div className="my-8">
                    <p className="text-slate-300 text-lg mb-8">{slide.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="flex flex-col items-center p-6 bg-slate-700/50 rounded-lg">
                            <div className="text-4xl mb-4">📚</div>
                            <h3 className="text-xl font-bold text-sky-400 mb-3">Informarnos</h3>
                            <ul className="text-slate-300 text-sm text-left space-y-1">
                                <li>• Leer noticias</li>
                                <li>• Seguir medios confiables</li>
                                <li>• Conocer cómo funcionan las instituciones de nuestra ciudad</li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-slate-700/50 rounded-lg">
                            <div className="text-4xl mb-4">💬</div>
                            <h3 className="text-xl font-bold text-sky-400 mb-3">Dialogar y opinar</h3>
                            <ul className="text-slate-300 text-sm text-left space-y-1">
                                <li>• Conversar y debatir sobre lo que pasa a nuestro alrededor</li>
                                <li>• Dar nuestras opiniones y escuchar las de los demás</li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-slate-700/50 rounded-lg">
                            <div className="text-4xl mb-4">🗳️</div>
                            <h3 className="text-xl font-bold text-sky-400 mb-3">Acercarse a la política real</h3>
                            <ul className="text-slate-300 text-sm text-left space-y-1">
                                <li>• Conocer quiénes nos gobiernan</li>
                                <li>• Votar</li>
                                <li>• Enviar propuestas a representantes</li>
                                <li>• Unirse a espacios juveniles u ONGs</li>
                                <li>• Manifestar nuestras opiniones</li>
                            </ul>
                        </div>
                    </div>
                    <button
                      onClick={onRestart}
                      className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
                    >
                      Volver a jugar
                    </button>
                </div>
            )}

            {slide.type !== 'call-to-action' && (
              <>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        index === currentSlide ? 'bg-sky-500' : 'bg-slate-600'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
                >
                  {isLastSlide ? 'Volver a Jugar' : 'Siguiente'}
                </button>
              </>
            )}
        </div>
    </div>
  );
};

export default EndSummaryScreen;