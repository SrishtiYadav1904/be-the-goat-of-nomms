import React, { useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { useAudio } from '../context/AudioContext';
import { CakePreview } from '../components/cake/CakePreview';
import { RamenPreview } from '../components/ramen/RamenPreview';
import confetti from 'canvas-confetti';
import { Sparkles, Award, Utensils } from 'lucide-react';

export const FoodPresentationPage: React.FC = () => {
  const { user, foodType, cakeState, ramenState, setStep } = useGame();
  const { playSfx } = useAudio();

  const isCake = foodType === 'cake';

  // Trigger celebratory confetti and fanfare on mount
  useEffect(() => {
    playSfx('chime');

    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: isCake ? ['#FFCCD5', '#FF758F', '#FFE5EC', '#FFE066'] : ['#FFB703', '#FB8500', '#2A6F97', '#E63946']
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: isCake ? ['#FFCCD5', '#FF758F', '#FFE5EC', '#FFE066'] : ['#FFB703', '#FB8500', '#2A6F97', '#E63946']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, [isCake]);

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center py-8 px-4 max-w-5xl mx-auto select-none">
      {/* Presentation Container Card */}
      <div className="w-full bg-white/95 backdrop-blur-md rounded-3xl border-3 border-[#FFCCD5] p-6 sm:p-10 shadow-2xl shadow-pink-100 text-center relative overflow-hidden transition-all animate-fadeIn">
        {/* Sparkle decorative bursts */}
        <div className="absolute top-6 left-8 text-yellow-400 animate-sparkle">
          <Sparkles size={28} />
        </div>
        <div className="absolute top-6 right-8 text-pink-400 animate-sparkle" style={{ animationDelay: '0.8s' }}>
          <Sparkles size={28} />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#FFF0F3] text-[#FF758F] text-xs font-bold uppercase tracking-wider mb-2">
          <Utensils size={14} /> Masterpiece Presentation
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#3D352E] tracking-tight mb-2">
          {isCake ? "Sanji's Grand Dessert Reveal! 🎂" : "Naruto's Legendary Ramen Feast! 🍜"}
        </h2>
        <p className="text-base text-gray-600 font-medium max-w-lg mx-auto mb-6">
          Created with love and culinary finesse by <span className="font-bold text-[#D90429]">{user.name || 'Chef'}</span>!
        </p>

        {/* Main Hero Food Display (Noticeably Large) */}
        <div className="my-6 flex justify-center items-center py-4 bg-gradient-to-b from-[#FFFDF9] to-[#FFF3E2]/40 rounded-3xl border border-pink-100">
          {isCake ? (
            <CakePreview
              base={cakeState.base}
              toppings={cakeState.toppings}
              size={340}
              className="transform hover:scale-105 transition-transform"
            />
          ) : (
            <RamenPreview
              bowl={ramenState.bowl}
              noodles={ramenState.noodles}
              broth={ramenState.broth}
              toppings={ramenState.toppings}
              chopsticks={ramenState.chopsticks}
              size={340}
              className="transform hover:scale-105 transition-transform"
            />
          )}
        </div>

        {/* MAIN PRESENTER DIALOGUE */}
        <div className="max-w-2xl mx-auto my-6">
          {isCake ? (
            // SANJI IS MAIN PRESENTER
            <div className="bg-[#FFF0F3] border-2 border-[#FFCCD5] rounded-3xl p-5 sm:p-6 shadow-md text-left flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-[#35A7FF] border-2 border-white text-white font-extrabold text-xl flex items-center justify-center flex-shrink-0 shadow-md">
                S
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-black text-gray-900 text-lg">Sanji</span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-pink-200 text-pink-800 uppercase">
                    Head Chef
                  </span>
                  <span className="text-sm font-bold text-[#D90429] ml-auto">
                    • よくやった! (Yoku yatta!)
                  </span>
                </div>
                <p className="text-gray-800 font-semibold text-base sm:text-lg italic leading-relaxed">
                  "Well done! An exquisite balance of sweetness and texture! A true chef puts their heart into every layer, and you have made something truly magnificent!"
                </p>
              </div>
            </div>
          ) : (
            // NARUTO IS MAIN PRESENTER
            <div className="bg-[#FFF8E7] border-2 border-[#FFD166] rounded-3xl p-5 sm:p-6 shadow-md text-left flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-[#FF8811] border-2 border-white text-white font-extrabold text-xl flex items-center justify-center flex-shrink-0 shadow-md">
                N
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-black text-gray-900 text-lg">Naruto Uzumaki</span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 uppercase">
                    Hokage in Training
                  </span>
                  <span className="text-sm font-bold text-[#E63946] ml-auto">
                    DATTEBAYO!
                  </span>
                </div>
                <p className="text-gray-800 font-semibold text-base sm:text-lg italic leading-relaxed">
                  "DATTEBAYO! Look at that steam and that rich broth! This is the most legendary bowl of ramen in the whole Hidden Leaf Village! I'm digging in right now!"
                </p>
              </div>
            </div>
          )}
        </div>

        {/* CREW REACTIONS GRID */}
        <div className="max-w-2xl mx-auto mb-8 text-left">
          <h4 className="text-xs font-extrabold text-gray-500 uppercase tracking-wider mb-3 text-center">
            {isCake ? 'Straw Hat Crew Reactions' : 'Team 7 & Village Reactions'}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {isCake ? (
              <>
                <div className="bg-white p-3.5 rounded-2xl border border-pink-100 shadow-sm flex items-start gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#FF5964] text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                    L
                  </span>
                  <div>
                    <span className="text-xs font-bold text-gray-800">Monkey D. Luffy</span>
                    <p className="text-xs text-gray-600 font-medium italic">"IT LOOKS DELICIOUS! GIVE ME A SLICE BEFORE IT'S GONE!"</p>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-pink-100 shadow-sm flex items-start gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#FF99C8] text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                    C
                  </span>
                  <div>
                    <span className="text-xs font-bold text-gray-800">Tony Tony Chopper</span>
                    <p className="text-xs text-gray-600 font-medium italic">"SUUUUPER! I love the fluffy cream so much!"</p>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-pink-100 shadow-sm flex items-start gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#FF9F1C] text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                    N
                  </span>
                  <div>
                    <span className="text-xs font-bold text-gray-800">Nami</span>
                    <p className="text-xs text-gray-600 font-medium italic">"That actually looks expensive! Beautiful presentation!"</p>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-pink-100 shadow-sm flex items-start gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#E01A4F] text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                    BM
                  </span>
                  <div>
                    <span className="text-xs font-bold text-gray-800">Big Mom</span>
                    <p className="text-xs text-gray-600 font-medium italic">"MAAAMAMAMAMA! GIVE ME A SLICE! WEEEDDDING CAKE!"</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white p-3.5 rounded-2xl border border-amber-100 shadow-sm flex items-start gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#F39237] text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                    T
                  </span>
                  <div>
                    <span className="text-xs font-bold text-gray-800">Teuchi (Ichiraku)</span>
                    <p className="text-xs text-gray-600 font-medium italic">"Now THAT is a proper bowl of ramen! You're welcome at Ichiraku anytime!"</p>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-amber-100 shadow-sm flex items-start gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#487292] text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                    K
                  </span>
                  <div>
                    <span className="text-xs font-bold text-gray-800">Kakashi Hatake</span>
                    <p className="text-xs text-gray-600 font-medium italic">"Not bad. I might even give this a passing grade."</p>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-amber-100 shadow-sm flex items-start gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#7209B7] text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                    H
                  </span>
                  <div>
                    <span className="text-xs font-bold text-gray-800">Hinata Hyuga</span>
                    <p className="text-xs text-gray-600 font-medium italic">"It looks so delicious, Naruto-kun... and so warm!"</p>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-amber-100 shadow-sm flex items-start gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#D00000] text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                    J
                  </span>
                  <div>
                    <span className="text-xs font-bold text-gray-800">Jiraiya</span>
                    <p className="text-xs text-gray-600 font-medium italic">"Now that's what I call a legendary meal! Perfect for writing my next novel!"</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Claim Certificate Button */}
        <div className="max-w-md mx-auto">
          <button
            onClick={() => {
              playSfx('sparkle');
              setStep('certificate');
            }}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FF758F] via-[#FF4D6D] to-[#D90429] hover:opacity-95 text-white font-extrabold text-lg shadow-xl shadow-pink-200 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Award size={22} />
            <span>Claim My Chef Certificate! ♡</span>
          </button>
        </div>
      </div>
    </div>
  );
};
