'use client'

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import "@/styles/navbar.css"
    

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(prevState => !prevState);
  };

  const handleDropdownClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.stopPropagation();
    const dropdown = (e.target as HTMLAnchorElement).nextElementSibling;
    if (dropdown) {
      (dropdown as HTMLElement).style.display = (dropdown as HTMLElement).style.display === 'block' ? 'none' : 'block';
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    const navList = navListRef.current;
    if (navList && !navList.contains(e.target as Node)) {
      setIsNavOpen(false);
      const dropdowns = document.querySelectorAll('.navbar-dropdown');
      dropdowns.forEach(dropdown => ((dropdown as HTMLElement).style.display = 'none'));
    }
  };

  const navListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <a href="#!">SAI CELL</a>
        </div>
        <nav>
          <div className="nav-mobile">
            <a id="navbar-toggle" href="#!" onClick={toggleNav}>
              <span></span>
            </a>
          </div>
          <ul className={`nav-list ${isNavOpen ? 'active' : ''}`} ref={navListRef}>
            <li>
              <a href="#!">Institute Home</a>
            </li>
            <li>
              <a href="#!">About SAIC</a>
            </li>
            <li>
              <a href="#!" onClick={handleDropdownClick}>
                Initiatives
              </a>
              <ul className="navbar-dropdown">
                <li className="border-b-sky-200">
                  <Link href="/StAMP">Student Alumni Mentorship Programme (StAMP)</Link>
                </li>
                <li className="border-b-sky-200">
                  <Link href="/AIM">Alumni Internship Mentorship (AIM)</Link>
                </li>
                <li className="border-b-sky-200">
                  <Link href="/ARC">Alumni Recruit Connect (ARC)</Link>
                </li>
                <li className="border-b-sky-200">
                  <Link href="/comming_soon">NITDian branding</Link>
                </li>
                <li className="border-b-sky-200">
                  <Link href="/comming_soon">NITDian brand store</Link>
                </li>
                <li className="border-b-sky-200">
                  <Link href="/comming_soon">NITDian campus tour</Link>
                </li>
                <li className="menuClass border-b-sky-200">
                  <Link href="/comming_soon">Alumni Grand Meet</Link>
                </li>
                <li className="menuClass border-b-sky-200">
                  <Link href="/comming_soon">Student Alumni Meet</Link>
                </li>
              </ul>
            </li>


            <li>
          <Link
            onMouseOver={handleDropdownClick}
            href="/"
            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent duration-500"
          >
            <Link href="/theTeam"> Publication  </Link>
          </Link>

          
              <ul className="w-">
                <li className="menuClass border-b-sky-200

                  "><Link href="#">Newsletter</Link></li>

                <li className="menuClass border-b-sky-200
                                "><Link href="#">Year Book</Link></li>
              </ul> 

        </li>

            <li>
              <a href="#!">The Team</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
