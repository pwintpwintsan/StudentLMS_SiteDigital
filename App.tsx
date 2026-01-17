
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { StudentSidebar } from './components/StudentSidebar';
import { StudentLearningView } from './components/views/StudentLearningView';
import { GradesView } from './components/views/GradesView';
import { CertificatesView } from './components/views/CertificatesView';
import { TestsView } from './components/views/TestsView';
import { TeachingResourcesView } from './components/views/TeachingResourcesView';
import { OtherCoursesView } from './components/views/OtherCoursesView';
import { AttendanceView } from './components/views/AttendanceView';
import { ProfileSettingsView } from './components/views/ProfileSettingsView';
import { LoginView } from './components/views/LoginView';
import { View, Student } from './types';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState<View>(View.MY_ADVENTURE);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>('Digital Kids Starter V2');
  const [student, setStudent] = useState<Student>({
    id: 's1',
    username: '',
    firstName: '',
    lastName: 'Learner',
    points: 2450,
    stars: 12,
    level: 'Hero Grade 2',
    avatarSeed: 'Buddy',
    finalGrade: 95,
    attendance: 28,
    studyTime: 1200,
    status: 'active',
    activationDate: '2024-01-01',
    registeredClasses: []
  });

  const handleLogin = (firstName: string, id: string) => {
    setStudent(prev => ({
      ...prev,
      firstName: firstName,
      username: id
    }));
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView(View.MY_ADVENTURE);
  };

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
      case View.PROFILE:
        return (
          <ProfileSettingsView 
            student={student} 
            onSave={(updatedStudent) => {
              setStudent(updatedStudent);
              setCurrentView(View.MY_ADVENTURE);
            }}
            onBack={() => setCurrentView(View.MY_ADVENTURE)}
          />
        );
      default:
        return <StudentLearningView selectedCourse={selectedCourse} />;
    }
  };

  if (!isAuthenticated) {
    return <LoginView onLogin={handleLogin} />;
  }

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden selection:bg-[#fbee21] selection:text-[#292667]">
      <Header 
        schoolName="U Book Store" 
        teacherCode={`Lvl: ${student.level}`} 
        onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        onLogout={handleLogout}
        isLoggedIn={true}
      />
      
      <div className="flex flex-1 overflow-hidden relative">
        <StudentSidebar 
          currentView={currentView} 
          onViewChange={handleViewChange} 
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          student={student}
          onLogout={handleLogout}
        />
        
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-sky-900/40 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        
        <main className="flex-1 relative flex flex-col overflow-hidden bg-playful-pattern">
          <div className="flex-1 p-3 md:p-5 lg:p-6 min-h-0 overflow-hidden">
            <div className="max-w-7xl mx-auto h-full flex flex-col animate-in fade-in zoom-in-95 duration-400">
              {renderView()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;