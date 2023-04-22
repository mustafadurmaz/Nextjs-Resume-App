import "./global.css";

import React from "react";
import Sidebar from "./component/sidebar";

import { personalData } from "../data/page-data";

const layout = ({ children }) => {
  console.log(personalData);
  return (
    <html lang="en">
      <body className="flex flex-col sm:flex-row">
        <Sidebar data={personalData} />
        <main className="grow-full p-16 w-full sm:basis-2/3 bg-green ml-auto">{children}</main>
      </body>
    </html>
  );
};

export default layout;
