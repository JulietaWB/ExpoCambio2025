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

export const AdvisorAvatar: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g clipPath="url(#clip0_303_2)">
            <path d="M100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200Z" fill="#1E293B"/>
            <path d="M149 186C149 158.386 127.082 136 100 136C72.9184 136 51 158.386 51 186" fill="#334155"/>
            <path d="M129 97C129 112.987 115.987 126 100 126C84.0132 126 71 112.987 71 97C71 81.0132 84.0132 68 100 68C115.987 68 129 81.0132 129 97Z" fill="#94A3B8"/>
            <path d="M100 162C112.15 162 122 172.283 122 185V186H78V185C78 172.283 87.85 162 100 162Z" fill="#1E293B"/>
            <path d="M90 161L94 136H106L110 161" fill="#475569"/>
        </g>
        <defs>
            <clipPath id="clip0_303_2">
                <rect width="200" height="200" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);

export const BusinessmanAvatar: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="100" cy="100" r="100" fill="#E0E7FF"/>
        <path d="M100 135C72.3858 135 50 157.386 50 185V200H150V185C150 157.386 127.614 135 100 135Z" fill="#4A5568"/>
        <path d="M125 75C125 91.5685 113.807 105 100 105C86.1929 105 75 91.5685 75 75C75 58.4315 86.1929 45 100 45C113.807 45 125 58.4315 125 75Z" fill="#F4D03F"/>
        <rect x="85" y="135" width="30" height="50" fill="#2D3748"/>
        <path d="M85 135L100 155L115 135" fill="#4299E1"/>
        <path d="M95 90C95 92.7614 92.7614 95 90 95C87.2386 95 85 92.7614 85 90C85 87.2386 87.2386 85 90 85C92.7614 85 95 87.2386 95 90Z" fill="#2D3748"/>
        <path d="M115 90C115 92.7614 112.761 95 110 95C107.239 95 105 92.7614 105 90C105 87.2386 107.239 85 110 85C112.761 85 115 87.2386 115 90Z" fill="#2D3748"/>
    </svg>
);
export const ActivistAvatar: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="100" cy="100" r="100" fill="#D1FAE5"/>
        <path d="M100 140C72.3858 140 50 162.386 50 190V200H150V190C150 162.386 127.614 140 100 140Z" fill="#6B7280"/>
        <path d="M125 80C125 96.5685 113.807 110 100 110C86.1929 110 75 96.5685 75 80C75 63.4315 86.1929 50 100 50C113.807 50 125 63.4315 125 80Z" fill="#FBBF24"/>
        <path d="M40 120C40 108.954 48.9543 100 60 100H140C151.046 100 160 108.954 160 120V190H40V120Z" fill="#34D399"/>
        <path d="M90 60L70 40" stroke="#4B5563" strokeWidth="5" strokeLinecap="round"/>
        <path d="M110 60L130 40" stroke="#4B5563" strokeWidth="5" strokeLinecap="round"/>
    </svg>
);
export const FamilyManAvatar: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="100" cy="100" r="100" fill="#FEF3C7"/>
        <path d="M100 145C72.3858 145 50 167.386 50 195V200H150V195C150 167.386 127.614 145 100 145Z" fill="#78350F"/>
        <path d="M125 85C125 101.569 113.807 115 100 115C86.1929 115 75 101.569 75 85C75 68.4315 86.1929 55 100 55C113.807 55 125 68.4315 125 85Z" fill="#F9A825"/>
        <rect x="70" y="145" width="60" height="40" fill="#F87171"/>
        <path d="M90 105C90 107.761 87.7614 110 85 110C82.2386 110 80 107.761 80 105C80 102.239 82.2386 100 85 100C87.7614 100 90 102.239 90 105Z" fill="#78350F"/>
        <path d="M120 105C120 107.761 117.761 110 115 110C112.239 110 110 107.761 110 105C110 102.239 112.239 100 115 100C117.761 100 120 102.239 120 105Z" fill="#78350F"/>
        <path d="M90 120C95 125 105 125 110 120" stroke="#78350F" strokeWidth="5" strokeLinecap="round"/>
    </svg>
);
export const SmallBusinessOwnerAvatar: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="100" cy="100" r="100" fill="#DBEAFE"/>
        <path d="M100 130C72.3858 130 50 152.386 50 180V200H150V180C150 152.386 127.614 130 100 130Z" fill="#1E40AF"/>
        <path d="M125 70C125 86.5685 113.807 100 100 100C86.1929 100 75 86.5685 75 70C75 53.4315 86.1929 40 100 40C113.807 40 125 53.4315 125 70Z" fill="#F59E0B"/>
        <path d="M60 130H140V190H60V130Z" fill="#EF4444"/>
        <rect x="80" y="150" width="40" height="20" fill="#FBBF24"/>
        <path d="M95 85C95 87.7614 92.7614 90 90 90C87.2386 90 85 87.7614 85 85C85 82.2386 87.2386 80 90 80C92.7614 80 95 82.2386 95 85Z" fill="#1E40AF"/>
        <path d="M115 85C115 87.7614 112.761 90 110 90C107.239 90 105 87.7614 105 85C105 82.2386 107.239 80 110 80C112.761 80 115 82.2386 115 85Z" fill="#1E40AF"/>
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