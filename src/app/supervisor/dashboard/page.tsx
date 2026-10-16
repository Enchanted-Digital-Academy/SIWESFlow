"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Users, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp, 
  ChevronRight,
  ClipboardList
} from 'lucide-react';
import { mockStudents, mockActivityLogs } from '../../../data/mock';

export default function SupervisorDashboard() {
  // 1. Calculate Core Metrics
  const totalStudents = mockStudents.length;
  
  const approvedLogs = mockActivityLogs.filter(log => log.status === 'approved');
  const totalHoursLogged = approvedLogs.reduce((acc, log) => acc + log.hoursWorked, 0);
  
  const pendingLogs = mockActivityLogs.filter(log => log.status === 'pending');
  const pendingReviewCount = pendingLogs.length;

  // 2. Identify At-Risk Students
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
        
        {/* Top-Level KPI Cards (Unchanged) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Total Students</h3>
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Users size={20} /></div>
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

        {/* Existing Action Area: At-Risk Students & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                        className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                      >
                        <ChevronRight size={20} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden h-fit">
            <div className="px-6 py-5 border-b border-slate-200 bg-slate-50">
              <h2 className="text-lg font-bold text-slate-900">Quick Actions</h2>
            </div>
            <div className="p-4 space-y-2">
              <Link href="/supervisor/students" className="w-full flex items-center justify-between p-4 rounded-lg border border-slate-100 hover:border-blue-600 hover:bg-blue-50 transition-all group">
                <div className="flex items-center gap-3">
                  <Users size={18} className="text-slate-400 group-hover:text-blue-600" />
                  <span className="font-medium text-slate-700 group-hover:text-blue-600">View Full Roster</span>
                </div>
                <ChevronRight size={16} className="text-slate-400 group-hover:text-blue-600" />
              </Link>
            </div>
          </div>
        </div>

        {/* NEW ADDITION: Pending Logs Data Table mapping into the [id] route */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mt-8">
          <div className="px-6 py-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <ClipboardList size={18} className="text-[#0015A4]" />
              Activity Logs Awaiting Review
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white text-slate-500 font-medium border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">Student</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Task Description</th>
                  <th className="px-6 py-4">Hours</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pendingLogs.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                      No pending logs to review at this time.
                    </td>
                  </tr>
                ) : (
                  pendingLogs.map((log) => {
                    // Match the log to a student name from the mock database
                    const student = mockStudents.find(s => s.id === log.studentId);
                    
                    return (
                      <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-bold text-slate-900">{student?.name || 'Unknown Student'}</div>
                        </td>
                        <td className="px-6 py-4 text-slate-600">{log.date}</td>
                        <td className="px-6 py-4">
                          <div className="text-slate-900 truncate max-w-xs">{log.description}</div>
                        </td>
                        <td className="px-6 py-4 text-slate-600">{log.hoursWorked} hrs</td>
                        <td className="px-6 py-4 text-right">
                          <Link 
                            href={`/supervisor/activities/${log.id}`}
                            className="inline-flex items-center px-4 py-2 bg-[#0015A4] text-white text-xs font-bold rounded-lg hover:bg-blue-900 transition-colors"
                          >
                            Review
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}