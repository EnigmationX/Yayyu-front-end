import React from "react";
import Header from "../comp/layout/header";
import Footer from "../comp/layout/footer";
import Banner from "../comp/layout/banner";
import Link from "next/link";
import Image from "next/image";
export default function Checkout() {
    return (
        <>
     <Header/>
        <Banner imageUrl="/clothes.jpeg"  alt="checkout" text="Checkout"/>
         <div className="max-w-[1440px] text-black  mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side: Contact, Delivery, Shipping, Payment */}
        <div className="  py-20 space-y-6">
          <div>
            <div className="flex justify-between items-center w-full">
            <h2 className="text-lg font-semibold mb-2">Contact</h2>
              <Link  className="text-sm underline" href="/login">Log in</Link>
            </div>
            <input type="email" placeholder="Email" className="w-full border-gray-300 p-2 border rounded" />
            <label className="text-[12px] w-full p-2 cursor-pointer">
            <input type="checkbox" className="pt-5"/> Sign up for order updates, exclusive offers and news on WhatsApp and/or Email
            </label>
          </div>
  
          <div>
            <h2 className="text-lg font-semibold mb-2">Delivery</h2>
            <select className="w-full p-2 text-sm text-gray-400 border-gray-300 border rounded mb-2">
              <option>Select Country/Region</option>
            </select>
            <div className="grid grid-cols-2 gap-2">
              <input type="text" placeholder="First Name" className="p-2 text-sm text-gray-400 border-gray-300 border rounded" />
              <input type="text" placeholder="Last Name" className="p-2 text-gray-400 text-sm border-gray-300 border rounded" />
            </div>
            <input type="text" placeholder="Address" className="w-full p-2 text-gray-400 text-sm border-gray-300 border rounded mt-2" />
            <input type="text" placeholder="Apartment, suite, etc." className="w-full text-sm text-gray-400 border-gray-300 p-2 border rounded mt-2" />
            <input type="text" placeholder="City" className="p-2 border rounded text-gray-400 text-sm border-gray-300 w-full  mt-2" />
            <div className="grid grid-cols-2 gap-2 mt-2">
            <select className="w-full p-2 text-sm text-gray-400 border-gray-300 border rounded">
              <option>State</option>
            </select>              <input type="text" placeholder="Postal Code" className="p-2 text-sm border rounded text-gray-400 border-gray-300" />
            </div>
            <label className="text-[12px] w-full cursor-pointer">
            <input type="tel" placeholder="Phone" className="w-full text-gray-400 border-gray-300 p-2 text-sm border rounded mt-2" />
            <input type="checkbox" className="pt-5"/> Sign up for order updates, exclusive offers and news on WhatsApp and/or Email
            </label>
          </div>
          <div>
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <input type="email" placeholder="Email" className="w-full border-gray-300 p-2 border rounded" />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Shipping Method</h2>
            {[{location:'within lagos',price:'₦5000'},{location:'within Nigeria',price:'₦10,000 '},{location:'outside Nigeria',price:'₦15,000'}].map(({price,location},index) => (
              <label key={index} className="flex items-center  justify-between border p-3 text-sm border-gray-300">
                <span><input type="radio" name="shipping" className="mr-2" /> Standard ({location},3 - 7 days)</span> <span className="text-xl">{price}</span> 
              </label>
            ))}
          </div>
  
          <div>
            <h2 className="text-lg font-semibold mb-2">Payment</h2>
            <span className="text-[12px] text-left">All transactions are secure and encrypted.</span>
            
            <div className=" bg-gray-100">
              <div className="flex items-center justify-between p-2 border mb-4 border-gray-300">
                <span className="capitalize text-sm ">Credit card</span>
                <img src="/icons/cc.png" alt="cc"/>
              </div>
            <div className="grid grid-cols-1 px-4.5">
             <input type="text" placeholder="Card number" className="p-2 border text-sm  border-gray-300 bg-transparent  mb-2" />
             <div className="grid grid-cols-2 gap-4 mb-3">
              <input type="text" placeholder=" Expiration date MM / YY" className="p-2 border border-gray-300 text-sm" />
              <input type="text" placeholder="Security Code" className="p-2 border  border-gray-300 text-sm" />
             </div>
              
              <input type="text" placeholder="Name on card" className="p-2 border mb-4.5 border-gray-300 text-sm" />
            </div>
            </div>
          </div>
          <label className="text-[12px] w-full p-2 cursor-pointer">
            <input type="checkbox" className="pt-5"/> Use shipping address as billing address
            </label>
  
          <button className="w-full bg-black text-white py-2 mt-4 uppercase">Pay</button>
        </div>
  
        {/* Right side: Order Summary */}
        {/* <div className="bg-gray-50  pt-32 p-6 rounded-md shadow">
          <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
          <div className="space-y-2">
            {["The Anika dress", "The Aisha dress"].map((item, index) => (
              <div key={index} className="flex justify-between">
                <span>{item}</span>
                <span>₦150,000</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <span>Subtotal</span>
            <span>₦300,000</span>
          </div>
          <div className="flex justify-between mt-1">
            <span>Shipping</span>
            <span>₦5,000</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>₦305,000</span>
          </div>
        </div> */}


    <div className=" border-l-2 h-full border-gray-200 pt-32 p-6">
      {/* Product Items */}
      <div className="space-y-4 border-b pb-4">
        {[1, 2].map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="relative w-16 h-16">
              <Image
                src="/adire.png" // Replace with your image path
                alt="The Adire Attire"
                layout="fill"
                className="rounded-md object-cover"
              />
              <div className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                1
              </div>
            </div>
            <div className="flex-1 ml-4">
              <p className="text-sm font-semibold">The Adire Attire</p>
              <p className="text-xs text-gray-500">with colour varieties</p>
            </div>
            <p className="text-sm font-semibold">₦150,000.00</p>
          </div>
        ))}
      </div>

      {/* Discount Code */}
      <div className="flex items-center gap-2 mt-4">
        <input
          type="text"
          placeholder="Discount code or gift card"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400"
        />
        <button className="bg-gray-200 text-sm px-4 py-2 rounded-md hover:bg-gray-300">
          Apply
        </button>
      </div>

      {/* Price Breakdown */}
      <div className="mt-4 space-y-1">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>₦150,000.00</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Shipping</span>
          <span>₦5,000.00</span>
        </div>
        <div className="flex justify-between text-base font-bold mt-2">
          <span>Total</span>
          <span>₦155,000.00</span>
        </div>
      </div>
    </div>


      </div>
      <Footer/>
        </>
    );
  }
  