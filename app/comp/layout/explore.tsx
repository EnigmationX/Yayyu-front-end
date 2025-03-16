'use client';

import Image from 'next/image';
import { useState } from 'react';

const categories = [
  { name: 'SUIT', image: '/suite.jpeg' },
  { name: 'ADIRE', image: '/adire.jpeg' },
  { name: 'KAFTAN', image: '/kaftan.jpeg' },
  { name: 'GOWN', image: '/gown.jpeg' }
];

export default function ExploreMore() {
  return (
    <div className=" flex flex-col items-center max-w-[1440px] m-auto bg-white px-4 py-10 text-black">
      <h2 className="w-[80%] text-[24px] uppercase mb-6 mt-[100px]">EXPLORE MORE</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* refactor to component to add event handling */}
        {categories.map((category, index) => (
          <div key={index} className="relative w-full max-w-[612px] h-[475px] group overflow-hidden mx-auto">
            <Image 
              src={category.image} 
              alt={category.name} 
              width={612} 
              height={475} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 hover:bg-black hover:opacity-40  bg-black opacity-55 transition-all duration-300 group-hover:bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-lg font-bold">{category.name}</h3>
            </div>
            <button className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[228px] h-[61px] bg-black text-white transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bg-amber-500 flex items-center justify-center">
              Shop Now
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}
