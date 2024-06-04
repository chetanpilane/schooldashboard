import React from 'react';

const SecondFrameWithImage: React.FC = () => {
  return (
    <div className="relative w-[519px] h-[252px] bg-[#5AB2A6] rounded-[12px] overflow-hidden mt-8">
      <img
        src="/assets/Frame 35709.png" // Replace with your second image path
        alt="Descriptive Alt Text"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default SecondFrameWithImage;
