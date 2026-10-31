import React from 'react';

interface StickerProps {
  size?: number;
  className?: string;
}

// ----------------------------------------------------
// CAKE BASES
// ----------------------------------------------------
export const CircleBaseSticker: React.FC<StickerProps> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
    {/* White sticker border */}
    <ellipse cx="50" cy="55" rx="42" ry="22" fill="#FFFFFF" />
    <path d="M8 55 L8 68 C8 84 92 84 92 68 L92 55 Z" fill="#FFFFFF" />
    {/* Cake Body */}
    <path d="M12 55 L12 68 C12 80 88 80 88 68 L88 55 Z" fill="#FDE2E4" stroke="#4A3E3D" strokeWidth="2.5" />
    <ellipse cx="50" cy="55" rx="38" ry="18" fill="#FFF0F3" stroke="#4A3E3D" strokeWidth="2.5" />
    {/* Frosting rim */}
    <ellipse cx="50" cy="54" rx="33" ry="14" fill="#FFE5EC" />
    {/* Cream dollops */}
    <circle cx="22" cy="52" r="4" fill="#FFFFFF" stroke="#4A3E3D" strokeWidth="1.5" />
    <circle cx="50" cy="40" r="4" fill="#FFFFFF" stroke="#4A3E3D" strokeWidth="1.5" />
    <circle cx="78" cy="52" r="4" fill="#FFFFFF" stroke="#4A3E3D" strokeWidth="1.5" />
  </svg>
);

export const SquareBaseSticker: React.FC<StickerProps> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
    {/* White sticker border */}
    <path d="M16 40 L50 24 L84 40 L50 56 Z" fill="#FFFFFF" />
    <path d="M16 40 L50 56 L50 78 L16 62 Z" fill="#FFFFFF" />
    <path d="M84 40 L50 56 L50 78 L84 62 Z" fill="#FFFFFF" />
    {/* Isometric Cake Box */}
    <path d="M18 42 L50 58 L50 76 L18 60 Z" fill="#F4ACB7" stroke="#4A3E3D" strokeWidth="2.5" />
    <path d="M82 42 L50 58 L50 76 L82 60 Z" fill="#FFCAD4" stroke="#4A3E3D" strokeWidth="2.5" />
    <path d="M18 42 L50 26 L82 42 L50 58 Z" fill="#FFE5EC" stroke="#4A3E3D" strokeWidth="2.5" />
    {/* Top decoration */}
    <path d="M50 34 L70 44 L50 54 L30 44 Z" fill="#FFF0F3" />
  </svg>
);

export const HeartBaseSticker: React.FC<StickerProps> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
    {/* White sticker border */}
    <path
      d="M50 82 C16 60 10 32 30 22 C42 16 48 24 50 28 C52 24 58 16 70 22 C90 32 84 60 50 82 Z"
      fill="#FFFFFF"
    />
    {/* Cake Heart Body */}
    <path
      d="M50 80 C20 60 14 34 32 24 C43 18 48 26 50 30 C52 26 57 18 68 24 C86 34 80 60 50 80 Z"
      fill="#FFCCD5"
      stroke="#4A3E3D"
      strokeWidth="2.5"
    />
    <path
      d="M50 74 C26 56 20 38 34 29 C43 23 48 30 50 33 C52 30 57 23 66 29 C80 38 74 56 50 74 Z"
      fill="#FFF0F3"
    />
    {/* Cute icing hearts */}
    <circle cx="42" cy="42" r="3" fill="#FF758F" />
    <circle cx="58" cy="42" r="3" fill="#FF758F" />
  </svg>
);

