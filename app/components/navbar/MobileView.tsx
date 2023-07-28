'use client';

import Link from 'next/link';
import { useState } from 'react'
import '@/styles/navbar.css'
const MobileView = () => {


    const [onInitiativeHover, setOnInitiativeHover] = useState(false)

    const handleInitiativeHover = () => {
        setOnInitiativeHover(!onInitiativeHover);
    }
    const [onPublicationHover, setOnPublicationHover] = useState(false)

    const handlePublicationHover = () => {
        setOnPublicationHover(!onPublicationHover);
    }

 
        const handleClick = () => {
          window.open("/ENCORE2020.pdf", '_blank');
        };

    return (
        <div
            className="
          max-md:relative
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
                <ul className="flex 
            flex-col 
            space-x-4
            space-y-3
            " >


                    <li className="text_effect ml-4 nav-item"><Link href="https://alumnitdgp.in/">Home</Link></li>

                    <li className="text_effect nav-item">
                        <Link href="/about">About SAIC </Link>
                    </li>

                    <li className="text_effect nav-item"
                        onClick={handleInitiativeHover}

                    >
                        <Link href="#"

                        >Initiatives </Link>
                    </li>



                    {onInitiativeHover && (
                        <div className="
                        flex
                        flex-col
                        w-1/2
                    bg-black/60 
                    rounded
                    ml-2
                    ">
                            <ul className="w-">
                                <li className="menuClass border-b-sky-200

                                "><Link href="/StAMP">Student Alumni Mentorship Programme (StAMP)</Link></li>

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
                    )

                    }


                    {/* <li className=" ">
      <Link href="#" className=" -toggle" data-toggle=" " role="button" aria-haspopup="true" aria-expanded="false">Events</Link>
      <ul className=" ">
        <li><a  className="menuClass" href=" coming_soon_html.php">Grand Alumni Homecoming</a></li>
        <li><a  className="menuClass" href=" student_alumni_meet_html.php">Student Alumni Meet</a></li>
      </ul>
  </li>
  <li className=" ">
      <Link href="#" className=" -toggle" data-toggle=" " role="button" aria-haspopup="true" aria-expanded="false">Initiatives</Link>
      
  </li> */}




                    <li className="text_effect nav-item">
                        <Link className=""
                            onClick={handlePublicationHover}
                            href="#">Publication </Link>

                        {onPublicationHover && (
                            <div className="
                        flex
                        flex-col
                        w-1/2
                    bg-black/60 
                    rounded
                    ml-2
                    ">
                             <ul className="">
                                    <li className="menuClass border-b-sky-200

                                ">
                                    <Link href="#" onClick={handleClick}>Newsletter</Link>
                                    </li>

                                <li className="menuClass border-b-sky-200
                                "><Link href="#">Year Book</Link>
                                </li>

                             </ul>


                            </div>
                        )

                        }
                    </li>

                    <li className=" text_effect nav-item">
                        <Link className="menuClass" href="/team">The Team</Link>
                    </li>


                </ul>
            </div>
        </div>
    )
}

export default MobileView
