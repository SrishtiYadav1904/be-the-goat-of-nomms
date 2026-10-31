import React from 'react';
import { useGame } from '../../context/GameContext';
import { useAudio } from '../../context/AudioContext';
import { CakePreview } from './CakePreview';
import {
  CircleBaseSticker,
  SquareBaseSticker,
  HeartBaseSticker,
  ChocolateCreamSticker,
  VanillaCreamSticker,
  FruitSlicesSticker,
  ChocolateChipsSticker,
  BlueberryJamSticker,
  CreamCheeseSticker,
  WhippedCreamSticker,
  SprinklesSticker,
  StrawHatSticker,
  ChopperHatSticker,
  SanjiUtensilsSticker,
  BigMomCandySticker
} from '../stickers/FoodStickers';
import type { CakeBase, CakeTopping } from '../../types';
import { Undo2, RotateCcw, Sparkles, Check, X } from 'lucide-react';

interface BaseOption {
  id: CakeBase;
  label: string;
  component: React.ComponentType<{ size?: number; className?: string }>;
}

interface ToppingOption {
  id: CakeTopping;
  label: string;
  component: React.ComponentType<{ size?: number; className?: string }>;
}

const CAKE_BASES: BaseOption[] = [
  { id: 'circle', label: 'Circle Base', component: CircleBaseSticker },
  { id: 'square', label: 'Square Base', component: SquareBaseSticker },
  { id: 'heart', label: 'Heart Base', component: HeartBaseSticker },
];

const CAKE_TOPPINGS: ToppingOption[] = [
  { id: 'chocolate-cream', label: 'Chocolate Cream', component: ChocolateCreamSticker },
  { id: 'vanilla-cream', label: 'Vanilla Cream', component: VanillaCreamSticker },
  { id: 'fruit-slices', label: 'Fruit Slices', component: FruitSlicesSticker },
  { id: 'chocolate-chips', label: 'Chocolate Chips', component: ChocolateChipsSticker },
  { id: 'blueberry-jam', label: 'Blueberry Jam', component: BlueberryJamSticker },
  { id: 'cream-cheese', label: 'Cream Cheese', component: CreamCheeseSticker },
  { id: 'whipped-cream', label: 'Whipped Cream', component: WhippedCreamSticker },
  { id: 'sprinkles', label: 'Sprinkles', component: SprinklesSticker },
];

