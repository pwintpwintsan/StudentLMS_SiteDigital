
import React, { useState } from 'react';
import { 
  FileText, PlayCircle, Download, Search, 
  Sparkles, BookOpen, Bookmark, Video, 
  FileCheck, Compass 
} from 'lucide-react';

interface TeachingResourcesViewProps {
  onEnterCourse: (name: string) => void;
}

export const TeachingResourcesView: React.FC<TeachingResourcesViewProps> = ({ onEnterCourse }) => {
  const resources = [
    { id: 1, title: 'My Coding Guide', type: 'PDF', series: 'Starter V2', color: '#3b82f6' },
    { id: 2, title: 'Intro Video', type: 'Video', series: 'Robotics', color: '#ec2027' },
  ];

  return (
    <div className="h-full flex flex-col gap-3 overflow-hidden">
      <div className="bg-white px-3 py-2 rounded-xl shadow-sm border-2 border-[#8b5cf6] flex items-center gap-3">
        <Search size={16} className="text-[#8b5cf6]" />
        <input type="text" placeholder="Search guides..." className="bg-transparent text-[10px] font-black text-[#292667] outline-none w-full placeholder:text-slate-200 uppercase" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 overflow-y-auto scrollbar-hide pb-4">
        {resources.map((res) => (
          <div key={res.id} className="bg-white rounded-xl p-4 border-2 border-[#8b5cf6] shadow-sm flex flex-col hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center mb-3">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${res.color}15`, color: res.color }}>
                 {res.type === 'Video' ? <Video size={16} /> : <FileText size={16} />}
              </div>
              <span className="text-[7px] font-black text-slate-300 uppercase">{res.type}</span>
            </div>
            <h4 className="text-[10px] font-black text-[#292667] uppercase truncate mb-4">{res.title}</h4>
            <button className="w-full py-2 bg-[#292667] text-white rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-[#8b5cf6] transition-colors"><Download size={12} className="inline mr-1" /> Get</button>
          </div>
        ))}
      </div>
    </div>
  );
};
