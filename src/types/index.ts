export type ActivityStatus = 'pending' | 'approved' | 'rejected' | 'revision_requested';

export interface Student {
  id: string;
  name: string;
  matricNumber: string;
  university: string;
  department: string;
  level: string;
  placementCompany: string;
  avatarUrl?: string;
}

export interface ActivityLog {
  id: string;
  studentId: string;
  date: string;
  title: string;
  description: string;
  hoursWorked: number;
  skillsAcquired: string[];
  evidenceUrls: string[]; // URLs to uploaded JPEGs or documents
  status: ActivityStatus;
  supervisorFeedback?: string;
}
