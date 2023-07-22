'use client'

import Link from "next/link";
// 

// const page = () => {
//   return (
//     <div>
//       <PresentMembers />
//     </div>
//   )
// }

// export default page

import PresentMembers from "./components/PresentMembers"
import Layout from "./layout";

export default function HomePage() {
  return (
  <>
          <h1 className="font-medium text-center text-3xl py-5">The Team</h1>
      <hr />
      <ul className="flex">
        <li className="mr-6">
          <Link className="text-blue-500" href="/team/present">
            Present Team Member
          </Link>
        </li>
        <li>
          <Link className="text-blue-500" href="/team/former">
            Former SAIC Member
          </Link>
        </li>
      </ul>
      <PresentMembers/>

  </>);
}

HomePage.getLayout = function getLayout(page:any) {
  return <Layout>{page}
  </Layout>;
};