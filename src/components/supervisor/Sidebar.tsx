"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, FileText } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  // Helper to determine if the current route is active
  const isActive = (path: string) => pathname === path;

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col min-h-screen">
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <span className="text-white text-xl font-bold tracking-wide">
          SIWES<span className="text-teal-500">Flow</span>
        </span>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        <Link 
          href="/supervisor/dashboard" 
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            isActive('/supervisor/dashboard') 
              ? 'bg-teal-600/10 text-teal-400' 
              : 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          <LayoutDashboard size={20} />
          <span className="font-medium">Dashboard</span>
        </Link>
        
        {/* Updated link pointing to the new roster route */}
        <Link 
          href="/supervisor/students" 
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            isActive('/supervisor/students') 
              ? 'bg-teal-600/10 text-teal-400' 
              : 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          <Users size={20} />
          <span className="font-medium">Students</span>
        </Link>
        
        <Link 
          href="/supervisor/reviews" 
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            isActive('/supervisor/reviews') 
              ? 'bg-teal-600/10 text-teal-400' 
              : 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          <FileText size={20} />
          <span className="font-medium">Reviews</span>
        </Link>
      </nav>
    </aside>
  );
}