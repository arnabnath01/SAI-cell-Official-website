'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const images = [
  { src: "/public/mentors/D K Pratihar.jpeg", alt: 'Image 1', name: 'Name 1' },
  { src: "/public/mentors/JSB.jpeg", alt: 'Image 2', name: 'Name 2' },
  { src: "/public/mentors/Purbarun Dhar.jpeg", alt: 'Image 3', name: 'Name 3' },
  { src: "/public/mentors/S K Saha.jpeg", alt: 'Image 4', name: 'Name 4' },
  { src: "/public/mentors/ssr.jpg", alt: 'Image 5', name: 'Name 5' },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative">
      <div className="flex transition-all ease-in-out duration-1000" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="my-1 px-1 lg:my-4 lg:px-4 w-full flex-shrink-0">
            <article className="overflow-hidden rounded-lg shadow-lg transition duration-500 ease-in-out transform-gpu hover:scale-110">
              {/* <Link href="/"> */}
                
                  <Image
                    alt={image.alt}
                    className="block h-auto w-full"
                    src={image.src}
                    width={300}
                    height={300}
                  />
               
              {/* </Link> */}
              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-md">
                  {/* <Link href="/"> */}
                    <div className="no-underline hover:underline hover:text-blue-400 text-black">{image.name}</div>
                  {/* </Link> */} 
                </h1>
              </header>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;