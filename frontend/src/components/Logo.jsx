import React from 'react';

export const Logo = ({ className = "", size = "default" }) => {
  const sizes = {
    small: { width: 40, height: 40, text: "text-lg" },
    default: { width: 50, height: 50, text: "text-xl" },
    large: { width: 60, height: 60, text: "text-2xl" }
  };

  const { width, height, text } = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className="relative" style={{ width: `${width}px`, height: `${height}px` }}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Circular background */}
          <circle cx="50" cy="50" r="48" fill="url(#gradient)" stroke="#D97706" strokeWidth="2"/>
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#F59E0B', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#EA580C', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          
          {/* Car icon */}
          <g transform="translate(25, 35)">
            <path
              d="M5 15 L10 10 L15 10 L20 8 L30 8 L35 10 L40 10 L45 15 L45 25 L5 25 Z"
              fill="white"
              stroke="white"
              strokeWidth="1.5"
            />
            {/* Car windows */}
            <rect x="12" y="12" width="10" height="6" fill="#D97706" rx="1"/>
            <rect x="28" y="12" width="10" height="6" fill="#D97706" rx="1"/>
            {/* Wheels */}
            <circle cx="15" cy="27" r="3" fill="#1F2937" stroke="white" strokeWidth="1"/>
            <circle cx="35" cy="27" r="3" fill="#1F2937" stroke="white" strokeWidth="1"/>
          </g>
          
          {/* Rajasthan-style decorative dots */}
          <circle cx="20" cy="20" r="2" fill="white" opacity="0.6"/>
          <circle cx="80" cy="20" r="2" fill="white" opacity="0.6"/>
          <circle cx="20" cy="80" r="2" fill="white" opacity="0.6"/>
          <circle cx="80" cy="80" r="2" fill="white" opacity="0.6"/>
        </svg>
      </div>
      
      {/* Logo Text */}
      <div className="flex flex-col leading-tight">
        <span className={`font-bold text-amber-700 ${text}`}>
          Chokho Safar
        </span>
        <span className="text-xs text-gray-600 -mt-1">
          Travels
        </span>
      </div>
    </div>
  );
};
