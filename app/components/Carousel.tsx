'use client';

import React, { useState } from "react";
import {
    car1,
    car2,
    car3,
    car4,
    car5,
    car6,
    car7,
    car8,
} from "@/public/carousel-pics/index";


import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";
// import { RxDotFilled } from "react-icons/di";

function Carousel() {
    const slides = [car1, car2, car3, car4, car5, car6, car7, car8];

    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    return (
        
            <div className="max-w-[1400px] h-[600px] w-full mx-auto my-1 py-16 px-2 relative group max-md:h-[400px]">
                <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500 transition-all">
                    <Image src={slides[currentIndex]} alt="" />
                </div>
                {/* Left Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                {/* navigation dots */}
                <div className="flex top-2 bottom-3 justify-center py-2">
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className="text-2xl cursor-pointer"
                        >
                            <RxDotFilled className="mt-4" />
                        </div>
                    ))}
                </div>
            </div>
        
    );
}

export default Carousel;
