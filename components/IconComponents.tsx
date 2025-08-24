import React from 'react';
import { FaMoneyBillWave, FaLeaf, FaSmile, FaRegClock, FaBalanceScale, FaRedo } from 'react-icons/fa';

export const EconomyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <FaMoneyBillWave className={className} />
);

export const LeafIcon: React.FC<{ className?: string }> = ({ className }) => (
  <FaLeaf className={className} />
);

export const HappinessIcon: React.FC<{ className?: string }> = ({ className }) => (
  <FaSmile className={className} />
);

export const RoundsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <FaRegClock className={className} />
);

export const BalanceIcon: React.FC<{ className?: string }> = ({ className }) => (
  <FaBalanceScale className={className} />
);

export const ResetIcon: React.FC<{ className?: string }> = ({ className }) => (
  <FaRedo className={className} />
);

// Avatares low poly (se mantienen)
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

export const CommunityLeaderAvatar: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Cuerpo */}
    <polygon points="60,110 38,85 82,85" fill="#fef3c7" />
    <polygon points="60,85 48,65 72,65" fill="#fcd34d" />
    <polygon points="60,65 54,50 66,50" fill="#f59e0b" />
    {/* Cabeza */}
    <polygon points="60,50 51,38 69,38" fill="#fef08a" />
    {/* Sombrero comunitario */}
    <polygon points="60,38 45,30 75,30" fill="#dc2626" />
  </svg>
);

export const EnvironmentalistAvatar: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Cuerpo */}
    <polygon points="60,110 40,85 80,85" fill="#dcfce7" />
    <polygon points="60,85 48,65 72,65" fill="#86efac" />
    <polygon points="60,65 54,50 66,50" fill="#4ade80" />
    {/* Cabeza */}
    <polygon points="60,50 51,38 69,38" fill="#bbf7d0" />
    {/* Corona de flores */}
    <polygon points="60,38 45,32 75,32" fill="#fbbf24" />
    <polygon points="60,32 50,28 70,28" fill="#ef4444" />
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