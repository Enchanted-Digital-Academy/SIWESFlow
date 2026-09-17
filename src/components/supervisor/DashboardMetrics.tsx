import React from 'react';
import { Users, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

export default function DashboardMetrics() {
  const metrics = [
    {
      title: "Active Students",
      value: "24",
      description: "Assigned to your supervision",
      icon: <Users size={20} />,
      colorTheme: "text-blue-600",
      bgTheme: "bg-blue-50",
      borderTheme: "border-blue-100"
    },
    {
      title: "Pending Reviews",
      value: "12",
      description: "Awaiting your approval",
      icon: <Clock size={20} />,
      colorTheme: "text-amber-600",
      bgTheme: "bg-amber-50",
      borderTheme: "border-amber-100"
    },
    {
      title: "Approved Activities",
      value: "156",
      description: "Successfully logged",
      icon: <CheckCircle size={20} />,
      colorTheme: "text-teal-600",
      bgTheme: "bg-teal-50",
      borderTheme: "border-teal-100"
    },
    {
      title: "Flagged Students",
      value: "3",
      description: "At-risk or inactive",
      icon: <AlertTriangle size={20} />,
      colorTheme: "text-rose-600",
      bgTheme: "bg-rose-50",
      borderTheme: "border-rose-200",
      alert: true
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <div 
          key={index} 
          className={`relative overflow-hidden bg-white border rounded-xl p-6 shadow-sm transition-all hover:shadow-md ${
            metric.alert ? 'border-rose-200 ring-1 ring-rose-100' : 'border-slate-200'
          }`}
        >
          {/* Alert Indicator for Flagged Card */}
          {metric.alert && (
            <div className="absolute top-0 right-0 w-2 h-full bg-rose-500"></div>
          )}
          
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg ${metric.bgTheme} ${metric.colorTheme}`}>
              {metric.icon}
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-1">{metric.value}</h3>
            <p className="text-sm font-semibold text-slate-700">{metric.title}</p>
            <p className="text-xs text-slate-500 mt-1">{metric.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}