import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface CardEvent {
  gambar: string | StaticImport;
  infor: string;
  describe: string;
}

const CardEvent = ({ gambar, infor, describe }: CardEvent) => {
  return (
    <>
      <div className="">
        <Image
          src={gambar}
          width={800}
          height={500}
          alt="gambar"
          className=""
        />

        <h2 className="mt-2">{describe}</h2>
        <div className="flex justify-between text-sm border-b-gray-500 border-b mt-4">
          <span className="text-l">{infor}</span>
          <p>{new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </>
  );
};

export default CardEvent;
