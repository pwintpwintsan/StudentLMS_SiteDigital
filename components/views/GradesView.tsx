
import React, { useState } from 'react';
import { 
  Star, TrendingUp, Award, CheckCircle2, Target, 
  Rocket, Cpu, Globe, ChevronDown, Eye, X, Info, 
  Check, Download, AlertCircle, Sparkles
} from 'lucide-react';

const ResultsModal = ({ module, onClose }: { module: any, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#292667]/70 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white rounded-[2rem] md:rounded-[3rem] w-full max-w-2xl max-h-[85vh] shadow-2xl border-b-[8px] border-[#00a651] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
        
        {/* MODAL HEADER */}
        <div className="bg-[#292667] p-5 md:p-8 text-white flex items-center justify-between relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          <div className="flex items-center gap-3 md:gap-5 relative z-10">
            <div className="p-2 md:p-3 bg-[#00a651] rounded-xl md:rounded-2xl text-white rotate-3 shadow-lg">
              <Award size={24} md:size={28} strokeWidth={3} />
            </div>
            <div>
              <p className="text-[9px] md:text-[10px] font-black text-[#fbee21] uppercase tracking-[0.2em] mb-0.5">Module Intel</p>
              <h3 className="text-lg md:text-2xl font-black uppercase tracking-tight leading-none">{module.title}</h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all relative z-10"
          >
            <X size={20} md:size={24} strokeWidth={4} />
          </button>
        </div>

        {/* MODAL CONTENT */}
        <div className="flex-1 overflow-y-auto p-5 md:p-8 space-y-4 md:space-y-6 scrollbar-hide">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
             <div className="bg-slate-50 p-4 md:p-6 rounded-[1.5rem] border-2 border-slate-100 text-center">
                <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 md:mb-2">Module Score</p>
                <p className="text-2xl md:text-4xl font-black text-[#00a651]">{module.score}%</p>
             </div>
             <div className="bg-slate-50 p-4 md:p-6 rounded-[1.5rem] border-2 border-slate-100 text-center flex flex-col justify-center">
                <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 md:mb-2">Status</p>
                <p className="text-base md:text-xl font-black text-[#292667] uppercase tracking-tighter leading-none">{module.status}</p>
             </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-[10px] md:text-xs font-black text-[#292667] uppercase tracking-[0.2em] flex items-center gap-2">
              <Info size={14} className="text-[#3b82f6]" /> 
              Quest Answer Key
            </h4>
            
            <div className="space-y-2 md:space-y-3">
              {[
                { q: "Fundamental Logic Check", a: "Standardized Base-2 Logic", score: "100/100" },
                { q: "Circuit Pattern Analysis", a: "Completed successfully", score: "90/100" },
                { q: "Hardware Interaction Quiz", a: "Perfect Execution", score: "100/100" }
              ].map((item, i) => (
                <div key={i} className="p-3 md:p-5 bg-white rounded-[1.2rem] md:rounded-[1.5rem] border-2 border-slate-100 flex items-start justify-between gap-3 group hover:border-[#3b82f6] transition-all">
                   <div className="flex gap-3">
                     <div className="w-6 h-6 md:w-8 md:h-8 bg-green-50 text-[#00a651] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={14} md:size={18} strokeWidth={4} />
                     </div>
                     <div>
                       <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Segment {i+1}</p>
                       <p className="text-xs md:text-base font-black text-[#292667] leading-tight mt-0.5">{item.q}</p>
                       <p className="text-[10px] font-bold text-[#00a651] mt-1 uppercase">Verified: {item.a}</p>
                     </div>
                   </div>
                   <div className="text-right shrink-0">
                      <span className="text-xs md:text-base font-black text-[#292667]">{item.score}</span>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MODAL FOOTER */}
        <div className="p-5 md:p-6 bg-slate-50 border-t-2 border-slate-100 flex justify-center shrink-0">
           <button 
             onClick={onClose}
             className="px-10 py-3 md:py-4 bg-[#292667] text-[#fbee21] rounded-xl md:rounded-[1.2rem] font-black text-xs md:text-sm uppercase tracking-[0.2em] shadow-lg hover:bg-[#ec2027] hover:text-white transition-all active:scale-95 border-b-4 border-black/20"
           >
             Close Briefing
           </button>
        </div>
      </div>
    </div>
  );
};

export const GradesView: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState('Digital Kids Starter V2');
  const [viewingModule, setViewingModule] = useState<any>(null);

  const courseStats: Record<string, { avg: number, tasks: string, rank: string, color: string, modules: any[] }> = {
    'Digital Kids Starter V2': {
      avg: 92,
      tasks: '12/15',
      rank: 'Elite Hero',
      color: '#00a651',
      modules: [
        { mod: 1, title: 'Logic & Binary', score: 98, status: 'Mastered' },
        { mod: 2, title: 'Robotics Basics', score: 85, status: 'Good' },
        { mod: 3, title: 'Digital Discovery', score: 0, status: 'Not Started' },
      ]
    },
    'Robotics Mastery': {
      avg: 78,
      tasks: '5/20',
      rank: 'Novice Engineer',
      color: '#ec2027',
      modules: [
        { mod: 1, title: 'Sensors & Motors', score: 95, status: 'Mastered' },
        { mod: 2, title: 'Wiring Your Bot', score: 62, status: 'Needs Practice' },
        { mod: 3, title: 'Brain Logic', score: 0, status: 'Locked' },
      ]
    }
  };

  const currentStats = courseStats[selectedCourse] || courseStats['Digital Kids Starter V2'];

  return (
    <div className="h-full flex flex-col gap-3 md:gap-5 overflow-hidden">
      {/* UNIVERSAL COMPACT HERO HEADER */}
      <div className="w-full bg-[#292667] rounded-[1.8rem] md:rounded-[2.2rem] p-4 md:p-6 text-white shadow-lg border-b-[6px] md:border-b-[10px] border-[#00a651] flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="flex items-center gap-3 md:gap-6 relative z-10">
           <div className="p-3 md:p-4 bg-[#00a651] rounded-xl md:rounded-[1.5rem] text-white shadow-xl rotate-3">
             <Star size={24} md:size={32} strokeWidth={3.5} fill="currentColor" />
           </div>
           <div>
             <h2 className="text-xl md:text-3xl font-black leading-none tracking-tight uppercase">My <span className="text-[#fbee21]">Stars</span></h2>
             <p className="text-[9px] md:text-[11px] font-black text-[#fbee21] uppercase tracking-[0.2em] mt-1 md:mt-2">Performance Tracking Lab</p>
           </div>
        </div>
        
        <div className="hidden lg:flex bg-white/10 px-6 py-3 rounded-[1.5rem] border-2 border-white/5 items-center gap-4 relative z-10">
           <div className="text-right">
              <p className="text-[8px] font-black uppercase text-white/50 tracking-widest leading-none">Global Rank</p>
              <p className="text-xl font-black text-[#fbee21] mt-0.5">#12</p>
           </div>
           <div className="w-10 h-10 bg-[#fbee21] rounded-xl flex items-center justify-center rotate-6 shadow-md">
              <Award className="text-[#292667]" size={20} />
           </div>
        </div>
      </div>

      {/* UNIVERSAL SELECTION BAR */}
      <div className="bg-white px-3 md:px-5 py-2 md:py-3 rounded-[1.5rem] md:rounded-[2rem] shadow-md border-2 border-slate-100 flex items-center gap-2 md:gap-4 overflow-x-auto scrollbar-hide flex-shrink-0">
        {[
          { name: "Robotics Mastery", icon: Cpu, color: "#ec2027" },
          { name: "Digital Kids Starter V2", icon: Rocket, color: "#a855f7" }
        ].map((course) => {
          const isActive = selectedCourse === course.name;
          const Icon = course.icon;
          return (
            <button
              key={course.name}
              onClick={() => setSelectedCourse(course.name)}
              className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3.5 rounded-xl md:rounded-[1.2rem] font-black text-[9px] md:text-[11px] uppercase tracking-widest whitespace-nowrap transition-all group shrink-0 ${
                isActive 
                  ? 'bg-[#292667] text-[#fbee21] shadow-lg border-b-4 md:border-b-6 border-black/20' 
                  : 'bg-slate-50 text-slate-400 border-2 border-slate-100 hover:bg-slate-100 hover:text-[#292667]'
              }`}
            >
              <Icon size={14} md:size={18} strokeWidth={3.5} />
              {course.name}
            </button>
          );
        })}
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide space-y-3 md:space-y-4 pb-4">
        {/* QUICK STATS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 shrink-0">
           <div className="bg-white p-3 md:p-5 rounded-[1.2rem] md:rounded-[1.8rem] border-2 border-slate-50 shadow-sm flex items-center gap-3 md:gap-4 group hover:scale-[1.01] transition-transform">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-green-50 text-[#00a651] rounded-[0.8rem] md:rounded-[1.2rem] flex items-center justify-center shrink-0 shadow-sm"><TrendingUp size={20} md:size={28} /></div>
              <div>
                 <p className="text-xl md:text-3xl font-black text-[#292667]">{currentStats.avg}%</p>
                 <p className="text-[8px] md:text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none mt-0.5">Average</p>
              </div>
           </div>
           <div className="bg-white p-3 md:p-5 rounded-[1.2rem] md:rounded-[1.8rem] border-2 border-slate-50 shadow-sm flex items-center gap-3 md:gap-4 group hover:scale-[1.01] transition-transform">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-50 text-blue-500 rounded-[0.8rem] md:rounded-[1.2rem] flex items-center justify-center shrink-0 shadow-sm"><Target size={20} md:size={28} /></div>
              <div>
                 <p className="text-xl md:text-3xl font-black text-[#292667]">{currentStats.tasks}</p>
                 <p className="text-[8px] md:text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none mt-0.5">Missions</p>
              </div>
           </div>
           <div className="bg-white p-3 md:p-5 rounded-[1.2rem] md:rounded-[1.8rem] border-2 border-slate-50 shadow-sm flex items-center gap-3 md:gap-4 group hover:scale-[1.01] transition-transform">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-amber-50 text-amber-500 rounded-[0.8rem] md:rounded-[1.2rem] flex items-center justify-center shrink-0 shadow-sm"><Award size={20} md:size={28} /></div>
              <div>
                 <p className="text-sm md:text-xl font-black text-[#292667] truncate max-w-[120px]">{currentStats.rank}</p>
                 <p className="text-[8px] md:text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none mt-0.5">Rank</p>
              </div>
           </div>
        </div>

        {/* DETAILED REPORT */}
        <div className="bg-white rounded-[1.8rem] md:rounded-[2.5rem] p-4 md:p-8 border-2 border-slate-50 shadow-lg flex-1 flex flex-col min-h-0">
           <h3 className="text-sm md:text-xl font-black text-[#292667] uppercase mb-4 md:mb-6 flex items-center gap-2 md:gap-3 flex-shrink-0">
              <CheckCircle2 className="text-[#00a651]" size={18} md:size={24} strokeWidth={3.5} /> Module Mastery Report
           </h3>

           <div className="space-y-2 md:space-y-3 flex-1 overflow-y-auto pr-1 scrollbar-hide">
              {currentStats.modules.map((g) => (
                 <div key={g.mod} className="p-3 md:p-5 bg-slate-50 rounded-[1.2rem] md:rounded-[1.8rem] border-2 border-slate-100 flex items-center justify-between gap-3 md:gap-6 group hover:border-[#00a651] transition-all">
                    <div className="flex items-center gap-3 md:gap-5 min-w-0">
                       <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-xl md:rounded-[1.2rem] flex items-center justify-center font-black text-[#292667] text-base md:text-xl shadow-md shrink-0 group-hover:rotate-6 transition-transform">
                         {g.mod}
                       </div>
                       <div className="min-w-0">
                          <h4 className="text-xs md:text-lg font-black text-[#292667] uppercase tracking-tight leading-none truncate">{g.title}</h4>
                          <p className={`text-[8px] md:text-[10px] font-black uppercase mt-1 md:mt-2 tracking-[0.15em] ${g.score > 0 ? 'text-[#00a651]' : 'text-slate-300'}`}>{g.status}</p>
                       </div>
                    </div>
                    
                    <div className="flex items-center gap-3 md:gap-6 shrink-0">
                       <div className="hidden sm:flex flex-col items-end gap-1.5">
                          <p className="text-sm md:text-2xl font-black text-[#292667] leading-none">{g.score}%</p>
                          <div className="w-20 md:w-40 h-2 md:h-3 bg-white rounded-full overflow-hidden border-2 border-white shadow-inner">
                             <div 
                               className={`h-full transition-all duration-1000 ${g.score > 90 ? 'bg-[#00a651]' : 'bg-[#ec2027]'}`} 
                               style={{ width: `${g.score}%`, backgroundColor: g.score > 0 ? currentStats.color : '#e2e8f0' }}
                             ></div>
                          </div>
                       </div>
                       
                       {g.score > 0 && (
                         <button 
                           onClick={() => setViewingModule(g)}
                           className="p-2 md:p-3 bg-blue-50 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white transition-all shadow-sm flex items-center gap-2 active:scale-95"
                         >
                           <Eye size={16} md:size={20} strokeWidth={3.5} />
                           <span className="hidden md:inline text-[9px] font-black uppercase tracking-widest">Results</span>
                         </button>
                       )}
                    </div>
                 </div>
              ))}
           </div>

           <div className="mt-4 md:mt-6 p-4 md:p-6 bg-[#292667] rounded-[1.5rem] md:rounded-[2rem] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl overflow-hidden relative border-b-[6px] md:border-b-[10px] border-black/20 flex-shrink-0">
              <div className="absolute top-0 right-0 p-6 opacity-[0.03]">
                 <Rocket size={100} />
              </div>
              <div className="flex items-center gap-4 md:gap-6 relative z-10">
                 <div className="w-10 h-10 md:w-16 md:h-16 bg-[#fbee21] rounded-xl md:rounded-[1.2rem] flex items-center justify-center rotate-3 shadow-xl shrink-0">
                    <Star className="fill-[#292667] text-[#292667]" size={20} md:size={32} />
                 </div>
                 <div className="text-center sm:text-left">
                    <h4 className="text-sm md:text-xl font-black uppercase tracking-tight leading-none">Upgrade Pending!</h4>
                    <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#fbee21] mt-1 md:mt-2">Finish {currentStats.tasks.split('/')[1]} missions to level up!</p>
                 </div>
              </div>
              <button className="w-full sm:w-auto px-6 md:px-10 py-2.5 md:py-3.5 bg-[#fbee21] text-[#292667] rounded-xl md:rounded-[1rem] font-black text-[10px] md:text-sm uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all relative z-10 border-b-4 border-black/10">
                 Resume Mission
              </button>
           </div>
        </div>
      </div>

      {/* RESULT POPUP OVERLAY */}
      {viewingModule && (
        <ResultsModal 
          module={viewingModule} 
          onClose={() => setViewingModule(null)} 
        />
      )}
    </div>
  );
};
