"use client"

import CountdownClock from "./CountDown"
import Logo from "./Logo"


const page = () => {
  return (
    <div className="md:flex flex-row ">
      <div className="min-md:basis-1/3 text-white bg-black flex flex-col">
       
       <div className="items-center">
        <Logo/>
       </div>
        <div className="">
            <p>#LegacyLinkers</p>
            <p>Fostering Connections, Fuelling Opportunities</p>
        </div>
        
        </div>


        <div className="min-md:basis-1/3">
        <Logo   />
        </div>
        <div className="min-md:basis-1/3">
        <Logo/>
        </div>
    </div>
  )
}

export default page
