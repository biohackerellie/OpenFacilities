import { UploadFile } from '@/components/forms/uploadFile';
import Link from 'next/link';
import { Button } from '@/components/ui/buttons';
import React from 'react';

export default async function insurancePage({
  //@ts-ignore
  params,
}: {
  params?: { id: number };
}) {
  if (!params) {
    return <div>Loading...</div>;
  }
  const res = await fetch(
    process.env.NEXT_PUBLIC_HOST + `/api/reservation/${params.id}`,
    { cache: 'no-store' }
  );

  const reservation = await res.json();

  let link;
  if (reservation.insuranceLink) {
    link = encodeURI(reservation.insuranceLink);
  }
  console.log(reservation);
  return (
    <div>
      <div className="justify-center flex flex-col sm:flex-row my-4 ">
        <div className="flex  flex-col border-gray-600 dark:border-white drop-shadow-xl shadow-xl   max-w-[900px] m-3 p-4 border-2">
          <h2 className="flex font-bold text-4xl text-gray-600 dark:text-gray-300">
            Insurance
          </h2>
          <div className="justify-between my-5  gap-36">
            <div className="flex flex-col my-2 p-2  justify-between text-xl border-b-2 border-b-gray-700 dark:border-b-white text-justify ">
              <p>
                Upon approval, your event(s) will be shown in the chart below
                along with any requirement for insurance coverage. If you do not
                provide the required coverage for the event by the listed
                deadline (7 days prior to the event), your event might be
                cancelled. If your event requires coverage, your event is
                subject to the following policy:
              </p>

              <div className="text-sm dark:bg-gray-500 bg-gray-300 p-5 m-2">
                <p>
                  The user of the facility shall provide the District with a
                  certificate of insurance and endorsement to their property and
                  liability policy. Said certificate and policy endorsement
                  shall name the District as an additional insured. The
                  certificate and policy shall show coverage for comprehensive
                  general liability insurance for injuries to or death of any
                  person or damage to or loss of property arising out of or in
                  any way resulting from the described use of the facility. The
                  insurance shall provide for amounts not less than $1,000,000
                  for bodily injury or death to any one person or resulting from
                  any one accident, and $1,000,000 for property damage in any
                  one accident or the policy may provide a combined single limit
                  for bodily injury and property damage for $1,000,000. The
                  certificate shall contain a provision that the insurer not
                  cancel or refuse to renew without giving the District written
                  notice at least 10 days before the effective date of the
                  cancellation or non-renewal.
                </p>
              </div>
            </div>
            <div className="p-2">
              <h2 className="flex font-bold text-2xl my-3 mb-6  text-gray-600 dark:text-gray-300">
                Proof of insurance
              </h2>
              <div className="flex flex-wrap bg-gray-300 dark:bg-gray-500 p-5 m-3">
                <h3 className="m-2 border-b-2 mb-5">
                  You may upload your certificate of liability insurance here.{' '}
                  <b className=" underline decoration-red-500 decoration-8">
                    Note:{' '}
                  </b>{' '}
                  Your policy must name <strong> Laurel Public Schools </strong>{' '}
                  as an additional insured.{' '}
                </h3>
                <div className="w-full">
                  {link && (
                    <div className="flex flex-row justify-between">
                      <Button variant="outline" asChild>
                        <Link href={link}>View Uploaded File</Link>
                      </Button>
                    </div>
                  )}
                </div>
                <div className="my-3">
                  <UploadFile params={params} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
