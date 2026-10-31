import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  togglePlay: () => void;
  toggleMute: () => void;
  setVolume: (v: number) => void;
  startMusic: () => void;
  playSfx: (type: 'pop' | 'sparkle' | 'chime' | 'boing') => void;
  isSynthesized: boolean;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

// Web Audio synthesizer for Binks' Sake melody fallback
// Famous melody: "Binkusu no sake wo todoke ni yuku yo..."
const BINKS_NOTES = [
  // Intro / Theme phrases (Note frequencies in Hz)
  { note: 392.00, dur: 0.4 }, // G4
  { note: 440.00, dur: 0.4 }, // A4
  { note: 493.88, dur: 0.4 }, // B4
  { note: 523.25, dur: 0.6 }, // C5
  { note: 493.88, dur: 0.4 }, // B4
  { note: 440.00, dur: 0.4 }, // A4
  { note: 392.00, dur: 0.6 }, // G4
  { note: 329.63, dur: 0.4 }, // E4
  { note: 392.00, dur: 0.6 }, // G4
  { note: 440.00, dur: 0.4 }, // A4
  { note: 493.88, dur: 0.6 }, // B4
  { note: 440.00, dur: 0.4 }, // A4
  { note: 392.00, dur: 0.8 }, // G4
  { note: 0, dur: 0.3 },      // Rest

  { note: 392.00, dur: 0.4 }, // G4
  { note: 440.00, dur: 0.4 }, // A4
  { note: 493.88, dur: 0.4 }, // B4
  { note: 523.25, dur: 0.6 }, // C5
  { note: 587.33, dur: 0.4 }, // D5
  { note: 523.25, dur: 0.4 }, // C5
  { note: 493.88, dur: 0.6 }, // B4
  { note: 440.00, dur: 0.4 }, // A4
  { note: 392.00, dur: 0.6 }, // G4
  { note: 440.00, dur: 0.4 }, // A4
  { note: 493.88, dur: 0.6 }, // B4
  { note: 392.00, dur: 0.8 }, // G4
  { note: 0, dur: 0.6 },      // Rest
];

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(() => {
    return localStorage.getItem('nomm_music_playing') === 'true';
  });
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    return localStorage.getItem('nomm_music_muted') === 'true';
  });
  const [volume, setVolumeState] = useState<number>(() => {
    const saved = localStorage.getItem('nomm_music_vol');
    return saved !== null ? parseFloat(saved) : 0.20; // Default 20%
  });
  const [isSynthesized, setIsSynthesized] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const synthGainRef = useRef<GainNode | null>(null);
  const synthTimerRef = useRef<number | null>(null);
  const synthNoteIndex = useRef<number>(0);
  const isPlayingRef = useRef<boolean>(isPlaying);
  const isMutedRef = useRef<boolean>(isMuted);
  const volumeRef = useRef<number>(volume);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
    localStorage.setItem('nomm_music_playing', isPlaying.toString());
  }, [isPlaying]);

  useEffect(() => {
    isMutedRef.current = isMuted;
    localStorage.setItem('nomm_music_muted', isMuted.toString());
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
    if (synthGainRef.current) {
      synthGainRef.current.gain.value = isMuted ? 0 : volume * 0.15;
    }
  }, [isMuted, volume]);

  useEffect(() => {
    volumeRef.current = volume;
    localStorage.setItem('nomm_music_vol', volume.toString());
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
    if (synthGainRef.current && !isMuted) {
      synthGainRef.current.gain.value = volume * 0.15;
    }
  }, [volume, isMuted]);

  // Initialize Web Audio API on first user gesture
  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioContextClass();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // Play synthesized note
  const playNextSynthNote = () => {
    if (!isPlayingRef.current) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const noteData = BINKS_NOTES[synthNoteIndex.current];
      synthNoteIndex.current = (synthNoteIndex.current + 1) % BINKS_NOTES.length;

      if (noteData.note > 0) {
        // Create soft bell / music-box sound
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(noteData.note, ctx.currentTime);

        const targetGain = isMutedRef.current ? 0 : volumeRef.current * 0.12;
        noteGain.gain.setValueAtTime(targetGain, ctx.currentTime);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + noteData.dur + 0.3);

        osc.connect(noteGain);
        noteGain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + noteData.dur + 0.35);
      }

      synthTimerRef.current = window.setTimeout(() => {
        playNextSynthNote();
      }, noteData.dur * 1000);
    } catch {
      // Audio context handling
    }
  };

  const startSynthesizer = () => {
    if (synthTimerRef.current) {
      clearTimeout(synthTimerRef.current);
    }
    setIsSynthesized(true);
    playNextSynthNote();
  };

  const stopSynthesizer = () => {
    if (synthTimerRef.current) {
      clearTimeout(synthTimerRef.current);
      synthTimerRef.current = null;
    }
  };

  // Setup MP3 audio element with fallback paths
  useEffect(() => {
    const audioCandidates = [
      encodeURI('/audio/ONE_PIECE_-_Binks_No_Sake_Brook_(mp3.pm).mp3'),
      '/audio/binks-sake.mp3'
    ];
    let candidateIndex = 0;

    const audio = new Audio(audioCandidates[candidateIndex]);
    audio.loop = true;
    audio.volume = volume;
    audio.muted = isMuted;

    // Handle missing or erroring mp3 by trying next candidate or synthesizer
    audio.addEventListener('error', () => {
      candidateIndex++;
      if (candidateIndex < audioCandidates.length) {
        audio.src = audioCandidates[candidateIndex];
        audio.load();
        if (isPlayingRef.current) {
          audio.play().catch(() => {
            // Wait for next error event or interaction
          });
        }
      } else {
        // Gracefully switch to synthesized melody
        if (isPlayingRef.current) {
          startSynthesizer();
        }
      }
    });

    audio.addEventListener('playing', () => {
      setIsSynthesized(false);
      stopSynthesizer();
    });

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
      stopSynthesizer();
    };
  }, []);

  const startMusic = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    isPlayingRef.current = true;

    try {
      if (audioRef.current) {
        await audioRef.current.play();
        setIsSynthesized(false);
      }
    } catch {
      // Browser autoplay policy or missing file -> run synthesized music box
      startSynthesizer();
    }
  };

  const togglePlay = async () => {
    if (isPlaying) {
      setIsPlaying(false);
      isPlayingRef.current = false;
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopSynthesizer();
    } else {
      setIsPlaying(true);
      isPlayingRef.current = true;
      try {
        if (audioRef.current && !isSynthesized) {
          await audioRef.current.play();
        } else {
          startSynthesizer();
        }
      } catch {
        startSynthesizer();
      }
    }
  };

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  const setVolume = (v: number) => {
    const clamped = Math.max(0, Math.min(1, v));
    setVolumeState(clamped);
    if (clamped > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  // Sound Effects
  const playSfx = (type: 'pop' | 'sparkle' | 'chime' | 'boing') => {
    if (isMuted || volume === 0) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const sfxVol = Math.min(volume * 0.4, 0.25);

      if (type === 'pop') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(sfxVol, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      } else if (type === 'sparkle') {
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
          const sOsc = ctx.createOscillator();
          const sGain = ctx.createGain();
          sOsc.type = 'sine';
          sOsc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.05);
          sGain.gain.setValueAtTime(sfxVol * 0.6, ctx.currentTime + idx * 0.05);
          sGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.05 + 0.15);
          sOsc.connect(sGain);
          sGain.connect(ctx.destination);
          sOsc.start(ctx.currentTime + idx * 0.05);
          sOsc.stop(ctx.currentTime + idx * 0.05 + 0.2);
        });
      } else if (type === 'chime') {
        // Victory fanfare / certificate chime
        const chords = [
          [523.25, 659.25, 783.99],
          [587.33, 739.99, 880.00],
          [659.25, 830.61, 987.77],
          [1046.50, 1318.51, 1567.98]
        ];
        chords.forEach((chord, i) => {
          chord.forEach(freq => {
            const cOsc = ctx.createOscillator();
            const cGain = ctx.createGain();
            cOsc.type = 'triangle';
            cOsc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.15);
            cGain.gain.setValueAtTime(sfxVol * 0.5, ctx.currentTime + i * 0.15);
            cGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.15 + 0.4);
            cOsc.connect(cGain);
            cGain.connect(ctx.destination);
            cOsc.start(ctx.currentTime + i * 0.15);
            cOsc.stop(ctx.currentTime + i * 0.15 + 0.45);
          });
        });
      } else if (type === 'boing') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(250, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(500, ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(sfxVol, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
      }
    } catch {
      // Audio context error handling
    }
  };

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        isMuted,
        volume,
        togglePlay,
        toggleMute,
        setVolume,
        startMusic,
        playSfx,
        isSynthesized
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

