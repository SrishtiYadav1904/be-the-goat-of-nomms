import React from 'react';
import { useGame } from '../context/GameContext';
import { useAudio } from '../context/AudioContext';
import { CakePreview } from '../components/cake/CakePreview';
import { RamenPreview } from '../components/ramen/RamenPreview';
import { Sparkles, Check } from 'lucide-react';

export const FoodSelectionPage: React.FC = () => {
  const { foodType, setFoodType, setStep, showDialogue } = useGame();
  const { playSfx } = useAudio();

  const handleSelect = (choice: 'cake' | 'ramen') => {
    setFoodType(choice);
    playSfx('pop');

    if (choice === 'cake') {
      showDialogue({
        id: 'sanji-intro',
        speaker: 'Sanji',
        anime: 'one-piece',
        avatarBg: '#35A7FF',
        dialogue: 'An outstanding dessert begins with passion! Let us create an unforgettable cake, Chef!',
        mood: 'proud'
      });
    } else {
      showDialogue({
        id: 'naruto-intro',
        speaker: 'Naruto Uzumaki',
        anime: 'naruto',
        avatarBg: '#FF8811',
        dialogue: 'RAMEN TIME! Believe it! Nothing beats a piping hot bowl after a long mission, DATTEBAYO!',
        mood: 'excited'
      });
    }
  };

  const handleProceed = () => {
    if (!foodType) return;
    playSfx('sparkle');
    setStep('customize');
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center py-8 px-4 max-w-5xl mx-auto">
      {/* Headings */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0F3] text-[#FF758F] text-xs font-bold uppercase tracking-wider mb-2">
          Step 3 of 6
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3D352E] tracking-tight mb-2">
          What's cooking today, Chef?
        </h2>
        <p className="text-base text-gray-600 font-medium max-w-md mx-auto">
          Choose your delicious masterpiece!
        </p>
      </div>

      {/* Two Large Illustrated Food Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl mb-8">
        {/* OPTION 1: CAKE */}
        <div
          onClick={() => handleSelect('cake')}
          className={`relative p-6 sm:p-8 rounded-3xl border-3 cursor-pointer transition-all duration-300 text-center flex flex-col items-center justify-between group ${
            foodType === 'cake'
              ? 'bg-gradient-to-b from-[#FFF0F3] to-white border-[#FF758F] shadow-2xl shadow-pink-200 scale-[1.02] ring-4 ring-pink-100'
              : 'bg-white border-[#FFE5EC] hover:border-[#FFB3C6] hover:shadow-xl hover:scale-[1.01]'
          }`}
        >
          {/* Selected Badge */}
          {foodType === 'cake' && (
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FF758F] text-white flex items-center justify-center shadow-md animate-bounce">
              <Check size={18} strokeWidth={3} />
            </div>
          )}

          {/* Anime Tag */}
          <div className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700 uppercase tracking-wider mb-3">
            🏴‍☠️ One Piece World
          </div>

          {/* Food Illustration */}
          <div className="my-2 transition-transform duration-300 group-hover:scale-105">
            <CakePreview
              base="circle"
              toppings={['vanilla-cream', 'fruit-slices', 'sprinkles']}
              size={210}
            />
          </div>

          {/* Label & Description */}
          <div>
            <h3 className="text-2xl font-black text-[#3D352E] tracking-wide mb-1">
              CAKE 🍰
            </h3>
            <p className="text-sm font-semibold text-gray-500 italic mb-2">
              "A little sweetness never hurts."
            </p>
            <p className="text-xs text-pink-600 font-medium">
              Decorate with Sanji, Luffy & the Straw Hat crew!
            </p>
          </div>
        </div>

        {/* OPTION 2: RAMEN */}
        <div
          onClick={() => handleSelect('ramen')}
          className={`relative p-6 sm:p-8 rounded-3xl border-3 cursor-pointer transition-all duration-300 text-center flex flex-col items-center justify-between group ${
            foodType === 'ramen'
              ? 'bg-gradient-to-b from-[#FFF8E7] to-white border-[#FFB703] shadow-2xl shadow-amber-200 scale-[1.02] ring-4 ring-amber-100'
              : 'bg-white border-[#FFE5EC] hover:border-[#FFD166] hover:shadow-xl hover:scale-[1.01]'
          }`}
        >
          {/* Selected Badge */}
          {foodType === 'ramen' && (
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FFB703] text-white flex items-center justify-center shadow-md animate-bounce">
              <Check size={18} strokeWidth={3} />
            </div>
          )}

          {/* Anime Tag */}
          <div className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 uppercase tracking-wider mb-3">
            🍜 Naruto World
          </div>

          {/* Food Illustration */}
          <div className="my-2 transition-transform duration-300 group-hover:scale-105">
            <RamenPreview
              bowl="persian-blue-flower"
              noodles="wavy"
              broth="tonkotsu"
              toppings={['boiled-egg', 'naruto', 'chashu', 'spring-onion']}
              chopsticks="wooden"
              size={210}
            />
          </div>

          {/* Label & Description */}
          <div>
            <h3 className="text-2xl font-black text-[#3D352E] tracking-wide mb-1">
              RAMEN 🍜
            </h3>
            <p className="text-sm font-semibold text-gray-500 italic mb-2">
              "A warm bowl full of happiness."
            </p>
            <p className="text-xs text-amber-700 font-medium">
              Simmer legendary broth with Naruto & Teuchi!
            </p>
          </div>
        </div>
      </div>

      {/* Main Customize Button */}
      <div className="w-full max-w-sm text-center">
        <button
          onClick={handleProceed}
          disabled={!foodType}
          className={`w-full py-4 px-6 rounded-2xl font-extrabold text-lg shadow-xl transition-all flex items-center justify-center gap-2 ${
            foodType
              ? 'bg-gradient-to-r from-[#FF758F] via-[#FF4D6D] to-[#D90429] hover:opacity-95 text-white shadow-pink-200 cursor-pointer transform hover:-translate-y-1 active:translate-y-0'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
          }`}
        >
          <span>Let's Customize!</span>
          <Sparkles size={18} />
        </button>

        {!foodType && (
          <p className="text-xs text-gray-400 mt-2 font-medium">
            Please pick Cake or Ramen to continue!
          </p>
        )}
      </div>
    </div>
  );
};
