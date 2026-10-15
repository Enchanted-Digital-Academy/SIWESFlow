"use client";

import React, { useState } from 'react';
import { Check, X, Loader2 } from 'lucide-react';

export default function ReviewActions({ logId }: { logId: string }) {
  const [status, setStatus] = useState<'pending' | 'approved' | 'rejected'>('pending');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleReview = async (action: 'approved' | 'rejected') => {
    setIsProcessing(true);
    // Simulate API delay for updating the database
    await new Promise(resolve => setTimeout(resolve, 800));
    setStatus(action);
    setIsProcessing(false);
  };

  if (status === 'approved') {
    return <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-50 text-emerald-700 text-sm font-medium border border-emerald-200"><Check size={16} /> Approved</span>;
  }

  if (status === 'rejected') {
    return <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-red-50 text-red-700 text-sm font-medium border border-red-200"><X size={16} /> Rejected</span>;
  }

  return (
    <div className="flex items-center gap-2 justify-end">
      <button
        onClick={() => handleReview('rejected')}
        disabled={isProcessing}
        className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
        aria-label="Reject Log"
      >
        <X size={18} />
      </button>
      <button
        onClick={() => handleReview('approved')}
        disabled={isProcessing}
        className="flex items-center gap-2 px-4 py-2 bg-siwes-blue text-white rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors disabled:opacity-70 shadow-sm"
      >
        {isProcessing ? <Loader2 size={16} className="animate-spin" /> : <Check size={16} />}
        Approve
      </button>
    </div>
  );
}