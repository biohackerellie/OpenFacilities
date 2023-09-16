// 'use client';

// import React, { useState, useEffect } from 'react';
// import { FirefoxModal } from '../forms';

// export default function IsFirefox({ children }: { children: React.ReactNode }) {
//   const [isFirefox, setIsFirefox] = useState(false);

//   useEffect(() => {
//     setIsFirefox(navigator.userAgent.includes('Firefox'));
//   }, []);

//   if (isFirefox) {
//     return (
//       <>
//         <FirefoxModal />
//         {children}
//       </>
//     );
//   } else {
//     return <>{children}</>;
//   }
// }
