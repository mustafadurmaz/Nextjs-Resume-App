import React from "react";
import AboutMe from "./component/about-me";
import {aboutMe, skills} from "../data/page-data"

export const metadata = {
  title: "Resume",
  description: "Welcome to Next.js",
};

const Page = () => {
  return (
    <div>
      <AboutMe  data={aboutMe} skills={skills} />
    </div>
    
  )
};

export default Page;
