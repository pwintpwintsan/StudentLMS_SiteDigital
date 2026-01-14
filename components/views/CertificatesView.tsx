
import React, { useState } from 'react';
import { Award, Download, Printer, Sparkles, Star, Trophy, Edit2, Check, Lock, BookOpen, ChevronRight } from 'lucide-react';
import { Certificate } from '../../types';

const UBookLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g transform="translate(10, 5)">
      <path d="M25 25c0-10 8-15 15-15s15 5 15 15-8 15-15 15-15-5-15-15z" fill="#FFE0BD" />
      <path d="M20 18c0-8 8-13 20-13s20 5 20 13c-4-3-10-4-20-4s-16 1-20 4z" fill="#444" />
      <circle cx="33" cy="25" r="9" stroke="#000" strokeWidth="1.5" fill="white" />
      <circle cx="47" cy="25" r="9" stroke="#000" strokeWidth="1.5" fill="white" />
      <path d="M38 25h4" stroke="#000" strokeWidth="1.5" />
      <path d="M25 45h30l6 18H19l6-18z" fill="#ec2027" />
      <path d="M30 45h20v18H30V45z" fill="#00a651" />
      <path d="M15 55l25 12 25-12v15l-25 12-25-12z" fill="#fbee21" stroke="#000" strokeWidth="1" />
    </g>
    <g transform="translate(85, 10)">
      <path d="M15 20c0-10 8-15 15-15s15 5 15 15-8 15-15 15-15-5-15-15z" fill="#FFE0BD" />
      <path d="M10 15c0-8 8-13 20-13s20 5 20 13" fill="#444" />
      <circle cx="8" cy="35" r="4" fill="#ec2027" />
      <circle cx="52" cy="35" r="4" fill="#ec2027" />
      <path d="M23 20" r="9" stroke="#000" strokeWidth="1.5" fill="white" />
      <circle cx="23" cy="20" r="9" stroke="#000" strokeWidth="1.5" fill="white" />
      <circle cx="37" cy="20" r="9" stroke="#000" strokeWidth="1.5" fill="white" />
      <path d="M15 40h30l6 14H9l6-14z" fill="#00a651" />
      <path d="M20 40h20v14H20V40z" fill="#ec2027" />
      <path d="M12 48l18 4 18-4v10l-18 4-18-4z" fill="white" stroke="#000" strokeWidth="1" />
    </g>
    <text x="35" y="105" fontFamily="Arial Black, sans-serif" fontSize="18" fill="#292667" fontWeight="900">U BOOK STORE</text>
  </svg>
);

