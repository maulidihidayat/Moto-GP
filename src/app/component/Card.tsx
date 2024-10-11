import Image from 'next/image';
import React from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface Card {
    gambar : string | StaticImport
    card : string
    desc : string 
    isActive? : boolean

    // ternery operator
    // && digunakan ketika tidak ada else nya


}
const Card = ({gambar , card , desc , isActive} : Card) => {
  return (
    <div>
      <Image
        src={gambar}
        width={800}
        height={500}   
        alt='event'  
        className='sm:w-full' 
      />
      <div>
        <div className='flex justify-between  lg:text-right'>
            <span>{card}</span>
            <p>{new Date().toLocaleTimeString()}</p>
        </div>
            <h2 className="font-bold mt-4">{desc}</h2>
      </div>
    </div>
  );
};

export default Card;
