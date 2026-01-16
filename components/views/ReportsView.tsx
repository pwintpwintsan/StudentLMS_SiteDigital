
import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';
import { MOCK_STUDENTS, MOCK_CLASSES, MONTHS } from '../../constants';
import { Clock, TrendingUp, Users, Calendar, Filter, Download, BarChart3, Sparkles } from 'lucide-react';

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
      studyTime: Math.floor(s.studyTime / 60)
    }));
  }, [selectedClassId]);

  const COLORS = ['#ec2027', '#00a651', '#3b82f6', '#fbee21', '#a855f7'];

  return (
    <div className="h-full flex flex-col gap-3 md:gap-5 overflow-hidden">
      {/* Universal Compact Hero Header - Standardized */}
      <div className="w-full bg-[#292667] rounded-[1.8rem] md:rounded-[2.2rem] p-4 md:p-6 text-white shadow-lg border-b-[6px] md:border-b-[10px] border-[#3b82f6] flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="flex items-center gap-3 md:gap-6 relative z-10 w-full md:w-auto">
           <div className="p-3 md:p-4 bg-[#3b82f6] rounded-xl md:rounded-[1.5rem] text-white shadow-xl rotate-3">
             <BarChart3 size={24} md:size={36} strokeWidth={3.5} />
           </div>
           <div>
             <h2 className="text-xl md:text-3xl font-black leading-none tracking-tight uppercase">Data <span className="text-[#fbee21]">Insights</span></h2>
             <p className="text-[9px] md:text-[11px] font-black text-[#fbee21] uppercase tracking-[0.2em] mt-1 md:mt-2">Live Analytics Lab</p>
           </div>
        </div>
      </div>

      {/* Row 2: Filtering Controls - Compact */}
      <div className="w-full bg-white p-3 md:p-4 rounded-[1.5rem] md:rounded-[2rem] shadow-md border-2 border-slate-100 flex flex-col sm:flex-row items-center gap-3 md:gap-4 flex-shrink-0">
        <div className="flex flex-1 items-center gap-3 w-full">
          <div className="flex-1 flex items-center gap-2 md:gap-3 bg-slate-50 px-4 py-2.5 md:py-3.5 rounded-xl md:rounded-[1.2rem] border-2 border-slate-100 group focus-within:border-[#3b82f6]">
            <Filter size={16} md:size={18} className="text-slate-400" strokeWidth={3} />
            <select 
              value={selectedClassId}
              onChange={(e) => setSelectedClassId(e.target.value)}
              className="bg-transparent text-[10px] md:text-xs font-black text-[#292667] outline-none w-full uppercase tracking-widest"
            >
              {MOCK_CLASSES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <div className="flex-1 flex items-center gap-2 md:gap-3 bg-slate-50 px-4 py-2.5 md:py-3.5 rounded-xl md:rounded-[1.2rem] border-2 border-slate-100 group focus-within:border-[#3b82f6]">
            <Calendar size={16} md:size={18} className="text-slate-400" strokeWidth={3} />
            <select 
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="bg-transparent text-[10px] md:text-xs font-black text-[#292667] outline-none w-full uppercase tracking-widest"
            >
              {MONTHS.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>
        </div>

        <button className="flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#292667] text-white rounded-xl md:rounded-[1.2rem] font-black text-[10px] md:text-xs uppercase tracking-widest shadow-lg hover:bg-[#ec2027] transition-all active:scale-95 border-b-4 border-black/20 shrink-0">
          <Download size={18} md:size={20} strokeWidth={3} />
          <span>Export PDF</span>
        </button>
      </div>

      {/* Charts Grid - Compacted */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 flex-1 overflow-hidden pb-4">
        <div className="bg-white p-5 md:p-8 rounded-[1.8rem] md:rounded-[2.5rem] border-2 border-slate-50 shadow-lg flex flex-col min-h-0">
          <div className="mb-4 md:mb-6 shrink-0">
            <h3 className="text-xs md:text-lg font-black text-[#292667] uppercase tracking-tight flex items-center gap-2">
               <div className="w-2 h-2 md:w-3 md:h-3 bg-[#00a651] rounded-full animate-pulse"></div> 
               Attendance Trend
            </h3>
            <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">Days Present / 31</p>
          </div>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredData} margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 900, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 900, fill: '#64748b' }} domain={[0, 31]} />
                <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '10px', fontWeight: 900 }} />
                <Bar dataKey="attendance" radius={[8, 8, 0, 0]} barSize={32}>
                  {filteredData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-5 md:p-8 rounded-[1.8rem] md:rounded-[2.5rem] border-2 border-slate-50 shadow-lg flex flex-col min-h-0">
          <div className="mb-4 md:mb-6 shrink-0">
            <h3 className="text-xs md:text-lg font-black text-[#292667] uppercase tracking-tight flex items-center gap-2">
               <div className="w-2 h-2 md:w-3 md:h-3 bg-[#ec2027] rounded-full animate-pulse"></div> 
               Academic Score
            </h3>
            <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">Mastery Achievement</p>
          </div>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredData} layout="vertical" margin={{ top: 0, right: 20, left: 30, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 900, fill: '#64748b' }} domain={[0, 100]} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 900, fill: '#64748b' }} />
                <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '10px', fontWeight: 900 }} />
                <Bar dataKey="performance" radius={[0, 8, 8, 0]} barSize={24}>
                  {filteredData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
