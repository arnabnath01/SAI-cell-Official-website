'use client'

import Link from "next/link"
import PresentMembers from "./components/PresentMembers"
import FormerMember from "./components/FormerMember"

const page = () => {
  return (
    <div>
      <h1 className="font-medium text-center text-3xl py-5">The Team</h1>
      <hr />
      <ul className="flex">
        <li className="mr-6">
          <Link className="text-blue-500" href="#home">
            Present Team Member
          </Link>
        </li>
        <li>
          <Link className="text-blue-500" href="#menu1">
            Former SAIC Member
          </Link>
        </li>
      </ul>


      {/* present team members */}
      <PresentMembers/>
      {/* Former team members */}
      {/* <FormerMember/> */}

    </div>
  )
}

export default page
