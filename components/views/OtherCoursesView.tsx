
import React, { useState } from 'react';
import { Layers, Sparkles, Star, ArrowRight, ShieldCheck, Lock, X, Zap, Trophy, Rocket, Mail, AlertCircle } from 'lucide-react';

interface UnlockModalProps {
  course: any;
  onClose: () => void;
}

const UnlockCourseModal: React.FC<UnlockModalProps> = ({ course, onClose }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#292667]/70 backdrop-blur-md animate-in fade-in duration-300">
    <div className="bg-white rounded-[4rem] p-10 max-w-xl w-full shadow-2xl border-t-[16px] border-[#ec2027] relative animate-in zoom-in-95 duration-300">
      <button onClick={onClose} className="absolute top-8 right-8 p-3 text-slate-300 hover:text-[#ec2027] transition-colors bg-slate-50 rounded-2xl">
        <X size={24} strokeWidth={4} />
      </button>

      <div className="text-center mb-10">
         <div className="w-24 h-24 bg-[#fbee21] rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 shadow-2xl rotate-6 border-4 border-white">
            <Mail size={48} className="text-[#292667]" strokeWidth={3} />
         </div>
         <h3 className="text-3xl font-black text-[#292667] uppercase tracking-tighter mb-4">Master Course Locked</h3>
         <p className="text-slate-500 font-bold text-base leading-relaxed max-w-xs mx-auto">
            Ready to start <span className="text-[#ec2027] font-black underline decoration-2">{course.name}</span>? Please ask your parents or teacher to contact the <span className="text-[#292667] font-black">Main Center</span> for access!
         </p>
      </div>

      <div className="flex flex-col gap-3">
         <a 
           href="mailto:admin@ubookstore.com"
           className="w-full py-6 bg-[#292667] text-[#fbee21] rounded-[2rem] font-black text-xl uppercase tracking-widest shadow-2xl hover:bg-[#ec2027] hover:text-white transition-all border-b-8 border-black/20 flex items-center justify-center gap-4"
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

      {/* Universal Compact Hero Header */}
      <div className="w-full bg-[#292667] rounded-[1.8rem] md:rounded-[2.2rem] p-4 md:p-6 text-white shadow-lg border-b-[6px] md:border-b-[10px] border-[#f43f5e] flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="flex items-center gap-3 md:gap-6 relative z-10 w-full md:w-auto">
           <div className="p-3 md:p-4 bg-[#f43f5e] rounded-xl md:rounded-[1.5rem] text-white shadow-xl rotate-3">
             <Layers size={24} md:size={36} strokeWidth={3.5} />
           </div>
           <div>
             <h2 className="text-xl md:text-3xl font-black leading-none tracking-tight uppercase">Discover <span className="text-[#fbee21]">Courses</span></h2>
             <p className="text-[9px] md:text-[11px] font-black text-[#fbee21] uppercase tracking-[0.2em] mt-1 md:mt-2">Expand Your Universe</p>
           </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className={`bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 border-4 transition-all group shadow-lg flex flex-col relative overflow-hidden ${
                course.isPurchased 
                  ? 'border-slate-50 hover:border-[#f43f5e] hover:shadow-2xl' 
                  : 'border-slate-100 grayscale-[0.5] opacity-90'
              }`}
            >
              <div className="flex justify-between items-start mb-6 relative z-10">
                 <div 
                   className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12"
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
                    ? 'bg-[#292667] text-white hover:bg-slate-800' 
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
