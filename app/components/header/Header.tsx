'use client'

import logo1 from '@/public/logo-pics/logo1.jpg'
import nitLogo from '@/public/logo-pics/nitLogo.jpg'
import Image from 'next/image';
import Link from 'next/link';

import {BsFacebook,BsInstagram,BsLinkedin,BsYoutube} from 'react-icons/bs'


function Header() {
  return (
    <>
      <div className="flex flex-row max-md:flex-col px-28" >
        <center className="basis-1/3 max-md:basis-1">
          <Image src={nitLogo} alt="nitlogo"
          />
        </center>

        <center className="basis-1/3  max-md:basis-1 pt-">
          <Image src={logo1} alt="" />
        </center>
        <center className="basis-1/3  max-md:basis-1 ">
          <ul className="list-inline social-icons mt-2.5 flex flex-row justify-center pb-3" >
            <li className='
            text-base antialiased font-normal  leading-6text-gray-700 bg-transparent
            border
            border-gray-200
            rounded-md py-1
            px-2
            w-8
            h-8 m-1 text-center
            

            '>
              <Link href="https://www.facebook.com/Students-Alumni-Interaction-Cell-NIT-Durgapur-108602344085954/" target="_blank">
                <BsFacebook/>
              </Link>
              </li>
              <li className='
            text-base antialiased font-normal  leading-6text-gray-700 bg-transparent
            border
            border-gray-200
            rounded-md py-1
            px-2
            w-8
            h-8 m-1 text-center
            

            '><Link href="https://www.instagram.com/saicell_nitdgp/" target="_blank"><BsInstagram/></Link></li>
               <li className='
            text-base antialiased font-normal  leading-6text-gray-700 bg-transparent
            border
            border-gray-200
            rounded-md py-1
            px-2
            w-8
            h-8 m-1 text-center
            

            '><Link href="https://www.linkedin.com/company/saicell-nitdgp/" target="_blank"><BsLinkedin/></Link></li>
               <li className='
            text-base antialiased font-normal  leading-6text-gray-700 bg-transparent
            border
            border-gray-200
            rounded-md py-1
            px-2
            w-8
            h-8 m-1 text-center
            

            '><Link href="https://youtube.com/@caairnitdurgapur5366" target="_blank"><BsYoutube/></Link></li>
          </ul>
        </center>
      </div>
    </>
  );
}

export default Header;


