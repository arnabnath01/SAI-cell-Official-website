import About from './about/page'
import ClientOnly from './components/ClientOnly'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Mentor from './components/mentors/Mentor'
// import Carousel from './components/mentors/Carousel'
import Navbar from './components/navbar/Navbar'

// import Navbar from './components/UpdatedNavbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SAI CELL | NITD',
  description: 'SAI Cell - CAAIR',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* this client only component fixes the hydration error */}
        <ClientOnly>
          <Header />
          <Navbar />
          {children}
          <Footer />
        </ClientOnly>


      </body>
    </html>
  )
}
