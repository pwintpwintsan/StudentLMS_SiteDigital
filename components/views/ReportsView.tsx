
import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { MOCK_STUDENTS, MOCK_CLASSES, MONTHS } from '../../constants';
import { Clock, TrendingUp, Users, Calendar, Filter, Download, BarChart3, Sparkles, Trophy, Star, ChevronRight, Zap, Award } from 'lucide-react';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#292667] p-4 rounded-2xl shadow-2xl border-2 border-white/20 text-white animate-in zoom-in-95 duration-200">
        <p className="text-[10px] font-black uppercase tracking-widest text-[#fbee21] mb-1">{label}</p>
        <p className="text-lg font-black">{payload[0].value}{payload[0].name === 'attendance' ? ' Days' : '%'}</p>
        <div className="mt-2 pt-2 border-t border-white/10">
           <p className="text-[8px] font-bold uppercase opacity-50">Verified Intel</p>
        </div>
      </div>
    );
  }
  return null;
};

export const ReportsView: React.FC = () => {
  const [selectedClassId, setSelectedClassId] = useState(MOCK_CLASSES[0].id);
  const [selectedMonth, setSelectedMonth] = useState('March');

  const filteredData = useMemo(() => {
    const classSpecific = selectedClassId === 'c1' 
      ? MOCK_STUDENTS 
      : MOCK_STUDENTS.slice(0, 2);

    return classSpecific.map(s => ({
      name: `${s.firstName} ${s.lastName[0]}.`,
      performance: s.finalGrade,
      attendance: s.attendance,
      studyTime: Math.floor(s.studyTime / 60),
      id: s.id
    })).sort((a, b) => b.performance - a.performance);
  }, [selectedClassId]);

  const COLORS = ['#ec2027', '#00a651', '#3b82f6', '#fbee21', '#a855f7'];

  return (
    <div className="h-full flex flex-col gap-4 md:gap-5 overflow-hidden">
      {/* Header Bar */}
      <div className="w-full bg-[#292667] rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 text-white shadow-2xl border-b-[8px] md:border-b-[12px] border-[#3b82f6] flex flex-col md:flex-row items-center justify-between gap-6 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
        
        <div className="flex items-center gap-4 md:gap-6 relative z-10">
           <div className="p-4 md:p-5 bg-[#3b82f6] rounded-[1.5rem] md:rounded-[2rem] text-white shadow-xl rotate-3">
             <BarChart3 size={32} md:size={42} strokeWidth={3.5} />
           </div>
           <div>
             <h2 className="text-2xl md:text-3xl font-black leading-none tracking-tight uppercase">Class <span className="text-[#fbee21]">Intel</span></h2>
             <div className="flex items-center gap-2 md:gap-3 mt-2 md:mt-3">
                <span className="px-3 py-1 bg-white/10 rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] text-white">LIVE ANALYTICS</span>
                <span className="text-[10px] md:text-[12px] font-black text-[#fbee21] uppercase tracking-[0.15em] hidden sm:inline">U Book Store Dashboard</span>
             </div>
           </div>
        </div>

        <div className="flex items-center gap-6 md:gap-12 px-6 md:px-10 md:border-l-4 border-white/10 relative z-10">
           <div className="text-center group cursor-default">
              <p className="text-3xl md:text-5xl font-black text-[#00a651] leading-none">94%</p>
              <p className="text-[9px] md:text-[11px] font-black uppercase text-white/60 tracking-[0.2em] mt-1 md:mt-2">Attendance</p>
           </div>
           <div className="w-px h-12 md:h-16 bg-white/10 hidden md:block"></div>
           <div className="text-center group cursor-default">
              <p className="text-3xl md:text-5xl font-black text-[#ec2027] leading-none">88%</p>
              <p className="text-[9px] md:text-[11px] font-black uppercase text-white/60 tracking-[0.2em] mt-1 md:mt-2">Avg Score</p>
           </div>
        </div>
      </div>

      {/* Control Bar - Matched styling with Learning View */}
      <div className="w-full bg-white p-3 md:p-4 rounded-[2rem] md:rounded-[2.5rem] shadow-xl border-2 border-slate-100 flex flex-col sm:flex-row items-center gap-3 md:gap-4 flex-shrink-0">
        <div className="flex flex-1 items-center gap-3 md:gap-4 w-full">
          <div className="flex-1 flex items-center gap-3 bg-slate-50 px-5 py-3 md:py-4 rounded-xl md:rounded-[1.8rem] border-2 border-slate-100 group focus-within:border-[#3b82f6] transition-all">
            <Filter size={18} className="text-slate-400" strokeWidth={3.5} />
            <select 
              value={selectedClassId}
              onChange={(e) => setSelectedClassId(e.target.value)}
              className="bg-transparent text-[10px] md:text-xs font-black text-[#292667] outline-none w-full uppercase tracking-widest cursor-pointer"
            >
              {MOCK_CLASSES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <div className="flex-1 flex items-center gap-3 bg-slate-50 px-5 py-3 md:py-4 rounded-xl md:rounded-[1.8rem] border-2 border-slate-100 group focus-within:border-[#3b82f6] transition-all">
            <Calendar size={18} className="text-slate-400" strokeWidth={3.5} />
            <select 
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="bg-transparent text-[10px] md:text-xs font-black text-[#292667] outline-none w-full uppercase tracking-widest cursor-pointer"
            >
              {MONTHS.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>
        </div>

        <button className="flex items-center gap-3 px-8 py-4 md:py-5 bg-[#292667] text-white rounded-xl md:rounded-[2rem] font-black text-[10px] md:text-xs uppercase tracking-[0.15em] shadow-xl hover:bg-[#ec2027] transition-all active:scale-95 border-b-6 border-black/20 shrink-0">
          <Download size={18} md:size={20} strokeWidth={3.5} />
          <span>Export Report</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row gap-4 md:gap-6 overflow-hidden pb-4">
        
        {/* Leaderboard Sidebar */}
        <div className="lg:w-80 flex flex-col gap-4 md:gap-6 flex-shrink-0 overflow-hidden">
           <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 shadow-xl border-2 border-slate-100 flex-1 flex flex-col overflow-hidden">
              <h3 className="text-sm md:text-base font-black text-[#292667] uppercase tracking-tight mb-6 flex items-center gap-3 shrink-0">
                 <Trophy size={20} className="text-[#fbee21]" /> Top Heroes
              </h3>
              
              <div className="flex-1 overflow-y-auto scrollbar-hide space-y-3 pr-1">
                 {filteredData.map((student, idx) => (
                    <div key={student.id} className="p-4 rounded-[1.5rem] bg-slate-50 border-2 border-slate-100 flex items-center justify-between group hover:border-[#3b82f6] hover:bg-white transition-all">
                       <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shadow-sm shrink-0 ${
                            idx === 0 ? 'bg-[#fbee21] text-[#292667] rotate-6' : 
                            idx === 1 ? 'bg-slate-200 text-slate-500' : 
                            'bg-orange-100 text-orange-500'
                          }`}>
                             {idx + 1}
                          </div>
                          <div className="min-w-0">
                             <p className="text-[11px] font-black uppercase text-[#292667] truncate">{student.name}</p>
                             <p className="text-[8px] font-bold text-slate-400 mt-0.5">SCORE: {student.performance}%</p>
                          </div>
                       </div>
                       <Award size={16} className={idx === 0 ? "text-[#fbee21]" : "text-slate-100"} />
                    </div>
                 ))}
              </div>

              <div className="mt-6 pt-6 border-t-2 border-slate-50 shrink-0">
                 <div className="p-4 bg-[#fbee21] rounded-[1.5rem] flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#292667] shadow-sm"><Zap size={20} fill="currentColor" /></div>
                    <div>
                       <p className="text-[10px] font-black uppercase text-[#292667] leading-tight">Class Momentum</p>
                       <p className="text-[8px] font-bold text-[#292667]/60 uppercase tracking-widest mt-0.5">Rising 12% This Week</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Charts Grid */}
        <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 overflow-hidden">
          {/* Performance Chart */}
          <div className="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] border-2 border-slate-100 shadow-xl flex flex-col overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-[#3b82f6] pointer-events-none">
              <TrendingUp size={150} />
            </div>
            
            <div className="mb-8 flex items-center justify-between relative z-10 shrink-0">
              <div>
                <h3 className="text-lg md:text-xl font-black text-[#292667] uppercase tracking-tight flex items-center gap-3">
                   <div className="w-3 h-3 bg-[#ec2027] rounded-full animate-pulse shadow-[0_0_10px_rgba(236,32,39,0.5)]"></div> 
                   Academic Mastery
                </h3>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Class Grade Distribution</p>
              </div>
            </div>

            <div className="flex-1 min-h-0 relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={filteredData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="6 6" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 9, fontWeight: 900, fill: '#64748b', textTransform: 'uppercase' }} 
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 9, fontWeight: 900, fill: '#64748b' }} 
                    domain={[0, 100]} 
                  />
                  <Tooltip cursor={{ fill: '#f8fafc', radius: 12 }} content={<CustomTooltip />} />
                  <Bar dataKey="performance" radius={[10, 10, 0, 0]} barSize={40}>
                    {filteredData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Attendance Chart */}
          <div className="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] border-2 border-slate-100 shadow-xl flex flex-col overflow-hidden relative">
             <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-[#00a651] pointer-events-none">
              <Users size={150} />
            </div>

            <div className="mb-8 flex items-center justify-between relative z-10 shrink-0">
              <div>
                <h3 className="text-lg md:text-xl font-black text-[#292667] uppercase tracking-tight flex items-center gap-3">
                   <div className="w-3 h-3 bg-[#00a651] rounded-full animate-pulse shadow-[0_0_10px_rgba(0,166,81,0.5)]"></div> 
                   Attendance Intel
                </h3>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Present Days This Month</p>
              </div>
            </div>

            <div className="flex-1 min-h-0 relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={filteredData} layout="vertical" margin={{ top: 0, right: 30, left: 30, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="6 6" horizontal={false} stroke="#f1f5f9" />
                  <XAxis 
                    type="number" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 9, fontWeight: 900, fill: '#64748b' }} 
                    domain={[0, 31]} 
                  />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 9, fontWeight: 900, fill: '#64748b' }} 
                  />
                  <Tooltip cursor={{ fill: '#f8fafc', radius: 12 }} content={<CustomTooltip />} />
                  <Bar dataKey="attendance" radius={[0, 10, 10, 0]} barSize={30}>
                    {filteredData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[(index + 1) % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Quick Summary Bar */}
            <div className="mt-8 flex gap-3 relative z-10 shrink-0">
               <div className="flex-1 bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 text-blue-500 rounded-lg flex items-center justify-center"><Clock size={16} /></div>
                  <div>
                    <p className="text-[10px] font-black text-[#292667]">28.5 hrs</p>
                    <p className="text-[7px] font-bold text-slate-400 uppercase">Avg Study Time</p>
                  </div>
               </div>
               <div className="flex-1 bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 text-green-500 rounded-lg flex items-center justify-center"><TrendingUp size={16} /></div>
                  <div>
                    <p className="text-[10px] font-black text-[#292667]">+4.2%</p>
                    <p className="text-[7px] font-bold text-slate-400 uppercase">Class Growth</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
