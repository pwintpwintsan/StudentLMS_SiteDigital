
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
  Eye,
  Award,
  Check,
  ChevronDown as ChevronDownSmall
} from 'lucide-react';
import { TaskType, Module, Task } from '../../types';

interface StudentLearningViewProps {
  selectedCourse: string;
}

// --- Task Content Renderers ---

const VideoTask = ({ content }: { content: any }) => (
  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
    <div className="aspect-video w-full bg-[#292667] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative shadow-lg border-2 border-slate-100 group">
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all cursor-pointer">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-[#fbee21] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
          <Play size={28} md:size={36} className="text-[#292667] fill-current ml-1" />
        </div>
      </div>
      <img src={content?.thumbnail || "https://picsum.photos/seed/video/800/450"} alt="Video Thumbnail" className="w-full h-full object-cover opacity-60" />
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
            <Zap size={14} className="text-[#fbee21]" />
          </div>
          <p className="text-[10px] md:text-xs font-black uppercase tracking-widest">Mastering Logic Gates</p>
        </div>
        <span className="text-[10px] font-black px-2 py-0.5 bg-black/40 rounded-md">12:45</span>
      </div>
    </div>
    <div className="p-4 md:p-6 bg-slate-50 rounded-[1.5rem] border-2 border-slate-100">
      <h4 className="text-xs md:text-base font-black text-[#292667] uppercase mb-1">Mission Briefing</h4>
      <p className="text-slate-500 font-bold leading-relaxed text-[10px] md:text-sm italic">
        "Explore binary decisions using simple on/off gates. Watch for AND/OR gate differences!"
      </p>
    </div>
  </div>
);

