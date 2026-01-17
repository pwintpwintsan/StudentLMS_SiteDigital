
import React, { useState } from 'react';
import { Award, Trophy, Lock, Download, Printer, X } from 'lucide-react';
import { Certificate } from '../../types';

export const CertificatesView: React.FC = () => {
  const certificates: Certificate[] = [
    { id: 'UB-DKS-001', courseName: 'Starter V2', issueDate: '2024-03-24', teacherName: 'Teacher Jane', score: 98, isUnlocked: true, progress: 100 },
    { id: 'UB-ROB-003', courseName: 'Robotics', issueDate: '-', teacherName: 'Teacher Jane', score: 0, isUnlocked: false, progress: 65 },
  ];

  const [selectedId, setSelectedId] = useState(certificates[0].id);
  const selected = certificates.find(c => c.id === selectedId) || certificates[0];

  return (
    <div className="h-full flex flex-col gap-3 overflow-hidden">
      <div className="flex-1 flex flex-col md:flex-row gap-3 overflow-hidden">
        {/* Preview Area */}
        <div className="flex-1 bg-white rounded-xl p-4 border border-slate-100 flex flex-col items-center justify-center relative shadow-sm overflow-hidden">
          {selected.isUnlocked ? (
            <div className="w-full aspect-[1.414/1] bg-amber-50 rounded-lg border-4 border-amber-200 p-6 text-center flex flex-col items-center justify-center">
              <Trophy size={48} className="text-amber-500 mb-3" />
              <h3 className="text-lg font-black text-[#292667] uppercase leading-tight">Certificate of Achievement</h3>
              <div className="h-0.5 w-12 bg-amber-400 my-2"></div>
              <p className="text-[10px] font-black text-slate-500 uppercase">Lucky Learner</p>
              <p className="text-[8px] font-bold text-slate-400 mt-2 uppercase">{selected.courseName}</p>
            </div>
          ) : (
            <div className="text-center opacity-40">
              <Lock size={48} className="text-slate-300 mx-auto mb-2" />
              <p className="text-[10px] font-black uppercase tracking-widest">Mission Ongoing</p>
              <p className="text-[8px] font-bold uppercase">{selected.progress}% Progress</p>
            </div>
          )}
          
          <div className="flex gap-2 w-full mt-4">
            <button className="flex-1 py-2 bg-[#292667] text-white rounded-lg text-[9px] font-black uppercase tracking-widest"><Download size={14} className="inline mr-1" /> Get PDF</button>
            <button className="flex-1 py-2 bg-slate-100 text-[#292667] rounded-lg text-[9px] font-black uppercase tracking-widest"><Printer size={14} className="inline mr-1" /> Print</button>
          </div>
        </div>

        {/* List Area */}
        <div className="w-full md:w-64 space-y-2 overflow-y-auto scrollbar-hide">
          {certificates.map(c => (
            <button 
              key={c.id}
              onClick={() => setSelectedId(c.id)}
              className={`w-full p-3 rounded-xl border text-left transition-all ${selectedId === c.id ? 'border-[#a855f7] bg-purple-50' : 'bg-white border-slate-100'}`}
            >
              <div className="flex items-center gap-2">
                {c.isUnlocked ? <Award size={16} className="text-[#a855f7]" /> : <Lock size={16} className="text-slate-200" />}
                <p className="text-[10px] font-black text-[#292667] uppercase truncate">{c.courseName}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
