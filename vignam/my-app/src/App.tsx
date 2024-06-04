import React, { useState } from 'react';
import Sidebar from './frame';
import SidebarToggleButton from './SidebarToggleButton';
import FrameWithImage from './FrameWithImage';
import SecondFrameWithImage from './SecondFrameWithImage';
import AddContentButton from './button';  // Import the AddContentButton component

const App: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="relative flex h-screen">
      {/* Sidebar and Toggle Button Container */}
      <div className="relative">
        <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        <SidebarToggleButton isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      </div>
      {/* Main Content */}
      <div className={`flex-1 p-4 ml-${isCollapsed ? '16' : '64'}`}>
        <h1 className="text-2xl">Welcome to the Dashboard</h1>
        {/* Frame with Images */}
        <div className="flex space-x-8 mt-8">
          <FrameWithImage />
          <SecondFrameWithImage />
        </div>
        {/* Add Content Button */}
        <AddContentButton />  {/* Add the AddContentButton component here */}
      </div>
    </div>
  );
};

export default App;

