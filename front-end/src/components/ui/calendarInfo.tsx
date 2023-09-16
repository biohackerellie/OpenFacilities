'use client';

import React from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';

const CalendarInfo = () => (
  <HoverCard.Root>
    <HoverCard.Trigger asChild>
      <img
        className="block h-[25px] mx-2 w-[25px] rounded-full"
        src="question.png"
        alt="Radix UI"
      />
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content
        className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
        sideOffset={5}
      >
        <div className="flex flex-col gap-[7px]">
          <img
            className="block h-[60px] w-[60px] rounded-full"
            src="question.png"
            alt="Radix UI"
          />
          <div className="flex flex-col gap-[15px]">
            <div className="text-mauve12 m-0 text-[15px] leading-[1.5]">
              Click the{' '}
              <img
                src="addToCal.png"
                className="inline border drop-shadow-sm"
                alt="Add to Calendar"
              />{' '}
              button in the bottom right corner of the google calendar page to
              add it to your own google calendar.
            </div>
          </div>
        </div>

        <HoverCard.Arrow className="fill-white" />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);

export default CalendarInfo;
