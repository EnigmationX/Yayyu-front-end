 "use client"
 import React from "react"
 import useEmblaCarousel from "embla-carousel-react"
 import Autoplay from "embla-carousel-autoplay"
 import s1 from '../../../public/slider/s1.png'
 import s2 from '../../../public/slider/s2.png'
 import s3 from '../../../public/slider/s3.png'

import Image, { StaticImageData } from "next/image";
  interface slideProp {
  id:number,
  image:StaticImageData,
  alt:string,
 }

 const slides= [
  {
    id: 1,
    image: s1,
    alt: 'Slide 1',
  },
  {
    id: 2,
    image: s2,
    alt: 'Slide 2',
  },
  {
    id: 3,
    image: s3,
    alt: 'Slide 3',
  },
];

const demoSlider = () => {
  const [emblaRef] = useEmblaCarousel({loop:true},[Autoplay()])
  return (
   
    <section>
      <div className="overflow-hidden relative m-auto max-w-[1440px]" ref={emblaRef}>
        <div className="flex">
          {/* Recreate a reusable component */}
        <div className="flex-[0_0_100%] min-w-0  bg-cover bg-center">
          <Image  className="object-cover" src={s1} alt="s1"/>
        </div>
        <div  className="flex-[0_0_100%] min-w-0  bg-cover bg-center">
          <Image  className="object-cover" src={s2} alt="s1"/>
        </div>
        <div  className="flex-[0_0_100%] min-w-0 bg-cover bg-center">
          <Image  className="object-cover" src={s3} alt="s1"/>
        </div>
          {/* {slides.map(({id,image})=><div key={id}  style={{backgroundImage:`url(${image})`}}  className="flex-[0_0_100%] min-w-0 bg-cover bg-center"></div>)} */}
        </div>
        
         {/* Overlay Text and Button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center  text-white">
        <h1 className="text-5xl font-bold mb-4">Classic and Premium Collection</h1>
        <button className="px-6 py-3 bg-gray-950 text-white  font-[14px] hover:bg-white hover:text-black transition duration-300">
          Shop Collection Now
        </button>
      </div>
      </div>
    </section>
  
  );
};

export default demoSlider;