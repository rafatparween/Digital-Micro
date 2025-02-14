'use client';

import React, { useRef } from "react";
import Link from "next/link";
import { GlowEffect } from "./Components/GlowEffect";
import Navbar from "./Components/Navbar";
import ContentSection from "./Components/ContentSection";
import Footer from "./Components/Footer";


export default function Home() {
  const websiteDesignRef = useRef(null);
  const graphicDesignRef = useRef(null);
  const shopifyStoresRef = useRef(null);
  const brandsRef = useRef(null);
  const servicesRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
    <Navbar/>
    <div className="w-full md:items-center md:justify-center bg-gradient-to-r from-[#2558a2] via-[#1e8cd8] to-[#00aaff] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Navbar */}
      

      {/* Golden Animated Background */}
      

      {/* Glow Effect */}
      <GlowEffect className="hidden md:flex md:-top-80 left-80" fill="white" />

      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Create, grow, and <br /> scale your business
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
        Micro-Sonic powers your brand with cutting-edge digital marketing strategies. From SEO to social media, we deliver results that elevate your business
        </p>

        <Link
          href="/book"
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white"
        >
          Book a call
        </Link>

        <div className="w-full pt-20"></div>
      </div>
    </div>
    <ContentSection/>
    <Footer/>
    
    
    

    </>
  );
}
