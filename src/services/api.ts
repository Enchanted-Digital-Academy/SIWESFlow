// src/services/api.ts

// Based on Prisma Enums in TRD
export type LogStatus = 'DRAFT' | 'SUBMITTED' | 'APPROVED' | 'NEEDS_REVISION';

// Expected Response Envelope from TRD
export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  meta?: {
    page?: number;
    limit?: number;
    totalCount?: number;
  };
  errors?: Array<{ field: string; message: string }>;
}

export interface ReviewSubmissionPayload {
  activityId: string;
  status: 'APPROVED' | 'NEEDS_REVISION';
  feedback: string;
  rating?: number;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api/v1';

// ---------------------------------------------------------
// AVAILABLE ENDPOINTS (From TRD)
// ---------------------------------------------------------

/**
 * Fetch all pending logs for the supervisor
 * Endpoint: GET /api/v1/logbook/entries
 */
export async function getPendingActivities(supervisorId: string) {
  // TRD specifies filtering by review status. Assuming we pass supervisorId or auth token handles it.
  const res = await fetch(`${BASE_URL}/logbook/entries?status=SUBMITTED`, {
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}` // Will need this once auth is hooked up
    },
    cache: 'no-store'
  });

  if (!res.ok) throw new Error("Failed to fetch pending activities");
  const json: ApiResponse = await res.json();
  return json.data;
}

/**
 * Submit supervisor assessment
 * Endpoint: POST /api/v1/logbook/entries/:id/review
 */
export async function submitActivityReview(payload: ReviewSubmissionPayload) {
  const res = await fetch(`${BASE_URL}/logbook/entries/${payload.activityId}/review`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      status: payload.status,
      feedback: payload.feedback,
      rating: payload.rating
    })
  });

  if (!res.ok) throw new Error("Failed to submit review");
  return res.json();
}

// ---------------------------------------------------------
// MISSING ENDPOINTS (Mocks for now until Ayonife updates)
// ---------------------------------------------------------

export async function getActivityById(activityId: string) {
  // TODO: Waiting on Ayonife for GET /api/v1/logbook/entries/:id
  console.warn("getActivityById endpoint is missing from TRD. Using mock data.");
  return null; 
}

export async function getSupervisorMetrics() {
  // TODO: Waiting on Ayonife for Dashboard metrics endpoint
  console.warn("getSupervisorMetrics endpoint is missing from TRD. Using mock data.");
  return null;
}