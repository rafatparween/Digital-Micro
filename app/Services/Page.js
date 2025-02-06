'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  '/appj.jpg',
  '/watch.jpg',
  '/books.jpg',
  '/classic.jpg',
  '/Diary.jpg',
  '/classic.jpg',
  
];

export default function ContentSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Services</h2>
      <p className="text-gray-600 mb-8">Boost your online presence with our expert digital marketing services. From social media managements</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md transform transition duration-500 hover:scale-110 hover:shadow-xl"
            data-aos="zoom-in"
          >
            <Image 
              src={src} 
              alt={`Portfolio item ${index + 1}`} 
              width={400} 
              height={300} 
              className="w-full h-auto transition-transform duration-500 hover:scale-105" 
            />
          </div>
        ))}
      </div>
    </section>
  );
}
