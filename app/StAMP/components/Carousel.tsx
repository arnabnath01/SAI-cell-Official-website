"use client"


import "@/styles/mentor.css"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

interface Mentor {
  name: string;
  Department: string;
  image: string;
  desc: string;
}

interface CarouselProps {
  mentors: Mentor[];
  width?: string;
  height?: string;
  space?: string;
  max?: string;
  title?: boolean;
  bullets?: boolean;
  lang?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  mentors,
  width = '200',
  height = '200',
  space = '30',
  max = '850',
  title = true,
  bullets = false,
  lang = 'en',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mentors || mentors.length === 0) {
      return; // Do nothing if mentors are not available or empty
    }

    const carouselElement = carouselRef.current;
    if (!carouselElement) return;

    const mentorCount = mentors.length;
    const mentorWidth = Number(width) + Number(space);
    const maxScroll = mentorWidth * (mentorCount - 1);

    let interval: number;

    const rotateMentors = () => {
      setActiveIndex((prevIndex) => {
        if (prevIndex === mentors.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    };
    const startCarousel = () => {
      interval = window.setInterval(rotateMentors, 1000); // 4000 milliseconds (4 seconds)
    };

    const stopCarousel = () => {
      clearInterval(interval);
    };

    const handleMouseEnter = () => {
      stopCarousel();
    };

    const handleMouseLeave = () => {
      startCarousel();
    };

    startCarousel();

    carouselElement.addEventListener('mouseenter', handleMouseEnter);
    carouselElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      stopCarousel();
      carouselElement.removeEventListener('mouseenter', handleMouseEnter);
      carouselElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mentors, width, space]);

  if (!mentors || mentors.length === 0) {
    return null; // Render nothing if mentors are not available or empty
  }

  return (
    <div
      ref={carouselRef}
      className="carousel-mentors mt-[20px] px-0"
      style={{ maxWidth: `${max}px` }}
    >
      <div className="mentors-wrap">
        <ul
          className="mentors-list"
          style={{
            width: `${mentors.length * (Number(width) + Number(space))}px`,
            transform: `translateX(-${activeIndex * (Number(width) + Number(space))}px)`,
            transition: 'transform 500ms ease', // Add a smooth sliding effect
          }}
        >
          {mentors.map((mentor, index) => (
            <li
              key={index}
              data-order={index}
              style={{
                width: `${Number(width) + Number(space)}px`,
                height: `${height}px`,
              }}
            >
              <div className="item" style={{ width: `${width}px` }}>
                <Link href="/StAMP" title={mentor.name}>
                  <Image
                    className="mentorImg"
                    src={mentor.image}
                    alt={mentor.name}
                    width={400}
                    height={200}
                  />
                  <div className="mentorDesc">{mentor.desc}</div>
                </Link>
                {title && <span className="mentorName">{mentor.name}</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {bullets && (
        <div className="mentor-breadcrumbs">
          {mentors.map((_, index) => (
            <div
              key={index}
              className={`bullets ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
