import React from 'react';
import type {
  RamenBowl,
  RamenNoodles,
  RamenBroth,
  RamenTopping,
  RamenChopsticks
} from '../../types';

interface RamenPreviewProps {
  bowl: RamenBowl;
  noodles: RamenNoodles;
  broth: RamenBroth;
  toppings: RamenTopping[];
  chopsticks: RamenChopsticks;
  size?: number;
  className?: string;
  isInteractive?: boolean;
  onRemoveTopping?: (t: RamenTopping) => void;
}

export const RamenPreview: React.FC<RamenPreviewProps> = ({
  bowl,
  noodles,
  broth,
  toppings,
  chopsticks,
  size = 320,
  className = '',
  isInteractive = false,
  onRemoveTopping
}) => {
  const hasSeaweed = toppings.includes('seaweed');
  const hasBoiledEgg = toppings.includes('boiled-egg');
  const hasSunnyEgg = toppings.includes('sunny-egg');
  const hasChashu = toppings.includes('chashu');
  const hasNaruto = toppings.includes('naruto');
  const hasGyoza = toppings.includes('gyoza');
  const hasSpringOnion = toppings.includes('spring-onion');
  const hasGarlic = toppings.includes('garlic');
  const hasSpicyPowder = toppings.includes('spicy-powder');
  const hasRadish = toppings.includes('radish');
  const hasCheese = toppings.includes('cheese');

  return (
    <div
      className={`relative flex items-center justify-center select-none transition-transform duration-300 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 340 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl"
      >
        <defs>
          {/* Broth Gradients */}
          {/* Tonkotsu: Creamy golden-white bone marrow broth */}
          <radialGradient id="tonkotsuBrothGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="70%" stopColor="#F9DFB0" />
            <stop offset="100%" stopColor="#E0B77D" />
          </radialGradient>

          {/* Miso: Rich savory amber-brown miso broth */}
          <radialGradient id="misoBrothGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E99A45" />
            <stop offset="70%" stopColor="#C46820" />
            <stop offset="100%" stopColor="#8A3F0B" />
          </radialGradient>

          {/* Bowl Shadows */}
          <radialGradient id="bowlInnerShadow" cx="50%" cy="50%" r="50%">
            <stop offset="85%" stopColor="#000000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
          </radialGradient>
        </defs>

        {/* --- SHADOW UNDER BOWL --- */}
        <ellipse cx="170" cy="285" rx="110" ry="22" fill="#000000" opacity="0.12" />

        {/* --- RISING STEAM EFFECT --- */}
        <g className="animate-steam" opacity="0.7">
          <path
            d="M130 90 Q120 70 135 50 Q150 30 140 10"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M170 85 Q185 65 170 45 Q155 25 175 5"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M210 90 Q225 70 210 50 Q195 30 205 10"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            opacity="0.5"
          />
        </g>

        {/* --- CRISPY NORI SEAWEED SHEETS (STANDING PROUD BEHIND RIM) --- */}
        {hasSeaweed && (
          <g
            className="cursor-pointer"
            onClick={() => isInteractive && onRemoveTopping?.('seaweed')}
            transform="translate(0, 0)"
          >
            {/* Sheet 1 */}
            <rect
              x="80"
              y="60"
              width="45"
              height="75"
              rx="3"
              fill="#1B4332"
              stroke="#081C15"
              strokeWidth="2.5"
              transform="rotate(-18 80 60)"
            />
            {/* Sheet 2 */}
            <rect
              x="108"
              y="55"
              width="45"
              height="75"
              rx="3"
              fill="#2D6A4F"
              stroke="#081C15"
              strokeWidth="2.5"
              transform="rotate(-5 108 55)"
            />
            {/* Crispy texture lines */}
            <line x1="88" y1="90" x2="115" y2="82" stroke="#40916C" strokeWidth="2" />
            <line x1="94" y1="110" x2="120" y2="102" stroke="#40916C" strokeWidth="2" />
          </g>
        )}

        {/* --- CERAMIC BOWL EXTERIOR BODY --- */}
        {/* Foot Base */}
        <ellipse
          cx="170"
          cy="275"
          rx="60"
          ry="15"
          fill={
            bowl === 'blue' ? '#1D3557' : bowl === 'red' ? '#780000' : '#E2E8F0'
          }
          stroke="#1F2937"
          strokeWidth="3"
        />

        {/* Outer Bowl Shell */}
        <path
          d="M40 145 C45 255 295 255 300 145 Z"
          fill={
            bowl === 'blue'
              ? '#2A6F97'
              : bowl === 'red'
              ? '#C1121F'
              : '#FFFFFF'
          }
          stroke="#1F2937"
          strokeWidth="4"
        />

        {/* Decorative Designs on Outer Bowl Shell */}
        {bowl === 'blue' && (
          <g stroke="#A9D6E5" strokeWidth="3" fill="none">
            <path d="M70 185 Q95 170 120 185 Q145 170 170 185 Q195 170 220 185 Q245 170 270 185" />
            <path d="M90 205 Q115 190 140 205 Q165 190 190 205 Q215 190 240 205" />
          </g>
        )}

        {bowl === 'red' && (
          <g stroke="#FFD166" strokeWidth="3.5" fill="none">
            <ellipse cx="170" cy="155" rx="115" ry="12" stroke="#FFD166" strokeWidth="3" />
            <path d="M80 185 Q170 230 260 185" strokeDasharray="5 5" />
            {/* Golden Dragon cloud motif */}
            <circle cx="170" cy="205" r="8" fill="#FFD166" />
          </g>
        )}

        {bowl === 'persian-blue-flower' && (
          <g>
            {/* Exquisite Persian Blue Floral Arabesque Border Around Rim */}
            <g stroke="#1D4ED8" strokeWidth="2.5" fill="none">
              <path d="M50 152 Q75 160 100 154 Q135 162 170 155 Q205 162 240 154 Q265 160 290 152" />
            </g>
            {/* Persian Flowers along outer belly */}
            {[80, 125, 170, 215, 260].map((cx, idx) => (
              <g key={idx} transform={`translate(${cx}, ${170 + Math.sin(idx) * 8})`}>
                {/* 4-petal Persian flower */}
                <circle cx="-5" cy="0" r="4.5" fill="#2563EB" />
                <circle cx="5" cy="0" r="4.5" fill="#2563EB" />
                <circle cx="0" cy="-5" r="4.5" fill="#2563EB" />
                <circle cx="0" cy="5" r="4.5" fill="#2563EB" />
                <circle cx="0" cy="0" r="3.5" fill="#FBBF24" />
                <circle cx="0" cy="0" r="1.5" fill="#1E3A8A" />
              </g>
            ))}
            {/* Fine scroll vine */}
            <path
              d="M95 195 Q130 215 170 205 Q210 215 245 195"
              stroke="#1E40AF"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4 3"
            />
          </g>
        )}

        {/* --- BOWL RIM & INNER OPENING --- */}
        <ellipse
          cx="170"
          cy="145"
          rx="130"
          ry="46"
          fill={bowl === 'persian-blue-flower' ? '#F8FAFC' : bowl === 'blue' ? '#468FAF' : '#E63946'}
          stroke="#1F2937"
          strokeWidth="4"
        />

        {/* Intricate Persian Blue Flowers on inside rim if selected */}
        {bowl === 'persian-blue-flower' && (
          <g>
            <ellipse cx="170" cy="145" rx="126" ry="42" fill="none" stroke="#2563EB" strokeWidth="2.5" />
            {[55, 80, 110, 140, 170, 200, 230, 260, 285].map((fx, i) => (
              <circle key={i} cx={fx} cy={145 + Math.sin(i * 0.8) * 6} r="3" fill="#1D4ED8" />
            ))}
          </g>
        )}

        {/* --- DELICIOUS STEAMING BROTH POOL --- */}
        <ellipse
          cx="170"
          cy="147"
          rx="122"
          ry="40"
          fill={broth === 'tonkotsu' ? 'url(#tonkotsuBrothGrad)' : 'url(#misoBrothGrad)'}
          stroke="#1F2937"
          strokeWidth="2"
        />
        {/* Broth oil droplets shimmer */}
        <circle cx="110" cy="142" r="5" fill="#FFE5A3" opacity="0.6" />
        <circle cx="210" cy="150" r="7" fill="#FFE5A3" opacity="0.6" />
        <circle cx="160" cy="162" r="6" fill="#FFE5A3" opacity="0.5" />

        {/* --- NOODLES INSIDE BROTH (THIN, THICK, WAVY) --- */}
        {noodles === 'thin' && (
          <g stroke="#E76F51" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.9">
            {/* Hakata Straight Strands */}
            <path d="M75 142 L265 142" />
            <path d="M85 148 L255 148" />
            <path d="M95 154 L245 154" />
            <path d="M105 160 L235 160" />
            <path d="M120 166 L220 166" />
          </g>
        )}

        {noodles === 'thick' && (
          <g stroke="#E76F51" strokeWidth="6" strokeLinecap="round" fill="none">
            {/* Hearty Thick Strands */}
            <path d="M80 144 Q170 158 260 144" />
            <path d="M90 154 Q170 168 250 154" />
            <path d="M105 164 Q170 178 235 164" />
            {/* Highlight */}
            <path d="M85 143 Q170 157 255 143" stroke="#FFE8D6" strokeWidth="2.5" />
          </g>
        )}

        {noodles === 'wavy' && (
          <g stroke="#E76F51" strokeWidth="3.5" strokeLinecap="round" fill="none">
            {/* Classic Curly Ramen Noodles */}
            <path d="M75 142 Q90 134 105 142 Q120 150 135 142 Q150 134 165 142 Q180 150 195 142 Q210 134 225 142 Q240 150 255 142" />
            <path d="M85 150 Q100 142 115 150 Q130 158 145 150 Q160 142 175 150 Q190 158 205 150 Q220 142 235 150 Q250 158 260 150" />
            <path d="M95 158 Q110 150 125 158 Q140 166 155 158 Q170 150 185 158 Q200 166 215 158 Q230 150 245 158" />
            {/* Yellow sheen */}
            <path d="M75 141 Q90 133 105 141 Q120 149 135 141 Q150 133 165 141 Q180 149 195 141 Q210 133 225 141" stroke="#FFD166" strokeWidth="1.8" />
          </g>
        )}

        {/* --- TOPPINGS LAYERED ARTISTICALLY --- */}

        {/* 1. MELTED CHEESE SLICE */}
        {hasCheese && (
          <g
            className="cursor-pointer"
            onClick={() => isInteractive && onRemoveTopping?.('cheese')}
            transform="translate(140, 130)"
          >
            <path
              d="M0 15 L35 0 L55 25 L15 40 Z"
              fill="#FFAA00"
              stroke="#D48B00"
              strokeWidth="2"
            />
            <path d="M2 17 L33 3 L48 24 L16 36 Z" fill="#FFD000" />
            {/* Soft melted corners */}
            <circle cx="15" cy="40" r="5" fill="#FFAA00" />
            <circle cx="55" cy="25" r="4" fill="#FFAA00" />
          </g>
        )}

        {/* 2. CHASHU PORK SLICES */}
        {hasChashu && (
          <g
            className="cursor-pointer"
            onClick={() => isInteractive && onRemoveTopping?.('chashu')}
          >
            {/* Slice 1 (Left) */}
            <g transform="translate(100, 132)">
              <circle cx="20" cy="20" r="22" fill="#9C6644" stroke="#4A3E3D" strokeWidth="2.5" />
              <circle cx="20" cy="20" r="18" fill="#DDB892" />
              <path
                d="M20 5 C30 5 35 12 33 20 C31 28 24 33 17 31 C10 29 7 22 9 16 C11 11 16 9 20 11"
                stroke="#7F4F24"
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
              />
            </g>
            {/* Slice 2 (Overlapping) */}
            <g transform="translate(75, 142)">
              <circle cx="20" cy="20" r="22" fill="#9C6644" stroke="#4A3E3D" strokeWidth="2.5" />
              <circle cx="20" cy="20" r="18" fill="#DDB892" />
              <path
                d="M20 5 C30 5 35 12 33 20 C31 28 24 33 17 31 C10 29 7 22 9 16 C11 11 16 9 20 11"
                stroke="#7F4F24"
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
              />
            </g>
          </g>
        )}

        {/* 3. CRISPY GYOZAS */}
        {hasGyoza && (
          <g
            className="cursor-pointer"
            onClick={() => isInteractive && onRemoveTopping?.('gyoza')}
            transform="translate(195, 125) rotate(15)"
          >
            <path
              d="M0 20 C5 5 45 5 50 20 C45 28 5 28 0 20 Z"
              fill="#FFF3B0"
              stroke="#4A3E3D"
              strokeWidth="2"
            />
            {/* Pleats */}
            <line x1="12" y1="9" x2="14" y2="17" stroke="#4A3E3D" strokeWidth="1.5" />
            <line x1="22" y1="7" x2="23" y2="16" stroke="#4A3E3D" strokeWidth="1.5" />
            <line x1="32" y1="8" x2="31" y2="17" stroke="#4A3E3D" strokeWidth="1.5" />
            <line x1="40" y1="11" x2="38" y2="18" stroke="#4A3E3D" strokeWidth="1.5" />
            {/* Golden bottom */}
            <path d="M2 22 Q25 28 48 22" stroke="#B07D62" strokeWidth="2.5" />
          </g>
        )}

        {/* 4. SOFT-BOILED EGG (AJITSUKE TAMAGO) */}
        {hasBoiledEgg && (
          <g
            className="cursor-pointer"
            onClick={() => isInteractive && onRemoveTopping?.('boiled-egg')}
            transform="translate(195, 145)"
          >
            <ellipse cx="22" cy="18" rx="20" ry="24" fill="#D4A373" stroke="#4A3E3D" strokeWidth="2.5" />
            <ellipse cx="22" cy="18" rx="18" ry="21" fill="#FFFFFF" />
            {/* Golden gooey yolk */}
            <circle cx="22" cy="19" r="12" fill="#FF9E00" stroke="#E85D04" strokeWidth="1.5" />
            <circle cx="22" cy="20" r="8" fill="#FFB703" />
            <circle cx="19" cy="16" r="3" fill="#FFFFFF" />
          </g>
        )}

        {/* 5. SUNNY SIDE UP EGG */}
        {hasSunnyEgg && (
          <g
            className="cursor-pointer"
            onClick={() => isInteractive && onRemoveTopping?.('sunny-egg')}
            transform="translate(125, 138)"
          >
            <path
              d="M5 20 C0 10 15 2 26 4 C38 2 44 12 40 22 C45 32 32 40 22 38 C10 40 2 30 5 20 Z"
              fill="#FFFFFF"
              stroke="#4A3E3D"
              strokeWidth="2.2"
            />
            <circle cx="23" cy="21" r="10" fill="#FF9E00" stroke="#FB8500" strokeWidth="1.5" />
            <circle cx="20" cy="18" r="2.5" fill="#FFFFFF" />
          </g>
        )}

        {/* 6. NARUTOMAKI FISH CAKES */}
        {hasNaruto && (
          <g
            className="cursor-pointer"
            onClick={() => isInteractive && onRemoveTopping?.('naruto')}
            transform="translate(150, 158)"
          >
            {/* Fish cake 1 */}
            <g transform="rotate(-12)">
              <circle cx="16" cy="16" r="15" fill="#FFFFFF" stroke="#4A3E3D" strokeWidth="2" />
              {/* Pink Spiral */}
              <path
                d="M16 14 C17 13 19 14 18 16 C17 18 14 18 13 16 C12 13 15 11 18 11 C21 11 23 14 22 18 C21 21 17 23 13 22"
                stroke="#FF4D6D"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </g>
            {/* Fish cake 2 */}
            <g transform="translate(22, 4) rotate(15)">
              <circle cx="16" cy="16" r="15" fill="#FFFFFF" stroke="#4A3E3D" strokeWidth="2" />
              <path
                d="M16 14 C17 13 19 14 18 16 C17 18 14 18 13 16 C12 13 15 11 18 11 C21 11 23 14 22 18 C21 21 17 23 13 22"
                stroke="#FF4D6D"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </g>
          </g>
        )}

        {/* 7. BRIGHT YELLOW PICKLED RADISH */}
        {hasRadish && (
          <g
            className="cursor-pointer"
            onClick={() => isInteractive && onRemoveTopping?.('radish')}
            transform="translate(240, 152) rotate(25)"
          >
            <path d="M0 16 A16 16 0 0 1 25 -2 L12 16 Z" fill="#FFD166" stroke="#4A3E3D" strokeWidth="1.8" />
            <path d="M6 22 A16 16 0 0 1 31 4 L18 22 Z" fill="#FFE066" stroke="#4A3E3D" strokeWidth="1.8" />
          </g>
        )}

        {/* 8. MINCED GARLIC MOUND */}
        {hasGarlic && (
          <g
            className="cursor-pointer"
            onClick={() => isInteractive && onRemoveTopping?.('garlic')}
            transform="translate(125, 160)"
          >
            <ellipse cx="14" cy="10" rx="14" ry="8" fill="#E9D8A6" stroke="#4A3E3D" strokeWidth="1.5" />
            <circle cx="8" cy="8" r="3.5" fill="#FFEAA7" />
            <circle cx="16" cy="7" r="4" fill="#F4D03F" />
            <circle cx="20" cy="10" r="3" fill="#FFF" />
          </g>
        )}

        {/* 9. SHICHIMI SPICY TOGARASHI POWDER */}
        {hasSpicyPowder && (
          <g
            className="cursor-pointer"
            onClick={() => isInteractive && onRemoveTopping?.('spicy-powder')}
          >
            {[
              { x: 140, y: 145 },
              { x: 145, y: 152 },
              { x: 152, y: 148 },
              { x: 158, y: 155 },
              { x: 165, y: 146 },
              { x: 172, y: 152 },
              { x: 180, y: 147 },
              { x: 188, y: 154 },
              { x: 195, y: 149 },
              { x: 175, y: 160 }
            ].map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r={1.5 + (i % 2) * 0.5} fill="#D90429" />
            ))}
          </g>
        )}

        {/* 10. FRESH SPRING ONIONS / SCALLIONS (SPRINKLED IN CENTER) */}
        {hasSpringOnion && (
          <g
            className="cursor-pointer"
            onClick={() => isInteractive && onRemoveTopping?.('spring-onion')}
          >
            {[
              { x: 160, y: 152, r: -10 },
              { x: 172, y: 148, r: 25 },
              { x: 184, y: 155, r: 15 },
              { x: 168, y: 162, r: -20 },
              { x: 155, y: 164, r: 35 },
              { x: 178, y: 166, r: 5 }
            ].map((s, idx) => (
              <g key={idx} transform={`translate(${s.x}, ${s.y}) rotate(${s.r})`}>
                <ellipse cx="0" cy="0" rx="7" ry="4.5" fill="#52B788" stroke="#1B4332" strokeWidth="1.2" />
                <ellipse cx="0" cy="0" rx="4" ry="2.5" fill="#D8F3DC" />
              </g>
            ))}
          </g>
        )}

        {/* --- CHOPSTICKS BESIDE THE BOWL --- */}
        <g transform="translate(275, 80) rotate(18)">
          {chopsticks === 'wooden' ? (
            <>
              {/* Bamboo Wooden Chopsticks */}
              <line x1="0" y1="180" x2="35" y2="0" stroke="#B07D62" strokeWidth="4.5" strokeLinecap="round" />
              <line x1="8" y1="182" x2="43" y2="2" stroke="#9C6644" strokeWidth="4.5" strokeLinecap="round" />
              {/* Cute Red Chopstick Paper Wrapper */}
              <rect x="18" y="70" width="16" height="24" rx="2" fill="#D90429" stroke="#4A3E3D" strokeWidth="1.5" transform="rotate(-11 18 70)" />
              <circle cx="27" cy="82" r="3.5" fill="#FFD166" />
            </>
          ) : (
            <>
              {/* Stainless Steel Chopsticks */}
              <line x1="0" y1="180" x2="35" y2="0" stroke="#6C757D" strokeWidth="4" strokeLinecap="round" />
              <line x1="8" y1="182" x2="43" y2="2" stroke="#ADB5BD" strokeWidth="4" strokeLinecap="round" />
              {/* Sleek metallic gleam & bands */}
              <line x1="25" y1="50" x2="33" y2="52" stroke="#FFFFFF" strokeWidth="2.5" />
              <line x1="28" y1="35" x2="36" y2="37" stroke="#FFFFFF" strokeWidth="2.5" />
            </>
          )}
        </g>
      </svg>
    </div>
  );
};
