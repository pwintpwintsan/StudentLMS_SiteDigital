
import React, { useState } from 'react';
import { Menu, LogOut, Star, Play, X, HelpCircle, Zap } from 'lucide-react';

export const UBookLogo = ({ className = "w-[120px] h-auto" }: { className?: string }) => (
  <div className={`flex flex-col items-center select-none ${className}`}>
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-md">
      {/* Background characters based on image */}
      <g transform="translate(40, 0)">
        {/* Boy Character */}
        <g transform="translate(40, 10)">
          <path d="M40 0C62 0 80 18 80 40C80 62 62 80 40 80C18 80 0 62 0 40C0 18 18 0 40 0Z" fill="#FFE0BD" />
          <path d="M0 30C0 15 15 0 40 0C65 0 80 15 80 30L80 40C80 40 70 30 40 30C10 30 0 40 0 40V30Z" fill="#444" />
          <circle cx="25" cy="45" r="18" stroke="black" strokeWidth="2.5" fill="white" />
          <circle cx="55" cy="45" r="18" stroke="black" strokeWidth="2.5" fill="white" />
          <path d="M35 45H45" stroke="black" strokeWidth="2" />
          <path d="M10 80L70 80L80 120L0 120L10 80Z" fill="#00a651" />
          <path d="M30 80H50L55 120H25L30 80Z" fill="#ec2027" />
        </g>
        {/* Girl Character */}
        <g transform="translate(180, 20)">
          <path d="M40 0C62 0 80 18 80 40C80 62 62 80 40 80C18 80 0 62 0 40C0 18 18 0 40 0Z" fill="#FFE0BD" />
          <path d="M0 25C0 10 15 0 40 0C65 0 80 10 80 25V35C80 35 70 20 40 20C10 20 0 35 0 35V25Z" fill="#444" />
          <circle cx="20" cy="45" r="18" stroke="black" strokeWidth="2.5" fill="white" />
          <circle cx="60" cy="45" r="18" stroke="black" strokeWidth="2.5" fill="white" />
          <path d="M10 80L70 80L80 120L0 120L10 80Z" fill="#ec2027" />
          <path d="M30 80H50L55 120H25L30 80Z" fill="#00a651" />
        </g>
      </g>
      {/* Yellow Book in front of boy */}
      <g transform="translate(60, 110) rotate(-5)">
        <path d="M0 0H80V100L40 120L0 100V0Z" fill="#fbee21" stroke="#292667" strokeWidth="2" />
        <circle cx="25" cy="40" r="8" fill="#3b82f6" stroke="#292667" strokeWidth="1.5" />
        <path d="M50 35L60 45" stroke="#292667" strokeWidth="3" strokeLinecap="round" />
        <path d="M35 70C35 85 45 85 45 70" stroke="#292667" strokeWidth="4" strokeLinecap="round" fill="none" />
      </g>
      {/* BOOK Text */}
      <g transform="translate(180, 150)">
        <text x="0" y="40" fontFamily="Arial Black, sans-serif" fontSize="50" fill="#292667" fontWeight="900">B</text>
        <text x="45" y="40" fontFamily="Arial Black, sans-serif" fontSize="50" fill="#ec2027" fontWeight="900">O</text>
        <text x="90" y="40" fontFamily="Arial Black, sans-serif" fontSize="50" fill="#fbee21" fontWeight="900">O</text>
        <text x="135" y="40" fontFamily="Arial Black, sans-serif" fontSize="50" fill="#292667" fontWeight="900">K</text>
      </g>
      {/* U Book Store Subtext */}
      <g transform="translate(0, 220)">
        <text x="50%" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="38" fill="#292667" fontWeight="900">
          <tspan fill="#ec2027">U</tspan> Book Store
        </text>
      </g>
    </svg>
  </div>
);

const TutorialModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#292667]/80 backdrop-blur-md animate-in fade-in duration-300">
    <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] w-full max-w-4xl shadow-2xl border-b-[8px] border-[#ec2027] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
      <div className="bg-[#292667] p-4 md:p-6 text-white flex items-center justify-between relative overflow-hidden shrink-0">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
        <div className="flex items-center gap-3 md:gap-4 relative z-10">
          <div className="p-2 bg-[#fbee21] rounded-xl text-[#292667] rotate-3 shadow-lg">
            <Play size={20} fill="currentColor" />
          </div>
          <div>
            <h3 className="text-base md:text-xl font-black uppercase tracking-tight leading-none">Adventure Tutorial</h3>
          </div>
        </div>
        <button onClick={onClose} className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all relative z-10">
          <X size={20} strokeWidth={4} />
        </button>
      </div>

      <div className="p-4 md:p-6 bg-slate-50">
        <div className="aspect-video w-full bg-[#292667] rounded-[1.5rem] overflow-hidden relative shadow-lg border-2 border-slate-200 group">
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
             <div className="flex flex-col items-center gap-4 text-white text-center p-6">
                <HelpCircle size={48} className="text-[#fbee21] animate-pulse" />
                <h4 className="text-lg md:text-2xl font-black uppercase">Ready to learn?</h4>
                <p className="text-xs md:text-sm font-bold opacity-80 max-w-md">Complete missions and earn stars!</p>
                <button className="px-6 py-2.5 bg-[#fbee21] text-[#292667] rounded-xl font-black uppercase shadow-xl hover:scale-105 transition-transform active:scale-95 text-xs">
                  Play Tutorial
                </button>
             </div>
          </div>
          <img src="https://picsum.photos/seed/tutorial/1200/675" alt="Tutorial Preview" className="w-full h-full object-cover opacity-30" />
        </div>
      </div>

      <div className="p-4 bg-slate-100 border-t-2 border-slate-200 flex justify-center shrink-0">
         <button onClick={onClose} className="px-8 py-3 bg-[#292667] text-[#fbee21] rounded-xl font-black text-xs uppercase tracking-widest shadow-lg hover:bg-[#ec2027] hover:text-white transition-all active:scale-95 border-b-4 border-black/20">
           Close
         </button>
      </div>
    </div>
  </div>
);

interface HeaderProps {
  schoolName: string;
  teacherCode: string;
  onMenuToggle: () => void;
  onLogout: () => void;
  isLoggedIn: boolean;
}

export const Header: React.FC<HeaderProps> = ({ schoolName, teacherCode, onMenuToggle, onLogout, isLoggedIn }) => {
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 flex items-center shadow-sm shrink-0">
      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-3 items-center h-14 md:h-16">
        
        <div className="flex items-center gap-3">
          <button 
            onClick={onMenuToggle}
            className="lg:hidden p-1.5 rounded-lg text-[#292667] bg-slate-50 border border-slate-200"
          >
            <Menu size={18} strokeWidth={3} />
          </button>
          <div className="hidden md:block text-left">
            <p className="text-[10px] font-black text-[#292667] leading-none uppercase">{teacherCode}</p>
          </div>
        </div>

        {/* School Name in Middle */}
        <div className="flex items-center justify-center gap-2">
          <UBookLogo className="w-10 md:w-14" />
          <div className="block whitespace-nowrap">
            <span className="text-sm md:text-base font-black text-[#ec2027]">U</span>
            <span className="text-sm md:text-base font-black text-[#292667] tracking-tight ml-0.5">{schoolName}</span>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-2">
          {isLoggedIn && (
            <button 
              onClick={() => setIsTutorialOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#fbee21]/20 text-[#292667] hover:bg-[#fbee21] rounded-lg transition-all active:scale-95"
            >
              <Play size={12} fill="currentColor" />
              <span className="text-[10px] font-black uppercase tracking-tight">Tutorial</span>
            </button>
          )}
          
          <div className="flex items-center gap-3">
            {isLoggedIn && (
              <button 
                onClick={onLogout}
                className="p-2 bg-red-50 text-[#ec2027] hover:bg-[#ec2027] hover:text-white rounded-lg transition-all active:scale-90"
              >
                <LogOut size={16} strokeWidth={3} />
              </button>
            )}
          </div>
        </div>
      </div>

      {isTutorialOpen && <TutorialModal onClose={() => setIsTutorialOpen(false)} />}
    </header>
  );
};
