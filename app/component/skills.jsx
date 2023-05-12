"use client";
import React, { useState } from "react";

const Skills = ({ data }) => {
  const [activeTab, setActiveTab] = useState("soft");
  const setBg = (active) => (activeTab === active ? "bg-yellow" : "bg-grey");

  const setTabsAlignment = (tab) =>
    tab === "soft" ? "text-left" : "text-right";

  const tabs = (
    <div className="flex">
      {["soft", "hard"].map((item) => (
        <button
          key={item}
          type="button"
          className={`btn ${setBg(item)} ${setTabsAlignment(item)}`}
          onClick={() => setActiveTab(item)}
        >
          {item} Skilss
        </button>
      ))}
    </div>
  );

  const content=(
    <ul className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${activeTab ==="soft" ? "justify-start" : "justify-end" } `}>
        {data[activeTab].map((item, index) => (
          <li key={index} className="skill">
            <span>{item.icon}</span>
            {item.text}
          </li>
        ))}
      </ul>
  )
  return (
    <div>
      {tabs}
      {content}
    </div>
  );
};

export default Skills;
