
import React, { useState } from 'react';
import { 
  FileText, PlayCircle, Download, Search, 
  Sparkles, BookOpen, Bookmark, Video, 
  FileCheck, Compass 
} from 'lucide-react';

interface TeachingResourcesViewProps {
  onEnterCourse: (name: string) => void;
}

export const TeachingResourcesView: React.FC<TeachingResourcesViewProps> = ({ onEnterCourse }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'books' | 'videos' | 'activity'>('all');
  
  const resources = [
    { id: 1, title: 'My Coding Guide', type: 'PDF', category: 'books', size: '2.4 MB', series: 'Digital Kids Starter V2', color: '#3b82f6' },
    { id: 2, title: 'Animated Intro', type: 'Video', category: 'videos', size: '45 MB', series: 'Level 1 Core Robotics', color: '#ec2027' },
    { id: 3, title: 'Logic Workshop', type: 'PDF', category: 'activity', size: '1.1 MB', series: 'Digital Kids Starter V2', color: '#00a651' },
    { id: 4, title: 'Pattern Puzzle', type: 'Game', category: 'activity', size: '3.8 MB', series: 'Global Coding V3', color: '#a855f7' },
    { id: 5, title: 'Binary Hero Story', type: 'EPUB', category: 'books', size: '5.2 MB', series: 'Level 1 Core Robotics', color: '#fbee21' },
    { id: 6, title: 'Bot Builder Tips', type: 'Video', category: 'videos', size: '120 MB', series: 'Robotics Mastery', color: '#f43f5e' },
  ];

  const filteredResources = resources.filter(res => activeTab === 'all' || res.category === activeTab);

  const tabs = [
    { id: 'all', label: 'All Files', icon: Compass },
    { id: 'books', label: 'Adventure Books', icon: BookOpen },
    { id: 'videos', label: 'Learning Videos', icon: Video },
    { id: 'activity', label: 'Worksheets', icon: FileCheck },
  ];

  return (
    <div className="h-full flex flex-col gap-6 overflow-hidden">
      <div className="w-full bg-[#292667] rounded-[3rem] p-8 text-white shadow-2xl border-b-[12px] border-[#3b82f6] flex flex-col md:flex-row items-center justify-between gap-8 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
        <div className="flex items-center gap-6 relative z-10">
           <div className="p-5 bg-[#3b82f6] rounded-[2.5rem] text-white shadow-xl rotate-3">
             <Bookmark size={42} strokeWidth={3.5} />
           </div>
           <div>
             <h2 className="text-4xl font-black leading-none tracking-tight uppercase">Adventure <span className="text-[#fbee21]">Library</span></h2>
             <p className="text-[12px] font-black text-[#fbee21] uppercase tracking-[0.15em] mt-3">Unlock secrets and master your tools</p>
           </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 flex-shrink-0">
        <div className="flex-1 bg-white px-4 md:px-6 py-3 md:py-4 rounded-[2rem] md:rounded-[2.5rem] shadow-xl border-2 border-slate-100 flex items-center gap-4 md:gap-6 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-3 md:gap-4 px-6 md:px-10 py-4 md:py-5 rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest whitespace-nowrap transition-all shadow-sm ${
                  isActive 
                    ? 'bg-[#292667] text-[#fbee21] shadow-xl border-b-6 border-black/10' 
                    : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-[#292667] border-2 border-slate-100'
                }`}
              >
                <Icon size={18} md:size={20} strokeWidth={isActive ? 3.5 : 2.5} />
                {tab.label}
              </button>
            );
          })}
        </div>
        
        <div className="md:w-72 bg-white px-6 md:px-8 py-4 md:py-5 rounded-[2rem] shadow-xl border-2 border-slate-100 flex items-center gap-3">
          <Search size={20} md:size={22} className="text-slate-300" strokeWidth={3} />
          <input 
            type="text" 
            placeholder="Search guides..." 
            className="bg-transparent text-sm md:text-base font-black text-[#292667] outline-none w-full placeholder:text-slate-200"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div key={res.id} className="bg-white rounded-[3rem] p-8 border-2 border-slate-50 hover:border-slate-200 transition-all group shadow-xl hover:shadow-2xl flex flex-col relative overflow-hidden">
              <div 
                className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none"
                style={{ color: res.color }}
              >
                <Sparkles size={128} />
              </div>

              <div className="flex justify-between items-start mb-8">
                <div 
                  className="w-16 h-16 rounded-[1.8rem] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:rotate-6 transition-transform"
                  style={{ backgroundColor: `${res.color}15`, color: res.color }}
                >
                  {res.type === 'Video' ? <PlayCircle size={32} strokeWidth={3} /> : <FileText size={32} strokeWidth={3} />}
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 bg-slate-50 text-slate-400 rounded-lg text-[9px] font-black uppercase tracking-widest border border-slate-100">{res.type}</span>
                  <p className="text-[9px] font-black text-slate-300 mt-2 uppercase">{res.size}</p>
                </div>
              </div>
              
              <div className="flex-1 mb-8">
                <button 
                  onClick={() => onEnterCourse(res.series)}
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 hover:text-[#ec2027] transition-colors">
                  {res.series}
                </button>
                <h4 className="text-xl font-black text-[#292667] uppercase tracking-tight group-hover:text-blue-600 transition-colors leading-tight">{res.title}</h4>
              </div>

              <button 
                className="w-full py-5 rounded-[1.8rem] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl transition-all active:scale-95 bg-[#292667] text-white hover:bg-slate-800 border-b-6 border-black/20"
              >
                <div 
                  className="p-1.5 rounded-lg bg-white/20"
                  style={{ color: res.color }}
                >
                   <Download size={18} strokeWidth={4} />
                </div>
                Download Guide
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
