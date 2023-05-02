"use client";
import React, { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("soft");
  const setBg=(active)=>(
    activeTab===active ? "bg-yellow" : "bg-grey"
  )
  
  const setTabsAlignment=(tab)=>(
    tab==="soft" ? "text-left" : "text-right"
  )
  return (
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
      {/* <button
        type="button"
        className="btn"
        onClick={() => setActiveTab("soft")}
      >
        Soft Skills
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => setActiveTab("hard")}
      >
        Hard Skills
      </button> */}
    </div>
  );
};

export default Skills;