// ----------------------------------------------------
// CAKE TOPPINGS
// ----------------------------------------------------
export const ChocolateCreamSticker: React.FC<StickerProps> = ({ size = 56, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Swirl of glossy chocolate */}
    <ellipse cx="40" cy="56" rx="30" ry="14" fill="#FFFFFF" />
    <ellipse cx="40" cy="54" rx="26" ry="12" fill="#5C3D2E" stroke="#2B1810" strokeWidth="2" />
    <path
      d="M40 18 C30 28 20 38 24 50 C26 54 54 54 56 50 C60 38 50 28 40 18 Z"
      fill="#7F4F24"
      stroke="#2B1810"
      strokeWidth="2"
    />
    <path d="M40 24 Q36 34 40 44" stroke="#A68A64" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const VanillaCreamSticker: React.FC<StickerProps> = ({ size = 56, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    <ellipse cx="40" cy="56" rx="30" ry="14" fill="#4A3E3D" />
    <ellipse cx="40" cy="54" rx="28" ry="12" fill="#FFFFFF" stroke="#4A3E3D" strokeWidth="2" />
    <path
      d="M40 16 C30 26 22 36 24 48 C26 54 54 54 56 48 C58 36 50 26 40 16 Z"
      fill="#FFFDF7"
      stroke="#4A3E3D"
      strokeWidth="2"
    />
    <path d="M40 22 Q36 32 38 42" stroke="#FFF1A8" strokeWidth="2.5" strokeLinecap="round" />
    {/* Tiny vanilla specks */}
    <circle cx="34" cy="38" r="1" fill="#D4A373" />
    <circle cx="46" cy="34" r="1" fill="#D4A373" />
    <circle cx="42" cy="46" r="1" fill="#D4A373" />
  </svg>
);

export const FruitSlicesSticker: React.FC<StickerProps> = ({ size = 56, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Strawberry half & kiwi */}
    <g transform="translate(10, 15)">
      {/* Strawberry */}
      <path
        d="M24 10 C14 10 10 24 24 40 C38 24 34 10 24 10 Z"
        fill="#FF4D6D"
        stroke="#4A3E3D"
        strokeWidth="2"
      />
      <path d="M24 16 C18 16 16 26 24 34 C32 26 30 16 24 16 Z" fill="#FFA5AB" />
      {/* Leaves */}
      <path d="M20 10 L24 6 L28 10 Z" fill="#52B788" stroke="#4A3E3D" strokeWidth="1.5" />
    </g>
    <g transform="translate(36, 28)">
      {/* Kiwi slice */}
      <circle cx="16" cy="16" r="14" fill="#74C69D" stroke="#4A3E3D" strokeWidth="2" />
      <circle cx="16" cy="16" r="9" fill="#D8F3DC" />
      <circle cx="16" cy="16" r="3" fill="#FFF" />
      {/* Kiwi seeds */}
      <circle cx="16" cy="10" r="1" fill="#2D3748" />
      <circle cx="21" cy="13" r="1" fill="#2D3748" />
      <circle cx="21" cy="19" r="1" fill="#2D3748" />
      <circle cx="16" cy="22" r="1" fill="#2D3748" />
      <circle cx="11" cy="19" r="1" fill="#2D3748" />
      <circle cx="11" cy="13" r="1" fill="#2D3748" />
    </g>
  </svg>
);

export const ChocolateChipsSticker: React.FC<StickerProps> = ({ size = 56, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Chip 1 */}
    <path
      d="M28 22 C22 28 18 42 28 44 C38 42 34 28 28 22 Z"
      fill="#4A2810"
      stroke="#221208"
      strokeWidth="2"
    />
    <path d="M27 28 Q24 34 26 40" stroke="#794628" strokeWidth="1.5" />
    {/* Chip 2 */}
    <path
      d="M52 30 C46 36 42 50 52 52 C62 50 58 36 52 30 Z"
      fill="#4A2810"
      stroke="#221208"
      strokeWidth="2"
    />
    {/* Chip 3 */}
    <path
      d="M38 46 C34 50 30 60 38 62 C46 60 42 50 38 46 Z"
      fill="#4A2810"
      stroke="#221208"
      strokeWidth="2"
    />
  </svg>
);

export const BlueberryJamSticker: React.FC<StickerProps> = ({ size = 56, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Indigo glossy dollop */}
    <ellipse cx="40" cy="46" rx="26" ry="16" fill="#3A0CA3" stroke="#1D0652" strokeWidth="2" />
    <ellipse cx="40" cy="44" rx="20" ry="11" fill="#4361EE" />
    {/* Whole blueberries */}
    <circle cx="28" cy="38" r="8" fill="#3F37C9" stroke="#1D0652" strokeWidth="1.5" />
    <circle cx="26" cy="36" r="2" fill="#7209B7" />
    <circle cx="48" cy="36" r="9" fill="#3F37C9" stroke="#1D0652" strokeWidth="1.5" />
    <circle cx="46" cy="34" r="2.5" fill="#7209B7" />
    <circle cx="38" cy="46" r="7" fill="#4895EF" stroke="#1D0652" strokeWidth="1.5" />
  </svg>
);

export const CreamCheeseSticker: React.FC<StickerProps> = ({ size = 56, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Soft rectangular cream block */}
    <path
      d="M20 32 L50 20 L68 32 L38 44 Z"
      fill="#FFFBEA"
      stroke="#4A3E3D"
      strokeWidth="2"
    />
    <path
      d="M20 32 L38 44 L38 58 L20 46 Z"
      fill="#FFEAA7"
      stroke="#4A3E3D"
      strokeWidth="2"
    />
    <path
      d="M68 32 L38 44 L38 58 L68 46 Z"
      fill="#FFF2CC"
      stroke="#4A3E3D"
      strokeWidth="2"
    />
    <circle cx="42" cy="30" r="3" fill="#F4D03F" opacity="0.6" />
  </svg>
);

export const WhippedCreamSticker: React.FC<StickerProps> = ({ size = 56, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Fluffy tiered dollop with cherry */}
    <ellipse cx="40" cy="60" rx="26" ry="10" fill="#E9ECEF" stroke="#4A3E3D" strokeWidth="2" />
    <ellipse cx="40" cy="50" rx="20" ry="8" fill="#F8F9FA" stroke="#4A3E3D" strokeWidth="2" />
    <ellipse cx="40" cy="40" rx="14" ry="6" fill="#FFFFFF" stroke="#4A3E3D" strokeWidth="2" />
    {/* Top swirl peak */}
    <path d="M40 38 Q42 26 46 22" stroke="#4A3E3D" strokeWidth="2" fill="none" />
    {/* Glossy Red Cherry */}
    <circle cx="46" cy="24" r="7" fill="#D90429" stroke="#4A3E3D" strokeWidth="1.5" />
    <path d="M46 17 Q54 10 50 6" stroke="#2B9348" strokeWidth="2" fill="none" />
    <circle cx="44" cy="22" r="2" fill="#FFFFFF" />
  </svg>
);

export const SprinklesSticker: React.FC<StickerProps> = ({ size = 56, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Colorful pill sprinkles and star sprinkles */}
    <rect x="20" y="24" width="14" height="5" rx="2.5" fill="#FF477E" transform="rotate(-25 20 24)" />
    <rect x="44" y="20" width="14" height="5" rx="2.5" fill="#3A86FF" transform="rotate(35 44 20)" />
    <rect x="25" y="44" width="14" height="5" rx="2.5" fill="#FFBE0B" transform="rotate(15 25 44)" />
    <rect x="50" y="46" width="14" height="5" rx="2.5" fill="#8338EC" transform="rotate(-40 50 46)" />
    <rect x="36" y="58" width="14" height="5" rx="2.5" fill="#06D6A0" transform="rotate(20 36 58)" />
    {/* Star sprinkle */}
    <path d="M38 32 L40 37 L45 38 L41 41 L42 46 L38 43 L34 46 L35 41 L31 38 L36 37 Z" fill="#FFE066" stroke="#4A3E3D" strokeWidth="1" />
  </svg>
);

// ----------------------------------------------------
// RAMEN BOWLS
// ----------------------------------------------------
export const BlueBowlSticker: React.FC<StickerProps> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
    {/* Ceramic foot */}
    <ellipse cx="50" cy="78" rx="24" ry="7" fill="#1D3557" stroke="#0B1B3D" strokeWidth="2" />
    {/* Bowl body */}
    <path
      d="M12 40 C14 74 86 74 88 40 Z"
      fill="#2A6F97"
      stroke="#0B1B3D"
      strokeWidth="2.5"
    />
    <ellipse cx="50" cy="40" rx="38" ry="14" fill="#61A5C2" stroke="#0B1B3D" strokeWidth="2.5" />
    {/* Traditional wave patterns */}
    <path d="M24 54 Q32 48 40 54 Q48 48 56 54 Q64 48 72 54" stroke="#A9D6E5" strokeWidth="2" fill="none" />
  </svg>
);

export const RedBowlSticker: React.FC<StickerProps> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
    {/* Ceramic foot */}
    <ellipse cx="50" cy="78" rx="24" ry="7" fill="#780000" stroke="#3D0000" strokeWidth="2" />
    {/* Bowl body */}
    <path
      d="M12 40 C14 74 86 74 88 40 Z"
      fill="#C1121F"
      stroke="#3D0000"
      strokeWidth="2.5"
    />
    <ellipse cx="50" cy="40" rx="38" ry="14" fill="#E63946" stroke="#3D0000" strokeWidth="2.5" />
    {/* Golden rim band */}
    <ellipse cx="50" cy="40" rx="36" ry="12" fill="none" stroke="#FFD166" strokeWidth="2" />
    {/* Dragon / flame accents */}
    <path d="M30 55 Q50 64 70 55" stroke="#FFD166" strokeWidth="2.5" strokeDasharray="3 3" fill="none" />
  </svg>
);

