import React from 'react'
import Image from 'next/image'
import ar from "../../../public/arrow-right.png"
function Learn() {
  return (
    <div className='max-w-[1440px] items-center flex-col pt-[62px] flex m-auto bg-white text-black'>
        <div className='w-[80%] flex justify-between   '>
            <p className='text-lg'>MODESTY AT THE CORE OF EVERY DESIGN</p>
            <p className='text-base flex-[0_0_104px] flex justify-between items-baseline '><>Learn More</><Image src={ar} alt='arrow-right icon'/></p>
        </div>
        <div className='text-left py-9 w-[80%] text-[32px] italic'>To provide sustainable clothing for both,<br/> formal and informal occasions. </div>
    <div className='w-[80%] flex items-center'>
        <p className='w-[60%] text-left text-base'>We are dedicated to crafting garments using only the finest materials,
             emphasizing durability and elegance. Each piece in our collection is thoughtfully designed with exceptional
         craftsmanship, allowing you to express
          your individuality while feeling confident and comfortable.</p>          
    <div className='text-right w-[40%] text-base'>DISCOVER THE POWER OF BEAUTY</div>
          </div>
          <div className='w-[80%] pt-[39px] flex justify-start'>
          <p className='text-base  justify-between  flex flex-[0_0_104px] items-baseline '><>Learn More</><Image src={ar} alt='arrow-right icon'/></p>
          </div>
    </div>
  )
}

export default Learn