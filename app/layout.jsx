import "./global.css";

import React from "react";
import Sidebar from "./component/sidebar";

import {personalData} from "../data/page-data";

const layout = ({ children }) => {
  console.log(personalData)
  return (
    <html lang="en">
      <body>
        <Sidebar data={personalData} />
        {children}
      </body>
    </html>
  );
};

export default layout;