export const PersianBlueFlowerBowlSticker: React.FC<StickerProps> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
    {/* Ceramic foot */}
    <ellipse cx="50" cy="78" rx="24" ry="7" fill="#E2E8F0" stroke="#1E3A8A" strokeWidth="2" />
    {/* White porcelain body */}
    <path
      d="M12 40 C14 74 86 74 88 40 Z"
      fill="#FFFFFF"
      stroke="#1E3A8A"
      strokeWidth="2.5"
    />
    <ellipse cx="50" cy="40" rx="38" ry="14" fill="#F8FAFC" stroke="#1E3A8A" strokeWidth="2.5" />
    {/* Intricate Persian blue floral vine border around the rim */}
    <g stroke="#1D4ED8" strokeWidth="1.5" fill="none">
      {/* Wave vine */}
      <path d="M16 41 Q24 45 32 42 Q40 46 50 43 Q60 46 68 42 Q76 45 84 41" />
      {/* Persian floral petals along border */}
      <circle cx="24" cy="44" r="2.5" fill="#2563EB" />
      <circle cx="36" cy="43" r="2.5" fill="#2563EB" />
      <circle cx="50" cy="44" r="3" fill="#1D4ED8" />
      <circle cx="64" cy="43" r="2.5" fill="#2563EB" />
      <circle cx="76" cy="44" r="2.5" fill="#2563EB" />
      {/* Center lotus/flower emblem */}
      <path d="M46 60 Q50 54 54 60 Q50 66 46 60 Z" fill="#1E40AF" />
      <circle cx="50" cy="60" r="1.5" fill="#60A5FA" />
    </g>
  </svg>
);

