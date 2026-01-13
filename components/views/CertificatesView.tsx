
import React, { useState } from 'react';
import { Award, Download, Printer, Sparkles, Star, Trophy, Edit2, Check } from 'lucide-react';

export const CertificatesView: React.FC = () => {
  const [teacherName, setTeacherName] = useState('Teacher Jane');
  const [schoolCode, setSchoolCode] = useState('UB-4421');
  const [isEditingTeacher, setIsEditingTeacher] = useState(false);
  const [isEditingCode, setIsEditingCode] = useState(false);

  return (
    <div className="h-full flex flex-col gap-6 overflow-hidden">
      <div className="w-full bg-[#292667] rounded-[3rem] p-8 text-white shadow-2xl border-b-[12px] border-[#a855f7] flex flex-col md:flex-row items-center justify-between gap-8 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
        <div className="flex items-center gap-6 relative z-10">
           <div className="p-5 bg-[#a855f7] rounded-[2.5rem] text-white shadow-xl rotate-3">
             <Trophy size={42} strokeWidth={3.5} />
           </div>
           <div>
             <h2 className="text-4xl font-black leading-none tracking-tight uppercase">Trophy <span className="text-[#fbee21]">Room</span></h2>
             <p className="text-[12px] font-black text-[#fbee21] uppercase tracking-[0.15em] mt-3">My Earned Awards & Degrees</p>
           </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-8 overflow-hidden pb-4">
        <div className="flex-1 bg-white rounded-[3rem] border-[16px] border-double border-amber-200 p-8 md:p-12 text-center relative shadow-2xl flex flex-col items-center justify-center overflow-hidden min-h-[400px]">
          <div className="absolute top-0 left-0 w-24 h-24 border-t-8 border-l-8 border-amber-400 rounded-tl-[2rem] opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-8 border-r-8 border-amber-400 rounded-br-[2rem] opacity-30"></div>

          <div className="absolute top-8 right-12 flex items-center gap-2 group cursor-pointer" onClick={() => !isEditingCode && setIsEditingCode(true)}>
            {isEditingCode ? (
              <div className="flex items-center gap-1 bg-white border-2 border-black rounded-lg px-2 py-0.5 shadow-sm">
                <input 
                  autoFocus
                  className="w-20 text-[10px] font-black uppercase text-black outline-none bg-transparent"
                  value={schoolCode}
                  onChange={(e) => setSchoolCode(e.target.value)}
                  onBlur={() => setIsEditingCode(false)}
                  onKeyDown={(e) => e.key === 'Enter' && setIsEditingCode(false)}
                />
                <Check size={10} className="text-[#00a651]" strokeWidth={4} />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">{schoolCode}</p>
                <div className="p-1.5 bg-slate-100 rounded-md transition-all border border-slate-200 hover:bg-black hover:text-white">
                  <Edit2 size={12} className="text-black group-hover:text-white" strokeWidth={3.5} />
                </div>
              </div>
            )}
          </div>

          <div className="mb-6">
            <div className="w-20 h-20 bg-[#fbee21] rounded-full mx-auto mb-4 border-4 border-white shadow-xl flex items-center justify-center">
               <Star className="fill-[#292667] text-[#292667]" size={40} />
            </div>
            <h1 className="text-2xl font-serif text-slate-800 mb-1 font-bold">Certificate of Mastery</h1>
            <p className="text-slate-400 font-bold italic text-sm">Awarded to the Digital Hero</p>
          </div>

          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-black text-[#292667] mb-4 uppercase tracking-tighter leading-none">Lucky Learner</h2>
            <div className="h-1 w-48 bg-[#fbee21] mx-auto mb-4 rounded-full"></div>
            <p className="text-sm md:text-base text-slate-600 max-w-md mx-auto leading-relaxed font-medium">
              For successfully conquering all missions in the <span className="font-black text-[#ec2027]">Logic & Code Adventure</span>.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 w-full max-w-sm mt-4">
            <div className="space-y-1 group relative flex flex-col items-center">
              <div 
                className="flex items-center justify-center gap-2 cursor-pointer w-full mb-1"
                onClick={() => !isEditingTeacher && setIsEditingTeacher(true)}
              >
                {isEditingTeacher ? (
                  <div className="flex items-center gap-1 bg-white border-2 border-black rounded-lg px-3 py-1 shadow-sm">
                    <input 
                      autoFocus
                      className="w-32 text-center text-sm font-black uppercase text-black outline-none"
                      value={teacherName}
                      onChange={(e) => setTeacherName(e.target.value)}
                      onBlur={() => setIsEditingTeacher(false)}
                      onKeyDown={(e) => e.key === 'Enter' && setIsEditingTeacher(false)}
                    />
                    <Check size={14} className="text-[#00a651]" strokeWidth={4} />
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <p className="font-black text-sm text-[#292667] uppercase">{teacherName}</p>
                    <div className="p-1.5 bg-slate-100 rounded-md transition-all border border-slate-200 hover:bg-black hover:text-white">
                      <Edit2 size={12} className="text-black group-hover:text-white" strokeWidth={3.5} />
                    </div>
                  </div>
                )}
              </div>
              <div className="h-0.5 bg-slate-200 w-full"></div>
              <p className="text-slate-400 uppercase font-black text-[8px] tracking-widest">Master Educator</p>
            </div>

            <div className="space-y-1 flex flex-col items-center">
              <p className="font-mono font-black text-sm text-[#292667] mb-1">2024-03-24</p>
              <div className="h-0.5 bg-slate-200 w-full"></div>
              <p className="text-slate-400 uppercase font-black text-[8px] tracking-widest">Award Date</p>
            </div>
          </div>
        </div>

        <div className="lg:w-80 flex flex-col gap-6">
           <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border-2 border-slate-100 flex-1">
              <h3 className="text-lg font-black text-[#292667] uppercase tracking-tight mb-6 flex items-center gap-3">
                 <Sparkles size={20} className="text-[#fbee21]" /> My Awards
              </h3>
              <div className="space-y-4">
                 {[1, 2, 3].map(i => (
                    <div key={i} className={`p-4 rounded-2xl border-2 flex items-center gap-4 transition-all cursor-pointer ${i === 1 ? 'border-[#a855f7] bg-purple-50 shadow-md' : 'border-slate-100 bg-slate-50 opacity-40'}`}>
                       <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${i === 1 ? 'bg-[#a855f7] text-white' : 'bg-slate-200 text-slate-400'}`}>
                          <Award size={20} />
                       </div>
                       <div>
                          <p className="text-[10px] font-black uppercase text-[#292667]">Module {i} Award</p>
                          <p className="text-[8px] font-bold text-slate-400">Earned: March 24</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
           
           <div className="flex flex-col gap-3">
              <button className="w-full py-4 bg-[#292667] text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg transition-all active:scale-95 border-b-6 border-black/20">
                 <Download size={18} strokeWidth={3.5} /> Download PDF
              </button>
              <button className="w-full py-4 bg-[#00a651] text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg transition-all active:scale-95 border-b-6 border-black/20">
                 <Printer size={18} strokeWidth={3.5} /> Print Now
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
