
import About from "./about/page"

import Events from "./components/eventMerged/Events"
import Carousel from "./components/Carousel"
import Mentor from "./components/mentors/Mentor"
// import ScrollEffect from "./components/event/ScrollEffect"

const Home = () => {
  return (
    <div className="">
      <Carousel />
      {/* <Events/> */}
      <About />
      <Mentor />
    </div>
  )
}

export default Home