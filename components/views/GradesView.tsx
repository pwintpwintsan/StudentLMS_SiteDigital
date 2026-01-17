
import React, { useState } from 'react';
import { 
  Star, TrendingUp, Award, CheckCircle2, Target, 
  Rocket, Cpu, Globe, ChevronDown, Eye, X, Info, 
  Check, Download, AlertCircle, Sparkles
} from 'lucide-react';

export const GradesView: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState('Digital Kids Starter V2');

  const courseStats: Record<string, { avg: number, tasks: string, modules: any[] }> = {
    'Digital Kids Starter V2': {
      avg: 92,
      tasks: '12/15',
      modules: [
        { mod: 1, title: 'Logic & Binary', score: 98, status: 'Mastered' },
        { mod: 2, title: 'Robotics Basics', score: 85, status: 'Good' },
      ]
    },
    'Robotics Mastery': {
      avg: 78,
      tasks: '5/20',
      modules: [
        { mod: 1, title: 'Sensors & Motors', score: 95, status: 'Mastered' },
      ]
    }
  };

  const currentStats = courseStats[selectedCourse] || courseStats['Digital Kids Starter V2'];

  return (
    <div className="h-full flex flex-col gap-3 overflow-hidden">
      <div className="bg-white px-3 py-2 rounded-xl shadow-sm border-2 border-[#8b5cf6] flex items-center gap-2 overflow-x-auto scrollbar-hide">
        {Object.keys(courseStats).map((courseName) => (
          <button
            key={courseName}
            onClick={() => setSelectedCourse(courseName)}
            className={`px-4 py-2 rounded-lg font-black text-[10px] uppercase tracking-tight whitespace-nowrap ${
              selectedCourse === courseName ? 'bg-[#292667] text-[#fbee21] border-2 border-[#8b5cf6]' : 'bg-slate-50 text-slate-400 border border-slate-100'
            }`}
          >
            {courseName}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 shrink-0">
         <div className="bg-white p-4 rounded-xl border-2 border-[#8b5cf6] flex items-center gap-3">
            <div className="w-8 h-8 bg-green-50 text-[#00a651] rounded-lg flex items-center justify-center"><TrendingUp size={16} /></div>
            <div>
               <p className="text-lg font-black text-[#292667] leading-none">{currentStats.avg}%</p>
               <p className="text-[7px] font-black uppercase text-slate-300 mt-0.5">AVG</p>
            </div>
         </div>
         <div className="bg-white p-4 rounded-xl border-2 border-[#8b5cf6] flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center"><Target size={16} /></div>
            <div>
               <p className="text-lg font-black text-[#292667] leading-none">{currentStats.tasks}</p>
               <p className="text-[7px] font-black uppercase text-slate-300 mt-0.5">QUESTS</p>
            </div>
         </div>
      </div>

      <div className="bg-white rounded-xl p-4 border-2 border-[#8b5cf6] flex-1 flex flex-col min-h-0 shadow-md">
         <h3 className="text-xs font-black text-[#292667] uppercase mb-4 flex items-center gap-2">
            <Award className="text-[#00a651]" size={14} /> Module Performance
         </h3>

         <div className="space-y-2 overflow-y-auto scrollbar-hide">
            {currentStats.modules.map((g) => (
               <div key={g.mod} className="p-3 bg-slate-50 rounded-lg border-2 border-[#8b5cf6] flex items-center justify-between hover:bg-white transition-colors">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center font-black text-[#292667] text-xs shadow-sm border border-[#8b5cf6]">{g.mod}</div>
                     <div>
                        <h4 className="text-[10px] font-black text-[#292667] uppercase truncate max-w-[120px]">{g.title}</h4>
                        <p className="text-[7px] font-black text-[#00a651] uppercase mt-0.5">{g.status}</p>
                     </div>
                  </div>
                  <div className="text-right">
                     <p className="text-sm font-black text-[#292667]">{g.score}%</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};
