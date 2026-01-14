
import React, { useState, useMemo } from 'react';
import { 
  Calendar, CheckCircle2, XCircle, Clock, 
  Flame, Trophy, Star, Sparkles, Rocket, 
  ChevronLeft, ChevronRight 
} from 'lucide-react';

export const AttendanceView: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 2, 1)); // Default to March 2024

  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  const handlePrevMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  // Generate dynamic days for the current month
  const attendanceRecord = useMemo(() => {
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const records = [];
    const today = new Date();
    
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      
      let status: 'present' | 'absent' | 'weekend' | 'future' = 'present';
      
      if (isWeekend) {
        status = 'weekend';
      } else if (date > today) {
        status = 'future';
      } else if (day === 7 || day === 21) { // Just some mock absences
        status = 'absent';
      } else {
        status = 'present';
      }
      
      records.push({ day, status });
    }
    return records;
  }, [currentDate]);

  const presentCount = attendanceRecord.filter(r => r.status === 'present').length;
  const totalSchoolDays = attendanceRecord.filter(r => r.status !== 'weekend' && r.status !== 'future').length;
  const percentage = totalSchoolDays > 0 ? Math.round((presentCount / totalSchoolDays) * 100) : 0;

  // Calculate starting empty slots
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  // Adjust so Monday is 0, Sunday is 6
  const emptySlotsCount = (firstDayOfMonth + 6) % 7;

  return (
    <div className="h-full flex flex-col gap-3 md:gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-hidden">
      {/* Header Section */}
      <div className="w-full bg-[#292667] rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-8 text-white shadow-2xl border-b-[8px] md:border-b-[12px] border-[#3b82f6] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-white/5 rounded-full -mr-20 -mt-20 md:-mr-24 md:-mt-24 blur-3xl"></div>
        <div className="flex items-center gap-4 md:gap-6 relative z-10">
           <div className="p-3 md:p-5 bg-[#3b82f6] rounded-2xl md:rounded-[2rem] text-white shadow-xl rotate-3">
             <Calendar size={32} md:size={42} strokeWidth={3.5} />
           </div>
           <div>
             <h2 className="text-2xl md:text-4xl font-black leading-none tracking-tight uppercase">Hero <span className="text-[#fbee21]">Check-in</span></h2>
             <p className="text-[8px] md:text-[12px] font-black text-[#fbee21] uppercase tracking-[0.15em] mt-1 md:mt-3">My Attendance Journey</p>
           </div>
        </div>
        <div className="bg-white/10 px-6 md:px-10 py-3 md:py-5 rounded-[1.5rem] md:rounded-[2rem] border-2 border-white/10 relative z-10 flex items-center gap-4 md:gap-6">
           <div className="text-right">
              <p className="text-[7px] md:text-[10px] font-black uppercase text-white/50 tracking-widest">Score</p>
              <p className="text-2xl md:text-4xl font-black text-[#fbee21]">{percentage}%</p>
           </div>
           <div className="w-10 h-10 md:w-16 md:h-16 bg-[#fbee21] rounded-xl md:rounded-2xl flex items-center justify-center rotate-6 shadow-xl">
              <Trophy size={20} md:size={32} className="text-[#292667]" />
           </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 overflow-hidden pb-2">
        {/* Left Column: Stats Cards */}
        <div className="lg:col-span-4 flex flex-col gap-4 overflow-hidden shrink-0">
           <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-8 border-2 border-slate-100 shadow-xl space-y-3 md:space-y-6 flex-1 flex flex-col justify-center">
              <h3 className="text-base md:text-lg font-black text-[#292667] uppercase tracking-tight flex items-center gap-2 md:gap-3">
                 <Sparkles className="text-[#fbee21]" size={16} md:size={20} /> Hero Stats
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 md:gap-4">
                 <div className="p-4 md:p-6 bg-orange-50 rounded-[1.5rem] md:rounded-[2rem] border-2 border-orange-100 flex items-center gap-4 group transition-all">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-orange-500 text-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform shrink-0">
                       <Flame size={20} md:size={32} strokeWidth={3} />
                    </div>
                    <div>
                       <p className="text-lg md:text-2xl font-black text-orange-600 leading-tight">5 Days</p>
                       <p className="text-[7px] md:text-[10px] font-black uppercase text-orange-400 tracking-widest">Streak</p>
                    </div>
                 </div>

                 <div className="p-4 md:p-6 bg-blue-50 rounded-[1.5rem] md:rounded-[2rem] border-2 border-blue-100 flex items-center gap-4 group transition-all">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-500 text-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform shrink-0">
                       <CheckCircle2 size={20} md:size={32} strokeWidth={3} />
                    </div>
                    <div>
                       <p className="text-lg md:text-2xl font-black text-blue-600 leading-tight">{presentCount}</p>
                       <p className="text-[7px] md:text-[10px] font-black uppercase text-blue-400 tracking-widest">Attended</p>
                    </div>
                 </div>

                 <div className="p-4 md:p-6 bg-purple-50 rounded-[1.5rem] md:rounded-[2rem] border-2 border-purple-100 flex items-center gap-4 group transition-all">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-purple-500 text-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform shrink-0">
                       <Rocket size={20} md:size={32} strokeWidth={3} />
                    </div>
                    <div>
                       <p className="text-lg md:text-2xl font-black text-purple-600 leading-tight">Perfect Week</p>
                       <p className="text-[7px] md:text-[10px] font-black uppercase text-purple-400 tracking-widest">Next Goal</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Column: Calendar Grid */}
        <div className="lg:col-span-8 bg-white rounded-[2rem] md:rounded-[3rem] p-5 md:p-10 shadow-2xl border-2 border-slate-100 flex flex-col overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4 md:mb-6 gap-3 md:gap-4 flex-shrink-0">
             <div className="flex items-center gap-3 md:gap-4 w-full sm:w-auto justify-between sm:justify-start">
                <button 
                  onClick={handlePrevMonth}
                  className="p-2 md:p-3 bg-slate-50 text-[#292667] rounded-xl md:rounded-2xl hover:bg-[#3b82f6] hover:text-white transition-all shadow-sm active:scale-90"
                >
                   <ChevronLeft size={18} md:size={24} strokeWidth={4} />
                </button>
                <div className="text-center sm:text-left">
                   <h3 className="text-lg md:text-2xl font-black text-[#292667] uppercase tracking-tighter leading-none">{monthName} {year}</h3>
                   <p className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">My Mission Calendar</p>
                </div>
                <button 
                  onClick={handleNextMonth}
                  className="p-2 md:p-3 bg-slate-50 text-[#292667] rounded-xl md:rounded-2xl hover:bg-[#3b82f6] hover:text-white transition-all shadow-sm active:scale-90"
                >
                   <ChevronRight size={18} md:size={24} strokeWidth={4} />
                </button>
             </div>
             <div className="flex gap-4">
                <div className="flex items-center gap-1.5">
                   <div className="w-2 h-2 bg-[#00a651] rounded-full"></div>
                   <span className="text-[8px] font-black text-slate-400 uppercase">Present</span>
                </div>
                <div className="flex items-center gap-1.5">
                   <div className="w-2 h-2 bg-[#ec2027] rounded-full"></div>
                   <span className="text-[8px] font-black text-slate-400 uppercase">Absent</span>
                </div>
             </div>
          </div>

          <div className="flex-1 flex flex-col min-h-0">
            {/* Days Header */}
            <div className="grid grid-cols-7 gap-1 md:gap-2 mb-2 flex-shrink-0">
               {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                 <div key={day} className="text-center text-[7px] md:text-[10px] font-black text-slate-300 uppercase tracking-[0.1em]">{day}</div>
               ))}
            </div>
            
            {/* The Grid */}
            <div className="flex-1 grid grid-cols-7 grid-rows-6 gap-1.5 md:gap-3">
               {/* Empty slots */}
               {Array.from({ length: emptySlotsCount }).map((_, i) => (
                 <div key={`empty-${i}`} className="rounded-xl md:rounded-3xl border-2 border-transparent"></div>
               ))}

               {attendanceRecord.map((record) => {
                 let bgColor = "bg-slate-50";
                 let textColor = "text-slate-300";
                 let icon = null;

                 if (record.status === 'present') {
                    bgColor = "bg-green-50 border border-green-100 md:border-2";
                    textColor = "text-[#00a651]";
                    icon = <CheckCircle2 size={10} md:size={16} />;
                 } else if (record.status === 'absent') {
                    bgColor = "bg-red-50 border border-red-100 md:border-2";
                    textColor = "text-[#ec2027]";
                    icon = <XCircle size={10} md:size={16} />;
                 } else if (record.status === 'weekend') {
                    bgColor = "bg-slate-100/50";
                    textColor = "text-slate-200";
                 } else if (record.status === 'future') {
                    bgColor = "bg-white border md:border-2 border-dashed border-slate-100";
                    textColor = "text-slate-200";
                    icon = <Clock size={10} md:size={16} className="opacity-20" />;
                 }

                 return (
                   <div 
                    key={record.day} 
                    className={`flex flex-col items-center justify-center gap-0.5 transition-all hover:scale-105 cursor-default rounded-lg md:rounded-[1.8rem] ${bgColor}`}
                   >
                     <span className={`text-xs md:text-lg font-black leading-none ${textColor}`}>{record.day}</span>
                     {icon && <div className="hidden xs:block mt-0.5">{icon}</div>}
                   </div>
                 );
               })}
               
               {/* Filler cells */}
               {Array.from({ length: Math.max(0, 42 - attendanceRecord.length - emptySlotsCount) }).map((_, i) => (
                 <div key={`filler-${i}`} className="rounded-xl border-2 border-transparent"></div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
