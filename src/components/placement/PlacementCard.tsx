import { Placement } from '@/types/placement';

interface PlacementCardProps {
  placement: Placement;
  onSelect: (placement: Placement) => void;
}

export default function PlacementCard({ placement, onSelect }: PlacementCardProps) {
  return (
    <div className="border rounded-lg p-5 shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-gray-900">{placement.title}</h3>
          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded font-medium">
            {placement.workMode}
          </span>
        </div>
        <p className="text-sm font-medium text-gray-600 mb-3">{placement.companyName}</p>
        <div className="text-xs text-gray-500 space-y-1 mb-4">
          <p>📍 {placement.location}</p>
          <p>💼 {placement.department}</p>
          {placement.stipend && <p>💰 {placement.stipend}</p>}
        </div>
      </div>
      <div className="flex items-center justify-between pt-3 border-t">
        <span className="text-xs text-gray-500">{placement.slotsAvailable} slots left</span>
        <button
          onClick={() => onSelect(placement)}
          className="text-xs px-3 py-1.5 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
}