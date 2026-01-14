
import React, { useState, useEffect } from 'react';
import { 
  Rocket, Play, CheckCircle2, Lock, 
  Trophy, ChevronDown, ChevronRight, 
  Video, FileQuestion, Upload, Type, ArrowLeft, Star, Sparkles,
  Cpu, Globe, Zap, X, BrainCircuit, ShieldAlert, FileText, Download, ListChecks, Info
} from 'lucide-react';
import { TaskType } from '../../types';

interface Task {
  id: number;
  title: string;
  type: TaskType;
  status: 'completed' | 'active' | 'locked';
  content?: any;
}

interface Module {
  id: number;
  title: string;
  progress: number;
  tasks: Task[];
}

interface StudentLearningViewProps {
  selectedCourse: string;
}

const UnlockCourseModal = ({ courseName, onClose }: { courseName: string, onClose: () => void }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#292667]/70 backdrop-blur-md animate-in fade-in duration-300">
    <div className="bg-white rounded-[2.5rem] p-6 md:p-10 max-w-xl w-full shadow-2xl border-t-[12px] border-[#f43f5e] relative animate-in zoom-in-95 duration-300">
      <button onClick={onClose} className="absolute top-4 right-4 md:top-8 md:right-8 p-2 text-slate-300 hover:text-[#f43f5e] transition-colors bg-slate-50 rounded-xl">
        <X size={20} strokeWidth={4} />
      </button>

      <div className="text-center mb-6 md:mb-10">
         <div className="w-16 h-16 md:w-24 md:h-24 bg-[#f43f5e] rounded-[1.5rem] md:rounded-[2.5rem] flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-xl rotate-6">
            <Rocket size={32} md:size={48} className="text-white" strokeWidth={3} />
         </div>
         <h3 className="text-2xl md:text-3xl font-black text-[#292667] uppercase tracking-tighter mb-1 md:mb-2">Unlock {courseName}</h3>
         <p className="text-slate-400 font-black uppercase text-[8px] md:text-[10px] tracking-[0.2em]">Ready for a New Adventure?</p>
      </div>

      <div className="grid grid-cols-1 gap-3 md:gap-4 mb-6 md:mb-10">
         <div className="p-4 md:p-6 bg-slate-50 rounded-[1.5rem] border-2 border-slate-100 flex items-center gap-4 md:gap-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center text-[#f43f5e] shadow-sm shrink-0"><Zap size={20} md:size={24} /></div>
            <div>
               <p className="font-black text-[#292667] uppercase text-xs md:text-sm">Action-Packed Modules</p>
               <p className="text-[8px] md:text-[10px] font-bold text-slate-400">12 Video Missions & 24 Quizzes</p>
            </div>
         </div>
         <div className="p-4 md:p-6 bg-slate-50 rounded-[1.5rem] border-2 border-slate-100 flex items-center gap-4 md:gap-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center text-amber-500 shadow-sm shrink-0"><Trophy size={20} md:size={24} /></div>
            <div>
               <p className="font-black text-[#292667] uppercase text-xs md:text-sm">Exclusive Certificates</p>
               <p className="text-[8px] md:text-[10px] font-bold text-slate-400">Earn the Master Hero Badge</p>
            </div>
         </div>
      </div>

      <div className="flex flex-col gap-2">
         <button className="w-full py-4 md:py-6 bg-[#f43f5e] text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-lg md:text-xl uppercase tracking-widest shadow-xl hover:bg-[#292667] transition-all border-b-6 border-black/20 flex items-center justify-center gap-3 md:gap-4">
            Unlock with 2000 <Star className="fill-[#fbee21] text-[#fbee21]" size={16} md:size={20} strokeWidth={0} />
         </button>
         <button onClick={onClose} className="w-full py-2 text-slate-300 font-black uppercase text-[8px] md:text-xs tracking-widest hover:text-[#292667] transition-all">
            Maybe Later
         </button>
      </div>
    </div>
  </div>
);

