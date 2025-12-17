import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// Changelog Icons
export const ZapIcon = ({ className = "w-4 h-4 mr-2 text-white/70" }: IconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor" />
  </svg>
);

export const MailIcon = ({ className = "w-4 h-4 mr-2 text-white/70" }: IconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M22 6v12H2V6h20zm-2 2H4v8h16V8zm-2 2v2H6v-2h12z" fill="currentColor" />
  </svg>
);

export const DatabaseIcon = ({ className = "w-4 h-4 mr-2 text-white/70" }: IconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M6 2h12v2h2v2h-2v2h2v2h-2v2h2v2h-2v2h2v2h-2v2H6v-2H4v-2h2v-2H4v-2h2v-2H4V8h2V6H4V4h2V2zm2 2v2h8V4H8zm8 4H8v2h8V8zm-8 4v2h8v-2H8zm0 4v2h8v-2H8z" fill="currentColor" />
  </svg>
);

export const ShieldIcon = ({ className = "w-4 h-4 mr-2 text-white/70" }: IconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M12 2l-8 3v7c0 5 3.5 9.2 8 10 4.5-.8 8-5 8-10V5l-8-3zm0 2.2L18 6v5c0 3.8-2.6 7.2-6 7.9-3.4-.7-6-4.1-6-7.9V6l6-1.8z" fill="currentColor" />
  </svg>
);

export const AnalyticsIcon = ({ className = "w-4 h-4 mr-2 text-white/70" }: IconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M3 3h2v18H3V3zm6 6h2v12H9V9zm6-4h2v16h-2V5zm6 8h2v8h-2v-8z" fill="currentColor" />
  </svg>
);

export const CommandIcon = ({ className = "w-4 h-4 mr-2 text-white/70" }: IconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M6 2h4v4H6V2zm0 6h4v4H6V8zm0 6h4v4H6v-4zm0 6h4v4H6v-4zm8-18h4v4h-4V2zm0 6h4v4h-4V8zm0 6h4v4h-4v-4zm0 6h4v4h-4v-4z" fill="currentColor" />
  </svg>
);

export const LayoutIcon = ({ className = "w-4 h-4 mr-2 text-white/70" }: IconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v4H7V7zm0 6h4v4H7v-4zm6 0h4v4h-4v-4z" fill="currentColor" />
  </svg>
);

export const SearchIcon = ({ className = "w-4 h-4 mr-2 text-white/70" }: IconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M10 2a8 8 0 015.3 14l5.4 5.3-1.4 1.4-5.3-5.4A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z" fill="currentColor" />
  </svg>
);

export const GlobeIcon = ({ className = "w-4 h-4 mr-2 text-white/70" }: IconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 2c1.8 0 3.4.6 4.7 1.6l-1.4 1.4c-1-.6-2.1-1-3.3-1s-2.3.4-3.3 1L7.3 5.6C8.6 4.6 10.2 4 12 4zm0 16c-1.8 0-3.4-.6-4.7-1.6l1.4-1.4c1 .6 2.1 1 3.3 1s2.3-.4 3.3-1l1.4 1.4c-1.3 1-2.9 1.6-4.7 1.6z" fill="currentColor" />
  </svg>
);

export const SettingsIcon = ({ className = "w-4 h-4 mr-2 text-white/70" }: IconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M12 8a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z" fill="currentColor" />
    <path d="M11 2h2v3h-2V2zm0 17h2v3h-2v-3zM3 11h3v2H3v-2zm15 0h3v2h-3v-2zM5.6 5.6l2.1 2.1-1.4 1.4-2.1-2.1 1.4-1.4zm11.3 9.7l2.1 2.1-1.4 1.4-2.1-2.1 1.4-1.4zM7.7 16.9l-2.1 2.1-1.4-1.4 2.1-2.1 1.4 1.4zM17.6 7.1l-2.1 2.1-1.4-1.4 2.1-2.1 1.4 1.4z" fill="currentColor" />
  </svg>
);

export const TrendingIcon = ({ className = "w-4 h-4 mr-2 text-white/70" }: IconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M16 6h6v6h-2V9.4l-4.3 4.3-4-4-5.4 5.4-1.4-1.4 6.7-6.7 4 4L19.6 8H16V6z" fill="currentColor" />
  </svg>
);

export const RocketIcon = ({ className = "w-4 h-4 mr-2 text-white/70" }: IconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M16 5v2h-2V5h2zm-4 4V7h2v2h-2zm-2 2V9h2v2h-2zm0 2H8v-2h2v2zm2 2v-2h-2v2h2zm0 0h2v2h-2v-2zm4 4v-2h-2v2h2z" fill="currentColor" />
  </svg>
);

