"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, FileText, Paperclip } from 'lucide-react';
import ReviewActionPanel from '../../../../../../components/supervisor/ReviewActionPanel';

type UIActivityStatus = 'pending' | 'approved' | 'rejected' | 'correction_requested';

interface ReviewActionPayload {
  action: 'approve' | 'reject' | 'request_correction';
  comment?: string;
  rating?: number;
}

// Temporary mock data for Sprint 1 UI binding
const mockEntry = {
  id: 'act_101',
  studentName: 'David Ibrahim',
  date: '2026-10-12',
  hours: 8,
  department: 'Software Engineering',
  description: 'Implemented the user authentication flow using NextAuth.js. Configured the PostgreSQL database schema for the user profiles and tested the login/logout endpoints.',
  learned: 'Gained a deeper understanding of JWT session management and backend route protection.',
  status: 'pending' as UIActivityStatus,
  attachedEvidence: 'auth_flow_diagram.pdf'
};

export default function ActivityReviewPage() {
  const params = useParams();
  const router = useRouter(); 
  
  const [activityStatus, setActivityStatus] = useState<UIActivityStatus>(mockEntry.status);

  const handleReviewSubmission = (payload: ReviewActionPayload) => {
    console.log('Sprint 1 Mock - Payload ready for Backend:', payload);
    
    // Update local UI state to show the panel's success state
    setActivityStatus(
      payload.action === 'approve' ? 'approved' : 
      payload.action === 'reject' ? 'rejected' : 
      'correction_requested'
    );
    
    alert(`Review submitted successfully! Action: ${payload.action}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-12 font-sans">
      <header className="bg-white border-b border-slate-200 px-6 py-6 shadow-sm">
        <div className="max-w-4xl mx-auto">
          <Link 
            href={`/supervisor/students/${params.id}`} 
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-siwes-blue mb-4 transition-colors"
          >
            <ArrowLeft size={16} className="mr-1" /> Back to Logbook
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Activity Review</h1>
              <p className="text-slate-600 mt-1 text-sm">
                Log entry by <span className="font-semibold text-slate-900">{mockEntry.studentName}</span>
              </p>
            </div>
            <span className="px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-sm font-bold uppercase tracking-wider">
              {activityStatus.replace('_', ' ')}
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 mt-8 space-y-6">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
          <div className="flex flex-wrap gap-6 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-2 text-slate-700">
              <Calendar size={18} className="text-slate-400" />
              <span className="font-medium">{mockEntry.date}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Clock size={18} className="text-slate-400" />
              <span className="font-medium">{mockEntry.hours} Hours Logged</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <FileText size={18} className="text-slate-400" />
              <span className="font-medium">{mockEntry.department}</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Work Description</h3>
            <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">
              {mockEntry.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Key Learnings</h3>
            <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">
              {mockEntry.learned}
            </p>
          </div>

          {mockEntry.attachedEvidence && (
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Attached Evidence</h3>
              <button className="flex items-center gap-2 text-siwes-blue hover:text-blue-800 bg-blue-50 px-4 py-2 rounded-lg font-medium transition-colors">
                <Paperclip size={18} />
                {mockEntry.attachedEvidence}
              </button>
            </div>
          )}
        </div>

        <ReviewActionPanel 
          activityId={mockEntry.id}
          studentName={mockEntry.studentName}
          currentStatus={activityStatus} 
          onSubmitReview={handleReviewSubmission}
        />
      </main>
    </div>
  );
}