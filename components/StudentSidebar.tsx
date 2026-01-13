
import React from 'react';
import { 
  Rocket, 
  Star, 
  Trophy, 
  BookOpen,
  ClipboardCheck,
  Layers,
  Sparkles,
  CalendarCheck,
  X
} from 'lucide-react';
import { View } from '../types';

interface StudentSidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export const StudentSidebar: React.FC<StudentSidebarProps> = ({ currentView, onViewChange, isOpen, onClose }) => {
  const menuItems = [
    { id: View.MY_ADVENTURE, label: 'My Adventure', icon: Rocket, color: '#ec2027' },
    { id: View.MY_STARS, label: 'My Stars', icon: Star, color: '#00a651' },
    { id: View.ATTENDANCE, label: 'My Check-in', icon: CalendarCheck, color: '#3b82f6' },
    { id: View.TROPHY_ROOM, label: 'Trophy Room', icon: Trophy, color: '#fbee21' },
    { id: View.RESOURCES, label: 'Book Library', icon: BookOpen, color: '#3b82f6' },
    { id: View.TESTS, label: 'Mission Tests', icon: ClipboardCheck, color: '#a855f7' },
    { id: View.OTHER_COURSES, label: 'Other Courses', icon: Layers, color: '#f43f5e' },
  ];

  const sidebarClasses = `
    fixed inset-y-0 left-0 z-50 w-72 bg-[#292667] text-white flex flex-col transition-transform duration-300 transform
    lg:relative lg:translate-x-0 lg:z-0 lg:shadow-none
    ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
    border-r-[12px] border-[#fbee21] shrink-0 overflow-hidden
  `;

  return (
    <div className={sidebarClasses}>
      <div className="p-6 flex-1 overflow-hidden flex flex-col justify-start relative">
        
        {/* Mobile Close Button */}
        <button 
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 text-white/50 hover:text-white"
        >
          <X size={24} strokeWidth={3} />
        </button>

        <div className="bg-white/10 p-6 rounded-[2.5rem] border-4 border-dashed border-[#fbee21]/30 relative group cursor-pointer overflow-hidden shrink-0 mb-8 text-center transition-all hover:bg-white/15">
          <div className="relative inline-block mb-3">
             <div className="w-20 h-20 md:w-24 md:h-24 bg-[#fbee21] rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center rotate-3 shadow-2xl mx-auto border-4 border-white">
                <img 
                  src="https://api.dicebear.com/7.x/adventurer/svg?seed=Buddy&backgroundColor=fbee21" 
                  className="w-16 h-16 md:w-20 md:h-20 drop-shadow-xl" 
                  alt="Student Avatar" 
                />
             </div>
             <div className="absolute -bottom-2 -right-2 bg-[#ec2027] text-white p-2 md:p-2.5 rounded-2xl shadow-lg border-2 border-white animate-bounce">
                <Sparkles size={14} strokeWidth={4} />
             </div>
          </div>
          <h4 className="text-lg md:text-xl font-black leading-none mt-2 text-white">Buddy Learner</h4>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="bg-[#fbee21] text-[#292667] px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">Super Star</span>
          </div>
        </div>

        <nav className="space-y-2 md:space-y-3 flex-1 overflow-y-auto scrollbar-hide py-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`w-full group flex items-center gap-4 px-4 md:px-5 py-3 md:py-4 rounded-[1.5rem] md:rounded-[1.8rem] transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#fbee21] text-[#292667] shadow-2xl scale-105 border-b-4 md:border-b-8 border-[#292667]/20' 
                    : 'hover:bg-white/10 text-white/70 hover:text-white'
                }`}
              >
                <div 
                  className={`p-2.5 md:p-3 rounded-xl md:rounded-2xl transition-all duration-200 group-hover:rotate-12 flex-shrink-0 shadow-lg ${isActive ? 'bg-[#292667]' : ''}`}
                  style={{ backgroundColor: isActive ? '#292667' : item.color }}
                >
                  <Icon 
                    size={24} 
                    strokeWidth={3.5} 
                    className={isActive ? 'text-[#fbee21]' : 'text-white'} 
                  />
                </div>
                <span className={`text-[13px] md:text-[15px] font-black uppercase tracking-tight text-left`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
