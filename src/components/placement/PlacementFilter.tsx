'use client';

import { PlacementFilter as FilterType, WorkMode } from '@/types/placement';

interface PlacementFilterProps {
  filters: FilterType;
  onFilterChange: (filters: FilterType) => void;
}

export default function PlacementFilter({ filters, onFilterChange }: PlacementFilterProps) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, searchQuery: e.target.value });
  };

  const handleModeChange = (mode: WorkMode | 'All') => {
    onFilterChange({ ...filters, workMode: mode });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
      {/* styled search bar */}
      <input
        type="text"
        placeholder="search placements by title or company..."
        value={filters.searchQuery}
        onChange={handleSearchChange}
        className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
      />

      {/* work mode filter pills */}
      <div className="flex gap-2 w-full sm:w-auto overflow-x-auto">
        {(['All', 'Onsite', 'Hybrid', 'Remote'] as const).map((mode) => (
          <button
            key={mode}
            onClick={() => handleModeChange(mode)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition ${
              filters.workMode === mode
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {mode}
          </button>
        ))}
      </div>
    </div>
  );
}