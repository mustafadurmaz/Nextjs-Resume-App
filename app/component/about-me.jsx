import React from "react";
import Skills from "./skills";

const AboutMe = ({ data }) => {
  const { title, body } = data;
  return (
    <section>
      <h2 className="mb-8">{title}</h2>
      {body?.map((item,index) => (
        <p key={index} className="mb-6">{item}</p>
      ))}
      <Skills />
    </section>
  );
};

export default AboutMe;
