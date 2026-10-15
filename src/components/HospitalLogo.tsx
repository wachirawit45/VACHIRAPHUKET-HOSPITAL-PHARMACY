import React, { useState } from 'react';

export const OFFICIAL_VACHIRA_LOGO_URL =
  'https://upload.wikimedia.org/wikipedia/th/1/12/Logo_of_Vachira_Phuket_Hospital.jpg';

export const HospitalLogo: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 42,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative rounded-full bg-white border-2 border-emerald-700/80 shadow-sm flex items-center justify-center overflow-hidden shrink-0 ${className}`}
      title="โลโก้โรงพยาบาลวชิระภูเก็ต"
    >
      {!imageError ? (
        <img
          src={OFFICIAL_VACHIRA_LOGO_URL}
          alt="โลโก้โรงพยาบาลวชิระภูเก็ต"
          className="w-full h-full object-cover rounded-full"
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
        />
      ) : (
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-emerald-800 fill-current p-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Laurel / Wreath & Circle */}
          <circle cx="50" cy="50" r="46" fill="none" stroke="#047857" strokeWidth="3" />
          <circle cx="50" cy="50" r="41" fill="none" stroke="#065f46" strokeWidth="1" strokeDasharray="3 2" />

          {/* Rod of Asclepius & Thai Emblem Motif */}
          <path d="M48 18 H52 V82 H48 Z" fill="#065f46" />
          <path d="M50 10 C46 14 46 18 50 20 C54 18 54 14 50 10 Z" fill="#047857" />
          <path
            d="M36 30 C44 26 56 32 54 40 C52 48 38 48 40 58 C42 68 58 64 54 74 C50 82 46 76 44 80"
            fill="none"
            stroke="#047857"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="37" cy="30" r="3" fill="#047857" />
          <circle cx="50" cy="50" r="32" fill="none" stroke="#10b981" strokeWidth="0.8" opacity="0.6" />
          <path
            d="M50 26 L52 30 L56 30 L53 33 L54 37 L50 34 L46 37 L47 33 L44 30 L48 30 Z"
            fill="#059669"
          />
        </svg>
      )}
    </div>
  );
};
