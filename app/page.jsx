import React from "react";
import AboutMe from "./component/about-me";
import {aboutMe, skills, professionalData} from "../data/page-data"
import ProfessionalExperience from "./component/professional-experience";

export const metadata = {
  title: "Resume",
  description: "Welcome to Next.js",
};

const Page = () => {
  console.log("professionalData*******************",professionalData);
  return (
    <div>
      <AboutMe  data={aboutMe} skills={skills} />
      <ProfessionalExperience data={professionalData} />
    </div>
    
  )
};

export default Page;
