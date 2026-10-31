import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { CuteGoatChef } from './CuteGoatChef';
import { AboutModal } from './AboutModal';
import { ArrowLeft, Info } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { step, goBack } = useGame();
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const stepsList = [
    { id: 'welcome', label: 'Chef Info' },
    { id: 'calculation', label: 'Magic' },
    { id: 'selection', label: 'Choose Food' },
    { id: 'customize', label: 'Decorate' },
    { id: 'presentation', label: 'Feast' },
    { id: 'certificate', label: 'Certificate' },
  ];

  const currentStepIdx = stepsList.findIndex(s => s.id === step);

  return (
    <>
      <header className="sticky top-0 z-30 bg-[#FFFBF5]/90 backdrop-blur-md border-b border-[#FFE5EC] px-4 py-3 select-none transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          {/* Left: Back Button & Branding */}
          <div className="flex items-center gap-3">
            {step !== 'welcome' && step !== 'thankyou' && (
              <button
                onClick={goBack}
                className="w-9 h-9 rounded-full bg-white border border-[#FFCCD5] text-gray-600 hover:text-[#FF758F] hover:bg-[#FFF0F3] flex items-center justify-center transition-all shadow-sm"
                title="Go back to previous step"
                aria-label="Go back"
              >
                <ArrowLeft size={18} />
              </button>
            )}

            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 flex-shrink-0">
                <CuteGoatChef size={40} mood={step === 'customize' ? 'cooking' : 'happy'} />
              </div>
              <div className="flex flex-col text-left">
                <h1 className="text-base sm:text-lg font-black tracking-tight text-[#3D352E] leading-none">
                  BE THE GOAT OF NOMM'S <span className="text-[#FF758F] text-xs font-bold sm:inline block">(COOKING)</span>
                </h1>
                <span className="text-[10px] sm:text-xs font-bold text-[#FF758F] tracking-widest uppercase">
                  CREATE. CUSTOMIZE. NOMM.
                </span>
              </div>
            </div>
          </div>

          {/* Center: Subtle Step Progress for Desktop */}
          {currentStepIdx >= 0 && (
            <div className="hidden lg:flex items-center gap-2 bg-white/80 border border-[#FFE5EC] px-3 py-1.5 rounded-full shadow-sm">
              {stepsList.map((s, idx) => (
                <div key={s.id} className="flex items-center gap-1.5">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                      idx < currentStepIdx
                        ? 'bg-[#FF758F] text-white'
                        : idx === currentStepIdx
                        ? 'bg-[#FFD166] text-[#6E4900] ring-2 ring-[#FF758F]/40'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <span
                    className={`text-xs font-semibold ${
                      idx === currentStepIdx ? 'text-gray-800 font-bold' : 'text-gray-400'
                    }`}
                  >
                    {s.label}
                  </span>
                  {idx < stepsList.length - 1 && (
                    <div className="w-2.5 h-0.5 bg-gray-200" />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Right: Credits / About Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAboutOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#FFCCD5] text-xs font-bold text-gray-700 hover:text-[#FF758F] hover:bg-[#FFF0F3] shadow-sm transition-all"
            >
              <Info size={14} className="text-[#FF758F]" />
              <span className="hidden sm:inline">About & Credits</span>
              <span className="sm:hidden">Credits</span>
            </button>
          </div>
        </div>
      </header>

      {/* About & Creator Credits Modal */}
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </>
  );
};
