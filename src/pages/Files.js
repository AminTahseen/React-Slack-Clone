import React from "react";
import Sidebar from "../components/sidebar";

const Files = () => {
  return (
    <div className="dashboard">
      <Sidebar active={"Files"} />
      <div className="sidebar-content">Files Screen</div>
    </div>
  );
};

export default Files;
