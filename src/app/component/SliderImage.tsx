"use client";

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

interface SliderImageProps {
    gambarList: Array<string | StaticImport>;
}

const SliderImage = ({ gambarList }: SliderImageProps) => {
  return (
    <div className="flex overflow-x-auto">
      {gambarList.map((gambar, index) => (
        <div
          key={index}
          className="group cursor-pointer transition-transform duration-300 ease-in-out overflow-x-hidden overflow-y-hidden"
        >
          <Image
            src={gambar}
            width={300} 
            height={300} 
            alt={`SliderImage-${index}`}
            className="group-hover:scale-125 transition-transform duration-300 ease-in-out w-72 h-72 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover" 
          />
        </div>
      ))}
    </div>
  )
}

export default SliderImage;
