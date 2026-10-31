import React, { useState } from 'react';
import { useAudio } from '../context/AudioContext';
import { Volume2, VolumeX, Play, Pause, Music, Settings, EyeOff, Eye, X, Check } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const { isPlaying, isMuted, volume, togglePlay, toggleMute, setVolume, isSynthesized } = useAudio();

  // Load hidden preference from localStorage
  const [isTabHidden, setIsTabHidden] = useState<boolean>(() => {
    return localStorage.getItem('nomm_music_tab_hidden') === 'true';
  });

  // Settings modal/drawer open state
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [showSavedNotification, setShowSavedNotification] = useState<boolean>(false);

  // Save hidden state to localStorage
  const toggleHideTab = () => {
    const nextState = !isTabHidden;
    setIsTabHidden(nextState);
    localStorage.setItem('nomm_music_tab_hidden', nextState.toString());
    triggerSaved();
  };

  const triggerSaved = () => {
    setShowSavedNotification(true);
    setTimeout(() => setShowSavedNotification(false), 2000);
  };

  return (
    <>
      {/* --- FLOATING MUSIC TAB (TOP-RIGHT CORNER) --- */}
      <div className="fixed top-3 right-3 sm:top-4 sm:right-4 z-40 select-none">
        {isTabHidden ? (
          /* MINIMIZED DISCREET TAB (Just a tiny cute floating music pill) */
          <button
            onClick={() => setIsSettingsOpen(true)}
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-all transform hover:scale-110 active:scale-95 cursor-pointer ${
              isPlaying
                ? 'bg-gradient-to-tr from-[#FF758F] to-[#FFCCD5] text-white ring-2 ring-pink-300 ring-offset-1'
                : 'bg-white text-gray-500 hover:text-gray-800 border-pink-200'
            }`}
            title="Music Settings (Click to expand)"
            aria-label="Open Music Settings"
          >
            <div className={isPlaying ? 'animate-spin' : ''} style={{ animationDuration: '4s' }}>
              <Music size={16} />
            </div>
          </button>
        ) : (
          /* SMALL COMPACT MUSIC TAB */
          <div className="bg-white/95 backdrop-blur-md border-2 border-[#FFCCD5] rounded-full shadow-lg pl-1.5 pr-2 py-1 flex items-center gap-1.5 transition-all">
            {/* Spinning Music Vinyl Button */}
            <button
              onClick={togglePlay}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                isPlaying
                  ? 'bg-gradient-to-tr from-[#FF758F] to-[#FFCCD5] text-white shadow-sm'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
              title={isPlaying ? 'Pause Music' : 'Play Music'}
            >
              <div className={isPlaying ? 'animate-spin' : ''} style={{ animationDuration: '4s' }}>
                <Music size={14} />
              </div>
            </button>

            {/* Quick Title & Status */}
            <div
              className="flex flex-col text-left cursor-pointer px-1 max-w-[90px] sm:max-w-[110px]"
              onClick={() => setIsSettingsOpen(true)}
              title="Click to open Music Settings"
            >
              <span className="text-[11px] font-bold text-gray-800 truncate leading-tight">
                Binks' Sake
              </span>
              <span className="text-[9px] font-semibold text-gray-500 leading-tight">
                {isMuted ? 'Muted' : isPlaying ? `${Math.round(volume * 100)}% vol` : 'Paused'}
              </span>
            </div>

            {/* Quick Play/Pause */}
            <button
              onClick={togglePlay}
              className="w-7 h-7 rounded-full bg-[#FFF0F3] hover:bg-[#FFE5EC] text-[#FF758F] flex items-center justify-center transition-colors"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={12} /> : <Play size={12} className="ml-0.5" />}
            </button>

            {/* Settings Gear Button */}
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
              title="Music Settings"
            >
              <Settings size={13} />
            </button>

            {/* Hide Tab Button (Minimizes to tiny pill) */}
            <button
              onClick={toggleHideTab}
              className="w-6 h-6 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 flex items-center justify-center transition-colors ml-0.5"
              title="Hide this music tab"
            >
              <EyeOff size={13} />
            </button>
          </div>
        )}
      </div>

      {/* --- MUSIC SETTINGS MODAL / TAB --- */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-sm bg-white rounded-3xl border-3 border-[#FFCCD5] p-5 sm:p-6 shadow-2xl select-none text-left">
            {/* Close Button */}
            <button
              onClick={() => setIsSettingsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FFF0F3] text-gray-500 hover:text-gray-800 hover:bg-[#FFE5EC] flex items-center justify-center transition-colors"
              aria-label="Close Music Settings"
            >
              <X size={16} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#FFF0F3] text-[#FF758F] flex items-center justify-center">
                <Music size={18} />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#3D352E] leading-tight">
                  Music Settings
                </h3>
                <span className="text-[11px] font-semibold text-gray-500">
                  Audio & Volume Controls
                </span>
              </div>
            </div>

            {/* Track Info Box */}
            <div className="bg-[#FFFDF7] border border-[#FFE5EC] rounded-2xl p-3 mb-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-gray-800 block">
                  Binks' Sake (Bink's no Sake) 🎵
                </span>
                <span className="text-[10px] text-gray-500 font-medium">
                  One Piece OST • Cozy Café Theme
                </span>
              </div>
              {isSynthesized ? (
                <span className="text-[9px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">
                  Melody
                </span>
              ) : (
                <span className="text-[9px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                  HQ Audio
                </span>
              )}
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-between gap-3 mb-4">
              {/* Play / Pause Big Button */}
              <button
                onClick={() => {
                  togglePlay();
                  triggerSaved();
                }}
                className={`flex-1 py-2.5 px-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                  isPlaying
                    ? 'bg-[#FFF0F3] border-2 border-[#FF758F] text-[#D90429]'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                <span>{isPlaying ? 'Pause Music' : 'Play Music'}</span>
              </button>

              {/* Mute / Unmute Button */}
              <button
                onClick={() => {
                  toggleMute();
                  triggerSaved();
                }}
                className={`py-2.5 px-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-1.5 border transition-all ${
                  isMuted
                    ? 'bg-rose-50 border-rose-200 text-rose-600'
                    : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                <span>{isMuted ? 'Unmute' : 'Mute'}</span>
              </button>
            </div>

            {/* Volume Slider */}
            <div className="mb-5 bg-gray-50/80 p-3.5 rounded-2xl border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
                  <Volume2 size={14} className="text-[#FF758F]" /> Master Volume
                </span>
                <span className="text-xs font-extrabold text-[#D90429]">
                  {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  triggerSaved();
                }}
                className="w-full h-2 bg-pink-100 rounded-lg appearance-none cursor-pointer accent-[#FF758F]"
              />
              <div className="flex justify-between text-[10px] text-gray-400 mt-1 font-semibold">
                <span>0%</span>
                <span>Default 20%</span>
                <span>100%</span>
              </div>
            </div>

            {/* Visibility / Hide Tab Toggle */}
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-800">
                  {isTabHidden ? 'Music Tab is Hidden' : 'Hide Floating Music Tab'}
                </span>
                <span className="text-[10px] text-gray-400 max-w-[210px]">
                  {isTabHidden
                    ? 'Minimizes to a tiny 🎵 icon in corner.'
                    : 'Keeps screen clean; unhide anytime with 🎵.'}
                </span>
              </div>
              <button
                onClick={toggleHideTab}
                className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all ${
                  isTabHidden
                    ? 'bg-[#FFF0F3] text-[#FF758F] border border-pink-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {isTabHidden ? <Eye size={13} /> : <EyeOff size={13} />}
                <span>{isTabHidden ? 'Unhide' : 'Hide'}</span>
              </button>
            </div>

            {/* Auto-saved notification feedback */}
            {showSavedNotification && (
              <div className="mt-3 py-1.5 px-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-[11px] font-bold flex items-center justify-center gap-1.5 animate-fadeIn">
                <Check size={12} strokeWidth={3} />
                <span>Saved to your preferences!</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
