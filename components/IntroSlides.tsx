import React, { useState } from 'react';
import { 
  EconomyIcon, 
  LeafIcon, 
  HappinessIcon, 
  BalanceIcon,
  BusinessmanAvatar,
  ActivistAvatar,
  FamilyManAvatar,
  SmallBusinessOwnerAvatar
} from './IconComponents';

interface IntroSlidesProps {
  onComplete: () => void;
}

const slideData = [
  {
    icon: <BalanceIcon className="w-20 h-20 text-cyan-400" />,
    title: '¡Bienvenido, Alcalde!',
    description: 'Tu misión es gobernar una ciudad próspera. Deberás mantener un delicado equilibrio entre tres pilares fundamentales para el éxito.'
  },
  {
    icon: (
      <div className="flex space-x-8">
        <div className="flex flex-col items-center space-y-2">
            <EconomyIcon className="w-16 h-16 text-yellow-400" />
            <span className="font-medium text-cyan-700">Economía</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
            <LeafIcon className="w-16 h-16 text-green-400" />
            <span className="font-medium text-green-700">Ecosistema</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
            <HappinessIcon className="w-16 h-16 text-blue-400" />
            <span className="font-medium text-blue-700">Felicidad</span>
        </div>
      </div>
    ),
    title: 'Los Pilares de la Ciudad',
    description: 'Cada decisión que tomes afectará a la Economía, el Ecosistema y la Felicidad de la gente. Si cualquiera de ellos llega a cero, tu mandato terminará.'
  },
  {
    icon: (
      <div className="flex justify-center items-center -space-x-4">
          <BusinessmanAvatar className="w-20 h-20 rounded-full border-4 border-cyan-200 shadow-lg bg-white" />
          <ActivistAvatar className="w-20 h-20 rounded-full border-4 border-green-200 shadow-lg bg-white" />
          <FamilyManAvatar className="w-20 h-20 rounded-full border-4 border-yellow-100 shadow-lg bg-white" />
          <SmallBusinessOwnerAvatar className="w-20 h-20 rounded-full border-4 border-blue-200 shadow-lg bg-white" />
      </div>
    ),
    title: 'Las Voces de la Ciudad',
    description: 'Cuatro figuras clave de la ciudad te presentarán propuestas. Cada uno tiene sus propios intereses. ¡Escúchalos a todos para gobernar con sabiduría!'
  }
];

const IntroSlides: React.FC<IntroSlidesProps> = ({ onComplete }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slideData.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const slide = slideData[currentSlide];
  const isLastSlide = currentSlide === slideData.length - 1;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-cyan-100 via-white to-green-100 flex flex-col items-center justify-center z-50 p-4 text-center">
        <div className="w-full max-w-lg bg-white/90 border-2 border-cyan-200 p-8 md:p-12 rounded-2xl shadow-2xl intro-slide">
            <div className="flex justify-center mb-6 min-h-[100px] items-center">
              {slide.icon}
            </div>
            <h2 className="text-3xl font-bold text-green-700 mb-4 drop-shadow-lg">{slide.title}</h2>
            <p className="text-cyan-800 text-lg mb-8 min-h-[100px] drop-shadow-sm">{slide.description}</p>
            <div className="flex items-center justify-center space-x-4 mb-4">
              {slideData.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? 'bg-cyan-500' : 'bg-cyan-200'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-cyan-400 hover:to-green-400 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-opacity-75"
            >
              {isLastSlide ? '¡A gobernar!' : 'Siguiente'}
            </button>
        </div>
    </div>
  );
};

export default IntroSlides;