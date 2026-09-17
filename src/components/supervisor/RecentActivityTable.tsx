import React from 'react';
import Link from 'next/link';
import { ActivityLog, Student } from '../../types';

interface RecentActivityTableProps {
  logs: ActivityLog[];
  students: Student[];
}

export default function RecentActivityTable({ logs, students }: RecentActivityTableProps) {
  // Helper function to find the student's name
  const getStudentName = (id: string) => {
    const student = students.find(s => s.id === id);
    return student ? student.name : 'Unknown Student';
  };

  // Helper function to style the status badges dynamically
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'pending':
        return <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-medium">Pending</span>;
      case 'approved':
        return <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-medium">Approved</span>;
      case 'rejected':
      case 'revision_requested':
        return <span className="px-2 py-1 bg-rose-100 text-rose-700 rounded text-xs font-medium">Needs Revision</span>;
      default:
        return <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">{status}</span>;
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden mt-8">
      <div className="px-6 py-4 border-b border-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">Recent Activity Submissions</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 font-medium">Student</th>
              <th className="px-6 py-3 font-medium">Activity</th>
              <th className="px-6 py-3 font-medium">Date</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900">{getStudentName(log.studentId)}</td>
                <td className="px-6 py-4 truncate max-w-xs">{log.title}</td>
                <td className="px-6 py-4">{log.date}</td>
                <td className="px-6 py-4">{getStatusBadge(log.status)}</td>
                <td className="px-6 py-4 text-right">
                  <Link 
                    href={`/supervisor/reviews/${log.id}`}
                    className="text-teal-600 hover:text-teal-700 font-medium"
                  >
                    Review &rarr;
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}