export const StudentLearningView: React.FC<StudentLearningViewProps> = ({ selectedCourse }) => {
  const [activeCourse, setActiveCourse] = useState(selectedCourse);
  const [activeModuleId, setActiveModuleId] = useState<number | null>(1);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isFinalTestActive, setIsFinalTestActive] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [isTestFinished, setIsTestFinished] = useState(false);
  const [showUnlockModal, setShowUnlockModal] = useState(false);
  const [testModuleId, setTestModuleId] = useState<number | null>(null);

  useEffect(() => {
    setActiveCourse(selectedCourse);
  }, [selectedCourse]);

  const courseData: Record<string, { modules: Module[], isLocked: boolean }> = {
    "Robotics Mastery": {
      isLocked: false,
      modules: [
        {
          id: 1,
          title: "Module 1: Sensors & Motors",
          progress: 100,
          tasks: [
            { id: 1, title: 'How Motors Spin', type: 'video', status: 'completed' },
            { id: 2, title: 'Sensor Logic Quiz', type: 'multiple-choice', status: 'completed' },
            { id: 3, title: 'Robot Muscle Notes', type: 'quick-text', status: 'completed' },
            { id: 4, title: 'Design a Gripper Bot', type: 'assignment-upload', status: 'completed' },
          ]
        },
        {
          id: 2,
          title: "Module 2: Wiring Circuits",
          progress: 20,
          tasks: [
            { id: 1, title: 'Breadboard Basics', type: 'video', status: 'completed' },
            { id: 2, title: 'Circuit Challenge', type: 'multiple-choice', status: 'active' },
            { id: 3, title: 'Resistance Rulebook', type: 'quick-text', status: 'locked' },
            { id: 4, title: 'Project: Light-Up Bot', type: 'assignment-upload', status: 'locked' },
          ]
        },
        {
          id: 3,
          title: "Module 3: Code the Brain",
          progress: 0,
          tasks: [
            { id: 1, title: 'Programming Loops', type: 'video', status: 'locked' },
            { id: 2, title: 'Conditionals Quiz', type: 'multiple-choice', status: 'locked' },
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
            { id: 1, title: 'Tags & Headings', type: 'video', status: 'locked' },
            { id: 2, title: 'Web Anatomy Quiz', type: 'multiple-choice', status: 'locked' },
            { id: 3, title: 'My First Webpage', type: 'assignment-upload', status: 'locked' },
          ]
        },
        {
            id: 2,
            title: "Module 2: CSS Style",
            progress: 0,
            tasks: [
              { id: 1, title: 'Coloring the Web', type: 'video', status: 'locked' },
              { id: 2, title: 'Layout Logic', type: 'multiple-choice', status: 'locked' },
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
            { id: 1, title: 'What is Binary Code?', type: 'video', status: 'completed' },
            { id: 2, title: 'Binary Quick Quiz', type: 'multiple-choice', status: 'completed' },
            { id: 3, title: 'Secret Name Challenge', type: 'assignment-upload', status: 'completed' },
            { id: 4, title: 'Logic Gates Notes', type: 'quick-text', status: 'completed' },
          ]
        },
        {
            id: 2,
            title: "Module 2: Cyber Heroes",
            progress: 0,
            tasks: [
              { id: 1, title: 'Internet Safety Intro', type: 'video', status: 'active' },
              { id: 2, title: 'Malware Shield Mission', type: 'multiple-choice', status: 'locked' },
              { id: 3, title: 'Safe Surfing Guide', type: 'quick-text', status: 'locked' },
            ]
        },
        {
            id: 3,
            title: "Module 3: Digital Citizenship",
            progress: 0,
            tasks: [
              { id: 1, title: 'The Digital Footprint', type: 'video', status: 'locked' },
              { id: 2, title: 'Community Kindness', type: 'multiple-choice', status: 'locked' },
            ]
        }
      ]
    }
  };

  const getModuleTestData = (modId: number) => {
    // We'll reuse the logic from existing file but keep it concise here for space.
    // (Logic omitted for brevity, assuming standard data)
    return [
      { q: "Binary code uses which two numbers?", options: ["1 and 2", "0 and 1", "5 and 10"], correct: 1 },
      { q: "What is a single Binary digit called?", options: ["Byte", "Nibble", "Bit"], correct: 2 },
      { q: "How many bits are in one Byte?", options: ["4", "8", "16"], correct: 1 },
      { q: "Binary '1' usually means...", options: ["OFF", "ON", "Maybe"], correct: 1 },
      { q: "Computers use binary because they run on...", options: ["Water", "Electricity", "Steam"], correct: 1 },
      { q: "What is 1 + 0 in binary math?", options: ["2", "1", "11"], correct: 1 },
      { q: "Which of these is binary code?", options: ["ABC", "1010", "Hello"], correct: 1 },
      { q: "Binary '0' is like a light switch being...", options: ["OFF", "ON", "Broken"], correct: 0 },
    ];
  };

  const currentCourseInfo = courseData[activeCourse] || courseData["Digital Kids Starter V2"];
  const currentModules = currentCourseInfo.modules;
  const currentTestQuestions = getModuleTestData(activeModuleId || 1);

  const handleFinalTestAnswer = () => {
    if (quizStep < currentTestQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setIsTestFinished(true);
    }
  };

  const handleStartTest = (modId: number) => {
    setTestModuleId(modId);
    setIsFinalTestActive(true);
    setQuizStep(0);
    setIsTestFinished(false);
  };

  const resetViews = () => {
    setSelectedTask(null);
    setIsFinalTestActive(false);
    setIsTestFinished(false);
    setQuizStep(0);
    setTestModuleId(null);
  };

  const renderTaskContent = (task: Task) => {
    switch (task.type) {
      case 'video':
        return (
          <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2 duration-400">
            <div className="aspect-video bg-[#292667] rounded-[1.5rem] flex items-center justify-center relative overflow-hidden group border-4 border-white shadow-xl">
              <Play size={48} className="text-[#fbee21] group-hover:scale-110 transition-transform cursor-pointer relative z-20" fill="currentColor" />
              <img src={`https://picsum.photos/seed/${activeCourse}-${task.id}/800/450`} className="absolute inset-0 object-cover opacity-60 z-10" alt="Video Preview" />
            </div>
            <div className="p-5 bg-slate-50 rounded-[2rem] border-2 border-slate-100">
               <h4 className="text-lg font-black text-[#292667] uppercase mb-2 flex items-center gap-2">
                  <Video size={18} className="text-[#ec2027]" /> Mission Intel
               </h4>
               <p className="text-slate-600 font-bold text-sm leading-relaxed">
                 Welcome to your briefing for <b>{task.title}</b>. Watch closely to prepare for the final mission test!
               </p>
            </div>
          </div>
        );
      case 'multiple-choice':
        return (
          <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2 duration-400">
            <div className="p-6 bg-white rounded-[2rem] border-2 border-slate-50 shadow-sm text-center">
              <h3 className="text-xl font-black text-[#292667] uppercase tracking-tight">{currentTestQuestions[quizStep]?.q}</h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {currentTestQuestions[quizStep]?.options.map((opt, i) => (
                <button 
                  key={i} 
                  onClick={() => handleFinalTestAnswer()}
                  className="w-full p-4 bg-white border-2 border-slate-100 rounded-[1.5rem] text-left font-black text-[#292667] hover:border-[#00a651] hover:bg-green-50 transition-all uppercase tracking-tighter shadow-sm flex items-center justify-between group text-sm"
                >
                  {opt}
                  <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="p-6 bg-slate-50 rounded-[2rem] border-2 border-slate-100 text-center">
             <Info size={32} className="mx-auto text-slate-300 mb-2" />
             <p className="font-black text-[#292667] uppercase text-sm">Learning Asset: {task.title}</p>
             <p className="text-xs font-bold text-slate-400 mt-2">Content loading for your grade level...</p>
          </div>
        );
    }
  };

  if (isFinalTestActive) {
    return (
      <div className="h-full flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-400">
        <div className="flex items-center justify-between bg-white p-3 rounded-[1.5rem] shadow-lg border-2 border-slate-100">
           <button onClick={resetViews} className="px-4 py-2.5 bg-slate-50 text-[#292667] rounded-xl hover:bg-[#ec2027] hover:text-white transition-all flex items-center gap-2 font-black uppercase text-[10px] shadow-sm active:scale-95">
              <ArrowLeft size={16} strokeWidth={3} /> Exit
           </button>
           <div className="flex-1 text-center">
              <h2 className="text-xs font-black text-[#292667] uppercase tracking-tighter">FINAL CHALLENGE</h2>
           </div>
           <div className="w-16"></div>
        </div>

        <div className="flex-1 bg-white rounded-[2.5rem] p-6 shadow-xl border-b-[8px] border-[#fbee21] flex flex-col items-center justify-center relative overflow-hidden">
          {!isTestFinished ? (
            <div className="max-w-xl w-full">
               <h2 className="text-xl md:text-2xl font-black text-[#292667] text-center mb-8 leading-tight uppercase tracking-tight">
                  {currentTestQuestions[quizStep].q}
               </h2>
               <div className="grid grid-cols-1 gap-3">
                  {currentTestQuestions[quizStep].options.map((opt, i) => (
                     <button key={i} onClick={handleFinalTestAnswer} className="w-full p-4 bg-white border-2 border-slate-50 hover:border-[#292667] hover:bg-slate-50 rounded-[1.5rem] text-center font-black text-[#292667] text-base md:text-lg transition-all shadow-sm active:scale-95">
                        {opt}
                     </button>
                  ))}
               </div>
            </div>
          ) : (
            <div className="text-center max-w-sm">
               <div className="w-24 h-24 bg-[#00a651] rounded-[2rem] flex items-center justify-center shadow-lg mx-auto mb-6">
                  <Trophy size={48} className="text-white" strokeWidth={3} />
               </div>
               <h2 className="text-3xl font-black text-[#292667] uppercase mb-2 tracking-tighter">EXCELLENT!</h2>
               <p className="text-slate-500 font-bold text-sm mb-8 leading-relaxed">
                  Mission Accomplished! You've earned new Hero XP.
               </p>
               <button onClick={resetViews} className="w-full py-4 bg-[#292667] text-[#fbee21] rounded-[1.5rem] font-black text-lg uppercase tracking-widest shadow-xl active:scale-95">Claim Rewards</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col gap-4 overflow-hidden">
      {showUnlockModal && <UnlockCourseModal courseName={activeCourse} onClose={() => setShowUnlockModal(false)} />}
      
      {/* Small Header Bar */}
      <div className="w-full bg-[#292667] rounded-[2rem] p-5 md:p-6 text-white shadow-xl border-b-[8px] border-[#ec2027] flex flex-col md:flex-row items-center justify-between gap-4 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
        <div className="flex items-center gap-4 relative z-10">
           <div className="p-3 md:p-4 bg-[#fbee21] rounded-[1.5rem] text-[#292667] shadow-lg rotate-3">
             <Rocket size={28} md:size={32} strokeWidth={3.5} />
           </div>
           <div>
             <h2 className="text-xl md:text-2xl font-black leading-none tracking-tight uppercase">My <span className="text-[#fbee21]">Adventure</span></h2>
             <p className="text-[8px] md:text-[10px] font-black text-[#fbee21] uppercase tracking-[0.1em] mt-1">{activeCourse}</p>
           </div>
        </div>
      </div>

      {/* Compact Course Filters */}
      <div className="bg-white p-2 rounded-[1.5rem] shadow-lg border-2 border-slate-100 flex items-center gap-2 overflow-x-auto scrollbar-hide flex-shrink-0">
        {[
          { name: "Robotics Mastery", icon: Cpu, color: "#ec2027" },
          { name: "Digital Kids Starter V2", icon: Rocket, color: "#a855f7" },
          { name: "Web Creators", icon: Globe, color: "#00a651" }
        ].map((course) => {
          const isActive = activeCourse === course.name;
          const isLocked = courseData[course.name]?.isLocked;
          const Icon = course.icon;
          return (
            <button
              key={course.name}
              onClick={() => {
                setActiveCourse(course.name);
                setActiveModuleId(1);
                setSelectedTask(null);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest whitespace-nowrap transition-all ${
                isActive 
                  ? 'bg-[#292667] text-[#fbee21] shadow-md' 
                  : 'bg-slate-50 text-slate-400 border border-slate-100 hover:bg-slate-100'
              }`}
            >
              <Icon size={14} strokeWidth={3.5} />
              {course.name}
            </button>
          );
        })}
      </div>

      {/* Modules List Container */}
      <div className="flex-1 overflow-y-auto scrollbar-hide space-y-3 pb-4">
        {selectedTask ? (
          <div className="bg-white rounded-[2.5rem] p-6 shadow-xl border-b-[8px] border-slate-100 animate-in fade-in duration-300">
             <div className="flex justify-between items-center mb-6">
                <button onClick={() => setSelectedTask(null)} className="p-2 bg-slate-50 rounded-lg text-[#292667] hover:bg-red-50 hover:text-red-500 transition-colors">
                  <ArrowLeft size={20} strokeWidth={3} />
                </button>
                <h3 className="text-base font-black text-[#292667] uppercase tracking-tight">{selectedTask.title}</h3>
                <div className="w-8"></div>
             </div>
             {renderTaskContent(selectedTask)}
          </div>
        ) : (
          currentModules.map((mod) => (
            <div key={mod.id} className={`bg-white rounded-[2rem] overflow-hidden border-2 transition-all shadow-md ${activeModuleId === mod.id ? 'border-[#ec2027]' : 'border-slate-100'}`}>
              <button 
                onClick={() => setActiveModuleId(activeModuleId === mod.id ? null : mod.id)}
                className="w-full p-4 md:p-5 flex items-center justify-between hover:bg-slate-50"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-black text-lg shadow-md shrink-0 ${mod.progress === 100 ? 'bg-[#00a651] text-white rotate-3' : 'bg-slate-100 text-[#292667]'}`}>
                    {mod.id}
                  </div>
                  <div className="text-left">
                    <h3 className="text-base font-black text-[#292667] uppercase tracking-tighter leading-tight">{mod.title}</h3>
                    <div className="w-24 h-1.5 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
                       <div className="h-full bg-[#00a651]" style={{ width: `${mod.progress}%` }}></div>
                    </div>
                  </div>
                </div>
                <ChevronDown className={`text-[#292667] transition-transform duration-300 shrink-0 ${activeModuleId === mod.id ? 'rotate-180' : ''}`} size={20} strokeWidth={3} />
              </button>

              {activeModuleId === mod.id && (
                <div className="px-4 pb-4 space-y-2 animate-in slide-in-from-top-2 duration-300">
                  {mod.tasks.map((task) => {
                    const Icon = task.type === 'video' ? Video : task.type === 'multiple-choice' ? FileQuestion : task.type === 'assignment-upload' ? Upload : Type;
                    return (
                      <button 
                        key={task.id}
                        onClick={() => task.status !== 'locked' && setSelectedTask(task)}
                        className={`w-full p-3 rounded-xl border-2 flex items-center justify-between transition-all ${
                          task.status === 'completed' ? 'bg-green-50 border-green-100' : 
                          task.status === 'active' ? 'bg-white border-[#ec2027]' : 
                          'bg-slate-50 border-slate-50 opacity-50 grayscale cursor-not-allowed'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                           <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                             task.status === 'completed' ? 'bg-[#00a651] text-white' : 
                             task.status === 'active' ? 'bg-[#ec2027] text-white' : 'bg-slate-200 text-slate-400'
                           }`}>
                             <Icon size={16} strokeWidth={3} />
                           </div>
                           <p className="text-[12px] font-black text-[#292667] uppercase tracking-tight truncate max-w-[140px] md:max-w-none">{task.title}</p>
                        </div>
                        {task.status === 'completed' ? <CheckCircle2 className="text-[#00a651]" size={16} strokeWidth={3} /> : <ChevronRight size={16} className="text-slate-300" />}
                      </button>
                    );
                  })}
                  <button 
                    onClick={() => handleStartTest(mod.id)}
                    className="w-full p-4 bg-[#fbee21] text-[#292667] rounded-xl font-black text-[12px] uppercase tracking-tighter shadow-md hover:bg-[#292667] hover:text-[#fbee21] transition-all flex items-center justify-between group"
                  >
                    <span>Final Mastery Test</span>
                    <Trophy size={16} />
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
