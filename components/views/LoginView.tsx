
import React, { useState } from 'react';
import { 
  Rocket, Sparkles, ArrowRight, 
  User, Lock, Cloud, Star, Heart, HelpCircle, 
  Brain, Zap, Trophy, BookOpen
} from 'lucide-react';
import { UBookLogo } from '../Header';

interface LoginViewProps {
  onLogin: (username: string, id: string) => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentId && password.length >= 4) {
      setIsAnimating(true);
      // We simulate choosing a default course since the list is gone
      setTimeout(() => onLogin(studentId, 'Digital Kids Starter V2'), 600);
    }
  };

  return (
    <div className="min-h-screen w-full bg-playful-pattern flex flex-col p-4 md:p-6 lg:p-8 relative overflow-hidden font-sans">
      {/* Floating Background Icons */}
      <Cloud className="absolute top-10 left-10 text-white drop-shadow-md opacity-60 animate-pulse" size={100} />
      <Star className="absolute top-1/4 right-1/4 text-[#fbee21] drop-shadow-md animate-spin" size={40} style={{ animationDuration: '8s' }} />
      <Heart className="absolute bottom-1/4 left-1/4 text-[#ec2027] opacity-20" size={50} />
      <Rocket className="absolute -bottom-10 right-20 text-[#292667] opacity-10 -rotate-45" size={200} />

      {/* Big Title Section */}
      <div className="w-full text-center mb-8 mt-4 relative z-10 animate-in fade-in slide-in-from-top-4 duration-700">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-[#292667] drop-shadow-[0_4px_0_rgba(0,0,0,0.1)] uppercase">
          <span className="text-[#ec2027]">U</span> BOOK STORE
        </h1>
        <div className="flex items-center justify-center gap-2 mt-2">
            <div className="h-1.5 w-16 bg-[#00a651] rounded-full"></div>
            <p className="text-sm md:text-lg font-black text-[#292667] uppercase tracking-[0.4em]">Adventure Portal</p>
            <div className="h-1.5 w-16 bg-[#ec2027] rounded-full"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col lg:flex-row gap-10 items-center justify-center transition-all duration-700 relative z-10">
        
        {/* Left Section: Mission Briefing (Replaces Course List) */}
        <div className="flex-[1.2] w-full flex flex-col min-h-0 animate-in slide-in-from-left-8 duration-700">
          <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border-[10px] border-[#00a651] shadow-[0_12px_0_#065f46] relative overflow-hidden">
            <div className="absolute -top-10 -right-10 opacity-5 rotate-12">
                <Brain size={250} className="text-[#00a651]" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#fbee21] rounded-2xl border-4 border-[#292667] shadow-lg -rotate-3">
                  <Rocket size={32} className="text-[#292667]" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-[#292667] uppercase tracking-tighter">Your Mission Briefing</h2>
              </div>

              <div className="space-y-6 text-lg md:text-2xl font-black text-[#292667] leading-tight">
                <p>Welcome to <span className="text-[#ec2027]">U Book Store</span>, the ultimate destination for future technology heroes!</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start gap-4 p-5 bg-[#fffbeb] rounded-[2rem] border-4 border-[#fbee21] shadow-sm">
                    <Zap className="text-[#ec2027] shrink-0" size={32} />
                    <p className="text-sm md:text-base leading-snug">Uncover the secrets of <span className="text-[#00a651]">Binary Code</span> and logic gates!</p>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-sky-50 rounded-[2rem] border-4 border-sky-200 shadow-sm">
                    <Trophy className="text-[#292667] shrink-0" size={32} />
                    <p className="text-sm md:text-base leading-snug">Level up your skills and earn <span className="text-[#ec2027]">Mastery Stars</span>!</p>
                  </div>
                </div>

                <p className="pt-4 text-sm md:text-xl text-slate-500 italic">
                  "The most exciting way to learn Robotics, AI, and Coding starts right here. Grab your badge and enter the portal below!"
                </p>
              </div>

              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white shadow-md overflow-hidden bg-[#fbee21]">
                      <img src={`https://api.dicebear.com/7.x/adventurer/svg?seed=Avatar${i}&backgroundColor=fbee21`} alt="Hero" />
                    </div>
                  ))}
                </div>
                <p className="text-xs md:text-sm font-black text-[#00a651] uppercase tracking-widest">Join 500+ Active Heroes!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Login Card with Navy Thick Borders */}
        <div className="w-full lg:w-[420px] flex flex-col justify-center shrink-0 animate-in slide-in-from-right-8 duration-700">
          <div className="bg-white rounded-[4rem] p-10 md:p-14 shadow-[0_16px_0_#1a1740] border-[8px] border-[#292667] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5 rotate-12">
                <BookOpen size={100} className="text-[#292667]" />
            </div>
            
            <div className="text-center mb-10">
              <UBookLogo className="w-32 mb-6 mx-auto hover:scale-110 transition-transform cursor-pointer" />
              <div className="h-2 w-20 bg-[#ec2027] mx-auto rounded-full"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-[#292667] uppercase tracking-widest ml-6">Student ID</label>
                <div className="relative group">
                  <User size={20} className="absolute left-6 top-1/2 -translate-y-1/2 text-[#292667] group-focus-within:text-[#00a651] transition-colors" />
                  <input 
                    type="text" 
                    required
                    placeholder="E.g. 100022"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    className="w-full pl-14 pr-8 py-5 bg-slate-50 border-[4px] border-[#292667] rounded-[2.5rem] font-black text-[#292667] focus:bg-white focus:border-[#00a651] outline-none transition-all placeholder:text-slate-300 text-lg shadow-inner"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-[#292667] uppercase tracking-widest ml-6">Secret Password</label>
                <div className="relative group">
                  <Lock size={20} className="absolute left-6 top-1/2 -translate-y-1/2 text-[#292667] group-focus-within:text-[#ec2027] transition-colors" />
                  <input 
                    type="password" 
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-14 pr-8 py-5 bg-slate-50 border-[4px] border-[#292667] rounded-[2.5rem] font-black text-[#292667] focus:bg-white focus:border-[#ec2027] outline-none transition-all placeholder:text-slate-300 text-lg shadow-inner"
                  />
                </div>
                <div className="text-right px-4 mt-2">
                  <button type="button" className="text-[10px] font-black text-[#ec2027] hover:underline uppercase tracking-widest flex items-center justify-end gap-1 ml-auto">
                    <HelpCircle size={12} /> Forget Secret Code?
                  </button>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  disabled={!studentId || password.length < 4 || isAnimating}
                  className="w-full py-6 bg-[#fbee21] text-[#292667] rounded-[3rem] font-black text-xl uppercase tracking-widest shadow-[0_8px_0_#b39c00] hover:bg-[#ffe500] hover:-translate-y-1 active:translate-y-1 active:shadow-none disabled:opacity-50 disabled:grayscale transition-all flex items-center justify-center gap-4 border-[4px] border-[#292667]"
                >
                  <div className="w-10 h-10 bg-white rounded-xl p-1 shadow-sm border-2 border-[#292667]">
                     <UBookLogo className="w-full h-full" />
                  </div>
                  {isAnimating ? 'Launching...' : 'Start Mission!'} <ArrowRight size={28} strokeWidth={5} className="animate-bounce" />
                </button>
              </div>
            </form>

            <div className="mt-12 flex items-center justify-center gap-8 opacity-20">
               <Star size={20} className="text-[#fbee21] fill-current" />
               <Sparkles size={20} className="text-[#00a651]" />
               <Rocket size={20} className="text-[#ec2027]" />
            </div>
          </div>
          
          <p className="text-center text-[#292667] font-black text-xs mt-8 uppercase tracking-widest">
            Need help? <span className="text-[#00a651] cursor-pointer hover:underline border-b-2 border-[#00a651]">Ask Teacher Jane</span>
          </p>
        </div>
      </div>
    </div>
  );
};
