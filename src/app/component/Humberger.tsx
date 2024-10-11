'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { GoX } from 'react-icons/go'
import { RxHamburgerMenu } from 'react-icons/rx'



const Humberger = () => {

    const [isOpen , setIsopen] = useState(false);

  return (
    <>
    <button onClick={() => setIsopen(true)}>
        <RxHamburgerMenu className="sticky h-10 w-10 m-5 font-thin hover:text-gray-300 hover:ease-out" />
    </button>

    
    </>
  )
}

export default Humberger