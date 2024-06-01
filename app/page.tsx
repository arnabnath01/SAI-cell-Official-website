
import About from "./about/page";
import Carousel from "./components/Carousel";
import Mentor from "./components/mentors/Mentor";
import Logo from "./components/event/Logo";
import Countdown from "./components/event/CountDown";
import NewsCaraousel from "./components/event/NewsCaraousel";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Carousel />

      <div className="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8  md:items-center">
        <Logo />
        <Countdown
          timeTillDate={"02 06 2024, 06:00 pm"} //"01 04 2024, 08:00 pm"
          timeFormat={"DD MM YYYY, h:mm a"}
        />
        {/* item ready -- need to fix the position */}
        {/* <NewsCaraousel /> */}
      </div>

      <About />
      <Mentor />
    </div>
  );
};

export default Home