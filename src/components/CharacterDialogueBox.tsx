import React, { useEffect, useState } from 'react';
import { useGame } from '../context/GameContext';
import { Sparkles, X } from 'lucide-react';

export const CharacterDialogueBox: React.FC = () => {
  const { activeDialogue, clearDialogue, foodType } = useGame();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (activeDialogue) {
      setIsVisible(true);
      // Auto dismiss after 7 seconds if not manually closed
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(clearDialogue, 300);
      }, 7000);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [activeDialogue, clearDialogue]);

  if (!activeDialogue) return null;

  const isOnePiece = activeDialogue.anime === 'one-piece' || foodType === 'cake';

  return (
    <div
      className={`fixed bottom-24 right-4 z-40 max-w-sm sm:max-w-md w-[calc(100vw-2rem)] transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-6 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div
        className={`relative p-4 rounded-2xl border-2 shadow-xl bg-white/95 backdrop-blur-md ${
          isOnePiece
            ? 'border-[#FFCCD5] shadow-[0_10px_25px_-5px_rgba(255,117,143,0.3)]'
            : 'border-[#FFD166] shadow-[0_10px_25px_-5px_rgba(255,170,0,0.3)]'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(clearDialogue, 200);
          }}
          className="absolute -top-2.5 -right-2.5 w-7 h-7 bg-white rounded-full border border-gray-200 text-gray-500 hover:text-gray-800 hover:scale-110 flex items-center justify-center shadow-md transition-all"
          aria-label="Close dialogue"
        >
          <X size={16} />
        </button>

        <div className="flex items-start gap-3">
          {/* Character Avatar Badge */}
          <div
            className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-white shadow-md flex items-center justify-center font-bold text-white text-lg select-none"
            style={{ backgroundColor: activeDialogue.avatarBg || '#FF758F' }}
          >
            {activeDialogue.speaker.charAt(0)}
          </div>

          <div className="flex-1 min-w-0">
            {/* Header / Name */}
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="font-bold text-sm sm:text-base text-gray-800 tracking-wide">
                {activeDialogue.speaker}
              </span>
              <span
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                  isOnePiece
                    ? 'bg-[#FFE5EC] text-[#D90429]'
                    : 'bg-[#FFF3CD] text-[#B25E00]'
                }`}
              >
                {isOnePiece ? 'One Piece' : 'Naruto'}
              </span>
              {activeDialogue.japaneseText && (
                <span className="text-xs text-pink-600 font-medium ml-auto">
                  {activeDialogue.japaneseText}
                </span>
              )}
            </div>

            {/* Dialogue text */}
            <p className="text-sm sm:text-[15px] text-gray-700 leading-snug font-medium italic">
              "{activeDialogue.dialogue}"
            </p>

            {activeDialogue.subtext && (
              <p className="text-xs text-gray-500 mt-1 font-sans">
                {activeDialogue.subtext}
              </p>
            )}
          </div>
        </div>

        {/* Anime aesthetic tail for speech bubble */}
        <div
          className="absolute -bottom-2 right-12 w-4 h-4 bg-white border-r-2 border-b-2 transform rotate-45"
          style={{
            borderColor: isOnePiece ? '#FFCCD5' : '#FFD166'
          }}
        />

        {/* Sparkle decorative icon */}
        <div className="absolute top-2 right-8 text-amber-400 opacity-80 animate-pulse">
          <Sparkles size={14} />
        </div>
      </div>
    </div>
  );
};

