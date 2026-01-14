
export enum View {
  // Student Portal Views
  MY_ADVENTURE = 'my-adventure',
  MY_STARS = 'my-stars',
  ATTENDANCE = 'attendance',
  TROPHY_ROOM = 'trophy-room',
  RESOURCES = 'resources',
  TESTS = 'tests',
  OTHER_COURSES = 'other-courses',
  PROFILE = 'profile',
  
  // Teacher Portal Views
  MY_CLASSES = 'my-classes',
  STUDENTS = 'students',
  GRADES = 'grades',
  REPORTS = 'reports',
  CERTIFICATES = 'certificates'
}

export type TaskType = 'video' | 'multiple-choice' | 'assignment-upload' | 'quick-text';

export type UserRole = 'Educator' | 'Assistant' | 'Guest Speaker' | 'Admin' | string;

export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'active' | 'locked';
  type: TaskType;
  duration?: string; // New: Estimated time for the task
  content?: any;
}

export interface Module {
  id: number;
  title: string;
  tasks: Task[];
  progress: number;
  testStatus?: 'completed' | 'available' | 'locked';
}

export interface Certificate {
  id: string;
  courseName: string;
  issueDate: string;
  teacherName: string;
  score: number;
  isUnlocked: boolean;
  progress: number;
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

export interface Course {
  id: string;
  name: string;
  isPurchased: boolean;
  thumbnail: string;
}

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
