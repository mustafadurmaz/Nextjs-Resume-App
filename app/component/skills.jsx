"use client";
import React, { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Soft");
  const setBg=(active)=>(
    activeTab===active ? "bg-yellow" : "bg-grey"
  )
  console.log(activeTab);
  return (
    <div className="flex">
      {["Soft", "Hard"].map((item) => (
        <button
          key={item}
          type="button"
          className={`btn ${setBg(item)}`}
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
