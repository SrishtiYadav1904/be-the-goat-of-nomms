import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { useAudio } from '../context/AudioContext';
import { CuteGoatChef } from '../components/CuteGoatChef';
import { Sparkles, Calendar, User, Heart } from 'lucide-react';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const WelcomePage: React.FC = () => {
  const { user, setUser, setStep } = useGame();
  const { startMusic, playSfx } = useAudio();

  const [name, setName] = useState(user.name || '');
  const [birthMonth, setBirthMonth] = useState(user.birthMonth || 'January');
  const [birthDay, setBirthDay] = useState(user.birthDay || 1);
  const [errorMessage, setErrorMessage] = useState('');

  // Calculate days in the selected month
  const getDaysInMonth = (monthName: string): number => {
    const monthIndex = MONTHS.indexOf(monthName);
    if (monthIndex === 1) {
      // February (29 days for leap year consideration)
      return 29;
    }
    // 30 days: April (3), June (5), September (8), November (10)
    if ([3, 5, 8, 10].includes(monthIndex)) {
      return 30;
    }
    return 31;
  };

  const daysCount = getDaysInMonth(birthMonth);
  const daysArray = Array.from({ length: daysCount }, (_, i) => i + 1);

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = e.target.value;
    setBirthMonth(newMonth);
    const maxDays = getDaysInMonth(newMonth);
    if (birthDay > maxDays) {
      setBirthDay(maxDays);
    }
    playSfx('pop');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMessage('Please tell us your chef name so we can put it on your certificate! ♡');
      playSfx('boing');
      return;
    }

    if (name.trim().length > 30) {
      setErrorMessage('Chef name is a bit too long! Please keep it under 30 characters.');
      playSfx('boing');
      return;
    }

    setErrorMessage('');
    playSfx('sparkle');

    // Save user info
    setUser({
      name: name.trim(),
      birthMonth,
      birthDay
    });

    // Start background music (Binks' Sake) on this first interaction!
    startMusic();

    // Move to calculation page
    setStep('calculation');
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-between items-center py-6 px-4">
      {/* Central Welcome Card */}
      <div className="w-full max-w-xl bg-white/95 backdrop-blur-md rounded-3xl border-3 border-[#FFCCD5] p-6 sm:p-10 shadow-2xl shadow-pink-100 text-center my-auto transition-all animate-fadeIn">
        {/* Animated Cute Goat Chef */}
        <div className="flex justify-center -mt-3 mb-2 animate-gentle-float">
          <CuteGoatChef size={140} mood="nomm" withWhisk />
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#3D352E] tracking-tight mb-2">
          Welcome, Future GOAT Chef! 🐐
        </h2>

        {/* Supporting Text */}
        <p className="text-sm sm:text-base text-gray-600 font-medium max-w-md mx-auto mb-6">
          Before we begin our delicious adventure, tell me a little about yourself.
        </p>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-5 text-left max-w-md mx-auto">
          {/* Name Field */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5 flex items-center gap-1.5">
              <User size={14} className="text-[#FF758F]" />
              Your Chef Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. Master Chef Tripti"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                className="w-full px-4 py-3 rounded-2xl bg-[#FFFBF5] border-2 border-[#FFE5EC] focus:border-[#FF758F] focus:bg-white text-gray-800 placeholder-gray-400 font-medium outline-none transition-all shadow-inner"
                maxLength={30}
                required
              />
            </div>
          </div>

          {/* Birthday Fields */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5 flex items-center gap-1.5">
              <Calendar size={14} className="text-[#FF758F]" />
              Birthday Month & Day <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              {/* Month Dropdown */}
              <div>
                <select
                  value={birthMonth}
                  onChange={handleMonthChange}
                  className="w-full px-3.5 py-3 rounded-2xl bg-[#FFFBF5] border-2 border-[#FFE5EC] focus:border-[#FF758F] focus:bg-white text-gray-800 font-medium outline-none transition-all shadow-inner cursor-pointer"
                >
                  {MONTHS.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              {/* Day Dropdown */}
              <div>
                <select
                  value={birthDay}
                  onChange={(e) => {
                    setBirthDay(parseInt(e.target.value));
                    playSfx('pop');
                  }}
                  className="w-full px-3.5 py-3 rounded-2xl bg-[#FFFBF5] border-2 border-[#FFE5EC] focus:border-[#FF758F] focus:bg-white text-gray-800 font-medium outline-none transition-all shadow-inner cursor-pointer"
                >
                  {daysArray.map((d) => (
                    <option key={d} value={d}>
                      Day {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <p className="text-[11px] text-gray-400 mt-1 italic">
              Used for your personalized official chef certificate only!
            </p>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-bold text-center animate-shake">
              {errorMessage}
            </div>
          )}

          {/* Main Button: Let's Begin! ✨ */}
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FF758F] via-[#FF4D6D] to-[#D90429] hover:opacity-95 text-white font-extrabold text-lg shadow-xl shadow-pink-200 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Let's Begin!</span>
            <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
          </button>
        </form>
      </div>

      {/* Creator Credit At The Bottom */}
      <footer className="mt-6 mb-2 text-center select-none">
        <p className="font-hand text-xl sm:text-2xl text-gray-700 tracking-wide flex items-center justify-center gap-1.5">
          Made with <Heart size={16} className="text-[#FF758F] fill-[#FF758F] animate-pulse" /> by{' '}
          <span className="font-bold text-[#D90429] hover:underline cursor-default">
            Tripti D Goat (nomnom)
          </span>
        </p>
      </footer>
    </div>
  );
};
