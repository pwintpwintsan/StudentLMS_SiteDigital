
import React, { useState } from 'react';
import { Award, Download, Printer, Sparkles, Star, Trophy, Edit2, Check, Lock, BookOpen, ChevronRight, Save, X } from 'lucide-react';
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
  const learnerName = "Lucky Learner";
  
  const [certificates, setCertificates] = useState<Certificate[]>([
    { id: 'UB-DKS-001', courseName: 'Digital Kids Starter V2', issueDate: '2024-03-24', teacherName: 'Teacher Jane', score: 98, isUnlocked: true, progress: 100 },
    { id: 'UB-LOG-002', courseName: 'Logic & Binary Master', issueDate: '2024-02-15', teacherName: 'Teacher Jane', score: 95, isUnlocked: true, progress: 100 },
    { id: 'UB-ROB-003', courseName: 'Robotics Mastery', issueDate: '-', teacherName: 'Teacher Jane', score: 0, isUnlocked: false, progress: 65 },
    { id: 'UB-AIH-004', courseName: 'AI For Heroes', issueDate: '-', teacherName: 'Teacher Jane', score: 0, isUnlocked: false, progress: 20 },
  ]);

  const [selectedCertId, setSelectedCertId] = useState<string>(certificates[0].id);
  const selectedCertIndex = certificates.findIndex(c => c.id === selectedCertId);
  const selectedCert = certificates[selectedCertIndex] || certificates[0];

  const handleUpdateCertField = (field: 'id' | 'issueDate', value: string) => {
    const updated = [...certificates];
    updated[selectedCertIndex] = { ...updated[selectedCertIndex], [field]: value };
    setCertificates(updated);
  };

  const earnedCerts = certificates.filter(c => c.isUnlocked);
  const inProgressCerts = certificates.filter(c => !c.isUnlocked);

  return (
    <div className="h-full flex flex-col gap-3 md:gap-5 overflow-hidden">
      {/* Universal Compact Hero Header - Standardized */}
      <div className="w-full bg-[#292667] rounded-[1.8rem] md:rounded-[2.2rem] p-4 md:p-6 text-white shadow-lg border-b-[6px] md:border-b-[10px] border-[#a855f7] flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="flex items-center gap-3 md:gap-6 relative z-10 w-full md:w-auto">
           <div className="p-3 md:p-4 bg-[#a855f7] rounded-xl md:rounded-[1.5rem] text-white shadow-xl rotate-3">
             <Trophy size={24} md:size={36} strokeWidth={3.5} />
           </div>
           <div>
             <h2 className="text-xl md:text-3xl font-black leading-none tracking-tight uppercase">Trophy <span className="text-[#fbee21]">Room</span></h2>
             <p className="text-[9px] md:text-[11px] font-black text-[#fbee21] uppercase tracking-[0.2em] mt-1 md:mt-2">Celebrate Achievements</p>
           </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-4 md:gap-6 overflow-hidden pb-4">
        {/* Main Certificate Display - LANDSCAPE SCALING IMPROVED */}
        <div className="flex-1 flex flex-col gap-4 overflow-hidden min-h-0">
          <div className="flex-1 bg-slate-100 rounded-[2rem] md:rounded-[2.5rem] p-4 md:p-8 flex items-center justify-center overflow-hidden">
            {selectedCert.isUnlocked ? (
              <div 
                className="w-full max-h-full aspect-[1.414/1] bg-white rounded-xl md:rounded-3xl border-[10px] md:border-[20px] border-double border-amber-200 p-6 md:p-10 text-center relative shadow-2xl flex flex-col items-center justify-between overflow-hidden animate-in zoom-in-95 duration-500 shrink-0"
                style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/pinstripe-light.png')" }}
              >
                {/* ID Field */}
                <div className="absolute top-4 right-6 flex flex-col items-end gap-1 group z-20">
                    <div className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
                      <span className="text-[7px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest">ID</span>
                      <input 
                        type="text" 
                        value={selectedCert.id}
                        onChange={(e) => handleUpdateCertField('id', e.target.value)}
                        className="text-[8px] md:text-[11px] font-mono font-black text-[#292667] bg-white/80 rounded-md border border-slate-100 focus:border-amber-400 outline-none text-right w-20 md:w-28 px-1.5 py-0.5"
                      />
                    </div>
                </div>

                {/* Logo & Top Label */}
                <div className="flex flex-col items-center gap-2">
                  <UBookLogo className="w-16 h-16 md:w-24 md:h-24 drop-shadow-md" />
                  <p className="text-amber-600 font-black italic text-[8px] md:text-[10px] uppercase tracking-[0.3em] mt-2">Award of Digital Excellence</p>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center py-2 md:py-4">
                  <h1 className="text-lg md:text-2xl font-serif text-slate-800 font-bold italic">Certificate of Mastery</h1>
                  
                  <div className="my-2 md:my-4 flex flex-col items-center">
                    <p className="text-slate-400 font-bold italic text-[8px] md:text-[11px] uppercase tracking-[0.2em] mb-1">Presented to</p>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#292667] uppercase tracking-tighter leading-none">{learnerName}</h2>
                    <div className="h-0.5 md:h-1 w-24 md:w-48 bg-[#fbee21] mt-2 md:mt-3 rounded-full"></div>
                  </div>
                  
                  <p className="text-[9px] md:text-sm lg:text-base text-slate-500 max-w-lg mx-auto leading-relaxed font-bold uppercase tracking-tight">
                    for demonstrating exceptional skills in <br/> 
                    <span className="text-[#ec2027] text-xs md:text-xl lg:text-2xl block mt-1">{selectedCert.courseName}</span>
                  </p>
                </div>

                {/* Signatures Row */}
                <div className="grid grid-cols-3 w-full max-w-2xl mt-4 border-t border-slate-100 pt-4 md:pt-6">
                  <div className="flex flex-col items-center">
                    <p className="font-black text-[10px] md:text-lg text-[#292667] uppercase italic leading-none">{selectedCert.teacherName}</p>
                    <div className="w-16 md:w-24 h-px bg-slate-200 my-1"></div>
                    <p className="text-slate-300 uppercase font-black text-[6px] md:text-[9px] tracking-widest">Master Instructor</p>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-amber-400/10 rounded-full border-4 border-amber-400/20 flex items-center justify-center rotate-12">
                       <Award size={24} md:size={40} className="text-amber-500" />
                    </div>
                  </div>

                  <div className="flex flex-col items-center group">
                    <div className="flex items-center gap-1">
                      <input 
                        type="text" 
                        value={selectedCert.issueDate}
                        onChange={(e) => handleUpdateCertField('issueDate', e.target.value)}
                        className="text-[10px] md:text-lg font-mono font-black text-[#292667] text-center bg-transparent border-b border-transparent hover:border-slate-200 focus:border-amber-400 outline-none w-20 md:w-32"
                      />
                    </div>
                    <div className="w-16 md:w-24 h-px bg-slate-200 my-1"></div>
                    <p className="text-slate-300 uppercase font-black text-[6px] md:text-[9px] tracking-widest">Date Awarded</p>
                  </div>
                </div>

                <div className="absolute -bottom-10 -right-10 opacity-[0.02] text-amber-500 pointer-events-none">
                   <Trophy size={200} md:size={350} strokeWidth={1} />
                </div>
              </div>
            ) : (
              <div className="flex-1 bg-white rounded-[2rem] p-8 text-center shadow-xl flex flex-col items-center justify-center border-4 border-dashed border-slate-100 w-full max-w-xl">
                 <div className="w-12 h-12 md:w-20 md:h-20 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-200 mb-4 md:mb-6">
                    <Lock size={24} md:size={40} />
                 </div>
                 <h3 className="text-lg md:text-2xl font-black text-[#292667] uppercase mb-2">Quest Incomplete</h3>
                 <p className="text-slate-400 font-bold text-[10px] md:text-sm max-w-xs mx-auto mb-6">
                    Earn this trophy by completing the <span className="text-[#292667]">{selectedCert.courseName}</span> adventure!
                 </p>
                 <div className="w-full max-w-[200px] space-y-1.5">
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-white">
                       <div className="h-full bg-blue-500 rounded-full transition-all duration-1000" style={{ width: `${selectedCert.progress}%` }}></div>
                    </div>
                    <span className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest">{selectedCert.progress}% Progress</span>
                 </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          {selectedCert.isUnlocked && (
            <div className="flex gap-2 md:gap-4 flex-shrink-0 px-2 md:px-0">
               <button className="flex-1 py-3 md:py-4 bg-[#292667] text-white rounded-xl md:rounded-[1.2rem] font-black text-[10px] md:text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-md border-b-4 border-black/20 hover:brightness-110 active:scale-95 transition-all">
                  <Download size={16} md:size={20} strokeWidth={3} /> Download
               </button>
               <button className="flex-1 py-3 md:py-4 bg-[#00a651] text-white rounded-xl md:rounded-[1.2rem] font-black text-[10px] md:text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-md border-b-4 border-black/20 hover:brightness-110 active:scale-95 transition-all">
                  <Printer size={16} md:size={20} strokeWidth={3} /> Print
               </button>
            </div>
          )}
        </div>

        {/* Sidebar Selector - Unified Styling */}
        <div className="lg:w-72 flex flex-col gap-4 overflow-hidden">
           <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-5 shadow-xl border-2 border-slate-50 flex-1 flex flex-col overflow-hidden">
              <h3 className="text-[10px] md:text-xs font-black text-[#292667] uppercase tracking-widest mb-4 flex items-center gap-2 shrink-0">
                 <Sparkles size={14} className="text-[#fbee21]" /> Achievements
              </h3>
              
              <div className="flex-1 overflow-y-auto scrollbar-hide space-y-2">
                 {earnedCerts.map(cert => (
                    <button 
                      key={cert.id}
                      onClick={() => setSelectedCertId(cert.id)}
                      className={`w-full p-2.5 md:p-3.5 rounded-xl md:rounded-[1.2rem] border-2 flex items-center gap-3 transition-all group ${
                        selectedCertId === cert.id 
                          ? 'border-[#a855f7] bg-purple-50 shadow-md ring-2 ring-purple-100/50' 
                          : 'border-slate-50 bg-slate-50 hover:bg-white hover:border-slate-200'
                      }`}
                    >
                       <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-6 ${
                         selectedCertId === cert.id ? 'bg-[#a855f7] text-white' : 'bg-white text-slate-300 border border-slate-100'
                       }`}>
                          <Award size={18} md:size={22} strokeWidth={3.5} />
                       </div>
                       <div className="text-left min-w-0">
                          <p className={`text-[9px] md:text-[11px] font-black uppercase tracking-tight truncate ${selectedCertId === cert.id ? 'text-[#292667]' : 'text-slate-400'}`}>{cert.courseName}</p>
                          <p className="text-[7px] font-bold text-slate-300 mt-0.5">{cert.issueDate}</p>
                       </div>
                    </button>
                 ))}

                 {inProgressCerts.map(cert => (
                    <button 
                      key={cert.id}
                      onClick={() => setSelectedCertId(cert.id)}
                      className={`w-full p-2.5 md:p-3.5 rounded-xl md:rounded-[1.2rem] border-2 border-slate-50 bg-slate-50 flex items-center gap-3 opacity-60 hover:opacity-100 transition-all ${
                        selectedCertId === cert.id ? 'border-slate-400 bg-slate-100' : ''
                      }`}
                    >
                       <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white flex items-center justify-center flex-shrink-0 text-slate-200">
                          <Lock size={14} md:size={18} />
                       </div>
                       <div className="text-left min-w-0 flex-1">
                          <p className="text-[9px] md:text-[11px] font-black uppercase tracking-tight text-slate-400 truncate">{cert.courseName}</p>
                          <div className="w-full h-1 bg-slate-200 rounded-full mt-1.5">
                             <div className="h-full bg-slate-400 rounded-full" style={{ width: `${cert.progress}%` }}></div>
                          </div>
                       </div>
                    </button>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
