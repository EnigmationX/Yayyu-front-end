'use client';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-100 px-6 py-10 md:px-20 text-black">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div>
          <Image src="/logo.png" alt="Yayyu Logo" width={100} height={40} />
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">QUICK LINK</h3>
          <ul className="space-y-1">
            <li><a href="#" className="text-gray-600">Home</a></li>
            <li><a href="#" className="text-gray-600">Categories</a></li>
            <li><a href="#" className="text-gray-600">About Us</a></li>
            <li><a href="#" className="text-gray-600">Contact</a></li>
            <li><a href="#" className="text-gray-600">FAQs</a></li>
          </ul>
        </div>
        
        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-2">LEGAL</h3>
          <ul className="space-y-1">
            <li><a href="#" className="text-gray-600">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-600">Shipping Policy</a></li>
            <li><a href="#" className="text-gray-600">Delivery Policy</a></li>
            <li><a href="#" className="text-gray-600">Return Policy</a></li>
          </ul>
        </div>
        
        {/* Follow Us */}
        <div>
          <h3 className="font-semibold mb-2">FOLLOW US ON</h3>
          <div className="flex space-x-3">
            <Image src="/icons/fb.png" alt="Facebook" width={24} height={24} />
            <Image src="/icons/in.png" alt="Instagram" width={24} height={24} />
            <Image src="/icons/tk.png" alt="TikTok" width={24} height={24} />
            <Image src="/icons/x.png" alt="Twitter" width={24} height={24} />
            <Image src="/icons/ln.png" alt="LinkedIn" width={24} height={24} />
          </div>
        </div>
      </div>
      
      {/* Subscription Form */}
      <div className="max-w-7xl mx-auto mt-10 text-center md:text-left">
        <h3 className="font-semibold mb-2">JOIN OUR COMMUNITY</h3>
        <div className="flex flex-col md:flex-row gap-2 md:items-center">
          <input type="email" placeholder="Email Address" className="w-full max-w-[400px] bg-white md:w-auto p-3 border border-gray-300" />
          <button className="w-full md:w-auto bg-black text-white px-6 py-3">Subscribe</button>
        </div>
        <p className="text-gray-500 text-[11px] mt-2">Join the Yayyu community for exclusive access, special offers, and early notifications about our new collections!</p>
      </div>
    </footer>
  );
}
