import React from 'react';
import Link from 'next/link';
import { mockStudents } from '../../../../data/mock';
import { ArrowLeft, User, Building, BookOpen } from 'lucide-react';

export default async function StudentDetails({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  
  // Fetch the specific student from the mock database
  const student = mockStudents.find((s) => s.id === id);

  if (!student) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-slate-600">
        <h2 className="text-xl font-bold text-slate-900 mb-2">Student Not Found</h2>
        <Link href="/supervisor/students" className="text-teal-600 hover:underline">Return to Roster</Link>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-slate-50 pb-12 font-sans">
      <header className="bg-white border-b border-slate-200 px-6 py-6 shadow-sm">
        <div className="max-w-4xl mx-auto">
          <Link href="/supervisor/students" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-800 mb-4 transition-colors">
            <ArrowLeft size={16} className="mr-1" /> Back to My Students
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{student.name}</h1>
              <p className="text-slate-600 mt-1 flex items-center gap-2 text-sm">
                <span className="font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs">{student.id}</span>
                • {student.matricNumber}
              </p>
            </div>
            <Link 
              href={`/supervisor/students/${student.id}/logbook`}
              className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Review Logbook
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 mt-8 space-y-6">
        {/* Dev 1 & 2 will drop their components into this grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Profile Quick-Glance Card (Dev 1 Target) */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <User size={18} className="text-teal-600"/> Academic Profile
            </h2>
            <div className="space-y-3 text-sm">
              <p><span className="text-slate-500 block text-xs uppercase tracking-wider mb-0.5">University</span> <span className="font-medium text-slate-800">{student.university}</span></p>
              <p><span className="text-slate-500 block text-xs uppercase tracking-wider mb-0.5">Department</span> <span className="font-medium text-slate-800">{student.department}</span></p>
              <p><span className="text-slate-500 block text-xs uppercase tracking-wider mb-0.5">Level</span> <span className="font-medium text-slate-800">{student.level}</span></p>
            </div>
          </div>

          {/* Placement Details Card (Dev 2 Target) */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Building size={18} className="text-teal-600"/> Placement Details
            </h2>
            <div className="space-y-3 text-sm">
              <p><span className="text-slate-500 block text-xs uppercase tracking-wider mb-0.5">Assigned Company</span> <span className="font-medium text-slate-800">{student.placementCompany}</span></p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}