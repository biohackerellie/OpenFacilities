'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { facility } from '@/lib/types';
import { category } from '@prisma/client';

export function useFacilities(onfacilitySelect?: (facility: facility) => void) {
  const [facilities, setFacilities] = useState<facility[]>([]);
  const [facilityCategories, setfacilityCategories] = useState<category[]>([]);
  useEffect(() => {
    const fetchFacilities = async () => {
      const response = await fetch('/api/facilities');
      const data = await response.json();
      setFacilities(data);
    };
    fetchFacilities();
  }, []);

  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null);

  const buildings = Array.from(new Set(facilities.map((f) => f.building)));

  const handleBuildingSelect = (
    event: React.Changeevent<HTMLSelectElement>
  ) => {
    setSelectedBuilding(event.target.value);
  };
  const updatefacilitycategory = useCallback(async (id: number) => {
    const response = await fetch(`/api/facilities/${id}`);
    const data = await response.json();
    setfacilityCategories(data.category);
  }, []);

  const handlefacilitySelect = (
    event: React.Changeevent<HTMLSelectElement>
  ) => {
    const facility = facilities.find(
      (f) => f.id === parseInt(event.target.value)
    );
    if (facility && typeof onfacilitySelect === 'function') {
      onfacilitySelect(facility);
    }
    if (facility) {
      updatefacilitycategory(facility.id);
    }
  };

  const filteredFacilities = selectedBuilding
    ? facilities.filter((f) => f.building === selectedBuilding)
    : facilities;

  return {
    buildings,
    handleBuildingSelect,
    filteredFacilities,
    handlefacilitySelect,

    facilityCategories,
  };
}
