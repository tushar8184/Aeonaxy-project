import React, { useState } from "react";
import TabItem from "./TabItem";

const TabBar = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='border-b'>
      <ul className='flex flex-wrap px-4 my-5'>
        {tabs.map((tab) => (
          <TabItem
            key={tab.name}
            isActive={activeTab === tab.name}
            onClick={() => handleTabClick(tab.name)}
          >
            {tab.title}
            {tab.isBeta && (
              <span className='px-2 py-1 ml-4 text-xs font-semibold text-white bg-blue-500 rounded-full'>
                BETA
              </span>
            )}
          </TabItem>
        ))}
      </ul>
    </div>
  );
};

export default TabBar;