// ----------------------------------------------------
// RAMEN NOODLES
// ----------------------------------------------------
export const ThinNoodlesSticker: React.FC<StickerProps> = ({ size = 56, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Neat bundle of delicate Hakata straight noodles */}
    <g stroke="#F4A261" strokeWidth="2" strokeLinecap="round">
      <path d="M16 26 L64 26" />
      <path d="M14 34 L66 34" />
      <path d="M16 42 L64 42" />
      <path d="M18 50 L62 50" />
      <path d="M22 58 L58 58" />
    </g>
    {/* Highlights */}
    <g stroke="#FFE8D6" strokeWidth="1.5" strokeLinecap="round">
      <path d="M20 25 L60 25" />
      <path d="M18 33 L62 33" />
      <path d="M20 41 L60 41" />
    </g>
  </svg>
);

export const ThickNoodlesSticker: React.FC<StickerProps> = ({ size = 56, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Hearty thick udon/ramen strands */}
    <g stroke="#E76F51" strokeWidth="5" strokeLinecap="round">
      <path d="M18 28 Q40 34 62 28" />
      <path d="M16 42 Q40 48 64 42" />
      <path d="M20 56 Q40 62 60 56" />
    </g>
    <g stroke="#FFE5B4" strokeWidth="2.5" strokeLinecap="round">
      <path d="M20 27 Q40 33 60 27" />
      <path d="M18 41 Q40 47 62 41" />
      <path d="M22 55 Q40 61 58 55" />
    </g>
  </svg>
);

export const WavyNoodlesSticker: React.FC<StickerProps> = ({ size = 56, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Classic bouncy wavy chijire noodles */}
    <g stroke="#E76F51" strokeWidth="3" fill="none" strokeLinecap="round">
      <path d="M14 26 Q22 18 30 26 Q38 34 46 26 Q54 18 62 26 Q70 34 76 26" />
      <path d="M12 38 Q20 30 28 38 Q36 46 44 38 Q52 30 60 38 Q68 46 74 38" />
      <path d="M14 50 Q22 42 30 50 Q38 58 46 50 Q54 42 62 50 Q70 58 76 50" />
      <path d="M18 62 Q26 54 34 62 Q42 70 50 62 Q58 54 66 62" />
    </g>
    <g stroke="#FFD166" strokeWidth="1.5" fill="none" strokeLinecap="round">
      <path d="M14 25 Q22 17 30 25 Q38 33 46 25 Q54 17 62 25" />
      <path d="M12 37 Q20 29 28 37 Q36 45 44 37 Q52 29 60 37" />
      <path d="M14 49 Q22 41 30 49 Q38 57 46 49 Q54 41 62 49" />
    </g>
  </svg>
);

