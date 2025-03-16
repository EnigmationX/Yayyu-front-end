import React from "react";
import ProductCard from "./productcard";
import { Product } from "../data";

interface ProductGridProps {
  products: Product[];
  heading:string,
  viewall:boolean,
  seeAll:boolean
}

const ProductGrid: React.FC<ProductGridProps> = ({ viewall,products,heading,seeAll}) => {
  return (
    <section className="bg-white flex-col flex items-center max-w-[1440px] mx-auto py-13">
      <div className=" flex w-full justify-between items-center">
{!!heading?<h2 className="text-[24px] uppercase w-[80%] text-black text-left mb-5 mt-15">{heading}</h2>:''}
 {seeAll&&<div className="text-base text-black">Sell all</div>}
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
        
      </div>
    { viewall&&<div className="max-w-[1440px] flex mt-[75px] items-center">
        <button className="uppercase  w-[225px] h-[61px] bg-black hover:bg-amber-300 hover:text-black transition-all duration-300">view all</button>
    </div>}
    </section>
  );
};

export default ProductGrid;