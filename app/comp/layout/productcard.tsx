"use client"
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";


interface Product {
  id: string;
  imageUrl: string;
  title: string;
  price: string;
}

const ProductCard: React.FC<Product> = ({ id, imageUrl, title, price }) => {
  const router = useRouter();

  // Click Event Handler
  const handleClick = () => {
    alert(`You clicked on ${title}!`);
    // router.push(`/product/${id}`); // Uncomment to navigate
  };
  return (
    <div
      className="w-full max-w-xs text-black bg-white cursor-pointer hover:scale-105 transition-transform duration-300"
      onClick={handleClick}
    >
      {/* Product Image */}
      <div className="relative">
        <Image src={imageUrl} alt={title}  width={313} height={402} className="w-full h-80 object-cover" />
      </div>

      {/* Product Details */}
      <div className="text-center mt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-xl font-bold mt-1">₦{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;