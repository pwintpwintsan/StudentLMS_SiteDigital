
import React, { useState, useEffect } from 'react';
import { 
  Rocket, Play, CheckCircle2, Lock, 
  Trophy, ChevronDown, ChevronRight, 
  Video, FileQuestion, Upload, Type, ArrowLeft, Star, Sparkles,
  Cpu, Globe, Zap, X, BrainCircuit, ShieldAlert, FileText, Download, ListChecks, Info,
  Mail,
  AlertCircle,
  Plus,
  ChevronDown as ChevronDownSmall
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
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#292667]/70 backdrop-blur-md animate-in fade-in duration-300">
    <div className="bg-white rounded-[3rem] p-10 max-w-lg w-full shadow-2xl border-t-[16px] border-[#ec2027] relative animate-in zoom-in-95 duration-300">
      <button onClick={onClose} className="absolute top-6 right-6 p-3 text-slate-300 hover:text-[#ec2027] transition-colors bg-slate-50 rounded-2xl">
        <X size={24} strokeWidth={4} />
      </button>

      <div className="text-center mb-8">
         <div className="w-24 h-24 bg-[#fbee21] rounded-[2rem] flex items-center justify-center mx-auto mb-6 rotate-6 shadow-xl border-4 border-white">
            <Mail size={42} className="text-[#292667]" strokeWidth={3} />
         </div>
         <h3 className="text-3xl font-black text-[#292667] uppercase tracking-tighter mb-4">Course Locked!</h3>
         <p className="text-slate-500 font-bold text-base leading-relaxed max-w-xs mx-auto">
            To unlock <span className="text-[#ec2027] font-black underline decoration-2">{courseName}</span>, please ask your teacher or contact the <span className="text-[#292667] font-black">Main Center Admin</span>.
         </p>
      </div>

      <div className="p-6 bg-slate-50 rounded-[2.5rem] border-2 border-slate-100 flex items-center gap-6 mb-10">
         <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#ec2027] shadow-sm shrink-0 border border-slate-100">
            <AlertCircle size={32} />
         </div>
         <div>
            <p className="font-black text-[#292667] uppercase text-sm">Main Center Access</p>
            <p className="text-xs font-bold text-slate-400">Request activation for your Hero ID</p>
         </div>
      </div>

      <div className="flex flex-col gap-4">
         <a 
           href="mailto:admin@ubookstore.com"
           className="w-full py-6 bg-[#292667] text-[#fbee21] rounded-[2rem] font-black text-xl uppercase tracking-widest shadow-xl hover:bg-[#ec2027] hover:text-white transition-all border-b-8 border-black/20 flex items-center justify-center gap-4"
         >
            Email Admin
         </a>
         <button onClick={onClose} className="w-full py-3 text-slate-400 font-black uppercase text-xs tracking-widest hover:text-[#292667] transition-all">
            Go Back
         </button>
      </div>
    </div>
  </div>
);

