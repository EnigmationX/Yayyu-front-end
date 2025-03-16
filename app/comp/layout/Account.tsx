'use client';
import React from 'react'
import Banner from './banner';
import { useState } from 'react';
import Image from 'next/image';
function Account() {
    const [activeTab, setActiveTab] = useState('orderList');
  return (
  <>
<Banner imageUrl='/clothes.jpeg' text="ACCOUNT" alt='Account Banner'/>
<div className="flex m-auto max-w-[1440px] pb-[100px] bg-gray-200 pt-[56px]">
      {/* Sidebar */}
      <div className="w-[276px] pl-[20px] pr-[14px]  h-[549px] "> 
        <ul className="space-y-4  flex  flex-col max-w-[95%]  bg-white h-full text-black">
          {[
            { key: 'orderList', label: 'Order List',icon:'/icons/ol.png' },
            { key: 'wishList', label: 'Wish List',icon:'/icons/wl.png' },
            { key: 'inbox', label: 'Inbox',icon:'/icons/ib.png' },
            { key: 'editAccount', label: 'Edit Account',icon:'/icons/ea.png' },
            { key: 'changePassword', label: 'Change Password',icon:'/icons/lk.png' },
         ].map((tab) => (
            <li
              key={tab.key}
              className={`text-sm cursor-pointer py-[10px]  px-[4px] flex items-center ${activeTab === tab.key ? 'bg-gray-100' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
            <Image
            className='mr-2.5'
                 key={tab.key}
                 src={tab.icon} 
                width={18} 
                height={18}
              alt={tab.label}/>
              {tab.label}
            </li>
          ))}
          <li className=' flex items-center text-sm mt-auto   p-[16px] justify-center border-t-2 border-gray-300 ' >
            <Image src='/icons/lo.png' alt='Logout' width={20} height={20} className='pr-2'/>
          Logout
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 pr-6 text-black h-[549px]">
        {activeTab === 'orderList' && (
          <div className=" flex flex-col justify-center bg-white h-full text-center">
            <div className=' flex justify-center'><Image src='/icons/ec.png' alt='ec' width={70} height={70}/></div>
            <p className='text-sm py-[30px]'>You haven't placed any orders yet.</p>
            <p><button className="mt-4  px-4 py-2 max-w-[228px] bg-black text-white">Continue Shopping</button></p>
          </div>
        )}

        {activeTab === 'wishList' && (
              <div className=" flex flex-col justify-center bg-white h-full text-center">
              <div className=' flex justify-center'><Image src='/icons/wishlist.png' alt='wl' width={70} height={70}/></div>
              <p className='text-sm py-[30px]'>Your Wish List is Empty</p>
              <p><button className="mt-4  px-4 py-2 max-w-[228px] bg-black text-white">Continue Shopping</button></p>
            </div>

        )}

        {activeTab === 'inbox' && <div className="flex flex-col justify-center bg-white h-full text-center">Your Inbox is Empty</div>}

        {activeTab === 'editAccount' && (
          <form className="flex flex-col items-center justify-center bg-white h-full">
            <div className='w-[55%] '>
            <div className='mb-3'>
              <label className="block text-sm font-medium">First Name</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="First Name" />
            </div>

            <div  className='mb-3'>
              <label className="block text-sm font-medium">Last Name</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Last Name" />
            </div>
            <div  className='mb-3'>
              <label className="block text-sm font-medium">E-mail</label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Enter your email" />
            </div>
            <button type="submit" className="w-full bg-black text-white py-3 rounded-md">Save Changes</button>
            </div>
          </form>
        )}

        {activeTab === 'changePassword' && (
          <form className="flex flex-col items-center justify-center bg-white h-full">
           <div className='w-[55%] '>
            <div  className='mb-3'>
              <label className="block text-sm font-medium">Current Password</label>
              <input type="password" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Current Password" />
            </div>
            <div  className='mb-3'>
              <label className="block text-sm font-medium">New Password</label>
              <input type="password" className="w-full p-3 border border-gray-300 rounded-md" placeholder="New Password" />
            </div>
            <div  className='mb-3'>
              <label className="block text-sm font-medium">Confirm New Password</label>
              <input type="password" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Confirm New Password" />
            </div>
            <button type="submit" className="w-full bg-black text-white py-3 rounded-md">Change Password</button>
           </div>
          </form>
        )}
      </div>
    </div>
  </>
  )
}

export default Account