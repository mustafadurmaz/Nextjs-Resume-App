"use client";
import React, { useState } from "react";

const Skills = () => {
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
  return (
    <div>
      {tabs}
      <ul className="flex flex-row flex-wrap content-start list-none">
        <li>List</li>
        <li>List</li>
        <li>List</li>
      </ul>
    </div>
  );
};

export default Skills;
