"use client"

import React, { useState, useEffect } from "react";
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

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 5000); // change this value to adjust the interval between slides
        return () => clearInterval(intervalId);
    }, [currentIndex]);

    return (
        <div className="max-w-[1400px] h-[500px] w-full mx-auto my-1 py-16 max-sm:py-auto px-2 relative group max-md:h-[250px] ">
            <div className="w-full h-full rounded-2xl bg-center bg-cover flex items-center transition duration-500 ease-in-out transform">
                <Image src={slides[currentIndex]} alt="" />
            </div>
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            {/* navigation dots */}
            <div className="flex top-2 bottom-3 justify-center py-2 ">
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className="text-2xl cursor-pointer transition duration-500 ease-in-out transform hover:scale-150 rounded-2xl border-1 border-gray-300 "
                    >
                        <RxDotFilled className="mt-4" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;