// ----------------------------------------------------
// RAMEN BROTHS (CUTE TETRA PACK STYLE)
// ----------------------------------------------------
export const TonkotsuBrothSticker: React.FC<StickerProps> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 80 90" width={size} height={size} className={className}>
    {/* Tetra Pack Carton */}
    {/* Carton peak fold */}
    <polygon points="20,24 40,12 60,24 40,28" fill="#F8EDEB" stroke="#4A3E3D" strokeWidth="2" />
    <polygon points="40,12 60,24 60,28 40,18" fill="#E8D7F1" />
    {/* Main carton body */}
    <rect x="20" y="24" width="40" height="56" rx="4" fill="#FFFBF5" stroke="#4A3E3D" strokeWidth="2" />
    {/* Label Header */}
    <rect x="22" y="28" width="36" height="18" fill="#FDE2E4" rx="2" />
    <text x="40" y="40" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#B02A37" fontFamily="sans-serif">
      豚骨 TONKOTSU
    </text>
    {/* Cute Piggy / Ramen Icon */}
    <circle cx="40" cy="56" r="8" fill="#FFCCD5" stroke="#4A3E3D" strokeWidth="1.2" />
    <ellipse cx="40" cy="57" rx="3.5" ry="2.2" fill="#FF758F" />
    <circle cx="39" cy="57" r="0.6" fill="#4A3E3D" />
    <circle cx="41" cy="57" r="0.6" fill="#4A3E3D" />
    <circle cx="37" cy="54" r="1" fill="#4A3E3D" />
    <circle cx="43" cy="54" r="1" fill="#4A3E3D" />
    {/* Broth wave preview at bottom */}
    <path d="M22 72 Q30 68 40 72 Q50 76 58 72 L58 78 L22 78 Z" fill="#FFE5B4" />
  </svg>
);

export const MisoBrothSticker: React.FC<StickerProps> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 80 90" width={size} height={size} className={className}>
    {/* Tetra Pack Carton */}
    <polygon points="20,24 40,12 60,24 40,28" fill="#FFE8D6" stroke="#4A3E3D" strokeWidth="2" />
    <polygon points="40,12 60,24 60,28 40,18" fill="#DDBEA9" />
    {/* Main carton body */}
    <rect x="20" y="24" width="40" height="56" rx="4" fill="#FFFDF0" stroke="#4A3E3D" strokeWidth="2" />
    {/* Label Header */}
    <rect x="22" y="28" width="36" height="18" fill="#FFE5A3" rx="2" />
    <text x="40" y="40" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7F4F24" fontFamily="sans-serif">
      味噌 MISO
    </text>
    {/* Cute Soybean Icon */}
    <ellipse cx="37" cy="54" rx="5" ry="6" fill="#DDBEA9" stroke="#4A3E3D" strokeWidth="1.2" transform="rotate(-15 37 54)" />
    <ellipse cx="45" cy="56" rx="5" ry="6" fill="#CB997E" stroke="#4A3E3D" strokeWidth="1.2" transform="rotate(20 45 56)" />
    {/* Broth wave preview */}
    <path d="M22 72 Q30 68 40 72 Q50 76 58 72 L58 78 L22 78 Z" fill="#DDA15E" />
  </svg>
);

// ----------------------------------------------------
// RAMEN TOPPINGS
// ----------------------------------------------------
export const SeaweedSticker: React.FC<StickerProps> = ({ size = 56, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Crispy Nori Sheets */}
    <rect x="18" y="16" width="28" height="46" rx="2" fill="#1B4332" stroke="#081C15" strokeWidth="2" transform="rotate(-10 18 16)" />
    <rect x="34" y="20" width="28" height="46" rx="2" fill="#2D6A4F" stroke="#081C15" strokeWidth="2" transform="rotate(12 34 20)" />
    <line x1="38" y1="26" x2="58" y2="28" stroke="#52B788" strokeWidth="1.5" />
    <line x1="38" y1="36" x2="58" y2="38" stroke="#52B788" strokeWidth="1.5" />
  </svg>
);

export const BoiledEggSticker: React.FC<StickerProps> = ({ size = 56, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Ajitsuke Tamago Half */}
    <ellipse cx="40" cy="40" rx="28" ry="34" fill="#D4A373" stroke="#4A3E3D" strokeWidth="2" />
    <ellipse cx="40" cy="40" rx="25" ry="31" fill="#FFFFFF" />
    {/* Molten Golden Yolk */}
    <ellipse cx="40" cy="42" rx="16" ry="18" fill="#FF9E00" stroke="#E85D04" strokeWidth="1.5" />
    <ellipse cx="40" cy="44" rx="11" ry="12" fill="#FFB703" />
    {/* Glossy shine */}
    <circle cx="35" cy="38" r="3.5" fill="#FFFFFF" opacity="0.9" />
  </svg>
);

