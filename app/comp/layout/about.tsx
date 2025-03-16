'use client';

import Image from 'next/image';
import Banner from './banner';

export default function About() {
  return (
      <>
       {/* Banner Section */}
      <Banner imageUrl='/clothes.jpeg' text="ABOUT US" alt='About us Banner'/>

      {/* Content Section */}
      <div className="max-w-[1440px] flex justify-center w-[100%] m-auto py-12 ">
        <div className="flex flex-col w-[80%] gap-8">
          {/* Image */}
          <div className="flex justify-center">
            <Image 
              src="/fatso.jpeg" 
              alt="About Us" 
              width={600} 
              height={400} 
              className=""
            />
          </div>

          {/* Text Content */}
          <div className=" max-w-[1440px] flex justify-center items-center flex-col text-black text-base">
            <p className=" w-[80%] mb-4">
              At YAYYU, we believe that every woman deserves to feel both comfortable and stylish, no matter the occasion.
              Our mission is to provide sustainable clothing options that blend elegance with modern design, suitable for both formal and informal settings.
            </p>
            <p className=" w-[80%] mb-4">
              We are committed to using only the finest materials and delivering exceptional designs that reflect our dedication to quality. 
              Our collections feature modest yet fashionable styles with clean cuts, ensuring that each piece enhances your wardrobe.
            </p>
            <p className=' w-[80%]'>
              As a s ocially empowered team, we strive to make shopping easy and enjoyable through our thoughtfully crafted designs and fast, seamless delivery. 
              We aim to inspire women across the globe to embrace their unique style and wear pieces that make them feel their best, always.
            </p>
          </div>
        </div>
      </div>
      </>
  );
}
