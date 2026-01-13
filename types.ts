
export enum View {
  // Student Portal Views
  MY_ADVENTURE = 'my-adventure',
  MY_STARS = 'my-stars',
  ATTENDANCE = 'attendance',
  TROPHY_ROOM = 'trophy-room',
  RESOURCES = 'resources',
  TESTS = 'tests',
  OTHER_COURSES = 'other-courses',
  
  // Teacher Portal Views (Fixing missing properties used in Sidebar.tsx)
  MY_CLASSES = 'my-classes',
  STUDENTS = 'students',
  GRADES = 'grades',
  REPORTS = 'reports',
  CERTIFICATES = 'certificates'
}

export type TaskType = 'video' | 'multiple-choice' | 'assignment-upload' | 'quick-text';

// Fix: Added UserRole type for ClassDetailView and Teacher interface
export type UserRole = 'Educator' | 'Assistant' | 'Guest Speaker' | 'Admin' | string;

export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'active' | 'locked';
  type: TaskType;
  content?: any;
}

export interface Module {
  id: number;
  title: string;
  tasks: Task[];
  testStatus: 'completed' | 'available' | 'locked';
}

export interface Student {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  points?: number;
  stars?: number;
  level: string;
  avatarSeed?: string;
  finalGrade: number;
  attendance: number;
  studyTime: number;
  status: 'active' | 'inactive';
  activationDate: string;
  registeredClasses: Array<{ id: string, name: string }>;
}

// Fix: Added missing Teacher interface
export interface Teacher {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  schoolName: string;
  teacherCode: string;
  role: string;
  assignedClassIds: string[];
}

// Fix: Added missing Course interface
export interface Course {
  id: string;
  name: string;
  isPurchased: boolean;
  thumbnail: string;
}

// Fix: Added missing ClassInfo interface
export interface ClassInfo {
  id: string;
  name: string;
  level: string;
  students: Student[];
  teachers: Teacher[];
  courseId: string;
  schedule: string;
  progress: number;
  lastActivity: string;
}
