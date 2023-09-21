//@ts-nocheck
'use client';
import { Button } from '../ui/buttons';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import ReactModal from 'react-modal';
import { addFee, removeFee } from '@/functions/mutations';

export default function EditPricingModal({
  id,
  reservationfees,
  amount,
  user,
}) {
  const router = useRouter();

  const reservationfeesRef = useRef();
  const reservationfeesDetailsRef = useRef();
  const feeRef = useRef();

  const handleSave = async (event) => {
    event.preventDefault();
    const reservationfees = reservationfeesRef.current.value;
    const reservationfeesDetails = reservationfeesDetailsRef.current.value;
    await addFee(id, reservationfees, reservationfeesDetails);
    router.refresh();
    hideModal();
  };

  const [isVisible, setIsVisible] = React.useState(false);
  const hideModal = () => setIsVisible(false);
  const showModal = () => setIsVisible(true);
  const handleRemoveFee = async (feeId) => {
    await removeFee(feeId);
    router.refresh();
    hideModal();
  };

  return (
    <>
      <Button onClick={showModal}>Edit Fees</Button>
      <ReactModal
        className="fixed inset-0 flex text-lg items-center text-black dark:text-black justify-center z-50 transition-all ease-in-out duration-1000"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 modal-overlay"
        isOpen={!!isVisible}
        onRequestClose={hideModal}
      >
        <div className="bg-white items-center place-content-center   justify-center flex flex-col rounded-lg w-auto min-w-34 p-4">
          <form onSubmit={handleSave}>
            <div>
              {reservationfees.map((fee: any, index: any) => (
                <div key={index} className="m-2" ref={feeRef}>
                  <div className="text-ellipsis overflow-hidden">
                    {fee.feesType}
                  </div>
                  <div>${fee.reservationfees}</div>
                  <div>
                    <button
                      onClick={() => handleRemoveFee(fee.id)}
                      className="bg-primary  dark:bg-secondary justify-end self-end text-white rounded-md  hover:bg-purple-700 m-2 p-2 drop-shadow-md shadow-md transition-all duration-75 ease-in-out hover:scale-105 hover:-translate-x-1 hover:translate-y-1 "
                    >
                      {' '}
                      Remove Fee
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <h2>Add Fee</h2>
            <div className="flex flex-col">
              <label htmlFor="reservationfeesDetails">Fee Description</label>
              <input
                type="text"
                id="reservationfeesDetails"
                name="reservationfees"
                ref={reservationfeesDetailsRef}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="reservationfees">Fee Amount</label>
              <input
                type="number"
                id="reservationfees"
                name="reservationfees"
                ref={reservationfeesRef}
              />
            </div>
            <div className="gap-2">
              <Button className="mx-2 p-3" type="submit" onClick={handleSave}>
                Save
              </Button>

              <Button type="button" onClick={hideModal}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </ReactModal>
    </>
  );
}
