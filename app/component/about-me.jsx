import React from "react";
import Skills from "./skills";

const AboutMe = ({ data, skills }) => {
  const { title, body } = data;
  return (
    <section>
      <h2 className="mb-8">{title}</h2>
      {body?.map((item,index) => (
        <p key={index} className="mb-6">{item}</p>
      ))}
      <Skills data={skills} />
    </section>
  );
};

export default AboutMe;
