import React from 'react';
import Link from 'next/link';
import { mockStudents, mockActivityLogs } from '../../data/mock';
import { Users, FileSignature, AlertTriangle, ChevronRight, Activity } from 'lucide-react';

export default function SupervisorDashboard() {
  // Calculate Dashboard Metrics
  const totalStudents = mockStudents.length;
  const pendingLogs = mockActivityLogs.filter(log => log.status === 'pending').length;
  const approvedLogs = mockActivityLogs.filter(log => log.status === 'approved').length;
  
  // Basic logic to find "Active" students (those with at least one log)
  const studentsWithLogs = new Set(mockActivityLogs.map(log => log.studentId)).size;

  return (
    <div className="min-h-screen bg-slate-50 pb-12 font-sans">
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-8 shadow-sm">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold text-slate-900">Welcome back, Supervisor</h1>
          <p className="text-slate-600 mt-1">Here is the latest overview of your assigned SIWES students.</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 mt-8 space-y-8">
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Metric 1 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">My Students</p>
              <h3 className="text-2xl font-bold text-slate-900">{totalStudents}</h3>
              <p className="text-xs text-slate-500 mt-1">{studentsWithLogs} currently logging activity</p>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="bg-rose-50 p-3 rounded-lg text-rose-600">
              <FileSignature size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Pending Reviews</p>
              <h3 className="text-2xl font-bold text-slate-900">{pendingLogs}</h3>
              <Link href="/supervisor/reviews" className="text-xs text-rose-600 font-medium mt-1 inline-flex items-center hover:underline">
                View all pending <ChevronRight size={12} />
              </Link>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="bg-teal-50 p-3 rounded-lg text-teal-600">
              <Activity size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Approved Logs</p>
              <h3 className="text-2xl font-bold text-slate-900">{approvedLogs}</h3>
              <p className="text-xs text-slate-500 mt-1">Across all assigned students</p>
            </div>
          </div>
        </div>

        {/* Quick Actions / Getting Started */}
        <div className="bg-slate-900 rounded-xl p-8 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
              <AlertTriangle size={20} className="text-amber-400" />
              Action Required
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              You have {pendingLogs} logbook entries waiting for your approval. Timely reviews help students stay on track with their industrial training requirements.
            </p>
          </div>
          <Link 
            href="/supervisor/reviews" 
            className="shrink-0 bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded-lg text-sm font-bold transition-colors"
          >
            Start Reviewing
          </Link>
        </div>

      </main>
    </div>
  );
}