const AddMoreCoursesModal = ({ onClose }: { onClose: () => void }) => {
  const [selectedCourse, setSelectedCourse] = useState('AI For Heroes');
  const availableCourses = ['AI For Heroes', 'Game Architecture', 'Advanced Python', 'Mobile App Hero'];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#292667]/70 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white rounded-[3rem] p-10 max-w-lg w-full shadow-2xl border-t-[16px] border-[#00a651] relative animate-in zoom-in-95 duration-300">
        <button onClick={onClose} className="absolute top-6 right-6 p-3 text-slate-300 hover:text-[#00a651] transition-colors bg-slate-50 rounded-2xl">
          <X size={24} strokeWidth={4} />
        </button>

        <div className="text-center mb-8">
           <div className="w-24 h-24 bg-[#00a651] rounded-[2rem] flex items-center justify-center mx-auto mb-6 rotate-6 shadow-xl border-4 border-white">
              <Plus size={48} className="text-white" strokeWidth={4} />
           </div>
           <h3 className="text-3xl font-black text-[#292667] uppercase tracking-tighter mb-4">Add New Course</h3>
           <p className="text-slate-500 font-bold text-base leading-relaxed max-w-xs mx-auto mb-6">
              Pick a new adventure from the list below!
           </p>

           <div className="relative group mb-8">
              <select 
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full p-5 bg-slate-50 border-4 border-slate-100 rounded-2xl font-black text-[#292667] uppercase tracking-tighter appearance-none cursor-pointer focus:border-[#00a651] transition-all outline-none"
              >
                {availableCourses.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <ChevronDownSmall className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-[#00a651] transition-colors" size={24} strokeWidth={3} />
           </div>
        </div>

        <div className="p-6 bg-slate-50 rounded-[2rem] border-2 border-slate-100 flex items-center gap-6 mb-8">
           <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#292667] shadow-sm shrink-0 border border-slate-100">
              <Info size={24} strokeWidth={3} />
           </div>
           <p className="text-[10px] font-black text-[#292667] uppercase tracking-widest leading-relaxed">
             Once you pick a course, we'll notify the <span className="text-[#00a651]">Main Center</span> to activate your access!
           </p>
        </div>

        <div className="flex flex-col gap-4">
           <button 
             onClick={() => {
                alert(`Requesting ${selectedCourse}... Contacting Main Center!`);
                onClose();
             }}
             className="w-full py-6 bg-[#00a651] text-white rounded-[2rem] font-black text-xl uppercase tracking-widest shadow-xl hover:bg-[#292667] hover:text-[#fbee21] transition-all border-b-8 border-black/20 flex items-center justify-center gap-4"
           >
              Request Access
           </button>
           <button onClick={onClose} className="w-full py-3 text-slate-400 font-black uppercase text-xs tracking-widest hover:text-[#292667] transition-all">
              Nevermind
           </button>
        </div>
      </div>
    </div>
  );
};

export const StudentLearningView: React.FC<StudentLearningViewProps> = ({ selectedCourse }) => {
  const [activeCourse, setActiveCourse] = useState(selectedCourse);
  const [activeModuleId, setActiveModuleId] = useState<number | null>(1);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isFinalTestActive, setIsFinalTestActive] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [isTestFinished, setIsTestFinished] = useState(false);
  const [showUnlockModal, setShowUnlockModal] = useState(false);
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const [lockedCourseAttempt, setLockedCourseAttempt] = useState<string>('');
  const [testModuleId, setTestModuleId] = useState<number | null>(null);

  // Moved courseData to state to handle dynamic completion
  const [courseData, setCourseData] = useState<Record<string, { modules: Module[], isLocked: boolean }>>({
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
          progress: 20, // Starting at 20%
          tasks: [
            { id: 1, title: 'Breadboard Basics', type: 'video', status: 'completed' },
            { id: 2, title: 'Circuit Challenge', type: 'multiple-choice', status: 'active' },
            { id: 3, title: 'Resistance Rulebook', type: 'quick-text', status: 'locked' },
            { id: 4, title: 'Project: Light-Up Bot', type: 'assignment-upload', status: 'locked' },
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
        }
      ]
    }
  });

  useEffect(() => {
    setActiveCourse(selectedCourse);
  }, [selectedCourse]);

  const getModuleTestData = (modId: number) => {
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

  const completeActiveTask = () => {
    if (!selectedTask || !activeModuleId) return;

    setCourseData(prev => {
      const updated = { ...prev };
      const course = updated[activeCourse];
      if (!course) return prev;

      const moduleIdx = course.modules.findIndex(m => m.id === activeModuleId);
      if (moduleIdx === -1) return prev;

      const module = course.modules[moduleIdx];
      const taskIdx = module.tasks.findIndex(t => t.id === selectedTask.id);
      if (taskIdx === -1) return prev;

      // Mark the current task as completed
      module.tasks[taskIdx].status = 'completed';

      // Unlock the next task if available
      if (taskIdx + 1 < module.tasks.length) {
        module.tasks[taskIdx + 1].status = 'active';
      }

      // Update module progress
      const completedCount = module.tasks.filter(t => t.status === 'completed').length;
      module.progress = Math.round((completedCount / module.tasks.length) * 100);

      return updated;
    });
  };

  const handleQuizAnswer = () => {
    if (quizStep < currentTestQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setIsTestFinished(true);
      // If we are doing a specific task quiz (not the final mastery test)
      if (selectedTask) {
        completeActiveTask();
      }
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
          <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-2 duration-400">
            <div className="aspect-video bg-[#292667] rounded-[2rem] flex items-center justify-center relative overflow-hidden group border-4 border-white shadow-xl">
              <Play size={56} className="text-[#fbee21] group-hover:scale-110 transition-transform cursor-pointer relative z-20" fill="currentColor" />
              <img src={`https://picsum.photos/seed/${activeCourse}-${task.id}/800/450`} className="absolute inset-0 object-cover opacity-60 z-10" alt="Video Preview" />
            </div>
            <div className="p-6 md:p-8 bg-slate-50 rounded-[2.5rem] border-2 border-slate-100">
               <h4 className="text-xl font-black text-[#292667] uppercase mb-3 flex items-center gap-3">
                  <Video size={24} className="text-[#ec2027]" /> Mission Intel
               </h4>
               <p className="text-slate-600 font-bold text-base leading-relaxed">
                 Welcome to your briefing for <b>Task {task.id}: {task.title}</b>. Watch closely to prepare for the final mission test!
               </p>
               {task.status !== 'completed' && (
                 <button 
                  onClick={() => { completeActiveTask(); setSelectedTask(null); }}
                  className="mt-6 px-8 py-4 bg-[#00a651] text-white rounded-2xl font-black uppercase tracking-widest text-xs border-b-4 border-black/10 active:scale-95"
                 >
                   Mark as Watched
                 </button>
               )}
            </div>
          </div>
        );
      case 'multiple-choice':
        return (
          <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-bottom-2 duration-400">
            {!isTestFinished ? (
              <>
                <div className="p-8 bg-white rounded-[2.5rem] border-2 border-slate-50 shadow-sm text-center">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Question {quizStep + 1} of {currentTestQuestions.length}</p>
                  <h3 className="text-2xl font-black text-[#292667] uppercase tracking-tight leading-snug">{currentTestQuestions[quizStep]?.q}</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {currentTestQuestions[quizStep]?.options.map((opt, i) => (
                    <button 
                      key={i} 
                      onClick={() => handleQuizAnswer()}
                      className="w-full p-6 md:p-7 bg-white border-2 border-slate-100 rounded-[2.2rem] text-left font-black text-[#292667] hover:border-[#00a651] hover:bg-green-50 transition-all uppercase tracking-tighter shadow-sm flex items-center justify-between group text-lg md:text-xl"
                    >
                      {opt}
                      <ChevronRight size={24} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" strokeWidth={4} />
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center p-10 bg-white rounded-[3rem] border-2 border-slate-50 shadow-sm flex flex-col items-center">
                <div className="w-20 h-20 bg-[#00a651] rounded-[1.5rem] flex items-center justify-center text-white mb-6 shadow-lg rotate-3">
                  <CheckCircle2 size={40} strokeWidth={3} />
                </div>
                <h3 className="text-3xl font-black text-[#292667] uppercase mb-2">TASK COMPLETE!</h3>
                <p className="text-slate-500 font-bold mb-8">You mastered the {task.title} challenge!</p>
                <button 
                  onClick={() => setSelectedTask(null)}
                  className="px-10 py-5 bg-[#292667] text-[#fbee21] rounded-2xl font-black uppercase tracking-widest border-b-6 border-black/20 active:scale-95"
                >
                  Return to Module
                </button>
              </div>
            )}
          </div>
        );
      default:
        return (
          <div className="p-8 bg-slate-50 rounded-[2.5rem] border-2 border-slate-100 text-center">
             <Info size={40} className="mx-auto text-slate-300 mb-3" />
             <p className="font-black text-[#292667] uppercase text-base">Learning Asset: {task.title}</p>
             <p className="text-sm font-bold text-slate-400 mt-2">Content loading for your grade level...</p>
             <button 
                onClick={() => { completeActiveTask(); setSelectedTask(null); }}
                className="mt-6 px-8 py-4 bg-[#00a651] text-white rounded-2xl font-black uppercase tracking-widest text-xs border-b-4 border-black/10 active:scale-95"
              >
                Complete Mission
              </button>
          </div>
        );
    }
  };

  if (isFinalTestActive) {
    return (
      <div className="h-full flex flex-col gap-5 animate-in fade-in zoom-in-95 duration-400">
        <div className="flex items-center justify-between bg-white p-4 rounded-[2rem] shadow-lg border-2 border-slate-100">
           <button onClick={resetViews} className="px-6 py-4 bg-slate-50 text-[#292667] rounded-2xl hover:bg-[#ec2027] hover:text-white transition-all flex items-center gap-3 font-black uppercase text-xs shadow-sm active:scale-95 border-b-4 border-black/10">
              <ArrowLeft size={20} strokeWidth={4} /> Exit Mission
           </button>
           <div className="flex-1 text-center">
              <h2 className="text-base font-black text-[#292667] uppercase tracking-widest">FINAL CHALLENGE</h2>
           </div>
           <div className="w-24"></div>
        </div>

        <div className="flex-1 bg-white rounded-[3rem] p-10 shadow-xl border-b-[12px] border-[#fbee21] flex flex-col items-center justify-center relative overflow-hidden">
          {!isTestFinished ? (
            <div className="max-w-2xl w-full">
               <h2 className="text-2xl md:text-3xl font-black text-[#292667] text-center mb-10 leading-tight uppercase tracking-tight">
                  {currentTestQuestions[quizStep].q}
               </h2>
               <div className="grid grid-cols-1 gap-4">
                  {currentTestQuestions[quizStep].options.map((opt, i) => (
                     <button key={i} onClick={handleQuizAnswer} className="w-full p-6 bg-white border-2 border-slate-100 hover:border-[#292667] hover:bg-slate-50 rounded-[2rem] text-center font-black text-[#292667] text-lg md:text-xl transition-all shadow-md active:scale-95 border-b-6 border-black/5">
                        {opt}
                     </button>
                  ))}
               </div>
            </div>
          ) : (
            <div className="text-center max-w-sm">
               <div className="w-28 h-28 bg-[#00a651] rounded-[2.5rem] flex items-center justify-center shadow-lg mx-auto mb-8">
                  <Trophy size={56} className="text-white" strokeWidth={3} />
               </div>
               <h2 className="text-4xl font-black text-[#292667] uppercase mb-3 tracking-tighter">EXCELLENT!</h2>
               <p className="text-slate-500 font-bold text-base mb-10 leading-relaxed">
                  Mission Accomplished! You've earned new Hero XP.
               </p>
               <button onClick={resetViews} className="w-full py-6 bg-[#292667] text-[#fbee21] rounded-[2rem] font-black text-xl uppercase tracking-widest shadow-xl active:scale-95 border-b-8 border-black/20">Claim Rewards</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col gap-5 overflow-hidden">
      {showUnlockModal && <UnlockCourseModal courseName={lockedCourseAttempt} onClose={() => setShowUnlockModal(false)} />}
      {showAddCourseModal && <AddMoreCoursesModal onClose={() => setShowAddCourseModal(false)} />}
      
      <div className="w-full bg-[#292667] rounded-[2.5rem] p-6 md:p-8 text-white shadow-xl border-b-[10px] border-[#ec2027] flex flex-col md:flex-row items-center justify-between gap-5 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
        <div className="flex items-center gap-6 relative z-10">
           <div className="p-4 md:p-5 bg-[#fbee21] rounded-[2rem] text-[#292667] shadow-lg rotate-3">
             <Rocket size={36} md:size={40} strokeWidth={3.5} />
           </div>
           <div>
             <h2 className="text-2xl md:text-3xl font-black leading-none tracking-tight uppercase">My <span className="text-[#fbee21]">Adventure</span></h2>
             <p className="text-[9px] md:text-[11px] font-black text-[#fbee21] uppercase tracking-[0.15em] mt-2">{activeCourse}</p>
           </div>
        </div>
      </div>

      <div className="bg-white p-3 rounded-[2rem] shadow-lg border-2 border-slate-100 flex items-center gap-3 overflow-x-auto scrollbar-hide flex-shrink-0">
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
                if (isLocked) {
                  setLockedCourseAttempt(course.name);
                  setShowUnlockModal(true);
                  return;
                }
                setActiveCourse(course.name);
                setActiveModuleId(1);
                setSelectedTask(null);
                setIsTestFinished(false);
                setQuizStep(0);
              }}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest whitespace-nowrap transition-all group ${
                isActive 
                  ? 'bg-[#292667] text-[#fbee21] shadow-md scale-102 border-b-4 border-black/10' 
                  : 'bg-slate-50 text-slate-400 border border-slate-100 hover:bg-slate-100 hover:text-[#292667]'
              }`}
            >
              {isLocked ? (
                <Lock size={18} strokeWidth={3.5} className="text-[#ec2027]" />
              ) : (
                <Icon size={18} strokeWidth={3.5} />
              )}
              {course.name}
            </button>
          );
        })}
        {/* Plus Button Beside Web Creators */}
        <button 
          onClick={() => setShowAddCourseModal(true)}
          className="flex items-center justify-center p-4 rounded-2xl bg-slate-100 text-[#00a651] border-2 border-dashed border-[#00a651]/30 hover:bg-[#00a651] hover:text-white transition-all shadow-sm active:scale-90 flex-shrink-0"
          title="Add More Courses"
        >
          <Plus size={20} strokeWidth={4} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide space-y-4 pb-6">
        {selectedTask ? (
          <div className="bg-white rounded-[3rem] p-8 shadow-xl border-b-[10px] border-slate-100 animate-in fade-in duration-300">
             <div className="flex justify-between items-center mb-8">
                <button onClick={() => setSelectedTask(null)} className="p-4 bg-slate-50 rounded-2xl text-[#292667] hover:bg-red-50 hover:text-red-500 transition-colors border-2 border-slate-100">
                  <ArrowLeft size={24} strokeWidth={4} />
                </button>
                <h3 className="text-xl font-black text-[#292667] uppercase tracking-tight">Task {selectedTask.id}: {selectedTask.title}</h3>
                <div className="w-12"></div>
             </div>
             {renderTaskContent(selectedTask)}
          </div>
        ) : (
          currentModules.map((mod) => (
            <div key={mod.id} className={`bg-white rounded-[2.5rem] overflow-hidden border-2 transition-all shadow-md ${activeModuleId === mod.id ? 'border-[#ec2027]' : 'border-slate-100'}`}>
              <button 
                onClick={() => setActiveModuleId(activeModuleId === mod.id ? null : mod.id)}
                className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-slate-50"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center font-black text-2xl shadow-md shrink-0 ${mod.progress === 100 ? 'bg-[#00a651] text-white rotate-3' : 'bg-slate-100 text-[#292667]'}`}>
                    {mod.id}
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl md:text-2xl font-black text-[#292667] uppercase tracking-tighter leading-tight">{mod.title}</h3>
                    <div className="flex items-center gap-4 mt-3">
                      <div className="w-40 h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner border-2 border-white">
                         <div className="h-full bg-[#00a651] transition-all duration-1000" style={{ width: `${mod.progress}%` }}></div>
                      </div>
                      <span className="text-[12px] font-black text-[#00a651] uppercase tracking-widest whitespace-nowrap">
                         Digital {mod.progress}%
                      </span>
                    </div>
                  </div>
                </div>
                <ChevronDown className={`text-[#292667] transition-transform duration-300 shrink-0 ${activeModuleId === mod.id ? 'rotate-180' : ''}`} size={28} strokeWidth={4} />
              </button>

              {activeModuleId === mod.id && (
                <div className="px-6 pb-6 md:px-8 md:pb-10 space-y-4 animate-in slide-in-from-top-2 duration-300">
                  {mod.tasks.map((task, index) => {
                    const Icon = task.type === 'video' ? Video : task.type === 'multiple-choice' ? FileQuestion : task.type === 'assignment-upload' ? Upload : Type;
                    return (
                      <button 
                        key={task.id}
                        onClick={() => task.status !== 'locked' && setSelectedTask(task)}
                        className={`w-full p-5 md:p-6 rounded-[1.8rem] border-2 flex items-center justify-between transition-all ${
                          task.status === 'completed' ? 'bg-green-50 border-green-100' : 
                          task.status === 'active' ? 'bg-white border-[#ec2027] shadow-sm' : 
                          'bg-slate-50 border-slate-50 opacity-50 grayscale cursor-not-allowed'
                        }`}
                      >
                        <div className="flex items-center gap-5">
                           <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                             task.status === 'completed' ? 'bg-[#00a651] text-white' : 
                             task.status === 'active' ? 'bg-[#ec2027] text-white' : 'bg-slate-200 text-slate-400'
                           }`}>
                             <Icon size={24} md:size={26} strokeWidth={3} />
                           </div>
                           <p className="text-[14px] md:text-lg font-black text-[#292667] uppercase tracking-tight truncate max-w-[180px] md:max-w-none">
                              Task {index + 1}: {task.title}
                           </p>
                        </div>
                        {task.status === 'completed' ? <CheckCircle2 className="text-[#00a651]" size={24} strokeWidth={4} /> : <ChevronRight size={24} className="text-slate-300" strokeWidth={3} />}
                      </button>
                    );
                  })}
                  <button 
                    onClick={() => handleStartTest(mod.id)}
                    className="w-full p-6 md:p-7 bg-[#fbee21] text-[#292667] rounded-[2rem] font-black text-base md:text-lg uppercase tracking-widest shadow-lg hover:bg-[#292667] hover:text-[#fbee21] transition-all flex items-center justify-between group active:scale-95 border-b-8 border-black/20"
                  >
                    <span>Final Mastery Mission</span>
                    <Trophy size={32} className="group-hover:rotate-12 transition-transform" />
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
