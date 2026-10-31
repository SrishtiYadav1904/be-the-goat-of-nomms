import React from 'react';
import { X, Heart, ChefHat } from 'lucide-react';
import { CuteGoatChef } from './CuteGoatChef';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border-3 border-[#FFCCD5] p-6 sm:p-8 shadow-2xl text-center">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FFF0F3] text-gray-500 hover:text-gray-800 hover:bg-[#FFE5EC] flex items-center justify-center transition-all shadow-sm"
          aria-label="Close About Modal"
        >
          <X size={18} />
        </button>

        {/* Mascot */}
        <div className="flex justify-center -mt-2 mb-2">
          <CuteGoatChef size={110} mood="celebrate" />
        </div>

        {/* Title */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0F3] text-[#FF758F] text-xs font-bold uppercase tracking-wider mb-2">
          <ChefHat size={14} /> Official Creator Credits
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3D352E] tracking-tight mb-1">
          BE THE GOAT OF NOMM'S (COOKING)
        </h2>
        <p className="text-sm font-semibold text-[#FF758F] tracking-widest uppercase mb-6">
          "CREATE. CUSTOMIZE. NOMM."
        </p>

        {/* Details Card */}
        <div className="bg-[#FFFDF7] border-2 border-[#FFE5EC] rounded-2xl p-5 text-left space-y-3.5 mb-6 text-sm text-gray-700 shadow-sm">
          <div className="flex items-start justify-between border-b border-pink-100 pb-2.5">
            <span className="font-semibold text-gray-500">Website Creator:</span>
            <span className="font-bold text-[#D90429] text-base font-hand tracking-wide">
              Tripti D Goat (nomnom)
            </span>
          </div>

          <div className="flex items-start justify-between border-b border-pink-100 pb-2.5">
            <span className="font-semibold text-gray-500">Project:</span>
            <span className="font-bold text-gray-800 text-right">
              BE THE GOAT OF NOMM'S (COOKING)
            </span>
          </div>

          <div className="flex items-start justify-between border-b border-pink-100 pb-2.5">
            <span className="font-semibold text-gray-500">Concept:</span>
            <span className="font-medium text-gray-800 text-right max-w-[240px]">
              An anime-inspired interactive cooking adventure.
            </span>
          </div>

          <div className="flex items-start justify-between">
            <span className="font-semibold text-gray-500">Made with:</span>
            <span className="font-medium text-gray-800 text-right flex items-center gap-1">
              <Heart size={14} className="text-red-500 fill-red-500" /> creativity, and lots of NOMM!
            </span>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-xs text-gray-500 italic mb-5">
          "Every great dish tells a story. Thank you for cooking with us and being the ultimate GOAT!"
        </p>

        <button
          onClick={onClose}
          className="w-full py-3 px-6 rounded-2xl bg-gradient-to-r from-[#FF758F] to-[#FF4D6D] hover:from-[#FF4D6D] hover:to-[#D90429] text-white font-bold text-base shadow-lg shadow-pink-200 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Got it! Let's Cook! ✨
        </button>
      </div>
    </div>
  );
};
