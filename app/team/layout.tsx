
// import Link from 'next/link'
// import Footer from '../components/footer/Footer'
// import Header from '../components/header/Header'
// import Navbar from '../components/navbar/Navbar'

import Link from "next/link";


// export const metadata = {
//     title: 'SAI TEAM',
//     description: 'SAI Cell - CAAIR',
//   }
 
// export default function RootLayout({
//     children,
//   }: {
//     children: React.ReactNode
//   }) {
//     return (
//       <html lang="en">
//         <body className=''>
       
      //   <h1 className="font-medium text-center text-3xl py-5">The Team</h1>
      // <hr />
      // <ul className="flex">
      //   <li className="mr-6">
      //     <Link className="text-blue-500" href="/team/present">
      //       Present Team Member
      //     </Link>
      //   </li>
      //   <li>
      //     <Link className="text-blue-500" href="/team/former">
      //       Former SAIC Member
      //     </Link>
      //   </li>
      // </ul>
//       {children}
//         </body>
//       </html>
//     )
//   }

export const metadata = {
  title: 'SAI TEAM',
  description: 'SAI Cell - CAAIR',
}

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <>
      <main>
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
        {children}
      </main>
      
    </>
  );
}