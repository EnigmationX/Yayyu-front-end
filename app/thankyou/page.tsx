import React from 'react';
import Link from 'next/link';
import Header from '../comp/layout/header';
import Footer from '../comp/layout/footer';
import ProductGrid from '../comp/layout/productGrid';
import {products} from "../comp/data"
export default function ThankYouPage() {
  return (
    <>
    <Header/>
    <div className="flex pt-20  max-w-[1440px] flex-col items-center justify-center min-h-screen bg-white text-center p-4">
      <h1 className="text-3xl font-semibold text-black mb-2">Thank you for the <em>order</em></h1>
      <p className="text-gray-500 mb-1">YOUR ORDER NUMBER IS <span className="font-bold text-gray-600">#234556</span></p>
      <p className="text-gray-500 mb-4">
        We will contact you to confirm your contact information. <br />
        If you have any questions, please write to us at: <br />
        <a href="mailto:info@yayyulifestyles.com" className="text-gray-700 underline">info@yayyulifestyles.com</a>
      </p>
      <Link href="/">
        <button className="bg-black text-white  w-[400px] text-base py-2 px-6 hover:bg-gray-800 transition">Go Back Home</button>
      </Link>
      <ProductGrid heading='best seller' viewall={false} seeAll={true} products={products}/>
    </div>
    <Footer/>
    </>
  );
}
