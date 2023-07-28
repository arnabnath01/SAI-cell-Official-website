
import About from "./about/page"
import Event from "./components/event/page"
import Carousel from "./components/Carousel"
import Mentor from "./components/mentors/Mentor"

const Home = () => {
  return (
    <div className="">
      <Carousel />
      {/* <Event/> */}
      <About />
      <Mentor />
    </div>
  )

}

export default Home