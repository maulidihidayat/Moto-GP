"use client";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import {
  FaAlignRight,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { LiaFlagUsaSolid } from "react-icons/lia";

const Icon = () => {
  return (
    <>
      <div className="flex justify-between p-4 text-white">
        <button>
          <div className="flex gap-4">
            <FaFacebook href="/" className="h-7 w-7" />
            <FaYoutube href="" className="h-7 w-7" />
            <BsTwitterX href="" className="h-7 w-7" />
            <FaInstagram href="" className="h-7 w-7" />
          </div>
        </button>
      </div>
    </>
  );
};

export default Icon;
