import React, { useState } from 'react';
import type { Facility } from '@/lib/types';

interface FacilitySelectProps {
  facilities: Facility[];
  onFacilitySelect: (facility: Facility) => void;
}

export default function FacilitySelect({
  facilities,
  onFacilitySelect,
}: FacilitySelectProps) {
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null);

  const buildings = Array.from(new Set(facilities.map((f) => f.building)));

  const handleBuildingSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedBuilding(event.target.value);
  };

  const handleFacilitySelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const facility = facilities.find(
      (f) => f.id === parseInt(event.target.value)
    );
    if (facility && typeof onFacilitySelect === 'function') {
      onFacilitySelect(facility);
    }
  };

  const filteredFacilities = selectedBuilding
    ? facilities.filter((f) => f.building === selectedBuilding)
    : facilities;

  return (
    <>
      <label htmlFor="building-select">Building:</label>
      <select id="building-select" onChange={handleBuildingSelect}>
        <option value="">Select a building</option>
        {buildings.map((building) => (
          <option key={building} value={building}>
            {building}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor="facility-select">Facility:</label>
      <select id="facility-select" onChange={handleFacilitySelect}>
        <option value="">Select a facility</option>
        {filteredFacilities.map((facility) => (
          <option key={Number(facility.id)} value={Number(facility.id)}>
            {facility.name}
          </option>
        ))}
      </select>
    </>
  );
}
