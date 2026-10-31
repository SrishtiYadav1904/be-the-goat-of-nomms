import React from 'react';
import type { CakeBase, CakeTopping } from '../../types';

interface CakePreviewProps {
  base: CakeBase;
  toppings: CakeTopping[];
  size?: number;
  className?: string;
  isInteractive?: boolean;
  onRemoveTopping?: (t: CakeTopping) => void;
}

export const CakePreview: React.FC<CakePreviewProps> = ({
  base,
  toppings,
  size = 320,
  className = '',
  isInteractive = false,
  onRemoveTopping
}) => {
  const hasChocolateCream = toppings.includes('chocolate-cream');
  const hasVanillaCream = toppings.includes('vanilla-cream');
  const hasFruitSlices = toppings.includes('fruit-slices');
  const hasChocolateChips = toppings.includes('chocolate-chips');
  const hasBlueberryJam = toppings.includes('blueberry-jam');
  const hasCreamCheese = toppings.includes('cream-cheese');
  const hasWhippedCream = toppings.includes('whipped-cream');
  const hasSprinkles = toppings.includes('sprinkles');

  return (
    <div
      className={`relative flex items-center justify-center select-none transition-transform duration-300 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 340 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl"
      >
        <defs>
          <filter id="cakeDropShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.15" />
          </filter>

          {/* Pastry Stand Grad */}
          <linearGradient id="cakeStandGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#EDE0D4" />
          </linearGradient>

          {/* Sponge Cake Base Gradients */}
          <linearGradient id="spongeSideGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFE5D9" />
            <stop offset="100%" stopColor="#F4ACB7" />
          </linearGradient>

          <linearGradient id="chocFrostingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7F4F24" />
            <stop offset="100%" stopColor="#4A2810" />
          </linearGradient>

          <linearGradient id="vanillaFrostingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFF9EB" />
          </linearGradient>
        </defs>

        {/* --- ELEGANT CERAMIC CAKE PEDESTAL / STAND --- */}
        <ellipse cx="170" cy="275" rx="120" ry="24" fill="#000000" opacity="0.08" />
        <path d="M150 250 L140 280 L200 280 L190 250 Z" fill="url(#cakeStandGrad)" stroke="#4A3E3D" strokeWidth="2.5" />
        <ellipse cx="170" cy="280" rx="35" ry="8" fill="#DDB892" stroke="#4A3E3D" strokeWidth="2" />
        <ellipse cx="170" cy="250" rx="130" ry="22" fill="#FFFFFF" stroke="#4A3E3D" strokeWidth="3" />
        <ellipse cx="170" cy="248" rx="122" ry="18" fill="#FFF0F3" />

        {/* --- TIER 1: CAKE BASE ACCORDING TO USER'S CHOICE --- */}
        {base === 'circle' && (
          <g>
            {/* Sponge Side */}
            <path
              d="M50 170 L50 230 C50 268 290 268 290 230 L290 170 Z"
              fill={hasCreamCheese ? '#FFF9DB' : hasChocolateCream ? '#5C3D2E' : 'url(#spongeSideGrad)'}
              stroke="#4A3E3D"
              strokeWidth="3.5"
            />
            {/* Middle sponge filling line */}
            <path d="M52 200 C80 220 260 220 288 200" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" opacity="0.9" />

            {/* Top Surface */}
            <ellipse
              cx="170"
              cy="170"
              rx="120"
              ry="52"
              fill={
                hasChocolateCream
                  ? 'url(#chocFrostingGrad)'
                  : hasVanillaCream
                  ? 'url(#vanillaFrostingGrad)'
                  : hasCreamCheese
                  ? '#FFFBEA'
                  : '#FFE5EC'
              }
              stroke="#4A3E3D"
              strokeWidth="3.5"
            />
          </g>
        )}

        {base === 'square' && (
          <g>
            {/* Left face */}
            <path
              d="M55 160 L170 215 L170 248 L55 195 Z"
              fill={hasChocolateCream ? '#4A2810' : '#F4ACB7'}
              stroke="#4A3E3D"
              strokeWidth="3.5"
            />
            {/* Right face */}
            <path
              d="M285 160 L170 215 L170 248 L285 195 Z"
              fill={hasChocolateCream ? '#6B3E1A' : '#FFCAD4'}
              stroke="#4A3E3D"
              strokeWidth="3.5"
            />
            {/* Top isometric face */}
            <path
              d="M170 108 L285 160 L170 215 L55 160 Z"
              fill={
                hasChocolateCream
                  ? '#7F4F24'
                  : hasVanillaCream
                  ? '#FFFFFF'
                  : hasCreamCheese
                  ? '#FFFBEA'
                  : '#FFE5EC'
              }
              stroke="#4A3E3D"
              strokeWidth="3.5"
            />
          </g>
        )}

        {base === 'heart' && (
          <g>
            {/* Heart 3D side drop */}
            <path
              d="M75 190 C75 220 170 265 170 265 C170 265 265 220 265 190 L265 165 C265 195 170 245 170 245 C170 245 75 195 75 165 Z"
              fill={hasChocolateCream ? '#4A2810' : '#F4ACB7'}
              stroke="#4A3E3D"
              strokeWidth="3.5"
            />
            {/* Heart Top Face */}
            <path
              d="M170 242 C70 190 55 130 110 105 C145 90 165 110 170 120 C175 110 195 90 230 105 C285 130 270 190 170 242 Z"
              fill={
                hasChocolateCream
                  ? 'url(#chocFrostingGrad)'
                  : hasVanillaCream
                  ? 'url(#vanillaFrostingGrad)'
                  : hasCreamCheese
                  ? '#FFFBEA'
                  : '#FFCCD5'
              }
              stroke="#4A3E3D"
              strokeWidth="3.5"
            />
          </g>
        )}

        {/* --- TIER 2: FROSTING & CREAM DRIPS --- */}
        {hasChocolateCream && (
          <g>
            {/* Glossy chocolate drip along rim */}
            <path
              d="M60 175 Q75 195 90 175 Q110 205 130 175 Q155 210 180 175 Q210 205 235 175 Q260 198 280 175"
              stroke="#3A1D0B"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M65 174 Q75 192 88 174 Q110 202 128 174 Q155 207 178 174 Q210 202 232 174 Q260 195 275 174"
              stroke="#7F4F24"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        )}

        {hasVanillaCream && !hasChocolateCream && (
          <g>
            {/* White fluffy piping swirls around edge */}
            {[70, 95, 125, 160, 195, 230, 260].map((cx, i) => (
              <circle
                key={i}
                cx={cx}
                cy={170 + Math.sin(i) * 6}
                r="10"
                fill="#FFFFFF"
                stroke="#4A3E3D"
                strokeWidth="2"
              />
            ))}
          </g>
        )}

        {hasBlueberryJam && (
          <g className="cursor-pointer" onClick={() => isInteractive && onRemoveTopping?.('blueberry-jam')}>
            {/* Blue glaze center dollop & drips */}
            <ellipse cx="170" cy="165" rx="60" ry="24" fill="#3A0CA3" stroke="#1D0652" strokeWidth="2" />
            <ellipse cx="170" cy="163" rx="50" ry="18" fill="#4361EE" />
            {/* Whole Blueberries */}
            <circle cx="150" cy="160" r="9" fill="#3F37C9" stroke="#1D0652" strokeWidth="1.5" />
            <circle cx="147" cy="158" r="2.5" fill="#7209B7" />
            <circle cx="175" cy="155" r="10" fill="#3F37C9" stroke="#1D0652" strokeWidth="1.5" />
            <circle cx="172" cy="153" r="3" fill="#7209B7" />
            <circle cx="190" cy="168" r="8" fill="#3A0CA3" stroke="#1D0652" strokeWidth="1.5" />
            {/* Jam drip over side */}
            <path d="M120 178 Q125 198 123 205 Q121 210 126 210 Q130 208 128 195 L132 178" fill="#3A0CA3" />
          </g>
        )}

        {/* --- TIER 3: WHIPPED CREAM PEAKS --- */}
        {hasWhippedCream && (
          <g className="cursor-pointer" onClick={() => isInteractive && onRemoveTopping?.('whipped-cream')}>
            {/* Center giant whipped cream with glossy cherry */}
            <ellipse cx="170" cy="150" rx="30" ry="14" fill="#E9ECEF" stroke="#4A3E3D" strokeWidth="2" />
            <ellipse cx="170" cy="140" rx="22" ry="11" fill="#F8F9FA" stroke="#4A3E3D" strokeWidth="2" />
            <ellipse cx="170" cy="130" rx="15" ry="8" fill="#FFFFFF" stroke="#4A3E3D" strokeWidth="2" />
            {/* Big Sanji-approved cherry */}
            <circle cx="172" cy="118" r="10" fill="#D90429" stroke="#4A3E3D" strokeWidth="2" />
            <circle cx="169" cy="115" r="3" fill="#FFFFFF" />
            <path d="M172 110 Q184 96 178 90" stroke="#2B9348" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </g>
        )}

        {/* --- TIER 4: FRESH FRUIT SLICES --- */}
        {hasFruitSlices && (
          <g className="cursor-pointer" onClick={() => isInteractive && onRemoveTopping?.('fruit-slices')}>
            {/* Fresh Strawberries */}
            <g transform="translate(110, 135) rotate(-15)">
              <path d="M18 5 C10 5 6 16 18 28 C30 16 26 5 18 5 Z" fill="#FF4D6D" stroke="#4A3E3D" strokeWidth="2" />
              <path d="M18 9 C13 9 11 17 18 24 C25 17 23 9 18 9 Z" fill="#FFA5AB" />
              <path d="M15 5 L18 2 L21 5 Z" fill="#52B788" stroke="#4A3E3D" strokeWidth="1.2" />
            </g>
            <g transform="translate(205, 138) rotate(20)">
              <path d="M18 5 C10 5 6 16 18 28 C30 16 26 5 18 5 Z" fill="#FF4D6D" stroke="#4A3E3D" strokeWidth="2" />
              <path d="M18 9 C13 9 11 17 18 24 C25 17 23 9 18 9 Z" fill="#FFA5AB" />
              <path d="M15 5 L18 2 L21 5 Z" fill="#52B788" stroke="#4A3E3D" strokeWidth="1.2" />
            </g>
            {/* Kiwi Slice */}
            <g transform="translate(145, 172)">
              <ellipse cx="14" cy="10" rx="14" ry="9" fill="#74C69D" stroke="#4A3E3D" strokeWidth="1.8" />
              <ellipse cx="14" cy="10" rx="8" ry="5" fill="#D8F3DC" />
              <circle cx="14" cy="10" r="2" fill="#FFFFFF" />
              <circle cx="14" cy="6" r="0.8" fill="#2D3748" />
              <circle cx="18" cy="8" r="0.8" fill="#2D3748" />
              <circle cx="18" cy="12" r="0.8" fill="#2D3748" />
              <circle cx="14" cy="14" r="0.8" fill="#2D3748" />
              <circle cx="10" cy="12" r="0.8" fill="#2D3748" />
              <circle cx="10" cy="8" r="0.8" fill="#2D3748" />
            </g>
            {/* Orange wedge */}
            <g transform="translate(182, 168)">
              <path d="M4 14 A14 14 0 0 1 24 4 L14 14 Z" fill="#FF9E00" stroke="#4A3E3D" strokeWidth="1.8" />
              <path d="M7 13 A10 10 0 0 1 21 6 L14 13 Z" fill="#FFD166" />
            </g>
          </g>
        )}

        {/* --- TIER 5: CHOCOLATE CHIPS --- */}
        {hasChocolateChips && (
          <g className="cursor-pointer" onClick={() => isInteractive && onRemoveTopping?.('chocolate-chips')}>
            {[
              { x: 95, y: 165 },
              { x: 135, y: 148 },
              { x: 195, y: 152 },
              { x: 235, y: 162 },
              { x: 165, y: 185 },
              { x: 130, y: 178 },
              { x: 215, y: 178 }
            ].map((pt, i) => (
              <g key={i} transform={`translate(${pt.x}, ${pt.y})`}>
                <path
                  d="M6 2 C3 6 1 12 6 13 C11 12 9 6 6 2 Z"
                  fill="#4A2810"
                  stroke="#221208"
                  strokeWidth="1.5"
                />
                <circle cx="5" cy="5" r="1" fill="#794628" />
              </g>
            ))}
          </g>
        )}

        {/* --- TIER 6: RAINBOW SPRINKLES & STARS --- */}
        {hasSprinkles && (
          <g className="cursor-pointer" onClick={() => isInteractive && onRemoveTopping?.('sprinkles')}>
            {[
              { x: 80, y: 160, r: -20, col: '#FF477E' },
              { x: 110, y: 180, r: 40, col: '#3A86FF' },
              { x: 125, y: 162, r: 15, col: '#FFBE0B' },
              { x: 160, y: 172, r: -45, col: '#06D6A0' },
              { x: 185, y: 180, r: 30, col: '#8338EC' },
              { x: 220, y: 165, r: -15, col: '#FF477E' },
              { x: 245, y: 175, r: 50, col: '#FFBE0B' },
              { x: 140, y: 190, r: -35, col: '#3A86FF' },
              { x: 200, y: 190, r: 25, col: '#06D6A0' }
            ].map((sp, idx) => (
              <rect
                key={idx}
                x={sp.x}
                y={sp.y}
                width="10"
                height="3.5"
                rx="1.75"
                fill={sp.col}
                stroke="#4A3E3D"
                strokeWidth="0.8"
                transform={`rotate(${sp.r} ${sp.x} ${sp.y})`}
              />
            ))}
            {/* Cute Yellow Sugar Star in Front */}
            <path
              d="M170 195 L172 199 L177 200 L173 203 L174 207 L170 205 L166 207 L167 203 L163 200 L168 199 Z"
              fill="#FFE066"
              stroke="#4A3E3D"
              strokeWidth="1.2"
            />
          </g>
        )}
      </svg>
    </div>
  );
};
