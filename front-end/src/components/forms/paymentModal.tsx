//@ts-nocheck
'use client';
import { YellowButton, PurpleButton } from '../ui/buttons';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import ReactModal from 'react-modal';
import { addFee, removeFee } from '@/functions/mutations';

export default function EditPricingModal({ id, additionalFees, amount, user }) {
  const router = useRouter();

  const additionalFeesRef = useRef();
  const additionalFeesDetailsRef = useRef();
  const feeRef = useRef();

  const handleSave = async (event) => {
    event.preventDefault();
    const additionalFees = additionalFeesRef.current.value;
    const additionalFeesDetails = additionalFeesDetailsRef.current.value;
    await addFee(id, additionalFees, additionalFeesDetails);
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
      <YellowButton onClick={showModal}>Edit Fees</YellowButton>
      <ReactModal
        className="fixed inset-0 flex text-lg items-center text-black dark:text-black justify-center z-50 transition-all ease-in-out duration-1000"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 modal-overlay"
        isOpen={!!isVisible}
        onRequestClose={hideModal}
      >
        <div className="bg-white items-center place-content-center   justify-center flex flex-col rounded-lg w-auto min-w-34 p-4">
          <form onSubmit={handleSave}>
            <div>
              {additionalFees.map((fee: any, index: any) => (
                <div key={index} className="m-2" ref={feeRef}>
                  <div className="text-ellipsis overflow-hidden">
                    {fee.feesType}
                  </div>
                  <div>${fee.additionalFees}</div>
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
              <label htmlFor="additionalFeesDetails">Fee Description</label>
              <input
                type="text"
                id="additionalFeesDetails"
                name="additionalFees"
                ref={additionalFeesDetailsRef}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="additionalFees">Fee Amount</label>
              <input
                type="number"
                id="additionalFees"
                name="additionalFees"
                ref={additionalFeesRef}
              />
            </div>
            <div className="gap-2">
              <PurpleButton
                className="mx-2 p-3"
                type="submit"
                onClick={handleSave}
              >
                Save
              </PurpleButton>

              <YellowButton type="button" onClick={hideModal}>
                Cancel
              </YellowButton>
            </div>
          </form>
        </div>
      </ReactModal>
    </>
  );
}
