"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import gambar from "@/assets/logo-gt.png";
import { GoX } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  // Using useEffect to monitor scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowHamburger(true);
      } else {
        setShowHamburger(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Button to open sidebar, only shown when sidebar is closed and after scroll */}
      {!isOpen && showHamburger && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-5 right-5 z-50 mx-"
        >
          <RxHamburgerMenu className="h-10 w-10 text-white hover:text-gray-300 transition-all ease-in-out duration-300" />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed h-screen bg-gradient-to-b from-zinc-700 to-slate-600 w-4/5 md:w-1/3 lg:w-1/5 right-0 transition-transform duration-300 ease-in-out overflow-x-hidden overflow-y-hidden z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Image X button */}
        <button
          onClick={() => setIsOpen(false)}
          className="flex justify-end ml-4 mt-5"
        >
          <GoX className="h-10 w-10 text-white hover:text-gray-300" />
        </button>

        {/* Sidebar content */}
        <div className="p-6 ">
          <Image
            src={gambar}
            width={80}
            height={80}
            alt="Logo"
            className="mb-5"
          />

          <Link className="block text-sm" href="/">
            Home
          </Link>
          <Link
            className="block text-xl font-normal mt-1 hover:text-gray-300"
            href="/"
          >
            NEWS
          </Link>
          <Link
            className="block text-xl font-normal mt-1 hover:text-gray-300"
            href="/"
          >
            GT 7
          </Link>
          <Link
            className="block text-xl font-normal mt-1 hover:text-gray-300"
            href="/"
          >
            GT LIVE
          </Link>
          <Link
            className="block text-xl font-normal mt-1 hover:text-gray-300"
            href="/"
          >
            PRODUCT
          </Link>

          <div className="mt-8">
            <Link
              className="block text-xl font-normal mt-1 hover:text-gray-300"
              href="/"
            >
              GT ACADEMY
            </Link>
            <Link
              className="block text-xl font-normal mt-1 hover:text-gray-300"
              href="/"
            >
              GT WORLD SERIES
            </Link>
            <Link
              className="block text-xl font-normal mt-1 hover:text-gray-300"
              href="/"
            >
              VISION GT
            </Link>
          </div>

          <Link className="text-sm block mt-4" href="/">
            Policy terms
          </Link>
          <Link className="text-sm block mt-4" href="/">
            Poliphony Digital terms
          </Link>
          <Link className="text-sm block mt-4" href="/">
            Policy terms
          </Link>

          {/* Social Media Links */}
          <div className="flex gap-2 mt-5">
            <Link href="/" className="hover:text-gray-300">
              <CiFacebook className="h-5 w-5" />
            </Link>
            <Link href="/" className="hover:text-gray-300">
              <AiOutlineYoutube className="h-5 w-5" />
            </Link>
            <Link href="/" className="hover:text-gray-300">
              <BsTwitterX className="h-5 w-5" />
            </Link>
            <Link href="/" className="hover:text-gray-300">
              <IoLogoInstagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
