
import React, { useState, useEffect } from 'react';
import { 
  Play, ChevronDown, ChevronRight, 
  Upload, ArrowLeft, Zap, X, Award, Check, Sparkles, Star
} from 'lucide-react';
import { Module, Task } from '../../types';

interface StudentLearningViewProps {
  selectedCourse: string;
}

// --- Task Content Renderers ---

const VideoTask = ({ content }: { content: any }) => (
  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
    <div className="aspect-video w-full bg-[#292667] rounded-[2.5rem] overflow-hidden relative shadow-[0_12px_0_#1a1740] border-[8px] border-[#292667] group">
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all cursor-pointer">
        <div className="w-20 h-20 bg-[#fbee21] border-[4px] border-[#292667] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
          <Play size={40} className="text-[#292667] fill-current ml-1" />
        </div>
      </div>
      <img src={content?.thumbnail || "https://picsum.photos/seed/video/800/450"} alt="Video Thumbnail" className="w-full h-full object-cover opacity-60" />
    </div>
    <div className="p-6 bg-white rounded-[2rem] border-[6px] border-[#00a651] shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 p-2 opacity-5">
        <Sparkles size={40} className="text-[#00a651]" />
      </div>
      <p className="text-[#292667] font-black leading-relaxed text-sm md:text-base">
        "Mission Objective: Watch carefully to learn how robots use binary code to make smart choices!"
      </p>
    </div>
  </div>
);

