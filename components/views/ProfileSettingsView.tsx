
import React, { useState } from 'react';
import { User, Sparkles, ArrowLeft, Camera, Save, Check, X, Shield, Star, Rocket, Lock } from 'lucide-react';
import { Student } from '../../types';

interface ProfileSettingsViewProps {
  student: Student;
  onSave: (student: Student) => void;
  onBack: () => void;
}

export const ProfileSettingsView: React.FC<ProfileSettingsViewProps> = ({ student, onSave, onBack }) => {
  const [formData, setFormData] = useState({
    firstName: student.firstName,
    lastName: student.lastName,
    avatarSeed: student.avatarSeed || 'Buddy'
  });

  const avatarSeeds = [
    'Buddy', 'Lucky', 'Hero', 'Spark', 'Rocket', 'Star', 
    'Avery', 'Leo', 'Milo', 'Luna', 'Cleo', 'Felix'
  ];

  const handleSave = () => {
    onSave({
      ...student,
      avatarSeed: formData.avatarSeed
    });
  };

  return (
    <div className="h-full flex flex-col gap-3 md:gap-5 overflow-hidden">
      {/* UNIVERSAL COMPACT HERO HEADER - Consistent Size */}
      <div className="w-full bg-[#292667] rounded-[1.8rem] md:rounded-[2.2rem] p-4 md:p-6 text-white shadow-lg border-b-[6px] md:border-b-[10px] border-[#fbee21] flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="flex items-center gap-3 md:gap-6 relative z-10 w-full md:w-auto">
           <button onClick={onBack} className="p-2 md:p-3 bg-white/10 rounded-xl md:rounded-[1.2rem] text-white shadow-xl hover:bg-[#ec2027] transition-all group active:scale-90">
             <ArrowLeft size={20} md:size={24} strokeWidth={4} />
           </button>
           <div>
             <h2 className="text-xl md:text-3xl font-black leading-none tracking-tight uppercase">Profile <span className="text-[#fbee21]">Hub</span></h2>
             <p className="text-[9px] md:text-[11px] font-black text-[#fbee21] uppercase tracking-[0.2em] mt-1 md:mt-2">Customize Identity</p>
           </div>
        </div>
        <div className="flex items-center gap-6 md:gap-12 px-6 md:px-10 md:border-l-4 border-white/10 relative z-10">
           <div className="text-center">
              <p className="text-2xl md:text-4xl font-black text-[#fbee21]">{student.stars}</p>
              <p className="text-[9px] md:text-[11px] font-black uppercase text-white/60 tracking-[0.2em] mt-1 md:mt-2">Stars Earned</p>
           </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          
          {/* Left: Avatar Picker */}
          <div className="lg:col-span-5 space-y-4 md:space-y-6">
            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 border-2 border-slate-50 shadow-xl text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-20 md:h-24 bg-[#292667] -mt-10 -rotate-2"></div>
               
               <div className="relative inline-block mb-4 md:mb-6">
                  <div className="w-28 h-28 md:w-40 md:h-40 bg-[#fbee21] rounded-[2.2rem] md:rounded-[2.8rem] flex items-center justify-center rotate-3 shadow-2xl mx-auto border-4 md:border-6 border-white group">
                     <img 
                       src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${formData.avatarSeed}&backgroundColor=fbee21`} 
                       className="w-20 h-20 md:w-28 md:h-28 drop-shadow-xl transition-transform group-hover:scale-110" 
                       alt="Hero Avatar" 
                     />
                     <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 p-1.5 md:p-2 bg-[#ec2027] text-white rounded-lg md:rounded-xl shadow-lg border-2 border-white">
                        <Camera size={14} md:size={18} strokeWidth={3} />
                     </div>
                  </div>
               </div>

               <h3 className="text-lg md:text-xl font-black text-[#292667] uppercase tracking-tight mb-0.5">Pick Your Hero</h3>
               <p className="text-[9px] md:text-[11px] text-slate-400 font-bold mb-6 md:mb-8 uppercase tracking-widest">Select your avatar</p>

               <div className="grid grid-cols-4 gap-2 md:gap-3">
                  {avatarSeeds.map(seed => (
                    <button
                      key={seed}
                      onClick={() => setFormData({...formData, avatarSeed: seed})}
                      className={`aspect-square rounded-xl md:rounded-2xl p-1 md:p-1.5 transition-all hover:scale-105 active:scale-95 border-2 ${
                        formData.avatarSeed === seed ? 'border-[#ec2027] bg-red-50 shadow-md' : 'border-slate-50 bg-slate-50 hover:border-slate-100'
                      }`}
                    >
                      <img 
                        src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}&backgroundColor=fbee21`} 
                        className="w-full h-full"
                        alt={seed}
                      />
                    </button>
                  ))}
               </div>
            </div>
          </div>

          {/* Right: Info Settings - READ ONLY for Name/ID/Level */}
          <div className="lg:col-span-7 space-y-4 md:space-y-6">
            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 border-2 border-slate-50 shadow-xl">
               <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <div className="p-3 bg-blue-50 text-blue-500 rounded-xl md:rounded-2xl">
                    <User size={20} md:size={24} strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-black text-[#292667] uppercase tracking-tight">Identity Info</h3>
                    <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mt-1">Global Learner Profile</p>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                  <div className="space-y-1">
                    <label className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] ml-2 flex items-center gap-1.5">
                        <Lock size={10} /> First Name
                    </label>
                    <div className="w-full px-5 py-3 md:py-4 bg-slate-50 border-2 border-slate-100 rounded-xl md:rounded-[1.5rem] font-black text-[#292667] text-sm md:text-base opacity-70">
                       {student.firstName}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] ml-2 flex items-center gap-1.5">
                        <Lock size={10} /> Last Name
                    </label>
                    <div className="w-full px-5 py-3 md:py-4 bg-slate-50 border-2 border-slate-100 rounded-xl md:rounded-[1.5rem] font-black text-[#292667] text-sm md:text-base opacity-70">
                       {student.lastName}
                    </div>
                  </div>
               </div>

               <div className="p-5 md:p-6 bg-slate-50 rounded-[1.5rem] md:rounded-[2rem] border-2 border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-1">
                    <p className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-1.5">
                        <Lock size={8} /> Hero ID
                    </p>
                    <div className="flex items-center gap-2">
                      <Shield size={12} className="text-[#ec2027]" />
                      <p className="font-mono font-black text-[#292667] text-xs md:text-sm">{student.username}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-1.5">
                        <Lock size={8} /> Adventure Rank
                    </p>
                    <div className="flex items-center gap-2">
                      <Rocket size={12} className="text-[#00a651]" />
                      <p className="font-black text-[#292667] uppercase text-[9px] md:text-[11px]">{student.level}</p>
                    </div>
                  </div>
               </div>
               
               <div className="mt-6 flex items-center gap-2 p-3 bg-amber-50 rounded-xl border border-amber-100">
                  <Sparkles size={14} className="text-amber-500 shrink-0" />
                  <p className="text-[8px] md:text-[9px] font-bold text-amber-700 leading-tight">
                    Name, ID and Level are assigned by your Center Admin. To request changes, please visit the main office.
                  </p>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={onBack}
                className="flex-1 py-3 md:py-4 bg-slate-100 text-slate-400 rounded-xl md:rounded-[1.2rem] font-black text-xs md:text-sm uppercase tracking-widest hover:bg-slate-200 transition-all border-b-4 border-slate-300 active:scale-95"
              >
                Back to Mission
              </button>
              <button 
                onClick={handleSave}
                className="flex-[2] py-4 md:py-5 bg-[#292667] text-[#fbee21] rounded-xl md:rounded-[1.2rem] font-black text-sm md:text-base uppercase tracking-widest shadow-xl hover:bg-[#ec2027] hover:text-white transition-all border-b-6 border-black/20 flex items-center justify-center gap-3 active:scale-95"
              >
                <Save size={18} md:size={20} strokeWidth={3} /> Update Avatar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
