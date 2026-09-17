"use client";

import React, { useState } from 'react';

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState("");

  const handleApprove = () => {
    console.log("Approved! Feedback sent:", feedback);
    alert("Activity approved! (Backend integration coming Week 3)");
  };

  const handleRequestRevision = () => {
    console.log("Revision requested! Feedback sent:", feedback);
    alert("Revision requested! (Backend integration coming Week 3)");
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-sm font-bold text-slate-900 mb-4">Supervisor Feedback</h3>
      <textarea 
        className="w-full border border-slate-300 rounded-lg p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all mb-4"
        rows={4}
        placeholder="Leave constructive feedback for the student..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      ></textarea>
      
      <div className="flex flex-col gap-3">
        <button 
          onClick={handleApprove}
          className="w-full bg-teal-600 text-white font-medium py-2.5 rounded-lg hover:bg-teal-700 transition-colors"
        >
          Approve Activity
        </button>
        <button 
          onClick={handleRequestRevision}
          className="w-full bg-white border border-rose-200 text-rose-600 font-medium py-2.5 rounded-lg hover:bg-rose-50 transition-colors"
        >
          Request Revision
        </button>
      </div>
    </div>
  );
}