export const CakeCustomizer: React.FC = () => {
  const {
    cakeState,
    setCakeBase,
    toggleCakeTopping,
    removeCakeTopping,
    undoCake,
    resetCake,
    canUndoCake,
    setStep,
    triggerEasterEgg,
    showDialogue
  } = useGame();

  const { playSfx } = useAudio();

  const handleBaseChange = (base: CakeBase) => {
    setCakeBase(base);
    playSfx('pop');
    if (base === 'heart') {
      showDialogue({
        id: 'sanji-heart',
        speaker: 'Sanji',
        anime: 'one-piece',
        avatarBg: '#35A7FF',
        dialogue: 'A heart-shaped base! Magnifique! Nami-san and Robin-chan will be enchanted! ♡',
        mood: 'happy'
      });
    }
  };

  const handleToppingToggle = (topping: CakeTopping) => {
    const isAdding = !cakeState.toppings.includes(topping);
    toggleCakeTopping(topping);
    playSfx('pop');

    // Occasional fun character reaction
    if (isAdding) {
      if (topping === 'chocolate-cream') {
        showDialogue({
          id: 'luffy-choc',
          speaker: 'Monkey D. Luffy',
          anime: 'one-piece',
          avatarBg: '#FF5964',
          dialogue: 'OOOOH! Chocolate! Is it sweeter than pirate meat?! LET ME LICK THE BOWL!',
          mood: 'hungry'
        });
      } else if (topping === 'whipped-cream') {
        showDialogue({
          id: 'chopper-cream',
          speaker: 'Tony Tony Chopper',
          anime: 'one-piece',
          avatarBg: '#FF99C8',
          dialogue: 'SUUUUPER! Look at that giant whipped cream tower! It is so fluffy!',
          mood: 'excited'
        });
      } else if (topping === 'blueberry-jam') {
        showDialogue({
          id: 'nami-berries',
          speaker: 'Nami',
          anime: 'one-piece',
          avatarBg: '#FF9F1C',
          dialogue: 'Blueberry jam adds exquisite elegance! Make it look like a million berries!',
          mood: 'happy'
        });
      }
    }
  };

  const handleFinish = () => {
    playSfx('sparkle');
    setStep('presentation');
  };

  return (
    <div className="py-6 px-4 max-w-7xl mx-auto">
      {/* Header & Subheading */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider mb-2">
          🏴‍☠️ One Piece World Customizer
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3D352E] tracking-tight mb-1">
          Let's Decorate Your Dream Cake! 🎂
        </h2>
        <p className="text-sm sm:text-base text-gray-600 font-medium max-w-xl mx-auto">
          Choose your favorite base and toppings to create your masterpiece.
        </p>
      </div>

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Bases & Controls */}
        <div className="lg:col-span-3 space-y-5 order-2 lg:order-1">
          {/* Base Selection Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl border-2 border-[#FFE5EC] p-5 shadow-lg">
            <h3 className="text-sm font-extrabold text-gray-800 uppercase tracking-wider mb-3 flex items-center justify-between">
              <span>1. Cake Base</span>
              <span className="text-[11px] font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-full">
                Choose 1
              </span>
            </h3>

            <div className="grid grid-cols-3 gap-2">
              {CAKE_BASES.map((b) => {
                const Icon = b.component;
                const isSelected = cakeState.base === b.id;
                return (
                  <button
                    key={b.id}
                    onClick={() => handleBaseChange(b.id)}
                    className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#FFF0F3] border-[#FF758F] shadow-md scale-105'
                        : 'bg-white border-gray-100 hover:border-pink-200 hover:bg-pink-50/40'
                    }`}
                  >
                    <Icon size={48} className="transition-transform group-hover:scale-110" />
                    <span className="text-[11px] font-bold text-gray-700 mt-2 text-center leading-tight">
                      {b.label}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#FF758F] mt-1" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Tools: Undo, Reset */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl border-2 border-[#FFE5EC] p-4 shadow-lg flex items-center justify-around gap-2">
            <button
              onClick={() => {
                undoCake();
                playSfx('pop');
              }}
              disabled={!canUndoCake}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-2xl font-bold text-xs transition-all ${
                canUndoCake
                  ? 'bg-gray-100 hover:bg-gray-200 text-gray-700 shadow-sm cursor-pointer'
                  : 'bg-gray-50 text-gray-300 cursor-not-allowed'
              }`}
            >
              <Undo2 size={16} /> Undo
            </button>

            <button
              onClick={() => {
                resetCake();
                playSfx('boing');
              }}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold text-xs transition-all shadow-sm cursor-pointer"
            >
              <RotateCcw size={16} /> Reset
            </button>
          </div>

          {/* One Piece Easter Egg Interactive Tray */}
          <div className="bg-gradient-to-br from-[#FFF5F7] to-[#FFE5EC] rounded-3xl border-2 border-[#FFCCD5] p-4 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-extrabold text-[#D90429] tracking-wide flex items-center gap-1">
                🏴‍☠️ Straw Hat Easter Eggs
              </span>
              <span className="text-[10px] text-gray-500 italic">Tap stickers!</span>
            </div>
            <p className="text-[11px] text-gray-600 mb-3">
              Tap any treasure to hear from the crew:
            </p>
            <div className="flex items-center justify-between gap-2">
              <button
                onClick={() => {
                  triggerEasterEgg('straw-hat');
                  playSfx('pop');
                }}
                className="sticker-badge bg-white p-2 rounded-2xl border border-pink-200 hover:border-pink-400 cursor-pointer"
                title="Luffy's Straw Hat"
              >
                <StrawHatSticker size={42} />
              </button>

              <button
                onClick={() => {
                  triggerEasterEgg('chopper-hat');
                  playSfx('pop');
                }}
                className="sticker-badge bg-white p-2 rounded-2xl border border-pink-200 hover:border-pink-400 cursor-pointer"
                title="Chopper's Hat"
              >
                <ChopperHatSticker size={42} />
              </button>

              <button
                onClick={() => {
                  triggerEasterEgg('sanji-utensils');
                  playSfx('pop');
                }}
                className="sticker-badge bg-white p-2 rounded-2xl border border-pink-200 hover:border-pink-400 cursor-pointer"
                title="Sanji's Cooking Utensils"
              >
                <SanjiUtensilsSticker size={42} />
              </button>

              <button
                onClick={() => {
                  triggerEasterEgg('big-mom-candy');
                  playSfx('pop');
                }}
                className="sticker-badge bg-white p-2 rounded-2xl border border-pink-200 hover:border-pink-400 cursor-pointer"
                title="Big Mom's Candy"
              >
                <BigMomCandySticker size={42} />
              </button>
            </div>
          </div>
        </div>

        {/* Centerpiece: Dynamic Live Cake Canvas */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2">
          <div className="w-full bg-gradient-to-b from-white to-[#FFF5F7] rounded-3xl border-3 border-[#FFCCD5] p-6 shadow-2xl relative flex flex-col items-center justify-center min-h-[420px]">
            {/* Live Status Pill */}
            <div className="absolute top-4 left-4 bg-white/90 border border-pink-200 px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live Cake Preview</span>
            </div>

            {/* Cake Mascot Assistant */}
            <div className="absolute top-4 right-4 text-xs font-bold text-[#FF758F] bg-[#FFF0F3] px-3 py-1 rounded-full border border-pink-200">
              Chef Sanji Presenting
            </div>

            {/* Prominent Giant Cake Preview */}
            <div className="my-4">
              <CakePreview
                base={cakeState.base}
                toppings={cakeState.toppings}
                size={340}
                isInteractive={true}
                onRemoveTopping={(t) => {
                  removeCakeTopping(t);
                  playSfx('pop');
                }}
              />
            </div>

            {/* Selected Ingredients Pill List */}
            <div className="w-full mt-2 pt-3 border-t border-pink-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Active Toppings ({cakeState.toppings.length})
                </span>
                <span className="text-[11px] text-gray-400">
                  Tap topping on cake or tag to remove
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 max-h-20 overflow-y-auto">
                {cakeState.toppings.length === 0 ? (
                  <span className="text-xs text-gray-400 italic">
                    No toppings yet! Tap any sticker below to decorate!
                  </span>
                ) : (
                  cakeState.toppings.map((t) => {
                    const option = CAKE_TOPPINGS.find((o) => o.id === t);
                    return (
                      <span
                        key={t}
                        onClick={() => {
                          removeCakeTopping(t);
                          playSfx('pop');
                        }}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-[#FFE5EC] text-[#D90429] hover:bg-rose-200 transition-colors cursor-pointer"
                      >
                        {option?.label || t}
                        <X size={12} />
                      </span>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          {/* Finish & Present Button */}
          <div className="w-full max-w-md mt-6">
            <button
              onClick={handleFinish}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FF758F] via-[#FF4D6D] to-[#D90429] hover:opacity-95 text-white font-extrabold text-lg shadow-xl shadow-pink-200 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Finish & Present My Cake!</span>
              <Sparkles size={20} />
            </button>
          </div>
        </div>

        {/* Right Column: Toppings Sticker Rack */}
        <div className="lg:col-span-3 order-3">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl border-2 border-[#FFE5EC] p-5 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-extrabold text-gray-800 uppercase tracking-wider">
                2. Cake Toppings
              </h3>
              <span className="text-[11px] font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-full">
                Select Any
              </span>
            </div>

            {/* Sticker Grid / Rack */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-1">
              {CAKE_TOPPINGS.map((top) => {
                const Icon = top.component;
                const isSelected = cakeState.toppings.includes(top.id);
                return (
                  <button
                    key={top.id}
                    onClick={() => handleToppingToggle(top.id)}
                    className={`relative p-3 rounded-2xl border-2 transition-all flex flex-col items-center justify-center cursor-pointer ${
                      isSelected
                        ? 'bg-[#FFF0F3] border-[#FF758F] shadow-md scale-105 ring-2 ring-pink-200'
                        : 'bg-white border-gray-100 hover:border-pink-200 hover:bg-pink-50/40 hover:scale-[1.02]'
                    }`}
                  >
                    {/* Selected Check Badge */}
                    {isSelected && (
                      <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-[#FF758F] text-white flex items-center justify-center text-[10px] shadow-sm">
                        <Check size={12} strokeWidth={3} />
                      </div>
                    )}
                    <Icon size={48} className="my-1 drop-shadow-sm" />
                    <span className="text-[11px] font-bold text-gray-700 text-center leading-tight mt-1">
                      {top.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
