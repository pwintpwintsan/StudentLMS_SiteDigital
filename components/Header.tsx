
import React from 'react';
import { Menu, Bell, Star } from 'lucide-react';

interface HeaderProps {
  schoolName: string;
  teacherCode: string;
  onMenuToggle?: () => void;
}

const Logo = () => (
  <div className="flex flex-col items-center py-4 md:py-5 select-none group">
    <svg width="80" height="56" viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:scale-105 transition-transform duration-300 hidden md:block">
      <g transform="translate(10, 5)">
        <path d="M25 25c0-10 8-15 15-15s15 5 15 15-8 15-15 15-15-5-15-15z" fill="#FFE0BD" />
        <path d="M20 18c0-8 8-13 20-13s20 5 20 13c-4-3-10-4-20-4s-16 1-20 4z" fill="#444" />
        <circle cx="33" cy="25" r="9" stroke="#000" strokeWidth="1.5" fill="white" />
        <circle cx="47" cy="25" r="9" stroke="#000" strokeWidth="1.5" fill="white" />
        <path d="M38 25h4" stroke="#000" strokeWidth="1.5" />
        <path d="M25 45h30l6 18H19l6-18z" fill="#ec2027" />
        <path d="M30 45h20v18H30V45z" fill="#00a651" />
        <path d="M15 55l25 12 25-12v15l-25 12-25-12z" fill="#fbee21" stroke="#000" strokeWidth="1" />
        <circle cx="28" cy="65" r="3" fill="#292667" />
        <path d="M38 65l4 4l-4 4" stroke="#000" strokeWidth="1.5" fill="none" />
        <path d="M30 75c3 0 5-2 5-2" stroke="#000" strokeWidth="1" />
      </g>
      <g transform="translate(85, 10)">
        <path d="M15 20c0-10 8-15 15-15s15 5 15 15-8 15-15 15-15-5-15-15z" fill="#FFE0BD" />
        <path d="M10 15c0-8 8-13 20-13s20 5 20 13" fill="#444" />
        <circle cx="8" cy="35" r="4" fill="#ec2027" />
        <circle cx="52" cy="35" r="4" fill="#ec2027" />
        <path d="M8 35l-4 6" stroke="#000" strokeWidth="1" />
        <path d="M52 35l4 6" stroke="#000" strokeWidth="1" />
        <circle cx="23" cy="20" r="9" stroke="#000" strokeWidth="1.5" fill="white" />
        <circle cx="37" cy="20" r="9" stroke="#000" strokeWidth="1.5" fill="white" />
        <path d="M15 40h30l6 14H9l6-14z" fill="#00a651" />
        <path d="M20 40h20v14H20V40z" fill="#ec2027" />
        <path d="M12 48l18 4 18-4v10l-18 4-18-4z" fill="white" stroke="#000" strokeWidth="1" />
      </g>
      <text x="75" y="95" fontFamily="Arial Black, sans-serif" fontSize="20" fill="#292667" fontWeight="900">B</text>
      <text x="92" y="95" fontFamily="Arial Black, sans-serif" fontSize="20" fill="#ec2027" fontWeight="900">O</text>
      <text x="109" y="95" fontFamily="Arial Black, sans-serif" fontSize="20" fill="#fbee21" fontWeight="900">O</text>
      <text x="126" y="95" fontFamily="Arial Black, sans-serif" fontSize="20" fill="#292667" fontWeight="900">K</text>
    </svg>
    <div className="flex items-center mt-1">
      <span className="text-xl md:text-2xl font-black text-[#ec2027] pr-1">U</span>
      <span className="text-lg md:text-xl font-black text-[#292667] tracking-tight">Book Store</span>
    </div>
  </div>
);

export const Header: React.FC<HeaderProps> = ({ schoolName, teacherCode, onMenuToggle }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-4 border-[#fbee21] flex items-center shadow-sm shrink-0">
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full flex justify-between items-center h-auto min-h-[4rem] md:min-h-[5rem]">
        
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-xl text-[#292667] bg-slate-50 border border-slate-200 active:scale-95 transition-all"
          >
            <Menu size={24} strokeWidth={3} />
          </button>
          <Logo />
        </div>

        <div className="flex items-center space-x-2">
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {['Home', 'Resources', 'Support'].map((item) => (
              <a key={item} href="#" className="text-[#292667] font-black text-sm lg:text-lg hover:text-[#ec2027] px-3 lg:px-6 py-2 rounded-full transition-all uppercase tracking-tighter">
                {item}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-3 md:gap-4 md:ml-6 md:pl-6 md:border-l-2 border-slate-100">
            <div className="hidden sm:block text-right">
              <p className="text-[10px] md:text-[12px] font-black text-[#ec2027] uppercase tracking-widest leading-none">{schoolName}</p>
              <div className="flex items-center gap-1 justify-end mt-1">
                 <Star size={12} className="fill-[#fbee21] text-[#fbee21]" />
                 <p className="text-sm md:text-base font-black text-[#292667] leading-none">{teacherCode}</p>
              </div>
            </div>
            <button className="p-2 md:p-3 bg-slate-50 text-[#292667] hover:bg-[#ec2027] hover:text-white rounded-xl transition-all shadow-sm relative group active:scale-90">
              <Bell size={20} md:size={24} strokeWidth={3} />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#00a651] rounded-full border-2 border-white"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
