'use client';

import { useState } from 'react';
import { MOCK_PLACEMENTS } from '@/data/mockPlacements';
import { Placement, PlacementFilter as FilterType } from '@/types/placement';
import PlacementCard from '@/components/placement/PlacementCard';
import PlacementFilter from '@/components/placement/PlacementFilter';
import PlacementDetailModal from '@/components/placement/PlacementDetailModal';

export default function PlacementsPage() {
  const [selectedPlacement, setSelectedPlacement] = useState<Placement | null>(null);
  const [filters, setFilters] = useState<FilterType>({
    searchQuery: '',
    location: '',
    workMode: 'All',
    department: '',
  });

  const handleApply = (placement: Placement) => {
    alert(`application submitted for ${placement.title} at ${placement.companyName}!`);
    setSelectedPlacement(null);
  };

  const filteredPlacements = MOCK_PLACEMENTS.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      p.companyName.toLowerCase().includes(filters.searchQuery.toLowerCase());
    const matchesWorkMode = filters.workMode === 'All' || p.workMode === filters.workMode;
    return matchesSearch && matchesWorkMode;
  });

  return (
    <main className="max-w-6xl mx-auto p-6 min-h-screen text-gray-900">
  <div className="mb-6">
    <h1 className="text-2xl font-bold text-gray-900">SIWES Placements</h1>
    <p className="text-sm text-gray-500">Find and apply for industrial training positions.</p>
  </div>

      <PlacementFilter filters={filters} onFilterChange={setFilters} />

      {filteredPlacements.length === 0 ? (
        <div className="text-center py-12 border rounded-lg bg-gray-50">
          <p className="text-gray-500 text-sm">No placements found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlacements.map((placement) => (
            <PlacementCard
              key={placement.id}
              placement={placement}
              onSelect={setSelectedPlacement}
            />
          ))}
        </div>
      )}

      {/* modal component */}
      <PlacementDetailModal
        placement={selectedPlacement}
        onClose={() => setSelectedPlacement(null)}
        onApply={handleApply}
      />
    </main>
  );
}