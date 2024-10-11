"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { useState } from "react";
import { IoPerson } from "react-icons/io5";
import Humberger from "./Humberger";

interface Account {
  gambar: string | StaticImport;
}

const Account = ({ gambar }: Account) => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <>
      <div className="flex items-center gap-2 text-xl ">
        <IoPerson />
        <span>My Account</span>

        <Image src={gambar} width={30} height={30} alt="america" />
      </div>
    </>
  );
};

export default Account;
