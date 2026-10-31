import React from 'react';
import { useGame } from '../../context/GameContext';
import { useAudio } from '../../context/AudioContext';
import { RamenPreview } from './RamenPreview';
import {
  BlueBowlSticker,
  RedBowlSticker,
  PersianBlueFlowerBowlSticker,
  ThinNoodlesSticker,
  ThickNoodlesSticker,
  WavyNoodlesSticker,
  TonkotsuBrothSticker,
  MisoBrothSticker,
  SeaweedSticker,
  BoiledEggSticker,
  SunnyEggSticker,
  ChashuPorkSticker,
  NarutomakiSticker,
  GyozasSticker,
  SpringOnionSticker,
  MincedGarlicSticker,
  SpicyPowderSticker,
  PickledRadishSticker,
  CheeseSliceSticker,
  WoodenChopsticksSticker,
  StainlessChopsticksSticker,
  IchirakuSignSticker,
  HiddenLeafSticker,
  KakashiMaskSticker
} from '../stickers/FoodStickers';
import type {
  RamenBowl,
  RamenNoodles,
  RamenBroth,
  RamenTopping,
  RamenChopsticks
} from '../../types';
import { Undo2, RotateCcw, Sparkles, Check, X } from 'lucide-react';

const BOWLS = [
  { id: 'blue' as RamenBowl, label: 'Blue Waves Bowl', component: BlueBowlSticker },
  { id: 'red' as RamenBowl, label: 'Red Dragon Bowl', component: RedBowlSticker },
  { id: 'persian-blue-flower' as RamenBowl, label: 'White Bowl w/ Persian Blue Flowers', component: PersianBlueFlowerBowlSticker },
];

const NOODLES = [
  { id: 'thin' as RamenNoodles, label: 'Thin Hakata Noodles', component: ThinNoodlesSticker },
  { id: 'thick' as RamenNoodles, label: 'Thick Chewy Noodles', component: ThickNoodlesSticker },
  { id: 'wavy' as RamenNoodles, label: 'Wavy Curly Noodles', component: WavyNoodlesSticker },
];

const BROTHS = [
  { id: 'tonkotsu' as RamenBroth, label: 'Tonkotsu Broth', component: TonkotsuBrothSticker },
  { id: 'miso' as RamenBroth, label: 'Miso Broth', component: MisoBrothSticker },
];

const CHOPSTICKS = [
  { id: 'wooden' as RamenChopsticks, label: 'Wooden Chopsticks', component: WoodenChopsticksSticker },
  { id: 'stainless' as RamenChopsticks, label: 'Stainless Steel', component: StainlessChopsticksSticker },
];

const TOPPINGS = [
  { id: 'seaweed' as RamenTopping, label: 'Crispy Seaweed', component: SeaweedSticker },
  { id: 'boiled-egg' as RamenTopping, label: 'Molten Boiled Egg', component: BoiledEggSticker },
  { id: 'sunny-egg' as RamenTopping, label: 'Sunny Side Egg', component: SunnyEggSticker },
  { id: 'chashu' as RamenTopping, label: 'Chashu Pork', component: ChashuPorkSticker },
  { id: 'naruto' as RamenTopping, label: 'Narutomaki Swirls', component: NarutomakiSticker },
  { id: 'gyoza' as RamenTopping, label: 'Crispy Gyozas', component: GyozasSticker },
  { id: 'spring-onion' as RamenTopping, label: 'Spring Onions', component: SpringOnionSticker },
  { id: 'garlic' as RamenTopping, label: 'Minced Garlic', component: MincedGarlicSticker },
  { id: 'spicy-powder' as RamenTopping, label: 'Spicy Powder', component: SpicyPowderSticker },
  { id: 'radish' as RamenTopping, label: 'Pickled Radish', component: PickledRadishSticker },
  { id: 'cheese' as RamenTopping, label: 'Melted Cheese', component: CheeseSliceSticker },
];

