import React from 'react';

export const WheatGrainAccent: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-70 transform rotate-12 transition-transform duration-700 hover:rotate-45"
      >
        <path
          d="M32 60V12"
          stroke="#C5A059"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Wheat kernels */}
        <path
          d="M32 20C26 16 22 20 22 24C22 28 32 30 32 30"
          fill="#DFC285"
          fillOpacity="0.4"
          stroke="#B8860B"
          strokeWidth="1.5"
        />
        <path
          d="M32 20C38 16 42 20 42 24C42 28 32 30 32 30"
          fill="#DFC285"
          fillOpacity="0.4"
          stroke="#B8860B"
          strokeWidth="1.5"
        />
        <path
          d="M32 32C26 28 22 32 22 36C22 40 32 42 32 42"
          fill="#DFC285"
          fillOpacity="0.4"
          stroke="#B8860B"
          strokeWidth="1.5"
        />
        <path
          d="M32 32C38 28 42 32 42 36C42 40 32 42 32 42"
          fill="#DFC285"
          fillOpacity="0.4"
          stroke="#B8860B"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};

export const CreamSwirlAccent: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        width="56"
        height="56"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-60"
      >
        <path
          d="M32 8C18 8 10 20 10 32C10 44 20 54 32 54C44 54 54 44 54 32C54 22 46 16 38 16C30 16 24 22 24 28C24 34 28 38 34 38C38 38 40 35 40 32"
          stroke="#C5A059"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="1 3"
        />
        <circle cx="34" cy="32" r="3" fill="#C5A059" />
      </svg>
    </div>
  );
};
