
import React, { useState } from 'react';
import { Layers, Sparkles, Star, ArrowRight, ShieldCheck, Lock, X, Zap, Trophy, Rocket, Mail, AlertCircle } from 'lucide-react';

interface UnlockModalProps {
  course: any;
  onClose: () => void;
}

const UnlockCourseModal: React.FC<UnlockModalProps> = ({ course, onClose }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#292667]/70 backdrop-blur-md animate-in fade-in duration-300">
    <div className="bg-white rounded-[4rem] p-10 max-w-xl w-full shadow-2xl border-t-[16px] border-[#8b5cf6] relative animate-in zoom-in-95 duration-300 border-2 border-[#8b5cf6]">
      <button onClick={onClose} className="absolute top-8 right-8 p-3 text-slate-300 hover:text-[#8b5cf6] transition-colors bg-slate-50 rounded-2xl">
        <X size={24} strokeWidth={4} />
      </button>

      <div className="text-center mb-10">
         <div className="w-24 h-24 bg-[#fbee21] rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 shadow-2xl rotate-6 border-4 border-white">
            <Mail size={48} className="text-[#292667]" strokeWidth={3} />
         </div>
         <h3 className="text-3xl font-black text-[#292667] uppercase tracking-tighter mb-4">Master Course Locked</h3>
         <p className="text-slate-500 font-bold text-base leading-relaxed max-w-xs mx-auto">
            Ready to start <span className="text-[#8b5cf6] font-black underline decoration-2">{course.name}</span>? Please ask your parents or teacher to contact the <span className="text-[#292667] font-black">Main Center</span> for access!
         </p>
      </div>

      <div className="flex flex-col gap-3">
         <a 
           href="mailto:admin@ubookstore.com"
           className="w-full py-6 bg-[#292667] text-[#fbee21] rounded-[2rem] font-black text-xl uppercase tracking-widest shadow-2xl hover:bg-[#8b5cf6] hover:text-white transition-all border-b-8 border-black/20 flex items-center justify-center gap-4"
         >
            Message Admin
         </a>
         <button onClick={onClose} className="w-full py-4 text-slate-300 font-black uppercase text-xs tracking-widest hover:text-[#292667] transition-all">
            Maybe Later
         </button>
      </div>
    </div>
  </div>
);

interface OtherCoursesViewProps {
  onEnterCourse: (name: string) => void;
}

export const OtherCoursesView: React.FC<OtherCoursesViewProps> = ({ onEnterCourse }) => {
  const [selectedUnlock, setSelectedUnlock] = useState<any>(null);

  const courses = [
    { id: 1, name: 'Robotics Mastery', desc: 'Build your first autonomous robot with real hardware simulation.', level: 'Level 2', status: 'Unlocked', isPurchased: true, color: '#ec2027' },
    { id: 2, name: 'AI For Heroes', desc: 'Learn how smart machines think and create their own art.', level: 'Level 3', status: 'Premium', isPurchased: false, color: '#3b82f6' },
    { id: 3, name: 'Web Creators', desc: 'Design your own internet space with HTML and CSS blocks.', level: 'Level 1', status: 'Locked', isPurchased: false, color: '#00a651' },
    { id: 4, name: 'Game Architecture', desc: 'Advanced patterns for professional game development.', level: 'Level 3', status: 'Locked', isPurchased: false, color: '#a855f7' },
  ];

  return (
    <div className="h-full flex flex-col gap-3 md:gap-5 overflow-hidden relative">
      {selectedUnlock && <UnlockCourseModal course={selectedUnlock} onClose={() => setSelectedUnlock(null)} />}

      <div className="flex-1 overflow-y-auto scrollbar-hide pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className={`bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 border-4 transition-all group shadow-lg flex flex-col relative overflow-hidden ${
                course.isPurchased 
                  ? 'border-[#8b5cf6] hover:shadow-2xl' 
                  : 'border-slate-100 grayscale-[0.5] opacity-90'
              }`}
            >
              <div className="flex justify-between items-start mb-6 relative z-10">
                 <div 
                   className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12 border-2 border-[#8b5cf6]/20"
                   style={{ backgroundColor: `${course.color}15`, color: course.color }}
                 >
                    {course.isPurchased ? <Sparkles size={28} /> : <Lock size={28} className="text-[#ec2027]" />}
                 </div>
              </div>
              
              <div className="flex-1 mb-6 relative z-10">
                 <h3 className="text-lg md:text-xl font-black text-[#292667] uppercase tracking-tighter mb-2 leading-tight">{course.name}</h3>
                 <p className="text-slate-500 font-bold text-[10px] md:text-xs leading-relaxed">{course.desc}</p>
              </div>
              
              <button 
                onClick={() => course.isPurchased ? onEnterCourse(course.name) : setSelectedUnlock(course)}
                className={`w-full py-3.5 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 border-b-4 border-black/20 group relative z-10 ${
                  course.isPurchased 
                    ? 'bg-[#8b5cf6] text-white hover:bg-[#7c3aed]' 
                    : 'bg-[#f43f5e] text-white hover:bg-[#ec2027]'
                }`}
              >
                {course.isPurchased ? 'Enter Course' : 'Request Access'} 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
