
import React, { useState } from 'react';
import { Teacher, ClassInfo } from '../../types';
import { Users, Edit3, Rocket, Sparkles, Calendar, Target, Filter, BookOpen, Layout } from 'lucide-react';
import { LEVELS } from '../../constants';

interface MyClassesViewProps { 
  teacher: Teacher;
  classes: ClassInfo[];
  onEnterClass: (id: string) => void;
}

export const MyClassesView: React.FC<MyClassesViewProps> = ({ teacher, classes, onEnterClass }) => {
  const [levelFilter, setLevelFilter] = useState('all');
  const [searchFilter, setSearchFilter] = useState('');

  const filtered = classes.filter(c => {
    const matchesLevel = levelFilter === 'all' || c.level === levelFilter;
    const matchesSearch = c.name.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  return (
    <div className="h-full flex flex-col gap-6 overflow-hidden">
      {/* Row 1: Full Length Greeting & Stats Bar - Simplified */}
      <div className="w-full bg-[#292667] rounded-[3rem] p-8 text-white shadow-2xl border-b-[12px] border-[#ec2027] flex flex-col md:flex-row items-center justify-between gap-8 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-[#fbee21]/10 rounded-full blur-3xl"></div>

        <div className="flex items-center gap-6 relative z-10">
           <div className="p-5 bg-[#fbee21] rounded-[2rem] text-[#292667] shadow-xl rotate-3 transition-transform hover:rotate-0 duration-300">
             <Sparkles size={42} strokeWidth={3} />
           </div>
           <div>
             <h2 className="text-4xl font-black leading-none tracking-tight">Hello, <span className="text-[#fbee21]">{teacher.firstName}!</span></h2>
             <div className="flex items-center gap-3 mt-3">
                <span className="px-3 py-1 bg-white/10 rounded-lg text-[11px] font-black uppercase tracking-[0.1em] text-white">PORTAL ACTIVE</span>
                <span className="text-[12px] font-black text-[#fbee21] uppercase tracking-[0.15em]">{teacher.schoolName} Center</span>
             </div>
           </div>
        </div>

        <div className="flex items-center gap-12 px-10 md:border-l-4 border-white/10 relative z-10">
           <div className="text-center group cursor-default">
              <p className="text-5xl font-black text-[#fbee21] group-hover:scale-110 transition-transform">{classes.length}</p>
              <p className="text-[11px] font-black uppercase text-white/60 tracking-[0.2em] mt-2">Active Classes</p>
           </div>
        </div>
      </div>

      {/* Row 2: Prominent Filter & Search Row - Taller Controls */}
      <div className="w-full bg-white p-4 rounded-[2.5rem] shadow-xl border-2 border-slate-100 flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
        <div className="flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-[1.5rem] border-2 border-slate-100 flex-1 w-full group focus-within:border-[#ec2027] transition-all">
          <BookOpen size={24} className="text-[#ec2027]" strokeWidth={3} />
          <input 
            type="text" 
            placeholder="Search class names..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="bg-transparent text-lg font-black text-[#292667] outline-none w-full placeholder:text-slate-300 placeholder:font-bold"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-3 bg-slate-50 px-6 py-4 rounded-[1.5rem] border-2 border-slate-100 flex-1 sm:flex-none sm:min-w-[220px] hover:border-[#292667] transition-all">
            <Filter size={20} className="text-slate-400" strokeWidth={3} />
            <select 
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              className="bg-transparent text-sm font-black text-[#292667] outline-none w-full cursor-pointer uppercase tracking-tight"
            >
              <option value="all">All Levels</option>
              {LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
          <button className="p-4 bg-[#292667] text-white rounded-[1.5rem] shadow-xl hover:bg-[#ec2027] transition-all active:scale-90 border-b-4 border-black/20">
             <Layout size={28} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Class Grid */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-8">
          {filtered.map((cls, idx) => (
            <div 
              key={cls.id} 
              className="bg-white rounded-[3rem] shadow-lg border-2 border-transparent hover:border-[#fbee21] transition-all group flex flex-col overflow-hidden h-fit animate-in fade-in slide-in-from-bottom-6 duration-500"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Header */}
              <div className={`p-8 pb-6 flex justify-between items-start ${idx % 2 === 0 ? 'bg-[#00a651]/5' : 'bg-[#ec2027]/5'}`}>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-[0.15em] ${idx % 2 === 0 ? 'bg-[#00a651] text-white' : 'bg-[#ec2027] text-white'}`}>
                      {cls.level}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-[#292667] truncate leading-tight tracking-tight uppercase">{cls.name}</h3>
                </div>
                <button 
                  onClick={() => onEnterClass(cls.id)}
                  className={`p-4 rounded-2xl shadow-lg border-4 border-white transition-all hover:scale-110 active:scale-95 flex-shrink-0 ${idx % 2 === 0 ? 'bg-[#00a651] text-white' : 'bg-[#ec2027] text-white'}`}
                >
                  <Edit3 size={24} strokeWidth={3} />
                </button>
              </div>

              {/* Stats Grid - Simplified */}
              <div className="p-8 pt-6 grid grid-cols-2 gap-5">
                <div className="bg-slate-50 p-5 rounded-[2rem] border-b-6 border-slate-100 group-hover:border-blue-100 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={18} className="text-blue-500" strokeWidth={3} />
                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.1em]">Schedule</p>
                  </div>
                  <p className="font-black text-[#292667] text-[13px] leading-snug">{cls.schedule}</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-[2rem] border-b-6 border-slate-100 group-hover:border-red-100 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <Users size={18} className="text-[#ec2027]" strokeWidth={3} />
                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.1em]">Learners</p>
                  </div>
                  <p className="font-black text-[#292667] text-[13px]">{cls.students.length} Students</p>
                </div>
                <div className="col-span-2 bg-slate-50 p-6 rounded-[2rem] border-b-6 border-slate-100 group-hover:border-green-100 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Target size={20} className="text-[#00a651]" strokeWidth={3} />
                      <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.1em]">Class Progress</p>
                    </div>
                    <p className="font-black text-lg text-[#292667]">{cls.progress}%</p>
                  </div>
                  <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden shadow-inner border-2 border-white">
                    <div 
                      className={`h-full transition-all duration-1000 ${idx % 2 === 0 ? 'bg-[#00a651]' : 'bg-[#ec2027]'}`} 
                      style={{ width: `${cls.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Action Button - Massive */}
              <button 
                onClick={() => onEnterClass(cls.id)}
                className={`w-full py-6 text-white font-black text-lg flex items-center justify-center gap-4 uppercase tracking-[0.15em] transition-all hover:gap-6 ${idx % 2 === 0 ? 'bg-[#00a651] hover:bg-[#065f46]' : 'bg-[#ec2027] hover:bg-[#991b1b]'}`}
              >
                Open Dashboard <Rocket size={24} strokeWidth={3} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
