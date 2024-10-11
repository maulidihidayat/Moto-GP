import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

interface Logo {
    gambar : string | StaticImport
}

const Logo = ({gambar} : Logo) => {
  return (
    <>

    <Image
    src={gambar}
    width={100}
    height={100}
    alt='Gambar'
    
    />

    </>
  )
}

export default Logo