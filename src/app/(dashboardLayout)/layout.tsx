/* eslint-disable @typescript-eslint/no-explicit-any */
import Sidebar from "@/components/Sidebar";
import React from "react";

const DashboardLayout = ({ children }: any) => {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
