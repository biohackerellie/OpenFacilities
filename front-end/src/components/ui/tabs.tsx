'use client';

import React, { useEffect, useState } from 'react';

interface Tab {
  title: string;
  content: JSX.Element;
}

interface TabContainerProps {
  tabs: Tab[];
}

export default function Tabs({ tabs }: TabContainerProps) {
  const showClasses =
    'font-bold mx-3 border-x border-t text-3xl text-primary dark:text-secondary shadow-secondary drop-shadow';
  const hideClasses =
    'font-bold text-2xl text-gray-400  shadow-secondary drop-shadow';
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="gap-y-10 h-auto max-w-sm sm:max-w-6xl flex flex-wrap m-3 gap-2 my-10 justify-center">
      <div className="gap-2 mx-1">
        {tabs.map((tab, index) => (
          <button key={index} onClick={() => setActiveTab(index)}>
            <h1 className={activeTab === index ? showClasses : hideClasses}>
              {tab.title}
            </h1>
          </button>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
}
