import React from 'react';
import Link from 'next/link';
import { Users, Clock, AlertTriangle, CheckCircle, TrendingUp, ChevronRight } from 'lucide-react';
import { mockStudents, mockActivityLogs } from '../../../data/mock';

export default function SupervisorDashboard() {
  // 1. Calculate Core Metrics
  const totalStudents = mockStudents.length;
  
  const approvedLogs = mockActivityLogs.filter(log => log.status === 'approved');
  const totalHoursLogged = approvedLogs.reduce((acc, log) => acc + log.hoursWorked, 0);
  
  const pendingLogs = mockActivityLogs.filter(log => log.status === 'pending');
  const pendingReviewCount = pendingLogs.length;

  // 2. Identify At-Risk Students (Simulated Logic: Students with 0 hours logged in mock data)
  const studentsWithHours = [...new Set(approvedLogs.map(log => log.studentId))];
  const atRiskStudents = mockStudents.filter(s => !studentsWithHours.includes(s.id));

  return (
    <div className="min-h-screen bg-slate-50 pb-12 font-sans">
      <header className="bg-white border-b border-slate-200 px-6 py-8 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Cohort Overview</h1>
          <p className="text-slate-600 mt-2 text-sm md:text-base">
            Track engagement, monitor hours, and manage your assigned SIWES students.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 mt-8 space-y-8">
        {/* Top-Level KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Total Students</h3>
              <div className="p-2 bg-blue-50 text-siwes-blue rounded-lg"><Users size={20} /></div>
            </div>
            <p className="text-3xl font-bold text-slate-900">{totalStudents}</p>
            <p className="text-sm text-emerald-600 mt-2 flex items-center gap-1 font-medium">
              <TrendingUp size={14} /> 100% Assigned
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Hours Verified</h3>
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><Clock size={20} /></div>
            </div>
            <p className="text-3xl font-bold text-slate-900">{totalHoursLogged}</p>
            <p className="text-sm text-slate-500 mt-2 font-medium">Across all approved logs</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Pending Reviews</h3>
              <div className="p-2 bg-amber-50 text-amber-600 rounded-lg"><CheckCircle size={20} /></div>
            </div>
            <p className="text-3xl font-bold text-slate-900">{pendingReviewCount}</p>
            <p className="text-sm text-amber-600 mt-2 font-medium">Requires your attention</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col border-l-4 border-l-rose-500">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">At-Risk</h3>
              <div className="p-2 bg-rose-50 text-rose-600 rounded-lg"><AlertTriangle size={20} /></div>
            </div>
            <p className="text-3xl font-bold text-slate-900">{atRiskStudents.length}</p>
            <p className="text-sm text-rose-600 mt-2 font-medium">Falling behind schedule</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Action Area: At-Risk Students */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <AlertTriangle size={18} className="text-rose-500" />
                Intervention Required
              </h2>
            </div>
            
            {atRiskStudents.length === 0 ? (
              <div className="p-8 text-center text-slate-500">
                All students are currently on track with their hours.
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {atRiskStudents.map(student => (
                  <div key={student.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                    <div>
                      <h3 className="text-md font-bold text-slate-900">{student.name}</h3>
                      <p className="text-sm text-slate-500 mt-1">{student.placementCompany} • {student.department}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-rose-50 text-rose-700 rounded-full text-xs font-semibold border border-rose-100">
                        Low Engagement
                      </span>
                      <Link 
                        href={`/supervisor/students/${student.id}`}
                        className="p-2 text-slate-400 hover:text-siwes-blue hover:bg-blue-50 rounded-lg transition-all"
                      >
                        <ChevronRight size={20} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Actions Panel */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden h-fit">
            <div className="px-6 py-5 border-b border-slate-200 bg-slate-50">
              <h2 className="text-lg font-bold text-slate-900">Quick Actions</h2>
            </div>
            <div className="p-4 space-y-2">
              <Link href="/supervisor/students" className="w-full flex items-center justify-between p-4 rounded-lg border border-slate-100 hover:border-siwes-blue hover:bg-blue-50 transition-all group">
                <div className="flex items-center gap-3">
                  <Users size={18} className="text-slate-400 group-hover:text-siwes-blue" />
                  <span className="font-medium text-slate-700 group-hover:text-siwes-blue">View Full Roster</span>
                </div>
                <ChevronRight size={16} className="text-slate-400 group-hover:text-siwes-blue" />
              </Link>
              
              {/* Note: In a real app, this would link to a filtered view of pending logs */}
              <Link href="/supervisor/students" className="w-full flex items-center justify-between p-4 rounded-lg border border-slate-100 hover:border-amber-400 hover:bg-amber-50 transition-all group">
                <div className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-slate-400 group-hover:text-amber-600" />
                  <span className="font-medium text-slate-700 group-hover:text-amber-600">Review Pending Logs</span>
                </div>
                <div className="flex items-center gap-2">
                  {pendingReviewCount > 0 && (
                    <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs font-bold">
                      {pendingReviewCount}
                    </span>
                  )}
                  <ChevronRight size={16} className="text-slate-400 group-hover:text-amber-600" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}