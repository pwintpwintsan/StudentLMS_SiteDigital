
import React, { useState, useMemo } from 'react';
import { 
  Calendar, CheckCircle2, XCircle, Clock, 
  Flame, Trophy, Star, Sparkles, Rocket, 
  ChevronLeft, ChevronRight 
} from 'lucide-react';

export const AttendanceView: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 2, 1));
  const monthName = currentDate.toLocaleString('default', { month: 'long' });

  const attendanceRecord = useMemo(() => {
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const records = [];
    for (let day = 1; day <= daysInMonth; day++) {
      records.push({ day, status: day % 7 === 0 ? 'absent' : 'present' });
    }
    return records;
  }, [currentDate]);

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const emptySlotsCount = (firstDayOfMonth + 6) % 7;

  return (
    <div className="h-full flex flex-col gap-3 overflow-hidden">
      <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border-2 border-[#8b5cf6] shrink-0">
        <div className="flex items-center gap-3">
           <div className="w-8 h-8 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center"><Calendar size={18} /></div>
           <h2 className="text-sm font-black text-[#292667] uppercase">{monthName}</h2>
        </div>
        <div className="flex gap-2">
           <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))} className="p-1 hover:bg-slate-100 rounded-md text-[#8b5cf6]"><ChevronLeft size={18} /></button>
           <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))} className="p-1 hover:bg-slate-100 rounded-md text-[#8b5cf6]"><ChevronRight size={18} /></button>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 border-2 border-[#8b5cf6] flex-1 flex flex-col overflow-hidden shadow-md">
        <div className="grid grid-cols-7 gap-1 text-center text-[8px] font-black text-slate-300 uppercase mb-2">
           {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => <div key={d}>{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1 flex-1">
           {Array.from({ length: emptySlotsCount }).map((_, i) => <div key={i}></div>)}
           {attendanceRecord.map(r => (
             <div key={r.day} className={`aspect-square flex items-center justify-center rounded-lg text-[10px] font-black border-2 ${r.status === 'present' ? 'bg-green-50 text-[#00a651] border-[#00a651]/20' : 'bg-red-50 text-[#ec2027] border-[#ec2027]/20'}`}>
               {r.day}
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};
