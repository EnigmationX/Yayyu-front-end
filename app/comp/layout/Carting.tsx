'use client'
import { useState } from "react";
import Banner from "./banner";
import useEmblaCarousel from "embla-carousel-react";
import ProductGrid from "./productGrid";
import {products } from "../data";

const ProductPage = () => {
 const [emblaRef, embla] = useEmblaCarousel();
 const [selectedSize, setSelectedSize] = useState("XL");
  const [selectedColor, setSelectedColor] = useState("red");
  const [quantity, setQuantity] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
   const sizes = ["S", "M", "L", "XL", "XXL"];
  const colors = ["#EF4646", "#464BEF", "#EFB946", "#46CDEF"];
  const images = ["/adireXl.png", "/adireXL.png", "/adireXL.png"];

  return (
    <>
    <Banner imageUrl="/clothes.jpeg" text="Gown" alt="Thumbnail"/>
    <div className="container mx-auto max-w-[1440px] py-20 grid md:grid-cols-2 gap-12">
      {/* Product Image Section */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((src, index) => (
              <img key={index} src={src} alt="Product" className="w-full" />
            ))}
          </div>
        </div>
         <div className="flex justify-around mt-2 gap-2">
          {images.map((src, index) => (
            <button key={index} onClick={() => embla && embla.scrollTo(index)} className={`border rounded ${selectedIndex === index ? "border-black" : "border-gray-300"}`}>
              <img src={src} alt="Thumbnail" className="w-[150px] h-[150px] object-cover" />
            </button>
          ))}
        </div>
      </div>
      
      
      {/* Product Details Section */}
      <div className="text-black">
      <h3 className="text-[13px] uppercase mb-5 font-bold text-gray-800">Abayas</h3>
        <h2 className="text-2xl mb-5 font-bold text-gray-800">THE ADIRE ATTIRE</h2>
        <p className="text-base font-semibold text-gray-700">₦153,000.00</p>
        <p className="mt-3 text-[13px] text-gray-600">
          This modestly loose-fitting open abaya features a soft fluid fabric with a wool-like
          appearance, showcasing intricate Tatreez embroidery on the back and sleeves. Stunning
          earthy green color with tonal embroidery and the delicate ladder lace highlights the
          delicate embroidery.
        </p>
           {/* Review Section */}
           <div className="mt-4 pb-[22px]  border-b-2 border-gray-200 flex items-center gap-2">
          <div className="flex text-yellow-500">
          {Array.from({ length: 4 }, (_, i) => (<span className=" text-[20px]" key={i}>★</span>))}  
           <span className="text-gray-400  text-[20px]">★</span>
          </div>
          <span className="text-gray-800  text-[13px]">26 Reviews</span>
        </div>
        
        {/* Size Selection */}
        <div className="py-5  border-b-2 border-gray-200">
          <h4 className="font-semibold text-[11.5px] uppercase text-gray-800">Size</h4>
          <div className="flex gap-2 mt-2">
            {sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1  ${selectedSize === size ? "bg-black text-white" : "bg-gray-100"}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        
        {/* Color Selection */}
        <div className="py-5  border-b-2 border-gray-200">
          <h4 className="font-semibold uppercase text-[11.5px] text-gray-800">Color</h4>
          <div className="flex gap-2 mt-2">
            {colors.map(color => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border border-gray-300 ${selectedColor === color ? "ring-2 ring-black" : ''}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
        
        {/* Quantity Selector */}
        <div className="mt-5 flex gap-2">
    <span className="bg-gray-100 h-[61px] max-w-[109px] flex items-center">
        <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))} className="px-3 py-1">-</button>
          <span>{quantity}</span>
        <button onClick={() => setQuantity(prev => prev + 1)} className="px-3 py-1">+</button>
    </span>

     <button className="bg-black flex justify-center items-center gap-3 text-base uppercase flex-1/4 h-[61px] text-white">Add to Bag <img src="/icons/bg.png" alt="cart bag icon"/> </button>

         <button className=" bg-gray-100 px-6 py-2 flex items-center justify-center gap-2">
            <span><img src="icons/lov.png" alt="wishlist icon"/></span>
          </button>   
      </div>
        
        {/* Action Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="border border-black bg-gray-100 px-6 py-2 w-full h-[61px] flex justify-center items-center gap-2 uppercase">Buy Now <img src="icons/cv.png" alt="card icon"/></button>
        </div>
        {/* Tab Section */}
        <div className="mt-8">
          <div className="flex gap-2">
            {['description', 'details', 'review'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 transition-all border-b-2  duration-300 ${activeTab === tab ? 'border-b-2 border-black' : 'text-gray-200'}`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="mt-4 w-full text-[13px]">
            {activeTab === "description" && <p>Embrace the vibrant beauty of African Culture with our stunning African print design gown. This eye-catching piece features a bold, colorful pattern that celebrate traditional artistry while offering a modern silhouette</p>}
            {activeTab === "details" && <p>Details about the fabric, fit, and craftsmanship...</p>}
            {activeTab === "review" && <p>Customer reviews and ratings...</p>}
          </div>
        </div>
      </div>
      </div>
      {/* upsell section */}
      <div>
<h3  className="text-center text-black text-xl uppercase pb-16 w-full">YOU MAY ALSO LIKE</h3>
<ProductGrid viewall={false} heading="" products={products}/>
      </div>
    </>
  );
};

export default ProductPage;