export const SunnyEggSticker: React.FC<StickerProps> = ({ size = 56, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Irregular white base */}
    <path
      d="M20 40 C14 26 34 14 48 18 C64 16 70 30 66 44 C72 58 56 68 42 66 C26 68 14 54 20 40 Z"
      fill="#FFFFFF"
      stroke="#4A3E3D"
      strokeWidth="2"
    />
    <circle cx="42" cy="40" r="14" fill="#FF9E00" stroke="#FB8500" strokeWidth="1.5" />
    <circle cx="39" cy="37" r="4" fill="#FFFFFF" opacity="0.8" />
  </svg>
);

export const ChashuPorkSticker: React.FC<StickerProps> = ({ size = 56, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Caramelized Braised Pork Belly Spiral */}
    <circle cx="40" cy="40" r="30" fill="#9C6644" stroke="#4A3E3D" strokeWidth="2" />
    <circle cx="40" cy="40" r="26" fill="#DDB892" />
    <path
      d="M40 18 C52 18 60 28 58 40 C56 52 46 60 36 58 C26 56 20 46 22 36 C24 28 32 24 38 26 C44 28 46 34 44 38 C42 42 38 42 37 40"
      stroke="#7F4F24"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    />
    <circle cx="38" cy="38" r="2" fill="#FFF" />
  </svg>
);

