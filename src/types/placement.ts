export type WorkMode = 'Onsite' | 'Hybrid' | 'Remote';

export type ApplicationStatus = 'Pending' | 'Accepted' | 'Rejected';

export interface Placement {
  id: string;
  companyId: string;
  companyName: string;
  companyLogo?: string;
  title: string;
  department: string;
  location: string;
  workMode: WorkMode;
  stipend?: string;
  slotsAvailable: number;
  description: string;
  requirements: string[];
  deadline: string;
  createdAt: string;
}

export interface PlacementFilter {
  searchQuery: string;
  location: string;
  workMode: WorkMode | 'All';
  department: string;
}

export interface Application {
  id: string;
  placementId: string;
  studentId: string;
  status: ApplicationStatus;
  attachedDocumentIds: string[];
  appliedAt: string;
}