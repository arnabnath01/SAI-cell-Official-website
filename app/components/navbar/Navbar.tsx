'use client'

import Link from 'next/link'

import "@/styles/navbar.css"
import { useCallback, useState } from 'react';
import DesktopView from './DesktopView';
import MobileView from './MobileView';

function Navbar() {

  // to handle the hamburger menu
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };




  return (

    <div>
      <nav className=" border-gray-200 px-2 sm:px-0 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto my-0 "  >
          <Link href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              SAI Cell
            </span>
          </Link>

          {/* =======hamburger button============== */}
          <button
            onClick={handleClick}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-xl md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <DesktopView />
        </div>
      </nav>

  {/*========== MOBILE DROPDOWN ========================= */}
      {isActive && (

        <MobileView />
      )}


    </div>
  );


}

export default Navbar

