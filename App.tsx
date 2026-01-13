
import React, { useState } from 'react';
import { Header } from './components/Header';
import { StudentSidebar } from './components/StudentSidebar';
import { StudentLearningView } from './components/views/StudentLearningView';
import { GradesView } from './components/views/GradesView';
import { CertificatesView } from './components/views/CertificatesView';
import { TestsView } from './components/views/TestsView';
import { TeachingResourcesView } from './components/views/TeachingResourcesView';
import { OtherCoursesView } from './components/views/OtherCoursesView';
import { AttendanceView } from './components/views/AttendanceView';
import { View, Student } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.MY_ADVENTURE);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>('Digital Kids Starter V2');
  const [student] = useState<Student>({
    id: 's1',
    username: '1009921', // 7-digit ID as requested
    firstName: 'Lucky',
    lastName: 'Learner',
    points: 2450,
    stars: 12,
    level: 'Digital Hero Grade 2',
    avatarSeed: 'Buddy',
    finalGrade: 95,
    attendance: 28,
    studyTime: 1200,
    status: 'active',
    activationDate: '2024-01-01',
    registeredClasses: []
  });

  const handleViewChange = (view: View) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
  };

  const handleEnterCourse = (courseName: string) => {
    setSelectedCourse(courseName);
    setCurrentView(View.MY_ADVENTURE);
  };

  const renderView = () => {
    switch (currentView) {
      case View.MY_ADVENTURE:
        return <StudentLearningView selectedCourse={selectedCourse} />;
      case View.MY_STARS:
        return <GradesView />;
      case View.ATTENDANCE:
        return <AttendanceView />;
      case View.TROPHY_ROOM:
        return <CertificatesView />;
      case View.RESOURCES:
        return <TeachingResourcesView onEnterCourse={handleEnterCourse} />;
      case View.TESTS:
        return <TestsView onEnterCourse={handleEnterCourse} />;
      case View.OTHER_COURSES:
        return <OtherCoursesView onEnterCourse={handleEnterCourse} />;
      default:
        return <StudentLearningView selectedCourse={selectedCourse} />;
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#f8fafc] selection:bg-[#fbee21] selection:text-[#292667]">
      <Header 
        schoolName="Student Portal" 
        teacherCode={`Level: ${student.level}`} 
        onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      
      <div className="flex flex-1 overflow-hidden relative">
        <StudentSidebar 
          currentView={currentView} 
          onViewChange={handleViewChange} 
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
        
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-[#292667]/60 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        
        <main 
          className="flex-1 relative flex flex-col overflow-hidden"
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}
        >
          <div className="flex-1 overflow-y-auto lg:overflow-hidden p-4 md:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto h-full flex flex-col animate-in fade-in zoom-in-95 duration-500">
              {renderView()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