export const ArrowRightIcon = ({ className = "w-4 h-4 mr-3 text-white/50" }: IconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M8 4h2v2H8V4zm2 2h2v2h-2V6zm2 2h2v2h-2V8zm2 2h2v2h-2v-2zm0 2v2h-2v-2h2zm-2 2v2h-2v-2h2zm-2 2v2H8v-2h2zm-2-2H6v-2h2v2zm2-2H8v-2h2v2zm2-2h-2V8h2v2z" fill="currentColor" />
  </svg>
);

export const ChevronIcon = ({ className = "w-3 h-3 mr-2 text-white/50" }: IconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M8 5v2h2V5H8zm4 4V7h-2v2h2zm2 2V9h-2v2h2zm0 2h2v-2h-2v2zm-2 2v-2h2v2h-2zm0 0h-2v2h2v-2zm-4 4v-2h2v2H8z" fill="currentColor" />
  </svg>
);

// Installation Page Icons
export const HostedIcon = ({ className = "w-3 h-3 inline-flex mr-1 text-white/50" }: IconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 6c1.38 0 2.5-1.12 2.5-2.5S13.38 11.5 12 11.5 9.5 12.62 9.5 14 10.62 16.5 12 16.5z" fill="currentColor" />
  </svg>
);

export const BetaIcon = ({ className = "w-3 h-3 inline-flex mr-1 text-white/50" }: IconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M12 2h2v2h-2V2zm-2 4h6v2h-2v6h-2V8H8V6zm-4 8h12v2H4v-2zm0 4h12v2H4v-2z" fill="currentColor" />
  </svg>
);

export const DownloadIcon = ({ className = "w-3 rotate-180 h-3 inline-flex mr-1 text-white/50 hover:text-white transition-colors" }: IconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M16 5v2h-2V5h2zm-4 4V7h2v2h-2zm-2 2V9h2v2h-2zm0 2H8v-2h2v2zm2 2v-2h-2v2h2zm0 0h2v2h-2v-2zm4 4v-2h-2v2h2z" fill="currentColor" />
  </svg>
);

export const InstallIcon = ({ className = "w-3 h-3 inline-flex mr-1 text-white/50" }: IconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M11 4h2v12h2v2h-2v2h-2v-2H9v-2h2V4zM7 14v2h2v-2H7zm0 0v-2H5v2h2zm10 0v2h-2v-2h2zm0 0v-2h2v2h-2z" fill="currentColor" />
  </svg>
);

export const BasicUsageIcon = ({ className = "w-3 h-3 inline-flex mr-1 text-white/50" }: IconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M4 2H2v8h2V2zm16 0h2v8h-2V2zm-6 6h-4V2H4v2h4v4H4v2h4v4H4v2h4v4H4v2h6v-6h4v6h2v-6h4v-2h-4v-4h4V8h-4V2h-2v6zm-4 6v-4h4v4h-4zM20 2h-4v2h4V2zM2 14h2v8H2v-8zm14 6h4v2h-4v-2zm6-6h-2v8h2v-8z" fill="currentColor" />
  </svg>
);

export const PrerequisitesIcon = ({ className = "w-3 h-3 inline-flex mr-1 text-white/50" }: IconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M18 6h2v2h-2V6zm-2 4V8h2v2h-2zm-2 2v-2h2v2h-2zm-2 2h2v-2h-2v2zm-2 2h2v-2h-2v2zm-2 0v2h2v-2H8zm-2-2h2v2H6v-2zm0 0H4v-2h2v2z" fill="currentColor" />
  </svg>
);

export const DataLayersIcon = ({ className = "w-3 h-3 inline-flex mr-1 text-white/50" }: IconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M2 4h20v4H2V4zm18 2v2H4V6h16zm0 6H2v4h18v-4zm-2 2v2H4v-2h14zM2 16h20v4H2v-4zm18 2v2H4v-2h16z" fill="currentColor" />
  </svg>
);

export const DocumentIcon = ({ className = "w-3 h-3 inline-flex mr-1 text-white/50" }: IconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M3 3h14v2h2v2h2v14H3V3zm2 2v14h14V7h-2V5H5zm2 2h8v2H7V7zm0 4h10v2H7v-2zm0 4h10v2H7v-2z" fill="currentColor" />
  </svg>
);

export const CalendarIcon = ({ className = "w-3 h-3 inline-flex mr-1 text-white/70" }: IconProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5C3.89 3 3 3.89 3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 16H5V8h14v11z" fill="currentColor" />
  </svg>
);

