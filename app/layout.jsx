import React from "react";
import Sidebar from "./component/sidebar";

const layout = ({ children }) => {
  return (
    <html lang="en">
      {/* <Sidebar /> */}
      <body>{children}</body>
    </html>
  );
};

export default layout;
