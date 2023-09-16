// 'use client';

// import React, { useState, useEffect } from 'react';
// import { FirefoxModal } from '../forms';

// export default function FireFoxWarning({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [isFirefox, setIsFirefox] = useState(false);

//   useEffect(() => {
//     setIsFirefox(navigator.userAgent.includes('Firefox'));
//   }, []);

//   if (isFirefox) {
//     return (
//       <>
//         <h1 className=" text-center font-bold text-3xl">
//           This Page is not fully supported on FireFox
//         </h1>
//         {children}
//       </>
//     );
//   } else {
//     return <>{children}</>;
//   }
// }
