
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
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#292667]/70 backdrop-blur-md animate-in fade-in duration-300">
    <div className="bg-white rounded-[4rem] p-10 max-w-xl w-full shadow-2xl border-t-[16px] border-[#f43f5e] relative animate-in zoom-in-95 duration-300">
      <button onClick={onClose} className="absolute top-8 right-8 p-3 text-slate-300 hover:text-[#f43f5e] transition-colors bg-slate-50 rounded-2xl">
        <X size={24} strokeWidth={4} />
      </button>

      <div className="text-center mb-10">
         <div className="w-24 h-24 bg-[#f43f5e] rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 shadow-2xl rotate-6">
            <Rocket size={48} className="text-white" strokeWidth={3} />
         </div>
         <h3 className="text-3xl font-black text-[#292667] uppercase tracking-tighter mb-2">Unlock {courseName}</h3>
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
            Unlock with 2000 <Star className="fill-[#fbee21] text-[#fbee21]" size={20} strokeWidth={0} />
         </button>
         <button onClick={onClose} className="w-full py-4 text-slate-300 font-black uppercase text-xs tracking-widest hover:text-[#292667] transition-all">
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

  // Sync state if prop changes from external sources
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
    // Robotics Mastery Quizzes
    const roboticsM1 = [
        { q: "What does an ultrasonic sensor measure?", options: ["Temperature", "Distance", "Color"], correct: 1 },
        { q: "Which part of a robot is like its muscles?", options: ["Logic Gates", "Sensors", "Motors"], correct: 2 },
        { q: "A 'Servo' motor allows for...", options: ["Only full rotations", "Specific degree movement", "Faster spinning"], correct: 1 },
        { q: "What is an IR Sensor?", options: ["Infrared Sensor", "Ice Robot", "Inside Radio"], correct: 0 },
        { q: "Which motor is best for precision wheels?", options: ["DC Motor", "Stepper Motor", "Vibration Motor"], correct: 1 },
        { q: "Sensors are considered as...", options: ["Outputs", "Inputs", "Batteries"], correct: 1 },
        { q: "Torque is a measure of...", options: ["Speed", "Turning Force", "Color"], correct: 1 },
        { q: "The 'Frame' of the robot provides...", options: ["Brains", "Structure", "Energy"], correct: 1 },
    ];
    const roboticsM2 = [
        { q: "What is a Breadboard used for?", options: ["Baking", "Prototyping Circuits", "Saving Data"], correct: 1 },
        { q: "A complete circuit must have a...", options: ["Sensor", "Closed Loop", "Plastic Case"], correct: 1 },
        { q: "What does a Resistor do?", options: ["Increases current", "Limits current flow", "Stores energy"], correct: 1 },
        { q: "The short leg of an LED is...", options: ["Positive", "Negative", "Neutral"], correct: 1 },
        { q: "Voltage is measured in...", options: ["Amps", "Watts", "Volts"], correct: 2 },
        { q: "An Open Circuit means the device is...", options: ["Working", "Broken/OFF", "Too Fast"], correct: 1 },
        { q: "Which tool measures electricity?", options: ["Multimeter", "Thermometer", "Ruler"], correct: 0 },
        { q: "Ground (GND) is usually colored...", options: ["Red", "Blue", "Black"], correct: 2 },
    ];
    const roboticsM3 = [
        { q: "What is an 'If-Then' statement?", options: ["A loop", "A conditional", "A variable"], correct: 1 },
        { q: "The 'Brain' of our robot is the...", options: ["Motor", "Microcontroller", "Wheel"], correct: 1 },
        { q: "What is a Loop?", options: ["A repeating action", "A type of wire", "A circle sensor"], correct: 0 },
        { q: "Variables are used to...", options: ["Stop the robot", "Store data values", "Connect wires"], correct: 1 },
        { q: "Debugging means...", options: ["Finding bugs in a room", "Fixing code errors", "Cleaning a bot"], correct: 1 },
        { q: "Algorithm is a fancy word for...", options: ["Math", "Set of instructions", "A robot's name"], correct: 1 },
        { q: "Binary logic uses...", options: ["1 and 0", "A to Z", "Red and Blue"], correct: 0 },
        { q: "Code is uploaded using a...", options: ["Battery", "USB Cable", "Sound Wave"], correct: 1 },
    ];

    // Digital Kids Quizzes
    const digitalKidsM1 = [
        { q: "Binary code uses which two numbers?", options: ["1 and 2", "0 and 1", "5 and 10"], correct: 1 },
        { q: "What is a single Binary digit called?", options: ["Byte", "Nibble", "Bit"], correct: 2 },
        { q: "How many bits are in one Byte?", options: ["4", "8", "16"], correct: 1 },
        { q: "Binary '1' usually means...", options: ["OFF", "ON", "Maybe"], correct: 1 },
        { q: "Computers use binary because they run on...", options: ["Water", "Electricity", "Steam"], correct: 1 },
        { q: "What is 1 + 0 in binary math?", options: ["2", "1", "11"], correct: 1 },
        { q: "Which of these is binary code?", options: ["ABC", "1010", "Hello"], correct: 1 },
        { q: "Binary '0' is like a light switch being...", options: ["OFF", "ON", "Broken"], correct: 0 },
    ];
    const digitalKidsM2 = [
        { q: "What is a 'Computer Virus'?", options: ["A germ", "Malicious code", "A broken fan"], correct: 1 },
        { q: "Should you share your real address online?", options: ["Yes", "Only with friends", "No, Never"], correct: 2 },
        { q: "What is a 'Cyber Bully'?", options: ["Mean person online", "Fast computer", "A game boss"], correct: 0 },
        { q: "If someone is mean to you online...", options: ["Mean back", "Tell an adult", "Keep it secret"], correct: 1 },
        { q: "A 'Malware' is like a...", options: ["Digital Virus", "Cool Website", "New Mouse"], correct: 0 },
        { q: "Internet 'Safety' means...", options: ["Gaming all day", "Protecting info", "Eating cookies"], correct: 1 },
        { q: "Public Wi-Fi is...", options: ["Always safe", "Risky sometimes", "Ice cream"], correct: 1 },
        { q: "Your 'Digital Footprint' is...", options: ["Shoe list", "Online trail", "Robot feet"], correct: 1 },
    ];
    const digitalKidsM3 = [
        { q: "A good Digital Citizen is...", options: ["Mean", "Helpful and Respectful", "Always silent"], correct: 1 },
        { q: "Cyber etiquette means...", options: ["Using all caps", "Being polite online", "Spamming chats"], correct: 1 },
        { q: "True or False: The internet forgets everything.", options: ["True", "False", "Only on Sundays"], correct: 1 },
        { q: "Copyright protects...", options: ["The computer", "Creators' work", "Batteries"], correct: 1 },
        { q: "Plagiarism means...", options: ["Planting seeds", "Stealing ideas/words", "Playing games"], correct: 1 },
        { q: "A reliable website has...", options: ["Cool colors", "Accurate info", "Lots of ads"], correct: 1 },
        { q: "Before posting a photo, you should...", options: ["Edit it", "Ask permission", "Close your eyes"], correct: 1 },
        { q: "Passwords should be...", options: ["1234", "Private and complex", "Your pet's name"], correct: 1 },
    ];

    // Web Creators Quizzes
    const webM1 = [
        { q: "HTML stands for...", options: ["HyperText Markup Language", "Home Tool Markup", "High Text Mail"], correct: 0 },
        { q: "Which tag is for a large heading?", options: ["<p>", "<h1>", "<a>"], correct: 1 },
        { q: "The body of a webpage contains...", options: ["The title only", "The visible content", "The invisible code"], correct: 1 },
        { q: "Which tag creates a link?", options: ["<img>", "<a>", "<li>"], correct: 1 },
        { q: "HTML tags usually come in...", options: ["Threes", "Pairs (Open/Close)", "Singles"], correct: 1 },
        { q: "Where does the page title go?", options: ["In the <body>", "In the <head>", "In a <div>"], correct: 1 },
        { q: "Which tag is for a paragraph?", options: ["<par>", "<p>", "<div>"], correct: 1 },
        { q: "A web browser...", options: ["Makes websites", "Reads HTML and displays it", "Deletes pages"], correct: 1 },
    ];
    const webM2 = [
        { q: "CSS is used for...", options: ["Math", "Styling and Layout", "Server Logic"], correct: 1 },
        { q: "What does 'Cascade' mean in CSS?", options: ["Waterfalls", "Rules flow down", "Big Fonts"], correct: 1 },
        { q: "Which property changes text color?", options: ["font-color", "color", "text-style"], correct: 1 },
        { q: "Padding is the space...", options: ["Outside an element", "Inside an element", "Between lines"], correct: 1 },
        { q: "Which CSS value centers text?", options: ["text-align: middle", "text-align: center", "margin: auto"], correct: 1 },
        { q: "Selectors are used to...", options: ["Target HTML elements", "Choose a font", "Delete code"], correct: 0 },
        { q: "The 'Box Model' includes...", options: ["Only images", "Padding, Border, Margin", "Calculators"], correct: 1 },
        { q: "Internal CSS goes in which tag?", options: ["<css>", "<style>", "<link>"], correct: 1 },
    ];

    const courseTests: Record<string, any> = {
        "Robotics Mastery": [roboticsM1, roboticsM2, roboticsM3],
        "Digital Kids Starter V2": [digitalKidsM1, digitalKidsM2, digitalKidsM3],
        "Web Creators": [webM1, webM2]
    };

    const tests = courseTests[activeCourse] || [digitalKidsM1];
    return tests[modId - 1] || digitalKidsM1;
  };

  const currentCourseInfo = courseData[activeCourse] || courseData["Digital Kids Starter V2"];
  const currentModules = currentCourseInfo.modules;
  const currentTestQuestions = testModuleId ? getModuleTestData(testModuleId) : (selectedTask?.type === 'multiple-choice' ? getModuleTestData(activeModuleId || 1) : []);

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
          <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="aspect-video bg-[#292667] rounded-[2rem] flex items-center justify-center relative overflow-hidden group border-4 md:border-8 border-white shadow-2xl">
              <Play size={80} className="text-[#fbee21] group-hover:scale-110 transition-transform cursor-pointer relative z-20" fill="currentColor" />
              <img src={`https://picsum.photos/seed/${activeCourse}-${task.id}/800/450`} className="absolute inset-0 object-cover opacity-60 z-10" alt="Video Preview" />
            </div>
            <div className="p-8 bg-slate-50 rounded-[3rem] border-2 border-slate-100">
               <h4 className="text-xl font-black text-[#292667] uppercase mb-3 flex items-center gap-3">
                  <Video className="text-[#ec2027]" /> Mission Intel: {task.title}
               </h4>
               <p className="text-slate-600 font-bold text-base leading-relaxed">
                 Welcome to your briefing for <b>{activeCourse}</b>. This video mission covers 
                 the core principles of <b>{task.title}</b>. Watch closely to prepare for the final mission test!
               </p>
            </div>
          </div>
        );
      case 'multiple-choice':
        return (
          <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-black uppercase text-slate-400 tracking-widest">Training Drill {quizStep + 1} of {currentTestQuestions.length}</span>
              <div className="flex gap-1">
                {currentTestQuestions.map((_, i) => <div key={i} className={`h-2 flex-1 rounded-full ${i <= quizStep ? 'bg-[#00a651]' : 'bg-slate-100'}`} />)}
              </div>
            </div>
            <div className="p-8 bg-white rounded-[3rem] border-4 border-slate-50 shadow-sm mb-4">
              <h3 className="text-2xl font-black text-[#292667] uppercase tracking-tight">{currentTestQuestions[quizStep]?.q || "Mission Analysis in Progress..."}</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {currentTestQuestions[quizStep]?.options.map((opt, i) => (
                <button 
                  key={i} 
                  onClick={() => handleFinalTestAnswer()}
                  className="w-full p-6 bg-white border-4 border-slate-100 rounded-[2rem] text-left font-black text-[#292667] hover:border-[#00a651] hover:bg-green-50 transition-all uppercase tracking-tighter shadow-sm flex items-center justify-between group"
                >
                  {opt}
                  <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        );
      case 'assignment-upload':
        return (
          <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-8 bg-slate-50 rounded-[3rem] border-2 border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-white rounded-2xl shadow-sm text-[#ec2027]">
                  <Upload size={32} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-[#292667] uppercase tracking-tight">{task.title}</h4>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Assignment Objective</p>
                </div>
              </div>
              <p className="text-slate-600 font-bold text-base leading-relaxed mb-8">
                Ready to show off your skills? For this project, download the assets below, 
                complete the task, and upload your final creation for grading!
              </p>

              <div className="space-y-4">
                <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Mission Files</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 bg-white rounded-[2rem] border-2 border-slate-100 flex items-center justify-between group hover:border-[#3b82f6] transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-50 text-blue-500 rounded-xl group-hover:scale-110 transition-transform"><FileText size={24} /></div>
                      <div>
                        <p className="font-black text-[#292667] text-sm uppercase">Mission_Kit.pdf</p>
                        <p className="text-[10px] font-bold text-slate-400">PDF • 1.4 MB</p>
                      </div>
                    </div>
                    <button className="p-3 bg-slate-50 text-slate-400 hover:bg-[#3b82f6] hover:text-white rounded-xl transition-all shadow-sm">
                      <Download size={20} />
                    </button>
                  </div>
                  <div className="p-6 bg-white rounded-[2rem] border-2 border-slate-100 flex items-center justify-between group hover:border-[#00a651] transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-50 text-[#00a651] rounded-xl group-hover:scale-110 transition-transform"><Sparkles size={24} /></div>
                      <div>
                        <p className="font-black text-[#292667] text-sm uppercase">Creative_Assets.zip</p>
                        <p className="text-[10px] font-bold text-slate-400">ZIP • 12 MB</p>
                      </div>
                    </div>
                    <button className="p-3 bg-slate-50 text-slate-400 hover:bg-[#00a651] hover:text-white rounded-xl transition-all shadow-sm">
                      <Download size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 border-4 border-dashed border-slate-100 rounded-[3rem] text-center flex flex-col items-center justify-center hover:bg-slate-50 transition-all cursor-pointer group">
              <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-[2rem] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:text-[#ec2027] transition-all">
                <Upload size={40} strokeWidth={3} />
              </div>
              <h4 className="text-xl font-black text-[#292667] uppercase tracking-tight mb-2">Upload Mission Report</h4>
              <p className="text-sm font-bold text-slate-400">Drag & drop or click to browse files</p>
            </div>
          </div>
        );
      case 'quick-text':
        return (
          <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-10 bg-[#fbee21]/10 rounded-[4rem] border-4 border-[#fbee21]/30 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10 text-[#292667]"><Info size={120} /></div>
               <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="p-4 bg-white rounded-2xl shadow-sm text-[#292667]">
                    <Type size={32} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-[#292667] uppercase tracking-tight">{task.title}</h4>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Curriculum Notes</p>
                  </div>
               </div>
               
               <div className="space-y-6 relative z-10">
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-[2.5rem] shadow-sm">
                     <h5 className="text-lg font-black text-[#292667] uppercase mb-4 flex items-center gap-2">
                        <ListChecks className="text-[#00a651]" size={20} /> Essential Learning
                     </h5>
                     <ul className="space-y-4">
                        {[
                          "The core fundamentals of the current mission module.",
                          "Critical terminology used by professional engineers.",
                          "Safety and ethics guidelines for digital citizens."
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-4 text-slate-700 font-bold leading-relaxed">
                             <div className="w-6 h-6 bg-[#00a651] text-white rounded-full flex items-center justify-center text-[10px] shrink-0 mt-0.5">{idx + 1}</div>
                             {item}
                          </li>
                        ))}
                     </ul>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-[2.5rem] shadow-sm">
                     <h5 className="text-lg font-black text-[#292667] uppercase mb-4 flex items-center gap-2">
                        <Star className="text-amber-500 fill-amber-500" size={20} /> Hero Insights
                     </h5>
                     <p className="text-slate-600 font-bold leading-relaxed">
                        Remember to always verify your source data! Great heroes are not only skilled but also 
                        careful and respectful. In this module, the focus is on mastering the basics so you 
                        can handle more complex logic later.
                     </p>
                  </div>
               </div>
            </div>

            <button className="flex justify-between items-center p-8 bg-[#292667] text-[#fbee21] rounded-[2.5rem] border-b-8 border-black/20 hover:bg-slate-800 transition-all active:scale-95 group">
               <div className="text-left">
                  <h5 className="text-sm font-black uppercase">Download Printable Study Notes</h5>
                  <p className="text-xs font-bold opacity-60">Master Module {activeModuleId} with ease!</p>
               </div>
               <Download size={32} strokeWidth={3} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        );
      default:
        return (
          <div className="text-center py-20 opacity-40">
             <Trophy size={64} className="mx-auto text-slate-200 mb-4" />
             <p className="font-black text-slate-400 uppercase tracking-widest">Data Stream Loading...</p>
          </div>
        );
    }
  };

  if (isFinalTestActive && currentTestQuestions.length > 0) {
    const progressPercent = ((quizStep + 1) / currentTestQuestions.length) * 100;
    
    return (
      <div className="h-full flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-500">
        <div className="flex items-center justify-between bg-white p-6 rounded-[2.5rem] shadow-xl border-2 border-slate-100">
           <button onClick={resetViews} className="px-6 py-4 bg-slate-50 text-[#292667] rounded-2xl hover:bg-[#ec2027] hover:text-white transition-all flex items-center gap-3 font-black uppercase text-xs shadow-sm active:scale-95">
              <ArrowLeft size={20} strokeWidth={3} /> Exit Test
           </button>
           <div className="flex-1 text-center">
              <h2 className="text-xl font-black text-[#292667] uppercase tracking-tighter">Module {testModuleId} FINAL CHALLENGE</h2>
              <div className="flex items-center justify-center gap-2 mt-1">
                <div className="w-48 h-2 bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full bg-[#fbee21] transition-all duration-300" style={{ width: `${progressPercent}%` }}></div>
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase">{quizStep + 1} / {currentTestQuestions.length}</span>
              </div>
           </div>
           <div className="w-32"></div>
        </div>

        <div className="flex-1 bg-white rounded-[3rem] p-10 shadow-2xl border-b-[12px] border-[#fbee21] flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-[#292667] pointer-events-none">
            <BrainCircuit size={160} />
          </div>

          {!isTestFinished ? (
            <div className="max-w-2xl w-full relative z-10">
               <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="p-3 bg-amber-50 rounded-2xl text-amber-500 shadow-sm"><FileQuestion size={32} strokeWidth={3} /></div>
                  <span className="text-xs font-black text-slate-300 uppercase tracking-[0.2em]">MISSION QUESTION {quizStep + 1}</span>
               </div>
               <h2 className="text-3xl font-black text-[#292667] text-center mb-10 leading-tight uppercase tracking-tight">
                  {currentTestQuestions[quizStep].q}
               </h2>
               <div className="grid grid-cols-1 gap-4">
                  {currentTestQuestions[quizStep].options.map((opt, i) => (
                     <button key={i} onClick={handleFinalTestAnswer} className="w-full p-6 bg-white border-4 border-slate-50 hover:border-[#292667] hover:bg-slate-50 rounded-[2.5rem] text-center font-black text-[#292667] text-xl transition-all shadow-md hover:shadow-xl active:scale-95">
                        {opt}
                     </button>
                  ))}
               </div>
            </div>
          ) : (
            <div className="text-center max-w-lg animate-in zoom-in-90 duration-700 relative z-10">
               <div className="relative inline-block mb-10">
                  <div className="w-40 h-40 bg-[#00a651] rounded-[4rem] flex items-center justify-center shadow-2xl rotate-6 animate-bounce">
                     <Trophy size={80} className="text-white" strokeWidth={3} />
                  </div>
                  <div className="absolute -top-6 -right-6"><Sparkles size={64} className="text-[#fbee21]" /></div>
               </div>
               <h2 className="text-5xl font-black text-[#292667] uppercase mb-4 tracking-tighter">EXCELLENT!</h2>
               <p className="text-slate-500 font-bold text-lg mb-10 leading-relaxed">
                  You successfully navigated the <b>Module {testModuleId}</b> Mastery Mission! 
                  Your efforts have earned you new Hero XP.
               </p>
               <div className="flex items-center justify-center gap-6 mb-10">
                  <div className="px-6 py-3 bg-amber-50 rounded-2xl border-2 border-amber-200">
                    <p className="text-[10px] font-black text-amber-600 uppercase mb-1">XP AWARDED</p>
                    <p className="text-2xl font-black text-amber-700">+1200</p>
                  </div>
                  <div className="px-6 py-3 bg-blue-50 rounded-2xl border-2 border-blue-200">
                    <p className="text-[10px] font-black text-blue-600 uppercase mb-1">STAR REWARD</p>
                    <p className="text-2xl font-black text-blue-700">+500</p>
                  </div>
               </div>
               <button onClick={resetViews} className="w-full py-6 bg-[#292667] text-[#fbee21] rounded-[2.5rem] font-black text-xl uppercase tracking-widest shadow-2xl hover:bg-[#00a651] transition-all border-b-8 border-black/20">Claim Rewards</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (selectedTask) {
    return (
      <div className="h-full flex flex-col gap-6 overflow-hidden">
        <div className="flex items-center justify-between bg-white p-6 rounded-[2.5rem] shadow-xl border-2 border-slate-100">
           <button onClick={resetViews} className="px-6 py-4 bg-slate-50 text-[#292667] rounded-2xl hover:bg-[#ec2027] hover:text-white transition-all flex items-center gap-3 font-black uppercase text-xs shadow-sm active:scale-95">
              <ArrowLeft size={20} strokeWidth={3} /> Back to Adventure
           </button>
           <h2 className="text-xl font-black text-[#292667] uppercase tracking-tighter truncate">{selectedTask.title}</h2>
           <div className="flex items-center gap-2 px-6 py-3 bg-amber-50 rounded-full border-2 border-amber-200 shadow-sm">
              <Star size={18} className="text-amber-500 fill-amber-500" />
              <span className="text-xs font-black text-amber-700 uppercase">100 STARS</span>
           </div>
        </div>
        <div className="flex-1 bg-white rounded-[3rem] p-10 shadow-2xl border-b-[12px] border-slate-100 overflow-y-auto scrollbar-hide">
           {renderTaskContent(selectedTask)}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col gap-6">
      {showUnlockModal && <UnlockCourseModal courseName={activeCourse} onClose={() => setShowUnlockModal(false)} />}
      
      {/* Header Bar */}
      <div className="w-full bg-[#292667] rounded-[3rem] p-8 text-white shadow-2xl border-b-[12px] border-[#ec2027] flex flex-col md:flex-row items-center justify-between gap-8 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
        <div className="flex items-center gap-6 relative z-10">
           <div className="p-5 bg-[#fbee21] rounded-[2.5rem] text-[#292667] shadow-xl rotate-3">
             <Rocket size={42} strokeWidth={3.5} />
           </div>
           <div>
             <h2 className="text-4xl font-black leading-none tracking-tight uppercase">My <span className="text-[#fbee21]">Adventure</span></h2>
             <p className="text-[12px] font-black text-[#fbee21] uppercase tracking-[0.15em] mt-3">{activeCourse}</p>
           </div>
        </div>
      </div>

      {/* Course Sub-Tabs */}
      <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
        <div className="flex-1 bg-white p-3 rounded-[2.5rem] shadow-xl border-2 border-slate-100 flex items-center gap-4 overflow-x-auto scrollbar-hide">
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
                }}
                className={`flex items-center gap-3 px-6 py-4 rounded-[1.8rem] font-black text-xs uppercase tracking-widest whitespace-nowrap transition-all border-b-6 active:scale-95 ${
                  isActive 
                    ? 'bg-[#292667] text-[#fbee21] border-[#000]/20 shadow-lg scale-105' 
                    : 'bg-slate-50 text-slate-400 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className={`p-1.5 rounded-lg ${isActive ? 'bg-[#fbee21] text-[#292667]' : 'bg-slate-200 text-slate-400'}`}>
                  {isLocked ? <Lock size={18} strokeWidth={3.5} /> : <Icon size={18} strokeWidth={3.5} />}
                </div>
                {course.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Modules List or Locked State */}
      <div className="flex-1 overflow-y-auto scrollbar-hide space-y-6 pb-6 relative">
        {currentCourseInfo.isLocked ? (
          <div className="h-full flex items-center justify-center p-12">
             <div className="bg-white rounded-[4rem] p-12 border-2 border-slate-100 shadow-2xl text-center max-w-2xl w-full flex flex-col items-center">
                <div className="w-32 h-32 bg-slate-50 text-[#f43f5e] rounded-[3rem] flex items-center justify-center mb-8 shadow-inner">
                   <Lock size={64} strokeWidth={3} />
                </div>
                <h3 className="text-4xl font-black text-[#292667] uppercase tracking-tighter mb-4">Course Locked!</h3>
                <p className="text-slate-400 font-bold text-lg mb-10 leading-relaxed">
                   You need to unlock the <b>{activeCourse}</b> path to begin your missions. 
                   Complete your current quests or use Stars to unlock this adventure!
                </p>
                <button 
                  onClick={() => setShowUnlockModal(true)}
                  className="w-full py-6 bg-[#f43f5e] text-white rounded-[2.5rem] font-black text-xl uppercase tracking-widest shadow-2xl hover:bg-[#292667] transition-all border-b-8 border-black/20"
                >
                   Unlock Course Path
                </button>
             </div>
          </div>
        ) : (
          currentModules.map((mod) => (
            <div key={mod.id} className={`bg-white rounded-[3rem] overflow-hidden border-2 transition-all shadow-xl ${activeModuleId === mod.id ? 'border-[#ec2027]' : 'border-slate-100 hover:border-[#fbee21]'}`}>
              <button 
                onClick={() => setActiveModuleId(activeModuleId === mod.id ? null : mod.id)}
                className="w-full p-8 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-[1.8rem] flex items-center justify-center font-black text-2xl shadow-lg transition-transform ${mod.progress === 100 ? 'bg-[#00a651] text-white rotate-6' : 'bg-slate-100 text-[#292667]'}`}>
                    {mod.id}
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-black text-[#292667] uppercase tracking-tighter leading-tight">{mod.title}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="w-32 h-3 bg-slate-100 rounded-full overflow-hidden">
                         <div className="h-full bg-[#00a651]" style={{ width: `${mod.progress}%` }}></div>
                      </div>
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{mod.progress}% Done</span>
                    </div>
                  </div>
                </div>
                <ChevronDown className={`text-[#292667] transition-transform duration-300 ${activeModuleId === mod.id ? 'rotate-180' : ''}`} size={32} strokeWidth={3} />
              </button>

              {activeModuleId === mod.id && (
                <div className="p-8 pt-0 space-y-4 animate-in slide-in-from-top-4 duration-300">
                  <div className="h-0.5 bg-slate-100 w-full mb-6"></div>
                  {mod.tasks.map((task) => {
                    const Icon = task.type === 'video' ? Video : task.type === 'multiple-choice' ? FileQuestion : task.type === 'assignment-upload' ? Upload : Type;
                    return (
                      <button 
                        key={task.id}
                        onClick={() => task.status !== 'locked' && setSelectedTask(task)}
                        className={`w-full p-6 rounded-[2rem] border-4 flex items-center justify-between transition-all group shadow-sm hover:shadow-md ${
                          task.status === 'completed' ? 'bg-green-50 border-green-100' : 
                          task.status === 'active' ? 'bg-white border-[#ec2027] scale-[1.02]' : 
                          'bg-slate-50 border-slate-100 opacity-60 grayscale'
                        }`}
                      >
                        <div className="flex items-center gap-5">
                           <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md ${
                             task.status === 'completed' ? 'bg-[#00a651] text-white' : 
                             task.status === 'active' ? 'bg-[#ec2027] text-white' : 'bg-slate-200 text-slate-400'
                           }`}>
                             <Icon size={24} strokeWidth={3} />
                           </div>
                           <div className="text-left">
                             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Mission Part {task.id}</p>
                             <h4 className="text-lg font-black text-[#292667] uppercase tracking-tight">{task.title}</h4>
                           </div>
                        </div>
                        {task.status === 'completed' ? <CheckCircle2 className="text-[#00a651]" size={28} strokeWidth={3} /> : 
                         task.status === 'active' ? <ChevronRight className="text-[#ec2027] group-hover:translate-x-2 transition-transform" size={28} strokeWidth={3} /> : 
                         <Lock className="text-slate-300" size={24} />}
                      </button>
                    );
                  })}

                  <div className="mt-8">
                     <button 
                       onClick={() => handleStartTest(mod.id)}
                       className="w-full p-8 bg-[#fbee21] text-[#292667] rounded-[3rem] border-b-[10px] border-[#292667]/20 flex items-center justify-between group transition-all hover:bg-[#292667] hover:text-[#fbee21] shadow-xl"
                     >
                        <div className="flex items-center gap-6">
                           <div className="w-16 h-16 bg-[#292667] text-[#fbee21] rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-[#fbee21] group-hover:text-[#292667] transition-all rotate-3">
                              <ShieldAlert size={32} strokeWidth={3.5} />
                           </div>
                           <div className="text-left">
                              <h4 className="text-2xl font-black uppercase tracking-tighter leading-tight">Mastery Mission {mod.id}</h4>
                              <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Final Test: 8 Mastery Questions</p>
                           </div>
                        </div>
                        <ChevronRight size={40} strokeWidth={4} className="group-hover:translate-x-2 transition-transform" />
                     </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
