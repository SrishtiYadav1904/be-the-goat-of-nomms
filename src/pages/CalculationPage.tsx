import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { useAudio } from '../context/AudioContext';
import { CuteGoatChef } from '../components/CuteGoatChef';
import { Sparkles, Calculator, Heart, Stars } from 'lucide-react';

export const CalculationPage: React.FC = () => {
  const { user, setStep } = useGame();
  const { playSfx } = useAudio();

  const [calcDisplay, setCalcDisplay] = useState('0.00');
  const [calculationStep, setCalculationStep] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Playful culinary equation sequence
  const equations = [
    { text: 'Sugar + Spice', display: '42.0' },
    { text: 'Whisking Happiness...', display: '88.88' },
    { text: `${user.name || 'Chef'} × 100% Love`, display: '999.9' },
    { text: 'CALCULATING DESTINY...', display: 'NOMM!' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCalculationStep((prev) => {
        if (prev < equations.length - 1) {
          playSfx('pop');
          setCalcDisplay(equations[prev + 1].display);
          return prev + 1;
        } else {
          clearInterval(timer);
          setIsReady(true);
          playSfx('sparkle');
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleReveal = () => {
    playSfx('sparkle');
    setStep('selection');
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center py-8 px-4">
      <div className="w-full max-w-lg bg-white/95 backdrop-blur-md rounded-3xl border-3 border-[#FFE5EC] p-6 sm:p-10 shadow-2xl shadow-pink-100 text-center relative overflow-hidden transition-all animate-fadeIn">
        {/* Floating Sparkles in Background */}
        <div className="absolute top-4 left-6 text-yellow-400 animate-sparkle">
          <Sparkles size={24} />
        </div>
        <div className="absolute top-8 right-8 text-pink-400 animate-sparkle" style={{ animationDelay: '1s' }}>
          <Stars size={26} />
        </div>
        <div className="absolute bottom-6 left-8 text-purple-400 animate-sparkle" style={{ animationDelay: '1.5s' }}>
          <Heart size={20} className="fill-purple-300" />
        </div>

        {/* Mascot Thinking / Calculating */}
        <div className="flex justify-center -mt-2 mb-3">
          <CuteGoatChef size={130} mood="thinking" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3D352E] tracking-tight mb-1">
          hmm... according to my calculations...
        </h2>

        {/* Supporting text */}
        <p className="text-sm sm:text-base text-gray-500 font-medium mb-6">
          Something delicious is about to happen!
        </p>

        {/* Animated Cute Chef Calculator */}
        <div className="max-w-xs mx-auto bg-gradient-to-b from-[#FFF0F3] to-[#FFE5EC] p-5 rounded-3xl border-2 border-[#FFCCD5] shadow-lg mb-8">
          <div className="flex items-center justify-between mb-3 px-1 text-xs font-bold text-[#FF758F]">
            <span className="flex items-center gap-1">
              <Calculator size={14} /> NOMM-CALC 3000
            </span>
            <span className="text-[10px] tracking-wider bg-white/80 px-2 py-0.5 rounded-full">
              {user.birthMonth} {user.birthDay}
            </span>
          </div>

          {/* Calculator Digital Screen */}
          <div className="bg-[#3D352E] text-[#FFF1A8] font-mono text-xl sm:text-2xl p-4 rounded-2xl shadow-inner text-right tracking-widest font-bold mb-4 overflow-hidden h-16 flex items-center justify-end">
            <span className="animate-pulse">{calcDisplay}</span>
          </div>

          {/* Equation subtext */}
          <div className="text-xs font-bold text-gray-600 mb-3 h-5">
            {equations[calculationStep].text}
          </div>

          {/* Calculator colorful buttons */}
          <div className="grid grid-cols-4 gap-2 text-xs font-bold select-none">
            {['🍰', '🍜', '♡', '🐐', '7', '8', '9', '×', '4', '5', '6', '+', '1', '2', '3', '='].map((btn, i) => (
              <div
                key={i}
                className="bg-white hover:bg-pink-50 text-gray-700 py-2 rounded-xl border border-pink-200 shadow-sm flex items-center justify-center cursor-default"
              >
                {btn}
              </div>
            ))}
          </div>
        </div>

        {/* Reveal Button (Appears when calculations finish) */}
        {isReady ? (
          <button
            onClick={handleReveal}
            className="w-full max-w-sm py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FF758F] via-[#FF4D6D] to-[#D90429] hover:opacity-95 text-white font-extrabold text-lg shadow-xl shadow-pink-200 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 mx-auto cursor-pointer animate-bounce"
          >
            <span>Reveal My Destiny! ♡</span>
            <Sparkles size={18} />
          </button>
        ) : (
          <div className="flex items-center justify-center gap-2 text-sm font-bold text-gray-400 py-4">
            <span className="w-2 h-2 rounded-full bg-[#FF758F] animate-ping" />
            Analyzing your culinary aura...
          </div>
        )}
      </div>
    </div>
  );
};

