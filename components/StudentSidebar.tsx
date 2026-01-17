
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
  X,
  LogOut,
  User,
  Heart
} from 'lucide-react';
import { View, Student } from '../types';

interface StudentSidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
  isOpen?: boolean;
  onClose?: () => void;
  student: Student;
  onLogout: () => void;
}

export const StudentSidebar: React.FC<StudentSidebarProps> = ({ currentView, onViewChange, isOpen, onClose, student, onLogout }) => {
  const menuItems = [
    { id: View.MY_ADVENTURE, label: 'Adventure', icon: Rocket, color: '#ec2027' },
    { id: View.MY_STARS, label: 'My Stars', icon: Star, color: '#fbee21' },
    { id: View.ATTENDANCE, label: 'Check-in', icon: CalendarCheck, color: '#00a651' },
    { id: View.TROPHY_ROOM, label: 'Trophies', icon: Trophy, color: '#fbee21' },
    { id: View.RESOURCES, label: 'Library', icon: BookOpen, color: '#ec2027' },
    { id: View.TESTS, label: 'Missions', icon: ClipboardCheck, color: '#00a651' },
    { id: View.OTHER_COURSES, label: 'Discovery', icon: Layers, color: '#ec2027' },
  ];

  const sidebarClasses = `
    fixed inset-y-0 left-0 z-50 w-72 bg-[#292667] border-r-[12px] border-[#ec2027] flex flex-col transition-transform duration-300 transform
    lg:relative lg:translate-x-0 lg:z-0 lg:shadow-none
    ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
    shrink-0 overflow-hidden
  `;

  return (
    <div className={sidebarClasses}>
      <div className="p-6 flex-1 overflow-hidden flex flex-col justify-start relative">
        
        {/* Mobile Close Button */}
        <button 
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 text-white/50 hover:text-white bg-white/10 rounded-xl"
        >
          <X size={24} strokeWidth={4} />
        </button>

        {/* Student Profile Card - Very Playful */}
        <button 
          onClick={() => onViewChange(View.PROFILE)}
          className={`w-full bg-white p-5 rounded-[2.5rem] border-[6px] relative group cursor-pointer overflow-hidden shrink-0 mb-8 text-center transition-all hover:-translate-y-1 ${
            currentView === View.PROFILE ? 'border-[#fbee21] bg-[#fffbeb]' : 'border-white'
          }`}
        >
          <div className="relative inline-block mb-3">
             <div className="w-20 h-20 bg-[#fbee21] rounded-[2rem] flex items-center justify-center rotate-6 shadow-xl mx-auto border-[4px] border-[#292667]">
                <img 
                  src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${student.avatarSeed || 'Buddy'}&backgroundColor=fbee21`} 
                  className="w-16 h-16 drop-shadow-md" 
                  alt="Student Avatar" 
                />
             </div>
             <div className="absolute -bottom-1 -right-1 bg-[#ec2027] text-white p-2 rounded-xl shadow-lg border-[3px] border-white -rotate-12">
                <Heart size={14} fill="currentColor" strokeWidth={3} />
             </div>
          </div>
          <h4 className="text-base font-black leading-none text-[#292667] uppercase tracking-tight truncate">{student.firstName}</h4>
          <p className="text-[10px] font-black text-slate-400 uppercase mt-2 tracking-widest">{student.level}</p>
        </button>

        <nav className="space-y-3 flex-1 overflow-y-auto scrollbar-hide py-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`w-full group flex items-center gap-4 px-4 py-4 rounded-[1.8rem] transition-all duration-300 border-[4px] ${
                  isActive 
                    ? 'bg-white text-[#292667] border-[#fbee21] shadow-xl scale-[1.05]' 
                    : 'text-white/70 border-transparent hover:bg-white/10 hover:text-white'
                }`}
              >
                <div 
                  className={`p-2.5 rounded-2xl transition-all duration-300 group-hover:rotate-12 flex-shrink-0 shadow-md ${isActive ? '' : 'bg-white/5'}`}
                  style={{ color: item.color }}
                >
                  <Icon size={24} strokeWidth={isActive ? 4 : 3} className={isActive && item.color === '#fbee21' ? 'fill-[#fbee21] stroke-[#292667]' : ''} />
                </div>
                <span className="text-[14px] font-black uppercase tracking-widest">
                  {item.label}
                </span>
                {isActive && <Sparkles size={16} className="ml-auto text-[#fbee21] animate-pulse" />}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Logout Footer with Bold Styling */}
      <div className="p-6 shrink-0 bg-black/10">
        <button 
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-3 p-4 bg-white text-[#292667] hover:bg-[#ec2027] hover:text-white rounded-[1.8rem] transition-all active:scale-95 shadow-lg border-[4px] border-transparent hover:border-white font-black text-sm uppercase tracking-widest group"
        >
          <LogOut size={20} strokeWidth={4} className="group-hover:-translate-x-1 transition-transform" />
          Exit Quest
        </button>
      </div>
    </div>
  );
};
