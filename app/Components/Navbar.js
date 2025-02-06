"use client";

import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  return (
    <div className="bg-white">
      <div
        className="p-6 md:p-10 flex items-center justify-between z-50 bg-white text-black 
            rounded-md border border-slate-800 px-6 font-medium transition-colors
             focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
            focus:ring-offset-slate-50"
      >
        <div>
          <div className="text-[24px] hover:text-gray-700">
            Micro-Sonic
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="cursor-pointer hidden md:flex space-x-10 items-center text-black text-center">
          <Link href="/about" className="hover:text-gray-700">
            About
          </Link>
          <Link href="/Services" className="hover:text-gray-700">
            Services
          </Link>
          <Link href="/contact" className="hover:text-gray-700">
            Contact
          </Link>
          <Link href="/login" className="hover:text-gray-700">
            Login
          </Link>
          <Link href="/pricing" className="hover:text-gray-700">
            Signup
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          {isDropDownVisible ? (
            <div onClick={toggleDropDown} className="w-8 h-8 text-black cursor-pointer">
              <X />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-black cursor-pointer"
            />
          )}
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center 
            rounded-md border border-slate-800 bg-white text-black px-6 font-medium transition-colors
             focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
            focus:ring-offset-slate-50"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
