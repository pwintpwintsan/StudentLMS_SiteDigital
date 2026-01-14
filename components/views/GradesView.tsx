
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
    <div className="h-full flex flex-col gap-4 overflow-hidden">
      {/* Smaller Header Section */}
      <div className="w-full bg-[#292667] rounded-[2rem] p-5 md:p-6 text-white shadow-xl border-b-[8px] border-[#00a651] flex flex-col md:flex-row items-center justify-between gap-4 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-12 -mt-12 blur-2xl"></div>
        <div className="flex flex-row items-center gap-4 relative z-10">
           <div className="p-3 bg-[#00a651] rounded-[1.2rem] text-white shadow-lg rotate-3">
             <Star size={24} md:size={28} strokeWidth={3.5} fill="currentColor" />
           </div>
           <div>
             <h2 className="text-xl md:text-2xl font-black leading-none tracking-tight uppercase">My <span className="text-[#fbee21]">Stars</span></h2>
             <p className="text-[8px] md:text-[10px] font-black text-[#fbee21] uppercase tracking-[0.1em] mt-1">Performance Tracking Lab</p>
           </div>
        </div>
      </div>

      {/* Course Filter Tabs - Compact */}
      <div className="flex items-center gap-2 bg-white p-2 rounded-[1.5rem] shadow-md border-2 border-slate-50 overflow-x-auto scrollbar-hide flex-shrink-0">
        {[
          { name: "Robotics Mastery", icon: Cpu, color: "#ec2027" },
          { name: "Digital Kids Starter V2", icon: Rocket, color: "#a855f7" }
        ].map((course) => {
          const isActive = selectedCourse === course.name;
          return (
            <button
              key={course.name}
              onClick={() => setSelectedCourse(course.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest whitespace-nowrap transition-all ${
                isActive 
                  ? 'bg-[#292667] text-[#fbee21] shadow-sm' 
                  : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
              }`}
            >
              {course.name}
            </button>
          );
        })}
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide space-y-4 pb-4">
        {/* Quick Stats Cards - Horizontal Layout for space */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
           <div className="bg-white p-4 rounded-[1.5rem] border-2 border-slate-50 shadow-md flex items-center gap-4">
              <div className="w-10 h-10 bg-green-50 text-[#00a651] rounded-lg flex items-center justify-center shrink-0"><TrendingUp size={20} /></div>
              <div>
                 <p className="text-xl font-black text-[#292667]">{currentStats.avg}%</p>
                 <p className="text-[8px] font-black uppercase text-slate-400">Average</p>
              </div>
           </div>
           <div className="bg-white p-4 rounded-[1.5rem] border-2 border-slate-50 shadow-md flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center shrink-0"><Target size={20} /></div>
              <div>
                 <p className="text-xl font-black text-[#292667]">{currentStats.tasks}</p>
                 <p className="text-[8px] font-black uppercase text-slate-400">Missions</p>
              </div>
           </div>
           <div className="bg-white p-4 rounded-[1.5rem] border-2 border-slate-50 shadow-md flex items-center gap-4">
              <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-lg flex items-center justify-center shrink-0"><Award size={20} /></div>
              <div>
                 <p className="text-base font-black text-[#292667] truncate max-w-[100px]">{currentStats.rank}</p>
                 <p className="text-[8px] font-black uppercase text-slate-400">Rank</p>
              </div>
           </div>
        </div>

        {/* Detailed Module Report - Slimmer items */}
        <div className="bg-white rounded-[2rem] p-5 md:p-6 border-2 border-slate-50 shadow-xl">
           <h3 className="text-base font-black text-[#292667] uppercase mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-[#00a651]" size={18} /> Module Report
           </h3>

           <div className="space-y-2">
              {currentStats.modules.map((g) => (
                 <div key={g.mod} className="p-3 md:p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between gap-4 group hover:border-[#00a651] transition-all">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-black text-[#292667] text-xs shadow-sm shrink-0">
                         M{g.mod}
                       </div>
                       <div>
                          <h4 className="text-sm font-black text-[#292667] uppercase tracking-tight leading-none">{g.title}</h4>
                          <p className={`text-[8px] font-black uppercase mt-1 ${g.score > 0 ? 'text-[#00a651]' : 'text-slate-300'}`}>{g.status}</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                       <p className="text-sm font-black text-[#292667]">{g.score}%</p>
                       <div className="w-16 h-1.5 bg-white rounded-full overflow-hidden border border-slate-100">
                          <div 
                            className={`h-full transition-all duration-1000 ${g.score > 90 ? 'bg-[#00a651]' : 'bg-[#ec2027]'}`} 
                            style={{ width: `${g.score}%`, backgroundColor: g.score > 0 ? currentStats.color : '#e2e8f0' }}
                          ></div>
                       </div>
                    </div>
                 </div>
              ))}
           </div>

           <div className="mt-6 p-4 bg-[#292667] rounded-2xl text-white flex items-center justify-between gap-4 shadow-lg overflow-hidden relative">
              <div className="flex items-center gap-3 relative z-10">
                 <div className="w-10 h-10 bg-[#fbee21] rounded-xl flex items-center justify-center rotate-3 shadow-md shrink-0">
                    <Star className="fill-[#292667] text-[#292667]" size={20} />
                 </div>
                 <p className="text-[10px] font-black uppercase tracking-tighter leading-tight">Complete missions to level up!</p>
              </div>
              <button className="px-4 py-2 bg-[#fbee21] text-[#292667] rounded-lg font-black text-[10px] uppercase tracking-widest shadow-md hover:scale-105 transition-all">
                 Resume
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
