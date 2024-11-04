'use client'

import Link from 'next/link'
import { useState } from 'react'

const DesktopView = () => {
  const [onInitiativeHover, setOnInitiativeHover] = useState(false)

  const handleInitiativeHover = () => {
    setOnInitiativeHover(!onInitiativeHover);
  }
  const [onPublicationHover, setOnPublicationHover] = useState(false)

  const handlePublicationHover = () => {
    setOnPublicationHover(!onPublicationHover);
  }

  const handleClick = () => {
    window.open("@/public/ENCORE2020.pdf", '_blank');
  };

  return (
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link
            href="https://nitdgp.ac.in/"
            className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent duration-500 nav-item"
            aria-current="page"
          >
            Institute Home
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent duration-500 nav-item"
          >
            <Link href='/'>  Home</Link>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent duration-500 nav-item"
          >
            <Link href="/about">About SAIC</Link>
          </Link>
        </li>


        {/* ***************INITIATIVES************** */}
        <li>
          <Link
           
            onMouseEnter={()=>setOnInitiativeHover(true)}
            onMouseLeave={()=>setOnInitiativeHover(false)}
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent duration-500 nav-item"
          >
            Initiatives
          </Link>

          {/* ****After clicking initiatives********* */}
          {onInitiativeHover && (
            <div
            onMouseEnter={()=>setOnInitiativeHover(true)}
            onMouseLeave={()=>setOnInitiativeHover(false)}
              className="
                      absolute
                      bg-yellow-400
                      rounded-md
                      shadow-md
                      max-md:w-full
                      overflow-hidden
                      text-sm
                      transition
                      z-10
                      additionals
                      my-0
                      mx-0
                      "
            >
              <div
                className="flex
                        flex-col
                        cursor-pointer
                        items-left
                        w-full
                        additionals
                        pl-5
                        "
              >
                <ul className="w-full">
                  <li className="menuClass border-b-sky-200

                                "><Link href="/StAMP">Student Alumni Mentorship Programme(StAMP)</Link></li>

                  <li className="menuClass border-b-sky-200
                                "><Link href="/AIM">Alumni Internship Mentorship (AIM)</Link></li>
                  <li className="menuClass border-b-sky-200
                                "><Link href="/ARC">Alumni Recruit Connect (ARC)</Link></li>
                  <li className="menuClass border-b-sky-200
                                "><Link href="/comming_soon">NITDian branding</Link></li>
                  <li className="menuClass border-b-sky-200
                                "><Link href="/comming_soon">NITDian brand store</Link></li>
                  <li className="menuClass border-b-sky-200
                                "><Link href="/comming_soon">NITDian campus tour</Link></li>
                  <li className="menuClass border-b-sky-200
                                "><Link href="/comming_soon">Alumni Grand Meet</Link></li>
                  <li className="menuClass border-b-sky-200
                                "><Link href="/comming_soon">Student Alumni Meet</Link></li>
                </ul>


              </div>
            </div>
          )

          }
          

        </li>

        {/* ******PUBLICATION******** */}
        <li>
          <Link
            onMouseEnter={()=>setOnPublicationHover(true)}
            onMouseLeave={()=>setOnPublicationHover(false)}
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent duration-500 nav-item"
          >
            <Link href="#"> Publication  </Link>
          </Link>

          {/* AFTER clicking */}


          {onPublicationHover && (
            <div
            onMouseEnter={()=>setOnPublicationHover(true)}
            onMouseLeave={()=>setOnPublicationHover(false)}
              className="
          absolute
          rounded-md
          shadow-md
          w-[130px]
          overflow-hidden
          block
          text-sm
          transition
          z-11
          additionals
          my-0
          mx-0
          "
            >
              <div
                className="flex
            flex-col
            cursor-pointer
            items-left
            w-full
            additionals
            pl-5
            "
              >
                <ul className="w-full">
                  
                  <li className="menuClass border border-b-sky-200
                  "><Link href="#" onClick={handleClick}>Newsletter</Link>
                  </li>
                  <li className="menuClass border border-b-sky-200
                  "><Link href="/chronicles" >Chronicles</Link>
                  </li>
                  <li className="menuClass border border-b-sky-200 hover:bg-slate-900
                  ">
                    <Link href="#">Year book</Link>
                  </li>


                </ul>


              </div>
            </div>
          )

          }

        </li>

        <li>
          <Link
            href="/team"
            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 md: dark:hover:text-white md:dark:hover:bg-transparent duration-500 nav-item"
          >
            The Team
          </Link>
        </li>
      </ul>
    </div>

  )
}

export default DesktopView
