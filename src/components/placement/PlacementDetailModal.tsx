'use client';

import { Placement } from '@/types/placement';

interface PlacementDetailModalProps {
  placement: Placement | null;
  onClose: () => void;
  onApply: (placement: Placement) => void;
}

export default function PlacementDetailModal({
  placement,
  onClose,
  onApply,
}: PlacementDetailModalProps) {
  if (!placement) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-xl relative animate-in fade-in zoom-in duration-200">
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-lg font-bold"
        >
          ✕
        </button>

        {/* header */}
        <div className="mb-4 border-b pb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {placement.workMode}
          </span>
          <h2 className="text-xl font-bold text-gray-900 mt-2">{placement.title}</h2>
          <p className="text-sm text-gray-600 font-medium">{placement.companyName}</p>
        </div>

        {/* body info */}
        <div className="space-y-3 text-sm text-gray-700 mb-6">
          <p><strong>location:</strong> {placement.location}</p>
          <p><strong>department:</strong> {placement.department}</p>
          {placement.stipend && <p><strong>stipend:</strong> {placement.stipend}</p>}
          <p><strong>available slots:</strong> {placement.slotsAvailable}</p>
          
          <div className="pt-2">
            <h4 className="font-semibold text-gray-900 mb-1">about the role</h4>
            <p className="text-xs text-gray-600 leading-relaxed">{placement.description}</p>
          </div>

          {placement.requirements && placement.requirements.length > 0 && (
            <div className="pt-2">
              <h4 className="font-semibold text-gray-900 mb-1">requirements</h4>
              <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                {placement.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* action buttons */}
        <div className="flex gap-3 pt-3 border-t">
          <button
            onClick={onClose}
            className="w-1/2 py-2 text-xs font-medium border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
          >
            cancel
          </button>
          <button
            onClick={() => onApply(placement)}
            className="w-1/2 py-2 text-xs font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            apply now
          </button>
        </div>
      </div>
    </div>
  );
}