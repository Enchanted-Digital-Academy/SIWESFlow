import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  valueColor?: string;
}

export default function StatCard({ 
  title, 
  value, 
  valueColor = "text-slate-900" 
}: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <h3 className="text-sm font-medium text-slate-500 mb-2">{title}</h3>
      <p className={`text-3xl font-bold ${valueColor}`}>{value}</p>
    </div>
  );
}