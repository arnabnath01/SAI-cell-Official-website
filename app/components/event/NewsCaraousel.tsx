"use client";

import React, { useEffect, useRef } from "react";
import {gsap } from "gsap";

import "@/styles/eventCaraousel.scss";


const NewsCaraousel: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef.current) return;
    const cards = Array.from(
      sliderRef.current.querySelectorAll(".slider-item")
    );

const startAnim = (array: Element[]) => {
    gsap.set(array[0], { x: 0, y: 0, opacity: 0.75 });
    gsap.to(array[0], {
        duration: 0.5,
        x: 0,
        y: -120,
        opacity: 0,
        zIndex: 0,
        delay: 0.03,
        ease: "power1.inOut",
        onComplete: () => sortArray(array),
    });

    gsap.set(array[1], { x: 79, y: 125, opacity: 1, zIndex: 1 });
    gsap.to(array[1], {
        duration: 0.5,
        x: 0,
        y: 0,
        opacity: 0.75,
        zIndex: 0,
        boxShadow: "-5px 8px 8px 0 rgba(82,89,129,0.05)",
        ease: "power1.inOut",
    });

    gsap.set(array[2], { boxShadow: "-5px 8px 8px 0 rgba(82,89,129,0.05)", zIndex: 1, opacity: 1 });
    gsap.to(array[2], {
        duration: 0.5,
        bezier: [
            { x: 0, y: 250 },
            { x: 65, y: 200 },
            { x: 79, y: 125 },
        ],
        ease: "power1.inOut",
    });

    gsap.set(array[3], { x: 0, y: 400, opacity: 0, zIndex: 0 });
    gsap.to(array[3], {
        duration: 0.5,
        x: 0,
        y: 250,
        opacity: 0.75,
        zIndex: 0,
        ease: "power1.inOut",
    });
};
    const sortArray = (array: Element[]) => {
      setTimeout(() => {
        const firstEle = array.shift();
        if (firstEle) {
          array.push(firstEle);
          startAnim(array);
        }
      }, 3000);
    };

    startAnim(cards);
  }, []);

  return (
   
        <div className="slider-wrap">
            <div id="card-slider" className="slider" ref={sliderRef}>
                <div className="slider-item">Item 1</div>
                <div className="slider-item">Item 2</div>
                <div className="slider-item">Item 3</div>
                <div className="slider-item">Item 4</div>
            </div>
        </div>
    );
 
};

export default NewsCaraousel;
