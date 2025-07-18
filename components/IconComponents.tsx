import React from 'react';

export const EconomyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 11.219 12.768 11 12 11c-.768 0-1.536.219-2.121.727H12M4.5 12.75a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 0 1 15 0" />
  </svg>
);

export const EcosystemIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c2.485 0 4.5-2.099 4.5-4.688 0-1.935-1.126-3.597-2.733-4.312-1.607.715-2.733 2.377-2.733 4.313C11.75 19.1 10.135 21 8.25 21s-4.5-2.099-4.5-4.688c0-1.935 1.126-3.597 2.733-4.312C7.365 14.022 6 15.687 6 17.625 6 20.1 8.015 21.75 12 21.75zM12 12.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
  </svg>
);
// A simpler leaf icon for Ecosystem
export const LeafIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /> {/* Placeholder using code icon, will find better leaf */}
   <path strokeLinecap="round" strokeLinejoin="round" d="M9.167 11.333C6.333 11.333 5.5 13.5 5.5 15.5S6.333 19.667 9.167 19.667h5.666c2.834 0 3.667-2.167 3.667-4.167s-.833-4.167-3.667-4.167H9.167zm0-4.166C6.333 7.167 5.5 9.333 5.5 11.333M14.833 7.167c2.834 0 3.667 2.166 3.667 4.166" /> {/* A more abstract leaf/plant shape */}
</svg>
);


export const HappinessIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75s.168-.75.375-.75S9.75 9.336 9.75 9.75Zm4.5 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Z" />
  </svg>
);

export const RoundsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
  </svg>
);

// NUEVOS AVATARES LOW POLY
export const BusinessmanAvatar: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Cuerpo */}
    <polygon points="60,110 40,80 80,80" fill="#7dd3fc" />
    <polygon points="60,80 50,60 70,60" fill="#38bdf8" />
    <polygon points="60,60 55,45 65,45" fill="#22d3ee" />
    {/* Cabeza */}
    <polygon points="60,45 52,35 68,35" fill="#bae6fd" />
    {/* Corbata */}
    <polygon points="60,80 58,70 62,70" fill="#fbbf24" />
  </svg>
);

export const ActivistAvatar: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Cuerpo */}
    <polygon points="60,110 35,85 85,85" fill="#bbf7d0" />
    <polygon points="60,85 50,65 70,65" fill="#4ade80" />
    <polygon points="60,65 55,50 65,50" fill="#22c55e" />
    {/* Cabeza */}
    <polygon points="60,50 52,38 68,38" fill="#a7f3d0" />
    {/* Hoja */}
    <polygon points="60,38 57,32 63,32" fill="#16a34a" />
  </svg>
);

export const FamilyManAvatar: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Cuerpo */}
    <polygon points="60,110 42,90 78,90" fill="#fef9c3" />
    <polygon points="60,90 50,70 70,70" fill="#fde68a" />
    <polygon points="60,70 55,55 65,55" fill="#fbbf24" />
    {/* Cabeza */}
    <polygon points="60,55 52,45 68,45" fill="#fef08a" />
    {/* Corazón */}
    <ellipse cx="60" cy="100" rx="6" ry="3" fill="#f87171" />
  </svg>
);

export const SmallBusinessOwnerAvatar: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Cuerpo */}
    <polygon points="60,110 45,88 75,88" fill="#dbeafe" />
    <polygon points="60,88 52,70 68,70" fill="#60a5fa" />
    <polygon points="60,70 56,58 64,58" fill="#2563eb" />
    {/* Cabeza */}
    <polygon points="60,58 54,48 66,48" fill="#bae6fd" />
    {/* Delantal */}
    <rect x="56" y="88" width="8" height="10" fill="#fbbf24" rx="2" />
  </svg>
);


export const CityscapeIllustration: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 600 200" preserveAspectRatio="none" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M0 200H600V150H580V100H560V150H540V120H520V150H500V80H480V150H450V110H430V150H400V90H380V150H360V130H340V150H300V60H280V150H250V100H230V150H200V120H180V150H150V70H130V150H100V110H80V150H50V130H30V150H0V200Z" />
        <path d="M280 60L300 40L320 60H280Z" opacity="0.7" />
        <path d="M480 80L500 60L520 80H480Z" opacity="0.7" />
        <path d="M130 70L150 50L170 70H130Z" opacity="0.7" />
    </svg>
);

export const BalanceIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0 0a1.5 1.5 0 001.5-1.5v-1.5a1.5 1.5 0 00-3 0v1.5a1.5 1.5 0 001.5 1.5zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 12.75h13.5M3 12h.75M20.25 12H21" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 12.75L3 9.75l2.25-3M18.75 12.75L21 9.75l-2.25-3" />
    </svg>
);

export const ResetIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.181-3.183m-4.991-2.696L7.985 9.348m0 0L4.804 12.531m3.181-3.183a8.25 8.25 0 0111.664 0l3.181 3.183" />
    </svg>
);