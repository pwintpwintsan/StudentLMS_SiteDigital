
import { Teacher, Student, ClassInfo, Course } from './types';

export interface ExtendedCourse extends Course {
  description: string;
  duration: string;
  level: string;
  color: string;
}

export const MOCK_COURSES: ExtendedCourse[] = [
  { 
    id: 'rs1', 
    name: 'Digital Kids Starter V2', 
    isPurchased: true, 
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400',
    description: 'The perfect start for young tech explorers! Learn binary secrets and computer logic through play.',
    duration: '12 Weeks',
    level: 'Starter',
    color: '#ec2027'
  },
  { 
    id: 'rs2', 
    name: 'Level 1 Core Robotics', 
    isPurchased: true, 
    thumbnail: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=400',
    description: 'Bring machines to life! Build robots and learn how to control them with real code.',
    duration: '16 Weeks',
    level: 'Core',
    color: '#00a651'
  },
  { 
    id: 'rs3', 
    name: 'Advanced AI for Kids', 
    isPurchased: false, 
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400',
    description: 'Unlock the future! Discover how Artificial Intelligence helps us create art and solve puzzles.',
    duration: '20 Weeks',
    level: 'Advanced',
    color: '#3b82f6'
  },
  { 
    id: 'rs4', 
    name: 'Global Coding V3', 
    isPurchased: false, 
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400',
    description: 'Master the language of the web! Create amazing sites and share your projects with the world.',
    duration: '14 Weeks',
    level: 'Intermediate',
    color: '#a855f7'
  },
];

export const MOCK_TEACHER: Teacher = {
  id: 't1',
  username: "T1234567",
  firstName: "Jane",
  lastName: "Smith",
  schoolName: "U Book Store",
  teacherCode: "UB-4421",
  role: "Educator",
  assignedClassIds: ['c1', 'c2']
};

export const MOCK_STUDENTS: Student[] = [
  { 
    id: '1', 
    username: '1000921', 
    firstName: 'Timmy', 
    lastName: 'Lee', 
    finalGrade: 85, 
    attendance: 24, 
    studyTime: 450, 
    level: 'Digital Kids Starter V2', 
    status: 'active',
    activationDate: '2023-09-15',
    registeredClasses: [{ id: 'c1', name: 'Explorers A' }]
  },
  { 
    id: '2', 
    username: '2000442', 
    firstName: 'Sara', 
    lastName: 'Wang', 
    finalGrade: 92, 
    attendance: 28, 
    studyTime: 520, 
    level: 'Digital Kids Starter V2', 
    status: 'active',
    activationDate: '2023-09-16',
    registeredClasses: [{ id: 'c1', name: 'Explorers A' }]
  }
];

export const MOCK_CLASSES: ClassInfo[] = [
  { 
    id: 'c1', 
    name: 'Explorers A', 
    level: 'Digital Kids Starter V2', 
    students: MOCK_STUDENTS,
    teachers: [MOCK_TEACHER],
    courseId: 'rs1',
    schedule: 'Mon / Wed 10:00 AM',
    progress: 65,
    lastActivity: '2 hours ago'
  },
  { 
    id: 'c2', 
    name: 'Creators B', 
    level: 'Level 1 Core', 
    students: MOCK_STUDENTS.slice(0, 1),
    teachers: [MOCK_TEACHER],
    courseId: 'rs2',
    schedule: 'Tue / Thu 02:00 PM',
    progress: 30,
    lastActivity: 'Yesterday'
  },
];

export const LEVELS = ['Digital Kids Starter V2', 'Level 1 Core', 'Level 2 Advanced'];
export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const LANGUAGES = ['English', 'Spanish', 'Portuguese', 'Chinese'];
export const MODULES = ['Module 1: Logic & Binary', 'Module 2: Robotics Basics', 'Module 3: AI Concepts', 'Module 4: Game Design'];