const QuizTask = ({ content }: { content: any }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const options = content?.options || ["Logic Unit", "Battery Cell", "Binary Bit", "Memory Stick"];

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4">
      <div className="bg-[#292667] p-8 md:p-12 rounded-[3rem] text-white shadow-[0_16px_0_#1a1740] border-[8px] border-[#ec2027] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
            <Star size={100} className="fill-[#fbee21]" />
        </div>
        <p className="text-[#fbee21] text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-3">Quest Challenge 01</p>
        <h4 className="text-xl md:text-3xl font-black leading-tight uppercase tracking-tight">
          What is the smallest unit of digital intelligence?
        </h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((opt: string, i: number) => (
          <button 
            key={i}
            onClick={() => setSelected(i)}
            className={`p-6 md:p-8 rounded-[2.5rem] border-[6px] text-left transition-all flex items-center gap-6 group ${
              selected === i 
                ? 'bg-[#00a651] border-[#292667] text-white shadow-[0_12px_0_#065f46] scale-[1.02]' 
                : 'bg-white border-[#292667] text-[#292667] hover:bg-[#fffbeb] shadow-[0_8px_0_#1a1740]'
            }`}
          >
            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-[1.2rem] flex items-center justify-center font-black text-xl shrink-0 shadow-md border-[4px] border-[#292667] ${
              selected === i ? 'bg-[#fbee21] text-[#292667]' : 'bg-slate-50 text-[#292667]'
            }`}>
              {String.fromCharCode(65 + i)}
            </div>
            <span className="text-base md:text-xl font-black uppercase tracking-tight leading-none">{opt}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const AssignmentTask = ({ content }: { content: any }) => (
  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
    <div className="p-12 md:p-20 bg-white rounded-[4rem] border-[10px] border-dashed border-[#292667] shadow-inner flex flex-col items-center justify-center text-center">
      <div className="w-24 h-24 bg-[#fbee21] text-[#292667] rounded-[2.5rem] flex items-center justify-center mb-8 shadow-xl border-[4px] border-[#292667] rotate-6">
        <Upload size={48} strokeWidth={5} />
      </div>
      <h4 className="text-2xl md:text-4xl font-black text-[#292667] uppercase mb-3">Mission Upload!</h4>
      <p className="text-slate-500 font-black text-sm md:text-lg mb-8">Click the button to show us your project!</p>
      <button className="px-12 py-5 bg-[#ec2027] text-white rounded-[2rem] font-black uppercase text-lg tracking-widest shadow-[0_10px_0_#991b1b] border-[4px] border-[#292667] active:translate-y-2 active:shadow-none transition-all">
        Send Mission
      </button>
    </div>
  </div>
);

const TextTask = ({ content }: { content: any }) => (
  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
    <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-xl border-[8px] border-[#00a651] relative">
      <div className="absolute top-8 left-8 p-3 bg-[#fbee21] rounded-2xl rotate-12 border-4 border-[#292667]">
          <Star size={32} className="text-[#292667] fill-current" />
      </div>
      <h2 className="text-3xl md:text-5xl font-black text-[#292667] uppercase mb-10 leading-tight text-center">Secret <span className="text-[#ec2027]">Code</span> Guide</h2>
      <div className="space-y-6 text-[#292667] font-black text-lg md:text-2xl leading-relaxed text-center">
        <p>Robots speak using <span className="bg-[#fbee21] px-4 py-1 rounded-[1.2rem] border-4 border-[#292667]">ON</span> and <span className="bg-[#292667] px-4 py-1 rounded-[1.2rem] text-white">OFF</span> signals.</p>
        <p>This is Binary! Just like your bedroom lights!</p>
      </div>
    </div>
  </div>
);

const ResultsModal = ({ task, onClose }: { task: Task, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#292667]/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white rounded-[4rem] w-full max-w-lg shadow-[0_24px_0_rgba(0,0,0,0.2)] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300 border-[10px] border-[#00a651]">
        <div className="bg-[#292667] p-6 text-white flex items-center justify-between border-b-[8px] border-[#ec2027]">
          <h3 className="text-lg font-black uppercase tracking-widest">Victory Results!</h3>
          <button onClick={onClose} className="p-3 hover:bg-white/10 rounded-2xl transition-all"><X size={24} strokeWidth={4} /></button>
        </div>
        <div className="p-12 text-center">
          <div className="w-32 h-32 bg-[#fbee21] text-[#292667] rounded-[3rem] flex items-center justify-center mx-auto mb-8 shadow-2xl border-[6px] border-[#292667] rotate-12">
            <Award size={80} strokeWidth={3} />
          </div>
          <p className="text-7xl font-black text-[#292667] mb-4">95%</p>
          <p className="text-sm font-black text-[#00a651] uppercase tracking-[0.3em] bg-green-50 px-6 py-2 rounded-full inline-block">Grand Master Rank!</p>
          <button onClick={onClose} className="w-full mt-12 py-6 bg-[#fbee21] text-[#292667] rounded-[2.5rem] font-black uppercase text-xl tracking-widest shadow-[0_12px_0_#b39c00] border-[5px] border-[#292667] active:translate-y-2 active:shadow-none transition-all">
            Continue Quest
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
    <div className="h-full flex flex-col gap-6 overflow-hidden">
      {/* Selection Bar with Thick Navy Borders */}
      <div className="bg-white px-6 py-4 rounded-[2.5rem] shadow-[0_8px_0_#1a1740] border-[6px] border-[#292667] flex items-center gap-4 overflow-x-auto scrollbar-hide flex-shrink-0">
        {Object.keys(courseData).map((courseName) => {
          const isActive = activeCourse === courseName;
          return (
            <button
              key={courseName}
              onClick={() => { setActiveCourse(courseName); setActiveModuleId(1); setSelectedTask(null); }}
              className={`px-8 py-4 rounded-[1.5rem] font-black text-sm uppercase tracking-tight whitespace-nowrap transition-all border-[4px] ${
                isActive ? 'bg-[#292667] text-[#fbee21] shadow-lg border-[#fbee21] scale-[1.05]' : 'bg-slate-50 text-[#292667] border-transparent hover:border-[#292667]'
              }`}
            >
              {courseName}
            </button>
          );
        })}
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide space-y-6 pb-8">
        {selectedTask ? (
           <div className="flex flex-col gap-6">
              <div className="bg-white rounded-[3.5rem] p-8 md:p-14 shadow-[0_12px_0_#1a1740] border-[8px] border-[#292667]">
                <div className="flex justify-between items-center mb-10">
                    <button onClick={() => setSelectedTask(null)} className="p-4 bg-[#fbee21] rounded-[1.5rem] border-[4px] border-[#292667] text-[#292667] hover:scale-110 active:scale-90 transition-all shadow-md">
                      <ArrowLeft size={32} strokeWidth={5} />
                    </button>
                    <h3 className="text-xl md:text-3xl font-black text-[#292667] uppercase tracking-tight text-center flex-1 mx-6">{selectedTask.title}</h3>
                    <div className="w-16"></div>
                </div>
                {renderTaskContent()}
                <button 
                  onClick={() => setSelectedTask(null)}
                  className="w-full mt-12 py-6 bg-[#fbee21] text-[#292667] rounded-[2.5rem] font-black uppercase text-xl tracking-widest shadow-[0_12px_0_#b39c00] border-[5px] border-[#292667] active:translate-y-2 active:shadow-none transition-all"
                >
                  Mission Complete!
                </button>
              </div>
           </div>
        ) : (
          currentModules.map((mod) => (
            <div key={mod.id} className={`bg-white rounded-[3rem] overflow-hidden border-[8px] transition-all shadow-[0_12px_0_#1a1740] ${activeModuleId === mod.id ? 'border-[#00a651]' : 'border-[#292667] hover:border-[#ec2027]'}`}>
              <button 
                onClick={() => setActiveModuleId(activeModuleId === mod.id ? null : mod.id)}
                className="w-full p-8 flex items-center justify-between hover:bg-[#fffbeb] transition-colors"
              >
                <div className="flex items-center gap-8">
                  <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center font-black text-2xl border-[5px] border-[#292667] shadow-md rotate-3 ${mod.progress === 100 ? 'bg-[#00a651] text-white' : 'bg-[#fbee21] text-[#292667]'}`}>
                    {mod.id}
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl md:text-2xl font-black text-[#292667] uppercase tracking-tight leading-none">{mod.title}</h3>
                    <div className="mt-3 flex items-center gap-4">
                      <div className="w-32 h-4 bg-slate-100 rounded-full overflow-hidden border-[3px] border-[#292667] shadow-inner">
                        <div className="h-full bg-[#00a651] transition-all duration-1000" style={{ width: `${mod.progress}%` }}></div>
                      </div>
                      <span className="text-xs font-black text-[#00a651] uppercase tracking-[0.2em]">{mod.progress}% Done!</span>
                    </div>
                  </div>
                </div>
                <ChevronDown className={`text-[#292667] transition-transform ${activeModuleId === mod.id ? 'rotate-180' : ''}`} size={32} strokeWidth={5} />
              </button>

              {activeModuleId === mod.id && (
                <div className="p-6 space-y-4 bg-slate-50/50 border-t-[6px] border-[#292667]">
                  {mod.tasks.map((task) => (
                    <div 
                      key={task.id}
                      onClick={() => task.status !== 'locked' && setSelectedTask(task)}
                      className={`p-6 rounded-[2rem] border-[5px] flex items-center justify-between cursor-pointer transition-all hover:-translate-y-1 ${
                        task.status === 'completed' ? 'bg-[#00a651]/5 border-[#00a651] opacity-70' : 
                        task.status === 'active' ? 'bg-white border-[#292667] shadow-[0_6px_0_#1a1740]' : 
                        'bg-slate-200 border-slate-300 opacity-30 grayscale'
                      }`}
                    >
                      <div className="flex items-center gap-6">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md border-[3px] border-[#292667] ${task.status === 'completed' ? 'bg-[#00a651] text-white' : 'bg-[#fbee21] text-[#292667]'}`}>
                           {task.status === 'completed' ? <Check size={28} strokeWidth={5} /> : <Zap size={28} strokeWidth={4} />}
                        </div>
                        <span className="text-sm md:text-lg font-black text-[#292667] uppercase tracking-tight">{task.title}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        {task.status === 'completed' && <Sparkles className="text-[#00a651]" size={20} />}
                        <ChevronRight size={28} className="text-[#292667]" strokeWidth={5} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {viewingResultsFor && <ResultsModal task={viewingResultsFor} onClose={() => setViewingResultsFor(null)} />}
    </div>
  );
};
