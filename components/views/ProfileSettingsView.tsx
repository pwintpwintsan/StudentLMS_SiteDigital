
import React, { useState } from 'react';
import { User, Sparkles, ArrowLeft, Camera, Save, Check, X, Shield, Star, Rocket } from 'lucide-react';
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
      firstName: formData.firstName,
      lastName: formData.lastName,
      avatarSeed: formData.avatarSeed
    });
  };

  return (
    <div className="h-full flex flex-col gap-4 md:gap-6 overflow-hidden">
      {/* Header Bar */}
      <div className="w-full bg-[#292667] rounded-[2rem] md:rounded-[3rem] p-5 md:p-8 text-white shadow-2xl border-b-[8px] md:border-b-[12px] border-[#fbee21] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 flex-shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-white/5 rounded-full -mr-20 -mt-20 md:-mr-24 md:-mt-24 blur-3xl"></div>
        
        <div className="flex items-center gap-4 md:gap-6 relative z-10 w-full md:w-auto">
           <button onClick={onBack} className="p-3 md:p-5 bg-white/10 rounded-2xl md:rounded-[2rem] text-white shadow-xl hover:bg-[#ec2027] transition-all group active:scale-90">
             <ArrowLeft size={24} md:size={42} strokeWidth={4} />
           </button>
           <div className="flex-1">
             <h2 className="text-2xl md:text-4xl font-black leading-none tracking-tight uppercase">Profile <span className="text-[#fbee21]">Hub</span></h2>
             <p className="text-[10px] md:text-[12px] font-black text-[#fbee21] uppercase tracking-[0.15em] mt-1 md:mt-3">Customize Identity</p>
           </div>
        </div>

        <div className="flex items-center gap-6 md:gap-12 px-6 md:px-10 md:border-l-4 border-white/10 relative z-10">
           <div className="text-center">
              <p className="text-2xl md:text-5xl font-black text-[#fbee21]">{student.stars}</p>
              <p className="text-[9px] md:text-[11px] font-black uppercase text-white/60 tracking-[0.2em] mt-1 md:mt-2">Stars</p>
           </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8">
          
          {/* Left: Avatar Picker */}
          <div className="lg:col-span-5 space-y-4 md:space-y-8">
            <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-10 border-4 border-slate-50 shadow-xl text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-[#292667] -mt-12 md:-mt-16 -rotate-2"></div>
               
               <div className="relative inline-block mb-4 md:mb-8">
                  <div className="w-32 h-32 md:w-48 md:h-48 bg-[#fbee21] rounded-[2.5rem] md:rounded-[3.5rem] flex items-center justify-center rotate-3 shadow-2xl mx-auto border-4 md:border-8 border-white group">
                     <img 
                       src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${formData.avatarSeed}&backgroundColor=fbee21`} 
                       className="w-24 h-24 md:w-36 md:h-36 drop-shadow-xl transition-transform group-hover:scale-110" 
                       alt="Hero Avatar" 
                     />
                     <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 p-2 md:p-4 bg-[#ec2027] text-white rounded-lg md:rounded-2xl shadow-lg border-2 md:border-4 border-white">
                        <Camera size={18} md:size={24} strokeWidth={3} />
                     </div>
                  </div>
               </div>

               <h3 className="text-xl md:text-2xl font-black text-[#292667] uppercase tracking-tight mb-1 md:mb-2">Pick Your Hero</h3>
               <p className="text-slate-400 font-bold text-xs mb-6 md:mb-10 uppercase tracking-widest">Select your avatar</p>

               <div className="grid grid-cols-4 gap-2 md:gap-4">
                  {avatarSeeds.map(seed => (
                    <button
                      key={seed}
                      onClick={() => setFormData({...formData, avatarSeed: seed})}
                      className={`aspect-square rounded-xl md:rounded-2xl p-1 md:p-2 transition-all hover:scale-105 active:scale-95 border-2 md:border-4 ${
                        formData.avatarSeed === seed ? 'border-[#ec2027] bg-red-50 shadow-md' : 'border-slate-100 bg-slate-50 hover:border-slate-200'
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

          {/* Right: Info Settings */}
          <div className="lg:col-span-7 space-y-4 md:space-y-8">
            <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-10 border-4 border-slate-50 shadow-xl">
               <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
                  <div className="p-3 md:p-4 bg-blue-50 text-blue-500 rounded-xl md:rounded-2xl">
                    <User size={24} md:size={32} strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-[#292667] uppercase tracking-tight">Identity Info</h3>
                    <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Updating global profile</p>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">First Name</label>
                    <input 
                      type="text" 
                      value={formData.firstName}
                      onChange={e => setFormData({...formData, firstName: e.target.value})}
                      className="w-full px-5 md:px-8 py-4 md:py-5 bg-slate-50 border-4 border-slate-100 rounded-[1.5rem] md:rounded-[2rem] font-black text-[#292667] text-base md:text-lg focus:border-[#fbee21] focus:bg-white outline-none transition-all placeholder:text-slate-200"
                      placeholder="e.g. Lucky"
                    />
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Last Name</label>
                    <input 
                      type="text" 
                      value={formData.lastName}
                      onChange={e => setFormData({...formData, lastName: e.target.value})}
                      className="w-full px-5 md:px-8 py-4 md:py-5 bg-slate-50 border-4 border-slate-100 rounded-[1.5rem] md:rounded-[2rem] font-black text-[#292667] text-base md:text-lg focus:border-[#fbee21] focus:bg-white outline-none transition-all placeholder:text-slate-200"
                      placeholder="e.g. Learner"
                    />
                  </div>
               </div>

               <div className="p-6 md:p-8 bg-slate-50 rounded-[1.8rem] md:rounded-[2.5rem] border-2 border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className="space-y-1">
                    <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Hero ID</p>
                    <div className="flex items-center gap-3">
                      <Shield size={14} md:size={16} className="text-[#ec2027]" />
                      <p className="font-mono font-black text-[#292667] text-sm md:text-base">{student.username}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Current Level</p>
                    <div className="flex items-center gap-3">
                      <Rocket size={14} md:size={16} className="text-[#00a651]" />
                      <p className="font-black text-[#292667] uppercase text-[10px] md:text-xs">{student.level}</p>
                    </div>
                  </div>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button 
                onClick={onBack}
                className="flex-1 py-4 md:py-6 bg-slate-100 text-slate-400 rounded-2xl md:rounded-[2rem] font-black text-base md:text-lg uppercase tracking-widest hover:bg-slate-200 transition-all border-b-6 md:border-b-8 border-slate-300 active:scale-95"
              >
                Cancel
              </button>
              <button 
                onClick={handleSave}
                className="flex-[2] py-5 md:py-6 bg-[#292667] text-[#fbee21] rounded-2xl md:rounded-[2rem] font-black text-lg md:text-xl uppercase tracking-widest shadow-2xl hover:bg-[#ec2027] hover:text-white transition-all border-b-6 md:border-b-8 border-black/20 flex items-center justify-center gap-3 md:gap-4 active:scale-95"
              >
                <Save size={24} md:size={28} strokeWidth={3} /> Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
