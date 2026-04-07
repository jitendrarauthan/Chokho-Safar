import React from 'react';

export const Logo = ({ className = "", size = "default" }) => {
  const sizes = {
    small: { height: "h-10", text: "text-base" },
    default: { height: "h-14", text: "text-2xl" },
    large: { height: "h-16", text: "text-3xl" }
  };

  const { height, text } = sizes[size];

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`${height} flex items-center`}>
        <svg
          viewBox="0 0 280 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto"
        >
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#D97706', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#EA580C', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#D97706', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FBBF24', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#F59E0B', stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          {/* Decorative Road/Path under text */}
          <path
            d="M 10 65 Q 70 63 140 65 Q 210 67 270 65"
            stroke="url(#accentGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Road dashes */}
          <line x1="40" y1="65" x2="50" y2="65" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="80" y1="65" x2="90" y2="65" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="120" y1="65" x2="130" y2="65" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="160" y1="65" x2="170" y2="65" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="200" y1="65" x2="210" y2="65" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="240" y1="65" x2="250" y2="65" stroke="white" strokeWidth="2" strokeLinecap="round"/>

          {/* Main Text "CHOKHO SAFAR" */}
          <text
            x="140"
            y="35"
            fontFamily="Arial, sans-serif"
            fontSize="28"
            fontWeight="bold"
            fill="url(#textGradient)"
            textAnchor="middle"
            letterSpacing="2"
          >
            CHOKHO SAFAR
          </text>

          {/* Subtitle "TRAVELS" */}
          <text
            x="140"
            y="55"
            fontFamily="Arial, sans-serif"
            fontSize="12"
            fontWeight="600"
            fill="#6B7280"
            textAnchor="middle"
            letterSpacing="6"
          >
            T R A V E L S
          </text>

          {/* Integrated Car Icon on the "O" */}
          <g transform="translate(90, 15)">
            {/* Car body */}
            <path
              d="M 2 10 L 4 7 L 8 7 L 10 5 L 15 5 L 17 7 L 21 7 L 23 10 L 23 14 L 2 14 Z"
              fill="#EA580C"
              stroke="#D97706"
              strokeWidth="0.5"
            />
            {/* Windows */}
            <rect x="6" y="8" width="5" height="3" fill="#FEF3C7" rx="0.5"/>
            <rect x="14" y="8" width="5" height="3" fill="#FEF3C7" rx="0.5"/>
            {/* Wheels */}
            <circle cx="8" cy="15" r="2" fill="#1F2937" stroke="#D97706" strokeWidth="0.5"/>
            <circle cx="17" cy="15" r="2" fill="#1F2937" stroke="#D97706" strokeWidth="0.5"/>
            {/* Wheel details */}
            <circle cx="8" cy="15" r="1" fill="#4B5563"/>
            <circle cx="17" cy="15" r="1" fill="#4B5563"/>
          </g>

          {/* Decorative elements - Rajasthan-inspired */}
          <circle cx="15" cy="20" r="2" fill="#FBBF24" opacity="0.6"/>
          <circle cx="265" cy="20" r="2" fill="#FBBF24" opacity="0.6"/>
          <path d="M 18 22 L 20 24 L 22 22" stroke="#F59E0B" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M 260 22 L 262 24 L 264 22" stroke="#F59E0B" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

          {/* Accent dots around text */}
          <circle cx="25" cy="35" r="1.5" fill="#F59E0B" opacity="0.7"/>
          <circle cx="255" cy="35" r="1.5" fill="#F59E0B" opacity="0.7"/>
        </svg>
      </div>
    </div>
  );
};