const QuizTask = ({ content }: { content: any }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const options = content?.options || ["Logic Unit", "Battery Cell", "Binary Bit", "Memory Stick"];

  return (
    <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom-4">
      <div className="bg-[#292667] p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] text-white shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10"><BrainCircuit size={40} md:size={60} /></div>
        <p className="text-[#fbee21] text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-2">Question 01 / 05</p>
        <h4 className="text-base md:text-2xl font-black leading-tight uppercase tracking-tight">
          What is the smallest unit of digital intelligence used by a robot?
        </h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((opt: string, i: number) => (
          <button 
            key={i}
            onClick={() => setSelected(i)}
            className={`p-4 md:p-6 rounded-[1.2rem] md:rounded-[1.5rem] border-2 text-left transition-all flex items-center gap-3 group ${
              selected === i 
                ? 'bg-[#00a651] border-[#00a651] text-white shadow-md scale-[1.01]' 
                : 'bg-white border-slate-100 text-[#292667] hover:border-[#fbee21]'
            }`}
          >
            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center font-black text-sm md:text-lg shrink-0 ${
              selected === i ? 'bg-white text-[#00a651]' : 'bg-slate-50 text-slate-400 group-hover:bg-[#fbee21] group-hover:text-[#292667]'
            }`}>
              {String.fromCharCode(65 + i)}
            </div>
            <span className="text-xs md:text-base font-black uppercase tracking-tight leading-none">{opt}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const AssignmentTask = ({ content }: { content: any }) => (
  <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom-4">
    <div className="p-6 md:p-10 bg-white rounded-[1.5rem] md:rounded-[2.5rem] border-4 border-dashed border-slate-100 shadow-inner flex flex-col items-center justify-center text-center">
      <div className="w-14 h-14 md:w-20 md:h-20 bg-blue-50 text-[#3b82f6] rounded-[1.2rem] md:rounded-[1.5rem] flex items-center justify-center mb-4 shadow-sm">
        <Upload size={28} md:size={40} strokeWidth={3} />
      </div>
      <h4 className="text-lg md:text-2xl font-black text-[#292667] uppercase mb-2">Upload Mission File</h4>
      <p className="text-slate-400 font-bold text-[10px] md:text-sm max-w-xs leading-relaxed mb-6">
        Drag your project here or browse your device.
      </p>
      <button className="px-8 py-3.5 bg-[#3b82f6] text-white rounded-xl md:rounded-[1.2rem] font-black uppercase text-[10px] md:text-sm tracking-widest shadow-lg hover:bg-[#2563eb] transition-all border-b-4 border-black/20 active:scale-95 flex items-center gap-2">
        <Plus size={18} /> Select File
      </button>
    </div>

    <div className="bg-slate-50 p-4 md:p-6 rounded-[1.2rem] md:rounded-[1.5rem] border-2 border-slate-100">
       <div className="flex items-center gap-2 mb-2">
          <Info size={16} className="text-[#292667]" />
          <h5 className="font-black text-[#292667] uppercase text-[10px] md:text-xs">Technical Info</h5>
       </div>
       <ul className="grid grid-cols-2 gap-2">
          <li className="flex items-center gap-2 text-[9px] md:text-[11px] font-bold text-slate-500 uppercase">
            <Check size={12} className="text-[#00a651]" /> PDF, PNG, JPEG
          </li>
          <li className="flex items-center gap-2 text-[9px] md:text-[11px] font-bold text-slate-500 uppercase">
            <Check size={12} className="text-[#00a651]" /> Max 25MB
          </li>
       </ul>
    </div>
  </div>
);

const TextTask = ({ content }: { content: any }) => (
  <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom-4">
    <div className="bg-white p-6 md:p-10 rounded-[1.8rem] md:rounded-[2.5rem] shadow-lg border-b-[8px] border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-6 opacity-[0.03] rotate-12"><FileText size={100} md:size={150} /></div>
      <div className="prose prose-slate max-w-none relative z-10">
        <h2 className="text-xl md:text-3xl font-black text-[#292667] uppercase tracking-tighter mb-4 md:mb-6 leading-none">
          The Secret <span className="text-[#ec2027]">Language</span>
        </h2>
        <div className="space-y-4 md:space-y-6">
          <p className="text-slate-600 font-bold text-xs md:text-lg leading-relaxed">
            Robots speak using <span className="bg-[#fbee21] px-1 text-[#292667]">ON</span> and <span className="bg-slate-800 px-1 text-white">OFF</span>.
          </p>
          <div className="p-4 md:p-6 bg-slate-50 rounded-[1rem] md:rounded-[1.5rem] border-l-6 border-[#ec2027]">
             <p className="text-[#292667] font-black italic text-sm md:text-xl leading-snug">
               "Binary is the heart of digital creation. Master it, and you master technology!"
             </p>
          </div>
          <p className="text-slate-500 font-bold text-[10px] md:text-base leading-relaxed">
            Try writing your name in code. Remember: 0 is off, 1 is on!
          </p>
        </div>
      </div>
    </div>
  </div>
);

const ResultsModal = ({ task, onClose }: { task: Task, onClose: () => void }) => {
  const isQuiz = task.type === 'multiple-choice';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#292667]/70 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white rounded-[2rem] md:rounded-[3rem] w-full max-w-2xl max-h-[85vh] shadow-2xl border-b-[8px] border-[#00a651] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
        
        <div className="bg-[#292667] p-5 md:p-8 text-white flex items-center justify-between relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          <div className="flex items-center gap-3 md:gap-5 relative z-10">
            <div className="p-2 md:p-3 bg-[#00a651] rounded-xl md:rounded-2xl text-white rotate-3 shadow-lg">
              <Award size={24} md:size={30} strokeWidth={3} />
            </div>
            <div>
              <p className="text-[9px] md:text-[10px] font-black text-[#fbee21] uppercase tracking-[0.2em] mb-0.5">Mission Complete</p>
              <h3 className="text-lg md:text-2xl font-black uppercase tracking-tight leading-none">{task.title}</h3>
            </div>
          </div>
          <button onClick={onClose} className="p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all relative z-10">
            <X size={20} md:size={24} strokeWidth={4} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 md:p-8 space-y-4 md:space-y-6 scrollbar-hide">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
             <div className="bg-slate-50 p-4 md:p-6 rounded-[1.5rem] border-2 border-slate-100 text-center">
                <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Score</p>
                <p className="text-2xl md:text-4xl font-black text-[#00a651]">95%</p>
             </div>
             <div className="bg-slate-50 p-4 md:p-6 rounded-[1.5rem] border-2 border-slate-100 text-center flex flex-col justify-center">
                <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Rank</p>
                <p className="text-base md:text-xl font-black text-[#292667] uppercase tracking-tighter">Legendary</p>
             </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-[10px] md:text-xs font-black text-[#292667] uppercase tracking-widest flex items-center gap-2">
              <Info size={14} className="text-[#3b82f6]" /> 
              {isQuiz ? 'Intel Report' : 'Teacher Feedback'}
            </h4>
            
            <div className="space-y-2">
              {isQuiz ? (
                <>
                  {[
                    { q: "What is a bit?", a: "The smallest unit of data (0 or 1)", correct: true },
                    { q: "Binary uses which base?", a: "Base 2", correct: true }
                  ].map((item, i) => (
                    <div key={i} className="p-3 md:p-4 bg-green-50 rounded-xl border-2 border-green-100 flex items-start gap-2">
                       <CheckCircle2 size={16} className="text-[#00a651] shrink-0 mt-0.5" />
                       <div>
                         <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest">Q {i+1}</p>
                         <p className="text-xs md:text-sm font-black text-[#292667] mt-0.5">{item.q}</p>
                         <p className="text-[10px] font-bold text-[#00a651] mt-1 uppercase">Answer: {item.a}</p>
                       </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="p-4 md:p-6 bg-slate-50 rounded-[1.5rem] border-2 border-slate-100">
                   <p className="text-xs md:text-base font-bold text-slate-600 italic">
                     "Outstanding work! Your understanding of logic gates is brilliant."
                   </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p-5 md:p-6 bg-slate-50 border-t-2 border-slate-100 flex justify-center shrink-0">
           <button onClick={onClose} className="px-10 py-3 md:py-4 bg-[#292667] text-[#fbee21] rounded-xl md:rounded-[1.2rem] font-black text-xs md:text-sm uppercase tracking-[0.2em] shadow-lg hover:bg-[#ec2027] hover:text-white transition-all active:scale-95 border-b-4 border-black/20">
             Close Intel
           </button>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---

export const StudentLearningView: React.FC<StudentLearningViewProps> = ({ selectedCourse }) => {
  const [activeCourse, setActiveCourse] = useState(selectedCourse);
  const [activeModuleId, setActiveModuleId] = useState<number | null>(1);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [viewingResultsFor, setViewingResultsFor] = useState<Task | null>(null);

  const [courseData, setCourseData] = useState<Record<string, { modules: Module[], isLocked: boolean }>>({
    "Robotics Mastery": {
      isLocked: false,
      modules: [
        {
          id: 1,
          title: "Module 1: Sensors & Motors",
          progress: 100,
          tasks: [
            { id: 1, title: 'How Motors Spin', type: 'video', status: 'completed', duration: '5 MINS' } as Task,
            { id: 2, title: 'Sensor Logic Quiz', type: 'multiple-choice', status: 'completed', duration: '10 MINS' } as Task,
            { id: 3, title: 'Robot Muscle Notes', type: 'quick-text', status: 'completed', duration: '3 MINS' } as Task,
            { id: 4, title: 'Design a Gripper Bot', type: 'assignment-upload', status: 'completed', duration: '20 MINS' } as Task,
          ]
        },
        {
          id: 2,
          title: "Module 2: Wiring Circuits",
          progress: 20,
          tasks: [
            { id: 1, title: 'Breadboard Basics', type: 'video', status: 'completed', duration: '8 MINS' } as Task,
            { id: 2, title: 'Circuit Challenge', type: 'multiple-choice', status: 'active', duration: '12 MINS' } as Task,
            { id: 3, title: 'Resistance Rulebook', type: 'quick-text', status: 'locked', duration: '5 MINS' } as Task,
            { id: 4, title: 'Project: Light-Up Bot', type: 'assignment-upload', status: 'locked', duration: '45 MINS' } as Task,
          ]
        }
      ]
    },
    "Web Creators": {
      isLocked: true,
      modules: [
        {
          id: 1,
          title: "Module 1: HTML Basics",
          progress: 0,
          tasks: [
            { id: 1, title: 'Tags & Headings', type: 'video', status: 'locked', duration: '6 MINS' } as Task,
            { id: 2, title: 'Web Anatomy Quiz', type: 'multiple-choice', status: 'locked', duration: '10 MINS' } as Task,
          ]
        }
      ]
    },
    "Digital Kids Starter V2": {
      isLocked: false,
      modules: [
        {
          id: 1,
          title: "Module 1: Logic & Binary",
          progress: 100,
          tasks: [
            { id: 1, title: 'What is Binary Code?', type: 'video', status: 'completed', duration: '4 MINS' } as Task,
            { id: 2, title: 'Binary Quick Quiz', type: 'multiple-choice', status: 'completed', duration: '8 MINS' } as Task,
            { id: 3, title: 'Secret Name Challenge', type: 'assignment-upload', status: 'completed', duration: '15 MINS' } as Task,
            { id: 4, title: 'Logic Gates Notes', type: 'quick-text', status: 'completed', duration: '5 MINS' } as Task,
          ]
        }
      ]
    }
  });

  useEffect(() => {
    setActiveCourse(selectedCourse);
  }, [selectedCourse]);

  const currentCourseInfo = courseData[activeCourse] || courseData["Digital Kids Starter V2"];
  const currentModules = currentCourseInfo.modules;

  const renderTaskContent = () => {
    if (!selectedTask) return null;
    switch (selectedTask.type) {
      case 'video': return <VideoTask content={selectedTask.content} />;
      case 'multiple-choice': return <QuizTask content={selectedTask.content} />;
      case 'assignment-upload': return <AssignmentTask content={selectedTask.content} />;
      case 'quick-text': return <TextTask content={selectedTask.content} />;
      default: return null;
    }
  };

  return (
    <div className="h-full flex flex-col gap-3 md:gap-5 overflow-hidden">
      {/* Universal Hero Header - Refined COMPACT size */}
      <div className="w-full bg-[#292667] rounded-[1.8rem] md:rounded-[2.2rem] p-4 md:p-6 text-white shadow-lg border-b-[6px] md:border-b-[10px] border-[#ec2027] flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="flex items-center gap-3 md:gap-6 relative z-10 w-full md:w-auto">
           <div className="p-3 md:p-4 bg-[#fbee21] rounded-xl md:rounded-[1.5rem] text-[#292667] shadow-xl rotate-3">
             <Rocket size={24} md:size={36} strokeWidth={3.5} />
           </div>
           <div>
             <h2 className="text-xl md:text-3xl font-black leading-none tracking-tight uppercase">My <span className="text-[#fbee21]">Adventure</span></h2>
             <p className="text-[9px] md:text-[11px] font-black text-[#fbee21] uppercase tracking-[0.2em] mt-1 md:mt-2 truncate max-w-[150px] md:max-w-none">{activeCourse}</p>
           </div>
        </div>
      </div>

      {/* Universal Selection Bar */}
      <div className="bg-white px-3 md:px-5 py-2 md:py-3 rounded-[1.5rem] md:rounded-[2rem] shadow-md border-2 border-slate-100 flex items-center gap-2 md:gap-4 overflow-x-auto scrollbar-hide flex-shrink-0">
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
              className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3.5 rounded-xl md:rounded-[1.2rem] font-black text-[9px] md:text-[11px] uppercase tracking-widest whitespace-nowrap transition-all shrink-0 ${
                isActive 
                  ? 'bg-[#292667] text-[#fbee21] shadow-lg border-b-4 md:border-b-6 border-black/20' 
                  : 'bg-slate-50 text-slate-400 border-2 border-slate-100 hover:bg-slate-100 hover:text-[#292667]'
              }`}
            >
              {isLocked ? <Lock size={14} md:size={18} strokeWidth={3.5} className="text-[#ec2027]" /> : <Icon size={14} md:size={18} strokeWidth={3.5} />}
              {course.name}
            </button>
          );
        })}
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide space-y-3 md:space-y-4 pb-4">
        {selectedTask ? (
           <div className="flex flex-col gap-4 md:gap-6">
              <div className="bg-white rounded-[1.8rem] md:rounded-[2.5rem] p-4 md:p-6 shadow-xl border-b-[6px] md:border-b-[10px] border-slate-100 animate-in fade-in duration-300">
                <div className="flex justify-between items-center mb-4 md:mb-6">
                    <button onClick={() => setSelectedTask(null)} className="p-2 md:p-3.5 bg-slate-50 rounded-xl md:rounded-[1.2rem] text-[#292667] hover:bg-red-50 hover:text-red-500 transition-colors border-2 border-slate-100 active:scale-90">
                      <ArrowLeft size={18} md:size={24} strokeWidth={4} />
                    </button>
                    <div className="text-center px-2">
                      <h3 className="text-base md:text-2xl font-black text-[#292667] uppercase tracking-tighter leading-none">{selectedTask.title}</h3>
                      <div className="flex items-center justify-center gap-2 mt-2">
                        <Clock size={12} md:size={16} className="text-slate-300" />
                        <span className="text-[8px] md:text-[10px] font-black uppercase text-slate-400 tracking-widest">{selectedTask.duration} REMAINING</span>
                      </div>
                    </div>
                    <div className="hidden sm:flex w-10 md:w-14 items-center justify-center">
                       <Star size={20} md:size={28} className="text-[#fbee21] animate-pulse" fill="currentColor" />
                    </div>
                </div>

                <div className="min-h-[250px] md:min-h-[350px]">
                  {renderTaskContent()}
                </div>
              </div>

              {/* Task Completion Bar */}
              <div className="bg-[#292667] rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 text-white flex items-center justify-between gap-4 shadow-xl border-b-[6px] md:border-b-[10px] border-black/20">
                 <div className="flex items-center gap-3 md:gap-5">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-green-500 text-white rounded-xl md:rounded-[1.2rem] flex items-center justify-center rotate-3 shadow-lg">
                       <CheckCircle2 size={20} md:size={28} strokeWidth={4} />
                    </div>
                    <div className="text-left">
                       <h4 className="text-sm md:text-lg font-black uppercase tracking-tight leading-none">Complete Mission?</h4>
                       <p className="text-[8px] md:text-[10px] font-black uppercase text-[#fbee21] tracking-widest mt-1">Claim points now!</p>
                    </div>
                 </div>
                 <button 
                  onClick={() => setSelectedTask(null)}
                  className="px-6 md:px-10 py-2.5 md:py-3.5 bg-[#00a651] text-white rounded-xl md:rounded-[1rem] font-black text-[10px] md:text-sm uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all border-b-4 border-black/10"
                 >
                   Finish Intel
                 </button>
              </div>
           </div>
        ) : (
          currentModules.map((mod) => (
            <div key={mod.id} className={`bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-2 transition-all shadow-md ${activeModuleId === mod.id ? 'border-[#ec2027]' : 'border-slate-100'}`}>
              <button 
                onClick={() => setActiveModuleId(activeModuleId === mod.id ? null : mod.id)}
                className="w-full p-4 md:p-6 flex items-center justify-between hover:bg-slate-50"
              >
                <div className="flex items-center gap-3 md:gap-6 min-w-0">
                  <div className={`w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-[1.5rem] flex items-center justify-center font-black text-base md:text-2xl shadow-md shrink-0 ${mod.progress === 100 ? 'bg-[#00a651] text-white rotate-3' : 'bg-slate-100 text-[#292667]'}`}>
                    {mod.id}
                  </div>
                  <div className="text-left min-w-0">
                    <h3 className="text-sm md:text-2xl font-black text-[#292667] uppercase tracking-tighter leading-tight truncate">{mod.title}</h3>
                    <div className="flex items-center gap-2 md:gap-4 mt-2 md:mt-3">
                      <div className="w-20 md:w-40 h-2 md:h-3 bg-slate-100 rounded-full overflow-hidden border-2 border-white shadow-inner">
                         <div className="h-full bg-[#00a651] transition-all duration-1000" style={{ width: `${mod.progress}%` }}></div>
                      </div>
                      <span className="text-[8px] md:text-[10px] font-black text-[#00a651] uppercase tracking-[0.2em] whitespace-nowrap shrink-0">{mod.progress}% COMPLETE</span>
                    </div>
                  </div>
                </div>
                <ChevronDown className={`text-[#292667] transition-transform duration-300 shrink-0 ${activeModuleId === mod.id ? 'rotate-180' : ''}`} size={18} md:size={28} strokeWidth={4} />
              </button>

              {activeModuleId === mod.id && (
                <div className="px-4 pb-4 md:px-6 md:pb-8 space-y-2 md:space-y-3 animate-in slide-in-from-top-4 duration-300">
                  {mod.tasks.map((task, index) => {
                    const Icon = task.type === 'video' ? Video : task.type === 'multiple-choice' ? FileQuestion : task.type === 'assignment-upload' ? Upload : Type;
                    return (
                      <div 
                        key={task.id}
                        className={`w-full p-3 md:p-5 rounded-[1rem] md:rounded-[1.5rem] border-2 flex items-center justify-between transition-all ${
                          task.status === 'completed' ? 'bg-green-50 border-green-100' : 
                          task.status === 'active' ? 'bg-white border-[#ec2027] shadow-sm' : 
                          'bg-slate-50 border-slate-50 opacity-50 grayscale cursor-not-allowed'
                        }`}
                      >
                        <button 
                          onClick={() => task.status !== 'locked' && setSelectedTask(task)}
                          className="flex items-center gap-3 md:gap-5 flex-1 text-left min-w-0"
                        >
                           <div className={`w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-[1rem] flex items-center justify-center shrink-0 shadow-sm ${
                             task.status === 'completed' ? 'bg-[#00a651] text-white rotate-3' : 
                             task.status === 'active' ? 'bg-[#ec2027] text-white' : 'bg-slate-200 text-slate-400'
                           }`}>
                             <Icon size={16} md:size={24} strokeWidth={3} />
                           </div>
                           <div className="min-w-0">
                              <p className="text-xs md:text-xl font-black text-[#292667] uppercase tracking-tight truncate pr-2">
                                 {task.title}
                              </p>
                              <div className="flex items-center gap-2 md:gap-4 mt-0.5 md:mt-1.5">
                                 <div className="flex items-center gap-1.5 text-[7px] md:text-[10px] font-black uppercase text-slate-400 tracking-widest">
                                    <Clock size={10} md:size={14} strokeWidth={3.5} />
                                    <span>{task.duration}</span>
                                 </div>
                                 <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                                 <span className="text-[7px] md:text-[10px] font-black uppercase text-slate-400 tracking-widest">{task.type.replace('-', ' ')}</span>
                              </div>
                           </div>
                        </button>
                        
                        <div className="flex items-center gap-2 md:gap-4 shrink-0">
                           {task.status === 'completed' && (
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setViewingResultsFor(task);
                                }}
                                className="p-2 md:p-2.5 bg-blue-50 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white transition-all shadow-sm flex items-center gap-2 active:scale-95"
                              >
                                <Eye size={16} md:size={20} strokeWidth={3.5} />
                                <span className="hidden lg:inline text-[8px] md:text-[9px] font-black uppercase tracking-widest">Results</span>
                              </button>
                           )}
                           <div className="shrink-0">
                              {task.status === 'completed' ? (
                                <CheckCircle2 className="text-[#00a651]" size={18} md:size={24} strokeWidth={4} />
                              ) : (
                                <ChevronRight size={18} md:size={24} className="text-slate-300" strokeWidth={3} />
                              )}
                           </div>
                        </div>
                      </div>
                    );
                  })}
                  <button className="w-full p-4 md:p-6 bg-[#fbee21] text-[#292667] rounded-xl md:rounded-[2rem] font-black text-sm md:text-xl uppercase tracking-[0.2em] shadow-lg hover:bg-[#292667] hover:text-[#fbee21] transition-all flex items-center justify-between group active:scale-95 border-b-6 md:border-b-8 border-black/20 mt-2">
                    <span>Graduation Mission</span>
                    <Trophy size={20} md:size={32} className="group-hover:rotate-12 transition-transform" />
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Result Modal Overlay */}
      {viewingResultsFor && (
        <ResultsModal 
          task={viewingResultsFor} 
          onClose={() => setViewingResultsFor(null)} 
        />
      )}
    </div>
  );
};
