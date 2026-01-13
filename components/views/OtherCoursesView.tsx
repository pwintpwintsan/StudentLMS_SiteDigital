
import React, { useState } from 'react';
import { Layers, Sparkles, Star, ArrowRight, ShieldCheck, Lock, X, Zap, Trophy, Rocket } from 'lucide-react';

interface UnlockModalProps {
  course: any;
  onClose: () => void;
}

const UnlockCourseModal: React.FC<UnlockModalProps> = ({ course, onClose }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#292667]/70 backdrop-blur-md animate-in fade-in duration-300">
    <div className="bg-white rounded-[4rem] p-10 max-w-xl w-full shadow-2xl border-t-[16px] border-[#f43f5e] relative animate-in zoom-in-95 duration-300">
      <button onClick={onClose} className="absolute top-8 right-8 p-3 text-slate-300 hover:text-[#f43f5e] transition-colors bg-slate-50 rounded-2xl">
        <X size={24} strokeWidth={4} />
      </button>

      <div className="text-center mb-10">
         <div className="w-24 h-24 bg-[#f43f5e] rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 shadow-2xl rotate-6">
            <Rocket size={48} className="text-white" strokeWidth={3} />
         </div>
         <h3 className="text-3xl font-black text-[#292667] uppercase tracking-tighter mb-2">Unlock {course.name}</h3>
         <p className="text-slate-400 font-black uppercase text-[10px] tracking-[0.2em]">Ready for a New Adventure?</p>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-10">
         <div className="p-6 bg-slate-50 rounded-[2rem] border-2 border-slate-100 flex items-center gap-6">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#f43f5e] shadow-sm"><Zap size={24} /></div>
            <div>
               <p className="font-black text-[#292667] uppercase text-sm">Action-Packed Modules</p>
               <p className="text-[10px] font-bold text-slate-400">12 Video Missions & 24 Quizzes</p>
            </div>
         </div>
         <div className="p-6 bg-slate-50 rounded-[2rem] border-2 border-slate-100 flex items-center gap-6">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-amber-500 shadow-sm"><Trophy size={24} /></div>
            <div>
               <p className="font-black text-[#292667] uppercase text-sm">Exclusive Certificates</p>
               <p className="text-[10px] font-bold text-slate-400">Earn the Master Hero Badge</p>
            </div>
         </div>
      </div>

      <div className="flex flex-col gap-3">
         <button className="w-full py-6 bg-[#f43f5e] text-white rounded-[2rem] font-black text-xl uppercase tracking-widest shadow-2xl hover:bg-[#292667] transition-all border-b-8 border-black/20 flex items-center justify-center gap-4">
            Unlock with 2000 <Star className="fill-[#fbee21] text-[#fbee21] border-none" strokeWidth={0} />
         </button>
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
    { id: 3, name: 'Web Creators', desc: 'Design your own internet space with HTML and CSS blocks.', level: 'Level 1', status: 'Unlocked', isPurchased: true, color: '#00a651' },
    { id: 4, name: 'Game Architecture', desc: 'Advanced patterns for professional game development.', level: 'Level 3', status: 'Locked', isPurchased: false, color: '#a855f7' },
  ];

  return (
    <div className="h-full flex flex-col gap-6 overflow-hidden relative">
      {selectedUnlock && <UnlockCourseModal course={selectedUnlock} onClose={() => setSelectedUnlock(null)} />}

      <div className="w-full bg-[#292667] rounded-[3rem] p-8 text-white shadow-2xl border-b-[12px] border-[#f43f5e] flex flex-col md:flex-row items-center justify-between gap-8 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
        <div className="flex items-center gap-6 relative z-10">
           <div className="p-5 bg-[#f43f5e] rounded-[2.5rem] text-white shadow-xl rotate-3">
             <Layers size={42} strokeWidth={3.5} />
           </div>
           <div>
             <h2 className="text-4xl font-black leading-none tracking-tight uppercase">Discover <span className="text-[#fbee21]">Courses</span></h2>
             <p className="text-[12px] font-black text-[#fbee21] uppercase tracking-[0.15em] mt-3">Expand your knowledge universe</p>
           </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className={`bg-white rounded-[3.5rem] p-10 border-4 transition-all group shadow-xl flex flex-col relative overflow-hidden ${
                course.isPurchased 
                  ? 'border-slate-50 hover:border-[#f43f5e] hover:shadow-2xl' 
                  : 'border-slate-100 grayscale-[0.5] opacity-90'
              }`}
            >
              <div className="flex justify-between items-start mb-10 relative z-10">
                 <div 
                   className="w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12"
                   style={{ backgroundColor: `${course.color}15`, color: course.color }}
                 >
                    {course.isPurchased ? <Sparkles size={40} /> : <Lock size={40} />}
                 </div>
                 <span className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm ${
                   course.isPurchased ? 'bg-green-50 text-[#00a651] border border-green-100' : 'bg-slate-50 text-slate-400 border border-slate-200'
                 }`}>
                    {course.status}
                 </span>
              </div>
              
              <div className="flex-1 mb-10 relative z-10">
                 <h3 className="text-2xl font-black text-[#292667] uppercase tracking-tighter mb-4 leading-tight">{course.name}</h3>
                 <p className="text-slate-500 font-bold text-sm leading-relaxed">{course.desc}</p>
              </div>
              
              <div className="flex items-center justify-between mb-10 border-y-2 border-slate-50 py-6 relative z-10">
                 <div className="flex items-center gap-3">
                    <ShieldCheck size={20} className={course.isPurchased ? "text-[#00a651]" : "text-slate-300"} />
                    <span className="text-[11px] font-black uppercase text-slate-400 tracking-widest">{course.level}</span>
                 </div>
                 <div className={`flex items-center gap-1.5 ${course.isPurchased ? 'text-[#fbee21]' : 'text-slate-200'}`}>
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
                 </div>
              </div>

              <button 
                onClick={() => course.isPurchased ? onEnterCourse(course.name) : setSelectedUnlock(course)}
                className={`w-full py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-xl transition-all flex items-center justify-center gap-3 active:scale-95 border-b-6 border-black/20 group relative z-10 ${
                  course.isPurchased 
                    ? 'bg-[#292667] text-white hover:bg-slate-800' 
                    : 'bg-[#f43f5e] text-white hover:bg-[#ec2027]'
                }`}
              >
                {course.isPurchased ? 'Enter Course' : 'Unlock Now'} 
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" strokeWidth={3} />
              </button>

              <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                 <Rocket size={200} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
