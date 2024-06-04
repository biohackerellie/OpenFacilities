'use client';

import type React from 'react';
import { useState, useEffect, useCallback } from 'react';
import type { Facility, SelectCategory as Category } from '@/lib/types';

export function useFacilities(onFacilitySelect?: (facility: Facility) => void) {
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [facilityCategories, setFacilityCategories] = useState<Category[]>([]);
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
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedBuilding(event.target.value);
  };
  const updateFacilityCategory = useCallback(async (id: number) => {
    const response = await fetch(`/api/facilities/${id}`);
    const data = await response.json();
    setFacilityCategories(data.Category);
  }, []);

  const handleFacilitySelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const facility = facilities.find(
      (f) => f.id === parseInt(event.target.value)
    );
    if (facility && typeof onFacilitySelect === 'function') {
      onFacilitySelect(facility);
    }
    if (facility) {
      updateFacilityCategory(facility.id);
    }
  };

  const filteredFacilities = selectedBuilding
    ? facilities.filter((f) => f.building === selectedBuilding)
    : facilities;

  return {
    buildings,
    handleBuildingSelect,
    filteredFacilities,
    handleFacilitySelect,

    facilityCategories,
  };
}
