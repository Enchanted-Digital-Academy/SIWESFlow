import React from 'react';
import { ImageIcon, FileX } from 'lucide-react';

interface EvidenceViewerProps {
  urls: string[];
}

export default function EvidenceViewer({ urls }: EvidenceViewerProps) {
  if (!urls || urls.length === 0) {
    return (
      <div className="bg-slate-50 border border-slate-200 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-slate-500">
        <FileX size={32} className="mb-2 text-slate-400" />
        <p className="text-sm font-medium">No evidence attached</p>
        <p className="text-xs text-slate-400 mt-1">The student did not upload any files for this log.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {urls.map((url, index) => (
        <div key={index} className="relative group rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 aspect-video flex items-center justify-center">
          {/* Fallback UI since we don't have real images in the public folder yet */}
          <div className="flex flex-col items-center text-slate-400">
            <ImageIcon size={32} className="mb-2" />
            <span className="text-xs font-medium">Attachment {index + 1}</span>
            <span className="text-[10px] truncate max-w-[120px]">{url}</span>
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button className="px-4 py-2 bg-white text-slate-900 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors">
              View Full
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}