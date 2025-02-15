'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='flex flex-col w-full bg-white relative'>
      <div className='flex p-2 shadow-lg border-b-2 w-full'>
        <div className='flex md:w-[20%] items-center'>
          <Image src='/logo.png' width={50} height={50} alt='logo' />
          <h2 className='text-xl font-semibold px-2'>USA Converter</h2>
        </div>
        
        <div className='hidden md:flex justify-center items-center w-[60%]'>
          <ul className='flex gap-5 text-md'>
            <Link href="/">
            <li>Home</li>
            </Link>
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        
        <div className='hidden md:flex w-[20%] justify-center'>
          <button className='bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-lg text-white'>Contact</button>
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden flex items-center ml-auto'>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='absolute top-full left-0 w-full bg-white shadow-md p-4 md:hidden z-50'>
          <ul className='flex flex-col gap-4 text-md'>
            <li>Home</li>
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>
              <button className='bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-lg text-white w-full'>Contact</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
