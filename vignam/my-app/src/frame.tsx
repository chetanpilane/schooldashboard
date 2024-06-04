import React from 'react';
import { FaHome, FaChalkboardTeacher, FaClipboard, FaFolderOpen, FaVideo, FaQuestionCircle, FaTimes, FaBars } from 'react-icons/fa';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div className={`relative h-screen bg-white shadow-lg flex flex-col justify-between transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-72'}`}>
      <div>
        <div className="flex items-center p-4">
          {!isCollapsed && (
            <img src="/assets/school-logo.png" alt="School Logo" className="w-10 h-10 mr-3" />
          )}
          <span className={`font-semibold text-lg ${isCollapsed ? 'hidden' : 'block'}`}>School Name</span>
          <button onClick={toggleSidebar} className="ml-auto focus:outline-none">
            {isCollapsed ? <FaBars /> : <FaTimes />}
          </button>
        </div>
        <div className="mt-4">
          <div className="flex items-center p-4 text-gray-500 hover:bg-gray-100 cursor-pointer">
            <FaHome className="mr-2" />
            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Dashboard</span>
          </div>
          <div className="flex items-center p-4 text-gray-500 hover:bg-gray-100 cursor-pointer">
            <FaChalkboardTeacher className="mr-2" />
            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Teach</span>
          </div>
          <div className="flex items-center p-4 text-gray-500 hover:bg-gray-100 cursor-pointer">
            <FaClipboard className="mr-2" />
            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Test</span>
          </div>
          <div className="flex items-center p-4 text-gray-500 hover:bg-gray-100 cursor-pointer">
            <FaFolderOpen className="mr-2" />
            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Take Class</span>
          </div>
          <div className="flex items-center p-4 text-gray-500 hover:bg-gray-100 cursor-pointer">
            <FaVideo className="mr-2" />
            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Video Library</span>
          </div>
          <div className="flex items-center p-4 text-gray-500 hover:bg-gray-100 cursor-pointer">
            <FaQuestionCircle className="mr-2" />
            <span className={`${isCollapsed ? 'hidden' : 'block'}`}>Doubts</span>
          </div>
        </div>
      </div>
      <div className="flex items-center p-4 border-t border-gray-200">
        <img src="/assets/Group 2005.png" alt="Profile" className="w-10 h-10 rounded-full mr-3" />
        <span className={`font-semibold text-base ${isCollapsed ? 'hidden' : 'block'}`}>Priyansh Mandloi</span>
      </div>
    </div>
  );
};

export default Sidebar;

