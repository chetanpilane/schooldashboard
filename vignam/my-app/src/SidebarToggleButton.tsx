import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

interface SidebarToggleButtonProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const SidebarToggleButton: React.FC<SidebarToggleButtonProps> = ({ isCollapsed, toggleSidebar }) => {
  return (
    <button
      onClick={toggleSidebar}
      className="absolute top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-lg focus:outline-none"
      style={{ left: isCollapsed ? '4rem' : '18rem' }} // Adjust left position based on collapsed state
    >
      {isCollapsed ? <FaAngleRight /> : <FaAngleLeft />}
    </button>
  );
};

export default SidebarToggleButton;
