'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { updateRes } from '@/functions/reservations';
import ReactModal from 'react-modal';
import { useFacilities } from '../hooks';
import { Button } from '../ui/buttons';
import { Facility } from '@/lib/types';

interface ChangeFacilityProps {
  id: number;
  facility: Facility;
}

export default function ChangeFacility({ id, facility }: ChangeFacilityProps) {
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>(
    undefined
  );
  const handleCategorySelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(Number(event.target.value));
  };

  const router = useRouter();
  const {
    buildings,
    filteredFacilities,
    facilityCategories,
    handleBuildingSelect,
    handleFacilitySelect,
  } = useFacilities();

  const reservationId = id;
  const hideModal = () => setIsVisible(false);
  const showModal = () => setIsVisible(true);
  const [isVisible, setIsVisible] = React.useState(false);
  const handleSave = async () => {
    await updateRes({
      id: reservationId,
      facilityiD: facility.id,
      catID: selectedCategory,
    });
    router.refresh();
    hideModal();
  };

  return (
    <>
      <button onClick={showModal}>Edit Facility Details</button>
      <ReactModal
        className="fixed inset-0 flex text-lg items-center text-black dark:text-black justify-center z-50 transition-all ease-in-out duration-1000"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 modal-overlay"
        isOpen={!!isVisible}
      >
        <div className="bg-white items-center place-content-center   justify-center flex flex-col rounded-lg w-auto min-w-34 p-4">
          <form onSubmit={handleSave}>
            <h2>Change Facility</h2>
            <div className="flex flex-col">
              <label htmlFor="building">Building</label>
              <select
                id="building"
                name="building"
                onChange={handleBuildingSelect}
              >
                <option value="">Select a building</option>
                {buildings.map((building) => (
                  <option key={building} value={building}>
                    {building}
                  </option>
                ))}
              </select>
              <select
                id="facility"
                name="facility"
                onChange={handleFacilitySelect}
              >
                <option value="">Select a facility</option>
                {filteredFacilities.map((facility) => (
                  <option key={facility.id} value={Number(facility.id)}>
                    {facility.name}
                  </option>
                ))}
              </select>
              <select
                id="category"
                name="category"
                onChange={handleCategorySelect}
              >
                <option value="">Select a category</option>
                {facilityCategories.map((category, index) => (
                  <option key={index} value={Number(category.id)}>
                    {category.name}
                  </option>
                ))}
              </select>
              <div>
                <Button type="submit" onClick={handleSave}>
                  Save
                </Button>
                <Button type="button" onClick={hideModal}>
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        </div>
      </ReactModal>
    </>
  );
}
