import React from 'react';

interface CuteGoatChefProps {
  className?: string;
  size?: number;
  mood?: 'happy' | 'cooking' | 'thinking' | 'celebrate' | 'nomm';
  withWhisk?: boolean;
}

export const CuteGoatChef: React.FC<CuteGoatChefProps> = ({
  className = '',
  size = 120,
  mood = 'happy',
  withWhisk = false
}) => {
  return (
    <div className={`inline-block relative select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <defs>
          <radialGradient id="goatCheekGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF8FA3" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFB3C6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hatShade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F0EBE6" />
          </linearGradient>
          <linearGradient id="hornGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE066" />
            <stop offset="100%" stopColor="#F4A261" />
          </linearGradient>
        </defs>

        {/* Floating Sparkles around Goat */}
        {mood === 'celebrate' && (
          <g className="animate-sparkle">
            <path d="M20 30 L23 37 L30 40 L23 43 L20 50 L17 43 L10 40 L17 37 Z" fill="#FFD166" />
            <path d="M140 35 L142 40 L147 42 L142 44 L140 49 L138 44 L133 42 L138 40 Z" fill="#FF758F" />
            <circle cx="28" cy="70" r="3" fill="#A06CD5" />
            <circle cx="132" cy="75" r="3" fill="#70A9A1" />
          </g>
        )}

        {/* Drooping Cute Goat Ears */}
        {/* Left Ear */}
        <path
          d="M48 65 C22 62 16 88 40 82 C44 80 47 75 48 65 Z"
          fill="#FFFFFF"
          stroke="#3D352E"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <path
          d="M42 68 C28 66 24 82 38 78 Z"
          fill="#FFE5EC"
        />

        {/* Right Ear */}
        <path
          d="M112 65 C138 62 144 88 120 82 C116 80 113 75 112 65 Z"
          fill="#FFFFFF"
          stroke="#3D352E"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <path
          d="M118 68 C132 66 136 82 122 78 Z"
          fill="#FFE5EC"
        />

        {/* Goat Horns (Curved cute horns) */}
        <path
          d="M58 50 C48 32 38 34 42 46 C45 42 50 44 54 52"
          fill="url(#hornGrad)"
          stroke="#3D352E"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M102 50 C112 32 122 34 118 46 C115 42 110 44 106 52"
          fill="url(#hornGrad)"
          stroke="#3D352E"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Goat Head */}
        <ellipse
          cx="80"
          cy="82"
          rx="38"
          ry="34"
          fill="#FFFFFF"
          stroke="#3D352E"
          strokeWidth="3.5"
        />

        {/* Chef Hat (Puffy Toque Blanche) */}
        <g>
          {/* Main puffy domes */}
          <path
            d="M56 46 C50 20 80 12 80 28 C80 10 110 20 104 46 Z"
            fill="url(#hatShade)"
            stroke="#3D352E"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path
            d="M62 46 C60 26 78 22 82 34 C86 24 100 28 98 46 Z"
            fill="#FFFFFF"
          />
          {/* Hat band */}
          <rect
            x="54"
            y="42"
            width="52"
            height="12"
            rx="4"
            fill="#FF758F"
            stroke="#3D352E"
            strokeWidth="3"
          />
          {/* Cute gold heart on hat band */}
          <path
            d="M80 47 C78 44 75 45 75 48 C75 51 80 53 80 53 C80 53 85 51 85 48 C85 45 82 44 80 47 Z"
            fill="#FFE066"
          />
        </g>

        {/* Eyes & Expressions */}
        {mood === 'happy' || mood === 'nomm' ? (
          <>
            {/* Happy curved eyes */}
            <path
              d="M64 74 Q70 66 76 74"
              fill="none"
              stroke="#3D352E"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M84 74 Q90 66 96 74"
              fill="none"
              stroke="#3D352E"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </>
        ) : mood === 'thinking' ? (
          <>
            {/* Thinking / calculating eyes */}
            <circle cx="70" cy="72" r="4.5" fill="#3D352E" />
            <circle cx="71.5" cy="70.5" r="1.5" fill="#FFFFFF" />
            <path d="M84 72 Q90 67 96 70" fill="none" stroke="#3D352E" strokeWidth="3" strokeLinecap="round" />
          </>
        ) : (
          <>
            {/* Big sparkly open eyes */}
            <ellipse cx="68" cy="72" rx="4.5" ry="6" fill="#3D352E" />
            <circle cx="66" cy="69" r="2" fill="#FFFFFF" />
            <circle cx="70" cy="74" r="1" fill="#FFFFFF" />
            <ellipse cx="92" cy="72" rx="4.5" ry="6" fill="#3D352E" />
            <circle cx="90" cy="69" r="2" fill="#FFFFFF" />
            <circle cx="94" cy="74" r="1" fill="#FFFFFF" />
          </>
        )}

        {/* Rosy Blush Cheeks */}
        <circle cx="58" cy="82" r="7" fill="url(#goatCheekGrad)" />
        <circle cx="102" cy="82" r="7" fill="url(#goatCheekGrad)" />

        {/* Snout / Muzzle */}
        <ellipse
          cx="80"
          cy="88"
          rx="14"
          ry="10"
          fill="#FFF0F3"
          stroke="#3D352E"
          strokeWidth="2.5"
        />
        {/* Cute Y-shaped goat nose & smile */}
        <path
          d="M76 85 Q80 88 84 85"
          fill="none"
          stroke="#3D352E"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M80 87 L80 91"
          stroke="#3D352E"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {mood === 'nomm' ? (
          <path
            d="M75 92 Q80 99 85 92 Z"
            fill="#FF758F"
            stroke="#3D352E"
            strokeWidth="2"
          />
        ) : (
          <path
            d="M76 91 Q80 95 84 91"
            fill="none"
            stroke="#3D352E"
            strokeWidth="2"
            strokeLinecap="round"
          />
        )}

        {/* Little Goat Beard / Goatee */}
        <path
          d="M77 98 C76 106 84 106 83 98 Z"
          fill="#FFFFFF"
          stroke="#3D352E"
          strokeWidth="2"
        />

        {/* Tiny Chef Neckerchief / Bow */}
        <path
          d="M70 108 L90 108 L84 116 L80 113 L76 116 Z"
          fill="#FFCCD5"
          stroke="#3D352E"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <circle cx="80" cy="110" r="3" fill="#FF758F" />

        {/* Optional Whisk or Spoon */}
        {withWhisk && (
          <g transform="translate(105, 75) rotate(25)">
            <rect x="0" y="15" width="4" height="28" rx="2" fill="#D4A373" stroke="#3D352E" strokeWidth="1.5" />
            <ellipse cx="2" cy="8" rx="6" ry="10" fill="none" stroke="#ADB5BD" strokeWidth="2" />
            <path d="M2 0 L2 16" stroke="#ADB5BD" strokeWidth="1.5" />
          </g>
        )}
      </svg>
    </div>
  );
};

