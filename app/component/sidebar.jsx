import React from "react";
import Image from "next/image";

import { Envelope, Twitter, Linkedin } from "./icons";

const Sidebar = ({ data }) => {
  const { name, role, education, contactLinks } = data;
  return (
    <div className="bg-black flex flex-col content-between w-full h-auto sm:h-screen sm:justify-around sm:w-1/3 sm:fixed">
      <div className="text-white flex flex-col p-10">
        <Image />
        <h1>{name}</h1>
        <h2>{role}</h2>
        <p>{education[0]}</p>
        <p>{education[1]}</p>
        <div>
          <h3>Contact me</h3>
          <a href={contactLinks?.[0]} aria-label={"twitter"}>
            <Envelope />
          </a>
          <a href={contactLinks?.[0]} aria-label={"twitter"}>
            <Twitter />
          </a>
          <a href={contactLinks?.[0]} aria-label={"twitter"}>
            <Linkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
