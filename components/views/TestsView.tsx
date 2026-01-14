
import React, { useState } from 'react';
import { ClipboardCheck, Sparkles, Play, Star, CheckCircle2, Lock } from 'lucide-react';

const SwitchToggle = ({ active, onClick }: { active: boolean; onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`w-20 h-10 rounded-full relative transition-all duration-300 shadow-inner overflow-hidden border-2 ${active ? 'bg-[#00a651] border-[#00a651]' : 'bg-slate-200 border-slate-300'}`}
  >
    <div 
      className={`absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-lg transition-transform duration-300 flex items-center justify-center ${active ? 'translate-x-10' : 'translate-x-0'}`}
    >
      <div className={`w-2.5 h-2.5 rounded-full ${active ? 'bg-[#00a651]' : 'bg-slate-300'}`}></div>
    </div>
  </button>
);

interface TestsViewProps {
  onEnterCourse: (name: string) => void;
}

export const TestsView: React.FC<TestsViewProps> = ({ onEnterCourse }) => {
  const [prepMode, setPrepMode] = useState(false);
  const testItems = [
    { id: 1, title: 'Module 1 Mastery', status: 'ready', reward: 200, course: 'Digital Kids Starter V2' },
    { id: 2, title: 'Module 2 Logic', status: 'locked', reward: 200, course: 'Robotics Mastery' },
    { id: 3, title: 'Module 3 AI Fun', status: 'locked', reward: 250, course: 'AI For Heroes' },
    { id: 4, title: 'Module 4 Codes', status: 'locked', reward: 300, course: 'Web Creators' },
    { id: 5, title: 'Final Graduation', status: 'locked', reward: 1000, course: 'Game Architecture' },
  ];

  return (
    <div className="h-full flex flex-col gap-6 overflow-hidden">
      <div className="w-full bg-[#292667] rounded-[3rem] p-8 text-white shadow-2xl border-b-[12px] border-[#f43f5e] flex flex-col md:flex-row items-center justify-between gap-8 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
        <div className="flex items-center gap-6 relative z-10">
           <div className="p-5 bg-[#f43f5e] rounded-[2.5rem] text-white shadow-xl rotate-3">
             <ClipboardCheck size={42} strokeWidth={3.5} />
           </div>
           <div>
             <h2 className="text-3xl md:text-4xl font-black leading-none tracking-tight uppercase">Mission <span className="text-[#fbee21]">Tests</span></h2>
             <p className="text-[12px] md:text-[14px] font-black text-[#fbee21] uppercase tracking-[0.15em] mt-3">Final Challenges for Mastery</p>
           </div>
        </div>
        
        <div className="bg-white/10 px-8 py-5 rounded-[2.5rem] flex items-center gap-6 relative z-10 border-2 border-white/10 shadow-lg">
           <div className="text-right">
              <p className="text-[10px] font-black uppercase tracking-widest text-white/60">Revision Mode</p>
              <p className="text-lg font-black text-[#fbee21] uppercase">Practice On</p>
           </div>
           <SwitchToggle active={prepMode} onClick={() => setPrepMode(!prepMode)} />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
          {testItems.map((test) => (
            <div key={test.id} className={`bg-white rounded-[3.5rem] p-10 border-4 transition-all group relative overflow-hidden flex flex-col ${test.status === 'ready' ? 'border-[#f43f5e] shadow-xl' : 'border-slate-100 opacity-60 grayscale-[0.3]'}`}>
              <div className="flex justify-between items-start mb-8">
                <div className={`w-16 h-16 rounded-[1.8rem] flex items-center justify-center ${test.status === 'ready' ? 'bg-[#f43f5e]/10 text-[#f43f5e] shadow-inner' : 'bg-slate-50 text-slate-300'}`}>
                   {test.status === 'ready' ? <Play size={32} fill="currentColor" strokeWidth={0} /> : <Lock size={32} />}
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Hero XP</p>
                   <p className="text-2xl font-black text-[#292667] flex items-center gap-2 leading-none">{test.reward} <Star className="fill-[#fbee21] text-[#fbee21]" size={20} /></p>
                </div>
              </div>
              
              <h4 className="text-2xl font-black text-[#292667] uppercase tracking-tight mb-8 leading-tight">{test.title}</h4>
              
              <button 
                onClick={() => test.status === 'ready' && onEnterCourse(test.course)}
                className={`w-full py-6 rounded-[2rem] font-black text-sm uppercase tracking-widest transition-all shadow-lg active:scale-95 border-b-6 border-black/10 ${test.status === 'ready' ? 'bg-[#f43f5e] text-white hover:bg-[#ec2027]' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}>
                {test.status === 'ready' ? 'Start Challenge' : 'Mission Locked'}
              </button>

              <div className="absolute -bottom-6 -right-6 opacity-[0.03] text-[#292667] pointer-events-none group-hover:opacity-10 transition-opacity">
                 <Sparkles size={120} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