export const CertificatesView: React.FC = () => {
  const learnerName = "Lucky Learner"; // Should come from global state
  
  const [certificates, setCertificates] = useState<Certificate[]>([
    { id: 'cert-1', courseName: 'Digital Kids Starter V2', issueDate: '2024-03-24', teacherName: 'Teacher Jane', score: 98, isUnlocked: true, progress: 100 },
    { id: 'cert-2', courseName: 'Logic & Binary Master', issueDate: '2024-02-15', teacherName: 'Teacher Jane', score: 95, isUnlocked: true, progress: 100 },
    { id: 'cert-3', courseName: 'Robotics Mastery', issueDate: '-', teacherName: 'Teacher Jane', score: 0, isUnlocked: false, progress: 65 },
    { id: 'cert-4', courseName: 'AI For Heroes', issueDate: '-', teacherName: 'Teacher Jane', score: 0, isUnlocked: false, progress: 20 },
  ]);

  const [selectedCertId, setSelectedCertId] = useState<string>(certificates[0].id);
  const selectedCert = certificates.find(c => c.id === selectedCertId) || certificates[0];

  const earnedCerts = certificates.filter(c => c.isUnlocked);
  const inProgressCerts = certificates.filter(c => !c.isUnlocked);

  return (
    <div className="h-full flex flex-col gap-4 md:gap-6 overflow-hidden">
      {/* Header Bar */}
      <div className="w-full bg-[#292667] rounded-[2rem] md:rounded-[3rem] p-5 md:p-8 text-white shadow-2xl border-b-[8px] md:border-b-[12px] border-[#a855f7] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
        <div className="flex items-center gap-4 md:gap-6 relative z-10">
           <div className="p-3 md:p-5 bg-[#a855f7] rounded-[1.5rem] md:rounded-[2.5rem] text-white shadow-xl rotate-3">
             <Trophy size={32} md:size={42} strokeWidth={3.5} />
           </div>
           <div>
             <h2 className="text-2xl md:text-4xl font-black leading-none tracking-tight uppercase">Trophy <span className="text-[#fbee21]">Room</span></h2>
             <p className="text-[10px] md:text-[12px] font-black text-[#fbee21] uppercase tracking-[0.15em] mt-1 md:mt-3">Celebrate Your Achievements</p>
           </div>
        </div>
        <div className="hidden md:flex bg-white/10 px-8 py-4 rounded-[2rem] border-2 border-white/5 items-center gap-4">
           <div className="text-right">
              <p className="text-[10px] font-black uppercase text-white/50 tracking-widest leading-none">Total Awards</p>
              <p className="text-3xl font-black text-[#fbee21]">{earnedCerts.length}</p>
           </div>
           <Award size={32} className="text-[#fbee21]" />
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-4 md:gap-8 overflow-hidden pb-4">
        {/* Main Certificate Display */}
        <div className="flex-1 flex flex-col gap-4 overflow-hidden min-h-0">
          {selectedCert.isUnlocked ? (
            <div className="flex-1 bg-white rounded-[2.5rem] md:rounded-[3.5rem] border-[12px] md:border-[16px] border-double border-amber-200 p-6 md:p-12 text-center relative shadow-2xl flex flex-col items-center justify-center overflow-hidden animate-in zoom-in-95 duration-500">
              {/* Decorative Corner Borders */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-8 border-l-8 border-amber-400 rounded-tl-[1.5rem] md:rounded-tl-[2rem] opacity-30"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-8 border-r-8 border-amber-400 rounded-br-[1.5rem] md:rounded-br-[2rem] opacity-30"></div>

              {/* Top Meta Info */}
              <div className="absolute top-4 md:top-8 right-6 md:right-12 text-right">
                <p className="text-[8px] md:text-[10px] font-black uppercase text-slate-300 tracking-[0.2em]">{selectedCert.id}</p>
                <div className="mt-1 md:mt-2 bg-green-50 text-[#00a651] border border-green-100 rounded-lg px-2 py-1 inline-flex items-center gap-1">
                   <Star size={10} fill="currentColor" />
                   <span className="text-[10px] font-black">GRADE: {selectedCert.score}%</span>
                </div>
              </div>

              {/* Logo Replaced Star */}
              <div className="mb-4 md:mb-8 shrink-0">
                <UBookLogo className="w-24 h-24 md:w-32 md:h-32 mx-auto drop-shadow-lg" />
              </div>

              <div className="mb-4 md:mb-8 shrink-0">
                <h1 className="text-xl md:text-3xl font-serif text-slate-800 mb-1 font-bold">Certificate of Mastery</h1>
                <p className="text-slate-400 font-bold italic text-xs md:text-sm uppercase tracking-widest">This prestigious award is presented to</p>
              </div>

              <div className="mb-6 md:mb-10 w-full px-4 shrink-0">
                <h2 className="text-3xl md:text-6xl font-black text-[#292667] mb-2 md:mb-4 uppercase tracking-tighter leading-none">{learnerName}</h2>
                <div className="h-1 md:h-1.5 w-32 md:w-64 bg-[#fbee21] mx-auto mb-4 md:mb-6 rounded-full shadow-sm"></div>
                <p className="text-xs md:text-lg text-slate-600 max-w-md mx-auto leading-relaxed font-bold uppercase tracking-tight">
                  For completing the <span className="text-[#ec2027]">{selectedCert.courseName}</span> quest with outstanding brilliance.
                </p>
              </div>

              {/* Signatures */}
              <div className="grid grid-cols-2 gap-8 md:gap-16 w-full max-w-sm md:max-w-md mt-4 md:mt-8 shrink-0 px-4">
                <div className="space-y-1 md:space-y-2 flex flex-col items-center">
                  <p className="font-black text-xs md:text-lg text-[#292667] uppercase italic border-b-2 border-slate-200 w-full pb-1">{selectedCert.teacherName}</p>
                  <p className="text-slate-400 uppercase font-black text-[7px] md:text-[9px] tracking-widest">Master Educator</p>
                </div>
                <div className="space-y-1 md:space-y-2 flex flex-col items-center">
                  <p className="font-mono font-black text-xs md:text-lg text-[#292667] border-b-2 border-slate-200 w-full pb-1">{selectedCert.issueDate}</p>
                  <p className="text-slate-400 uppercase font-black text-[7px] md:text-[9px] tracking-widest">Awarded Date</p>
                </div>
              </div>

              {/* Watermark/Sparkle */}
              <div className="absolute -bottom-10 -left-10 opacity-[0.03] text-amber-500 pointer-events-none">
                 <Trophy size={250} strokeWidth={1} />
              </div>
            </div>
          ) : (
            <div className="flex-1 bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 text-center shadow-xl flex flex-col items-center justify-center border-4 border-dashed border-slate-100">
               <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-50 rounded-[2.5rem] flex items-center justify-center text-slate-200 mb-8">
                  <Lock size={48} md:size={64} />
               </div>
               <h3 className="text-2xl md:text-4xl font-black text-[#292667] uppercase mb-4">AWARD LOCKED</h3>
               <p className="text-slate-400 font-bold text-sm md:text-lg max-w-xs mx-auto leading-relaxed mb-8">
                  Keep adventuring! Complete the <span className="text-[#292667] underline">{selectedCert.courseName}</span> course to unlock this trophy.
               </p>
               <div className="w-full max-w-xs space-y-3">
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Quest Progress</span>
                     <span className="text-sm font-black text-[#292667]">{selectedCert.progress}%</span>
                  </div>
                  <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden p-1 border-2 border-white shadow-inner">
                     <div className="h-full bg-blue-500 rounded-full transition-all duration-1000" style={{ width: `${selectedCert.progress}%` }}></div>
                  </div>
               </div>
            </div>
          )}

          {/* Action Buttons for Certificate */}
          {selectedCert.isUnlocked && (
            <div className="flex gap-3 md:gap-4 flex-shrink-0">
               <button className="flex-1 py-4 md:py-6 bg-[#292667] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-sm md:text-lg uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl active:scale-95 border-b-6 md:border-b-8 border-black/20 hover:bg-[#1a1745] transition-all">
                  <Download size={24} strokeWidth={3} /> Download PDF
               </button>
               <button className="flex-1 py-4 md:py-6 bg-[#00a651] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-sm md:text-lg uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl active:scale-95 border-b-6 md:border-b-8 border-black/20 hover:bg-[#00703c] transition-all">
                  <Printer size={24} strokeWidth={3} /> Print Award
               </button>
            </div>
          )}
        </div>

        {/* Sidebar Selector */}
        <div className="lg:w-96 flex flex-col gap-4 md:gap-6 overflow-hidden">
           {/* Earned Section */}
           <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 shadow-xl border-2 border-slate-100 flex-1 flex flex-col overflow-hidden">
              <h3 className="text-lg md:text-xl font-black text-[#292667] uppercase tracking-tight mb-6 flex items-center gap-3 shrink-0">
                 <Sparkles size={20} className="text-[#fbee21]" /> My Trophies
              </h3>
              
              <div className="flex-1 overflow-y-auto scrollbar-hide space-y-3 pr-1">
                 <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-2 border-b border-slate-50 pb-2">Earned Mastery ({earnedCerts.length})</p>
                 {earnedCerts.map(cert => (
                    <button 
                      key={cert.id}
                      onClick={() => setSelectedCertId(cert.id)}
                      className={`w-full p-4 rounded-[1.5rem] md:rounded-[2rem] border-2 flex items-center gap-4 transition-all group ${
                        selectedCertId === cert.id 
                          ? 'border-[#a855f7] bg-purple-50 shadow-md ring-4 ring-purple-100/50' 
                          : 'border-slate-50 bg-slate-50 hover:bg-white hover:border-slate-200'
                      }`}
                    >
                       <div className={`w-12 h-12 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-12 ${
                         selectedCertId === cert.id ? 'bg-[#a855f7] text-white' : 'bg-white text-slate-300 border border-slate-100 shadow-sm'
                       }`}>
                          <Award size={24} strokeWidth={3} />
                       </div>
                       <div className="text-left min-w-0">
                          <p className={`text-[11px] md:text-[13px] font-black uppercase tracking-tight truncate ${selectedCertId === cert.id ? 'text-[#292667]' : 'text-slate-400'}`}>{cert.courseName}</p>
                          <p className="text-[8px] md:text-[9px] font-bold text-slate-400 mt-0.5">UNLOCKED: {cert.issueDate}</p>
                       </div>
                    </button>
                 ))}

                 {inProgressCerts.length > 0 && (
                   <>
                    <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mt-6 mb-2 border-b border-slate-50 pb-2">Future Goals ({inProgressCerts.length})</p>
                    {inProgressCerts.map(cert => (
                       <button 
                         key={cert.id}
                         onClick={() => setSelectedCertId(cert.id)}
                         className={`w-full p-4 rounded-[1.5rem] md:rounded-[2rem] border-2 flex items-center gap-4 transition-all group ${
                           selectedCertId === cert.id 
                             ? 'border-slate-400 bg-slate-100' 
                             : 'border-slate-50 bg-slate-50 opacity-60 grayscale hover:opacity-100 hover:grayscale-0'
                         }`}
                       >
                          <div className={`w-12 h-12 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 bg-white text-slate-200 border border-slate-100`}>
                             <Lock size={20} strokeWidth={3} />
                          </div>
                          <div className="text-left min-w-0 flex-1">
                             <p className="text-[11px] font-black uppercase tracking-tight text-slate-400 truncate">{cert.courseName}</p>
                             <div className="flex items-center gap-2 mt-1">
                                <div className="flex-1 h-1 bg-slate-200 rounded-full overflow-hidden">
                                   <div className="h-full bg-slate-400" style={{ width: `${cert.progress}%` }}></div>
                                </div>
                                <span className="text-[8px] font-black text-slate-400">{cert.progress}%</span>
                             </div>
                          </div>
                       </button>
                    ))}
                   </>
                 )}
              </div>
           </div>
           
           {/* Achievement Stats */}
           <div className="bg-[#292667] rounded-[2.5rem] p-6 md:p-8 text-white relative overflow-hidden shrink-0 border-b-8 border-black/20">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Sparkles size={64} />
              </div>
              <p className="text-[10px] font-black uppercase text-[#fbee21] tracking-widest mb-4">Current Rank</p>
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-14 h-14 bg-[#fbee21] rounded-2xl flex items-center justify-center text-[#292667] rotate-3 shadow-xl">
                    <Star size={32} fill="currentColor" />
                 </div>
                 <div>
                    <h4 className="text-xl font-black uppercase tracking-tight leading-none">Elite Explorer</h4>
                    <p className="text-[9px] font-black uppercase text-white/40 tracking-widest mt-1">Level 12 Achievement</p>
                 </div>
              </div>
              <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 group">
                 View Global Rankings <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
