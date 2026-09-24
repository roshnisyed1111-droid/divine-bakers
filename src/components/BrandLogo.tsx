import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'light',
  className = '',
  showTagline = false,
}) => {
  const isDark = variant === 'dark';
  const primaryTextColor = isDark ? '#FFFFFF' : '#5A0F1B';
  const goldColor = isDark ? '#E5C77A' : '#B8860B';
  const subtextColor = isDark ? '#E2D9CF' : '#6B1724';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Brand Crown / Laurel Medallion */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width="42"
          height="42"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
          aria-hidden="true"
        >
          {/* Subtle Outer Ring */}
          <circle
            cx="24"
            cy="24"
            r="22"
            stroke={goldColor}
            strokeWidth="1.2"
            strokeDasharray="2 3"
            opacity={isDark ? "0.7" : "0.5"}
          />
          <circle
            cx="24"
            cy="24"
            r="19.5"
            stroke={goldColor}
            strokeWidth="0.8"
            opacity={isDark ? "0.85" : "0.7"}
          />
          {/* Central DB Crest / Baker Monogram */}
          <path
            d="M17 14H24C27.3137 14 30 16.2386 30 19C30 20.8929 28.7441 22.5298 26.9248 23.3642C29.2882 24.1611 31 26.2415 31 28.75C31 31.9256 28.0899 34.5 24.5 34.5H17V14Z"
            fill={isDark ? "#5A0F1B" : "#FAF7F2"}
            stroke={goldColor}
            strokeWidth="1.4"
          />
          <path
            d="M20.5 18H23.5C25.1569 18 26.5 19.1193 26.5 20.5C26.5 21.8807 25.1569 23 23.5 23H20.5V18Z"
            fill={primaryTextColor}
          />
          <path
            d="M20.5 25.5H24C25.933 25.5 27.5 26.8431 27.5 28.5C27.5 30.1569 25.933 31.5 24 31.5H20.5V25.5Z"
            fill={primaryTextColor}
          />
          {/* Laurel Flourish Leaves */}
          <path
            d="M9 24C9 18 13 13 18 10"
            stroke={goldColor}
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M39 24C39 18 35 13 30 10"
            stroke={goldColor}
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Typography Lockup */}
      <div className="flex flex-col text-left">
        <div className="flex items-baseline gap-1.5">
          <span
            className="text-lg md:text-xl font-bold tracking-[0.12em] font-editorial leading-none uppercase"
            style={{ color: primaryTextColor }}
          >
            DIVINE
          </span>
          <span
            className="text-lg md:text-xl font-semibold tracking-[0.14em] font-editorial leading-none uppercase"
            style={{ color: isDark ? '#FFFFFF' : '#1C1917' }}
          >
            BAKERS
          </span>
        </div>

        <div className="flex items-center gap-1.5 mt-0.5">
          <span
            className="text-[9px] uppercase tracking-[0.24em] font-medium"
            style={{ color: subtextColor }}
          >
            SWEETS
          </span>
          <span
            className="inline-block w-1 h-1 rounded-full"
            style={{ backgroundColor: goldColor }}
            aria-hidden="true"
          />
          <span
            className="text-[9px] tracking-[0.18em] font-medium uppercase"
            style={{ color: isDark ? '#D6C8B8' : '#78716C' }}
          >
            LAHORE
          </span>
        </div>

        {showTagline && (
          <span
            className="text-[10px] italic font-serif mt-0.5"
            style={{ color: isDark ? '#DFC285' : '#8C5E1B' }}
          >
            Making every happiness special
          </span>
        )}
      </div>
    </div>
  );
};
