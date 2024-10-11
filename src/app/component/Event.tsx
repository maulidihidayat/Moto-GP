import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface Event {
  tombol: string | StaticImport;
}

const Event = ({ tombol }: Event) => {
  return (
    <>
      <button>
        <Image src={tombol} width={100} height={100} alt="ini tombol"></Image>
      </button>
    </>
  );
};

export default Event;
