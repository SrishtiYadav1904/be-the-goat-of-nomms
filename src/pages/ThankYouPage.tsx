import React from 'react';
import { useGame } from '../context/GameContext';
import { useAudio } from '../context/AudioContext';
import { CuteGoatChef } from '../components/CuteGoatChef';
import { CakePreview } from '../components/cake/CakePreview';
import { RamenPreview } from '../components/ramen/RamenPreview';
import { Sparkles, Heart, RotateCcw, Award, Star } from 'lucide-react';

export const ThankYouPage: React.FC = () => {
  const { user, foodType, cakeState, ramenState, playAgain, setStep } = useGame();
  const { playSfx } = useAudio();

  const isCake = foodType === 'cake';

  const handleRestart = () => {
    playSfx('sparkle');
    playAgain();
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center py-10 px-4 max-w-4xl mx-auto select-none">
      {/* Thank You Card */}
      <div className="w-full bg-white/95 backdrop-blur-md rounded-3xl border-3 border-[#FFCCD5] p-6 sm:p-12 shadow-2xl shadow-pink-100 text-center relative overflow-hidden transition-all animate-fadeIn">
        {/* Floating Background Sparkles & Hearts */}
        <div className="absolute top-6 left-6 text-pink-400 animate-gentle-float">
          <Heart size={24} className="fill-pink-300" />
        </div>
        <div className="absolute top-10 right-8 text-amber-400 animate-sparkle">
          <Sparkles size={28} />
        </div>
        <div className="absolute bottom-10 left-10 text-purple-400 animate-sparkle" style={{ animationDelay: '1s' }}>
          <Star size={24} className="fill-purple-200" />
        </div>
        <div className="absolute bottom-8 right-8 text-rose-400 animate-gentle-float" style={{ animationDelay: '0.5s' }}>
          <Heart size={20} className="fill-rose-300" />
        </div>

        {/* Mascot */}
        <div className="flex justify-center -mt-4 mb-3 animate-gentle-float">
          <CuteGoatChef size={150} mood="nomm" />
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-5xl font-black text-[#3D352E] tracking-tight mb-3">
          Thanks for Playing, GOAT! ♡
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-gray-700 font-medium max-w-xl mx-auto leading-relaxed mb-4">
          I hope you had as much fun creating your masterpiece as I had watching you,{' '}
          <span className="font-extrabold text-[#D90429]">{user.name || 'Chef'}</span>!
        </p>

        {/* Additional inspiring message */}
        <div className="bg-[#FFFDF7] border-2 border-[#FFE5EC] rounded-2xl p-4 sm:p-5 max-w-lg mx-auto mb-8 shadow-sm">
          <p className="text-sm sm:text-base text-gray-600 font-semibold italic">
            "Keep creating, keep experimenting, and never stop being a little chef!"
          </p>
        </div>

        {/* Mini Preview of Dish Created */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="transform scale-75">
            {isCake ? (
              <CakePreview
                base={cakeState.base}
                toppings={cakeState.toppings}
                size={140}
              />
            ) : (
              <RamenPreview
                bowl={ramenState.bowl}
                noodles={ramenState.noodles}
                broth={ramenState.broth}
                toppings={ramenState.toppings}
                chopsticks={ramenState.chopsticks}
                size={140}
              />
            )}
          </div>
          <button
            onClick={() => setStep('certificate')}
            className="text-xs font-bold text-[#FF758F] bg-[#FFF0F3] hover:bg-[#FFE5EC] px-4 py-2 rounded-xl border border-pink-200 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Award size={14} /> View Certificate Again
          </button>
        </div>

        {/* Buttons */}
        <div className="max-w-sm mx-auto space-y-3 mb-8">
          {/* Play Again! ✨ */}
          <button
            onClick={handleRestart}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FF758F] via-[#FF4D6D] to-[#D90429] hover:opacity-95 text-white font-extrabold text-lg shadow-xl shadow-pink-200 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw size={18} />
            <span>Play Again! ✨</span>
          </button>
        </div>

        {/* PROMINENT CREATOR SIGNATURE (REQUIRED EXACT SPELLING) */}
        <div className="border-t border-pink-100 pt-6">
          <p className="font-hand text-2xl sm:text-3xl text-gray-800 tracking-wide">
            Created with love by <span className="font-bold text-[#D90429]">Tripti D Goat (nomnom)</span> ♡
          </p>
          <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-sans font-semibold">
            BE THE GOAT OF NOMM'S (COOKING)
          </p>
        </div>
      </div>
    </div>
  );
};
