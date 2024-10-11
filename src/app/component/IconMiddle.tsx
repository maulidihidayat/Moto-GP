import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'



interface IconMiddle {
    gambar : string | StaticImport
}

const IconMiddle = ({gambar} : IconMiddle) => {
  return (
    <div className='flex justify-center '>
        <Image        
        src={gambar}
        width={100}
        height={100}
        alt='GP Logo'
    
        />

    </div>
  )
}

export default IconMiddle