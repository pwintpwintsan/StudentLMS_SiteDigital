
import React, { useState } from 'react';
import { Star, TrendingUp, Award, CheckCircle2, Target, Rocket, Cpu, Globe, ChevronDown } from 'lucide-react';

export const GradesView: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState('Digital Kids Starter V2');

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
    <div className="h-full flex flex-col gap-4 md:gap-6">
      {/* Header Section */}
      <div className="w-full bg-[#292667] rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 text-white shadow-2xl border-b-[8px] md:border-b-[12px] border-[#00a651] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 flex-shrink-0 relative overflow-hidden text-center md:text-left">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 relative z-10">
           <div className="p-4 md:p-5 bg-[#00a651] rounded-[1.5rem] md:rounded-[2.5rem] text-white shadow-xl rotate-3">
             <Star size={32} md:size={42} strokeWidth={3.5} fill="currentColor" />
           </div>
           <div>
             <h2 className="text-2xl md:text-4xl font-black leading-none tracking-tight uppercase">My <span className="text-[#fbee21]">Stars</span></h2>
             <p className="text-[10px] md:text-[12px] font-black text-[#fbee21] uppercase tracking-[0.1em] md:tracking-[0.15em] mt-2 md:mt-3">Performance Tracking Lab</p>
           </div>
        </div>
      </div>

      {/* Course Filter Tabs */}
      <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
        <div className="flex-1 bg-white p-3 rounded-[2.5rem] shadow-xl border-2 border-slate-100 flex items-center gap-4 overflow-x-auto scrollbar-hide">
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
                className={`flex items-center gap-3 px-6 py-4 rounded-[1.8rem] font-black text-xs uppercase tracking-widest whitespace-nowrap transition-all border-b-6 active:scale-95 ${
                  isActive 
                    ? 'bg-[#292667] text-[#fbee21] border-[#000]/20 shadow-lg scale-105' 
                    : 'bg-slate-50 text-slate-400 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className={`p-1.5 rounded-lg ${isActive ? 'bg-[#fbee21] text-[#292667]' : 'bg-slate-200 text-slate-400'}`}>
                  <Icon size={18} strokeWidth={3.5} />
                </div>
                {course.name}
              </button>
            );
          })}
          <div className="flex items-center gap-2 px-6 py-4 opacity-30 grayscale cursor-not-allowed italic">
            <Globe size={18} className="text-slate-400" />
            <span className="text-xs font-black uppercase tracking-widest">Web Creators (Locked)</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide space-y-4 md:space-y-6 pb-6">
        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
           <div className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border-2 border-slate-100 shadow-xl flex items-center gap-4 md:gap-6 animate-in slide-in-from-bottom-4 duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-50 text-[#00a651] rounded-xl md:rounded-2xl flex items-center justify-center shrink-0"><TrendingUp size={24} md:size={32} /></div>
              <div>
                 <p className="text-xl md:text-3xl font-black text-[#292667]">{currentStats.avg}%</p>
                 <p className="text-[8px] md:text-[10px] font-black uppercase text-slate-400">Course Average</p>
              </div>
           </div>
           <div className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border-2 border-slate-100 shadow-xl flex items-center gap-4 md:gap-6 animate-in slide-in-from-bottom-4 duration-500">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 text-blue-500 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0"><Target size={24} md:size={32} /></div>
              <div>
                 <p className="text-xl md:text-3xl font-black text-[#292667]">{currentStats.tasks}</p>
                 <p className="text-[8px] md:text-[10px] font-black uppercase text-slate-400">Mission Progress</p>
              </div>
           </div>
           <div className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border-2 border-slate-100 shadow-xl flex items-center gap-4 md:gap-6 animate-in slide-in-from-bottom-4 duration-700">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-50 text-amber-500 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0"><Award size={24} md:size={32} /></div>
              <div>
                 <p className="text-xl md:text-3xl font-black text-[#292667]">{currentStats.rank}</p>
                 <p className="text-[8px] md:text-[10px] font-black uppercase text-slate-400">Hero Rank</p>
              </div>
           </div>
        </div>

        {/* Detailed Module Report */}
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 border-2 border-slate-100 shadow-2xl">
           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
              <h3 className="text-lg md:text-2xl font-black text-[#292667] uppercase tracking-tighter flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-slate-50 rounded-lg md:rounded-2xl"><CheckCircle2 className="text-[#00a651]" size={20} md:size={24} /></div> 
                Module Report: {selectedCourse}
              </h3>
              <div className="px-4 py-2 bg-slate-50 rounded-xl text-[10px] font-black text-slate-400 uppercase tracking-widest border border-slate-100">
                Live Data Synchronized
              </div>
           </div>

           <div className="space-y-3 md:space-y-4">
              {currentStats.modules.map((g) => (
                 <div key={g.mod} className="p-4 md:p-6 bg-slate-50 rounded-[1.5rem] md:rounded-[2.5rem] border-2 border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:border-[#00a651] transition-all">
                    <div className="flex items-center gap-4 md:gap-6">
                       <div 
                        className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg md:rounded-xl flex items-center justify-center font-black text-[#292667] shadow-sm shrink-0 border-2 border-slate-50 group-hover:rotate-12 transition-transform"
                        style={{ color: g.score > 0 ? currentStats.color : '#cbd5e1' }}
                       >
                         M{g.mod}
                       </div>
                       <div>
                          <h4 className="text-base md:text-lg font-black text-[#292667] uppercase tracking-tight leading-none">{g.title}</h4>
                          <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mt-1">Difficulty: Medium</p>
                       </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-6 md:gap-10 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0">
                       <div className="text-left sm:text-right">
                          <p className="text-lg md:text-2xl font-black text-[#292667]">{g.score}%</p>
                          <p className={`text-[8px] md:text-[9px] font-black uppercase tracking-widest ${g.score > 90 ? 'text-[#00a651]' : g.score > 0 ? 'text-blue-500' : 'text-slate-400'}`}>{g.status}</p>
                       </div>
                       <div className="w-24 md:w-32 h-2 md:h-3 bg-white rounded-full overflow-hidden border border-slate-100 shrink-0">
                          <div 
                            className={`h-full transition-all duration-1000 ${g.score > 90 ? 'bg-[#00a651]' : 'bg-[#ec2027]'}`} 
                            style={{ width: `${g.score}%`, backgroundColor: g.score > 0 ? currentStats.color : '#e2e8f0' }}
                          ></div>
                       </div>
                    </div>
                 </div>
              ))}
           </div>

           <div className="mt-10 p-8 bg-[#292667] rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-xl"></div>
              <div className="flex items-center gap-6 relative z-10">
                 <div className="w-16 h-16 bg-[#fbee21] rounded-2xl flex items-center justify-center rotate-6 shadow-xl group-hover:rotate-0 transition-transform">
                    <Star className="fill-[#292667] text-[#292667]" size={32} />
                 </div>
                 <div>
                    <h4 className="text-xl font-black uppercase tracking-tighter">Keep Shining, Buddy!</h4>
                    <p className="text-sm font-bold opacity-70">Complete 3 more modules to reach <span className="text-[#fbee21]">Grand Master</span> rank.</p>
                 </div>
              </div>
              <button className="px-10 py-4 bg-[#fbee21] text-[#292667] rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-all border-b-6 border-black/10 active:scale-95 relative z-10">
                 Resume Mission
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
