'use client';
import React from 'react';
import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk';

export default function SquarePayment(amount: any, user: any) {
  return (
    <div className="grid justify-center align-center h-40">
      <PaymentForm
        //@ts-expect-error
        applicationId={process.env.NEXT_PUBLIC_SQUARE_APP_ID}
        cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
          const response = await fetch(
            process.env.NEXT_PUBLIC_HOST + '/api/payments',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                sourceId: token.token,
                amount: amount as string,
                user: user.name,
              }),
            }
          );
          console.log(
            'Received nonce:',
            token,
            'and amount:',
            amount,
            'n buyer verification token:',
            verifiedBuyer
          );
        }}
        locationId={process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID || ''}
      >
        <CreditCard />
      </PaymentForm>
    </div>
  );
}
