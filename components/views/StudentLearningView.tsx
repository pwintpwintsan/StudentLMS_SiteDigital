
import React, { useState, useEffect } from 'react';
import { 
  Rocket, Play, CheckCircle2, Lock, 
  Trophy, ChevronDown, ChevronRight, 
  Video, FileQuestion, Upload, Type, ArrowLeft, Star, Sparkles,
  Cpu, Globe, Zap, X, BrainCircuit, ShieldAlert, FileText, Download, ListChecks, Info,
  Mail,
  AlertCircle,
  Plus,
  Clock,
  ChevronDown as ChevronDownSmall
} from 'lucide-react';
import { TaskType, Module, Task } from '../../types';

interface StudentLearningViewProps {
  selectedCourse: string;
}

export const StudentLearningView: React.FC<StudentLearningViewProps> = ({ selectedCourse }) => {
  const [activeCourse, setActiveCourse] = useState(selectedCourse);
  const [activeModuleId, setActiveModuleId] = useState<number | null>(1);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const [courseData, setCourseData] = useState<Record<string, { modules: Module[], isLocked: boolean }>>({
    "Robotics Mastery": {
      isLocked: false,
      modules: [
        {
          id: 1,
          title: "Module 1: Sensors & Motors",
          progress: 100,
          tasks: [
            { id: 1, title: 'How Motors Spin', type: 'video', status: 'completed', duration: '5 MINS' } as unknown as Task,
            { id: 2, title: 'Sensor Logic Quiz', type: 'multiple-choice', status: 'completed', duration: '10 MINS' } as unknown as Task,
            { id: 3, title: 'Robot Muscle Notes', type: 'quick-text', status: 'completed', duration: '3 MINS' } as unknown as Task,
            { id: 4, title: 'Design a Gripper Bot', type: 'assignment-upload', status: 'completed', duration: '20 MINS' } as unknown as Task,
          ] as Task[]
        },
        {
          id: 2,
          title: "Module 2: Wiring Circuits",
          progress: 20,
          tasks: [
            { id: 1, title: 'Breadboard Basics', type: 'video', status: 'completed', duration: '8 MINS' } as unknown as Task,
            { id: 2, title: 'Circuit Challenge', type: 'multiple-choice', status: 'active', duration: '12 MINS' } as unknown as Task,
            { id: 3, title: 'Resistance Rulebook', type: 'quick-text', status: 'locked', duration: '5 MINS' } as unknown as Task,
            { id: 4, title: 'Project: Light-Up Bot', type: 'assignment-upload', status: 'locked', duration: '45 MINS' } as unknown as Task,
          ] as Task[]
        }
      ] as Module[]
    },
    "Web Creators": {
      isLocked: true,
      modules: [
        {
          id: 1,
          title: "Module 1: HTML Basics",
          progress: 0,
          tasks: [
            { id: 1, title: 'Tags & Headings', type: 'video', status: 'locked', duration: '6 MINS' } as unknown as Task,
            { id: 2, title: 'Web Anatomy Quiz', type: 'multiple-choice', status: 'locked', duration: '10 MINS' } as unknown as Task,
          ] as Task[]
        }
      ] as Module[]
    },
    "Digital Kids Starter V2": {
      isLocked: false,
      modules: [
        {
          id: 1,
          title: "Module 1: Logic & Binary",
          progress: 100,
          tasks: [
            { id: 1, title: 'What is Binary Code?', type: 'video', status: 'completed', duration: '4 MINS' } as unknown as Task,
            { id: 2, title: 'Binary Quick Quiz', type: 'multiple-choice', status: 'completed', duration: '8 MINS' } as unknown as Task,
            { id: 3, title: 'Secret Name Challenge', type: 'assignment-upload', status: 'completed', duration: '15 MINS' } as unknown as Task,
            { id: 4, title: 'Logic Gates Notes', type: 'quick-text', status: 'completed', duration: '5 MINS' } as unknown as Task,
          ] as Task[]
        }
      ] as Module[]
    }
  });

  useEffect(() => {
    setActiveCourse(selectedCourse);
  }, [selectedCourse]);

  const currentCourseInfo = courseData[activeCourse] || courseData["Digital Kids Starter V2"];
  const currentModules = currentCourseInfo.modules;

  return (
    <div className="h-full flex flex-col gap-4 md:gap-6 overflow-hidden">
      {/* UNIVERSAL HERO HEADER */}
      <div className="w-full bg-[#292667] rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-8 text-white shadow-xl border-b-[8px] md:border-b-[12px] border-[#ec2027] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-white/5 rounded-full -mr-20 -mt-20 md:-mr-24 md:-mt-24 blur-3xl"></div>
        <div className="flex items-center gap-4 md:gap-6 relative z-10">
           <div className="p-3 md:p-5 bg-[#fbee21] rounded-2xl md:rounded-[2rem] text-[#292667] shadow-lg rotate-3">
             <Rocket size={32} md:size={42} strokeWidth={3.5} />
           </div>
           <div>
             <h2 className="text-xl md:text-3xl font-black leading-none tracking-tight uppercase">My <span className="text-[#fbee21]">Adventure</span></h2>
             <p className="text-[9px] md:text-[11px] font-black text-[#fbee21] uppercase tracking-[0.15em] mt-1 md:mt-3 truncate max-w-[150px] md:max-w-none">{activeCourse}</p>
           </div>
        </div>
      </div>

      {/* UNIVERSAL SELECTION BAR */}
      <div className="bg-white px-4 md:px-6 py-2 md:py-3 rounded-[2rem] md:rounded-[2.5rem] shadow-xl border-2 border-slate-100 flex items-center gap-3 md:gap-4 overflow-x-auto scrollbar-hide flex-shrink-0">
        {[
          { name: "Robotics Mastery", icon: Cpu, color: "#ec2027" },
          { name: "Digital Kids Starter V2", icon: Rocket, color: "#00a651" },
          { name: "Web Creators", icon: Globe, color: "#3b82f6" }
        ].map((course) => {
          const isActive = activeCourse === course.name;
          const isLocked = courseData[course.name]?.isLocked;
          const Icon = course.icon;
          return (
            <button
              key={course.name}
              onClick={() => {
                if (!isLocked) {
                  setActiveCourse(course.name);
                  setActiveModuleId(1);
                  setSelectedTask(null);
                }
              }}
              className={`flex items-center gap-2.5 md:gap-3 px-5 md:px-8 py-3 md:py-4 rounded-xl md:rounded-[1.5rem] font-black text-[9px] md:text-[11px] uppercase tracking-widest whitespace-nowrap transition-all group shrink-0 ${
                isActive 
                  ? 'bg-[#292667] text-[#fbee21] shadow-xl border-b-6 md:border-b-8 border-black/20' 
                  : 'bg-slate-50 text-slate-400 border-2 border-slate-100 hover:bg-slate-100 hover:text-[#292667]'
              }`}
            >
              {isLocked ? <Lock size={14} md:size={18} strokeWidth={3.5} className="text-[#ec2027]" /> : <Icon size={14} md:size={18} strokeWidth={3.5} />}
              {course.name}
            </button>
          );
        })}
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide space-y-4 pb-6">
        {selectedTask ? (
           <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 shadow-xl border-b-[8px] md:border-b-[10px] border-slate-100 animate-in fade-in duration-300">
             <div className="flex justify-between items-center mb-6 md:mb-8">
                <button onClick={() => setSelectedTask(null)} className="p-3 md:p-4 bg-slate-50 rounded-xl md:rounded-2xl text-[#292667] hover:bg-red-50 hover:text-red-500 transition-colors border-2 border-slate-100">
                  <ArrowLeft size={20} md:size={24} strokeWidth={4} />
                </button>
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-black text-[#292667] uppercase tracking-tight truncate px-2">{selectedTask.title}</h3>
                  <div className="flex items-center justify-center gap-2 mt-2">
                     <Clock size={12} className="text-slate-400" />
                     <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{selectedTask.duration} ESTIMATED</span>
                  </div>
                </div>
                <div className="w-10 md:w-12"></div>
             </div>
             <div className="p-10 text-center text-slate-300 font-black uppercase tracking-widest">
                <Cpu size={64} className="mx-auto mb-4 opacity-20" />
                Loading Lab Content...
             </div>
          </div>
        ) : (
          currentModules.map((mod) => (
            <div key={mod.id} className={`bg-white rounded-[1.8rem] md:rounded-[2.2rem] overflow-hidden border-2 transition-all shadow-md ${activeModuleId === mod.id ? 'border-[#ec2027]' : 'border-slate-100'}`}>
              <button 
                onClick={() => setActiveModuleId(activeModuleId === mod.id ? null : mod.id)}
                className="w-full p-5 md:p-8 flex items-center justify-between hover:bg-slate-50"
              >
                <div className="flex items-center gap-4 md:gap-6 min-w-0">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.2rem] flex items-center justify-center font-black text-lg md:text-2xl shadow-md shrink-0 ${mod.progress === 100 ? 'bg-[#00a651] text-white rotate-3' : 'bg-slate-100 text-[#292667]'}`}>
                    {mod.id}
                  </div>
                  <div className="text-left min-w-0">
                    <h3 className="text-lg md:text-2xl font-black text-[#292667] uppercase tracking-tighter leading-tight truncate">{mod.title}</h3>
                    <div className="flex items-center gap-2 md:gap-4 mt-2 md:mt-3">
                      <div className="w-24 md:w-40 h-2 md:h-2.5 bg-slate-100 rounded-full overflow-hidden border-2 border-white shadow-inner">
                         <div className="h-full bg-[#00a651] transition-all duration-1000" style={{ width: `${mod.progress}%` }}></div>
                      </div>
                      <span className="text-[9px] md:text-[11px] font-black text-[#00a651] uppercase tracking-widest whitespace-nowrap shrink-0">{mod.progress}%</span>
                    </div>
                  </div>
                </div>
                <ChevronDown className={`text-[#292667] transition-transform duration-300 shrink-0 ${activeModuleId === mod.id ? 'rotate-180' : ''}`} size={20} md:size={28} strokeWidth={4} />
              </button>

              {activeModuleId === mod.id && (
                <div className="px-5 pb-5 md:px-8 md:pb-10 space-y-3 md:space-y-4 animate-in slide-in-from-top-2 duration-300">
                  {mod.tasks.map((task, index) => {
                    const Icon = task.type === 'video' ? Video : task.type === 'multiple-choice' ? FileQuestion : task.type === 'assignment-upload' ? Upload : Type;
                    return (
                      <button 
                        key={task.id}
                        onClick={() => task.status !== 'locked' && setSelectedTask(task)}
                        className={`w-full p-4 md:p-6 rounded-[1.2rem] md:rounded-[1.8rem] border-2 flex items-center justify-between transition-all ${
                          task.status === 'completed' ? 'bg-green-50 border-green-100' : 
                          task.status === 'active' ? 'bg-white border-[#ec2027] shadow-sm' : 
                          'bg-slate-50 border-slate-50 opacity-50 grayscale cursor-not-allowed'
                        }`}
                      >
                        <div className="flex items-center gap-3 md:gap-5 min-w-0">
                           <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 ${
                             task.status === 'completed' ? 'bg-[#00a651] text-white' : 
                             task.status === 'active' ? 'bg-[#ec2027] text-white' : 'bg-slate-200 text-slate-400'
                           }`}>
                             <Icon size={18} md:size={24} strokeWidth={3} />
                           </div>
                           <div className="text-left min-w-0">
                              <p className="text-[12px] md:text-lg font-black text-[#292667] uppercase tracking-tight truncate pr-2">
                                 Task {index + 1}: {task.title}
                              </p>
                              <div className="flex items-center gap-3 mt-1 md:mt-1.5">
                                 <div className="flex items-center gap-1.5 text-[8px] md:text-[10px] font-black uppercase text-slate-400 tracking-widest">
                                    <Clock size={12} md:size={14} strokeWidth={3.5} />
                                    <span>{task.duration}</span>
                                 </div>
                                 <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                                 <span className="text-[8px] md:text-[10px] font-black uppercase text-slate-400 tracking-widest">{task.type.replace('-', ' ')}</span>
                              </div>
                           </div>
                        </div>
                        {task.status === 'completed' ? <CheckCircle2 className="text-[#00a651] shrink-0" size={20} md:size={24} strokeWidth={4} /> : <ChevronRight size={20} md:size={24} className="text-slate-300 shrink-0" strokeWidth={3} />}
                      </button>
                    );
                  })}
                  <button className="w-full p-5 md:p-7 bg-[#fbee21] text-[#292667] rounded-xl md:rounded-[2rem] font-black text-sm md:text-lg uppercase tracking-widest shadow-lg hover:bg-[#292667] hover:text-[#fbee21] transition-all flex items-center justify-between group active:scale-95 border-b-6 md:border-b-8 border-black/20">
                    <span>Final Mastery Mission</span>
                    <Trophy size={24} md:size={32} className="group-hover:rotate-12 transition-transform" />
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
