import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AlertContainer from '../components/AlertContainer';
import DetailAlert from '../components/DetailAlert';

function Dashboard() {
  return (
    <div className="p-2 no-scrollbar bg-gray-300 min-h-screen">
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        
        {/* Only the middle part changes when you navigate */}
        <div className="flex-1">
          <Outlet />
        </div>
        
      </div>
    </div>
  );
}

export default Dashboard;