export const NarutomakiSticker: React.FC<StickerProps> = ({ size = 56, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Scalloped edge white fish cake */}
    <path
      d="M40 12 C44 12 47 16 51 16 C55 16 58 13 62 16 C66 19 66 23 70 27 C74 31 77 34 78 39 C79 44 76 47 76 52 C76 57 79 60 77 64 C75 68 71 68 67 71 C63 74 61 78 56 78 C51 78 48 74 44 74 C40 74 37 78 32 77 C27 76 25 72 21 69 C17 66 13 66 12 61 C11 56 14 53 14 48 C14 43 11 40 13 35 C15 30 19 30 22 26 C25 22 26 18 31 16 C36 14 38 12 40 12 Z"
      fill="#FFFFFF"
      stroke="#4A3E3D"
      strokeWidth="2"
    />
    {/* Iconic Pink Spiral */}
    <path
      d="M40 38 C42 36 45 38 44 41 C43 44 38 45 36 41 C34 36 38 31 43 31 C49 31 54 36 53 43 C52 50 44 54 37 53 C29 52 24 44 26 36"
      stroke="#FF4D6D"
      strokeWidth="4.5"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export const GyozasSticker: React.FC<StickerProps> = ({ size = 56, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Crescent dumpling with crispy golden base & pleats */}
    <path
      d="M16 48 C20 28 60 28 66 48 C60 56 22 56 16 48 Z"
      fill="#FFF3B0"
      stroke="#4A3E3D"
      strokeWidth="2"
    />
    {/* Pleats along top rim */}
    <path d="M26 34 L28 42" stroke="#4A3E3D" strokeWidth="1.8" />
    <path d="M34 30 L36 40" stroke="#4A3E3D" strokeWidth="1.8" />
    <path d="M42 29 L43 40" stroke="#4A3E3D" strokeWidth="1.8" />
    <path d="M50 31 L49 41" stroke="#4A3E3D" strokeWidth="1.8" />
    <path d="M58 36 L56 43" stroke="#4A3E3D" strokeWidth="1.8" />
    {/* Crispy grilled bottom */}
    <path d="M18 50 Q41 58 64 50" stroke="#B07D62" strokeWidth="3" />
  </svg>
);

export const SpringOnionSticker: React.FC<StickerProps> = ({ size = 56, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Bright green scallion rings */}
    <ellipse cx="26" cy="30" rx="12" ry="7" fill="#74C69D" stroke="#1B4332" strokeWidth="1.5" />
    <ellipse cx="26" cy="30" rx="7" ry="4" fill="#D8F3DC" />
    <ellipse cx="52" cy="36" rx="13" ry="8" fill="#52B788" stroke="#1B4332" strokeWidth="1.5" />
    <ellipse cx="52" cy="36" rx="8" ry="4.5" fill="#D8F3DC" />
    <ellipse cx="36" cy="54" rx="12" ry="7" fill="#40916C" stroke="#1B4332" strokeWidth="1.5" />
    <ellipse cx="36" cy="54" rx="7" ry="4" fill="#D8F3DC" />
  </svg>
);

export const MincedGarlicSticker: React.FC<StickerProps> = ({ size = 56, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Mound of golden fragrant minced garlic */}
    <ellipse cx="40" cy="52" rx="24" ry="12" fill="#E9D8A6" stroke="#4A3E3D" strokeWidth="1.5" />
    <circle cx="30" cy="46" r="5" fill="#FFEAA7" stroke="#4A3E3D" strokeWidth="1.2" />
    <circle cx="42" cy="42" r="6" fill="#F4D03F" stroke="#4A3E3D" strokeWidth="1.2" />
    <circle cx="50" cy="46" r="5" fill="#FFEAA7" stroke="#4A3E3D" strokeWidth="1.2" />
    <circle cx="36" cy="52" r="4.5" fill="#F9E79F" />
    <circle cx="45" cy="52" r="5" fill="#FFF" />
  </svg>
);

export const SpicyPowderSticker: React.FC<StickerProps> = ({ size = 56, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Cute Shichimi / Chilli shaker & red dust */}
    <rect x="26" y="24" width="28" height="42" rx="4" fill="#C1121F" stroke="#4A3E3D" strokeWidth="2" />
    <rect x="30" y="18" width="20" height="7" rx="2" fill="#E2E8F0" stroke="#4A3E3D" strokeWidth="1.5" />
    {/* Shaker label with fire flame */}
    <circle cx="40" cy="45" r="9" fill="#FFF" />
    <path d="M40 39 Q44 44 42 49 Q40 51 38 49 Q36 44 40 39 Z" fill="#F77F00" />
    {/* Scattered red spice specks */}
    <circle cx="16" cy="48" r="1.5" fill="#E63946" />
    <circle cx="62" cy="38" r="1.5" fill="#E63946" />
    <circle cx="64" cy="54" r="2" fill="#D90429" />
  </svg>
);

export const PickledRadishSticker: React.FC<StickerProps> = ({ size = 56, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Bright yellow crunchy Takuan half-moons */}
    <path d="M20 46 A22 22 0 0 1 54 22 L38 46 Z" fill="#FFD166" stroke="#4A3E3D" strokeWidth="2" />
    <path d="M30 58 A22 22 0 0 1 64 34 L48 58 Z" fill="#FFE066" stroke="#4A3E3D" strokeWidth="2" />
  </svg>
);

export const CheeseSliceSticker: React.FC<StickerProps> = ({ size = 56, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Melted square cheese slice */}
    <path
      d="M18 36 L54 18 L68 46 L30 62 Z"
      fill="#FFAA00"
      stroke="#4A3E3D"
      strokeWidth="2"
    />
    <path
      d="M20 38 L52 22 L64 46 L32 58 Z"
      fill="#FFD000"
    />
    {/* Melty rounded corner drips */}
    <circle cx="30" cy="62" r="4" fill="#FFAA00" />
  </svg>
);

// ----------------------------------------------------
// CHOPSTICKS
// ----------------------------------------------------
export const WoodenChopsticksSticker: React.FC<StickerProps> = ({ size = 56, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Bamboo sticks with red wrapper */}
    <line x1="20" y1="68" x2="60" y2="12" stroke="#B07D62" strokeWidth="4" strokeLinecap="round" />
    <line x1="26" y1="72" x2="66" y2="16" stroke="#B07D62" strokeWidth="4" strokeLinecap="round" />
    {/* Cute red wrapper */}
    <rect x="42" y="32" width="12" height="14" rx="2" fill="#D90429" transform="rotate(-35 42 32)" />
    <circle cx="47" cy="38" r="2" fill="#FFD166" />
  </svg>
);

export const StainlessChopsticksSticker: React.FC<StickerProps> = ({ size = 56, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Sleek metallic silver sticks */}
    <line x1="20" y1="68" x2="60" y2="12" stroke="#6C757D" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="26" y1="72" x2="66" y2="16" stroke="#ADB5BD" strokeWidth="3.5" strokeLinecap="round" />
    {/* Metallic highlights & grip grooves */}
    <line x1="52" y1="24" x2="56" y2="28" stroke="#FFFFFF" strokeWidth="2" />
    <line x1="57" y1="18" x2="61" y2="22" stroke="#FFFFFF" strokeWidth="2" />
  </svg>
);

// ----------------------------------------------------
// EASTER EGG & ANIME MOTIF STICKERS
// ----------------------------------------------------
export const StrawHatSticker: React.FC<StickerProps> = ({ size = 48, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Luffy's Straw Hat */}
    <ellipse cx="40" cy="52" rx="36" ry="12" fill="#FFE57F" stroke="#4A3E3D" strokeWidth="2" />
    {/* Dome */}
    <path
      d="M24 50 C24 28 56 28 56 50 Z"
      fill="#FFD54F"
      stroke="#4A3E3D"
      strokeWidth="2"
    />
    {/* Red Ribbon */}
    <path
      d="M24 48 C28 44 52 44 56 48 L56 52 C52 48 28 48 24 52 Z"
      fill="#D90429"
      stroke="#4A3E3D"
      strokeWidth="1.2"
    />
  </svg>
);

export const ChopperHatSticker: React.FC<StickerProps> = ({ size = 48, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Chopper's Pink Hat with Antlers & White Cross */}
    {/* Antlers */}
    <path d="M22 36 L12 24 M12 24 L6 28 M12 24 L14 16" stroke="#4A3E3D" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M58 36 L68 24 M68 24 L74 28 M68 24 L66 16" stroke="#4A3E3D" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* Pink Cylinder Hat */}
    <path
      d="M24 34 L28 62 L52 62 L56 34 Z"
      fill="#FF758F"
      stroke="#4A3E3D"
      strokeWidth="2"
    />
    <ellipse cx="40" cy="34" rx="16" ry="6" fill="#FFA5AB" stroke="#4A3E3D" strokeWidth="2" />
    {/* White medical cross */}
    <rect x="37" y="42" width="6" height="14" rx="1.5" fill="#FFFFFF" />
    <rect x="33" y="46" width="14" height="6" rx="1.5" fill="#FFFFFF" />
  </svg>
);

export const SanjiUtensilsSticker: React.FC<StickerProps> = ({ size = 48, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Fork and Chef Knife crossed with heart smoke */}
    <line x1="22" y1="62" x2="58" y2="18" stroke="#4A3E3D" strokeWidth="3" strokeLinecap="round" />
    <line x1="58" y1="62" x2="22" y2="18" stroke="#4A3E3D" strokeWidth="3" strokeLinecap="round" />
    <circle cx="40" cy="40" r="14" fill="#3A86FF" stroke="#4A3E3D" strokeWidth="2" />
    {/* Blue flame */}
    <path d="M40 32 C44 38 42 44 40 46 C38 44 36 38 40 32 Z" fill="#64DFDF" />
  </svg>
);

export const BigMomCandySticker: React.FC<StickerProps> = ({ size = 48, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Giant candy swirl lollipop */}
    <line x1="40" y1="46" x2="40" y2="72" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
    <circle cx="40" cy="34" r="22" fill="#FF4D6D" stroke="#4A3E3D" strokeWidth="2" />
    <path
      d="M40 16 C30 16 22 24 22 34 C22 44 30 52 40 52 C48 52 54 46 54 38 C54 30 48 26 42 26 C36 26 32 30 32 35 C32 39 36 41 39 41"
      stroke="#FFE5EC"
      strokeWidth="3.5"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export const IchirakuSignSticker: React.FC<StickerProps> = ({ size = 48, className = '' }) => (
  <svg viewBox="0 0 90 70" width={size * 1.3} height={size} className={className}>
    {/* Traditional Ichiraku Noren Curtain */}
    <line x1="10" y1="14" x2="80" y2="14" stroke="#4A3E3D" strokeWidth="3" strokeLinecap="round" />
    <rect x="14" y="16" width="30" height="38" rx="2" fill="#E63946" stroke="#4A3E3D" strokeWidth="2" />
    <rect x="46" y="16" width="30" height="38" rx="2" fill="#E63946" stroke="#4A3E3D" strokeWidth="2" />
    {/* Characters for 一楽 */}
    <text x="29" y="42" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#FFFFFF" fontFamily="serif">一</text>
    <text x="61" y="42" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#FFFFFF" fontFamily="serif">楽</text>
  </svg>
);

export const HiddenLeafSticker: React.FC<StickerProps> = ({ size = 48, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Konoha Leaf Ninja Headband Symbol */}
    <circle cx="40" cy="40" r="30" fill="#2D6A4F" stroke="#4A3E3D" strokeWidth="2" />
    <path
      d="M34 26 C46 24 56 34 54 44 C52 54 42 56 36 50 C30 44 32 36 38 36 C42 36 44 39 43 42"
      stroke="#D8F3DC"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    />
    <path d="M52 24 L56 22 L54 27 Z" fill="#D8F3DC" />
  </svg>
);

export const KakashiMaskSticker: React.FC<StickerProps> = ({ size = 48, className = '' }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className}>
    {/* Ninja dark blue face mask with sharingan glow eye */}
    <ellipse cx="40" cy="44" rx="24" ry="20" fill="#1D2D44" stroke="#0D1B2A" strokeWidth="2" />
    <path d="M16 40 L64 40 L58 60 L22 60 Z" fill="#2A3D59" stroke="#0D1B2A" strokeWidth="2" />
    {/* Sharingan eye preview */}
    <ellipse cx="40" cy="30" rx="8" ry="5" fill="#D90429" stroke="#0D1B2A" strokeWidth="1.5" />
    <circle cx="40" cy="30" r="2.5" fill="#0D1B2A" />
  </svg>
);

