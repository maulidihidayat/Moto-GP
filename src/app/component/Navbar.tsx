import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  return (
    <div className='flex  flex-col md:flex-row justify-center items-center bg-white/75 p-6 text-black backdrop-blur sticky top-0 transition-all'>
      
      <h1 className='font-bold text-center pt-1 text-lg md:text-xl'>
        GT WORLD SERIES 2024 SPECIAL PAGE
      </h1>

      <div className='mt-2 md:mt-0 ml-0 md:ml-2 bg-gradient-to-tr from-pink-800 to-orange-500 rounded-full text-white px-3 py-1 text-center text-sm md:text-base'>
        All you need to know to watch the race
      </div>
    </div>
  );
};

export default Navbar;
