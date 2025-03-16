import React from 'react'
import Image from 'next/image'
 interface Imager{
    imageUrl:string,
    alt:string,
    text:string
 }

 const Banner : React.FC<Imager>=({imageUrl,alt,text})=>{
  return (
          <div className="relative  max-w-[1440px] md:h-[177px]  m-auto h-[95px]">
            <Image 
              src={imageUrl}
              alt={alt} 
              layout="fill" 
              objectFit="cover" 
              className="absolute inset-0"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-3xl md:text-5xl">{text}</h1>
            </div>
          </div>
  )
}

export default Banner