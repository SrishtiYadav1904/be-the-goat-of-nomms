import React, { useState } from 'react';
import { useAudio } from '../context/AudioContext';
import { Volume2, VolumeX, Play, Pause, Music, Sliders, ChevronDown, ChevronUp } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const { isPlaying, isMuted, volume, togglePlay, toggleMute, setVolume, isSynthesized } = useAudio();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50 select-none">
      <div className="bg-white/90 backdrop-blur-md border-2 border-[#FFCCD5] rounded-2xl shadow-lg p-2 transition-all duration-300">
        <div className="flex items-center gap-2">
          {/* Vinyl / Music Icon with spinning animation when playing */}
          <button
            onClick={togglePlay}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform ${
              isPlaying
                ? 'bg-gradient-to-tr from-[#FF758F] to-[#FFB3C6] text-white shadow-md'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
            title={isPlaying ? 'Pause Binks\' Sake' : 'Play Binks\' Sake'}
            aria-label={isPlaying ? 'Pause Binks\' Sake' : 'Play Binks\' Sake'}
          >
            <div className={isPlaying ? 'animate-spin' : ''} style={{ animationDuration: '4s' }}>
              <Music size={18} />
            </div>
          </button>

          {/* Quick Info & Toggle */}
          <div className="flex flex-col text-left pr-1 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold text-gray-800 tracking-tight">Binks' Sake 🎵</span>
              {isSynthesized && (
                <span className="text-[9px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-medium">
                  Melody
                </span>
              )}
            </div>
            <span className="text-[10px] text-gray-500 font-medium">
              {isPlaying ? `${Math.round(volume * 100)}% Volume` : 'Paused'}
            </span>
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="w-8 h-8 rounded-full bg-[#FFF0F3] text-[#FF758F] hover:bg-[#FFE5EC] flex items-center justify-center transition-colors"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
          </button>

          {/* Mute/Unmute Button */}
          <button
            onClick={toggleMute}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isMuted
                ? 'bg-rose-100 text-rose-600'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>

          {/* Expand slider arrow */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-gray-600 px-1"
            title="Volume Slider"
          >
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {/* Expanded Volume Slider Tray */}
        {isExpanded && (
          <div className="pt-3 mt-2 border-t border-pink-100 px-2 flex items-center gap-3">
            <Sliders size={14} className="text-gray-400 flex-shrink-0" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-28 sm:w-36 h-2 bg-pink-100 rounded-lg appearance-none cursor-pointer accent-[#FF758F]"
            />
            <span className="text-xs font-bold text-gray-600 w-8 text-right">
              {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

