import React from 'react';
import Image from 'next/image'

const StoryViewer = ({ onClose, name, src }) => {

  return (
    <div className='fixed top-50% left-50% z-50 bg-black'>
      <div className='w-[500px] h-[500px] relative'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <Image
            src={src}
            alt={name}
            className='w-full h-full object-contain'
          />
        </div>
        <div className='absolute top-0 left-0 flex justify-between p-4 w-full'>
          <h2 className='text-white font-bold'>{name}</h2>
          <button className='text-white' onClick={onClose}>
            ✖️
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryViewer;
