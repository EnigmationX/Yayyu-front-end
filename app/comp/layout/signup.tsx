'use client';

import Image from 'next/image';

export default function Signup() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-12">
        <h2 className="text-center text-2xl text-black font-semibold mb-6">Register your account</h2>
        
        <form>
          <div className="mb-4">
            <label className="block  text-black text-sm font-medium">First Name</label>
            <input type="text" placeholder="First name" className="w-full p-3 text-black border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-medium ">Last Name</label>
            <input type="text" placeholder="Last name" className=" text-black w-full p-3 border  border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-medium">E-mail</label>
            <input type="email" placeholder="Email" className="w-full text-black p-3 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-medium">Your Password</label>
            <input type="password" placeholder="Password" className="w-full text-black p-3 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <input type="password" placeholder="Confirm password" className="w-full text-black p-3 border border-gray-300 rounded-md" />
          </div>
          
          <p className="text-xs text-gray-500 text-center mb-4">
            By clicking, signup you agree to Yayyu <a href="#" className="text-blue-600">Terms of Use</a> and <a href="#" className="text-blue-600">Privacy Policy</a>
          </p>
          
          <button className="w-full  bg-black text-white p-3 rounded-md">Signup</button>
        </form>

        <div className="my-4 text-center text-gray-500">OR</div>
        
        <button className="w-full flex items-center justify-center bg-black text-white p-3 rounded-md">
          <Image src="/icons/g.png" alt="Google" width={20} height={20} className="mr-2" />
          Sign up with Google
        </button>
      </div>
    </div>
  );
}