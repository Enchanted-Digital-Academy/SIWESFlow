import { Student, ActivityLog } from '../types';

export const mockStudents: Student[] = [
  {
    id: "STU-001",
    name: "Amaka Okafor",
    matricNumber: "CSC/2023/045",
    university: "National Open University of Nigeria",
    department: "Computer Science",
    level: "300 Level",
    placementCompany: "Enchanted Digital Academy",
  },
  {
    id: "STU-002",
    name: "David Ibrahim",
    matricNumber: "SWE/2022/089",
    university: "University of Lagos",
    department: "Software Engineering",
    level: "400 Level",
    placementCompany: "Techflow Solutions",
  }
];

export const mockActivityLogs: ActivityLog[] = [
  {
    id: "LOG-101",
    studentId: "STU-001",
    date: "2026-09-07",
    title: "Frontend Component Development",
    description: "Built the navigation sidebar and integrated standard routing using Next.js 16.",
    hoursWorked: 8,
    skillsAcquired: ["React", "Next.js", "Tailwind CSS"],
    evidenceUrls: ["/mock-evidence-1.jpg"],
    status: "pending",
  },
  {
    id: "LOG-102",
    studentId: "STU-001",
    date: "2026-09-06",
    title: "Database Schema Design",
    description: "Drafted the initial entity-relationship diagram for the user authentication flow.",
    hoursWorked: 6,
    skillsAcquired: ["Database Design", "SQL"],
    evidenceUrls: ["/mock-evidence-2.jpg"],
    status: "approved",
    supervisorFeedback: "Good structure. Ensure you normalize the user roles table next time."
  },
  {
    id: "LOG-103",
    studentId: "STU-002",
    date: "2026-09-08",
    title: "API Endpoint Testing",
    description: "Wrote Postman test scripts for the new user registration endpoint.",
    hoursWorked: 5,
    skillsAcquired: ["API Testing", "Postman"],
    evidenceUrls: [],
    status: "pending",
  }
];
