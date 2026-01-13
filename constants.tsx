
import { Teacher, Student, ClassInfo, Course } from './types';

export const MOCK_COURSES: Course[] = [
  { id: 'rs1', name: 'Digital Kids Starter V2', isPurchased: true, thumbnail: 'https://picsum.photos/seed/dkv2/400/300' },
  { id: 'rs2', name: 'Level 1 Core Robotics', isPurchased: true, thumbnail: 'https://picsum.photos/seed/l1c/400/300' },
  { id: 'rs3', name: 'Advanced AI for Kids', isPurchased: false, thumbnail: 'https://picsum.photos/seed/aai/400/300' },
  { id: 'rs4', name: 'Global Coding V3', isPurchased: false, thumbnail: 'https://picsum.photos/seed/gcv3/400/300' },
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
