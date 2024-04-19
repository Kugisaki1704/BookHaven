import Sidebar from "./Sidebar"
import React from 'react';
import { Outlet } from 'react-router-dom';
const DashBoardLayout = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <Sidebar/>
      <Outlet/>
    </div>
  );
};

export default DashBoardLayout;