export const RamenCustomizer: React.FC = () => {
  const {
    ramenState,
    setRamenBowl,
    setRamenNoodles,
    setRamenBroth,
    toggleRamenTopping,
    removeRamenTopping,
    setRamenChopsticks,
    undoRamen,
    resetRamen,
    canUndoRamen,
    setStep,
    triggerEasterEgg,
    showDialogue
  } = useGame();

  const { playSfx } = useAudio();

  const handleToppingToggle = (topping: RamenTopping) => {
    const isAdding = !ramenState.toppings.includes(topping);
    toggleRamenTopping(topping);
    playSfx('pop');

    if (isAdding) {
      if (topping === 'naruto') {
        showDialogue({
          id: 'naruto-topping',
          speaker: 'Naruto Uzumaki',
          anime: 'naruto',
          avatarBg: '#FF8811',
          dialogue: 'YESSS! Narutomaki! That swirl represents my entire ninja way! DATTEBAYO!',
          mood: 'excited'
        });
      } else if (topping === 'chashu') {
        showDialogue({
          id: 'choji-chashu',
          speaker: 'Teuchi (Ichiraku Chef)',
          anime: 'naruto',
          avatarBg: '#F39237',
          dialogue: 'Extra tender chashu pork, braised for four hours in our secret tare sauce!',
          mood: 'proud'
        });
      } else if (topping === 'boiled-egg') {
        showDialogue({
          id: 'hinata-egg',
          speaker: 'Hinata Hyuga',
          anime: 'naruto',
          avatarBg: '#7209B7',
          dialogue: 'The molten egg yolk looks so golden and warm... enjoy every bite!',
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
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
          🍜 Naruto World Customizer
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3D352E] tracking-tight mb-1">
          Let's Build Your Perfect Bowl of Ramen! 🍜
        </h2>
        <p className="text-sm sm:text-base text-gray-600 font-medium max-w-xl mx-auto">
          Every great ramen bowl tells a story. Make yours!
        </p>
      </div>

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Bowl, Broth, Noodles & Utensils */}
        <div className="lg:col-span-3 space-y-4 order-2 lg:order-1">
          {/* 1. Bowl Selection */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl border-2 border-[#FFE5EC] p-4 shadow-lg">
            <h3 className="text-xs font-extrabold text-gray-800 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>1. Ramen Bowl</span>
              <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                Pick 1
              </span>
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {BOWLS.map((b) => {
                const Icon = b.component;
                const isSelected = ramenState.bowl === b.id;
                return (
                  <button
                    key={b.id}
                    onClick={() => {
                      setRamenBowl(b.id);
                      playSfx('pop');
                    }}
                    className={`flex flex-col items-center p-2 rounded-2xl border-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#FFF8E7] border-[#FFB703] shadow-md scale-105'
                        : 'bg-white border-gray-100 hover:border-amber-200'
                    }`}
                    title={b.label}
                  >
                    <Icon size={42} />
                    <span className="text-[9px] font-bold text-gray-700 mt-1 text-center line-clamp-2">
                      {b.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Broth (Tetra Pack Stickers) */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl border-2 border-[#FFE5EC] p-4 shadow-lg">
            <h3 className="text-xs font-extrabold text-gray-800 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>2. Broth Base</span>
              <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                Tetra Packs
              </span>
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {BROTHS.map((br) => {
                const Icon = br.component;
                const isSelected = ramenState.broth === br.id;
                return (
                  <button
                    key={br.id}
                    onClick={() => {
                      setRamenBroth(br.id);
                      playSfx('pop');
                    }}
                    className={`flex flex-col items-center p-2 rounded-2xl border-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#FFF8E7] border-[#FFB703] shadow-md scale-105'
                        : 'bg-white border-gray-100 hover:border-amber-200'
                    }`}
                  >
                    <Icon size={46} />
                    <span className="text-[10px] font-bold text-gray-800 mt-1">
                      {br.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Noodles & Chopsticks */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl border-2 border-[#FFE5EC] p-4 shadow-lg space-y-3">
            <div>
              <h3 className="text-xs font-extrabold text-gray-800 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>3. Noodles</span>
                <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                  Pick 1
                </span>
              </h3>
              <div className="grid grid-cols-3 gap-1.5">
                {NOODLES.map((n) => {
                  const Icon = n.component;
                  const isSelected = ramenState.noodles === n.id;
                  return (
                    <button
                      key={n.id}
                      onClick={() => {
                        setRamenNoodles(n.id);
                        playSfx('pop');
                      }}
                      className={`flex flex-col items-center p-2 rounded-xl border-2 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#FFF8E7] border-[#FFB703] shadow-sm'
                          : 'bg-white border-gray-100 hover:border-amber-200'
                      }`}
                    >
                      <Icon size={34} />
                      <span className="text-[9px] font-bold text-gray-700 mt-1 text-center">
                        {n.label.split(' ')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 border-t border-gray-100">
              <h3 className="text-xs font-extrabold text-gray-800 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>4. Chopsticks</span>
                <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                  Beside Bowl
                </span>
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {CHOPSTICKS.map((c) => {
                  const Icon = c.component;
                  const isSelected = ramenState.chopsticks === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => {
                        setRamenChopsticks(c.id);
                        playSfx('pop');
                      }}
                      className={`flex flex-col items-center p-2 rounded-xl border-2 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#FFF8E7] border-[#FFB703] shadow-sm'
                          : 'bg-white border-gray-100 hover:border-amber-200'
                      }`}
                    >
                      <Icon size={34} />
                      <span className="text-[10px] font-bold text-gray-700 mt-1 text-center">
                        {c.label.split(' ')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Action Tools: Undo, Reset */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl border-2 border-[#FFE5EC] p-3 shadow-lg flex items-center justify-around gap-2">
            <button
              onClick={() => {
                undoRamen();
                playSfx('pop');
              }}
              disabled={!canUndoRamen}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl font-bold text-xs transition-all ${
                canUndoRamen
                  ? 'bg-gray-100 hover:bg-gray-200 text-gray-700 shadow-sm cursor-pointer'
                  : 'bg-gray-50 text-gray-300 cursor-not-allowed'
              }`}
            >
              <Undo2 size={16} /> Undo
            </button>

            <button
              onClick={() => {
                resetRamen();
                playSfx('boing');
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold text-xs transition-all shadow-sm cursor-pointer"
            >
              <RotateCcw size={16} /> Reset
            </button>
          </div>

          {/* Naruto Easter Eggs */}
          <div className="bg-gradient-to-br from-[#FFF8E7] to-[#FFE5EC] rounded-3xl border-2 border-[#FFD166] p-4 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-extrabold text-[#D90429] tracking-wide flex items-center gap-1">
                🍃 Konoha Easter Eggs
              </span>
              <span className="text-[10px] text-gray-500 italic">Tap stickers!</span>
            </div>
            <div className="flex items-center justify-around gap-2">
              <button
                onClick={() => {
                  triggerEasterEgg('ichiraku-sign');
                  playSfx('pop');
                }}
                className="sticker-badge bg-white p-2 rounded-2xl border border-amber-200 hover:border-amber-400 cursor-pointer"
                title="Ichiraku Ramen Shop Sign"
              >
                <IchirakuSignSticker size={38} />
              </button>

              <button
                onClick={() => {
                  triggerEasterEgg('hidden-leaf');
                  playSfx('pop');
                }}
                className="sticker-badge bg-white p-2 rounded-2xl border border-amber-200 hover:border-amber-400 cursor-pointer"
                title="Hidden Leaf Ninja Symbol"
              >
                <HiddenLeafSticker size={38} />
              </button>

              <button
                onClick={() => {
                  triggerEasterEgg('kakashi-mask');
                  playSfx('pop');
                }}
                className="sticker-badge bg-white p-2 rounded-2xl border border-amber-200 hover:border-amber-400 cursor-pointer"
                title="Kakashi Sensei Mask"
              >
                <KakashiMaskSticker size={38} />
              </button>
            </div>
          </div>
        </div>

        {/* Centerpiece: Dynamic Live Ramen Canvas */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2">
          <div className="w-full bg-gradient-to-b from-white to-[#FFFDF7] rounded-3xl border-3 border-[#FFD166] p-6 shadow-2xl relative flex flex-col items-center justify-center min-h-[420px]">
            {/* Live Status Pill */}
            <div className="absolute top-4 left-4 bg-white/90 border border-amber-200 px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Live Ramen Preview</span>
            </div>

            {/* Ramen Master Assistant */}
            <div className="absolute top-4 right-4 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Chef Naruto Presenting
            </div>

            {/* Prominent Giant Ramen Preview */}
            <div className="my-4">
              <RamenPreview
                bowl={ramenState.bowl}
                noodles={ramenState.noodles}
                broth={ramenState.broth}
                toppings={ramenState.toppings}
                chopsticks={ramenState.chopsticks}
                size={340}
                isInteractive={true}
                onRemoveTopping={(t) => {
                  removeRamenTopping(t);
                  playSfx('pop');
                }}
              />
            </div>

            {/* Selected Ingredients Pill List */}
            <div className="w-full mt-2 pt-3 border-t border-amber-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Active Toppings ({ramenState.toppings.length})
                </span>
                <span className="text-[11px] text-gray-400">
                  Tap topping on ramen or tag to remove
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 max-h-20 overflow-y-auto">
                {ramenState.toppings.length === 0 ? (
                  <span className="text-xs text-gray-400 italic">
                    No toppings yet! Tap any sticker to add delicious toppings!
                  </span>
                ) : (
                  ramenState.toppings.map((t) => {
                    const option = TOPPINGS.find((o) => o.id === t);
                    return (
                      <span
                        key={t}
                        onClick={() => {
                          removeRamenTopping(t);
                          playSfx('pop');
                        }}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-[#FFF3CD] text-[#856404] hover:bg-amber-200 transition-colors cursor-pointer"
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
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FFB703] via-[#FB8500] to-[#E63946] hover:opacity-95 text-white font-extrabold text-lg shadow-xl shadow-amber-200 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Finish & Present My Ramen!</span>
              <Sparkles size={20} />
            </button>
          </div>
        </div>

        {/* Right Column: Toppings Sticker Rack */}
        <div className="lg:col-span-3 order-3">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl border-2 border-[#FFE5EC] p-5 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-extrabold text-gray-800 uppercase tracking-wider">
                5. Ramen Toppings
              </h3>
              <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                Select Any
              </span>
            </div>

            {/* Sticker Grid / Rack */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 max-h-[520px] overflow-y-auto pr-1">
              {TOPPINGS.map((top) => {
                const Icon = top.component;
                const isSelected = ramenState.toppings.includes(top.id);
                return (
                  <button
                    key={top.id}
                    onClick={() => handleToppingToggle(top.id)}
                    className={`relative p-3 rounded-2xl border-2 transition-all flex flex-col items-center justify-center cursor-pointer ${
                      isSelected
                        ? 'bg-[#FFF8E7] border-[#FFB703] shadow-md scale-105 ring-2 ring-amber-200'
                        : 'bg-white border-gray-100 hover:border-amber-200 hover:bg-amber-50/40 hover:scale-[1.02]'
                    }`}
                  >
                    {/* Selected Check Badge */}
                    {isSelected && (
                      <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-[#FFB703] text-white flex items-center justify-center text-[10px] shadow-sm">
                        <Check size={12} strokeWidth={3} />
                      </div>
                    )}
                    <Icon size={46} className="my-1 drop-shadow-sm" />
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
