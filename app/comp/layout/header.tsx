import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/logo.png'
import account from 'public/account.png'
import like from 'public/like.png'
import search from 'public/search.png'
import cart from 'public/cart.png'
import arrow from "public/arrow.svg"
export default function Header() {
    return (
        <header className='flex m-auto relative  justify-center text-sm h-[105px]  shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] px-[30px] bg-white  text-gray-950'>
            <div className='w-[90%] relative max-w-[1440px] flex justify-between items-center'>
 {/* nav section */}
 <ul className='flex  relative  list-none '>
                <li className='pr-[25px] uppercase'><Link href="/">Home</Link></li>
                <li className='pr-[25px] uppercase'><Link href="/about">About Us</Link></li>
                <li className='pr-[25px] uppercase relative flex items-center cursor-pointer group'>
                    Shop
                    <Image src={arrow} alt='arrow down' className='transform group-hover:rotate-180 transition-transform duration-300'/>
                     {/* Dropdown Menu Shopping */}
                     <ul className="absolute  top-full  z-50 overflow-visible mt-2 w-48 bg-white  border-t-2 shadow-lg border-amber-300 hidden group-hover:flex flex-col transition-all duration-300">
                        <li className="px-4 py-2  hover:bg-gray-100">
                        <Link href="/collection">Collection</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                        <Link href="/category">Category</Link>
                        </li>
                     </ul>
                </li>
                <li className='uppercase'><Link href="/contact">Contact US</Link></li>
            </ul>
            {/* Logo section */}
            <div className='place-self-center'>
                <Image src={logo} alt='Yayyu BrandLogo' />
            </div>
            {/* Header functionalities */}
            <ul className='list-none flex'>
                <li className='pr-[15px] relative cursor-pointer group'>
                <Image src={account} alt='Account Icon' />
                 {/* Dropdown Menu Shopping */}
                 <ul className="absolute  top-full  z-50 overflow-visible mt-2 w-48 bg-white  border-t-2 shadow-lg border-amber-300 hidden group-hover:flex flex-col transition-all duration-300">
                        <li className="px-4 py-2  uppercase hover:bg-gray-100">
                        <Link href="/sign up">sign up</Link>
                        </li>
                        <li className="px-4 py-2 uppercase hover:bg-gray-100">
                        <Link href="/login">login</Link>
                        </li>
                     </ul>
                </li>
                <li className='pr-[15px]'><Image src={like} alt='like Icon' /></li>
                <li className='pr-[15px]'><Image src={search} alt='search Icon' /></li>
                <li className='pr-[15px]'><Image src={cart} alt='cart Icon' /></li>
            </ul>
            </div>
        </header>
    )
}
