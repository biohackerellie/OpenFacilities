'use client';

import React from 'react';
import ReactModal from 'react-modal';
import { PurpleButton } from '../ui/buttons';

export default function TosModal() {
  const hideModal = () => setIsVisible(false);
  const showModal = () => setIsVisible(true);
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <>
      <button
        className="hover:text-blue-500 hover:cursor-pointer hover:underline"
        onClick={showModal}
      >
        Rules and Regulations
      </button>
      <ReactModal
        className="relative  flex animate-overlayShow max-h-fit  flex-col items-center overflow-auto text-black dark:text-black top-0 lg:top-0 justify-center z-50 transition-all ease-in-out duration-1000"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 modal-overlay"
        isOpen={!!isVisible}
      >
        <div className="bg-white max-h-fit align-center self-center  justify-center flex flex-col flex-wrap  rounded-lg max-w-6xl min-w-lg p-4">
          <article className=" overflow-auto max-h-screen sm:max-h-[720px] prose dark:prose-dark max-w-none w-full prose-h2:font-bold  prose-headings:underline prose-headings:my-2 prose-p:p-5 prose-ul:list-decimal prose-ul:text-sm p-4">
            <h1 className="font-bold text-3xl">Rules and Regulations</h1>
            <h2>Premises and Conditions</h2>
            <p>
              Conditions of Facilities Use - Use of District facilities is
              conditioned upon the following covenants:
              <ul>
                <li>
                  All District policies are in effect and shall be honored
                  during the rental period and while the requesting organization
                  is using the facility.
                </li>
                <li>
                  That no alcoholic beverages, tobacco, nicotine products, or
                  other drugs are sold or consumed on the premises by the
                  requesting organization or individual or any of its employees,
                  patrons, agents, or members.
                </li>
                <li>
                  That no illegal games of chance or lotteries will be
                  permitted.
                </li>
                <li>
                  That no functional alteration of the premises or functional
                  changes in the use of such premises shall be made without
                  specific written consent of the District.
                </li>
                <li>
                  That adequate supervision is provided by the requesting
                  organization or individual to ensure proper care and use of
                  District facilities. The District uses audio and video
                  surveillance to monitor activity in the facility.
                </li>
                <li>
                  The presence of weapons, including firearms, is prohibited
                  unless previously reviewed and approved by the Board of
                  Trustees in accordance with Montana law.
                </li>
                <li>
                  All District-owned equipment, facilities, and other property
                  will remain unchanged and undamaged and the requesting
                  organization or individual will pay for any damages to
                  District property. All fobs, or other access items will be
                  returned to the District. Access to the facility will be
                  restricted to the identified points of ingress and egress.
                </li>
                <li>
                  All attendees and participants shall honor and enforce County
                  Health Department directives and safety standards and School
                  District policies regarding the health and safety at
                  gatherings and events held at the school. The requesting
                  organization is expected to specifically comply with all
                  cleaning and disinfecting protocols outlined in District
                  policy as attached.
                </li>
              </ul>
              Failure to honor these covenants will result in cancellation of
              the event and/or all available remedies under the law.
            </p>
            <h2>Rent and deposit</h2>
            <p>
              {' '}
              The requesting organization or individual agrees to pay the
              District, as rent for the premises and as payment for special
              services (if any) provided by the District, the total amount
              listed in the rental contract, and this shall be due 7 days in
              advance. The requesting organization or individual shall be
              responsible for the actual cost of repair or replacement,
              including costs, disbursements, and expenses, resulting while it
              has use of the premises.
            </p>
            <h2>Indemnification</h2>
            <p>
              The requesting organization or individual, by signature below,
              hereby guarantees that the organization shall indemnify, defend,
              and hold harmless the District and any of its employees or agents,
              from any liability, expenses, costs (including attorney’s fees),
              damages, and/or losses arising out of injury or death to any
              person or persons or damage to any property of any kind in
              connection with the organization or individual’s use of the
              District facility, which are not the result of fraud, willful
              injury to a person or property, or willful or negligent violation
              of a law on the part of the School District. The undersigned
              organization or individual accepts and assumes all such risks and
              hazards.
            </p>
            <h2>Assumption of Risk</h2>
            <p>
              The requesting organization understands that the District will
              take all reasonable precautions to insure the risk of injury to
              individuals accessing the facilities or grounds is minimized.
              However, even though these precautions are taken there is still a
              chance of injury, and in rare instances even severe injury and
              death. The requesting organization understands the risks involved.
              Any negligence arising out of use of the facilities or grounds
              under this agreement shall be attributed to requesting entity as
              comparative negligence within the meaning of Section 27-1-702,
              MCA. The School District <strong>DOES NOT </strong> provide
              medical insurance for any individuals who choose to access and use
              the facilities.
            </p>
            <h2>Non-Discrimination</h2>
            <p>
              The District will consider requests for use of district facilities
              for political purposes and activity in accordance with Montanan
              law. The requesting organization or individual agrees to abide by
              non-discrimination clauses as contained in the Montana Human
              Rights Act and the Governmental Code of Fair Practices.
            </p>
            <h2>District's Rights</h2>
            <p>
              The District reserves the right to cancel this Agreement, when it
              is determined by the District that the facilities are needed for
              school purposes, the event will violate District policy, or if the
              conditions outlined in this agreement are not satisfied. The
              District reserves all rights under the law to seek remedy in the
              event School District property is damaged
            </p>
          </article>
          <PurpleButton onClick={hideModal}>close</PurpleButton>
        </div>
      </ReactModal>
    </>
  );
}
