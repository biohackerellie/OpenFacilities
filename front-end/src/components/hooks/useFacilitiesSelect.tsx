import React, { useState } from 'react';
import { facility } from '@/lib/types';

type facilitySelectProps = {
  facilities: facility[];
  onfacilitySelect: (facility: facility) => void;
};

export default function facilitySelect({
  facilities,
  onfacilitySelect,
}: facilitySelectProps) {
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null);

  const buildings = Array.from(new Set(facilities.map((f) => f.building)));

  const handleBuildingSelect = (
    event: React.Changeevent<HTMLSelectElement>
  ) => {
    setSelectedBuilding(event.target.value);
  };

  const handlefacilitySelect = (
    event: React.Changeevent<HTMLSelectElement>
  ) => {
    const facility = facilities.find(
      (f) => f.id === parseInt(event.target.value)
    );
    if (facility && typeof onfacilitySelect === 'function') {
      onfacilitySelect(facility);
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
      <label htmlFor="facility-select">facility:</label>
      <select id="facility-select" onChange={handlefacilitySelect}>
        <option value="">Select a facility</option>
        {filteredFacilities.map((facility) => (
          <option key={facility.id} value={facility.id}>
            {facility.name}
          </option>
        ))}
      </select>
    </>
  );
}
