
import React, { useState } from 'react';
import { ClipboardCheck, Sparkles, Play, Star, CheckCircle2, Lock } from 'lucide-react';

interface TestsViewProps {
  onEnterCourse: (name: string) => void;
}

export const TestsView: React.FC<TestsViewProps> = ({ onEnterCourse }) => {
  const testItems = [
    { id: 1, title: 'Module 1 Mastery', status: 'ready', course: 'Digital Kids Starter V2' },
    { id: 2, title: 'Module 2 Logic', status: 'locked', course: 'Robotics Mastery' },
  ];

  return (
    <div className="h-full flex flex-col gap-3 overflow-hidden">
      <div className="p-3 bg-[#8b5cf6] text-white rounded-xl flex items-center justify-between shadow-sm border-2 border-white">
        <h3 className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
          <ClipboardCheck size={16} /> Mission Challenges
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-y-auto scrollbar-hide pb-4">
        {testItems.map((test) => (
          <div key={test.id} className={`bg-white rounded-xl p-4 border-2 border-[#8b5cf6] shadow-md flex flex-col ${test.status === 'locked' ? 'opacity-50 grayscale' : 'hover:scale-[1.02] transition-transform'}`}>
             <h4 className="text-[10px] font-black text-[#292667] uppercase mb-4">{test.title}</h4>
             <button 
                onClick={() => test.status === 'ready' && onEnterCourse(test.course)}
                className={`w-full py-2.5 rounded-lg font-black text-[9px] uppercase tracking-widest transition-all ${test.status === 'ready' ? 'bg-[#fbee21] text-[#292667] hover:bg-yellow-400 border-b-4 border-yellow-600' : 'bg-slate-50 text-slate-300 cursor-not-allowed'}`}
             >
                {test.status === 'ready' ? 'Start Test' : 'Locked'}
             </button>
          </div>
        ))}
      </div>
    </div>
  );
};
