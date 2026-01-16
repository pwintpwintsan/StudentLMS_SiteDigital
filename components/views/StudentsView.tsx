
import React, { useState } from 'react';
import { MOCK_STUDENTS, MOCK_CLASSES } from '../../constants';
import { Student } from '../../types';
import { Search, Filter, Edit, MoreVertical, Trash2, LayoutGrid, Users, Sparkles } from 'lucide-react';

interface StudentsViewProps {
  onStudentClick: (id: string) => void;
}

export const StudentsView: React.FC<StudentsViewProps> = ({ onStudentClick }) => {
  const [students] = useState<Student[]>(MOCK_STUDENTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');

  const filteredStudents = students.filter(s => {
    const matchesSearch = `${s.firstName} ${s.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         s.username.includes(searchTerm);
    return matchesSearch;
  });

  return (
    <div className="h-full flex flex-col gap-3 md:gap-5 overflow-hidden">
      {/* Universal Compact Hero Header - Standardized */}
      <div className="w-full bg-[#292667] rounded-[1.8rem] md:rounded-[2.2rem] p-4 md:p-6 text-white shadow-lg border-b-[6px] md:border-b-[10px] border-[#00a651] flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="flex items-center gap-3 md:gap-6 relative z-10 w-full md:w-auto">
           <div className="p-3 md:p-4 bg-[#00a651] rounded-xl md:rounded-[1.5rem] text-white shadow-xl rotate-3">
             <Users size={24} md:size={36} strokeWidth={3.5} />
           </div>
           <div>
             <h2 className="text-xl md:text-3xl font-black leading-none tracking-tight uppercase">Learner <span className="text-[#fbee21]">Directory</span></h2>
             <p className="text-[9px] md:text-[11px] font-black text-[#fbee21] uppercase tracking-[0.2em] mt-1 md:mt-2">Community Database</p>
           </div>
        </div>
      </div>

      {/* Row 2: Search & Filter Controls - Compact */}
      <div className="w-full bg-white p-3 md:p-4 rounded-[1.5rem] md:rounded-[2rem] shadow-md border-2 border-slate-100 flex flex-col sm:flex-row items-center gap-3 md:gap-4 flex-shrink-0">
        <div className="flex items-center gap-3 bg-slate-50 px-4 md:px-6 py-2.5 md:py-3.5 rounded-xl md:rounded-[1.2rem] border-2 border-slate-100 flex-1 w-full group focus-within:border-[#ec2027] transition-all">
          <Search size={18} md:size={20} className="text-slate-400" strokeWidth={3} />
          <input 
            type="text" 
            placeholder="Search name or ID..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent text-xs md:text-base font-black text-[#292667] outline-none w-full placeholder:text-slate-300 uppercase tracking-tight"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="flex items-center gap-2 bg-slate-50 px-4 md:px-6 py-2.5 md:py-3.5 rounded-xl md:rounded-[1.2rem] border-2 border-slate-100 flex-1 sm:flex-none sm:min-w-[180px]">
            <LayoutGrid size={16} md:size={18} className="text-[#ec2027]" strokeWidth={3} />
            <select 
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="bg-transparent text-[10px] md:text-xs font-black text-[#292667] outline-none w-full cursor-pointer uppercase tracking-widest"
            >
              <option value="all">All Classes</option>
              {MOCK_CLASSES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <button className="p-3 md:p-4 bg-[#292667] text-white rounded-xl md:rounded-[1.2rem] shadow-md hover:bg-[#ec2027] transition-all active:scale-95 border-b-4 border-black/20">
             <Filter size={18} md:size={20} strokeWidth={4} />
          </button>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-[1.8rem] md:rounded-[2.5rem] border-2 border-slate-100 overflow-hidden shadow-lg flex flex-col">
        <div className="flex-1 overflow-x-auto scrollbar-hide">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead className="sticky top-0 bg-[#292667] text-white uppercase text-[9px] md:text-[10px] font-black tracking-[0.2em] z-20 shadow-md">
              <tr>
                <th className="px-6 md:px-10 py-4 md:py-6">Identifier</th>
                <th className="px-6 md:px-10 py-4 md:py-6">Learner Name</th>
                <th className="px-6 md:px-10 py-4 md:py-6">Level</th>
                <th className="px-6 md:px-10 py-4 md:py-6 text-center">Mastery</th>
                <th className="px-6 md:px-10 py-4 md:py-6">Status</th>
                <th className="px-6 md:px-10 py-4 md:py-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-slate-50">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 md:px-10 py-3 md:py-4 font-mono text-[11px] md:text-sm font-black text-[#ec2027]">
                    <button onClick={() => onStudentClick(student.id)} className="hover:underline">
                      {student.username}
                    </button>
                  </td>
                  <td className="px-6 md:px-10 py-3 md:py-4">
                    <button onClick={() => onStudentClick(student.id)} className="flex items-center gap-3 text-left transition-transform active:scale-95">
                      <img src={`https://picsum.photos/seed/${student.id}/64`} className="w-8 h-8 md:w-12 md:h-12 rounded-xl border-2 border-white shadow-sm object-cover" alt="" />
                      <span className="font-black text-[#292667] text-xs md:text-lg uppercase tracking-tight">{student.firstName} {student.lastName}</span>
                    </button>
                  </td>
                  <td className="px-6 md:px-10 py-3 md:py-4 text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">{student.level}</td>
                  <td className="px-6 md:px-10 py-3 md:py-4">
                    <div className="flex justify-center">
                        <div className={`w-12 h-7 md:w-16 md:h-9 rounded-lg flex items-center justify-center text-[10px] md:text-sm font-black ${
                        student.finalGrade >= 90 ? 'bg-green-50 text-[#00a651] border-2 border-[#00a651]/20' : 'bg-red-50 text-[#ec2027] border-2 border-[#ec2027]/20'
                        } shadow-sm`}>
                        {student.finalGrade}%
                        </div>
                    </div>
                  </td>
                  <td className="px-6 md:px-10 py-3 md:py-4">
                    <span className={`px-2 md:px-3 py-1 rounded-md text-[8px] md:text-[9px] font-black tracking-widest border ${
                      student.status === 'active' ? 'bg-green-50 text-[#00a651] border-[#00a651]' : 'bg-slate-100 text-slate-400 border-slate-200'
                    }`}>
                      {student.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 md:px-10 py-3 md:py-4 text-right">
                    <div className="flex items-center justify-end gap-1.5 md:gap-2">
                      <button className="p-2 md:p-2.5 bg-slate-50 text-slate-300 hover:bg-[#292667] hover:text-white rounded-lg transition-all shadow-sm active:scale-90">
                        <Edit size={14} md:size={16} strokeWidth={4} />
                      </button>
                      <button className="p-2 md:p-2.5 bg-slate-50 text-slate-300 hover:bg-[#ec2027] hover:text-white rounded-lg transition-all shadow-sm active:scale-90">
                        <Trash2 size={14} md:size={16} strokeWidth={4} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
