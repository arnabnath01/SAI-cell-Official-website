'use client'
import About from "./about/page"
import Carousel from "./components/Carousel"
import Mentor from "./components/mentors/Mentor"

const Home = () => {
  return (
    <div className="">
      <Carousel />
      <About />
      <Mentor />
    </div>
  )

}

export default Home