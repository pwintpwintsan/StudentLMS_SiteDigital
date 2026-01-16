
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
    <div className="h-full flex flex-col gap-3 md:gap-5 animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-hidden">
      {/* Universal Compact Hero Header */}
      <div className="w-full bg-[#292667] rounded-[1.8rem] md:rounded-[2.2rem] p-4 md:p-6 text-white shadow-lg border-b-[6px] md:border-b-[10px] border-[#3b82f6] flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="flex items-center gap-3 md:gap-6 relative z-10 w-full md:w-auto">
           <div className="p-3 md:p-4 bg-[#3b82f6] rounded-xl md:rounded-[1.5rem] text-white shadow-xl rotate-3">
             <Calendar size={24} md:size={36} strokeWidth={3.5} />
           </div>
           <div>
             <h2 className="text-xl md:text-3xl font-black leading-none tracking-tight uppercase">Hero <span className="text-[#fbee21]">Check-in</span></h2>
             <p className="text-[9px] md:text-[11px] font-black text-[#fbee21] uppercase tracking-[0.2em] mt-1 md:mt-2">My Attendance Journey</p>
           </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 overflow-hidden pb-2">
        {/* Left Column: Stats Cards */}
        <div className="lg:col-span-4 flex flex-col gap-4 overflow-hidden shrink-0">
           <div className="bg-white rounded-[1.5rem] md:rounded-[2.2rem] p-4 md:p-6 border-2 border-slate-100 shadow-lg space-y-3 md:space-y-4 flex-1 flex flex-col justify-center">
              <h3 className="text-xs md:text-lg font-black text-[#292667] uppercase tracking-tight flex items-center gap-2">
                 <Sparkles className="text-[#fbee21]" size={14} md:size={18} /> Hero Stats
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2 md:gap-3">
                 <div className="p-3 md:p-4 bg-orange-50 rounded-xl md:rounded-[1.5rem] border-2 border-orange-100 flex items-center gap-3 group transition-all">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 text-white rounded-lg md:rounded-xl flex items-center justify-center shadow-md shrink-0">
                       <Flame size={18} md:size={24} strokeWidth={3} />
                    </div>
                    <div>
                       <p className="text-base md:text-xl font-black text-orange-600 leading-tight">5 Days</p>
                       <p className="text-[7px] md:text-[9px] font-black uppercase text-orange-400 tracking-widest">Streak</p>
                    </div>
                 </div>

                 <div className="p-3 md:p-4 bg-blue-50 rounded-xl md:rounded-[1.5rem] border-2 border-blue-100 flex items-center gap-3 group transition-all">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 text-white rounded-lg md:rounded-xl flex items-center justify-center shadow-md shrink-0">
                       <CheckCircle2 size={18} md:size={24} strokeWidth={3} />
                    </div>
                    <div>
                       <p className="text-base md:text-xl font-black text-blue-600 leading-tight">{presentCount}</p>
                       <p className="text-[7px] md:text-[9px] font-black uppercase text-blue-400 tracking-widest">Attended</p>
                    </div>
                 </div>

                 <div className="p-3 md:p-4 bg-purple-50 rounded-xl md:rounded-[1.5rem] border-2 border-purple-100 flex items-center gap-3 group transition-all">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500 text-white rounded-lg md:rounded-xl flex items-center justify-center shadow-md shrink-0">
                       <Rocket size={18} md:size={24} strokeWidth={3} />
                    </div>
                    <div>
                       <p className="text-sm md:text-lg font-black text-purple-600 leading-tight uppercase">Perfect</p>
                       <p className="text-[7px] md:text-[9px] font-black uppercase text-purple-400 tracking-widest">Target</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Column: Calendar Grid */}
        <div className="lg:col-span-8 bg-white rounded-[1.8rem] md:rounded-[2.5rem] p-4 md:p-8 shadow-xl border-2 border-slate-100 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between mb-4 gap-2 flex-shrink-0">
             <div className="flex items-center gap-2 md:gap-4">
                <button onClick={handlePrevMonth} className="p-2 md:p-2.5 bg-slate-50 text-[#292667] rounded-lg md:rounded-xl hover:bg-[#3b82f6] hover:text-white transition-all active:scale-90">
                   <ChevronLeft size={16} md:size={20} strokeWidth={4} />
                </button>
                <div className="text-center md:text-left">
                   <h3 className="text-sm md:text-xl font-black text-[#292667] uppercase tracking-tighter leading-none">{monthName} {year}</h3>
                </div>
                <button onClick={handleNextMonth} className="p-2 md:p-2.5 bg-slate-50 text-[#292667] rounded-lg md:rounded-xl hover:bg-[#3b82f6] hover:text-white transition-all active:scale-90">
                   <ChevronRight size={16} md:size={20} strokeWidth={4} />
                </button>
             </div>
             <div className="flex gap-3">
                <div className="flex items-center gap-1">
                   <div className="w-2 h-2 bg-[#00a651] rounded-full"></div>
                   <span className="text-[7px] md:text-[9px] font-black text-slate-400 uppercase">IN</span>
                </div>
                <div className="flex items-center gap-1">
                   <div className="w-2 h-2 bg-[#ec2027] rounded-full"></div>
                   <span className="text-[7px] md:text-[9px] font-black text-slate-400 uppercase">OUT</span>
                </div>
             </div>
          </div>

          <div className="flex-1 flex flex-col min-h-0">
            <div className="grid grid-cols-7 gap-1 md:gap-2 mb-1 flex-shrink-0">
               {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                 <div key={i} className="text-center text-[8px] md:text-[10px] font-black text-slate-300 uppercase">{day}</div>
               ))}
            </div>
            <div className="flex-1 grid grid-cols-7 grid-rows-6 gap-1 md:gap-2">
               {Array.from({ length: emptySlotsCount }).map((_, i) => (
                 <div key={`empty-${i}`} className="rounded-lg md:rounded-2xl border-2 border-transparent"></div>
               ))}
               {attendanceRecord.map((record) => {
                 let bgColor = "bg-slate-50";
                 let textColor = "text-slate-200";
                 if (record.status === 'present') { bgColor = "bg-green-50 border border-green-100"; textColor = "text-[#00a651]"; }
                 else if (record.status === 'absent') { bgColor = "bg-red-50 border border-red-100"; textColor = "text-[#ec2027]"; }
                 else if (record.status === 'future') { bgColor = "bg-white border border-dashed border-slate-100"; }
                 return (
                   <div key={record.day} className={`flex items-center justify-center rounded-lg md:rounded-2xl ${bgColor}`}>
                     <span className={`text-[10px] md:text-lg font-black ${textColor}`}>{record.day}</span>
                   </div>
                 );
               })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
