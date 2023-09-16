// 'use client';

// import React, { useState } from 'react';
// import ReactModal from 'react-modal';
// import { PurpleButton } from '../ui/buttons';

// export default function FirefoxModal() {
//   const [isVisible, setIsVisible] = useState(true);

//   const hideModal = () => setIsVisible(false);
//   const showModal = () => setIsVisible(true);

//   return (
//     <>
//       <ReactModal
//         className="relative inset-0 flex animate-overlayShow  flex-col items-center text-black dark:text-black inset-y-20 justify-center z-50 transition-all ease-in-out duration-1000"
//         overlayClassName="fixed inset-0 bg-black bg-opacity-50 modal-overlay"
//         isOpen={!!isVisible}
//       >
//         <div className="bg-white align-center self-center  justify-center flex flex-col flex-wrap  rounded-lg max-w-sm   sm:min-w-34 sm:max-w-3xl p-4">
//           <h1 className="text-2xl font-bold text-center">
//             We noticed you are using Firefox
//           </h1>
//           <p className="text-center">
//             Some features may not work as expected. We recommend using Chrome,
//             Edge, or Safari for the best experience.
//           </p>
//           <div className="flex justify-center mt-5">
//             <PurpleButton onClick={hideModal}>close</PurpleButton>
//           </div>
//         </div>
//       </ReactModal>
//     </>
//   );
// }
