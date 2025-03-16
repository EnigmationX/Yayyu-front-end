'use client';

import Image from 'next/image';

export default function Sigin() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md ">
        <h2 className="text-center text-2xl text-black font-semibold mb-6">Register your account</h2>
        
        <form>

          <div className="mb-4">
            <label className="block text-black text-sm font-medium">E-mail</label>
            <input type="email" placeholder="Email" className="w-full text-black p-3 border border-gray-300 rounded-md" />
          </div>

          <div className="mb-4">
            <label className="block text-black text-sm font-medium">Your Password</label>
            <input type="password" placeholder="Password" className="w-full text-black p-3 border border-gray-300 rounded-md" />
          </div>

          
          <div className="flex py-5 justify-between text-[10px] text-gray-700">
          <p className='w-[70%] capitalize'>By clicking, Log in you agree to yayyu <a href="#" className="underline">Terms of Use</a> and <a href="#" className="underline">Privacy Policy</a></p>
          <a href="#" className="underline">Forgot password?</a>
        </div>
          
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