"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({
  scrollToWebsiteDesign,
  scrollToGraphicDesign,
  scrollToShopifyStores,
  scrollToBrands,
  scrollToServices,
}) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
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
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/logo/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div
          className="cursor-pointer hidden md:flex space-x-10 items-center 
             text-black text-center"
        >
          <div onClick={scrollToWebsiteDesign} className="hover:text-gray-700">
            Website Design
          </div>
          <div onClick={scrollToGraphicDesign} className="hover:text-gray-700">
            Graphic Design
          </div>
          <div onClick={scrollToShopifyStores} className="hover:text-gray-700">
            Shopify Stores
          </div>
          <div onClick={scrollToBrands} className="hover:text-gray-700">
            Brands
          </div>
          <Link href="/pricing" className="hover:text-gray-700">
            Pricing
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          {isDropDownVisible ? (
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-black cursor-pointer"
            >
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
            href="/contact"
            className="
            inline-flex h-12 items-center justify-center 
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