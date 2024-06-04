import React from 'react';

const FrameWithImage: React.FC = () => {
  return (
    <div className="relative w-[542px] h-[252px] mt-8 bg-[#CFECFE] rounded-[12px] overflow-hidden">
      <img
        src="/assets/Frame 35723.png" // Replace with your image path
        alt="Descriptive Alt Text"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default FrameWithImage;
