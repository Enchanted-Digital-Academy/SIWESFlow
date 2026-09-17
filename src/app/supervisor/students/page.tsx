"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from '../../../components/supervisor/Sidebar';
import AssignedStudentTable, { AssignedStudent } from '../../../components/supervisor/AssignedStudentTable';
import { mockStudents, mockActivityLogs } from '../../../data/mock';

export default function StudentsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Transform your existing mock data to fit the table's expected interface
  const tableData: AssignedStudent[] = mockStudents.map((student) => {
    // Get all logs for this specific student
    const studentLogs = mockActivityLogs.filter((log) => log.studentId === student.id);
    
    // Find the most recent log date
    const latestLog = studentLogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
    
    // Determine status based on whether they have pending logs
    const hasPendingLogs = studentLogs.some((log) => log.status === 'pending');

    return {
      id: student.id,
      name: student.name,
      department: student.department,
      level: student.level,
      status: hasPendingLogs ? 'Pending Review' : 'Active',
      lastLogDate: latestLog ? latestLog.date : 'No logs yet',
    };
  });

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans overflow-hidden">
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-20 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className={`fixed inset-y-0 left-0 z-30 transform md:relative md:translate-x-0 transition-transform duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar />
      </div>

      <main className="flex-1 flex flex-col h-screen overflow-y-auto w-full">
       <div className="md:hidden bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10 shadow-sm">
  <Link href="/supervisor" className="text-slate-900 text-xl font-bold tracking-wide hover:opacity-80 transition-opacity">
    SIWES<span className="text-teal-500">Flow</span>
  </Link>
  <button 
    onClick={() => setIsSidebarOpen(true)}
    className="p-2 -mr-2 text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
  >
    <Menu size={24} />
  </button>
</div>

        <div className="p-4 md:p-8 w-full max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-xl md:text-2xl font-bold text-slate-900">My Students</h1>
            <p className="text-slate-600 text-sm mt-1">Manage and review your assigned cohort.</p>
          </div>
          
          {/* Pass the dynamically generated data here */}
          <AssignedStudentTable students={tableData} />
        </div>
      </main>
    </div>
  );
}