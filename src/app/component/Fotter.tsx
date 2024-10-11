import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

interface Fotter {
    gambar : string | StaticImport
}

const Fotter = ({gambar} : Fotter ) => {
  return (
    <>
    
    <Image
    src={gambar}
    width={200}
    height={200}
    alt='gambar FG'
    
    
    />
    
    </>
  )
}

export default Fotter